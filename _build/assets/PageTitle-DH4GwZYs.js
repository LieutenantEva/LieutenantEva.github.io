import{q as l,u,s as f,c as d,a as w,j as g,b as h,t as m}from"./web-BPZ8wtEZ.js";import{T as p}from"./index-DaaYFcil.js";import{g as y}from"./region-CQwb5R0R.js";import{i as v}from"./slot-C1zoSAEq.js";function A(n,r){let e,s=()=>!e||e.state==="unresolved"?void 0:e.latest;[e]=l(()=>$(n,u(s)),i=>i,r);const a=()=>e();return Object.defineProperty(a,"latest",{get(){return e.latest}}),a}class t{static all(){return new t}static allSettled(){return new t}static any(){return new t}static race(){return new t}static reject(){return new t}static resolve(){return new t}catch(){return new t}then(){return new t}finally(){return new t}}function $(n,r){if(!f.context)return n(r);const e=fetch,s=Promise;try{return window.fetch=()=>new t,Promise=t,n(r)}finally{window.fetch=e,Promise=s}}var b=m("<main>");function F(n){const r=d(()=>n.children),e=v(),s=w(()=>y(e.region));let a=`${r()!==void 0?r():"Studio Browser"}`;const i=e.slot,o=e.region;if(i)a+=` - ${i}`;else if(o){const c=s();a+=` - ${c.name}`}return(()=>{var c=b();return g(c,h(p,{children:a})),c})()}export{F as P,A as c};
