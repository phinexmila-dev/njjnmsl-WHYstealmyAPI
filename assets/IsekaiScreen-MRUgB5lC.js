import{r as x,j as e}from"./vendor-react-D2fMnCrr.js";import{a as Q,u as Z,e as ee,a6 as te}from"./index-C9Spzmga.js";import{w as C,b8 as ie,o as re,aO as ae,r as ne,b9 as se,X as oe,aT as le,ba as de}from"./vendor-lucide-Bv_0KK-p.js";import"./vendor-dexie-2jmnBxhj.js";import"./vendor-jszip-Bm-qbvBf.js";/* empty css                     */import"./vendor-supabase-B9WqnyDd.js";const ye=()=>{const{currentScreen:T,showScreen:F}=Q(),{t:pe}=Z(),{characters:h}=ee(),{currentProfileUser:ce}=te(),v=T==="isekai-screen",[m,g]=x.useState("portal"),[j,w]=x.useState([]);x.useEffect(()=>{try{const t=JSON.parse(localStorage.getItem("nuojiji_isekai_saves")||"[]");w(t)}catch{w([])}},[v]);const[n,d]=x.useState({id:"",title:"",selectedChars:[],worldTheme:"",playerGoal:"",playerIdentity:"迷失者",charIdentities:{},plotStart:"",messages:[],createdAt:null}),[z,O]=x.useState(""),[L,Y]=x.useState([]),P=t=>{Y(r=>r.includes(t)?r.filter(i=>i!==t):[...r,t])},[k,I]=x.useState(null),[u,E]=x.useState(!1),[S,N]=x.useState(""),[b,y]=x.useState(!1);if(!v)return e.jsx("div",{id:"isekai-screen",className:"screen"});const M=()=>{d({id:Date.now().toString(),title:`次元坐标 ${new Date().toLocaleDateString()}`,selectedChars:[],worldTheme:"赛博朋克 / 无限流",playerGoal:"存活并找到世界核心",playerIdentity:"普通人类",charIdentities:{},plotStart:"",messages:[{id:Date.now(),sender:"system",text:"系统提示：你已进入异世界。",time:new Date().toISOString()}],createdAt:Date.now()}),g("config")},G=t=>{I(t.id),setTimeout(()=>{g("portal"),y(!0),setTimeout(()=>{y(!1),d(t),g("playing"),I(null)},1500)},600)},A=()=>{const t=[n,...j.filter(r=>r.id!==n.id)];w(t),localStorage.setItem("nuojiji_isekai_saves",JSON.stringify(t)),alert("存档已保存")},$=()=>{window.confirm("确定要脱离当前的次元世界吗？结束后本次记忆将作为平行世界的切片发送给角色。")&&(alert("副本脱离成功！角色们收到了一条关于这个世界线的记忆碎片。"),g("portal"))},W=t=>{d(r=>{const i=r.selectedChars.includes(t)?r.selectedChars.filter(s=>s!==t):[...r.selectedChars,t];return{...r,selectedChars:i}})},H=(t,r)=>{d(i=>({...i,charIdentities:{...i.charIdentities,[t]:r}}))},D=()=>{if(!S.trim())return;const t={id:Date.now(),sender:"user",text:S,time:new Date().toISOString()},r={...n,messages:[...n.messages,t]};d(r),N(""),n.selectedChars.length>0&&setTimeout(()=>{const i=n.selectedChars[Math.floor(Math.random()*n.selectedChars.length)],s=h.find(p=>p.id===i),o={id:Date.now(),sender:i,text:`[${(s==null?void 0:s.name)||"神秘人物"}]: 是吗？那我们接下来该怎么做？`,time:new Date().toISOString()};d(p=>({...p,messages:[...p.messages,o]}))},1e3)},X=()=>{y(!0),setTimeout(()=>{y(!1),M()},1500)},_=()=>e.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#04020a",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle at 50% 100%, #2a124c 0%, #04020a 60%)",opacity:.8}}),e.jsx("div",{className:`space-stars ${b?"hyper-drive":""}`}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"40%",background:"linear-gradient(to top, rgba(162,100,230,0.1), transparent)",filter:"blur(30px)",zIndex:1}}),e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,padding:"16px 20px",display:"flex",alignItems:"center",zIndex:50,opacity:b?0:1,transition:"opacity 0.5s"},children:e.jsx("div",{onClick:()=>F("home-screen"),style:{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",color:"#B4A2C4",border:"1px solid rgba(180,162,196,0.2)",cursor:"pointer",backdropFilter:"blur(10px)"},children:e.jsx(C,{size:20})})}),e.jsx("div",{style:{position:"absolute",top:"12%",color:"#E0D4ED",fontSize:"13px",letterSpacing:"14px",textTransform:"uppercase",opacity:b?0:.7,transition:"opacity 0.5s",zIndex:10,textAlign:"center",textShadow:"0 0 20px rgba(162,100,230,0.5)"},children:"ASTROMETRY"}),e.jsxs("div",{style:{marginTop:"20px"},className:`epic-portal-container ${b?"entering":""}`,children:[e.jsx("div",{className:"epic-portal-glow"}),e.jsx("div",{className:"epic-portal-inner",children:e.jsx("div",{className:"epic-portal-swirl"})}),e.jsxs("div",{className:"epic-portal-frame",children:[e.jsx("div",{className:"pillar left-pillar",children:e.jsx("div",{className:"pillar-runes",children:"✧✦✧"})}),e.jsx("div",{className:"pillar right-pillar",children:e.jsx("div",{className:"pillar-runes",children:"✧✦✧"})}),e.jsx("div",{className:"arch-top",children:e.jsx("div",{className:"moon-crest"})})]}),e.jsx("div",{className:"floating-rune",style:{left:"-50px",top:"20%"},children:"✦"}),e.jsx("div",{className:"floating-rune",style:{right:"-60px",top:"40%",animationDelay:"1s"},children:"✧"}),e.jsx("div",{className:"floating-rune",style:{left:"-30px",bottom:"15%",animationDelay:"2s"},children:"✧"})]}),e.jsx("div",{className:`portal-floor ${b?"entering":""}`,children:e.jsx("div",{className:"portal-reflection"})}),e.jsxs("div",{style:{position:"absolute",bottom:"8%",display:"flex",flexDirection:"column",alignItems:"center",gap:"24px",opacity:b?0:1,transition:"all 0.5s",zIndex:10},children:[e.jsx("button",{onClick:X,className:"epic-enter-btn",children:"开启跃迁"}),e.jsxs("div",{style:{display:"flex",gap:"8px",cursor:"pointer",opacity:.6,alignItems:"center"},onClick:()=>g("saves"),className:"epic-sub-btn",children:[e.jsx(ie,{size:16}),e.jsx("span",{style:{fontSize:"13px",letterSpacing:"4px"},children:"时空印记"})]})]}),e.jsx("div",{className:`white-flash ${b?"active":""}`})]}),U=()=>e.jsxs("div",{style:{position:"absolute",inset:0,background:"#0a0514",color:"#fff",overflowY:"auto"},children:[e.jsx("div",{className:"data-stream-bg"}),e.jsxs("div",{style:{padding:"20px",display:"flex",alignItems:"center",gap:"16px",position:"sticky",top:0,background:"rgba(10,5,20,0.85)",backdropFilter:"blur(20px)",zIndex:10,borderBottom:"1px solid rgba(162,100,230,0.15)"},children:[e.jsx("div",{onClick:()=>g("portal"),style:{cursor:"pointer",padding:"8px",margin:"-8px"},children:e.jsx(C,{size:24,color:"#B4A2C4"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("h2",{style:{fontSize:"16px",fontWeight:"500",margin:0,letterSpacing:"4px",color:"#E0D4ED",textShadow:"0 0 10px rgba(162,100,230,0.5)"},children:"时空档案库"}),e.jsx("div",{className:"hex-id-scroll",children:"ARCHIVES // STORED TIMELINES"})]})]}),e.jsx("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px",position:"relative",zIndex:5},children:j.length===0?e.jsxs("div",{style:{textAlign:"center",color:"#666",marginTop:"60px",fontSize:"14px",letterSpacing:"2px"},children:["[ RECORD NOT FOUND ]",e.jsx("br",{}),"暂无世界线记录"]}):j.map(t=>{const r=k===t.id;return e.jsxs("div",{className:`save-card cyber-panel ${r?"loading-save":""}`,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"16px",fontWeight:"500",marginBottom:"8px",color:"#E0D4ED",textShadow:"0 0 10px rgba(162,100,230,0.3)",letterSpacing:"1px"},children:t.title}),e.jsxs("div",{style:{fontSize:"11px",color:"#B4A2C4",display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("div",{style:{width:"4px",height:"4px",background:"#D83375",borderRadius:"50%"}}),t.worldTheme]}),e.jsxs("div",{style:{fontSize:"11px",color:"#B4A2C4",display:"flex",alignItems:"center",gap:"6px",marginTop:"4px"},children:[e.jsx("div",{style:{width:"4px",height:"4px",background:"#56B2FF",borderRadius:"50%"}}),t.playerGoal]})]}),e.jsx("button",{onClick:()=>!k&&G(t),className:"load-save-btn",children:"进入"})]}),e.jsx("div",{style:{display:"flex",gap:"8px",marginTop:"16px",paddingTop:"16px",borderTop:"1px dashed rgba(162,100,230,0.2)"},children:t.selectedChars.map(i=>{const s=h.find(o=>o.id===i);return s?e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",padding:"2px",background:"linear-gradient(45deg, #A264E6, #D83375)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",border:"1px solid #18181B",display:"flex",alignItems:"center",justifyContent:"center",background:"#18181B"},children:s.avatar?e.jsx("img",{src:s.avatar,style:{width:"100%",height:"100%",objectFit:"cover"},alt:s.name}):e.jsx("div",{style:{fontSize:"12px",color:"#A1A1AA"},children:s.name.substring(0,1)})})},i):null})}),r&&e.jsx("div",{className:"save-glitch-overlay"})]},t.id)})}),e.jsx("div",{className:`save-transition-flash ${k?"active":""}`})]}),V=()=>{const t=h.filter(i=>i.name.toLowerCase().includes(z.toLowerCase())),r=n.selectedChars.length>0;return e.jsxs("div",{className:"isekai-config-container",style:{position:"absolute",inset:0,background:"#0a0514",color:"#fff",overflowY:"auto",paddingBottom:"120px",overflowX:"hidden"},children:[e.jsx("div",{className:"data-stream-bg"}),e.jsx("div",{className:"cyber-grid-overlay"}),e.jsxs("div",{style:{padding:"20px",display:"flex",alignItems:"center",gap:"16px",position:"sticky",top:0,background:"rgba(10,5,20,0.85)",backdropFilter:"blur(20px)",zIndex:10,borderBottom:"1px solid rgba(162,100,230,0.15)"},children:[e.jsx("div",{onClick:()=>g("portal"),style:{cursor:"pointer",padding:"8px",margin:"-8px"},children:e.jsx(C,{size:24,color:"#B4A2C4"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("h2",{style:{fontSize:"16px",fontWeight:"500",margin:0,letterSpacing:"4px",color:"#E0D4ED",textShadow:"0 0 10px rgba(162,100,230,0.5)",display:"flex",alignItems:"center",gap:"8px"},children:["构建世界线 ",e.jsx("span",{className:"glitch-status",children:r?"READY":"SYNCING..."})]}),e.jsx("div",{className:"hex-id-scroll",children:"SYS.REQ // CHOOSE YOUR COMPANIONS"})]})]}),e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"28px",position:"relative",zIndex:5},children:[e.jsxs("section",{className:"cyber-panel",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsxs("div",{style:{fontSize:"13px",color:"#B4A2C4",letterSpacing:"2px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"4px",height:"12px",background:"#A264E6"}}),"DIM_SYNC // 次元牵绊"]}),e.jsxs("div",{style:{position:"relative",width:"120px"},children:[e.jsx("input",{value:z,onChange:i=>O(i.target.value),placeholder:"搜索...",style:{width:"100%",background:"rgba(255,255,255,0.05)",color:"#fff",border:"1px solid rgba(255,255,255,0.1)",padding:"6px 12px 6px 30px",borderRadius:"16px",outline:"none",fontSize:"12px",boxSizing:"border-box"}}),e.jsx(re,{size:12,color:"#A1A1AA",style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)"}})]})]}),e.jsx("div",{style:{display:"flex",gap:"16px",overflowX:"auto",paddingBottom:"10px"},className:"hide-scrollbar",children:(()=>{const i=t.filter(a=>a.type!=="npc"),s=t.filter(a=>a.type==="npc"),o=new Set,p=(a,c=!1)=>{const l=n.selectedChars.includes(a.id);return e.jsxs("div",{onClick:()=>W(a.id),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",cursor:"pointer",flexShrink:0,width:c?"48px":"56px"},children:[e.jsx("div",{style:{width:c?"48px":"56px",height:c?"48px":"56px",borderRadius:"50%",padding:"2px",background:l?"linear-gradient(45deg, #A264E6, #D83375, #A264E6)":"transparent",backgroundSize:"200% 200%",animation:l?"pulse-gradient 2s linear infinite":"none",transition:"all 0.3s",boxShadow:l?"0 0 10px rgba(162,100,230,0.4), inset 0 0 5px rgba(255,255,255,0.2)":"none"},children:e.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",background:"#18181B",display:"flex",alignItems:"center",justifyContent:"center",fontSize:c?"16px":"20px",color:"#52525B",border:"1px solid #27272A"},children:[a.avatar?e.jsx("img",{src:a.avatar,style:{width:"100%",height:"100%",objectFit:"cover",filter:l?"none":"opacity(0.6)"},onError:f=>{f.target.style.display="none",f.target.nextSibling.style.display="flex"},alt:""}):null,e.jsx("div",{style:{display:a.avatar?"none":"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"},children:a.name.substring(0,1)})]})}),e.jsx("div",{style:{fontSize:c?"10px":"11px",color:l?"#E4E4E7":"#71717A",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",textAlign:"center"},children:a.name})]},a.id)},q=i.map(a=>{const c=s.filter(l=>{var B;const f=(B=l.relationships)==null?void 0:B.some(K=>String(K.targetId)===String(a.id));return f&&o.add(String(l.id)),f});return{main:a,npcs:c}}),R=s.filter(a=>!o.has(String(a.id)));return e.jsxs(e.Fragment,{children:[q.map(a=>{const c=L.includes(a.main.id),l=a.npcs.length>0;return e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",background:l?"rgba(255,255,255,0.02)":"transparent",borderRadius:"16px",padding:l?"8px":"0",gap:"12px",border:l?"1px dashed rgba(162,100,230,0.2)":"none"},children:[p(a.main),l&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("div",{onClick:()=>P(a.main.id),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"10px",color:"#A264E6",background:"rgba(162,100,230,0.1)",padding:"2px 6px",borderRadius:"8px",opacity:.8,userSelect:"none"},children:c?"⬡ 收起":`⬡ ${a.npcs.length} NPCs`}),c&&e.jsx("div",{style:{display:"flex",gap:"8px",marginTop:"8px",paddingLeft:"8px",borderLeft:"1px dashed rgba(162,100,230,0.3)"},children:a.npcs.map(f=>p(f,!0))})]})]},a.main.id)}),R.length>0&&e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",background:"rgba(255,255,255,0.02)",borderRadius:"16px",padding:"8px",gap:"12px",border:"1px dashed rgba(100,100,100,0.3)"},children:[e.jsx("div",{style:{fontSize:"10px",color:"#71717A",writingMode:"vertical-rl",transform:"rotate(180deg)"},children:"未编队 NPC"}),e.jsx("div",{style:{display:"flex",gap:"8px"},children:R.map(a=>p(a,!0))})]})]})})()})]}),e.jsxs("section",{className:"cyber-panel",style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{fontSize:"13px",color:"#B4A2C4",letterSpacing:"2px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"4px",height:"12px",background:"#D83375"}}),"WORLD RULE // 世界观设定"]}),e.jsxs("button",{onClick:()=>d({...n,worldTheme:"加载世界书设定..."}),style:{background:"rgba(216,51,117,0.1)",border:"1px solid rgba(216,51,117,0.3)",color:"#D83375",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px",cursor:"pointer",padding:"4px 8px",borderRadius:"6px"},children:[e.jsx(ae,{size:12})," 载入世界书"]})]}),e.jsx("textarea",{className:"cyber-input",value:n.worldTheme,onChange:i=>d({...n,worldTheme:i.target.value}),placeholder:"输入世界坐标参数 (如:末日废土，人类建立地下城...)"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{fontSize:"13px",color:"#B4A2C4",letterSpacing:"2px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"4px",height:"12px",background:"#D83375"}}),"OBJECTIVE // 通关目标"]}),e.jsx("textarea",{className:"cyber-input",value:n.playerGoal,onChange:i=>d({...n,playerGoal:i.target.value}),placeholder:"输入主线任务 (如:在荒野存活30天并查明异变原因...)"})]})]}),e.jsxs("section",{className:"cyber-panel",children:[e.jsxs("div",{style:{fontSize:"13px",color:"#B4A2C4",marginBottom:"16px",letterSpacing:"2px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"4px",height:"12px",background:"#56B2FF"}}),"IDENTITIES // 身份烙印"]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"12px 16px",borderRadius:"8px",border:"1px solid rgba(86,178,255,0.2)",display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontSize:"11px",color:"#56B2FF",width:"60px",flexShrink:0},children:"[本我]"}),e.jsx("input",{className:"identity-input",value:n.playerIdentity,onChange:i=>d({...n,playerIdentity:i.target.value}),placeholder:"请输入本我烙印"})]}),n.selectedChars.map(i=>{const s=h.find(o=>o.id===i);return s?e.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"12px 16px",borderRadius:"8px",border:"1px solid rgba(162,100,230,0.2)",display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("div",{style:{fontSize:"11px",color:"#B4A2C4",width:"60px",flexShrink:0,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:["[",s.name,"]"]}),e.jsx("input",{className:"identity-input",value:n.charIdentities[i]||"",onChange:o=>H(i,o.target.value),placeholder:"自由设定身份..."})]},i):null})]})]}),e.jsxs("section",{className:"cyber-panel",children:[e.jsxs("div",{style:{fontSize:"13px",color:"#B4A2C4",marginBottom:"16px",letterSpacing:"2px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"4px",height:"12px",background:"#FFB256"}}),"SPAWN POINT // 降临锚点"]}),e.jsx("textarea",{className:"cyber-input",value:n.plotStart,onChange:i=>d({...n,plotStart:i.target.value}),style:{minHeight:"160px"},placeholder:"请描述降临异世界后的最初视野与场景..."})]})]}),e.jsx("div",{style:{position:"fixed",bottom:0,left:0,right:0,padding:"20px",background:"linear-gradient(transparent, #0a0514 40%)",zIndex:20},children:e.jsx("button",{onClick:()=>{A(),g("playing")},className:`transmission-btn ${r?"transmission-btn-ready":"transmission-btn-disabled"}`,disabled:!r,children:r?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"btn-text",children:"确立坐标_开始跃迁"}),e.jsx("div",{className:"btn-hyper-sweep"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"btn-text",style:{fontSize:"14px"},children:"缺少空间锚点_请召唤同行者"}),e.jsx("div",{className:"btn-scanline"})]})})})]})},J=()=>e.jsxs("div",{style:{position:"absolute",inset:0,background:"#111",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop') center/cover",opacity:.4,filter:"blur(2px)"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(rgba(0,0,0,0.2), #000)"}}),e.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:"40px 20px 20px",display:"flex",justifyContent:"space-between",zIndex:10},children:[e.jsxs("div",{style:{color:"#fff",textShadow:"0 2px 10px rgba(0,0,0,0.8)"},children:[e.jsx("div",{style:{fontSize:"12px",opacity:.7,marginBottom:"4px",letterSpacing:"2px"},children:n.worldTheme}),e.jsxs("div",{style:{fontSize:"18px",fontWeight:"500",letterSpacing:"1px"},children:["目标: ",n.playerGoal]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx("button",{onClick:A,style:{background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.2)",width:"36px",height:"36px",borderRadius:"50%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)"},children:e.jsx(ne,{size:18})}),e.jsx("button",{onClick:$,style:{background:"rgba(255,100,100,0.2)",border:"1px solid rgba(255,100,100,0.4)",width:"36px",height:"36px",borderRadius:"50%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(10px)"},children:e.jsx(se,{size:18})})]})]}),e.jsx("div",{style:{position:"absolute",top:"120px",left:"20px",right:"20px",color:"#fff",opacity:.8,fontSize:"14px",lineHeight:1.6,textShadow:"0 2px 4px #000"},children:n.plotStart}),e.jsx("div",{style:{position:"absolute",bottom:"40px",right:"20px",zIndex:50,width:u?"calc(100% - 40px)":"60px",height:u?"60vh":"60px",borderRadius:u?"24px":"30px",background:"rgba(20,20,25,0.85)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.1)",transition:"all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:u?"0 20px 40px rgba(0,0,0,0.5)":"0 10px 20px rgba(0,0,0,0.3)"},children:u?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{padding:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("div",{style:{display:"flex",margin:"0 4px"},children:n.selectedChars.map((t,r)=>{const i=h.find(s=>s.id===t);return i?e.jsx("img",{src:i.avatar,alt:i.name,style:{width:"24px",height:"24px",borderRadius:"50%",border:"1px solid #141419",marginLeft:r>0?"-10px":0}},t):null})}),e.jsx("span",{style:{color:"#fff",fontSize:"14px",fontWeight:"500"},children:"异界联络"})]}),e.jsx("button",{onClick:()=>E(!1),style:{background:"none",border:"none",color:"#888",cursor:"pointer"},children:e.jsx(oe,{size:20})})]}),e.jsx("div",{style:{flex:1,padding:"16px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"16px"},className:"hide-scrollbar",children:n.messages.map((t,r)=>{const i=t.sender==="user";if(t.sender==="system")return e.jsx("div",{style:{textAlign:"center",fontSize:"12px",color:"#666",margin:"10px 0"},children:t.text},r);const o=i?null:h.find(p=>p.id===t.sender);return e.jsxs("div",{style:{display:"flex",gap:"8px",flexDirection:i?"row-reverse":"row"},children:[!i&&o&&e.jsx("img",{src:o.avatar,alt:"",style:{width:"32px",height:"32px",borderRadius:"50%",flexShrink:0}}),e.jsx("div",{style:{background:i?"#A264E6":"rgba(255,255,255,0.1)",color:"#fff",padding:"10px 14px",borderRadius:"16px",borderTopRightRadius:i?"4px":"16px",borderTopLeftRadius:i?"16px":"4px",fontSize:"14px",lineHeight:1.5,maxWidth:"80%"},children:t.text})]},r)})}),e.jsxs("div",{style:{padding:"12px 16px",background:"rgba(0,0,0,0.2)",display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx("input",{value:S,onChange:t=>N(t.target.value),onKeyPress:t=>t.key==="Enter"&&D(),placeholder:"输入消息...",style:{flex:1,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#fff",padding:"10px 16px",borderRadius:"20px",outline:"none"}}),e.jsx("button",{onClick:D,style:{width:"40px",height:"40px",borderRadius:"50%",background:"#A264E6",border:"none",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:e.jsx(le,{size:18,style:{marginLeft:"2px"}})})]})]}):e.jsx("button",{onClick:()=>E(!0),style:{width:"100%",height:"100%",background:"transparent",border:"none",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:e.jsx(de,{size:24,color:"#A264E6"})})})]});return e.jsxs("div",{id:"isekai-screen",className:`screen ${v?"active":""}`,style:{background:"#050308",position:"absolute",inset:0,overflow:"hidden",touchAction:"none"},children:[m==="portal"&&_(),m==="config"&&V(),m==="saves"&&U(),m==="playing"&&J(),e.jsx("style",{children:`
                /* Stars Background */
                .space-stars {
                    position: absolute; top: -50%; left: -50%; right: -50%; bottom: -50%;
                    background-image: 
                        radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 40px 70px, rgba(200,220,255,0.8), rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 90px 40px, rgba(162,100,230,0.8), rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)),
                        radial-gradient(2px 2px at 160px 120px, rgba(200,220,255,0.6), rgba(0,0,0,0));
                    background-repeat: repeat;
                    background-size: 200px 200px;
                    opacity: 0.3;
                    animation: slow-rotate 100s linear infinite;
                    pointer-events: none;
                }
                .space-stars.hyper-drive {
                    animation: hyper-zoom 1.5s cubic-bezier(0.5, 0, 1, 0.5) forwards;
                }

                /* Epic Portal Structure */
                .epic-portal-container {
                    position: relative;
                    width: 160px;
                    height: 380px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    z-index: 5;
                    transform: translateY(20px);
                }

                /* Base Arch Inner Space */
                .epic-portal-inner {
                    position: absolute;
                    bottom: 0;
                    width: 100px;
                    height: 340px;
                    border-radius: 50px 50px 0 0;
                    background: linear-gradient(180deg, #A264E6 0%, #D2F5FF 60%, #fff 100%);
                    box-shadow: 0 0 40px #A264E6, inset 0 0 20px rgba(255,255,255,0.8);
                    overflow: hidden;
                    transition: all 1.5s cubic-bezier(0.8, 0, 0.2, 1);
                    z-index: 2;
                }

                /* Energy swirl */
                .epic-portal-swirl {
                    position: absolute; inset: -50px;
                    background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.6), transparent 40%);
                    animation: spin 3s linear infinite;
                    mix-blend-mode: overlay;
                }

                /* Frame around the portal */
                .epic-portal-frame {
                    position: absolute;
                    inset: -20px -30px 0 -30px;
                    z-index: 3;
                    pointer-events: none;
                }
                .pillar {
                    position: absolute;
                    bottom: 0;
                    width: 40px;
                    height: 370px;
                    background: linear-gradient(90deg, #0f081c, #312154, #0f081c);
                    border: 1px solid rgba(162, 100, 230, 0.3);
                    border-bottom: none;
                    box-shadow: 0 0 20px rgba(0,0,0,0.8), inset 0 0 10px rgba(162,100,230,0.1);
                    overflow: hidden;
                }
                .pillar-runes {
                    position: absolute; top: 10%; bottom: 10%; width: 100%;
                    color: rgba(162, 100, 230, 0.2); font-size: 10px;
                    writing-mode: vertical-rl; text-align: center; letter-spacing: 20px;
                    animation: float 4s ease-in-out infinite alternate;
                }
                .left-pillar { left: 0; border-radius: 20px 0 0 0; }
                .right-pillar { right: 0; border-radius: 0 20px 0 0; }
                .arch-top {
                    position: absolute;
                    top: 20px; left: 10px; right: 10px;
                    height: 140px;
                    border-radius: 100px 100px 0 0;
                    border: 25px solid #251740;
                    border-bottom: none;
                    box-shadow: inset 0 10px 20px rgba(162,100,230,0.2), 0 -10px 20px rgba(0,0,0,0.8);
                }
                /* Center crescent */
                .moon-crest {
                    position: absolute;
                    top: -45px; left: 50%; transform: translateX(-50%) rotate(45deg);
                    width: 60px; height: 60px;
                    border-radius: 50%;
                    box-shadow: inset 8px 8px 0 #E0D4ED;
                    filter: drop-shadow(0 0 15px rgba(224, 212, 237, 0.8));
                }

                .epic-portal-glow {
                    position: absolute;
                    top: 50%; left: 50%;
                    width: 300px; height: 400px;
                    transform: translate(-50%, -50%);
                    background: radial-gradient(ellipse, rgba(82,45,128,0.5) 0%, transparent 70%);
                    filter: blur(25px);
                    z-index: 1;
                    animation: slow-pulse 4s infinite alternate;
                }

                /* Floor reflection */
                .portal-floor {
                    position: relative;
                    width: 100%;
                    height: 100px;
                    display: flex; justify-content: center;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    background: linear-gradient(180deg, rgba(82,45,128,0.1) 0%, transparent 100%);
                    z-index: 2;
                }
                .portal-reflection {
                    width: 180px; height: 80px;
                    background: radial-gradient(ellipse, rgba(162,100,230,0.6) 0%, transparent 70%);
                    margin-top: -10px;
                    border-radius: 50%;
                    filter: blur(15px);
                    transition: all 1.5s;
                }

                /* Entering Animation */
                .epic-portal-container.entering .epic-portal-inner {
                    transform: scale(25);
                    border-radius: 0;
                    background: #fff;
                    opacity: 1;
                    box-shadow: 0 0 400px #fff;
                    z-index: 100;
                }
                .portal-floor.entering .portal-reflection {
                    transform: scale(4);
                    opacity: 0;
                }
                .white-flash {
                    position: absolute; inset: 0;
                    background: #fff;
                    opacity: 0;
                    pointer-events: none;
                    z-index: 200;
                }
                .white-flash.active {
                    animation: flash 1.5s forwards;
                }

                /* Buttons */
                .epic-enter-btn {
                    background: transparent;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 500;
                    letter-spacing: 10px;
                    padding: 16px 40px 16px 50px;
                    border: 1px solid rgba(162, 100, 230, 0.4);
                    border-radius: 40px;
                    cursor: pointer;
                    text-shadow: 0 0 10px rgba(162, 100, 230, 0.8);
                    box-shadow: 0 0 20px rgba(162, 100, 230, 0.1), inset 0 0 15px rgba(162, 100, 230, 0.1);
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    backdrop-filter: blur(10px);
                }
                .epic-enter-btn:hover {
                    background: rgba(162, 100, 230, 0.2);
                    box-shadow: 0 0 40px rgba(162, 100, 230, 0.5), inset 0 0 20px rgba(162, 100, 230, 0.4);
                    transform: translateY(-2px);
                    border-color: rgba(162, 100, 230, 0.8);
                }
                .epic-sub-btn {
                    transition: all 0.3s;
                    color: #B4A2C4;
                    padding: 8px 16px;
                    border-radius: 20px;
                }
                .epic-sub-btn:hover {
                    opacity: 1 !important;
                    color: #fff;
                    background: rgba(255,255,255,0.05);
                }

                /* Hide Scrollbars */
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

                /* Generic Animations */
                @keyframes slow-rotate { 100% { transform: rotate(360deg); } }
                @keyframes hyper-zoom { 100% { transform: scale(5) rotate(15deg); opacity: 0; } }
                @keyframes spin { 100% { transform: rotate(360deg); } }
                @keyframes slow-pulse { 0% { opacity: 0.6; } 100% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); } }
                @keyframes flash {
                    0% { opacity: 0; }
                    80% { opacity: 1; }
                    100% { opacity: 1; }
                }
                .floating-rune {
                    position: absolute;
                    color: rgba(162, 100, 230, 0.8);
                    font-size: 14px;
                    animation: float-rune 4s ease-in-out infinite;
                    text-shadow: 0 0 10px rgba(162,100,230,1);
                }
                @keyframes float-rune {
                    0%, 100% { transform: translateY(0); opacity: 0.5; }
                    50% { transform: translateY(-15px); opacity: 1; }
                }

                /* Isekai Config Form Effects */
                .data-stream-bg {
                    position: fixed; inset: 0; pointer-events: none; z-index: 0;
                    background-image: linear-gradient(rgba(162,100,230,0.03) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(162,100,230,0.03) 1px, transparent 1px);
                    background-size: 30px 30px;
                    opacity: 0.8;
                }
                .data-stream-bg::after {
                    content: '';
                    position: absolute; inset: 0;
                    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(10,5,20,0.5) 3px, rgba(10,5,20,0.5) 6px);
                    animation: scanline-bg 15s linear infinite;
                    opacity: 0.5;
                }
                .cyber-grid-overlay {
                    position: fixed; inset: 0; pointer-events: none; z-index: 0;
                    background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(10,5,20,0.9) 100%);
                }
                @keyframes scanline-bg {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 100vh; }
                }
                
                .glitch-status {
                    font-size: 10px;
                    padding: 2px 6px;
                    border-radius: 4px;
                    background: rgba(162,100,230,0.2);
                    border: 1px solid rgba(162,100,230,0.5);
                    color: #D8C6E6;
                    animation: pulse-op 2s infinite;
                }
                @keyframes pulse-op { 0%,100% {opacity:0.6;} 50% {opacity:1;} }

                .hex-id-scroll {
                    font-size: 9px;
                    color: #71717A;
                    font-family: monospace;
                    letter-spacing: 2px;
                    white-space: nowrap;
                    overflow: hidden;
                    width: 100%;
                }

                /* Transmission Button Elements */
                .transmission-btn {
                    width: 100%; height: 56px; border-radius: 28px;
                    border: none; font-size: 15px; font-weight: 500;
                    letter-spacing: 2px; cursor: pointer;
                    position: relative; overflow: hidden;
                    display: flex; align-items: center; justify-content: center;
                    outline: none;
                    transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
                .transmission-btn:active {
                    transform: scale(0.96);
                }
                .btn-text { position: relative; z-index: 2; text-shadow: 0 1px 4px rgba(0,0,0,0.5); }
                
                .transmission-btn-disabled {
                    background: repeating-linear-gradient(
                        -45deg,
                        rgba(30, 20, 50, 0.6),
                        rgba(30, 20, 50, 0.6) 15px,
                        rgba(40, 25, 70, 0.6) 15px,
                        rgba(40, 25, 70, 0.6) 30px
                    );
                    animation: shift-stripes 3s linear infinite;
                    border: 1px solid rgba(100, 60, 150, 0.3);
                    color: #A1A1AA;
                    box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
                }
                .btn-scanline {
                    position: absolute; left: 0; right: 0; top: -50%; height: 100%;
                    background: linear-gradient(to bottom, transparent, rgba(162,100,230,0.3), transparent);
                    animation: btn-scan 3s linear infinite;
                    pointer-events: none;
                }
                
                .transmission-btn-ready {
                    background: linear-gradient(90deg, #A264E6, #D83375, #A264E6);
                    background-size: 200% auto;
                    color: #fff;
                    animation: pulse-gradient 3s linear infinite, glow-pulse 2s ease-in-out infinite;
                    border: 1px solid rgba(216, 180, 254, 0.6);
                }
                .btn-hyper-sweep {
                    position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
                    transform: skewX(-20deg);
                    animation: hyper-sweep 2.5s infinite;
                    pointer-events: none;
                }

                @keyframes shift-stripes {
                    0% { background-position: 0 0; }
                    100% { background-position: 60px 0; }
                }
                @keyframes btn-scan {
                    0% { top: -100%; }
                    100% { top: 100%; }
                }
                @keyframes pulse-gradient {
                    0% { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes glow-pulse {
                    0%, 100% { box-shadow: 0 0 15px rgba(162, 100, 230, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.3); }
                    50% { box-shadow: 0 0 30px rgba(216, 51, 117, 0.8), inset 0 0 25px rgba(255, 255, 255, 0.5); }
                }
                @keyframes hyper-sweep {
                    0% { left: -100%; }
                    20% { left: 200%; }
                    100% { left: 200%; }
                }

                /* Cyber Panels & Inputs */
                .cyber-panel {
                    background: rgba(15, 10, 25, 0.4);
                    border: 1px solid rgba(162, 100, 230, 0.15);
                    border-radius: 12px;
                    padding: 16px;
                    position: relative;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
                }
                .cyber-input {
                    width: 100%; background: rgba(0,0,0,0.3); color: #E0D4ED;
                    border: 1px solid rgba(162,100,230,0.2); padding: 16px; border-radius: 8px;
                    outline: none; font-size: 13px; box-sizing: border-box; margin-top: 4px;
                    min-height: 100px; resize: vertical; transition: all 0.3s;
                    font-family: inherit; line-height: 1.6;
                }
                .cyber-input:focus {
                    border-color: rgba(162,100,230,0.6) !important;
                    background: rgba(162,100,230,0.05);
                    box-shadow: 0 0 10px rgba(162,100,230,0.1);
                }
                .identity-input {
                    flex: 1; background: transparent; color: #E4E4E7; border: none;
                    border-bottom: 1px dashed #3F3F46; padding: 4px 0; outline: none;
                    font-size: 14px; transition: all 0.3s;
                }
                .identity-input:focus {
                    border-bottom-color: #A264E6 !important;
                }

                /* Save Card & Transitions */
                .save-card {
                    transition: all 0.3s;
                    overflow: hidden;
                }
                .save-card:hover {
                    box-shadow: 0 0 30px rgba(162,100,230,0.2), inset 0 0 20px rgba(162,100,230,0.1);
                    transform: translateY(-2px);
                }
                .load-save-btn {
                    background: rgba(162,100,230,0.2); border: 1px solid rgba(162,100,230,0.4); 
                    color: #D8C6E6; padding: 6px 16px; border-radius: 20px; font-size: 13px; cursor: pointer;
                    transition: all 0.3s; letter-spacing: 2px; outline: none;
                }
                .load-save-btn:hover {
                    background: rgba(162,100,230,0.5);
                    color: #fff;
                    box-shadow: 0 0 10px rgba(162,100,230,0.5);
                }
                .loading-save {
                    animation: card-glitch 1.2s forwards;
                    pointer-events: none;
                }
                .save-glitch-overlay {
                    position: absolute; inset: 0; background: rgba(162,100,230,0.3);
                    mix-blend-mode: overlay; z-index: 10;
                    animation: scanline-glitch 0.2s infinite;
                }
                .save-transition-flash {
                    position: fixed; inset: 0; background: #fff; opacity: 0;
                    pointer-events: none; z-index: 100;
                }
                .save-transition-flash.active {
                    animation: full-flash 1.2s forwards;
                }
                
                @keyframes card-glitch {
                    0% { transform: scale(1); filter: contrast(1); }
                    20% { transform: scale(1.02) skewX(2deg); filter: contrast(2) hue-rotate(90deg); }
                    40% { transform: scale(0.98) skewX(-2deg); filter: contrast(3) hue-rotate(-90deg); opacity: 0.8; }
                    60% { transform: scale(1.05); opacity: 0.5; filter: blur(5px); }
                    100% { transform: scale(0.8); opacity: 0; filter: blur(10px); }
                }
                @keyframes scanline-glitch {
                    0% { background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(162,100,230,0.5) 3px, rgba(162,100,230,0.5) 4px); }
                    100% { background: repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(216,51,117,0.5) 5px, rgba(216,51,117,0.5) 6px); }
                }
                @keyframes full-flash {
                    0% { opacity: 0; }
                    80% { opacity: 1; }
                    100% { opacity: 1; }
                }
            `})]})};export{ye as default};
