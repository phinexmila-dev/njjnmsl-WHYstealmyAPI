// Custom Service Worker Handlers
// Injected via Workbox importScripts

// 🔧 允許客戶端在 chunk 加載失敗時強制激活新 SW
self.addEventListener('message', (event) => {
    if (event.data?.type === 'SKIP_WAITING') {
        self.skipWaiting()
    }
})

// ============ /assets/* 三層 fallback：cache → network → R2 ============
// 背景：原本 functions/assets/[asset].js 攔截所有 /assets/*，每次訪問載 30+ 個檔案
//      會把 Cloudflare Workers free quota（100k/天）打爆。
//
// 新策略：
//   1) /assets/* 由 Pages CDN 直送（_routes.json 已排除走 Functions）
//   2) SW 在這裡接管：先試 caches.match（命中 workbox 預緩存）→ 再試 network
//      → 失敗時才打 /r2-fallback/<原路徑> 走 R2 備援
//   3) 因此正常流量幾乎不會碰到 R2 function，quota 消耗回到接近 0
//
// 註冊順序：importScripts 先於 workbox 自身的 fetch handler 執行，
//          所以本 handler 先取得處理權，會 respondWith 接管 /assets/*。
//          其他 URL 直接 return 不接管，留給 workbox 處理。
self.addEventListener('fetch', (event) => {
    const request = event.request
    if (request.method !== 'GET') return

    let url
    try {
        url = new URL(request.url)
    } catch (_e) {
        return
    }

    if (url.origin !== self.location.origin) return
    if (!url.pathname.startsWith('/assets/')) return

    event.respondWith((async () => {
        // 1) 先試 cache（含 workbox 預緩存的 hash 化檔案）
        try {
            const cached = await caches.match(request)
            if (cached) return cached
        } catch (_e) {
            // cache API 異常 → 繼續嘗試網路
        }

        // 2) 試網路（Pages CDN 直送）
        let networkError = null
        let networkRespForFallback = null
        try {
            const networkResp = await fetch(request)
            if (networkResp && networkResp.ok) {
                // 🔧 完整性校驗：大陸 GFW / 運營商代理層有時截斷響應體
                // Content-Length 存在但實際 body 長度不符 → 視為失敗，走 R2 fallback
                const contentLength = networkResp.headers.get('content-length')
                if (contentLength && parseInt(contentLength, 10) > 0) {
                    const expectedLen = parseInt(contentLength, 10)
                    const cloned = networkResp.clone()
                    try {
                        // 5 秒超時：弱網環境下 arrayBuffer() 可能卡住，超時就直接返回
                        const buf = await Promise.race([
                            cloned.arrayBuffer(),
                            new Promise((_, reject) =>
                                setTimeout(() => reject(new Error('timeout')), 5000)
                            )
                        ])
                        if (buf.byteLength < expectedLen) {
                            console.warn('[SW] 響應被截斷:', url.pathname,
                                `expected=${expectedLen} actual=${buf.byteLength}`)
                            networkError = `truncated: ${buf.byteLength}/${expectedLen}`
                        } else {
                            return networkResp
                        }
                    } catch (_e) {
                        if (_e?.message === 'timeout') {
                            // 超時 → 不確定是否截斷，直接返回原始響應讓瀏覽器處理
                            return networkResp
                        }
                        // arrayBuffer() 拋錯（連線中斷等）→ 保留原始響應作為 fallback 備選
                        networkError = 'body read error: ' + (_e?.message || 'unknown')
                        networkRespForFallback = networkResp
                    }
                } else {
                    return networkResp
                }
            } else {
                // 4xx/5xx → 視為失敗，走 R2 fallback
                networkError = `HTTP ${networkResp?.status || 'unknown'}`
            }
        } catch (e) {
            networkError = e?.message || 'network error'
        }

        // 3) R2 fallback — 只在前兩層都失敗時才跑
        try {
            const fallbackUrl = `${url.origin}/r2-fallback${url.pathname}`
            console.warn('[SW] /assets 失敗 → 嘗試 R2 備援:', url.pathname, '|', networkError)
            const r2Resp = await fetch(fallbackUrl)
            if (r2Resp && r2Resp.ok) {
                console.log('[SW] R2 備援命中:', url.pathname)
                return r2Resp
            }
            console.error('[SW] R2 備援也失敗:', url.pathname, 'status:', r2Resp?.status)
            return r2Resp
        } catch (e) {
            console.error('[SW] R2 備援拋錯:', url.pathname, e)
            // 全部失敗 — 回 503，client 端的 chunk-load 偵測會接手清緩存重載
            return new Response('', {
                status: 503,
                statusText: 'asset unavailable',
                headers: { 'content-type': 'text/plain' },
            })
        }
    })())
})

function buildNotificationTargetUrl({ charId, userId, groupId }) {
    const scopeUrl = new URL(self.registration?.scope || '/', self.location.origin);

    if (groupId) {
        scopeUrl.searchParams.set('openGroup', String(groupId));
        if (userId) {
            scopeUrl.searchParams.set('openGroupUser', String(userId));
        }
    } else if (charId) {
        scopeUrl.searchParams.set('openChat', String(charId));
        if (userId) {
            scopeUrl.searchParams.set('openChatUser', String(userId));
        }
    }

    return scopeUrl;
}

function isAppWindow(client) {
    try {
        const clientUrl = new URL(client.url);
        const scopeUrl = new URL(self.registration?.scope || '/', self.location.origin);
        return clientUrl.origin === scopeUrl.origin && clientUrl.pathname.startsWith(scopeUrl.pathname);
    } catch (_error) {
        return true;
    }
}

