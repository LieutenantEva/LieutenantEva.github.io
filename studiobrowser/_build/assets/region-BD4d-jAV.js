const c="VITE_STUDIO_",S="https://api.allorigins.win/get?url=";async function a(_,t,e=!0){const s=await fetch(new URL(S+_),t);if(!e)return s;let T=await s.json();return T.contents?JSON.parse(T.contents):T}async function i(_,t){const e=await a(_+t);if(e==null||!e.result)throw new TypeError("fetch result is empty");if(!e.succeed)throw new TypeError("failed to fetch");return e.result}function r(_,t){return new URL(t,_)}const o={BASE_URL:"/studiobrowser/_build",CWD:"D:\\Projects\\Javascript\\solid-csostudiobrowser",DEV:!1,DEVTOOLS:!1,MANIFEST:globalThis.MANIFEST,MODE:"production",PROD:!0,ROUTERS:["public","ssr","client","server-fns"],ROUTER_HANDLER:"src/entry-client.tsx",ROUTER_NAME:"client",ROUTER_TYPE:"client",SERVER_BASE_URL:"./studiobrowser/",SSR:!1,START_APP:"./src/app.tsx",START_DEV_OVERLAY:!0,START_ISLANDS:!1,START_SSR:!1,VITE_CORS:"https://api.allorigins.win/get?url=",VITE_STUDIO:"kr,chn,tw,na",VITE_STUDIO_CHN:"🇨🇳 Tiancity",VITE_STUDIO_CHN_API:"http://60.191.86.188:3002/",VITE_STUDIO_CHN_STORAGE:"http://ct01.csosandbox.tiancity.com/",VITE_STUDIO_CHN_STORAGE_VMG:"images/",VITE_STUDIO_CHN_STORAGE_VXL:"resources/",VITE_STUDIO_KR:"🇰🇷 Nexon Korea",VITE_STUDIO_KR_API:"http://222.122.48.57:3000/",VITE_STUDIO_KR_STORAGE:"https://cso-studio-kr.dn.nexoncdn.co.kr/",VITE_STUDIO_KR_STORAGE_VMG:"images/",VITE_STUDIO_KR_STORAGE_VXL:"resources/",VITE_STUDIO_NA:"🌎 Nexon America",VITE_STUDIO_NA_API:"http://52.28.231.59:3000/",VITE_STUDIO_NA_STORAGE:"https://d1u9da8nyooy18.cloudfront.net/",VITE_STUDIO_NA_STORAGE_VMG:"images_prod/",VITE_STUDIO_NA_STORAGE_VXL:"resources_prod/",VITE_STUDIO_TW:"🇹🇼🇭🇰 Beanfun",VITE_STUDIO_TW_API:"http://112.121.65.212:3004/",VITE_STUDIO_TW_STORAGE:"https://studio-twcso.s3-ap-northeast-1.amazonaws.com/",VITE_STUDIO_TW_STORAGE_VMG:"images/",VITE_STUDIO_TW_STORAGE_VXL:"resources/"};function I(_){const t=c+_.toUpperCase(),e=o[t+"_API"],s=o[t+"_STORAGE"],T=o[t+"_STORAGE_VMG"],E=o[t+"_STORAGE_VXL"];return{id:_,name:o[t],api:async n=>i(e,n),storage:n=>r(s,n),vmg:n=>r(s,`${T}${n}.vmg`),vxl:n=>r(s,`${E}${n}.vxl`)}}function O(){const _=[];return"kr,chn,tw,na".split(",").forEach((e,s)=>{_[s]=I(e)}),_}export{O as a,I as g};
