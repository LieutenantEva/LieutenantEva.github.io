const _="VITE_STUDIO_";async function c(t,n){let s=new URL(n,t);const e=await(await fetch(s)).json();if(e==null||!e.result)throw new TypeError("fetch result is empty");if(!e.succeed)throw new TypeError("failed to fetch");return e.result}function T(t,n){return new URL(n,t)}const r={BASE_URL:"/_build",CWD:"D:\\Projects\\Javascript\\solid-csostudiobrowser",DEV:!1,DEVTOOLS:!1,MANIFEST:globalThis.MANIFEST,MODE:"production",PROD:!0,ROUTERS:["public","ssr","client","server-fns"],ROUTER_HANDLER:"src/entry-client.tsx",ROUTER_NAME:"client",ROUTER_TYPE:"client",SERVER_BASE_URL:"/",SSR:!1,START_APP:"./src/app.tsx",START_DEV_OVERLAY:!0,START_ISLANDS:!1,START_SSR:!1,VITE_STUDIO:"tw,kr",VITE_STUDIO_KR:"Nexon Korea",VITE_STUDIO_KR_API:"https://thingproxy.freeboard.io/fetch/http://222.122.48.57:3000/",VITE_STUDIO_KR_STORAGE:"https://cso-studio-kr.dn.nexoncdn.co.kr/",VITE_STUDIO_TW:"Beanfun",VITE_STUDIO_TW_API:"https://thingproxy.freeboard.io/fetch/http://112.121.65.212:3004/",VITE_STUDIO_TW_STORAGE:"http://tw.studio.csonline.beanfun.com/studio-twcso/"};function i(t){const n=_+t.toUpperCase(),s=r[n+"_API"],o=r[n+"_STORAGE"];return{id:t,name:r[n],apiUrl:new URL(s),storageUrl:new URL(o),api:async e=>c(s,e),storage:e=>T(o,e)}}function a(){const t=[];return"tw,kr".split(",").forEach((s,o)=>{t[o]=i(s)}),t}export{a,i as g};
