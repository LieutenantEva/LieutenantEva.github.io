import{e as S,w as N,C as A,f as M,D as b,g as P,s as k}from"./web-D58qg4PS.js";import{l as x,g as $,t as j}from"./region-bzFw8_t7.js";const U="Location",Z=5e3,B=18e4;let T=new Map;setInterval(()=>{const e=Date.now();for(let[t,o]of T.entries())!o[3].count&&e-o[0]>B&&T.delete(t)},3e5);function I(){return T}function _(e,t){e.GET&&(e=e.GET);const o=(...i)=>{const r=I(),s=$(),c=j(),l=P()?x():void 0,m=Date.now(),p=t+O(i);let n=r.get(p),v;if(N()&&!A&&(v=!0,M(()=>n[3].count--)),n&&n[0]&&(s==="native"||n[3].count||Date.now()-n[0]<Z)){v&&(n[3].count++,n[3][0]()),n[2]==="preload"&&s!=="preload"&&(n[0]=m);let f=n[1];return s!=="preload"&&(f="then"in n[1]?n[1].then(d(!1),d(!0)):d(!1)(n[1]),s==="navigate"&&b(()=>n[3][1](n[0]))),c&&"then"in f&&f.catch(()=>{}),f}let u=k.context&&k.has(p)?k.load(p):e(...i);return n?(n[0]=m,n[1]=u,n[2]=s,s==="navigate"&&b(()=>n[3][1](n[0]))):(r.set(p,n=[m,u,s,S(m)]),n[3].count=0),v&&(n[3].count++,n[3][0]()),s!=="preload"&&(u="then"in u?u.then(d(!1),d(!0)):d(!1)(u)),c&&"then"in u&&u.catch(()=>{}),u;function d(f){return async g=>{if(g instanceof Response){const h=g.headers.get(U);if(h!==null){l&&h.startsWith("/")?b(()=>{l(h,{replace:!0})}):window.location.href=h;return}g.customBody&&(g=await g.customBody())}if(f)throw g;return g}}};return o.keyFor=(...i)=>t+O(i),o.key=t,o}_.set=(e,t)=>{const o=I(),i=Date.now();let r=o.get(e);r?(r[0]=i,r[1]=t,r[2]="preload"):(o.set(e,r=[i,t,,S(i)]),r[3].count=0)};_.clear=()=>I().clear();function O(e){return JSON.stringify(e,(t,o)=>H(o)?Object.keys(o).sort().reduce((i,r)=>(i[r]=o[r],i),{}):o)}function H(e){let t;return e!=null&&typeof e=="object"&&(!(t=Object.getPrototypeOf(e))||t===Object.prototype)}function C(){return{id:"",gamemode:-1,maxPlayers:0,script:0}}function R(e){const t=C();return Object.assign(t,{id:e.resource_id!==void 0?e.resource_id:t.id,gamemode:e.resource_mode!==void 0?e.resource_mode:t.gamemode,maxPlayers:e.resource_max_player!==void 0?e.resource_max_player:t.maxPlayers,script:e.sandbox_script!==void 0?e.sandbox_script:t.script})}const F={0:"Original",2:"Team Deathmatch",5:"Bot Team Deathmatch",8:"Zombie Classic",9:"Zombie Mutant",14:"Zombie Hero",16:"Soccer",20:"Zombie Escape",22:"Gun Deathmatch",23:"Basic",24:"Bot Zombie",38:"Create",39:"Play",40:"All-Star",45:"Zombie Z",49:"Hide and Seek",52:"Zombie Shelter",53:"Scenario TX",54:"Zombie Evolution",[-1]:"!!!ERROR_FIXME!!!"};function E(){return{id:"",map:C(),parent:"",title:"",description:"",creatorName:"",categoryType:0,permissionType:0,tags:[],playCounts:0,likeCounts:0,bookmarkCounts:0,cubeCounts:0,cheeringKingName:"",savegroupId:"",imageId:"",groupId:"",noticeType:0,eventType:0}}Object.assign(E(),{id:"management"});const D="/studiobrowser/thumbnails",q=`${D}/default.webp`,V=_(async e=>e||q,"slot_thumbnail");function w(e,t){let o;t.imageId?o=e.vmg(t.imageId).href:t.map&&(o=`${D}/${t.map.gamemode}.webp`);let i="",r="",s="";const c=t.map;c&&(i=e.vxl(c.id).href,r=F[c.gamemode],s=new Date(Number.parseInt(c.id.substring(1,14))).toLocaleString());let a=new Date(Number.parseInt(t.id.substring(1,14))).toLocaleString();return{imageUrl:o,mapUrl:i,gamemodeName:r,createdDate:a,updatedDate:s}}function y(e){const t=E();return Object.assign(t,{id:e.id!==void 0?e.id:t.id,map:e.resource_id!==void 0?R(e):t.map,parent:e.parents_slot_id?y(e.parents_slot_id):t.parent,title:e.title!==void 0?e.title:t.title,description:e.description!==void 0?e.description:t.description,creatorName:e.creator_nickname!==void 0?e.creator_nickname:t.creatorName,categoryType:e.slot_category!==void 0?e.slot_category:t.categoryType,permissionType:e.permission!==void 0?e.permission:t.permissionType,tags:e.tags!==void 0?e.tags:t.tags,playCounts:e.play_count!==void 0?e.play_count:t.playCounts,likeCounts:e.like_count!==void 0?e.like_count:t.likeCounts,bookmarkCounts:e.bookmark_count!==void 0?e.bookmark_count:t.bookmarkCounts,cubeCounts:e.cube_count!==void 0?e.cube_count:t.cubeCounts,cheeringKingName:e.cheering_king!==void 0?e.cheering_king:t.cheeringKingName,savegroupId:e.savegroup_id!==void 0?e.savegroup_id:t.savegroupId,imageId:e.image_id!==void 0?e.image_id:t.imageId,groupId:e.group_id!==void 0?e.group_id:t.groupId,noticeType:e.notice_type!==void 0?e.notice_type:t.noticeType,eventType:e.is_event!==void 0?e.is_event:t.eventType})}const X=_(async(e,t)=>{let o={},i=[];(await Promise.allSettled([e.api(`v6/slots/detail/${t}`),e.api(`v5/slots/simple?ids=${t}`)])).forEach(c=>{if(c.status=="fulfilled"){const a=c.value;Array.isArray(a)?Object.assign(o,a[0]):Object.assign(o,a)}else i.push(c.reason)});const s=y(o);if(!s.id)throw new TypeError("Invalid slot ID");return s._html=w(e,s),s._html.errors=i,s},"slot_by_id");async function L(e,t,o={}){const i=new URLSearchParams(o.queries||{});let r;switch(t){case"nick":const c=o.nickname||i.get("q");i.delete("q"),r=`v5/slots/list/nick/${c}${i.size?`?${i}`:""}`;break;case"all":r="v6/slots/list/all";const a=await e.api("v6/slots/list/all");for(const l of Object.values(a))for(const m in l){const p=y(l[m]);p._html=w(e,p),l[m]=p}return a;default:throw new TypeError(`Unknown category "${t}"`)}const s=await e.api(r);return s.forEach((c,a)=>{const l=y(c);l._html=w(e,l),s[a]=l}),s}const z=_(e=>L(e,"all"),"slot_list_all"),J=_((e,t,o={})=>L(e,"nick",{nickname:t,queries:o}),"slot_list_nick");export{q as S,J as a,X as b,_ as c,z as f,V as v};