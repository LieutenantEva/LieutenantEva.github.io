import{q as l,u,s as f,c as d,a as w,b as h}from"./web-DtRvhTJ7.js";import{T as g}from"./index-CLWHGj--.js";import{j as m,h as p}from"./region-H5XRBcnw.js";function S(r,n){let t,s=()=>!t||t.state==="unresolved"?void 0:t.latest;[t]=l(()=>y(r,u(s)),c=>c,n);const a=()=>t();return Object.defineProperty(a,"latest",{get(){return t.latest}}),a}class e{static all(){return new e}static allSettled(){return new e}static any(){return new e}static race(){return new e}static reject(){return new e}static resolve(){return new e}catch(){return new e}then(){return new e}finally(){return new e}}function y(r,n){if(!f.context)return r(n);const t=fetch,s=Promise;try{return window.fetch=()=>new e,Promise=e,r(n)}finally{window.fetch=t,Promise=s}}function T(r){const n=d(()=>r.children),t=m(),s=t.region,a=w(()=>p(s)),c=t.slot;let i=n()?n().toString():"Studio Browser";if(c)i+=` - ${c}`;else if(s){const o=a();i+=` - ${o.name}`}return h(g,{children:i})}export{T as P,S as c};
