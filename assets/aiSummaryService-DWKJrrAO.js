import{N as te,Q as ce}from"./index-C9Spzmga.js";import"./vendor-react-D2fMnCrr.js";import"./vendor-dexie-2jmnBxhj.js";import"./vendor-lucide-Bv_0KK-p.js";import"./vendor-jszip-Bm-qbvBf.js";/* empty css                     */import"./vendor-supabase-B9WqnyDd.js";const le=12e4,ue=(e="")=>/timed out|timeout|abort/i.test(String(e)),ie=(e,c=le)=>{const o=String((e==null?void 0:e.message)||e||"").trim();return ue(o)?`请求超时（${Math.round(c/1e3)} 秒）。总结内容较长时可能需要更久，请重试，或缩小总结消息范围后再试。`:/empty response/i.test(o)?"AI 返回了空内容，未能生成有效总结。请重试一次。":/API settings not configured/i.test(o)?"API 尚未配置完整，请先检查 API 地址、密钥和模型设置。":o||"未知错误"},re=(e,c,o,g,u=!1)=>e.map((n,f)=>{const d=c+f+1,i=n.sender==="me"?g:o;let s="";if(n.isVoice&&n.voiceText?s=n.voiceText:n.locationData?s=`[分享了位置: ${n.locationData.name}]`:n.transferData?s=`[转账 ${n.transferData.amount} 元${n.transferData.status==="rejected"?"(已拒收)":""}]`:n.giftData?s=`[送出了${n.giftData.name}]`:n.type==="combined_history"?s="[转发了聊天记录]":n.image?s=n.text?`[发送图片] ${n.text}`:"[发送了图片]":n.sticker?s=`[发送了表情包: ${n.text||"表情"}]`:n.isHtml||(s=n.text||""),s&&!n.isHtml){let r="";if(u){const a=`${n.date||""} ${n.time||""}`.trim();a&&(r=`[${a}] `)}return`${r}#${d} ${i}: ${s}`}return""}).filter(n=>n).join(`
`),ne=e=>e==="male"?{pronoun:"他",possessive:"他的"}:e==="female"?{pronoun:"她",possessive:"她的"}:{pronoun:"TA",possessive:"TA的"},se=({conversationText:e,characterName:c,currentUserName:o,characterGender:g="",userGender:u="",userPersona:n="",userToCharRelationship:f="",charToUserRelationship:d="",startIndex:i,endIndex:s,messageCount:r,existingSummaryCount:a=0,timeAware:t=!1,customWordCount:M=null,dateRange:y=null,customSummaryInstructions:I="",coupleSpaceEnabled:v=!1,coupleSpaceImageCandidates:p=[]})=>{const S=a>0?`这是第 ${a+1} 次总结。`:"这是第一次总结。";let m=M||"100-150",x="";if(y&&(y.start||y.end)){const k=y.start||"",D=y.end||"";!D||k===D?x=`

❗ 日期要求：本批对话发生于 **${k}**。必须在总结中自然提及日期，例如“${k}，${c}和${o}...”。`:x=`

❗ 日期要求：本批对话时间跨度为 **${k}** 到 **${D}**。必须在总结中自然展现时间线，例如“${k}，${c}和${o}做了...”、“到了${D}...”。`}else t&&(x=`

❗ 日期要求：请从对话内容中提取具体日期，并在总结中自然展现时间跨度与日期节点。`);const L=t?`
6. 时间感知：必须将对话中出现的具体日期自然融入叙述，让读者知道事件发生时间。`:"",F=ne(g),J=ne(u),X=`

**⚠️ 人称代词规定（必须严格遵守）：**
- ${c} → 请始终使用「${F.pronoun}」/「${F.possessive}」
- ${o} → 请始终使用「${J.pronoun}」/「${J.possessive}」
- 绝对不允许搞错两人的性别代词`,P=(I==null?void 0:I.trim())||"",T=/第一人[稱称]|first\s*person|以我的?視角|以我的?视角|用我的?口吻|以「?我」/i.test(P);let K;T?K=`1. 视角要求：使用第一人称叙述。「我」= **${o}**（使用者本人），「${c}」是对话中的另一方角色。绝对不要把两人身份搞反。`:K=`1. 视角要求：使用第三人称叙述（"${c}与${o}..."）`;const H=P?`

**❗ 使用者自訂總結要求（必須遵守，若與上方預設規則衝突則以此為準）：**
${P}`:"";return`你是对话分析和总结专家。请分析以下对话记录，并提取出精简且连贯的摘要。

**⚠️ 身份對照表（貫穿全文，絕對不可搞混）：**
- **${o}**：使用者本人（對話中 sender 為「${o}」的一方）
- **${c}**：對話角色（對話中 sender 為「${c}」的一方）

**总结规则：**
${K}
2. 细节提炼：优先提取核心信息、关键话题、情感转折、重要决定和特殊事件。在严格的字数限制内，高度精简或省略次要细节，不能像流水账；
3. 去粗取精：必须省略纯粹的无意义寒暄，仅保留真正体现角色性格或对剧情有意义的关键互动；
4. 逻辑清晰：将相关的事件按时间或逻辑顺序组织，高度概括合并相似的琐碎话题；
5. 重点提取：地点、承诺、计划、人物关系的重大变化等必须予以保留。${L}${X}${x}${H}

**对话记录（消息 ${i}-${s}，共${r}条）：**
${e}

**⚠️ 关键注意事项：**
${S}
- 你只需要总结上面提供的这 ${r} 条新消息（第 ${i} 到第 ${s} 条）
- ${a>0?`之前的 ${a} 次总结已经处理了更早的消息，你不需要再次总结那些内容`:""}
- 绝对不要重复总结之前已经总结过的内容
- 不要试图总结或概括之前的总结记录
- 只专注于这 ${r} 条新消息本身

**输出要求：**
请严格控制本次总结的字数在 **${m} 字左右**。段落划分清晰，高度概括，直接输出最后提炼的摘要，绝对不要带有任何前言、后语和格式化的套话。

**⚠️ 最后一行必须输出关键词：**
总结正文结束后，换行输出一行关键词，格式严格如下：
[关键词: 词1, 词2, 词3, ...]
- 提取 5-8 个关键词/短语，包括：人名、地名、重要事件、物品、情绪转折、数字金额等${t?`
- 必须包含对话中出现的日期/时间信息（如"3月1日"、"周五晚上"等）`:""}
- 每个关键词 2-6 字，不要写句子
- 关键词用于未来记忆检索，必须是具体的、有辨识度的词${v?(()=>{const k=new Date().toISOString(),D=p.length>0?`
可用图片（填 imageRef 时使用对应 ID）：
`+p.map(_=>`  ${_.id}：${_.date?`[${_.date}] `:""}${_.imageSummary||"(无描述)"}`).join(`
`):`
（本段对话无可用图片，imageRef 一律填 null）`,W=String(n||"").trim().slice(0,600),V=W?`「${o}」的人设/简介（必须用这个人的语气和性格写日记）：${W}`:`「${o}」无人设资料，请用一个温柔/有点心动的恋爱中人物的第一人称口吻写。`,Y=String(f||"").trim().slice(0,200),O=String(d||"").trim().slice(0,200),E=[];Y&&E.push(`- 「${o}」眼中的「${c}」：${Y}`),O&&E.push(`- 「${c}」眼中的「${o}」：${O}`);const N=E.length>0?`

**两人关系（必须严格遵守，决定日记口吻和称呼）：**
${E.join(`
`)}
（例如关系是「未婚夫/婚约者」就要带点既亲密又有未来感；是「青梅竹马」就要带点习以为常的撒娇；是「单恋/暗恋」就要写心动但不敢说出口；是「冤家/欢喜冤家」就要写嘴硬心软。绝不可写成毫无背景的普通情侣。）`:"";return`

**⚠️ 情侣空间（恋爱路程·第一人称日记）额外输出：**
在关键词行之后，再换行输出恋爱路程 JSON（**单行紧凑 JSON，禁止换行**），格式严格如下：
[恋爱路程: [{"date":"ISO8601带时区","content":"内容","tag":"TAG","imageRef":"img_N或null","reply":"引用原文或null","replyFrom":"user|char|null"},...]]

**身份与口吻：**
- 「我」= **${o}**（这本日记的主人 / 使用者本人）
- 「${c}」= 我的恋爱对象，在日记里用「他」/「她」/「你」称呼，**禁止**用第三人称小说式叙事
- ${V}${N}

**写作规则：**
- 生成 1-4 条，时间由旧到新，覆盖本段对话最有意义的情感瞬间
- date：从对话内容中推断，参考当前时间 ${k}；格式 ISO8601 带时区偏移（如 +08:00）
- content：**第一人称私密日记短句 25-60 字**，必须用「我」开头或带有「我」的视角，写得像恋爱中的人偷偷在日记本上写下的心声
  - ✅ 正确范例：「今天他突然送了我一个小礼物，笑着说是奖励，心都化了。」
  - ✅ 正确范例：「他又叫我笨蛋，可是语气那么温柔，到底是谁被吃得死死的啊。」
  - ❌ 错误范例：「面对突如其来的索礼，他露出宠溺的笑容...」（这是小说旁白，不是日记）
  - ❌ 错误范例：「在灯光暧昧的套房里，他松开领带...」（这是剧本旁白，不是日记）
- 语气：温柔、亲密、带点撒娇/害羞/悸动，要让使用者读到时会想起当时的心动
- 必须贴合「${o}」的人设性格（害羞就写害羞反应，毒舌就写嘴硬心软，冷淡就写冰山裂缝）
- tag：milestone（重要里程碑）/ daily（日常温情）/ dating（约会）/ travel（旅行）/ festival（节日）/ first（初次体验）/ conflict（冲突）/ reconcile（和好）
- imageRef：若有匹配图片填图片 ID，否则填 null${D}
- reply：引用对话中一句有代表性的原文（10字以内），优先选「${c}」说过的甜句，没有合适的填 null
- replyFrom：reply 来自谁（user 或 char），没有填 null
- 整行必须是合法紧凑单行 JSON，不得出现换行

**⚠️ Story Achievement (OPTIONAL — only when a truly memorable milestone appears in this batch):**
After the love journey line, output achievement JSON on a new line (**single-line compact JSON, no linebreaks**), format:
[劇情成就: [{"title":"4-8 char poetic title","desc":"brief description of what happened","color":"bronze|silver|gold|diamond","icon":"icon_name"},...]]
- ONLY output when a genuine emotional milestone occurs (first kiss, confession, reconciliation, major promise, secret revealed, new nickname, overcoming a challenge together, etc.)
- Most summaries should NOT produce achievements (~20% at most). Routine chat is NOT an achievement.
- color: bronze=sweet small moment, silver=meaningful milestone, gold=major turning point, diamond=once-in-a-lifetime
- icon: heart/star/crown/diamond/flame/compass/eye/zap/sparkles/rocket/award/book/camera/gift/music/sun/moon/shield/sword/anchor/feather/gem/ring/kiss/umbrella/rainbow/butterfly/rose/snowflake/thunder/hourglass/key/mirror/puzzle/potion/scroll/lantern/crystal/clover/wish/halo
- title: poetic, evocative, written in the conversation's language
- Max 1-2 entries, do NOT spam
- If no memorable milestone in this batch, do NOT output this line`})():""}`},ae=async({apiUrl:e,apiKey:c,model:o,prompt:g})=>{console.log("🌐 [API Call: Auto-Summary] 调用总结 API — 此调用消耗额外 API 额度"),console.log(`📦 使用模型: ${o||"未指定，将使用默认"}`);try{const u=await ce({messages:[{role:"system",content:"你是对话总结专家，擅长将长对话整理为结构清晰、保留丰富细节的详细摘要，不会遗漏重要情节。"},{role:"user",content:g}],settings:{mainApiUrl:e,mainApiKey:c,mainApiModel:o,temperature:.3},preferStreaming:!1});if(!u||!u.trim())throw new Error("API request failed: AI returned empty response.");return u}catch(u){throw new Error(ie(u,le))}},Z=(e,c,o=0,g="after")=>{if(c==null||!Array.isArray(e)||e.length===0)return Math.min(Math.max(0,o),(e==null?void 0:e.length)||0);const u=String(c),n=e.findIndex(d=>String(d.id)===u);if(n!==-1)return n;const f=Number(c);if(!isNaN(f)){let d=e.length;for(let i=0;i<e.length;i++){const s=Number(e[i].id);if(!isNaN(s)&&s>f){d=i;break}}return g==="before"?Math.max(0,d-1):Math.min(d,e.length)}return Math.min(Math.max(0,o),e.length)},fe=async({messages:e,summaryHistory:c,characterName:o,currentUserName:g,characterGender:u="",userGender:n="",userPersona:f="",userToCharRelationship:d="",charToUserRelationship:i="",lastSummarizedIndex:s,apiSettings:r,customStartIndex:a=null,customEndIndex:t=null,timeAware:M=!1,customWordCount:y=null,customSummaryInstructions:I="",coupleSpaceEnabled:v=!1})=>{var E,N,_,q,ee;console.log("📝 开始总结流程:"),console.log(`   当前消息总数: ${e.length}`),console.log(`   上次总结位置 (传入): ${s}`),console.log(`   总结历史记录: ${c.length} 条`),(a!==null||t!==null)&&console.log(`   🎯 自定义范围: 消息 ${a||1} 到 ${t||e.length}`);let p,S;if(a!==null&&t!==null)p=Math.max(0,Math.min(a-1,e.length-1)),S=Math.max(p+1,Math.min(t,e.length)),console.log(`   ✓ 使用自定义范围: 数组索引 ${p} 到 ${S}`);else{const $=Array.isArray(c)?c.filter(l=>(l==null?void 0:l.source)!=="tm"&&(l==null?void 0:l.source)!=="group"&&!(l!=null&&l.syncedFromAlt)&&!(l!=null&&l.messagesDeleted)):[];if($.length>0){let l=$[0];for(let A=1;A<$.length;A++)typeof((E=$[A])==null?void 0:E.lastMessageIndex)=="number"&&$[A].lastMessageIndex>((l==null?void 0:l.lastMessageIndex)||0)&&(l=$[A]);let h=(l==null?void 0:l.lastMessageIndex)||0;const w=e.length>=h;if((l==null?void 0:l.endMessageId)!=null&&w){const A=Z(e,l.endMessageId,h,"after"),C=A<e.length&&String((N=e[A])==null?void 0:N.id)===String(l.endMessageId)?A+1:A;C>=e.length&&h<e.length?console.warn(`   ⚠️ ID 解析结果 (${C}) >= messages.length (${e.length})，保留原值 ${h} 防止误跳过`):C!==h&&(console.log(`   ID-based resolution: endMessageId=${l.endMessageId} -> exclusive ${C} (was ${h})`),h=C)}else(l==null?void 0:l.endMessageId)!=null&&!w&&console.log(`   ⏭️ 跳過 ID 解析：messages.length(${e.length}) < expectedLastIndex(${h})，消息陣列不完整`);if(console.log(`   最大总结记录的 lastMessageIndex: ${h}`),s!==h&&(console.warn("⚠️ 检测到索引不一致！"),console.warn(`   传入值: ${s}`),console.warn(`   最大记录值: ${h}`),console.warn("   已强制使用最大记录值，防止重复总结"),s=h),s>=e.length)return console.warn(`⚠️ 检测到重复总结风险：lastSummarizedIndex(${s}) >= messages.length(${e.length})，跳过总结`),console.warn(`   原始 maxEntry.lastMessageIndex: ${l==null?void 0:l.lastMessageIndex}`),console.warn(`   endMessageId: ${l==null?void 0:l.endMessageId}`),console.warn(`   最后一条消息 ID: ${(_=e[e.length-1])==null?void 0:_.id}`),{skipped:!0,reason:"没有新消息需要总结，所有消息已被总结过。"}}p=Math.min(Math.max(0,s),e.length),S=e.length,p!==s&&console.warn(`⚠️ lastSummarizedIndex (${s}) 异常，已调整为 ${p}`)}const m=e.slice(p,S),x=((q=m[0])==null?void 0:q.id)??null,L=((ee=m[m.length-1])==null?void 0:ee.id)??null;console.log(`   ✓ 实际总结范围: 消息 ${p+1} 到 ${S}`),console.log(`   ✓ 本次需要总结: ${m.length} 条消息`);const F=a!==null||t!==null?1:6;if(m.length<F)return console.log(`[generateSummary] 消息太少，无需总结（需要至少${F}条消息）`),{skipped:!0,reason:`消息太少，需要至少 ${F} 条未总结的新消息。
当前只有 ${m.length} 条新消息。`};const J=500;if(a===null&&t===null&&m.length>J)return console.warn(`[generateSummary] 待总结消息 (${m.length}) 超过自动总结上限 (${J})，请使用手动总结并指定范围`),{skipped:!0,reason:`待总结消息（${m.length} 条）超过自动总结上限（${J} 条），请使用「自定义范围总结」。`};const X=re(m,p,o,g,M),P=$=>{if(!$)return null;if($.date)return $.time?`${$.date} ${$.time}`:$.date;if($.timestamp){const l=new Date($.timestamp);if(!isNaN(l.getTime())){const h=l.getMonth()+1,w=l.getDate(),A=String(l.getHours()).padStart(2,"0"),j=String(l.getMinutes()).padStart(2,"0");return`${h}月${w}日 ${A}:${j}`}}return null};let T=null;if(m.length>0){let $=null,l=null;for(let h=0;h<m.length;h++){const w=P(m[h]);if(w){$=w;break}}for(let h=m.length-1;h>=0;h--){const w=P(m[h]);if(w){l=w;break}}($||l)&&(T={start:$||l,end:l||$})}let K=y||(typeof window<"u"?window._tempCustomWordCount:null);typeof window<"u"&&window._tempCustomWordCount&&delete window._tempCustomWordCount;const H=new Map,k=[];if(v){let $=0;for(const l of m){if(!l.image)continue;$++;const h=`img_${$}`,w=P(l)||"",A=String(l.imageSummary||l.simulatedImageContent||l.text||"").slice(0,120);k.push({id:h,date:w,imageSummary:A}),H.set(h,l.image)}}const D=se({conversationText:X,characterName:o,currentUserName:g,characterGender:u,userGender:n,userPersona:f,userToCharRelationship:d,charToUserRelationship:i,startIndex:p+1,endIndex:S,messageCount:m.length,existingSummaryCount:c.length,timeAware:M,customWordCount:K,dateRange:T,customSummaryInstructions:I,coupleSpaceEnabled:v,coupleSpaceImageCandidates:k}),{mainApiUrl:W,mainApiKey:V,mainApiModel:Y}=r;if(!W||!V)throw console.error("❌ API settings not configured"),new Error("API settings not configured");const O=await ae({apiUrl:W,apiKey:V,model:Y,prompt:D});if(O){let $=O,l=null,h=null;if(v){const B=pe(O);h=B.achievementEntries.length>0?B.achievementEntries:null,$=B.cleanedText||O,h&&console.log(`   🏆 劇情成就 (${h.length} 條): ${h.map(z=>z.title).join(" / ")}`);const b=$e($,H);l=b.loveJourneyEntries.length>0?b.loveJourneyEntries:null,$=b.cleanedText||$,l&&console.log(`   💑 恋爱路程 (${l.length} 条): ${l.map(z=>z.content).join(" / ")}`)}const w=U($),A=w.summaryText||$.trim(),j=w.keywords.length>0?w.keywords:Q(A);if(T){const B=[T.start,T.end].filter(Boolean);for(const b of B)b&&!j.some(z=>z.includes(b)||b.includes(z))&&j.push(b)}console.log(`   🔑 關鍵字 (${w.keywords.length>0?"AI":"本地"}): [${j.join(", ")}]`);const C={id:Date.now(),date:new Date().toLocaleString("zh-TW"),summary:A,startMessageIndex:p,lastMessageIndex:S,startMessageId:x,endMessageId:L,messageCount:m.length,dateRange:T||null,source:"online",keywords:j,loveJourneyEntries:l||null,achievementEntries:h||null,customRange:a!==null||t!==null?{start:p+1,end:S}:null};return console.log("✅ 总结完成！"),console.log(`   总结范围: 第 ${p+1}-${S} 条消息`),console.log(`   总结数量: ${m.length} 条新消息`),console.log(`   更新后 lastMessageIndex: ${S}`),C}return{skipped:!0,reason:"AI 返回了空内容，未能生成有效总结。请重试一次。"}},de=({messages:e,summaryHistory:c,frequency:o,totalMessageCount:g})=>{var s;if(o<=0||e.length===0)return!1;let u=0,n=null;if(Array.isArray(c)&&c.length>0)for(let r=0;r<c.length;r++){const a=c[r];(a==null?void 0:a.source)==="tm"||(a==null?void 0:a.source)==="group"||a!=null&&a.syncedFromAlt||a!=null&&a.messagesDeleted||(a==null?void 0:a.lastMessageIndex)!=null&&typeof a.lastMessageIndex=="number"&&a.lastMessageIndex>u&&(u=a.lastMessageIndex,n=a)}if((n==null?void 0:n.endMessageId)!=null){const r=String(n.endMessageId),a=e.findIndex(t=>String(t.id)===r);if(a!==-1){const t=e.length-a-1;return console.log(`[shouldAutoSummarize] ID精確匹配: endMessageId在位置${a}/${e.length}, 之後有${t}條新消息, 閾值${o}`),t>=o?(console.log("[shouldAutoSummarize] ✅ 觸發自動總結！"),!0):(console.log(`[shouldAutoSummarize] ⏳ 未達閾值，還差 ${o-t} 條`),!1)}}const f=g&&g>e.length?g:e.length,d=!!(g&&g>e.length);if((n==null?void 0:n.endMessageId)!=null&&!d){const r=Z(e,n.endMessageId,u,"after"),t=r<e.length&&String((s=e[r])==null?void 0:s.id)===String(n.endMessageId)?r+1:r;t>=f&&u<f?console.warn(`[shouldAutoSummarize] ⚠️ ID 解析结果 (${t}) >= effectiveTotal (${f})，保留原值 ${u}`):t!==u&&(console.log(`[shouldAutoSummarize] ID-based resolution: ${u} -> ${t}`),u=t)}u=Math.min(u,f);const i=f-u;return console.log(`[shouldAutoSummarize] 檢測(回退): 已加載${e.length}條, 總數${f}條, 上次位置${u}, 新增${i}, 閾值${o}${d?" [分頁中]":""}`),i>=o?(console.log("[shouldAutoSummarize] ✅ 觸發自動總結！"),!0):(console.log(`[shouldAutoSummarize] ⏳ 未達閾值，還差 ${o-i} 條`),!1)},ge=async({summaries:e,characterName:c,currentUserName:o,apiSettings:g,timeAware:u=!1,customSummaryInstructions:n=""})=>{const{mainApiUrl:f,mainApiKey:d,mainApiModel:i}=g;if(!f||!d)throw new Error("API settings not configured");const s=e.map((x,L)=>`总结 ${L+1}:
${x}`).join(`

`),r=u?"请注意总结中涉及的时间或日期连贯性。":"",a=(n==null?void 0:n.trim())||"",M=/第一人[稱称]|first\s*person|以我的?視角|以我的?视角|用我的?口吻|以「?我」/i.test(a)?`1. 视角要求：使用第一人称叙述。「我」= **${o}**（使用者本人），「${c}」是对话中的另一方角色。绝对不要把两人身份搞反。`:`1. 视角要求：使用第三人称叙述（"${c}与${o}..."）`,y=a?`

**❗ 使用者自訂總結要求（必須遵守，若與上方預設規則衝突則以此為準）：**
${a}`:"",I=`你是对话分析和总结专家。以下是多段零散的对话总结，请将它们统合成一个连贯、宏大的总体摘要（大总结）。

**大总结规则：**
${M}
2. 内容统合：将这些细碎的总结合并成长期的故事脉络，提取出核心剧情、人物关系的长期变化、重大事件和深远影响。
3. 结构连贯：不要机械地罗列，要将这多段经历融合为一篇流畅的概述文章。
4. 去粗取精：去除那些只在某一阶段重要但在总体剧情中不再重要的琐碎细节。
${r}${y}

**需要统合的小总结列表：**
${s}

**输出要求：**
直接输出最终的大摘要，不要带任何前言、后语。
在最后一行附上关键词，格式为：[关键词: 词1, 词2, 词3, ...]（5-8个，每个2-15字，涵盖核心人物、事件、地点等）`,v=await ae({apiUrl:f,apiKey:d,model:i,prompt:I}),p=U(v),S=p.summaryText||(v==null?void 0:v.trim())||"",m=p.keywords.length>0?p.keywords:Q(S);return console.log(`   🔑 大總結關鍵字 (${p.keywords.length>0?"AI":"本地"}): [${m.join(", ")}]`),{text:S,keywords:m}},he=new Set(["first","daily","milestone","dating","travel","festival","conflict","reconcile"]);function $e(e,c=new Map){if(!e)return{cleanedText:"",loveJourneyEntries:[]};const o=/\[(?:恋爱路程|戀愛路程|恋爱旅程|lovejourney)\s*[:：]\s*/i,g=e.match(o);if(!g)return{cleanedText:e,loveJourneyEntries:[]};const u=g.index,n=u+g[0].length;if(e[n]!=="[")return{cleanedText:e,loveJourneyEntries:[]};let f=0,d=-1;for(let t=n;t<e.length;t++)if(e[t]==="[")f++;else if(e[t]==="]"&&(f--,f===0)){d=t;break}if(d===-1)return{cleanedText:e,loveJourneyEntries:[]};const i=e.slice(n,d+1),s=(e.slice(0,u)+e.slice(d+1)).replace(/\]\s*$/,"").trim();let r;try{r=JSON.parse(i),Array.isArray(r)||(r=[])}catch{return{cleanedText:e,loveJourneyEntries:[]}}const a=r.filter(t=>t&&typeof t=="object"&&t.content).slice(0,6).map((t,M)=>{const y=typeof t.imageRef=="string"&&t.imageRef!=="null"?t.imageRef.trim():null,I=y&&c.get(y)||null,v=he.has(t.tag)?t.tag:"daily",p=t.replyFrom==="user"||t.replyFrom==="char"?t.replyFrom:"char",S=typeof t.reply=="string"&&t.reply!=="null"?t.reply.trim():null;return{date:me(t.date,M),content:String(t.content||"").slice(0,120),tag:v,images:I?[I]:[],reply:S||null,replyFrom:S?p:null}}).filter(t=>t.content);return{cleanedText:s,loveJourneyEntries:a}}function me(e,c=0){if(!e)return new Date(Date.now()+c*1e3).toISOString();try{const o=new Date(e);if(!isNaN(o.getTime()))return o.toISOString()}catch{}return new Date(Date.now()+c*1e3).toISOString()}function pe(e){if(!e)return{cleanedText:"",achievementEntries:[]};const c=/\[(?:劇情成就|剧情成就|storyachievement)\s*[:：]\s*/i,o=e.match(c);if(!o)return{cleanedText:e,achievementEntries:[]};const g=o.index,u=g+o[0].length;if(e[u]!=="[")return{cleanedText:e,achievementEntries:[]};let n=0,f=-1;for(let t=u;t<e.length;t++)if(e[t]==="[")n++;else if(e[t]==="]"&&(n--,n===0)){f=t;break}if(f===-1)return{cleanedText:e,achievementEntries:[]};const d=e.slice(u,f+1),i=(e.slice(0,g)+e.slice(f+1)).replace(/\]\s*$/,"").trim();let s;try{s=JSON.parse(d),Array.isArray(s)||(s=[])}catch{return{cleanedText:e,achievementEntries:[]}}const r=new Set(["bronze","silver","gold","diamond"]),a=s.filter(t=>t&&typeof t=="object"&&t.title).slice(0,3).map(t=>({id:`story_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,title:String(t.title||"").slice(0,20),desc:String(t.desc||"").slice(0,80),color:r.has(t.color)?t.color:"bronze",icon:t.icon||"star",date:new Date().toISOString(),source:"summary"}));return{cleanedText:i,achievementEntries:a}}function U(e){if(!e)return{summaryText:"",keywords:[]};const c=/\n?\[(?:关键词|關鍵詞|关键字|關鍵字|keywords?)\s*[:：]\s*(.+?)\]\s*$/i,o=e.match(c);if(!o)return{summaryText:e.trim(),keywords:[]};const g=e.slice(0,o.index).trim(),n=o[1].split(/[,，、;；]+/).map(f=>f.trim().replace(/^["'「」《》]+|["'「」《》]+$/g,"")).filter(f=>f.length>=1&&f.length<=15).slice(0,10);return{summaryText:g,keywords:n}}const G=new Set(["他們","她們","我們","你們","自己","大家","彼此","對方","其他","所有","可以","已經","可能","應該","需要","希望","認為","覺得","表示","表達","開始","繼續","進行","嘗試","打算","決定","成為","出現","發生","導致","提到","提及","涉及","關於","包括","根據","通過","經過","隨後","最終","一些","這些","那些","各種","更加","非常","特別","比較","相當","十分","但是","因為","所以","雖然","然而","並且","或者","而且","不過","同時","之後","之前","之間","以及","以後","以來","其中","對此","為了","至此","時候","期間","一天","今天","當天","當時","最後","最近","後來","一個","這個","那個","什麼","如何","這樣","那樣","一起","一直","方面","情況","問題","事情","方式","過程","結果","部分","方向","感到","感覺","知道","了解","發現","看到","聽到","做出","給予"]),R=new Set("以在則也卻就又並且對把被從向和與了的得地著過去來到做說看聽想借送買賣吃喝打找拿叫問請讓給"),oe=new Set("的了在和與及或是被把從對向讓請將給由於以則又也就都還卻才剛很太更最們");function Q(e){if(!e)return[];const c=new Map,o=(i,s)=>{if(!i||i.length<2||i.length>10||G.has(i))return;let r=i;for(;r.length>2&&R.has(r[r.length-1]);)r=r.slice(0,-1);if(!(r.length<2||G.has(r))){for(;r.length>2&&R.has(r[0]);)r=r.slice(1);r.length<2||G.has(r)||c.set(r,(c.get(r)||0)+s)}};for(const i of e.match(/《([^》]{1,15})》/g)||[])o(i.replace(/[《》]/g,""),10);for(const i of e.match(/「([^」]{1,10})」/g)||[])o(i.replace(/[「」]/g,""),8);for(const i of e.match(/[\d,]+(?:\.\d+)?[萬千百億元塊條個次份杯瓶]/g)||[])o(i,7);const g=e.split(/[。！？\n]+/).filter(i=>i.trim()),u=new Map;for(let i=0;i<g.length;i++){const r=g[i].match(/[\u4e00-\u9fff\u3400-\u4dbf]+/g)||[];for(const a of r)for(let t=2;t<=4;t++)for(let M=0;M<=a.length-t;M++){const y=a.slice(M,M+t);G.has(y)||t>=3&&[...y.slice(1,-1)].some(v=>oe.has(v))||(u.has(y)||u.set(y,new Set),u.get(y).add(i))}}for(const[i,s]of u)s.size>=2&&o(i,4+s.size*2);for(const i of g){const r=i.replace(/^[\s，、]+/,"").match(/^([\u4e00-\u9fff\u3400-\u4dbf]{2,5})/);if(!r)continue;const a=r[1];for(let t=Math.min(4,a.length);t>=2;t--){const M=a.slice(0,t);if(!G.has(M)&&!R.has(M[M.length-1])&&!(t>=3&&[...M.slice(1,-1)].some(y=>oe.has(y)))){o(M,5);break}}}const n=e.split(/[，。！？、；：\s\n「」《》（）()【】\[\]""'']+/);for(const i of n){if(!i)continue;const s=i.replace(/[^\u4e00-\u9fff\u3400-\u4dbf]/g,"");s.length>=2&&s.length<=4&&o(s,2)}const f=Array.from(c.entries()).sort((i,s)=>s[1]-i[1]),d=[];for(const[i]of f){if(d.some(r=>r.length>i.length&&r.includes(i)))continue;const s=d.findIndex(r=>r.length<i.length&&i.includes(r));if(s>=0?d[s]=i:d.push(i),d.length>=8)break}return d}async function ye(e,c,o=!1,g=null){var u;try{const n=await te.get(e,c).catch(()=>null);if(!(n!=null&&n.summaryHistory))return;let f=!1;for(const d of n.summaryHistory)g&&d.source!==g||!o&&((u=d.keywords)==null?void 0:u.length)>0||(d.keywords=Q(d.summary||d.content||""),f=!0);f&&(await te.put(e,c,n),console.log(`[Keywords] ${o?"重新生成":"補充"}完成: ${e}×${c}, ${n.summaryHistory.length} 條`))}catch(n){console.error("[Keywords] backfill 失敗:",n)}}const xe={generateSummary:fe,generateBigSummary:ge,buildSummaryPrompt:se,shouldAutoSummarize:de,formatConversationForSummary:re,normalizeSummaryErrorMessage:ie,parseAIKeywords:U,extractKeywordsFromSummary:Q,backfillKeywords:ye,resolveMessageIndex:Z};export{ye as backfillKeywords,se as buildSummaryPrompt,xe as default,Q as extractKeywordsFromSummary,re as formatConversationForSummary,ge as generateBigSummary,fe as generateSummary,ie as normalizeSummaryErrorMessage,U as parseAIKeywords,pe as parseAchievementEntriesFromResponse,$e as parseLoveJourneyEntriesFromResponse,Z as resolveMessageIndex,de as shouldAutoSummarize};
