const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SlotThumbnail-CqjErsxX.js","assets/web-BPZ8wtEZ.js","assets/slot-2HESPlSs.js","assets/PageTitle-Deow6t4n.js","assets/index-DaaYFcil.js","assets/region-CpO8_1cj.js"])))=>i.map(i=>d[i]);
import{h as F,e as M,j as l,b as i,n as N,t as a,l as O,F as L,a as z,E as D,S as I,k as V}from"./web-BPZ8wtEZ.js";import{g as q}from"./region-CpO8_1cj.js";import{u as G,i as J,h as K}from"./slot-2HESPlSs.js";import{c as Q,P as U}from"./PageTitle-Deow6t4n.js";import{_ as W}from"./preload-helper-C9euoRAu.js";import"./index-DaaYFcil.js";var X=a("<button class=slot-card type=button><div class=content><div class=details><ul><li><h3>📜 <!> Mode (<!> players)</h3></li><li><h4>⏱️ Played for <!> times!</h4></li><li><h4>❤️ <!> players liked it!</h4></li><li><h4>🧊 <!> cubes donated for this map!</h4></li></ul></div><div class=thumbnail><h4>");const Y=O(()=>W(()=>import("./SlotThumbnail-CqjErsxX.js"),__vite__mapDeps([0,1,2,3,4,5])));function Z(c){const o=G(),t=c.slot,[s,r]=M(!1);return(()=>{var e=X(),n=e.firstChild,u=n.firstChild,w=u.firstChild,v=w.firstChild,_=v.firstChild,A=_.firstChild,g=A.nextSibling,H=g.nextSibling,f=H.nextSibling;f.nextSibling;var p=v.nextSibling,b=p.firstChild,R=b.firstChild,S=R.nextSibling;S.nextSibling;var y=p.nextSibling,C=y.firstChild,T=C.firstChild,x=T.nextSibling;x.nextSibling;var j=y.nextSibling,P=j.firstChild,B=P.firstChild,E=B.nextSibling;E.nextSibling;var h=u.nextSibling,k=h.firstChild;return e.addEventListener("mouseleave",()=>r(!1)),e.addEventListener("mouseenter",()=>r(!0)),e.$$click=()=>o(`slots/${t.id}`,{scroll:!0}),l(_,()=>t._html?.gamemodeName,g),l(_,()=>t.map.maxPlayers,f),l(b,()=>t.playCounts,S),l(C,()=>t.likeCounts,x),l(P,()=>t.cubeCounts,E),l(h,i(Y,{slot:t}),k),l(k,()=>t.title),N(d=>{var m=s()?"inherit":"none",$=s()?.1:1;return m!==d.e&&((d.e=m)!=null?u.style.setProperty("display",m):u.style.removeProperty("display")),$!==d.t&&((d.t=$)!=null?h.style.setProperty("opacity",$):h.style.removeProperty("opacity")),d},{e:void 0,t:void 0}),e})()}F(["click"]);var ee=a("<h3>"),te=a("<div class=slot-list>");function le(c){const o=c.list,t=()=>Object.entries(o);return i(L,{get each(){return t()},children:([s,r])=>[(()=>{var e=ee();return l(e,s),e})(),(()=>{var e=te();return l(e,i(L,{each:r,children:n=>i(Z,{slot:n})})),e})()]})}var ie=a("<main>"),re=a("<div>Loading..."),se=a("<h3>error! ");function he(c){const o=J(),t=z(()=>q(o.region)),s=Q(()=>K(t()));return(()=>{var r=ie();return l(r,i(U,{children:"Studio Browser"}),null),l(r,i(V,{get fallback(){return re()},get children(){return i(D,{fallback:e=>(()=>{var n=se();return n.firstChild,l(n,()=>e.message,null),n})(),get children(){return i(I,{get when(){return s()},get children(){return i(le,{get list(){return s()}})}})}})}}),null),r})()}export{he as default};
