const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-oHqDvi6P.js","assets/web-BPZ8wtEZ.js","assets/index-DaaYFcil.js","assets/index-Bqf2373j.js","assets/region-CpO8_1cj.js","assets/index-qsYQwpRV.css","assets/(region)-DtQE_Qhx.js","assets/slot-AqX-MzD6.js","assets/PageTitle-Dr12xWYd.js","assets/preload-helper-C9euoRAu.js","assets/(region)-LBxLAz9T.css","assets/_slot_-DXJ9zMmX.js","assets/SlotThumbnail-Bcojeirm.js"])))=>i.map(i=>d[i]);
import{c as H,a as P,b as p,g as J,u as K,S as U,o as Z,d as G,e as X,f as B,s as k,h as Y,i as R,m as _,j as W,t as w,l as Q,k as ee,E as te,r as ne}from"./web-BPZ8wtEZ.js";import{_ as A}from"./preload-helper-C9euoRAu.js";import{g as re}from"./region-CpO8_1cj.js";import{c as oe,a as ae,R as se,s as D,g as ie,b as le,d as ce,m as ue,k as de,e as fe,f as he,n as pe,h as me}from"./slot-AqX-MzD6.js";import{M as ge,T as we}from"./index-DaaYFcil.js";const L="Invariant Violation",{setPrototypeOf:be=function(e,t){return e.__proto__=t,e}}=Object;class T extends Error{framesToPop=1;name=L;constructor(t=L){super(typeof t=="number"?`${L}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),be(this,T.prototype)}}function S(e,t){if(!e)throw new T(t)}const Ee=/^[A-Za-z]:\//;function $e(e=""){return e&&e.replace(/\\/g,"/").replace(Ee,t=>t.toUpperCase())}const ve=/^[/\\]{2}/,ye=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Re=/^[A-Za-z]:$/,_e=function(e){if(e.length===0)return".";e=$e(e);const t=e.match(ve),n=C(e),r=e[e.length-1]==="/";return e=Ae(e,!n),e.length===0?n?"/":r?"./":".":(r&&(e+="/"),Re.test(e)&&(e+="/"),t?n?`//${e}`:`//./${e}`:n&&!C(e)?`/${e}`:e)},z=function(...e){if(e.length===0)return".";let t;for(const n of e)n&&n.length>0&&(t===void 0?t=n:t+=`/${n}`);return t===void 0?".":_e(t.replace(/\/\/+/g,"/"))};function Ae(e,t){let n="",r=0,o=-1,a=0,l=null;for(let s=0;s<=e.length;++s){if(s<e.length)l=e[s];else{if(l==="/")break;l="/"}if(l==="/"){if(!(o===s-1||a===1))if(a===2){if(n.length<2||r!==2||n[n.length-1]!=="."||n[n.length-2]!=="."){if(n.length>2){const f=n.lastIndexOf("/");f===-1?(n="",r=0):(n=n.slice(0,f),r=n.length-1-n.lastIndexOf("/")),o=s,a=0;continue}else if(n.length>0){n="",r=0,o=s,a=0;continue}}t&&(n+=n.length>0?"/..":"..",r=2)}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,a=0}else l==="."&&a!==-1?++a:a=-1}return n}const C=function(e){return ye.test(e)};function Pe(e){return`virtual:${e}`}function ke(e){return e.handler?.endsWith(".html")?C(e.handler)?e.handler:z(e.root,e.handler):`$vinxi/handler/${e.name}`}const Le=new Proxy({},{get(e,t){return S(typeof t=="string","Bundler name should be a string"),{name:t,type:"client",handler:Pe(ke({name:t})),baseURL:"/studiobrowser/_build",chunks:new Proxy({},{get(n,r){S(typeof r=="string","Chunk expected");let o=z("/studiobrowser/_build",r+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(n,r){S(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return import(o)},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=Le;const Se=e=>t=>{const{base:n}=t,r=H(()=>t.children),o=P(()=>oe(r(),t.base||""));let a;const l=ae(e,o,()=>a,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),p(se.Provider,{value:l,get children(){return p(Ce,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[P(()=>(a=J())&&null),p(Te,{routerState:l,get branches(){return o()}})]}})}})};function Ce(e){const t=e.routerState.location,n=e.routerState.params,r=P(()=>e.preload&&K(()=>{D(!0),e.preload({params:n,location:t,intent:ie()||"initial"}),D(!1)}));return p(U,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>p(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Te(e){const t=[];let n;const r=P(Z(e.routerState.matches,(o,a,l)=>{let s=a&&o.length===a.length;const f=[];for(let i=0,m=o.length;i<m;i++){const g=a&&a[i],b=o[i];l&&g&&b.route.key===g.route.key?f[i]=l[i]:(s=!1,t[i]&&t[i](),G(E=>{t[i]=E,f[i]=ce(e.routerState,f[i-1]||e.routerState.base,O(()=>r()[i+1]),()=>e.routerState.matches()[i])}))}return t.splice(o.length).forEach(i=>i()),l&&s?l:(n=f[0],f)}));return O(()=>r()&&n)()}const O=e=>()=>p(U,{get when(){return e()},keyed:!0,children:t=>p(le.Provider,{value:t,get children(){return t.outlet()}})});function xe([e,t],n,r){return[e,r?o=>t(r(o)):t]}function Ne(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=xe(X(n(e.get()),{equals:(o,a)=>o.value===a.value&&o.state===a.state}),void 0,o=>(!t&&e.set(o),k.registry&&!k.done&&(k.done=!0),o));return e.init&&B(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Se({signal:r,create:e.create,utils:e.utils})}function Ie(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function De(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Oe=new Map;function Me(e=!0,t=!1,n="/_server",r){return o=>{const a=o.base.path(),l=o.navigatorFactory(o.base);let s={};function f(c){return c.namespaceURI==="http://www.w3.org/2000/svg"}function i(c){if(c.defaultPrevented||c.button!==0||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)return;const u=c.composedPath().find(I=>I instanceof Node&&I.nodeName.toUpperCase()==="A");if(!u||t&&!u.hasAttribute("link"))return;const h=f(u),d=h?u.href.baseVal:u.href;if((h?u.target.baseVal:u.target)||!d&&!u.hasAttribute("state"))return;const v=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||v&&v.includes("external"))return;const y=h?new URL(d,document.baseURI):new URL(d);if(!(y.origin!==window.location.origin||a&&y.pathname&&!y.pathname.toLowerCase().startsWith(a.toLowerCase())))return[u,y]}function m(c){const u=i(c);if(!u)return;const[h,d]=u,N=o.parsePath(d.pathname+d.search+d.hash),v=h.getAttribute("state");c.preventDefault(),l(N,{resolve:!1,replace:h.hasAttribute("replace"),scroll:!h.hasAttribute("noscroll"),state:v?JSON.parse(v):void 0})}function g(c){const u=i(c);if(!u)return;const[h,d]=u;typeof r=="function"&&(d.pathname=r(d.pathname)),s[d.pathname]||o.preloadRoute(d,{preloadData:h.getAttribute("preload")!=="false"})}function b(c){const u=i(c);if(!u)return;const[h,d]=u;typeof r=="function"&&(d.pathname=r(d.pathname)),!s[d.pathname]&&(s[d.pathname]=setTimeout(()=>{o.preloadRoute(d,{preloadData:h.getAttribute("preload")!=="false"}),delete s[d.pathname]},200))}function E(c){const u=i(c);if(!u)return;const[,h]=u;typeof r=="function"&&(h.pathname=r(h.pathname)),s[h.pathname]&&(clearTimeout(s[h.pathname]),delete s[h.pathname])}function x(c){if(c.defaultPrevented)return;let u=c.submitter&&c.submitter.hasAttribute("formaction")?c.submitter.getAttribute("formaction"):c.target.getAttribute("action");if(!u)return;if(!u.startsWith("https://action/")){const d=new URL(u,ue);if(u=o.parsePath(d.pathname+d.search),!u.startsWith(n))return}if(c.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const h=Oe.get(u);if(h){c.preventDefault();const d=new FormData(c.target,c.submitter);h.call({r:o,f:c.target},c.target.enctype==="multipart/form-data"?d:new URLSearchParams(d))}}Y(["click","submit"]),document.addEventListener("click",m),e&&(document.addEventListener("mouseover",b),document.addEventListener("mouseout",E),document.addEventListener("focusin",g),document.addEventListener("touchstart",g)),document.addEventListener("submit",x),B(()=>{document.removeEventListener("click",m),e&&(document.removeEventListener("mouseover",b),document.removeEventListener("mouseout",E),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",x)})}}function Fe(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},n=he();return Ne({get:t,set({value:r,replace:o,scroll:a,state:l}){o?window.history.replaceState(de(l),"",r):window.history.pushState(l,"",r),De(decodeURIComponent(window.location.hash.slice(1)),a),fe()},init:r=>Ie(window,"popstate",pe(r,o=>{if(o&&o<0)return!n.confirm(o);{const a=t();return!n.confirm(a.value,{state:a.state})}})),create:Me(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}function je(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var Ue=w("<style>"),Be=w("<link>"),We=w("<script> "),ze=w("<noscript>");const Ve={style:e=>(()=>{var t=Ue();return R(t,_(()=>e.attrs),!1,!0),W(t,()=>e.children),t})(),link:e=>(()=>{var t=Be();return R(t,_(()=>e.attrs),!1,!1),t})(),script:e=>e.attrs.src?(()=>{var t=We();return R(t,_(()=>e.attrs,{get id(){return e.key}}),!1,!0),t})():null,noscript:e=>(()=>{var t=ze();return R(t,_(()=>e.attrs),!1,!0),t})()};function qe(e,t){let{tag:n,attrs:{key:r,...o}={key:void 0},children:a}=e;return Ve[n]({attrs:{...o,nonce:t},key:r,children:a})}function He(e,t,n,r="default"){return Q(async()=>{{const a=(await e.import())[r],s=(await t.inputs?.[e.src].assets()).filter(i=>i.tag==="style"||i.attrs.rel==="stylesheet");return typeof window<"u"&&je(s),{default:i=>[...s.map(m=>qe(m)),p(a,i)]}}})}const $={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Je(e={}){const t={options:e,rootNode:V(),staticRoutesMap:{}},n=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)M(t,n(r),e.routes[r]);return{ctx:t,lookup:r=>Ke(t,n(r)),insert:(r,o)=>M(t,n(r),o),remove:r=>Ze(t,n(r))}}function Ke(e,t){const n=e.staticRoutesMap[t];if(n)return n.data;const r=t.split("/"),o={};let a=!1,l=null,s=e.rootNode,f=null;for(let i=0;i<r.length;i++){const m=r[i];s.wildcardChildNode!==null&&(l=s.wildcardChildNode,f=r.slice(i).join("/"));const g=s.children.get(m);if(g===void 0){if(s&&s.placeholderChildren.length>1){const b=r.length-i;s=s.placeholderChildren.find(E=>E.maxDepth===b)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(o[s.paramName]=m),a=!0}else s=g}return(s===null||s.data===null)&&l!==null&&(s=l,o[s.paramName||"_"]=f,a=!0),s?a?{...s.data,params:a?o:void 0}:s.data:null}function M(e,t,n){let r=!0;const o=t.split("/");let a=e.rootNode,l=0;const s=[a];for(const f of o){let i;if(i=a.children.get(f))a=i;else{const m=Ge(f);i=V({type:m,parent:a}),a.children.set(f,i),m===$.PLACEHOLDER?(i.paramName=f==="*"?`_${l++}`:f.slice(1),a.placeholderChildren.push(i),r=!1):m===$.WILDCARD&&(a.wildcardChildNode=i,i.paramName=f.slice(3)||"_",r=!1),s.push(i),a=i}}for(const[f,i]of s.entries())i.maxDepth=Math.max(s.length-f,i.maxDepth||0);return a.data=n,r===!0&&(e.staticRoutesMap[t]=a),a}function Ze(e,t){let n=!1;const r=t.split("/");let o=e.rootNode;for(const a of r)if(o=o.children.get(a),!o)return n;if(o.data){const a=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(a),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),n=!0}return n}function V(e={}){return{type:e.type||$.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Ge(e){return e.startsWith("**")?$.WILDCARD:e[0]===":"||e==="*"?$.PLACEHOLDER:$.NORMAL}const Xe={preload({location:e,params:t}){me(re(t.region))}},q=[{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>A(()=>import("./about-oHqDvi6P.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.tsx?pick=default&pick=$css"].output.path)},path:"/about",filePath:"D:/Projects/Javascript/solid-csostudiobrowser/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>A(()=>import("./index-Bqf2373j.js"),__vite__mapDeps([3,1,4,5])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"D:/Projects/Javascript/solid-csostudiobrowser/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/[region]/(region).tsx?pick=default&pick=$css",build:()=>A(()=>import("./(region)-DtQE_Qhx.js"),__vite__mapDeps([6,1,4,7,8,2,9,10])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[region]/(region).tsx?pick=default&pick=$css"].output.path)},$$route:{require:()=>({route:Xe}),src:"src/routes/[region]/(region).tsx?pick=route"},path:"/:region/(region)",filePath:"D:/Projects/Javascript/solid-csostudiobrowser/src/routes/[region]/(region).tsx"},{page:!0,$component:{src:"src/routes/[region]/slots/[slot].tsx?pick=default&pick=$css",build:()=>A(()=>import("./_slot_-DXJ9zMmX.js"),__vite__mapDeps([11,1,8,2,4,7,12])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[region]/slots/[slot].tsx?pick=default&pick=$css"].output.path)},path:"/:region/slots/:slot",filePath:"D:/Projects/Javascript/solid-csostudiobrowser/src/routes/[region]/slots/[slot].tsx"}],Ye=Qe(q.filter(e=>e.page));function Qe(e){function t(n,r,o,a){const l=Object.values(n).find(s=>o.startsWith(s.id+"/"));return l?(t(l.children||(l.children=[]),r,o.slice(l.id.length)),n):(n.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),n)}return e.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>t(n,r,r.path,r.path),[])}function et(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Je({routes:q.reduce((e,t)=>{if(!et(t))return e;let n=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`).split("/").map(r=>r.startsWith(":")||r.startsWith("*")?r:encodeURIComponent(r)).join("/");if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function tt(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:n.$component&&He(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return Ye.map(e)}let F;const nt=()=>F||(F=tt());var rt=w("<a href=/>Index"),ot=w("<a href=/about>About");function at(){return p(Fe,{root:e=>p(ge,{get children(){return[p(we,{children:"Studio Browser"}),rt(),ot(),p(ee,{get children(){return e.children}})]}}),get children(){return p(nt,{})}})}const st=e=>null;var it=w("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const lt=e=>{const t="Error | Uncaught Client Exception";return p(te,{fallback:n=>(console.error(n),[(()=>{var r=it();return W(r,t),r})(),p(st,{code:500})]),get children(){return e.children}})};function j(e){return e.children}function ct(){return p(j,{get children(){return p(j,{get children(){return p(lt,{get children(){return p(at,{})}})}})}})}function ut(e,t){ne(e,t)}ut(()=>p(ct,{}),document.getElementById("app"));const gt=void 0;export{gt as default};