async function focusAndDispatch(client, payload) {
    try {
        await client.focus();
    } catch (_error) {
        // Ignore focus failures and still try to dispatch the open request.
    }

    // Worker 產生的消息 → 通知客戶端同步
    if (payload.fromWorker) {
        client.postMessage({ type: 'SYNC_WORKER_MESSAGES', userId: payload.userId, messageId: payload.messageId });
    }

    if (payload.groupId) {
        client.postMessage({ type: 'OPEN_GROUP_CHAT', groupId: payload.groupId, userId: payload.userId });
    } else if (payload.charId) {
        client.postMessage({ type: 'OPEN_CHAT', charId: payload.charId, userId: payload.userId });
    }
}

// Handle notification click: focus app and open the correct chat
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    const charId = event.notification.data?.charId;
    const userId = event.notification.data?.userId;
    const groupId = event.notification.data?.groupId;
    const fromWorker = event.notification.data?.fromWorker;
    const messageId = event.notification.data?.messageId;
    const targetUrl = buildNotificationTargetUrl({ charId, userId, groupId });

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(async (clientList) => {
            const appClients = clientList.filter(isAppWindow);
            const visibleClient = appClients.find(client => client.visibilityState === 'visible' || client.focused);

            if (visibleClient) {
                await focusAndDispatch(visibleClient, { charId, userId, groupId, fromWorker, messageId });
                return;
            }

            const hiddenClient = appClients[0];
            if (hiddenClient) {
                // 先嘗試 focus — 若 client 已被系統回收（Android 低記憶體），focus 會拋錯
                let focusSucceeded = false;
                try {
                    await hiddenClient.focus();
                    focusSucceeded = true;
                } catch (_error) {
                    // client 已死，後續 fall through 到 openWindow
                }

                if (focusSucceeded) {
                    // Worker 產生的消息 → 通知客戶端同步
                    if (fromWorker) {
                        hiddenClient.postMessage({ type: 'SYNC_WORKER_MESSAGES', userId, messageId });
                    }
                    // client 還活著，直接 postMessage 讓 SPA 內部導航（避免 navigate 整頁重載）
                    if (groupId) {
                        hiddenClient.postMessage({ type: 'OPEN_GROUP_CHAT', groupId, userId });
                    } else if (charId) {
                        hiddenClient.postMessage({ type: 'OPEN_CHAT', charId, userId });
                    }
                    return;
                }
                // focus 失敗 → client 已死，fall through 到 openWindow
            }

            if (clients.openWindow) {
                return clients.openWindow(targetUrl.href);
            }
        })
    );
});

// Handle incoming Web Push events from Cloudflare Worker
self.addEventListener('push', (event) => {
    console.log('[SW push] 收到推送事件', event.data ? '有 payload' : '無 payload');

    let data = {};
    try {
        data = event.data ? event.data.json() : {};
    } catch (_e) {
        data = { title: '糯嘰機', body: event.data?.text() || '新消息' };
    }

    console.log('[SW push] payload:', JSON.stringify(data).substring(0, 200));

    const isAlarm = !!data.alarmId;
    const title = data.title || '糯嘰機';
    const options = {
        body: data.body || '新消息',
        icon: data.avatar || '/pwa-512x512.png',
        badge: '/pwa-512x512.png',
        tag: isAlarm ? `alarm-${data.alarmId}` : `worker-${Date.now()}`,
        vibrate: [200, 100, 200],
        // 鬧鐘通知不自動消失，需要用戶手動關閉
        requireInteraction: isAlarm,
        data: {
            charId: data.charId,
            userId: data.userId,
            messageId: data.messageId,
            groupId: data.groupId,
            fromWorker: true,
        },
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
            .then(() => console.log('[SW push] showNotification 成功:', title))
            .catch((err) => {
                console.error('[SW push] showNotification 失敗:', err);
                // 最後手段：顯示一個最簡單的通知，確保用戶至少看到東西
                return self.registration.showNotification('糯嘰機', { body: data.body || '新消息' });
            })
    );
});

// 訂閱過期/刷新時，自動向 Worker 註冊新的訂閱
self.addEventListener('pushsubscriptionchange', (event) => {
    console.log('[SW] pushsubscriptionchange 觸發');

    event.waitUntil((async () => {
        try {
            const newSub = await self.registration.pushManager.subscribe(
                event.oldSubscription.options
            );
            console.log('[SW] 新訂閱已建立:', newSub.endpoint.substring(0, 60));

            // 將 ArrayBuffer 轉為 base64url 字串
            function toBase64url(buffer) {
                return btoa(String.fromCharCode(...new Uint8Array(buffer)))
                    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
            }

            const res = await fetch('/api/push/resubscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    oldEndpoint: event.oldSubscription.endpoint,
                    newSubscription: {
                        endpoint: newSub.endpoint,
                        keys: {
                            p256dh: toBase64url(newSub.getKey('p256dh')),
                            auth: toBase64url(newSub.getKey('auth')),
                        }
                    }
                }),
            });
            console.log('[SW] 訂閱更新回應:', res.status);
        } catch (err) {
            console.error('[SW] pushsubscriptionchange 處理失敗:', err);
        }
    })());
});

// Handle notification dismiss (optional, for future analytics)
self.addEventListener('notificationclose', (event) => {
    // Currently no-op
});
