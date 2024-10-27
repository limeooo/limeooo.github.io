(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bu(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const ht={},wr=[],li=()=>{},L0=()=>!1,zl=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),ku=i=>i.startsWith("onUpdate:"),Gt=Object.assign,zu=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},D0=Object.prototype.hasOwnProperty,it=(i,e)=>D0.call(i,e),ke=Array.isArray,Ar=i=>Hl(i)==="[object Map]",Tm=i=>Hl(i)==="[object Set]",Ve=i=>typeof i=="function",Pt=i=>typeof i=="string",xs=i=>typeof i=="symbol",St=i=>i!==null&&typeof i=="object",bm=i=>(St(i)||Ve(i))&&Ve(i.then)&&Ve(i.catch),Em=Object.prototype.toString,Hl=i=>Em.call(i),I0=i=>Hl(i).slice(8,-1),wm=i=>Hl(i)==="[object Object]",Hu=i=>Pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,So=Bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vl=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},N0=/-(\w)/g,ps=Vl(i=>i.replace(N0,(e,t)=>t?t.toUpperCase():"")),U0=/\B([A-Z])/g,Qs=Vl(i=>i.replace(U0,"-$1").toLowerCase()),Am=Vl(i=>i.charAt(0).toUpperCase()+i.slice(1)),cc=Vl(i=>i?`on${Am(i)}`:""),ls=(i,e)=>!Object.is(i,e),hc=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Rm=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},O0=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let id;const Gl=()=>id||(id=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vu(i){if(ke(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=Pt(n)?z0(n):Vu(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(i)||St(i))return i}const F0=/;(?![^(]*\))/g,B0=/:([^]+)/,k0=/\/\*[^]*?\*\//g;function z0(i){const e={};return i.replace(k0,"").split(F0).forEach(t=>{if(t){const n=t.split(B0);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Wl(i){let e="";if(Pt(i))e=i;else if(ke(i))for(let t=0;t<i.length;t++){const n=Wl(i[t]);n&&(e+=n+" ")}else if(St(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const H0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",V0=Bu(H0);function Cm(i){return!!i||i===""}const Pm=i=>!!(i&&i.__v_isRef===!0),Lm=i=>Pt(i)?i:i==null?"":ke(i)||St(i)&&(i.toString===Em||!Ve(i.toString))?Pm(i)?Lm(i.value):JSON.stringify(i,Dm,2):String(i),Dm=(i,e)=>Pm(e)?Dm(i,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s],r)=>(t[uc(n,r)+" =>"]=s,t),{})}:Tm(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>uc(t))}:xs(e)?uc(e):St(e)&&!ke(e)&&!wm(e)?String(e):e,uc=(i,e="")=>{var t;return xs(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class G0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){Tn=this}off(){Tn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function W0(){return Tn}let ct;const fc=new WeakSet;class Im{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&Tn.active&&Tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fc.has(this)&&(fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Um(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sd(this),Om(this);const e=ct,t=$n;ct=this,$n=!0;try{return this.fn()}finally{Fm(this),ct=e,$n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xu(e);this.deps=this.depsTail=void 0,sd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vh(this)&&this.run()}get dirty(){return vh(this)}}let Nm=0,To,bo;function Um(i,e=!1){if(i.flags|=8,e){i.next=bo,bo=i;return}i.next=To,To=i}function Gu(){Nm++}function Wu(){if(--Nm>0)return;if(bo){let e=bo;for(bo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;To;){let e=To;for(To=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function Om(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fm(i){let e,t=i.depsTail,n=t;for(;n;){const s=n.prevDep;n.version===-1?(n===t&&(t=s),Xu(n),X0(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=e,i.depsTail=t}function vh(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function Bm(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Fo))return;i.globalVersion=Fo;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!vh(i)){i.flags&=-3;return}const t=ct,n=$n;ct=i,$n=!0;try{Om(i);const s=i.fn(i._value);(e.version===0||ls(s,i._value))&&(i._value=s,e.version++)}catch(s){throw e.version++,s}finally{ct=t,$n=n,Fm(i),i.flags&=-3}}function Xu(i,e=!1){const{dep:t,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Xu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function X0(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let $n=!0;const km=[];function vs(){km.push($n),$n=!1}function ys(){const i=km.pop();$n=i===void 0?!0:i}function sd(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=ct;ct=void 0;try{e()}finally{ct=t}}}let Fo=0;class q0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ct||!$n||ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ct)t=this.activeLink=new q0(ct,this),ct.deps?(t.prevDep=ct.depsTail,ct.depsTail.nextDep=t,ct.depsTail=t):ct.deps=ct.depsTail=t,zm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=ct.depsTail,t.nextDep=void 0,ct.depsTail.nextDep=t,ct.depsTail=t,ct.deps===t&&(ct.deps=n)}return t}trigger(e){this.version++,Fo++,this.notify(e)}notify(e){Gu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Wu()}}}function zm(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)zm(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const yh=new WeakMap,Vs=Symbol(""),Mh=Symbol(""),Bo=Symbol("");function qt(i,e,t){if($n&&ct){let n=yh.get(i);n||yh.set(i,n=new Map);let s=n.get(t);s||(n.set(t,s=new qu),s.map=n,s.key=t),s.track()}}function Ii(i,e,t,n,s,r){const o=yh.get(i);if(!o){Fo++;return}const a=l=>{l&&l.trigger()};if(Gu(),e==="clear")o.forEach(a);else{const l=ke(i),c=l&&Hu(t);if(l&&t==="length"){const h=Number(n);o.forEach((u,f)=>{(f==="length"||f===Bo||!xs(f)&&f>=h)&&a(u)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Bo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Vs)),Ar(i)&&a(o.get(Mh)));break;case"delete":l||(a(o.get(Vs)),Ar(i)&&a(o.get(Mh)));break;case"set":Ar(i)&&a(o.get(Vs));break}}Wu()}function ir(i){const e=nt(i);return e===i?e:(qt(e,"iterate",Bo),Zn(i)?e:e.map(tn))}function Yu(i){return qt(i=nt(i),"iterate",Bo),i}const Y0={__proto__:null,[Symbol.iterator](){return dc(this,Symbol.iterator,tn)},concat(...i){return ir(this).concat(...i.map(e=>ke(e)?ir(e):e))},entries(){return dc(this,"entries",i=>(i[1]=tn(i[1]),i))},every(i,e){return yi(this,"every",i,e,void 0,arguments)},filter(i,e){return yi(this,"filter",i,e,t=>t.map(tn),arguments)},find(i,e){return yi(this,"find",i,e,tn,arguments)},findIndex(i,e){return yi(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return yi(this,"findLast",i,e,tn,arguments)},findLastIndex(i,e){return yi(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return yi(this,"forEach",i,e,void 0,arguments)},includes(...i){return pc(this,"includes",i)},indexOf(...i){return pc(this,"indexOf",i)},join(i){return ir(this).join(i)},lastIndexOf(...i){return pc(this,"lastIndexOf",i)},map(i,e){return yi(this,"map",i,e,void 0,arguments)},pop(){return io(this,"pop")},push(...i){return io(this,"push",i)},reduce(i,...e){return rd(this,"reduce",i,e)},reduceRight(i,...e){return rd(this,"reduceRight",i,e)},shift(){return io(this,"shift")},some(i,e){return yi(this,"some",i,e,void 0,arguments)},splice(...i){return io(this,"splice",i)},toReversed(){return ir(this).toReversed()},toSorted(i){return ir(this).toSorted(i)},toSpliced(...i){return ir(this).toSpliced(...i)},unshift(...i){return io(this,"unshift",i)},values(){return dc(this,"values",tn)}};function dc(i,e,t){const n=Yu(i),s=n[e]();return n!==i&&!Zn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const j0=Array.prototype;function yi(i,e,t,n,s,r){const o=Yu(i),a=o!==i&&!Zn(i),l=o[e];if(l!==j0[e]){const u=l.apply(i,r);return a?tn(u):u}let c=t;o!==i&&(a?c=function(u,f){return t.call(this,tn(u),f,i)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,i)}));const h=l.call(o,c,n);return a&&s?s(h):h}function rd(i,e,t,n){const s=Yu(i);let r=t;return s!==i&&(Zn(i)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,i)}):r=function(o,a,l){return t.call(this,o,tn(a),l,i)}),s[e](r,...n)}function pc(i,e,t){const n=nt(i);qt(n,"iterate",Bo);const s=n[e](...t);return(s===-1||s===!1)&&Zu(t[0])?(t[0]=nt(t[0]),n[e](...t)):s}function io(i,e,t=[]){vs(),Gu();const n=nt(i)[e].apply(i,t);return Wu(),ys(),n}const K0=Bu("__proto__,__v_isRef,__isVue"),Hm=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(xs));function $0(i){xs(i)||(i=String(i));const e=nt(this);return qt(e,"has",i),e.hasOwnProperty(i)}class Vm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?ox:qm:r?Xm:Wm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=ke(e);if(!s){let l;if(o&&(l=Y0[t]))return l;if(t==="hasOwnProperty")return $0}const a=Reflect.get(e,t,jt(e)?e:n);return(xs(t)?Hm.has(t):K0(t))||(s||qt(e,"get",t),r)?a:jt(a)?o&&Hu(t)?a:a.value:St(a)?s?Ym(a):Ku(a):a}}class Gm extends Vm{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._isShallow){const l=Ys(r);if(!Zn(n)&&!Ys(n)&&(r=nt(r),n=nt(n)),!ke(e)&&jt(r)&&!jt(n))return l?!1:(r.value=n,!0)}const o=ke(e)&&Hu(t)?Number(t)<e.length:it(e,t),a=Reflect.set(e,t,n,jt(e)?e:s);return e===nt(s)&&(o?ls(n,r)&&Ii(e,"set",t,n):Ii(e,"add",t,n)),a}deleteProperty(e,t){const n=it(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Ii(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!xs(t)||!Hm.has(t))&&qt(e,"has",t),n}ownKeys(e){return qt(e,"iterate",ke(e)?"length":Vs),Reflect.ownKeys(e)}}class Z0 extends Vm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const J0=new Gm,Q0=new Z0,ex=new Gm(!0);const Sh=i=>i,ga=i=>Reflect.getPrototypeOf(i);function tx(i,e,t){return function(...n){const s=this.__v_raw,r=nt(s),o=Ar(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),h=t?Sh:e?Th:tn;return!e&&qt(r,"iterate",l?Mh:Vs),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function xa(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function nx(i,e){const t={get(s){const r=this.__v_raw,o=nt(r),a=nt(s);i||(ls(s,a)&&qt(o,"get",s),qt(o,"get",a));const{has:l}=ga(o),c=e?Sh:i?Th:tn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&qt(nt(s),"iterate",Vs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=nt(r),a=nt(s);return i||(ls(s,a)&&qt(o,"has",s),qt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=nt(a),c=e?Sh:i?Th:tn;return!i&&qt(l,"iterate",Vs),a.forEach((h,u)=>s.call(r,c(h),c(u),o))}};return Gt(t,i?{add:xa("add"),set:xa("set"),delete:xa("delete"),clear:xa("clear")}:{add(s){!e&&!Zn(s)&&!Ys(s)&&(s=nt(s));const r=nt(this);return ga(r).has.call(r,s)||(r.add(s),Ii(r,"add",s,s)),this},set(s,r){!e&&!Zn(r)&&!Ys(r)&&(r=nt(r));const o=nt(this),{has:a,get:l}=ga(o);let c=a.call(o,s);c||(s=nt(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?ls(r,h)&&Ii(o,"set",s,r):Ii(o,"add",s,r),this},delete(s){const r=nt(this),{has:o,get:a}=ga(r);let l=o.call(r,s);l||(s=nt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ii(r,"delete",s,void 0),c},clear(){const s=nt(this),r=s.size!==0,o=s.clear();return r&&Ii(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tx(s,i,e)}),t}function ju(i,e){const t=nx(i,e);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(it(t,s)&&s in n?t:n,s,r)}const ix={get:ju(!1,!1)},sx={get:ju(!1,!0)},rx={get:ju(!0,!1)};const Wm=new WeakMap,Xm=new WeakMap,qm=new WeakMap,ox=new WeakMap;function ax(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lx(i){return i.__v_skip||!Object.isExtensible(i)?0:ax(I0(i))}function Ku(i){return Ys(i)?i:$u(i,!1,J0,ix,Wm)}function cx(i){return $u(i,!1,ex,sx,Xm)}function Ym(i){return $u(i,!0,Q0,rx,qm)}function $u(i,e,t,n,s){if(!St(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=lx(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function Eo(i){return Ys(i)?Eo(i.__v_raw):!!(i&&i.__v_isReactive)}function Ys(i){return!!(i&&i.__v_isReadonly)}function Zn(i){return!!(i&&i.__v_isShallow)}function Zu(i){return i?!!i.__v_raw:!1}function nt(i){const e=i&&i.__v_raw;return e?nt(e):i}function hx(i){return!it(i,"__v_skip")&&Object.isExtensible(i)&&Rm(i,"__v_skip",!0),i}const tn=i=>St(i)?Ku(i):i,Th=i=>St(i)?Ym(i):i;function jt(i){return i?i.__v_isRef===!0:!1}function ux(i){return jm(i,!1)}function fx(i){return jm(i,!0)}function jm(i,e){return jt(i)?i:new dx(i,e)}class dx{constructor(e,t){this.dep=new qu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Zn(e)||Ys(e);e=n?e:nt(e),ls(e,t)&&(this._rawValue=e,this._value=n?e:tn(e),this.dep.trigger())}}function Km(i){return jt(i)?i.value:i}const px={get:(i,e,t)=>e==="__v_raw"?i:Km(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return jt(s)&&!jt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function $m(i){return Eo(i)?i:new Proxy(i,px)}class mx{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new qu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return Um(this,!0),!0}get value(){const e=this.dep.track();return Bm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _x(i,e,t=!1){let n,s;return Ve(i)?n=i:(n=i.get,s=i.set),new mx(n,s,t)}const va={},ml=new WeakMap;let Os;function gx(i,e=!1,t=Os){if(t){let n=ml.get(t);n||ml.set(t,n=[]),n.push(i)}}function xx(i,e,t=ht){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=v=>s?v:Zn(v)||s===!1||s===0?ns(v,1):ns(v);let h,u,f,d,_=!1,g=!1;if(jt(i)?(u=()=>i.value,_=Zn(i)):Eo(i)?(u=()=>c(i),_=!0):ke(i)?(g=!0,_=i.some(v=>Eo(v)||Zn(v)),u=()=>i.map(v=>{if(jt(v))return v.value;if(Eo(v))return c(v);if(Ve(v))return l?l(v,2):v()})):Ve(i)?e?u=l?()=>l(i,2):i:u=()=>{if(f){vs();try{f()}finally{ys()}}const v=Os;Os=h;try{return l?l(i,3,[d]):i(d)}finally{Os=v}}:u=li,e&&s){const v=u,A=s===!0?1/0:s;u=()=>ns(v(),A)}const p=W0(),m=()=>{h.stop(),p&&zu(p.effects,h)};if(r&&e){const v=e;e=(...A)=>{v(...A),m()}}let T=g?new Array(i.length).fill(va):va;const x=v=>{if(!(!(h.flags&1)||!h.dirty&&!v))if(e){const A=h.run();if(s||_||(g?A.some((P,E)=>ls(P,T[E])):ls(A,T))){f&&f();const P=Os;Os=h;try{const E=[A,T===va?void 0:g&&T[0]===va?[]:T,d];l?l(e,3,E):e(...E),T=A}finally{Os=P}}}else h.run()};return a&&a(x),h=new Im(u),h.scheduler=o?()=>o(x,!1):x,d=v=>gx(v,!1,h),f=h.onStop=()=>{const v=ml.get(h);if(v){if(l)l(v,4);else for(const A of v)A();ml.delete(h)}},e?n?x(!0):T=h.run():o?o(x.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function ns(i,e=1/0,t){if(e<=0||!St(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,jt(i))ns(i.value,e,t);else if(ke(i))for(let n=0;n<i.length;n++)ns(i[n],e,t);else if(Tm(i)||Ar(i))i.forEach(n=>{ns(n,e,t)});else if(wm(i)){for(const n in i)ns(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&ns(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aa(i,e,t,n){try{return n?i(...n):i()}catch(s){Xl(s,e,t)}}function ui(i,e,t,n){if(Ve(i)){const s=aa(i,e,t,n);return s&&bm(s)&&s.catch(r=>{Xl(r,e,t)}),s}if(ke(i)){const s=[];for(let r=0;r<i.length;r++)s.push(ui(i[r],e,t,n));return s}}function Xl(i,e,t,n=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](i,l,c)===!1)return}a=a.parent}if(r){vs(),aa(r,null,10,[i,l,c]),ys();return}}vx(i,t,s,n,o)}function vx(i,e,t,n=!0,s=!1){if(s)throw i;console.error(i)}const nn=[];let Qn=-1;const Rr=[];let es=null,yr=0;const Zm=Promise.resolve();let _l=null;function yx(i){const e=_l||Zm;return i?e.then(this?i.bind(this):i):e}function Mx(i){let e=Qn+1,t=nn.length;for(;e<t;){const n=e+t>>>1,s=nn[n],r=ko(s);r<i||r===i&&s.flags&2?e=n+1:t=n}return e}function Ju(i){if(!(i.flags&1)){const e=ko(i),t=nn[nn.length-1];!t||!(i.flags&2)&&e>=ko(t)?nn.push(i):nn.splice(Mx(e),0,i),i.flags|=1,Jm()}}function Jm(){_l||(_l=Zm.then(e_))}function Sx(i){ke(i)?Rr.push(...i):es&&i.id===-1?es.splice(yr+1,0,i):i.flags&1||(Rr.push(i),i.flags|=1),Jm()}function od(i,e,t=Qn+1){for(;t<nn.length;t++){const n=nn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;nn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Qm(i){if(Rr.length){const e=[...new Set(Rr)].sort((t,n)=>ko(t)-ko(n));if(Rr.length=0,es){es.push(...e);return}for(es=e,yr=0;yr<es.length;yr++){const t=es[yr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}es=null,yr=0}}const ko=i=>i.id==null?i.flags&2?-1:1/0:i.id;function e_(i){try{for(Qn=0;Qn<nn.length;Qn++){const e=nn[Qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),aa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qn<nn.length;Qn++){const e=nn[Qn];e&&(e.flags&=-2)}Qn=-1,nn.length=0,Qm(),_l=null,(nn.length||Rr.length)&&e_()}}let si=null,t_=null;function gl(i){const e=si;return si=i,t_=i&&i.type.__scopeId||null,e}function Tx(i,e=si,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&pd(-1);const r=gl(e);let o;try{o=i(...s)}finally{gl(r),n._d&&pd(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ts(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(vs(),ui(l,t,8,[i.el,a,i,e]),ys())}}const bx=Symbol("_vte"),Ex=i=>i.__isTeleport;function Qu(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Qu(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function n_(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function bh(i,e,t,n,s=!1){if(ke(i)){i.forEach((_,g)=>bh(_,e&&(ke(e)?e[g]:e),t,n,s));return}if(wo(n)&&!s)return;const r=n.shapeFlag&4?sf(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,h=a.refs===ht?a.refs={}:a.refs,u=a.setupState,f=nt(u),d=u===ht?()=>!1:_=>it(f,_);if(c!=null&&c!==l&&(Pt(c)?(h[c]=null,d(c)&&(u[c]=null)):jt(c)&&(c.value=null)),Ve(l))aa(l,a,12,[o,h]);else{const _=Pt(l),g=jt(l);if(_||g){const p=()=>{if(i.f){const m=_?d(l)?u[l]:h[l]:l.value;s?ke(m)&&zu(m,r):ke(m)?m.includes(r)||m.push(r):_?(h[l]=[r],d(l)&&(u[l]=h[l])):(l.value=[r],i.k&&(h[i.k]=l.value))}else _?(h[l]=o,d(l)&&(u[l]=o)):g&&(l.value=o,i.k&&(h[i.k]=o))};o?(p.id=-1,Sn(p,t)):p()}}}Gl().requestIdleCallback;Gl().cancelIdleCallback;const wo=i=>!!i.type.__asyncLoader,i_=i=>i.type.__isKeepAlive;function wx(i,e){s_(i,"a",e)}function Ax(i,e){s_(i,"da",e)}function s_(i,e,t=sn){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(ql(e,n,t),t){let s=t.parent;for(;s&&s.parent;)i_(s.parent.vnode)&&Rx(n,e,t,s),s=s.parent}}function Rx(i,e,t,n){const s=ql(e,i,n,!0);o_(()=>{zu(n[e],s)},t)}function ql(i,e,t=sn,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{vs();const a=la(t),l=ui(e,t,i,o);return a(),ys(),l});return n?s.unshift(r):s.push(r),r}}const Gi=i=>(e,t=sn)=>{(!Vo||i==="sp")&&ql(i,(...n)=>e(...n),t)},Cx=Gi("bm"),r_=Gi("m"),Px=Gi("bu"),Lx=Gi("u"),Dx=Gi("bum"),o_=Gi("um"),Ix=Gi("sp"),Nx=Gi("rtg"),Ux=Gi("rtc");function Ox(i,e=sn){ql("ec",i,e)}const Fx=Symbol.for("v-ndc"),Eh=i=>i?w_(i)?sf(i):Eh(i.parent):null,Ao=Gt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Eh(i.parent),$root:i=>Eh(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>ef(i),$forceUpdate:i=>i.f||(i.f=()=>{Ju(i.update)}),$nextTick:i=>i.n||(i.n=yx.bind(i.proxy)),$watch:i=>rv.bind(i)}),mc=(i,e)=>i!==ht&&!i.__isScriptSetup&&it(i,e),Bx={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(mc(n,e))return o[e]=1,n[e];if(s!==ht&&it(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&it(c,e))return o[e]=3,r[e];if(t!==ht&&it(t,e))return o[e]=4,t[e];wh&&(o[e]=0)}}const h=Ao[e];let u,f;if(h)return e==="$attrs"&&qt(i.attrs,"get",""),h(i);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ht&&it(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,it(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return mc(s,e)?(s[e]=t,!0):n!==ht&&it(n,e)?(n[e]=t,!0):it(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==ht&&it(i,o)||mc(e,o)||(a=r[0])&&it(a,o)||it(n,o)||it(Ao,o)||it(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:it(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function ad(i){return ke(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let wh=!0;function kx(i){const e=ef(i),t=i.proxy,n=i.ctx;wh=!1,e.beforeCreate&&ld(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:d,updated:_,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:T,destroyed:x,unmounted:v,render:A,renderTracked:P,renderTriggered:E,errorCaptured:C,serverPrefetch:I,expose:y,inheritAttrs:b,components:z,directives:F,filters:V}=e;if(c&&zx(c,n,null),o)for(const Y in o){const G=o[Y];Ve(G)&&(n[Y]=G.bind(t))}if(s){const Y=s.call(t,t);St(Y)&&(i.data=Ku(Y))}if(wh=!0,r)for(const Y in r){const G=r[Y],ue=Ve(G)?G.bind(t,t):Ve(G.get)?G.get.bind(t,t):li,ce=!Ve(G)&&Ve(G.set)?G.set.bind(t):li,pe=Pv({get:ue,set:ce});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Ee=>pe.value=Ee})}if(a)for(const Y in a)a_(a[Y],n,t,Y);if(l){const Y=Ve(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(G=>{qx(G,Y[G])})}h&&ld(h,i,"c");function U(Y,G){ke(G)?G.forEach(ue=>Y(ue.bind(t))):G&&Y(G.bind(t))}if(U(Cx,u),U(r_,f),U(Px,d),U(Lx,_),U(wx,g),U(Ax,p),U(Ox,C),U(Ux,P),U(Nx,E),U(Dx,T),U(o_,v),U(Ix,I),ke(y))if(y.length){const Y=i.exposed||(i.exposed={});y.forEach(G=>{Object.defineProperty(Y,G,{get:()=>t[G],set:ue=>t[G]=ue})})}else i.exposed||(i.exposed={});A&&i.render===li&&(i.render=A),b!=null&&(i.inheritAttrs=b),z&&(i.components=z),F&&(i.directives=F),I&&n_(i)}function zx(i,e,t=li){ke(i)&&(i=Ah(i));for(const n in i){const s=i[n];let r;St(s)?"default"in s?r=el(s.from||n,s.default,!0):r=el(s.from||n):r=el(s),jt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function ld(i,e,t){ui(ke(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function a_(i,e,t,n){let s=n.includes(".")?M_(t,n):()=>t[n];if(Pt(i)){const r=e[i];Ve(r)&&gc(s,r)}else if(Ve(i))gc(s,i.bind(t));else if(St(i))if(ke(i))i.forEach(r=>a_(r,e,t,n));else{const r=Ve(i.handler)?i.handler.bind(t):e[i.handler];Ve(r)&&gc(s,r,i)}}function ef(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>xl(l,c,o,!0)),xl(l,e,o)),St(e)&&r.set(e,l),l}function xl(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&xl(i,r,t,!0),s&&s.forEach(o=>xl(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Hx[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Hx={data:cd,props:hd,emits:hd,methods:go,computed:go,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:go,directives:go,watch:Gx,provide:cd,inject:Vx};function cd(i,e){return e?i?function(){return Gt(Ve(i)?i.call(this,this):i,Ve(e)?e.call(this,this):e)}:e:i}function Vx(i,e){return go(Ah(i),Ah(e))}function Ah(i){if(ke(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Qt(i,e){return i?[...new Set([].concat(i,e))]:e}function go(i,e){return i?Gt(Object.create(null),i,e):e}function hd(i,e){return i?ke(i)&&ke(e)?[...new Set([...i,...e])]:Gt(Object.create(null),ad(i),ad(e??{})):e}function Gx(i,e){if(!i)return e;if(!e)return i;const t=Gt(Object.create(null),i);for(const n in e)t[n]=Qt(i[n],e[n]);return t}function l_(){return{app:null,config:{isNativeTag:L0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wx=0;function Xx(i,e){return function(n,s=null){Ve(n)||(n=Gt({},n)),s!=null&&!St(s)&&(s=null);const r=l_(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Wx++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Lv,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Ve(h.install)?(o.add(h),h.install(c,...u)):Ve(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const d=c._ceVNode||cs(n,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,h):i(d,h,f),l=!0,c._container=h,h.__vue_app__=c,sf(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(ui(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=Cr;Cr=c;try{return h()}finally{Cr=u}}};return c}}let Cr=null;function qx(i,e){if(sn){let t=sn.provides;const n=sn.parent&&sn.parent.provides;n===t&&(t=sn.provides=Object.create(n)),t[i]=e}}function el(i,e,t=!1){const n=sn||si;if(n||Cr){const s=Cr?Cr._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ve(e)?e.call(n&&n.proxy):e}}const c_={},h_=()=>Object.create(c_),u_=i=>Object.getPrototypeOf(i)===c_;function Yx(i,e,t,n=!1){const s={},r=h_();i.propsDefaults=Object.create(null),f_(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:cx(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function jx(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=nt(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const h=i.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Yl(i.emitsOptions,f))continue;const d=e[f];if(l)if(it(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=ps(f);s[_]=Rh(l,a,_,d,i,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{f_(i,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!it(e,u)&&((h=Qs(u))===u||!it(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=Rh(l,a,u,void 0,i,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!it(e,u))&&(delete r[u],c=!0)}c&&Ii(i.attrs,"set","")}function f_(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(So(l))continue;const c=e[l];let h;s&&it(s,h=ps(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:Yl(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=nt(t),c=a||ht;for(let h=0;h<r.length;h++){const u=r[h];t[u]=Rh(s,l,u,c[u],i,!it(c,u))}}return o}function Rh(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=it(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=s;if(t in c)n=c[t];else{const h=la(s);n=c[t]=l.call(null,e),h()}}else n=l;s.ce&&s.ce._setProp(t,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Qs(t))&&(n=!0))}return n}const Kx=new WeakMap;function d_(i,e,t=!1){const n=t?Kx:e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ve(i)){const h=u=>{l=!0;const[f,d]=d_(u,e,!0);Gt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(h),i.extends&&h(i.extends),i.mixins&&i.mixins.forEach(h)}if(!r&&!l)return St(i)&&n.set(i,wr),wr;if(ke(r))for(let h=0;h<r.length;h++){const u=ps(r[h]);ud(u)&&(o[u]=ht)}else if(r)for(const h in r){const u=ps(h);if(ud(u)){const f=r[h],d=o[u]=ke(f)||Ve(f)?{type:f}:Gt({},f),_=d.type;let g=!1,p=!0;if(ke(_))for(let m=0;m<_.length;++m){const T=_[m],x=Ve(T)&&T.name;if(x==="Boolean"){g=!0;break}else x==="String"&&(p=!1)}else g=Ve(_)&&_.name==="Boolean";d[0]=g,d[1]=p,(g||it(d,"default"))&&a.push(u)}}const c=[o,a];return St(i)&&n.set(i,c),c}function ud(i){return i[0]!=="$"&&!So(i)}const p_=i=>i[0]==="_"||i==="$stable",tf=i=>ke(i)?i.map(ti):[ti(i)],$x=(i,e,t)=>{if(e._n)return e;const n=Tx((...s)=>tf(e(...s)),t);return n._c=!1,n},m_=(i,e,t)=>{const n=i._ctx;for(const s in i){if(p_(s))continue;const r=i[s];if(Ve(r))e[s]=$x(s,r,n);else if(r!=null){const o=tf(r);e[s]=()=>o}}},__=(i,e)=>{const t=tf(e);i.slots.default=()=>t},g_=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},Zx=(i,e,t)=>{const n=i.slots=h_();if(i.vnode.shapeFlag&32){const s=e._;s?(g_(n,e,t),t&&Rm(n,"_",s,!0)):m_(e,n)}else e&&__(i,e)},Jx=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=ht;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:g_(s,e,t):(r=!e.$stable,m_(e,s)),o=e}else e&&(__(i,e),o={default:1});if(r)for(const a in s)!p_(a)&&o[a]==null&&delete s[a]},Sn=fv;function Qx(i){return ev(i)}function ev(i,e){const t=Gl();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:d=li,insertStaticContent:_}=i,g=(S,N,X,ee=null,j=null,te=null,ne=void 0,w=null,M=!!N.dynamicChildren)=>{if(S===N)return;S&&!so(S,N)&&(ee=_e(S),Ee(S,j,te,!0),S=null),N.patchFlag===-2&&(M=!1,N.dynamicChildren=null);const{type:D,ref:q,shapeFlag:W}=N;switch(D){case jl:p(S,N,X,ee);break;case zo:m(S,N,X,ee);break;case tl:S==null&&T(N,X,ee,ne);break;case Li:z(S,N,X,ee,j,te,ne,w,M);break;default:W&1?A(S,N,X,ee,j,te,ne,w,M):W&6?F(S,N,X,ee,j,te,ne,w,M):(W&64||W&128)&&D.process(S,N,X,ee,j,te,ne,w,M,Ge)}q!=null&&j&&bh(q,S&&S.ref,te,N||S,!N)},p=(S,N,X,ee)=>{if(S==null)n(N.el=a(N.children),X,ee);else{const j=N.el=S.el;N.children!==S.children&&c(j,N.children)}},m=(S,N,X,ee)=>{S==null?n(N.el=l(N.children||""),X,ee):N.el=S.el},T=(S,N,X,ee)=>{[S.el,S.anchor]=_(S.children,N,X,ee,S.el,S.anchor)},x=({el:S,anchor:N},X,ee)=>{let j;for(;S&&S!==N;)j=f(S),n(S,X,ee),S=j;n(N,X,ee)},v=({el:S,anchor:N})=>{let X;for(;S&&S!==N;)X=f(S),s(S),S=X;s(N)},A=(S,N,X,ee,j,te,ne,w,M)=>{N.type==="svg"?ne="svg":N.type==="math"&&(ne="mathml"),S==null?P(N,X,ee,j,te,ne,w,M):I(S,N,j,te,ne,w,M)},P=(S,N,X,ee,j,te,ne,w)=>{let M,D;const{props:q,shapeFlag:W,transition:H,dirs:re}=S;if(M=S.el=o(S.type,te,q&&q.is,q),W&8?h(M,S.children):W&16&&C(S.children,M,null,ee,j,_c(S,te),ne,w),re&&Ts(S,null,ee,"created"),E(M,S,S.scopeId,ne,ee),q){for(const le in q)le!=="value"&&!So(le)&&r(M,le,null,q[le],te,ee);"value"in q&&r(M,"value",null,q.value,te),(D=q.onVnodeBeforeMount)&&Jn(D,ee,S)}re&&Ts(S,null,ee,"beforeMount");const ie=tv(j,H);ie&&H.beforeEnter(M),n(M,N,X),((D=q&&q.onVnodeMounted)||ie||re)&&Sn(()=>{D&&Jn(D,ee,S),ie&&H.enter(M),re&&Ts(S,null,ee,"mounted")},j)},E=(S,N,X,ee,j)=>{if(X&&d(S,X),ee)for(let te=0;te<ee.length;te++)d(S,ee[te]);if(j){let te=j.subTree;if(N===te||T_(te.type)&&(te.ssContent===N||te.ssFallback===N)){const ne=j.vnode;E(S,ne,ne.scopeId,ne.slotScopeIds,j.parent)}}},C=(S,N,X,ee,j,te,ne,w,M=0)=>{for(let D=M;D<S.length;D++){const q=S[D]=w?ts(S[D]):ti(S[D]);g(null,q,N,X,ee,j,te,ne,w)}},I=(S,N,X,ee,j,te,ne)=>{const w=N.el=S.el;let{patchFlag:M,dynamicChildren:D,dirs:q}=N;M|=S.patchFlag&16;const W=S.props||ht,H=N.props||ht;let re;if(X&&bs(X,!1),(re=H.onVnodeBeforeUpdate)&&Jn(re,X,N,S),q&&Ts(N,S,X,"beforeUpdate"),X&&bs(X,!0),(W.innerHTML&&H.innerHTML==null||W.textContent&&H.textContent==null)&&h(w,""),D?y(S.dynamicChildren,D,w,X,ee,_c(N,j),te):ne||G(S,N,w,null,X,ee,_c(N,j),te,!1),M>0){if(M&16)b(w,W,H,X,j);else if(M&2&&W.class!==H.class&&r(w,"class",null,H.class,j),M&4&&r(w,"style",W.style,H.style,j),M&8){const ie=N.dynamicProps;for(let le=0;le<ie.length;le++){const Te=ie[le],oe=W[Te],fe=H[Te];(fe!==oe||Te==="value")&&r(w,Te,oe,fe,j,X)}}M&1&&S.children!==N.children&&h(w,N.children)}else!ne&&D==null&&b(w,W,H,X,j);((re=H.onVnodeUpdated)||q)&&Sn(()=>{re&&Jn(re,X,N,S),q&&Ts(N,S,X,"updated")},ee)},y=(S,N,X,ee,j,te,ne)=>{for(let w=0;w<N.length;w++){const M=S[w],D=N[w],q=M.el&&(M.type===Li||!so(M,D)||M.shapeFlag&70)?u(M.el):X;g(M,D,q,null,ee,j,te,ne,!0)}},b=(S,N,X,ee,j)=>{if(N!==X){if(N!==ht)for(const te in N)!So(te)&&!(te in X)&&r(S,te,N[te],null,j,ee);for(const te in X){if(So(te))continue;const ne=X[te],w=N[te];ne!==w&&te!=="value"&&r(S,te,w,ne,j,ee)}"value"in X&&r(S,"value",N.value,X.value,j)}},z=(S,N,X,ee,j,te,ne,w,M)=>{const D=N.el=S?S.el:a(""),q=N.anchor=S?S.anchor:a("");let{patchFlag:W,dynamicChildren:H,slotScopeIds:re}=N;re&&(w=w?w.concat(re):re),S==null?(n(D,X,ee),n(q,X,ee),C(N.children||[],X,q,j,te,ne,w,M)):W>0&&W&64&&H&&S.dynamicChildren?(y(S.dynamicChildren,H,X,j,te,ne,w),(N.key!=null||j&&N===j.subTree)&&x_(S,N,!0)):G(S,N,X,q,j,te,ne,w,M)},F=(S,N,X,ee,j,te,ne,w,M)=>{N.slotScopeIds=w,S==null?N.shapeFlag&512?j.ctx.activate(N,X,ee,ne,M):V(N,X,ee,j,te,ne,M):Z(S,N,M)},V=(S,N,X,ee,j,te,ne)=>{const w=S.component=bv(S,ee,j);if(i_(S)&&(w.ctx.renderer=Ge),Ev(w,!1,ne),w.asyncDep){if(j&&j.registerDep(w,U,ne),!S.el){const M=w.subTree=cs(zo);m(null,M,N,X)}}else U(w,S,N,X,j,te,ne)},Z=(S,N,X)=>{const ee=N.component=S.component;if(hv(S,N,X))if(ee.asyncDep&&!ee.asyncResolved){Y(ee,N,X);return}else ee.next=N,ee.update();else N.el=S.el,ee.vnode=N},U=(S,N,X,ee,j,te,ne)=>{const w=()=>{if(S.isMounted){let{next:W,bu:H,u:re,parent:ie,vnode:le}=S;{const we=v_(S);if(we){W&&(W.el=le.el,Y(S,W,ne)),we.asyncDep.then(()=>{S.isUnmounted||w()});return}}let Te=W,oe;bs(S,!1),W?(W.el=le.el,Y(S,W,ne)):W=le,H&&hc(H),(oe=W.props&&W.props.onVnodeBeforeUpdate)&&Jn(oe,ie,W,le),bs(S,!0);const fe=xc(S),Re=S.subTree;S.subTree=fe,g(Re,fe,u(Re.el),_e(Re),S,j,te),W.el=fe.el,Te===null&&uv(S,fe.el),re&&Sn(re,j),(oe=W.props&&W.props.onVnodeUpdated)&&Sn(()=>Jn(oe,ie,W,le),j)}else{let W;const{el:H,props:re}=N,{bm:ie,m:le,parent:Te,root:oe,type:fe}=S,Re=wo(N);if(bs(S,!1),ie&&hc(ie),!Re&&(W=re&&re.onVnodeBeforeMount)&&Jn(W,Te,N),bs(S,!0),H&&Ye){const we=()=>{S.subTree=xc(S),Ye(H,S.subTree,S,j,null)};Re&&fe.__asyncHydrate?fe.__asyncHydrate(H,S,we):we()}else{oe.ce&&oe.ce._injectChildStyle(fe);const we=S.subTree=xc(S);g(null,we,X,ee,S,j,te),N.el=we.el}if(le&&Sn(le,j),!Re&&(W=re&&re.onVnodeMounted)){const we=N;Sn(()=>Jn(W,Te,we),j)}(N.shapeFlag&256||Te&&wo(Te.vnode)&&Te.vnode.shapeFlag&256)&&S.a&&Sn(S.a,j),S.isMounted=!0,N=X=ee=null}};S.scope.on();const M=S.effect=new Im(w);S.scope.off();const D=S.update=M.run.bind(M),q=S.job=M.runIfDirty.bind(M);q.i=S,q.id=S.uid,M.scheduler=()=>Ju(q),bs(S,!0),D()},Y=(S,N,X)=>{N.component=S;const ee=S.vnode.props;S.vnode=N,S.next=null,jx(S,N.props,ee,X),Jx(S,N.children,X),vs(),od(S),ys()},G=(S,N,X,ee,j,te,ne,w,M=!1)=>{const D=S&&S.children,q=S?S.shapeFlag:0,W=N.children,{patchFlag:H,shapeFlag:re}=N;if(H>0){if(H&128){ce(D,W,X,ee,j,te,ne,w,M);return}else if(H&256){ue(D,W,X,ee,j,te,ne,w,M);return}}re&8?(q&16&&Se(D,j,te),W!==D&&h(X,W)):q&16?re&16?ce(D,W,X,ee,j,te,ne,w,M):Se(D,j,te,!0):(q&8&&h(X,""),re&16&&C(W,X,ee,j,te,ne,w,M))},ue=(S,N,X,ee,j,te,ne,w,M)=>{S=S||wr,N=N||wr;const D=S.length,q=N.length,W=Math.min(D,q);let H;for(H=0;H<W;H++){const re=N[H]=M?ts(N[H]):ti(N[H]);g(S[H],re,X,null,j,te,ne,w,M)}D>q?Se(S,j,te,!0,!1,W):C(N,X,ee,j,te,ne,w,M,W)},ce=(S,N,X,ee,j,te,ne,w,M)=>{let D=0;const q=N.length;let W=S.length-1,H=q-1;for(;D<=W&&D<=H;){const re=S[D],ie=N[D]=M?ts(N[D]):ti(N[D]);if(so(re,ie))g(re,ie,X,null,j,te,ne,w,M);else break;D++}for(;D<=W&&D<=H;){const re=S[W],ie=N[H]=M?ts(N[H]):ti(N[H]);if(so(re,ie))g(re,ie,X,null,j,te,ne,w,M);else break;W--,H--}if(D>W){if(D<=H){const re=H+1,ie=re<q?N[re].el:ee;for(;D<=H;)g(null,N[D]=M?ts(N[D]):ti(N[D]),X,ie,j,te,ne,w,M),D++}}else if(D>H)for(;D<=W;)Ee(S[D],j,te,!0),D++;else{const re=D,ie=D,le=new Map;for(D=ie;D<=H;D++){const Ce=N[D]=M?ts(N[D]):ti(N[D]);Ce.key!=null&&le.set(Ce.key,D)}let Te,oe=0;const fe=H-ie+1;let Re=!1,we=0;const ge=new Array(fe);for(D=0;D<fe;D++)ge[D]=0;for(D=re;D<=W;D++){const Ce=S[D];if(oe>=fe){Ee(Ce,j,te,!0);continue}let Xe;if(Ce.key!=null)Xe=le.get(Ce.key);else for(Te=ie;Te<=H;Te++)if(ge[Te-ie]===0&&so(Ce,N[Te])){Xe=Te;break}Xe===void 0?Ee(Ce,j,te,!0):(ge[Xe-ie]=D+1,Xe>=we?we=Xe:Re=!0,g(Ce,N[Xe],X,null,j,te,ne,w,M),oe++)}const We=Re?nv(ge):wr;for(Te=We.length-1,D=fe-1;D>=0;D--){const Ce=ie+D,Xe=N[Ce],O=Ce+1<q?N[Ce+1].el:ee;ge[D]===0?g(null,Xe,X,O,j,te,ne,w,M):Re&&(Te<0||D!==We[Te]?pe(Xe,X,O,2):Te--)}}},pe=(S,N,X,ee,j=null)=>{const{el:te,type:ne,transition:w,children:M,shapeFlag:D}=S;if(D&6){pe(S.component.subTree,N,X,ee);return}if(D&128){S.suspense.move(N,X,ee);return}if(D&64){ne.move(S,N,X,Ge);return}if(ne===Li){n(te,N,X);for(let W=0;W<M.length;W++)pe(M[W],N,X,ee);n(S.anchor,N,X);return}if(ne===tl){x(S,N,X);return}if(ee!==2&&D&1&&w)if(ee===0)w.beforeEnter(te),n(te,N,X),Sn(()=>w.enter(te),j);else{const{leave:W,delayLeave:H,afterLeave:re}=w,ie=()=>n(te,N,X),le=()=>{W(te,()=>{ie(),re&&re()})};H?H(te,ie,le):le()}else n(te,N,X)},Ee=(S,N,X,ee=!1,j=!1)=>{const{type:te,props:ne,ref:w,children:M,dynamicChildren:D,shapeFlag:q,patchFlag:W,dirs:H,cacheIndex:re}=S;if(W===-2&&(j=!1),w!=null&&bh(w,null,X,S,!0),re!=null&&(N.renderCache[re]=void 0),q&256){N.ctx.deactivate(S);return}const ie=q&1&&H,le=!wo(S);let Te;if(le&&(Te=ne&&ne.onVnodeBeforeUnmount)&&Jn(Te,N,S),q&6)ae(S.component,X,ee);else{if(q&128){S.suspense.unmount(X,ee);return}ie&&Ts(S,null,N,"beforeUnmount"),q&64?S.type.remove(S,N,X,Ge,ee):D&&!D.hasOnce&&(te!==Li||W>0&&W&64)?Se(D,N,X,!1,!0):(te===Li&&W&384||!j&&q&16)&&Se(M,N,X),ee&&Be(S)}(le&&(Te=ne&&ne.onVnodeUnmounted)||ie)&&Sn(()=>{Te&&Jn(Te,N,S),ie&&Ts(S,null,N,"unmounted")},X)},Be=S=>{const{type:N,el:X,anchor:ee,transition:j}=S;if(N===Li){J(X,ee);return}if(N===tl){v(S);return}const te=()=>{s(X),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(S.shapeFlag&1&&j&&!j.persisted){const{leave:ne,delayLeave:w}=j,M=()=>ne(X,te);w?w(S.el,te,M):M()}else te()},J=(S,N)=>{let X;for(;S!==N;)X=f(S),s(S),S=X;s(N)},ae=(S,N,X)=>{const{bum:ee,scope:j,job:te,subTree:ne,um:w,m:M,a:D}=S;fd(M),fd(D),ee&&hc(ee),j.stop(),te&&(te.flags|=8,Ee(ne,S,N,X)),w&&Sn(w,N),Sn(()=>{S.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},Se=(S,N,X,ee=!1,j=!1,te=0)=>{for(let ne=te;ne<S.length;ne++)Ee(S[ne],N,X,ee,j)},_e=S=>{if(S.shapeFlag&6)return _e(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const N=f(S.anchor||S.el),X=N&&N[bx];return X?f(X):N};let Oe=!1;const Ie=(S,N,X)=>{S==null?N._vnode&&Ee(N._vnode,null,null,!0):g(N._vnode||null,S,N,null,null,null,X),N._vnode=S,Oe||(Oe=!0,od(),Qm(),Oe=!1)},Ge={p:g,um:Ee,m:pe,r:Be,mt:V,mc:C,pc:G,pbc:y,n:_e,o:i};let Je,Ye;return{render:Ie,hydrate:Je,createApp:Xx(Ie,Je)}}function _c({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function bs({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function tv(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function x_(i,e,t=!1){const n=i.children,s=e.children;if(ke(n)&&ke(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ts(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&x_(o,a)),a.type===jl&&(a.el=o.el)}}function nv(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function v_(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:v_(e)}function fd(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const iv=Symbol.for("v-scx"),sv=()=>el(iv);function gc(i,e,t){return y_(i,e,t)}function y_(i,e,t=ht){const{immediate:n,deep:s,flush:r,once:o}=t,a=Gt({},t),l=e&&n||!e&&r!=="post";let c;if(Vo){if(r==="sync"){const d=sv();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=li,d.resume=li,d.pause=li,d}}const h=sn;a.call=(d,_,g)=>ui(d,h,_,g);let u=!1;r==="post"?a.scheduler=d=>{Sn(d,h&&h.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,_)=>{_?d():Ju(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const f=xx(i,e,a);return Vo&&(c?c.push(f):l&&f()),f}function rv(i,e,t){const n=this.proxy,s=Pt(i)?i.includes(".")?M_(n,i):()=>n[i]:i.bind(n,n);let r;Ve(e)?r=e:(r=e.handler,t=e);const o=la(this),a=y_(s,r.bind(n),t);return o(),a}function M_(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}const ov=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${ps(e)}Modifiers`]||i[`${Qs(e)}Modifiers`];function av(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ht;let s=t;const r=e.startsWith("update:"),o=r&&ov(n,e.slice(7));o&&(o.trim&&(s=t.map(h=>Pt(h)?h.trim():h)),o.number&&(s=t.map(O0)));let a,l=n[a=cc(e)]||n[a=cc(ps(e))];!l&&r&&(l=n[a=cc(Qs(e))]),l&&ui(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ui(c,i,6,s)}}function S_(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ve(i)){const l=c=>{const h=S_(c,e,!0);h&&(a=!0,Gt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(St(i)&&n.set(i,null),null):(ke(r)?r.forEach(l=>o[l]=null):Gt(o,r),St(i)&&n.set(i,o),o)}function Yl(i,e){return!i||!zl(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(i,e[0].toLowerCase()+e.slice(1))||it(i,Qs(e))||it(i,e))}function xc(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:d,ctx:_,inheritAttrs:g}=i,p=gl(i);let m,T;try{if(t.shapeFlag&4){const v=s||n,A=v;m=ti(c.call(A,v,h,u,d,f,_)),T=a}else{const v=e;m=ti(v.length>1?v(u,{attrs:a,slots:o,emit:l}):v(u,null)),T=e.props?a:lv(a)}}catch(v){Ro.length=0,Xl(v,i,1),m=cs(zo)}let x=m;if(T&&g!==!1){const v=Object.keys(T),{shapeFlag:A}=x;v.length&&A&7&&(r&&v.some(ku)&&(T=cv(T,r)),x=Br(x,T,!1,!0))}return t.dirs&&(x=Br(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Qu(x,t.transition),m=x,gl(p),m}const lv=i=>{let e;for(const t in i)(t==="class"||t==="style"||zl(t))&&((e||(e={}))[t]=i[t]);return e},cv=(i,e)=>{const t={};for(const n in i)(!ku(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function hv(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?dd(n,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==n[f]&&!Yl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?dd(n,o,c):!0:!!o;return!1}function dd(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Yl(t,r))return!0}return!1}function uv({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const T_=i=>i.__isSuspense;function fv(i,e){e&&e.pendingBranch?ke(i)?e.effects.push(...i):e.effects.push(i):Sx(i)}const Li=Symbol.for("v-fgt"),jl=Symbol.for("v-txt"),zo=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),Ro=[];let wn=null;function dv(i=!1){Ro.push(wn=i?null:[])}function pv(){Ro.pop(),wn=Ro[Ro.length-1]||null}let Ho=1;function pd(i){Ho+=i,i<0&&wn&&(wn.hasOnce=!0)}function mv(i){return i.dynamicChildren=Ho>0?wn||wr:null,pv(),Ho>0&&wn&&wn.push(i),i}function _v(i,e,t,n,s,r){return mv(vl(i,e,t,n,s,r,!0))}function b_(i){return i?i.__v_isVNode===!0:!1}function so(i,e){return i.type===e.type&&i.key===e.key}const E_=({key:i})=>i??null,nl=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Pt(i)||jt(i)||Ve(i)?{i:si,r:i,k:e,f:!!t}:i:null);function vl(i,e=null,t=null,n=0,s=null,r=i===Li?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&E_(e),ref:e&&nl(e),scopeId:t_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:si};return a?(nf(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),Ho>0&&!o&&wn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&wn.push(l),l}const cs=gv;function gv(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Fx)&&(i=zo),b_(i)){const a=Br(i,e,!0);return t&&nf(a,t),Ho>0&&!r&&wn&&(a.shapeFlag&6?wn[wn.indexOf(i)]=a:wn.push(a)),a.patchFlag=-2,a}if(Cv(i)&&(i=i.__vccOpts),e){e=xv(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=Wl(a)),St(l)&&(Zu(l)&&!ke(l)&&(l=Gt({},l)),e.style=Vu(l))}const o=Pt(i)?1:T_(i)?128:Ex(i)?64:St(i)?4:Ve(i)?2:0;return vl(i,e,t,n,s,o,r,!0)}function xv(i){return i?Zu(i)||u_(i)?Gt({},i):i:null}function Br(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=e?Mv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&E_(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(nl(e)):[r,nl(e)]:nl(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Li?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Br(i.ssContent),ssFallback:i.ssFallback&&Br(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Qu(h,l.clone(h)),h}function vv(i=" ",e=0){return cs(jl,null,i,e)}function yv(i,e){const t=cs(tl,null,i);return t.staticCount=e,t}function ti(i){return i==null||typeof i=="boolean"?cs(zo):ke(i)?cs(Li,null,i.slice()):b_(i)?ts(i):cs(jl,null,String(i))}function ts(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Br(i)}function nf(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),nf(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!u_(e)?e._ctx=si:s===3&&si&&(si.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:si},t=32):(e=String(e),n&64?(t=16,e=[vv(e)]):t=8);i.children=e,i.shapeFlag|=t}function Mv(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Wl([e.class,n.class]));else if(s==="style")e.style=Vu([e.style,n.style]);else if(zl(s)){const r=e[s],o=n[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function Jn(i,e,t,n=null){ui(i,e,7,[t,n])}const Sv=l_();let Tv=0;function bv(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Sv,r={uid:Tv++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new G0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:d_(n,s),emitsOptions:S_(n,s),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:n.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=av.bind(null,r),i.ce&&i.ce(r),r}let sn=null,yl,Ch;{const i=Gl(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};yl=e("__VUE_INSTANCE_SETTERS__",t=>sn=t),Ch=e("__VUE_SSR_SETTERS__",t=>Vo=t)}const la=i=>{const e=sn;return yl(i),i.scope.on(),()=>{i.scope.off(),yl(e)}},md=()=>{sn&&sn.scope.off(),yl(null)};function w_(i){return i.vnode.shapeFlag&4}let Vo=!1;function Ev(i,e=!1,t=!1){e&&Ch(e);const{props:n,children:s}=i.vnode,r=w_(i);Yx(i,n,r,e),Zx(i,s,t);const o=r?wv(i,e):void 0;return e&&Ch(!1),o}function wv(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Bx);const{setup:n}=t;if(n){vs();const s=i.setupContext=n.length>1?Rv(i):null,r=la(i),o=aa(n,i,0,[i.props,s]),a=bm(o);if(ys(),r(),(a||i.sp)&&!wo(i)&&n_(i),a){if(o.then(md,md),e)return o.then(l=>{_d(i,l,e)}).catch(l=>{Xl(l,i,0)});i.asyncDep=o}else _d(i,o,e)}else A_(i,e)}function _d(i,e,t){Ve(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:St(e)&&(i.setupState=$m(e)),A_(i,t)}let gd;function A_(i,e,t){const n=i.type;if(!i.render){if(!e&&gd&&!n.render){const s=n.template||ef(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Gt(Gt({isCustomElement:r,delimiters:a},o),l);n.render=gd(s,c)}}i.render=n.render||li}{const s=la(i);vs();try{kx(i)}finally{ys(),s()}}}const Av={get(i,e){return qt(i,"get",""),i[e]}};function Rv(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,Av),slots:i.slots,emit:i.emit,expose:e}}function sf(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy($m(hx(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ao)return Ao[t](i)},has(e,t){return t in e||t in Ao}})):i.proxy}function Cv(i){return Ve(i)&&"__vccOpts"in i}const Pv=(i,e)=>_x(i,e,Vo),Lv="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ph;const xd=typeof window<"u"&&window.trustedTypes;if(xd)try{Ph=xd.createPolicy("vue",{createHTML:i=>i})}catch{}const R_=Ph?i=>Ph.createHTML(i):i=>i,Dv="http://www.w3.org/2000/svg",Iv="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,vd=Ri&&Ri.createElement("template"),Nv={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?Ri.createElementNS(Dv,i):e==="mathml"?Ri.createElementNS(Iv,i):t?Ri.createElement(i,{is:t}):Ri.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Ri.createTextNode(i),createComment:i=>Ri.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ri.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{vd.innerHTML=R_(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=vd.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Uv=Symbol("_vtc");function Ov(i,e,t){const n=i[Uv];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const yd=Symbol("_vod"),Fv=Symbol("_vsh"),Bv=Symbol(""),kv=/(^|;)\s*display\s*:/;function zv(i,e,t){const n=i.style,s=Pt(t);let r=!1;if(t&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&il(n,a,"")}else for(const o in e)t[o]==null&&il(n,o,"");for(const o in t)o==="display"&&(r=!0),il(n,o,t[o])}else if(s){if(e!==t){const o=n[Bv];o&&(t+=";"+o),n.cssText=t,r=kv.test(t)}}else e&&i.removeAttribute("style");yd in i&&(i[yd]=r?n.display:"",i[Fv]&&(n.display="none"))}const Md=/\s*!important$/;function il(i,e,t){if(ke(t))t.forEach(n=>il(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Hv(i,e);Md.test(t)?i.setProperty(Qs(n),t.replace(Md,""),"important"):i[n]=t}}const Sd=["Webkit","Moz","ms"],vc={};function Hv(i,e){const t=vc[e];if(t)return t;let n=ps(e);if(n!=="filter"&&n in i)return vc[e]=n;n=Am(n);for(let s=0;s<Sd.length;s++){const r=Sd[s]+n;if(r in i)return vc[e]=r}return e}const Td="http://www.w3.org/1999/xlink";function bd(i,e,t,n,s,r=V0(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Td,e.slice(6,e.length)):i.setAttributeNS(Td,e,t):t==null||r&&!Cm(t)?i.removeAttribute(e):i.setAttribute(e,r?"":xs(t)?String(t):t)}function Ed(i,e,t,n,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?R_(t):t);return}const r=i.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Cm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(s||e)}function Vv(i,e,t,n){i.addEventListener(e,t,n)}function Gv(i,e,t,n){i.removeEventListener(e,t,n)}const wd=Symbol("_vei");function Wv(i,e,t,n,s=null){const r=i[wd]||(i[wd]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Xv(e);if(n){const c=r[e]=jv(n,s);Vv(i,a,c,l)}else o&&(Gv(i,a,o,l),r[e]=void 0)}}const Ad=/(?:Once|Passive|Capture)$/;function Xv(i){let e;if(Ad.test(i)){e={};let n;for(;n=i.match(Ad);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Qs(i.slice(2)),e]}let yc=0;const qv=Promise.resolve(),Yv=()=>yc||(qv.then(()=>yc=0),yc=Date.now());function jv(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ui(Kv(n,t.value),e,5,[n])};return t.value=i,t.attached=Yv(),t}function Kv(i,e){if(ke(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Rd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,$v=(i,e,t,n,s,r)=>{const o=s==="svg";e==="class"?Ov(i,n,o):e==="style"?zv(i,t,n):zl(e)?ku(e)||Wv(i,e,t,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zv(i,e,n,o))?(Ed(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bd(i,e,n,o,r,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Pt(n))?Ed(i,ps(e),n,r,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),bd(i,e,n,o))};function Zv(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Rd(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rd(e)&&Pt(t)?!1:e in i}const Jv=Gt({patchProp:$v},Nv);let Cd;function Qv(){return Cd||(Cd=Qx(Jv))}const ey=(...i)=>{const e=Qv().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=ny(n);if(!s)return;const r=e._component;!Ve(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,ty(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ty(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function ny(i){return Pt(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="169",Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iy=0,Pd=1,sy=2,C_=1,ry=2,Ai=3,Bi=0,fn=1,Un=2,hs=0,Lr=1,Go=2,Ld=3,Dd=4,oy=5,ks=100,ay=101,ly=102,cy=103,hy=104,uy=200,fy=201,dy=202,py=203,Lh=204,Dh=205,my=206,_y=207,gy=208,xy=209,vy=210,yy=211,My=212,Sy=213,Ty=214,Ih=0,Nh=1,Uh=2,kr=3,Oh=4,Fh=5,Bh=6,kh=7,P_=0,by=1,Ey=2,us=0,wy=1,Ay=2,Ry=3,L_=4,Cy=5,Py=6,Ly=7,Id="attached",Dy="detached",D_=300,zr=301,Hr=302,Ml=303,zh=304,Kl=306,ms=1e3,ri=1001,Sl=1002,on=1003,I_=1004,xo=1005,Ft=1006,sl=1007,oi=1008,ki=1009,N_=1010,U_=1011,Wo=1012,of=1013,js=1014,un=1015,Kn=1016,af=1017,lf=1018,Vr=1020,O_=35902,F_=1021,B_=1022,On=1023,k_=1024,z_=1025,Dr=1026,Gr=1027,cf=1028,hf=1029,H_=1030,uf=1031,ff=1033,rl=33776,ol=33777,al=33778,ll=33779,Hh=35840,Vh=35841,Gh=35842,Wh=35843,Xh=36196,qh=37492,Yh=37496,jh=37808,Kh=37809,$h=37810,Zh=37811,Jh=37812,Qh=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,cl=36492,lu=36494,cu=36495,V_=36283,hu=36284,uu=36285,fu=36286,Xo=2300,qo=2301,Mc=2302,Nd=2400,Ud=2401,Od=2402,Iy=2500,Ny=0,G_=1,du=2,Uy=3200,Oy=3201,W_=0,Fy=1,is="",Ut="srgb",Lt="srgb-linear",df="display-p3",$l="display-p3-linear",Tl="linear",pt="srgb",bl="rec709",El="p3",sr=7680,Fd=519,By=512,ky=513,zy=514,X_=515,Hy=516,Vy=517,Gy=518,Wy=519,pu=35044,Bd="300 es",Ui=2e3,wl=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kd=1234567;const Co=Math.PI/180,Wr=180/Math.PI;function kn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function pf(i,e){return(i%e+e)%e}function Xy(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qy(i,e,t){return i!==e?(t-i)/(e-i):0}function Po(i,e,t){return(1-t)*i+t*e}function Yy(i,e,t,n){return Po(i,e,1-Math.exp(-t*n))}function jy(i,e=1){return e-Math.abs(pf(i,e*2)-e)}function Ky(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $y(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jy(i,e){return i+Math.random()*(e-i)}function Qy(i){return i*(.5-Math.random())}function eM(i){i!==void 0&&(kd=i);let e=kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tM(i){return i*Co}function nM(i){return i*Wr}function iM(i){return(i&i-1)===0&&i!==0}function sM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rM(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oM(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const q_={DEG2RAD:Co,RAD2DEG:Wr,generateUUID:kn,clamp:Rt,euclideanModulo:pf,mapLinear:Xy,inverseLerp:qy,lerp:Po,damp:Yy,pingpong:jy,smoothstep:Ky,smootherstep:$y,randInt:Zy,randFloat:Jy,randFloatSpread:Qy,seededRandom:eM,degToRad:tM,radToDeg:nM,isPowerOfTwo:iM,ceilPowerOfTwo:sM,floorPowerOfTwo:rM,setQuaternionFromProperEuler:oM,normalize:rt,denormalize:Yn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=s[0],p=s[3],m=s[6],T=s[1],x=s[4],v=s[7],A=s[2],P=s[5],E=s[8];return r[0]=o*g+a*T+l*A,r[3]=o*p+a*x+l*P,r[6]=o*m+a*v+l*E,r[1]=c*g+h*T+u*A,r[4]=c*p+h*x+u*P,r[7]=c*m+h*v+u*E,r[2]=f*g+d*T+_*A,r[5]=f*p+d*x+_*P,r[8]=f*m+d*v+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,_=t*u+n*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=f*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new He;function Y_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function aM(){const i=Yo("canvas");return i.style.display="block",i}const zd={};function hl(i){i in zd||(zd[i]=!0,console.warn(i))}function lM(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function cM(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hM(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hd=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vd=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[Lt]:{transfer:Tl,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ut]:{transfer:pt,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$l]:{transfer:Tl,primaries:El,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Vd),fromReference:i=>i.applyMatrix3(Hd)},[df]:{transfer:pt,primaries:El,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vd),fromReference:i=>i.applyMatrix3(Hd).convertLinearToSRGB()}},uM=new Set([Lt,$l]),Ze={enabled:!0,_workingColorSpace:Lt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!uM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ro[e].toReference,s=ro[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ro[i].primaries},getTransfer:function(i){return i===is?Tl:ro[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ro[e].luminanceCoefficients)}};function Ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rr;class fM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Yo("canvas")),rr.width=e.width,rr.height=e.height;const n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ir(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class j_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bc(s[o].image)):r.push(bc(s[o]))}else r=bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pM=0;class Bt extends er{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=ri,s=ri,r=Ft,o=oi,a=On,l=ki,c=Bt.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=kn(),this.name="",this.source=new j_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=D_;Bt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,s=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,A=(m+1)/2,P=(h+f)/4,E=(u+g)/4,C=(_+p)/4;return x>v&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=P/n,r=E/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=P/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=C/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(u-g)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends er{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new j_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends mM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class K_ extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _M extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let p=1-a;const m=l*f+c*d+h*_+u*g,T=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),P=Math.atan2(A,m*T);p=Math.sin(p*P)/A,a=Math.sin(a*P)/A}const v=a*T;if(l=l*p+f*v,c=c*p+d*v,h=h*p+_*v,u=u*p+g*v,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*d-c*f,e[t+1]=l*_+h*f+c*u-a*d,e[t+2]=c*_+h*d+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new L,Gd=new zn;class Wi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Ma.subVectors(this.max,oo),or.subVectors(e.a,oo),ar.subVectors(e.b,oo),lr.subVectors(e.c,oo),qi.subVectors(ar,or),Yi.subVectors(lr,ar),Es.subVectors(or,lr);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Es.z,Es.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Es.z,0,-Es.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Es.y,Es.x,0];return!wc(t,or,ar,lr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,or,ar,lr,Ma))?!1:(Sa.crossVectors(qi,Yi),t=[Sa.x,Sa.y,Sa.z],wc(t,or,ar,lr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,ya=new Wi,or=new L,ar=new L,lr=new L,qi=new L,Yi=new L,Es=new L,oo=new L,Ma=new L,Sa=new L,ws=new L;function wc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);const a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gM=new Wi,ao=new L,Ac=new L;class pi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gM.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Ac)),this.expandByPoint(ao.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new L,Rc=new L,Ta=new L,ji=new L,Cc=new L,ba=new L,Pc=new L;class ca{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Rc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ta),a=ji.dot(this.direction),l=-ji.dot(Ta),c=ji.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Rc).addScaledVector(Ta,f),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,s,r){Cc.subVectors(t,e),ba.subVectors(n,e),Pc.crossVectors(Cc,ba);let o=this.direction.dot(Pc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(ba.crossVectors(ji,ba));if(l<0)return null;const c=a*this.direction.dot(Cc.cross(ji));if(c<0||l+c>o)return null;const h=-a*ji.dot(Pc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,_,g,p){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,_,g,p)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,_=c*h,g=c*u;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,_=c*h,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=_*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+_,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xM,e,vM)}lookAt(e,t,n){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ki.crossVectors(n,yn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ki.crossVectors(n,yn)),Ki.normalize(),Ea.crossVectors(yn,Ki),s[0]=Ki.x,s[4]=Ea.x,s[8]=yn.x,s[1]=Ki.y,s[5]=Ea.y,s[9]=yn.y,s[2]=Ki.z,s[6]=Ea.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],T=n[3],x=n[7],v=n[11],A=n[15],P=s[0],E=s[4],C=s[8],I=s[12],y=s[1],b=s[5],z=s[9],F=s[13],V=s[2],Z=s[6],U=s[10],Y=s[14],G=s[3],ue=s[7],ce=s[11],pe=s[15];return r[0]=o*P+a*y+l*V+c*G,r[4]=o*E+a*b+l*Z+c*ue,r[8]=o*C+a*z+l*U+c*ce,r[12]=o*I+a*F+l*Y+c*pe,r[1]=h*P+u*y+f*V+d*G,r[5]=h*E+u*b+f*Z+d*ue,r[9]=h*C+u*z+f*U+d*ce,r[13]=h*I+u*F+f*Y+d*pe,r[2]=_*P+g*y+p*V+m*G,r[6]=_*E+g*b+p*Z+m*ue,r[10]=_*C+g*z+p*U+m*ce,r[14]=_*I+g*F+p*Y+m*pe,r[3]=T*P+x*y+v*V+A*G,r[7]=T*E+x*b+v*Z+A*ue,r[11]=T*C+x*z+v*U+A*ce,r[15]=T*I+x*F+v*Y+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],T=u*p*c-g*f*c+g*l*d-a*p*d-u*l*m+a*f*m,x=_*f*c-h*p*c-_*l*d+o*p*d+h*l*m-o*f*m,v=h*g*c-_*u*c+_*a*d-o*g*d-h*a*m+o*u*m,A=_*u*l-h*g*l-_*a*f+o*g*f+h*a*p-o*u*p,P=t*T+n*x+s*v+r*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/P;return e[0]=T*E,e[1]=(g*f*r-u*p*r-g*s*d+n*p*d+u*s*m-n*f*m)*E,e[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*m+n*l*m)*E,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*E,e[4]=x*E,e[5]=(h*p*r-_*f*r+_*s*d-t*p*d-h*s*m+t*f*m)*E,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*m-t*l*m)*E,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*E,e[8]=v*E,e[9]=(_*u*r-h*g*r-_*n*d+t*g*d+h*n*m-t*u*m)*E,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*E,e[12]=A*E,e[13]=(h*g*s-_*u*s+_*n*f-t*g*f-h*n*p+t*u*p)*E,e[14]=(_*a*s-o*g*s-_*n*l+t*g*l+o*n*p-t*a*p)*E,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,_=r*u,g=o*h,p=o*u,m=a*u,T=l*c,x=l*h,v=l*u,A=n.x,P=n.y,E=n.z;return s[0]=(1-(g+m))*A,s[1]=(d+v)*A,s[2]=(_-x)*A,s[3]=0,s[4]=(d-v)*P,s[5]=(1-(f+m))*P,s[6]=(p+T)*P,s[7]=0,s[8]=(_+x)*E,s[9]=(p-T)*E,s[10]=(1-(f+g))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=cr.set(s[0],s[1],s[2]).length();const o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);const c=1/r,h=1/o,u=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ui){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let d,_;if(a===Ui)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===wl)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ui){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,d=(n+s)*h;let _,g;if(a===Ui)_=(o+r)*u,g=-2*u;else if(a===wl)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cr=new L,Wn=new Ne,xM=new L(0,0,0),vM=new L(1,1,1),Ki=new L,Ea=new L,yn=new L,Wd=new Ne,Xd=new zn;class fi{constructor(e=0,t=0,n=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yM=0;const qd=new L,hr=new zn,Ti=new Ne,wa=new L,lo=new L,MM=new L,SM=new zn,Yd=new L(1,0,0),jd=new L(0,1,0),Kd=new L(0,0,1),$d={type:"added"},TM={type:"removed"},ur={type:"childadded",child:null},Lc={type:"childremoved",child:null};class ft extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new fi,n=new zn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new He}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(lo,wa,this.up):Ti.lookAt(wa,lo,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Ti),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(TM),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,MM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,SM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new L,bi=new L,Dc=new L,Ei=new L,fr=new L,dr=new L,Zd=new L,Ic=new L,Nc=new L,Uc=new L,Oc=new je,Fc=new je,Bc=new je;class jn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),bi.subVectors(n,t),Dc.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(bi),l=Xn.dot(Dc),c=bi.dot(bi),h=bi.dot(Dc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Oc.setScalar(0),Fc.setScalar(0),Bc.setScalar(0),Oc.fromBufferAttribute(e,t),Fc.fromBufferAttribute(e,n),Bc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Oc,r.x),o.addScaledVector(Fc,r.y),o.addScaledVector(Bc,r.z),o}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),bi.subVectors(e,t),Xn.cross(bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Xn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;fr.subVectors(s,n),dr.subVectors(r,n),Ic.subVectors(e,n);const l=fr.dot(Ic),c=dr.dot(Ic);if(l<=0&&c<=0)return t.copy(n);Nc.subVectors(e,s);const h=fr.dot(Nc),u=dr.dot(Nc);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(fr,o);Uc.subVectors(e,r);const d=fr.dot(Uc),_=dr.dot(Uc);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(dr,a);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return Zd.subVectors(r,s),a=(u-h)/(u-h+(d-_)),t.copy(s).addScaledVector(Zd,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(fr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=pf(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=kc(o,r,e+1/3),this.g=kc(o,r,e),this.b=kc(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=Z_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Tc(e.r),this.g=Tc(e.g),this.b=Tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ze.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Rt(Xt.r*255,0,255))*65536+Math.round(Rt(Xt.g*255,0,255))*256+Math.round(Rt(Xt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ut){Ze.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Aa);const n=Po($i.h,Aa.h,t),s=Po($i.s,Aa.s,t),r=Po($i.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new De;De.NAMES=Z_;let bM=0;class ci extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Lr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lh&&(n.blendSrc=this.blendSrc),this.blendDst!==Dh&&(n.blendDst=this.blendDst),this.blendEquation!==ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oi extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ni=EM();function EM(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function wM(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Rt(i,-65504,65504),Ni.floatView[0]=i;const e=Ni.uint32View[0],t=e>>23&511;return Ni.baseTable[t]+((e&8388607)>>Ni.shiftTable[t])}function AM(i){const e=i>>10;return Ni.uint32View[0]=Ni.mantissaTable[Ni.offsetTable[e]+(i&1023)]+Ni.exponentTable[e],Ni.floatView[0]}const Ra={toHalfFloat:wM,fromHalfFloat:AM},wt=new L,Ca=new me;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pu,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),e}}class J_ extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Q_ extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let RM=0;const Dn=new Ne,zc=new ft,pr=new L,Mn=new Wi,co=new Wi,Nt=new L;class Zt extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y_(e)?Q_:J_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Mn.min,co.min),Mn.expandByPoint(Nt),Nt.addVectors(Mn.max,co.max),Mn.expandByPoint(Nt)):(Mn.expandByPoint(co.min),Mn.expandByPoint(co.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),Nt.add(pr)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;const c=new L,h=new L,u=new L,f=new me,d=new me,_=new me,g=new L,p=new L;function m(C,I,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,I),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const b=1/(d.x*_.y-_.x*d.y);isFinite(b)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(b),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(b),a[C].add(g),a[I].add(g),a[y].add(g),l[C].add(p),l[I].add(p),l[y].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,I=T.length;C<I;++C){const y=T[C],b=y.start,z=y.count;for(let F=b,V=b+z;F<V;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new L,v=new L,A=new L,P=new L;function E(C){A.fromBufferAttribute(s,C),P.copy(A);const I=a[C];x.copy(I),x.sub(A.multiplyScalar(A.dot(I))).normalize(),v.crossVectors(P,I);const b=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,b)}for(let C=0,I=T.length;C<I;++C){const y=T[C],b=y.start,z=y.count;for(let F=b,V=b+z;F<V;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new gt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jd=new Ne,As=new ca,Pa=new pi,Qd=new L,La=new L,Da=new L,Ia=new L,Hc=new L,Na=new L,ep=new L,Ua=new L;class Vt extends ft{constructor(e=new Zt,t=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Hc.fromBufferAttribute(u,e),o?Na.addScaledVector(Hc,h):Na.addScaledVector(Hc.sub(t),h))}t.add(Na)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Pa.containsPoint(As.origin)===!1&&(As.intersectSphere(Pa,Qd)===null||As.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&(Jd.copy(r).invert(),As.copy(e.ray).applyMatrix4(Jd),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],T=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=T,A=x;v<A;v+=3){const P=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);s=Oa(this,m,e,n,c,h,u,P,E,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const T=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);s=Oa(this,o,e,n,c,h,u,T,x,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],T=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=T,A=x;v<A;v+=3){const P=v,E=v+1,C=v+2;s=Oa(this,m,e,n,c,h,u,P,E,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const T=p,x=p+1,v=p+2;s=Oa(this,o,e,n,c,h,u,T,x,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function CM(i,e,t,n,s,r,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Bi,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ua);return c<t.near||c>t.far?null:{distance:c,point:Ua.clone(),object:i}}function Oa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,La),i.getVertexPosition(l,Da),i.getVertexPosition(c,Ia);const h=CM(i,e,t,n,La,Da,Ia,ep);if(h){const u=new L;jn.getBarycoord(ep,La,Da,Ia,u),s&&(h.uv=jn.getInterpolatedAttribute(s,a,l,c,u,new me)),r&&(h.uv1=jn.getInterpolatedAttribute(r,a,l,c,u,new me)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};jn.getNormal(La,Da,Ia,f.normal),h.face=f,h.barycoord=u}return h}class ha extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(u,2));function _(g,p,m,T,x,v,A,P,E,C,I){const y=v/E,b=A/C,z=v/2,F=A/2,V=P/2,Z=E+1,U=C+1;let Y=0,G=0;const ue=new L;for(let ce=0;ce<U;ce++){const pe=ce*b-F;for(let Ee=0;Ee<Z;Ee++){const Be=Ee*y-z;ue[g]=Be*T,ue[p]=pe*x,ue[m]=V,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[p]=0,ue[m]=P>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Ee/E),u.push(1-ce/C),Y+=1}}for(let ce=0;ce<C;ce++)for(let pe=0;pe<E;pe++){const Ee=f+pe+Z*ce,Be=f+pe+Z*(ce+1),J=f+(pe+1)+Z*(ce+1),ae=f+(pe+1)+Z*ce;l.push(Ee,Be,ae),l.push(Be,J,ae),G+=6}a.addGroup(d,G,I),d+=G,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Xr(i[t]);for(const s in n)e[s]=n[s]}return e}function PM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Zl={clone:Xr,merge:en};var LM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=PM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tg extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new L,tp=new me,np=new me;class Ht extends tg{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,tp,np),t.subVectors(np,tp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,_r=1;class IM extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(mr,_r,e,t);s.layers=this.layers,this.add(s);const r=new Ht(mr,_r,e,t);r.layers=this.layers,this.add(r);const o=new Ht(mr,_r,e,t);o.layers=this.layers,this.add(o);const a=new Ht(mr,_r,e,t);a.layers=this.layers,this.add(a);const l=new Ht(mr,_r,e,t);l.layers=this.layers,this.add(l);const c=new Ht(mr,_r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ng extends Bt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NM extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ng(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ha(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:hs});r.uniforms.tEquirect.value=t;const o=new Vt(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=Ft),new IM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Vc=new L,UM=new L,OM=new He;class qn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vc.subVectors(n,t).cross(UM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||OM.getNormalMatrix(e),s=this.coplanarPoint(Vc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new pi,Fa=new L;class mf{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],g=s[10],p=s[11],m=s[12],T=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,p-d,v-m).normalize(),n[1].setComponents(l+r,f+c,p+d,v+m).normalize(),n[2].setComponents(l+o,f+h,p+_,v+T).normalize(),n[3].setComponents(l-o,f-h,p-_,v-T).normalize(),n[4].setComponents(l-a,f-u,p-g,v-x).normalize(),t===Ui)n[5].setComponents(l+a,f+u,p+g,v+x).normalize();else if(t===wl)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fa.x=s.normal.x>0?e.max.x:e.min.x,Fa.y=s.normal.y>0?e.max.y:e.min.y,Fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ig(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function FM(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ua extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const T=m*f-o;for(let x=0;x<c;x++){const v=x*u-r;_.push(v,-T,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){const x=T+c*m,v=T+c*(m+1),A=T+1+c*(m+1),P=T+1+c*m;d.push(x,v,P),d.push(v,A,P)}this.setIndex(d),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(g,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var BM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pS="gl_FragColor = linearToOutputTexel( gl_FragColor );",mS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ES=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,US=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ST=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ET=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:BM,alphahash_pars_fragment:kM,alphamap_fragment:zM,alphamap_pars_fragment:HM,alphatest_fragment:VM,alphatest_pars_fragment:GM,aomap_fragment:WM,aomap_pars_fragment:XM,batching_pars_vertex:qM,batching_vertex:YM,begin_vertex:jM,beginnormal_vertex:KM,bsdfs:$M,iridescence_fragment:ZM,bumpmap_pars_fragment:JM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:eS,clipping_planes_pars_vertex:tS,clipping_planes_vertex:nS,color_fragment:iS,color_pars_fragment:sS,color_pars_vertex:rS,color_vertex:oS,common:aS,cube_uv_reflection_fragment:lS,defaultnormal_vertex:cS,displacementmap_pars_vertex:hS,displacementmap_vertex:uS,emissivemap_fragment:fS,emissivemap_pars_fragment:dS,colorspace_fragment:pS,colorspace_pars_fragment:mS,envmap_fragment:_S,envmap_common_pars_fragment:gS,envmap_pars_fragment:xS,envmap_pars_vertex:vS,envmap_physical_pars_fragment:PS,envmap_vertex:yS,fog_vertex:MS,fog_pars_vertex:SS,fog_fragment:TS,fog_pars_fragment:bS,gradientmap_pars_fragment:ES,lightmap_pars_fragment:wS,lights_lambert_fragment:AS,lights_lambert_pars_fragment:RS,lights_pars_begin:CS,lights_toon_fragment:LS,lights_toon_pars_fragment:DS,lights_phong_fragment:IS,lights_phong_pars_fragment:NS,lights_physical_fragment:US,lights_physical_pars_fragment:OS,lights_fragment_begin:FS,lights_fragment_maps:BS,lights_fragment_end:kS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:HS,logdepthbuf_pars_vertex:VS,logdepthbuf_vertex:GS,map_fragment:WS,map_pars_fragment:XS,map_particle_fragment:qS,map_particle_pars_fragment:YS,metalnessmap_fragment:jS,metalnessmap_pars_fragment:KS,morphinstance_vertex:$S,morphcolor_vertex:ZS,morphnormal_vertex:JS,morphtarget_pars_vertex:QS,morphtarget_vertex:eT,normal_fragment_begin:tT,normal_fragment_maps:nT,normal_pars_fragment:iT,normal_pars_vertex:sT,normal_vertex:rT,normalmap_pars_fragment:oT,clearcoat_normal_fragment_begin:aT,clearcoat_normal_fragment_maps:lT,clearcoat_pars_fragment:cT,iridescence_pars_fragment:hT,opaque_fragment:uT,packing:fT,premultiplied_alpha_fragment:dT,project_vertex:pT,dithering_fragment:mT,dithering_pars_fragment:_T,roughnessmap_fragment:gT,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:vT,shadowmap_pars_vertex:yT,shadowmap_vertex:MT,shadowmask_pars_fragment:ST,skinbase_vertex:TT,skinning_pars_vertex:bT,skinning_vertex:ET,skinnormal_vertex:wT,specularmap_fragment:AT,specularmap_pars_fragment:RT,tonemapping_fragment:CT,tonemapping_pars_fragment:PT,transmission_fragment:LT,transmission_pars_fragment:DT,uv_pars_fragment:IT,uv_pars_vertex:NT,uv_vertex:UT,worldpos_vertex:OT,background_vert:FT,background_frag:BT,backgroundCube_vert:kT,backgroundCube_frag:zT,cube_vert:HT,cube_frag:VT,depth_vert:GT,depth_frag:WT,distanceRGBA_vert:XT,distanceRGBA_frag:qT,equirect_vert:YT,equirect_frag:jT,linedashed_vert:KT,linedashed_frag:$T,meshbasic_vert:ZT,meshbasic_frag:JT,meshlambert_vert:QT,meshlambert_frag:eb,meshmatcap_vert:tb,meshmatcap_frag:nb,meshnormal_vert:ib,meshnormal_frag:sb,meshphong_vert:rb,meshphong_frag:ob,meshphysical_vert:ab,meshphysical_frag:lb,meshtoon_vert:cb,meshtoon_frag:hb,points_vert:ub,points_frag:fb,shadow_vert:db,shadow_frag:pb,sprite_vert:mb,sprite_frag:_b},de={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ni={basic:{uniforms:en([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:en([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:en([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:en([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:en([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:en([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:en([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:en([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:en([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:en([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:en([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:en([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:en([de.lights,de.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ni.physical={uniforms:en([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ba={r:0,b:0,g:0},Cs=new fi,gb=new Ne;function xb(i,e,t,n,s,r,o){const a=new De(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function g(T){let x=!1;const v=_(T);v===null?m(a,l):v&&v.isColor&&(m(v,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,x){const v=_(x);v&&(v.isCubeTexture||v.mapping===Kl)?(h===void 0&&(h=new Vt(new ha(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Xr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Cs.copy(x.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gb.makeRotationFromEuler(Cs)),h.material.toneMapped=Ze.getTransfer(v.colorSpace)!==pt,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Vt(new ua(2,2),new Cn({name:"BackgroundMaterial",uniforms:Xr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,x){T.getRGB(Ba,eg(i)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(a,l)},render:g,addToRenderList:p}}function vb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,b,z,F,V){let Z=!1;const U=u(F,z,b);r!==U&&(r=U,c(r.object)),Z=d(y,F,z,V),Z&&_(y,F,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(y,b,z,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,b,z){const F=z.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let Z=V[b.id];Z===void 0&&(Z={},V[b.id]=Z);let U=Z[F];return U===void 0&&(U=f(l()),Z[F]=U),U}function f(y){const b=[],z=[],F=[];for(let V=0;V<t;V++)b[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:F,object:y,attributes:{},index:null}}function d(y,b,z,F){const V=r.attributes,Z=b.attributes;let U=0;const Y=z.getAttributes();for(const G in Y)if(Y[G].location>=0){const ce=V[G];let pe=Z[G];if(pe===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;U++}return r.attributesNum!==U||r.index!==F}function _(y,b,z,F){const V={},Z=b.attributes;let U=0;const Y=z.getAttributes();for(const G in Y)if(Y[G].location>=0){let ce=Z[G];ce===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor));const pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),V[G]=pe,U++}r.attributes=V,r.attributesNum=U,r.index=F}function g(){const y=r.newAttributes;for(let b=0,z=y.length;b<z;b++)y[b]=0}function p(y){m(y,0)}function m(y,b){const z=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;z[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),V[y]!==b&&(i.vertexAttribDivisor(y,b),V[y]=b)}function T(){const y=r.newAttributes,b=r.enabledAttributes;for(let z=0,F=b.length;z<F;z++)b[z]!==y[z]&&(i.disableVertexAttribArray(z),b[z]=0)}function x(y,b,z,F,V,Z,U){U===!0?i.vertexAttribIPointer(y,b,z,V,Z):i.vertexAttribPointer(y,b,z,F,V,Z)}function v(y,b,z,F){g();const V=F.attributes,Z=z.getAttributes(),U=b.defaultAttributeValues;for(const Y in Z){const G=Z[Y];if(G.location>=0){let ue=V[Y];if(ue===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ue!==void 0){const ce=ue.normalized,pe=ue.itemSize,Ee=e.get(ue);if(Ee===void 0)continue;const Be=Ee.buffer,J=Ee.type,ae=Ee.bytesPerElement,Se=J===i.INT||J===i.UNSIGNED_INT||ue.gpuType===of;if(ue.isInterleavedBufferAttribute){const _e=ue.data,Oe=_e.stride,Ie=ue.offset;if(_e.isInstancedInterleavedBuffer){for(let Ge=0;Ge<G.locationSize;Ge++)m(G.location+Ge,_e.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ge=0;Ge<G.locationSize;Ge++)p(G.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ge=0;Ge<G.locationSize;Ge++)x(G.location+Ge,pe/G.locationSize,J,ce,Oe*ae,(Ie+pe/G.locationSize*Ge)*ae,Se)}else{if(ue.isInstancedBufferAttribute){for(let _e=0;_e<G.locationSize;_e++)m(G.location+_e,ue.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let _e=0;_e<G.locationSize;_e++)p(G.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let _e=0;_e<G.locationSize;_e++)x(G.location+_e,pe/G.locationSize,J,ce,pe*ae,pe/G.locationSize*_e*ae,Se)}}else if(U!==void 0){const ce=U[Y];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(G.location,ce);break;case 3:i.vertexAttrib3fv(G.location,ce);break;case 4:i.vertexAttrib4fv(G.location,ce);break;default:i.vertexAttrib1fv(G.location,ce)}}}}T()}function A(){C();for(const y in n){const b=n[y];for(const z in b){const F=b[z];for(const V in F)h(F[V].object),delete F[V];delete b[z]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const b=n[y.id];for(const z in b){const F=b[z];for(const V in F)h(F[V].object),delete F[V];delete b[z]}delete n[y.id]}function E(y){for(const b in n){const z=n[b];if(z[y.id]===void 0)continue;const F=z[y.id];for(const V in F)h(F[V].object),delete F[V];delete z[y.id]}}function C(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:T}}function yb(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g];for(let g=0;g<f.length;g++)t.update(_,n,f[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==On&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ki&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==un&&!C)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:P}}function Sb(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new qn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const T=r?0:n,x=T*4;let v=m.clippingState||null;l.value=v,v=h(_,f,x,d);for(let A=0;A!==x;++A)v[A]=t[A];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,v=d;x!==g;++x,v+=4)o.copy(u[x]).applyMatrix4(T,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Tb(i){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=zr:a===zh&&(o.mapping=Hr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ml||a===zh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new NM(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class _f extends tg{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,ip=[.125,.215,.35,.446,.526,.582],zs=20,Gc=new _f,sp=new De;let Wc=null,Xc=0,qc=0,Yc=!1;const Fs=(1+Math.sqrt(5))/2,gr=1/Fs,rp=[new L(-Fs,gr,0),new L(Fs,gr,0),new L(-gr,0,Fs),new L(gr,0,Fs),new L(0,Fs,-gr),new L(0,Fs,gr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Kn,format:On,colorSpace:Lt,depthBuffer:!1},s=ap(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ap(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bb(r)),this._blurMaterial=Eb(r,e,t)}return s}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,s){const a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sp),h.toneMapping=us,h.autoClear=!1;const d=new Oi({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new Vt(new ha,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(sp),g=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):T===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;ka(s,T*x,m>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zr||e.mapping===Hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ka(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rp[(s-r-1)%rp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zs-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):zs;p>zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zs}`);const m=[];let T=0;for(let E=0;E<zs;++E){const C=E/g,I=Math.exp(-C*C/2);m.push(I),E===0?T+=I:E<p&&(T+=2*I)}for(let E=0;E<m.length;E++)m[E]=m[E]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const v=this._sizeLods[s],A=3*v*(s>x-Sr?s-x+Sr:0),P=4*(this._cubeSize-v);ka(t,A,P,3*v,2*v),l.setRenderTarget(t),l.render(u,Gc)}}function bb(i){const e=[],t=[],n=[];let s=i;const r=i-Sr+1+ip.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Sr?l=ip[o-i+Sr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,p=2,m=1,T=new Float32Array(g*_*d),x=new Float32Array(p*_*d),v=new Float32Array(m*_*d);for(let P=0;P<d;P++){const E=P%3*2/3-1,C=P>2?0:-1,I=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];T.set(I,g*_*P),x.set(f,p*_*P);const y=[P,P,P,P,P,P];v.set(y,m*_*P)}const A=new Zt;A.setAttribute("position",new gt(T,g)),A.setAttribute("uv",new gt(x,p)),A.setAttribute("faceIndex",new gt(v,m)),e.push(A),s>Sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ap(i,e,t){const n=new zi(i,e,t);return n.texture.mapping=Kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Eb(i,e,t){const n=new Float32Array(zs),s=new L(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function lp(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function cp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ml||l===zh,h=l===zr||l===Hr;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new op(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new op(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ab(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&hl("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rb(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const T=d.array;g=d.version;for(let x=0,v=T.length;x<v;x+=3){const A=T[x+0],P=T[x+1],E=T[x+2];f.push(A,P,P,E,E,A)}}else if(_!==void 0){const T=_.array;g=_.version;for(let x=0,v=T.length/3-1;x<v;x+=3){const A=x+0,P=x+1,E=x+2;f.push(A,P,P,E,E,A)}}else return;const p=new(Y_(f)?Q_:J_)(f,1);p.version=g;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cb(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function h(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function u(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let m=0;for(let T=0;T<_;T++)m+=d[T];for(let T=0;T<g.length;T++)t.update(m,n,g[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lb(i,e,t){const n=new WeakMap,s=new je;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let A=a.attributes.position.count*v,P=1;A>e.maxTextureSize&&(P=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*P*4*u),C=new K_(E,A,P,u);C.type=un,C.needsUpdate=!0;const I=v*4;for(let b=0;b<u;b++){const z=m[b],F=T[b],V=x[b],Z=A*P*4*b;for(let U=0;U<z.count;U++){const Y=U*I;_===!0&&(s.fromBufferAttribute(z,U),E[Z+Y+0]=s.x,E[Z+Y+1]=s.y,E[Z+Y+2]=s.z,E[Z+Y+3]=0),g===!0&&(s.fromBufferAttribute(F,U),E[Z+Y+4]=s.x,E[Z+Y+5]=s.y,E[Z+Y+6]=s.z,E[Z+Y+7]=0),p===!0&&(s.fromBufferAttribute(V,U),E[Z+Y+8]=s.x,E[Z+Y+9]=s.y,E[Z+Y+10]=s.z,E[Z+Y+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new me(A,P)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Db(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class sg extends Bt{constructor(e,t,n,s,r,o,a,l,c,h=Dr){if(h!==Dr&&h!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Dr&&(n=js),n===void 0&&h===Gr&&(n=Vr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rg=new Bt,hp=new sg(1,1),og=new K_,ag=new _M,lg=new ng,up=[],fp=[],dp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function eo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=up[s];if(r===void 0&&(r=new Float32Array(s),up[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jl(i,e){let t=fp[e];t===void 0&&(t=new Int32Array(e),fp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ib(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Ub(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Fb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;mp.set(n),i.uniformMatrix2fv(this.addr,!1,mp),It(t,n)}}function Bb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;pp.set(n),i.uniformMatrix3fv(this.addr,!1,pp),It(t,n)}}function kb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;dp.set(n),i.uniformMatrix4fv(this.addr,!1,dp),It(t,n)}}function zb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function Vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Wb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function qb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function jb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hp.compareFunction=X_,r=hp):r=rg,t.setTexture2D(e||r,s)}function Kb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ag,s)}function $b(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||lg,s)}function Zb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||og,s)}function Jb(i){switch(i){case 5126:return Ib;case 35664:return Nb;case 35665:return Ub;case 35666:return Ob;case 35674:return Fb;case 35675:return Bb;case 35676:return kb;case 5124:case 35670:return zb;case 35667:case 35671:return Hb;case 35668:case 35672:return Vb;case 35669:case 35673:return Gb;case 5125:return Wb;case 36294:return Xb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Zb}}function Qb(i,e){i.uniform1fv(this.addr,e)}function eE(i,e){const t=eo(e,this.size,2);i.uniform2fv(this.addr,t)}function tE(i,e){const t=eo(e,this.size,3);i.uniform3fv(this.addr,t)}function nE(i,e){const t=eo(e,this.size,4);i.uniform4fv(this.addr,t)}function iE(i,e){const t=eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sE(i,e){const t=eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rE(i,e){const t=eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oE(i,e){i.uniform1iv(this.addr,e)}function aE(i,e){i.uniform2iv(this.addr,e)}function lE(i,e){i.uniform3iv(this.addr,e)}function cE(i,e){i.uniform4iv(this.addr,e)}function hE(i,e){i.uniform1uiv(this.addr,e)}function uE(i,e){i.uniform2uiv(this.addr,e)}function fE(i,e){i.uniform3uiv(this.addr,e)}function dE(i,e){i.uniform4uiv(this.addr,e)}function pE(i,e,t){const n=this.cache,s=e.length,r=Jl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rg,r[o])}function mE(i,e,t){const n=this.cache,s=e.length,r=Jl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ag,r[o])}function _E(i,e,t){const n=this.cache,s=e.length,r=Jl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||lg,r[o])}function gE(i,e,t){const n=this.cache,s=e.length,r=Jl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||og,r[o])}function xE(i){switch(i){case 5126:return Qb;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return sE;case 35676:return rE;case 5124:case 35670:return oE;case 35667:case 35671:return aE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return hE;case 36294:return uE;case 36295:return fE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return gE}}class vE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jb(t.type)}}class yE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xE(t.type)}}class ME{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function _p(i,e){i.seq.push(e),i.map[e.id]=e}function SE(i,e,t){const n=i.name,s=n.length;for(jc.lastIndex=0;;){const r=jc.exec(n),o=jc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_p(t,c===void 0?new vE(a,i,e):new yE(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ME(a),_p(t,u)),t=u}}}class ul{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);SE(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function gp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const TE=37297;let bE=0;function EE(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function wE(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===El&&t===bl?n="LinearDisplayP3ToLinearSRGB":e===bl&&t===El&&(n="LinearSRGBToLinearDisplayP3"),i){case Lt:case $l:return[n,"LinearTransferOETF"];case Ut:case df:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+EE(i.getShaderSource(e),o)}else return s}function AE(i,e){const t=wE(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RE(i,e){let t;switch(e){case wy:t="Linear";break;case Ay:t="Reinhard";break;case Ry:t="Cineon";break;case L_:t="ACESFilmic";break;case Py:t="AgX";break;case Ly:t="Neutral";break;case Cy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const za=new L;function CE(){Ze.getLuminanceCoefficients(za);const i=za.x.toFixed(4),e=za.y.toFixed(4),t=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function LE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vo(i){return i!==""}function vp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(i){return i.replace(IE,UE)}const NE=new Map;function UE(i,e){let t=ze[e];if(t===void 0){const n=NE.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mu(t)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(OE,FE)}function FE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===C_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ry?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function kE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zr:case Hr:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function HE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case by:e="ENVMAP_BLENDING_MIX";break;case Ey:e="ENVMAP_BLENDING_ADD";break}return e}function VE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function GE(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=BE(t),c=kE(t),h=zE(t),u=HE(t),f=VE(t),d=PE(t),_=LE(r),g=s.createProgram();let p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vo).join(`
`),m.length>0&&(m+=`
`)):(p=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),m=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?ze.tonemapping_pars_fragment:"",t.toneMapping!==us?RE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,AE("linearToOutputTexel",t.outputColorSpace),CE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),o=mu(o),o=vp(o,t),o=yp(o,t),a=mu(a),a=vp(a,t),a=yp(a,t),o=Mp(o),a=Mp(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=T+p+o,v=T+m+a,A=gp(s,s.VERTEX_SHADER,x),P=gp(s,s.FRAGMENT_SHADER,v);s.attachShader(g,A),s.attachShader(g,P),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(b){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(g).trim(),F=s.getShaderInfoLog(A).trim(),V=s.getShaderInfoLog(P).trim();let Z=!0,U=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,P);else{const Y=xp(s,A,"vertex"),G=xp(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+Y+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(U=!1);U&&(b.diagnostics={runnable:Z,programLog:z,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:m}})}s.deleteShader(A),s.deleteShader(P),C=new ul(s,g),I=DE(s,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let I;this.getAttributes=function(){return I===void 0&&E(this),I};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,TE)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=P,this}let WE=0;class XE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qE(e),t.set(e,n)),n}}class qE{constructor(e){this.id=WE++,this.code=e,this.usedTimes=0}}function YE(i,e,t,n,s,r,o){const a=new $_,l=new XE,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,z,F,V){const Z=F.fog,U=V.geometry,Y=y.isMeshStandardMaterial?F.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),ue=G&&G.mapping===Kl?G.image.height:null,ce=g[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const pe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ee=pe!==void 0?pe.length:0;let Be=0;U.morphAttributes.position!==void 0&&(Be=1),U.morphAttributes.normal!==void 0&&(Be=2),U.morphAttributes.color!==void 0&&(Be=3);let J,ae,Se,_e;if(ce){const cn=ni[ce];J=cn.vertexShader,ae=cn.fragmentShader}else J=y.vertexShader,ae=y.fragmentShader,l.update(y),Se=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const Oe=i.getRenderTarget(),Ie=V.isInstancedMesh===!0,Ge=V.isBatchedMesh===!0,Je=!!y.map,Ye=!!y.matcap,S=!!G,N=!!y.aoMap,X=!!y.lightMap,ee=!!y.bumpMap,j=!!y.normalMap,te=!!y.displacementMap,ne=!!y.emissiveMap,w=!!y.metalnessMap,M=!!y.roughnessMap,D=y.anisotropy>0,q=y.clearcoat>0,W=y.dispersion>0,H=y.iridescence>0,re=y.sheen>0,ie=y.transmission>0,le=D&&!!y.anisotropyMap,Te=q&&!!y.clearcoatMap,oe=q&&!!y.clearcoatNormalMap,fe=q&&!!y.clearcoatRoughnessMap,Re=H&&!!y.iridescenceMap,we=H&&!!y.iridescenceThicknessMap,ge=re&&!!y.sheenColorMap,We=re&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Xe=!!y.specularColorMap,O=!!y.specularIntensityMap,ye=ie&&!!y.transmissionMap,Q=ie&&!!y.thicknessMap,se=!!y.gradientMap,xe=!!y.alphaMap,Me=y.alphaTest>0,$e=!!y.alphaHash,Et=!!y.extensions;let ln=us;y.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(ln=i.toneMapping);const Qe={shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:ae,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ge,batchingColor:Ge&&V._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&V.instanceColor!==null,instancingMorph:Ie&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Lt,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:Ye,envMap:S,envMapMode:S&&G.mapping,envMapCubeUVHeight:ue,aoMap:N,lightMap:X,bumpMap:ee,normalMap:j,displacementMap:d&&te,emissiveMap:ne,normalMapObjectSpace:j&&y.normalMapType===Fy,normalMapTangentSpace:j&&y.normalMapType===W_,metalnessMap:w,roughnessMap:M,anisotropy:D,anisotropyMap:le,clearcoat:q,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,dispersion:W,iridescence:H,iridescenceMap:Re,iridescenceThicknessMap:we,sheen:re,sheenColorMap:ge,sheenRoughnessMap:We,specularMap:Ce,specularColorMap:Xe,specularIntensityMap:O,transmission:ie,transmissionMap:ye,thicknessMap:Q,gradientMap:se,opaque:y.transparent===!1&&y.blending===Lr&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:Me,alphaHash:$e,combine:y.combine,mapUv:Je&&p(y.map.channel),aoMapUv:N&&p(y.aoMap.channel),lightMapUv:X&&p(y.lightMap.channel),bumpMapUv:ee&&p(y.bumpMap.channel),normalMapUv:j&&p(y.normalMap.channel),displacementMapUv:te&&p(y.displacementMap.channel),emissiveMapUv:ne&&p(y.emissiveMap.channel),metalnessMapUv:w&&p(y.metalnessMap.channel),roughnessMapUv:M&&p(y.roughnessMap.channel),anisotropyMapUv:le&&p(y.anisotropyMap.channel),clearcoatMapUv:Te&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(y.sheenRoughnessMap.channel),specularMapUv:Ce&&p(y.specularMap.channel),specularColorMapUv:Xe&&p(y.specularColorMap.channel),specularIntensityMapUv:O&&p(y.specularIntensityMap.channel),transmissionMapUv:ye&&p(y.transmissionMap.channel),thicknessMapUv:Q&&p(y.thicknessMap.channel),alphaMapUv:xe&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(j||D),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!U.attributes.uv&&(Je||xe),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:ln,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function T(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)b.push(z),b.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(x(b,y),v(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const b=g[y.type];let z;if(b){const F=ni[b];z=Zl.clone(F.uniforms)}else z=y.uniforms;return z}function P(y,b){let z;for(let F=0,V=h.length;F<V;F++){const Z=h[F];if(Z.cacheKey===b){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new GE(i,b,y,r),h.push(z)),z}function E(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function C(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:A,acquireProgram:P,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function jE(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function KE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bp(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,_,g,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),e++,m}function a(u,f,d,_,g,p){const m=o(u,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,_,g,p){const m=o(u,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||KE),n.length>1&&n.sort(f||Tp),s.length>1&&s.sort(f||Tp)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function $E(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new bp,i.set(n,[o])):s>=r.length?(o=new bp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ZE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function JE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let QE=0;function ew(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tw(i){const e=new ZE,t=JE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new Ne,o=new Ne;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,T=0,x=0,v=0,A=0,P=0,E=0;c.sort(ew);for(let I=0,y=c.length;I<y;I++){const b=c[I],z=b.color,F=b.intensity,V=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*F,u+=z.g*F,f+=z.b*F;else if(b.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(b.sh.coefficients[U],F);E++}else if(b.isDirectionalLight){const U=e.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Y=b.shadow,G=t.get(b);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=b.shadow.matrix,T++}n.directional[d]=U,d++}else if(b.isSpotLight){const U=e.get(b);U.position.setFromMatrixPosition(b.matrixWorld),U.color.copy(z).multiplyScalar(F),U.distance=V,U.coneCos=Math.cos(b.angle),U.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),U.decay=b.decay,n.spot[g]=U;const Y=b.shadow;if(b.map&&(n.spotLightMap[A]=b.map,A++,Y.updateMatrices(b),b.castShadow&&P++),n.spotLightMatrix[g]=Y.matrix,b.castShadow){const G=t.get(b);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=Z,v++}g++}else if(b.isRectAreaLight){const U=e.get(b);U.color.copy(z).multiplyScalar(F),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=U,p++}else if(b.isPointLight){const U=e.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),U.distance=b.distance,U.decay=b.decay,b.castShadow){const Y=b.shadow,G=t.get(b);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=b.shadow.matrix,x++}n.point[_]=U,_++}else if(b.isHemisphereLight){const U=e.get(b);U.skyColor.copy(b.color).multiplyScalar(F),U.groundColor.copy(b.groundColor).multiplyScalar(F),n.hemi[m]=U,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==T||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-P,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=E,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=T,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=E,n.version=QE++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const x=c[m];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ep(i){const e=new tw(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nw(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ep(i),e.set(s,[a])):r>=o.length?(a=new Ep(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class iw extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sw extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aw(i,e,t){let n=new mf;const s=new me,r=new me,o=new je,a=new iw({depthPacking:Oy}),l=new sw,c={},h=t.maxTextureSize,u={[Bi]:fn,[fn]:Bi,[Un]:Un},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:rw,fragmentShader:ow}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Zt;_.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Vt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C_;let m=this.type;this.render=function(P,E,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const I=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),z=i.state;z.setBlending(hs),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=m!==Ai&&this.type===Ai,V=m===Ai&&this.type!==Ai;for(let Z=0,U=P.length;Z<U;Z++){const Y=P[Z],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ue=G.getFrameExtents();if(s.multiply(ue),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,G.mapSize.y=r.y)),G.map===null||F===!0||V===!0){const pe=this.type!==Ai?{minFilter:on,magFilter:on}:{};G.map!==null&&G.map.dispose(),G.map=new zi(s.x,s.y,pe),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ce=G.getViewportCount();for(let pe=0;pe<ce;pe++){const Ee=G.getViewport(pe);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),z.viewport(o),G.updateMatrices(Y,pe),n=G.getFrustum(),v(E,C,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Ai&&T(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,y,b)};function T(P,E){const C=e.update(g);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new zi(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(E,null,C,f,g,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(E,null,C,d,g,null)}function x(P,E,C,I){let y=null;const b=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)y=b;else if(y=C.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=y.uuid,F=E.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let Z=V[F];Z===void 0&&(Z=y.clone(),V[F]=Z,E.addEventListener("dispose",A)),y=Z}if(y.visible=E.visible,y.wireframe=E.wireframe,I===Ai?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=C}return y}function v(P,E,C,I,y){if(P.visible===!1)return;if(P.layers.test(E.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Ai)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const F=e.update(P),V=P.material;if(Array.isArray(V)){const Z=F.groups;for(let U=0,Y=Z.length;U<Y;U++){const G=Z[U],ue=V[G.materialIndex];if(ue&&ue.visible){const ce=x(P,ue,I,y);P.onBeforeShadow(i,P,E,C,F,ce,G),i.renderBufferDirect(C,null,F,ce,P,G),P.onAfterShadow(i,P,E,C,F,ce,G)}}}else if(V.visible){const Z=x(P,V,I,y);P.onBeforeShadow(i,P,E,C,F,Z,null),i.renderBufferDirect(C,null,F,Z,P,null),P.onAfterShadow(i,P,E,C,F,Z,null)}}const z=P.children;for(let F=0,V=z.length;F<V;F++)v(z[F],E,C,I,y)}function A(P){P.target.removeEventListener("dispose",A);for(const C in c){const I=c[C],y=P.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}const lw={[Ih]:Nh,[Uh]:Bh,[Oh]:kh,[kr]:Fh,[Nh]:Ih,[Bh]:Uh,[kh]:Oh,[Fh]:kr};function cw(i){function e(){let O=!1;const ye=new je;let Q=null;const se=new je(0,0,0,0);return{setMask:function(xe){Q!==xe&&!O&&(i.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){O=xe},setClear:function(xe,Me,$e,Et,ln){ln===!0&&(xe*=Et,Me*=Et,$e*=Et),ye.set(xe,Me,$e,Et),se.equals(ye)===!1&&(i.clearColor(xe,Me,$e,Et),se.copy(ye))},reset:function(){O=!1,Q=null,se.set(-1,0,0,0)}}}function t(){let O=!1,ye=!1,Q=null,se=null,xe=null;return{setReversed:function(Me){ye=Me},setTest:function(Me){Me?Se(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Me){Q!==Me&&!O&&(i.depthMask(Me),Q=Me)},setFunc:function(Me){if(ye&&(Me=lw[Me]),se!==Me){switch(Me){case Ih:i.depthFunc(i.NEVER);break;case Nh:i.depthFunc(i.ALWAYS);break;case Uh:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case Oh:i.depthFunc(i.EQUAL);break;case Fh:i.depthFunc(i.GEQUAL);break;case Bh:i.depthFunc(i.GREATER);break;case kh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=Me}},setLocked:function(Me){O=Me},setClear:function(Me){xe!==Me&&(i.clearDepth(Me),xe=Me)},reset:function(){O=!1,Q=null,se=null,xe=null}}}function n(){let O=!1,ye=null,Q=null,se=null,xe=null,Me=null,$e=null,Et=null,ln=null;return{setTest:function(Qe){O||(Qe?Se(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Qe){ye!==Qe&&!O&&(i.stencilMask(Qe),ye=Qe)},setFunc:function(Qe,cn,vi){(Q!==Qe||se!==cn||xe!==vi)&&(i.stencilFunc(Qe,cn,vi),Q=Qe,se=cn,xe=vi)},setOp:function(Qe,cn,vi){(Me!==Qe||$e!==cn||Et!==vi)&&(i.stencilOp(Qe,cn,vi),Me=Qe,$e=cn,Et=vi)},setLocked:function(Qe){O=Qe},setClear:function(Qe){ln!==Qe&&(i.clearStencil(Qe),ln=Qe)},reset:function(){O=!1,ye=null,Q=null,se=null,xe=null,Me=null,$e=null,Et=null,ln=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,T=null,x=null,v=null,A=null,P=new De(0,0,0),E=0,C=!1,I=null,y=null,b=null,z=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,U=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=U>=1):Y.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=U>=2);let G=null,ue={};const ce=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Ee=new je().fromArray(ce),Be=new je().fromArray(pe);function J(O,ye,Q,se){const xe=new Uint8Array(4),Me=i.createTexture();i.bindTexture(O,Me),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<Q;$e++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ye+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Me}const ae={};ae[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),r.setFunc(kr),X(!1),ee(Pd),Se(i.CULL_FACE),S(hs);function Se(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function _e(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function Oe(O,ye){return h[O]!==ye?(i.bindFramebuffer(O,ye),h[O]=ye,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ie(O,ye){let Q=f,se=!1;if(O){Q=u.get(ye),Q===void 0&&(Q=[],u.set(ye,Q));const xe=O.textures;if(Q.length!==xe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,$e=xe.length;Me<$e;Me++)Q[Me]=i.COLOR_ATTACHMENT0+Me;Q.length=xe.length,se=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,se=!0);se&&i.drawBuffers(Q)}function Ge(O){return d!==O?(i.useProgram(O),d=O,!0):!1}const Je={[ks]:i.FUNC_ADD,[ay]:i.FUNC_SUBTRACT,[ly]:i.FUNC_REVERSE_SUBTRACT};Je[cy]=i.MIN,Je[hy]=i.MAX;const Ye={[uy]:i.ZERO,[fy]:i.ONE,[dy]:i.SRC_COLOR,[Lh]:i.SRC_ALPHA,[vy]:i.SRC_ALPHA_SATURATE,[gy]:i.DST_COLOR,[my]:i.DST_ALPHA,[py]:i.ONE_MINUS_SRC_COLOR,[Dh]:i.ONE_MINUS_SRC_ALPHA,[xy]:i.ONE_MINUS_DST_COLOR,[_y]:i.ONE_MINUS_DST_ALPHA,[yy]:i.CONSTANT_COLOR,[My]:i.ONE_MINUS_CONSTANT_COLOR,[Sy]:i.CONSTANT_ALPHA,[Ty]:i.ONE_MINUS_CONSTANT_ALPHA};function S(O,ye,Q,se,xe,Me,$e,Et,ln,Qe){if(O===hs){_===!0&&(_e(i.BLEND),_=!1);return}if(_===!1&&(Se(i.BLEND),_=!0),O!==oy){if(O!==g||Qe!==C){if((p!==ks||x!==ks)&&(i.blendEquation(i.FUNC_ADD),p=ks,x=ks),Qe)switch(O){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.ONE,i.ONE);break;case Ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,T=null,v=null,A=null,P.set(0,0,0),E=0,g=O,C=Qe}return}xe=xe||ye,Me=Me||Q,$e=$e||se,(ye!==p||xe!==x)&&(i.blendEquationSeparate(Je[ye],Je[xe]),p=ye,x=xe),(Q!==m||se!==T||Me!==v||$e!==A)&&(i.blendFuncSeparate(Ye[Q],Ye[se],Ye[Me],Ye[$e]),m=Q,T=se,v=Me,A=$e),(Et.equals(P)===!1||ln!==E)&&(i.blendColor(Et.r,Et.g,Et.b,ln),P.copy(Et),E=ln),g=O,C=!1}function N(O,ye){O.side===Un?_e(i.CULL_FACE):Se(i.CULL_FACE);let Q=O.side===fn;ye&&(Q=!Q),X(Q),O.blending===Lr&&O.transparent===!1?S(hs):S(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const se=O.stencilWrite;o.setTest(se),se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function ee(O){O!==iy?(Se(i.CULL_FACE),O!==y&&(O===Pd?i.cullFace(i.BACK):O===sy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),y=O}function j(O){O!==b&&(Z&&i.lineWidth(O),b=O)}function te(O,ye,Q){O?(Se(i.POLYGON_OFFSET_FILL),(z!==ye||F!==Q)&&(i.polygonOffset(ye,Q),z=ye,F=Q)):_e(i.POLYGON_OFFSET_FILL)}function ne(O){O?Se(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function w(O){O===void 0&&(O=i.TEXTURE0+V-1),G!==O&&(i.activeTexture(O),G=O)}function M(O,ye,Q){Q===void 0&&(G===null?Q=i.TEXTURE0+V-1:Q=G);let se=ue[Q];se===void 0&&(se={type:void 0,texture:void 0},ue[Q]=se),(se.type!==O||se.texture!==ye)&&(G!==Q&&(i.activeTexture(Q),G=Q),i.bindTexture(O,ye||ae[O]),se.type=O,se.texture=ye)}function D(){const O=ue[G];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(O){Ee.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ee.copy(O))}function ge(O){Be.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Be.copy(O))}function We(O,ye){let Q=l.get(ye);Q===void 0&&(Q=new WeakMap,l.set(ye,Q));let se=Q.get(O);se===void 0&&(se=i.getUniformBlockIndex(ye,O.name),Q.set(O,se))}function Ce(O,ye){const se=l.get(ye).get(O);a.get(ye)!==se&&(i.uniformBlockBinding(ye,se,O.__bindingPointIndex),a.set(ye,se))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,ue={},h={},u=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,T=null,x=null,v=null,A=null,P=new De(0,0,0),E=0,C=!1,I=null,y=null,b=null,z=null,F=null,Ee.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:_e,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:Ge,setBlending:S,setMaterial:N,setFlipSided:X,setCullFace:ee,setLineWidth:j,setPolygonOffset:te,setScissorTest:ne,activeTexture:w,bindTexture:M,unbindTexture:D,compressedTexImage2D:q,compressedTexImage3D:W,texImage2D:fe,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:Ce,texStorage2D:Te,texStorage3D:oe,texSubImage2D:H,texSubImage3D:re,compressedTexSubImage2D:ie,compressedTexSubImage3D:le,scissor:we,viewport:ge,reset:Xe}}function wp(i,e,t,n){const s=hw(n);switch(t){case F_:return i*e;case k_:return i*e;case z_:return i*e*2;case cf:return i*e/s.components*s.byteLength;case hf:return i*e/s.components*s.byteLength;case H_:return i*e*2/s.components*s.byteLength;case uf:return i*e*2/s.components*s.byteLength;case B_:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case ff:return i*e*4/s.components*s.byteLength;case rl:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Wh:return Math.max(i,16)*Math.max(e,8)/4;case Hh:case Gh:return Math.max(i,8)*Math.max(e,8)/2;case Xh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cl:case lu:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case V_:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uu:case fu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hw(i){switch(i){case ki:case N_:return{byteLength:1,components:1};case Wo:case U_:case Kn:return{byteLength:2,components:1};case af:case lf:return{byteLength:2,components:4};case js:case of:case un:return{byteLength:4,components:1};case O_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function uw(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return d?new OffscreenCanvas(w,M):Yo("canvas")}function g(w,M,D){let q=1;const W=ne(w);if((W.width>D||W.height>D)&&(q=D/Math.max(W.width,W.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const H=Math.floor(q*W.width),re=Math.floor(q*W.height);u===void 0&&(u=_(H,re));const ie=M?_(H,re):u;return ie.width=H,ie.height=re,ie.getContext("2d").drawImage(w,0,0,H,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+H+"x"+re+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==on&&w.minFilter!==Ft}function m(w){i.generateMipmap(w)}function T(w,M,D,q,W=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=M;if(M===i.RED&&(D===i.FLOAT&&(H=i.R32F),D===i.HALF_FLOAT&&(H=i.R16F),D===i.UNSIGNED_BYTE&&(H=i.R8)),M===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.R8UI),D===i.UNSIGNED_SHORT&&(H=i.R16UI),D===i.UNSIGNED_INT&&(H=i.R32UI),D===i.BYTE&&(H=i.R8I),D===i.SHORT&&(H=i.R16I),D===i.INT&&(H=i.R32I)),M===i.RG&&(D===i.FLOAT&&(H=i.RG32F),D===i.HALF_FLOAT&&(H=i.RG16F),D===i.UNSIGNED_BYTE&&(H=i.RG8)),M===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RG8UI),D===i.UNSIGNED_SHORT&&(H=i.RG16UI),D===i.UNSIGNED_INT&&(H=i.RG32UI),D===i.BYTE&&(H=i.RG8I),D===i.SHORT&&(H=i.RG16I),D===i.INT&&(H=i.RG32I)),M===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGB8UI),D===i.UNSIGNED_SHORT&&(H=i.RGB16UI),D===i.UNSIGNED_INT&&(H=i.RGB32UI),D===i.BYTE&&(H=i.RGB8I),D===i.SHORT&&(H=i.RGB16I),D===i.INT&&(H=i.RGB32I)),M===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),D===i.UNSIGNED_INT&&(H=i.RGBA32UI),D===i.BYTE&&(H=i.RGBA8I),D===i.SHORT&&(H=i.RGBA16I),D===i.INT&&(H=i.RGBA32I)),M===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),M===i.RGBA){const re=W?Tl:Ze.getTransfer(q);D===i.FLOAT&&(H=i.RGBA32F),D===i.HALF_FLOAT&&(H=i.RGBA16F),D===i.UNSIGNED_BYTE&&(H=re===pt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(w,M){let D;return w?M===null||M===js||M===Vr?D=i.DEPTH24_STENCIL8:M===un?D=i.DEPTH32F_STENCIL8:M===Wo&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===js||M===Vr?D=i.DEPTH_COMPONENT24:M===un?D=i.DEPTH_COMPONENT32F:M===Wo&&(D=i.DEPTH_COMPONENT16),D}function v(w,M){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==on&&w.minFilter!==Ft?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){const M=w.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),I(M)}function E(w){const M=n.get(w);if(M.__webglInit===void 0)return;const D=w.source,q=f.get(D);if(q){const W=q[M.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(w),Object.keys(q).length===0&&f.delete(D)}n.remove(w)}function C(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const D=w.source,q=f.get(D);delete q[M.__cacheKey],o.memory.textures--}function I(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let W=0;W<M.__webglFramebuffer[q].length;W++)i.deleteFramebuffer(M.__webglFramebuffer[q][W]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const D=w.textures;for(let q=0,W=D.length;q<W;q++){const H=n.get(D[q]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(D[q])}n.remove(w)}let y=0;function b(){y=0}function z(){const w=y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),y+=1,w}function F(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function V(w,M){const D=n.get(w);if(w.isVideoTexture&&j(w),w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(D,w,M);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+M)}function Z(w,M){const D=n.get(w);if(w.version>0&&D.__version!==w.version){Be(D,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+M)}function U(w,M){const D=n.get(w);if(w.version>0&&D.__version!==w.version){Be(D,w,M);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+M)}function Y(w,M){const D=n.get(w);if(w.version>0&&D.__version!==w.version){J(D,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+M)}const G={[ms]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},ue={[on]:i.NEAREST,[I_]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[sl]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ce={[By]:i.NEVER,[Wy]:i.ALWAYS,[ky]:i.LESS,[X_]:i.LEQUAL,[zy]:i.EQUAL,[Gy]:i.GEQUAL,[Hy]:i.GREATER,[Vy]:i.NOTEQUAL};function pe(w,M){if(M.type===un&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ft||M.magFilter===sl||M.magFilter===xo||M.magFilter===oi||M.minFilter===Ft||M.minFilter===sl||M.minFilter===xo||M.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,G[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,G[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,G[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ue[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==xo&&M.minFilter!==oi||M.type===un&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(w,M){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const q=M.source;let W=f.get(q);W===void 0&&(W={},f.set(q,W));const H=F(M);if(H!==w.__cacheKey){W[H]===void 0&&(W[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),W[H].usedTimes++;const re=W[w.__cacheKey];re!==void 0&&(W[w.__cacheKey].usedTimes--,re.usedTimes===0&&C(M)),w.__cacheKey=H,w.__webglTexture=W[H].texture}return D}function Be(w,M,D){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);const W=Ee(w,M),H=M.source;t.bindTexture(q,w.__webglTexture,i.TEXTURE0+D);const re=n.get(H);if(H.version!==re.__version||W===!0){t.activeTexture(i.TEXTURE0+D);const ie=Ze.getPrimaries(Ze.workingColorSpace),le=M.colorSpace===is?null:Ze.getPrimaries(M.colorSpace),Te=M.colorSpace===is||ie===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let oe=g(M.image,!1,s.maxTextureSize);oe=te(M,oe);const fe=r.convert(M.format,M.colorSpace),Re=r.convert(M.type);let we=T(M.internalFormat,fe,Re,M.colorSpace,M.isVideoTexture);pe(q,M);let ge;const We=M.mipmaps,Ce=M.isVideoTexture!==!0,Xe=re.__version===void 0||W===!0,O=H.dataReady,ye=v(M,oe);if(M.isDepthTexture)we=x(M.format===Gr,M.type),Xe&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,we,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,fe,Re,null));else if(M.isDataTexture)if(We.length>0){Ce&&Xe&&t.texStorage2D(i.TEXTURE_2D,ye,we,We[0].width,We[0].height);for(let Q=0,se=We.length;Q<se;Q++)ge=We[Q],Ce?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,fe,Re,ge.data):t.texImage2D(i.TEXTURE_2D,Q,we,ge.width,ge.height,0,fe,Re,ge.data);M.generateMipmaps=!1}else Ce?(Xe&&t.texStorage2D(i.TEXTURE_2D,ye,we,oe.width,oe.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,fe,Re,oe.data)):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,fe,Re,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ce&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,we,We[0].width,We[0].height,oe.depth);for(let Q=0,se=We.length;Q<se;Q++)if(ge=We[Q],M.format!==On)if(fe!==null)if(Ce){if(O)if(M.layerUpdates.size>0){const xe=wp(ge.width,ge.height,M.format,M.type);for(const Me of M.layerUpdates){const $e=ge.data.subarray(Me*xe/ge.data.BYTES_PER_ELEMENT,(Me+1)*xe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Me,ge.width,ge.height,1,fe,$e,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,oe.depth,fe,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,we,ge.width,ge.height,oe.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,oe.depth,fe,Re,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,we,ge.width,ge.height,oe.depth,0,fe,Re,ge.data)}else{Ce&&Xe&&t.texStorage2D(i.TEXTURE_2D,ye,we,We[0].width,We[0].height);for(let Q=0,se=We.length;Q<se;Q++)ge=We[Q],M.format!==On?fe!==null?Ce?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,fe,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,we,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ge.width,ge.height,fe,Re,ge.data):t.texImage2D(i.TEXTURE_2D,Q,we,ge.width,ge.height,0,fe,Re,ge.data)}else if(M.isDataArrayTexture)if(Ce){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,we,oe.width,oe.height,oe.depth),O)if(M.layerUpdates.size>0){const Q=wp(oe.width,oe.height,M.format,M.type);for(const se of M.layerUpdates){const xe=oe.data.subarray(se*Q/oe.data.BYTES_PER_ELEMENT,(se+1)*Q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,fe,Re,xe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,fe,Re,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,fe,Re,oe.data);else if(M.isData3DTexture)Ce?(Xe&&t.texStorage3D(i.TEXTURE_3D,ye,we,oe.width,oe.height,oe.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,fe,Re,oe.data)):t.texImage3D(i.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,fe,Re,oe.data);else if(M.isFramebufferTexture){if(Xe)if(Ce)t.texStorage2D(i.TEXTURE_2D,ye,we,oe.width,oe.height);else{let Q=oe.width,se=oe.height;for(let xe=0;xe<ye;xe++)t.texImage2D(i.TEXTURE_2D,xe,we,Q,se,0,fe,Re,null),Q>>=1,se>>=1}}else if(We.length>0){if(Ce&&Xe){const Q=ne(We[0]);t.texStorage2D(i.TEXTURE_2D,ye,we,Q.width,Q.height)}for(let Q=0,se=We.length;Q<se;Q++)ge=We[Q],Ce?O&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,fe,Re,ge):t.texImage2D(i.TEXTURE_2D,Q,we,fe,Re,ge);M.generateMipmaps=!1}else if(Ce){if(Xe){const Q=ne(oe);t.texStorage2D(i.TEXTURE_2D,ye,we,Q.width,Q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Re,oe)}else t.texImage2D(i.TEXTURE_2D,0,we,fe,Re,oe);p(M)&&m(q),re.__version=H.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function J(w,M,D){if(M.image.length!==6)return;const q=Ee(w,M),W=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+D);const H=n.get(W);if(W.version!==H.__version||q===!0){t.activeTexture(i.TEXTURE0+D);const re=Ze.getPrimaries(Ze.workingColorSpace),ie=M.colorSpace===is?null:Ze.getPrimaries(M.colorSpace),le=M.colorSpace===is||re===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let se=0;se<6;se++)!Te&&!oe?fe[se]=g(M.image[se],!0,s.maxCubemapSize):fe[se]=oe?M.image[se].image:M.image[se],fe[se]=te(M,fe[se]);const Re=fe[0],we=r.convert(M.format,M.colorSpace),ge=r.convert(M.type),We=T(M.internalFormat,we,ge,M.colorSpace),Ce=M.isVideoTexture!==!0,Xe=H.__version===void 0||q===!0,O=W.dataReady;let ye=v(M,Re);pe(i.TEXTURE_CUBE_MAP,M);let Q;if(Te){Ce&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,We,Re.width,Re.height);for(let se=0;se<6;se++){Q=fe[se].mipmaps;for(let xe=0;xe<Q.length;xe++){const Me=Q[xe];M.format!==On?we!==null?Ce?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,We,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Me.width,Me.height,we,ge,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,We,Me.width,Me.height,0,we,ge,Me.data)}}}else{if(Q=M.mipmaps,Ce&&Xe){Q.length>0&&ye++;const se=ne(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,We,se.width,se.height)}for(let se=0;se<6;se++)if(oe){Ce?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe[se].width,fe[se].height,we,ge,fe[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,fe[se].width,fe[se].height,0,we,ge,fe[se].data);for(let xe=0;xe<Q.length;xe++){const $e=Q[xe].image[se].image;Ce?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,$e.width,$e.height,we,ge,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,We,$e.width,$e.height,0,we,ge,$e.data)}}else{Ce?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we,ge,fe[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,we,ge,fe[se]);for(let xe=0;xe<Q.length;xe++){const Me=Q[xe];Ce?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,we,ge,Me.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,We,we,ge,Me.image[se])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),H.__version=W.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ae(w,M,D,q,W,H){const re=r.convert(D.format,D.colorSpace),ie=r.convert(D.type),le=T(D.internalFormat,re,ie,D.colorSpace);if(!n.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>H),fe=Math.max(1,M.height>>H);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,H,le,oe,fe,M.depth,0,re,ie,null):t.texImage2D(W,H,le,oe,fe,0,re,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ee(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,W,n.get(D).__webglTexture,0,X(M)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,W,n.get(D).__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(w,M,D){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const q=M.depthTexture,W=q&&q.isDepthTexture?q.type:null,H=x(M.stencilBuffer,W),re=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=X(M);ee(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,H,M.width,M.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,H,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,H,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,w)}else{const q=M.textures;for(let W=0;W<q.length;W++){const H=q[W],re=r.convert(H.format,H.colorSpace),ie=r.convert(H.type),le=T(H.internalFormat,re,ie,H.colorSpace),Te=X(M);D&&ee(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,le,M.width,M.height):ee(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,le,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const q=n.get(M.depthTexture).__webglTexture,W=X(M);if(M.depthTexture.format===Dr)ee(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(M.depthTexture.format===Gr)ee(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Oe(w){const M=n.get(w),D=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const W=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",W)};q.addEventListener("dispose",W),M.__depthDisposeCallback=W}M.__boundDepthTexture=q}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,w)}else if(D){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),Se(M.__webglDepthbuffer[q],w,!1);else{const W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,H)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Se(M.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,W)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,M,D){const q=n.get(w);M!==void 0&&ae(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Oe(w)}function Ge(w){const M=w.texture,D=n.get(w),q=n.get(M);w.addEventListener("dispose",P);const W=w.textures,H=w.isWebGLCubeRenderTarget===!0,re=W.length>1;if(re||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),H){D.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[ie]=[];for(let le=0;le<M.mipmaps.length;le++)D.__webglFramebuffer[ie][le]=i.createFramebuffer()}else D.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)D.__webglFramebuffer[ie]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(re)for(let ie=0,le=W.length;ie<le;ie++){const Te=n.get(W[ie]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ee(w)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ie=0;ie<W.length;ie++){const le=W[ie];D.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[ie]);const Te=r.convert(le.format,le.colorSpace),oe=r.convert(le.type),fe=T(le.internalFormat,Te,oe,le.colorSpace,w.isXRRenderTarget===!0),Re=X(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,fe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,D.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(D.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),pe(i.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)ae(D.__webglFramebuffer[ie][le],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le);else ae(D.__webglFramebuffer[ie],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let ie=0,le=W.length;ie<le;ie++){const Te=W[ie],oe=n.get(Te);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),pe(i.TEXTURE_2D,Te),ae(D.__webglFramebuffer,w,Te,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,0),p(Te)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),pe(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)ae(D.__webglFramebuffer[le],w,M,i.COLOR_ATTACHMENT0,ie,le);else ae(D.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ie,0);p(M)&&m(ie),t.unbindTexture()}w.depthBuffer&&Oe(w)}function Je(w){const M=w.textures;for(let D=0,q=M.length;D<q;D++){const W=M[D];if(p(W)){const H=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(W).__webglTexture;t.bindTexture(H,re),m(H),t.unbindTexture()}}}const Ye=[],S=[];function N(w){if(w.samples>0){if(ee(w)===!1){const M=w.textures,D=w.width,q=w.height;let W=i.COLOR_BUFFER_BIT;const H=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(w),ie=M.length>1;if(ie)for(let le=0;le<M.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let le=0;le<M.length;le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[le]);const Te=n.get(M[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,D,q,0,0,D,q,W,i.NEAREST),l===!0&&(Ye.length=0,S.length=0,Ye.push(i.COLOR_ATTACHMENT0+le),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ye.push(H),S.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let le=0;le<M.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,re.__webglColorRenderbuffer[le]);const Te=n.get(M[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function X(w){return Math.min(s.maxSamples,w.samples)}function ee(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function j(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function te(w,M){const D=w.colorSpace,q=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Lt&&D!==is&&(Ze.getTransfer(D)===pt?(q!==On||W!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),M}function ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=b,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=U,this.setTextureCube=Y,this.rebindTextures=Ie,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ee}function fw(i,e){function t(n,s=is){let r;const o=Ze.getTransfer(s);if(n===ki)return i.UNSIGNED_BYTE;if(n===af)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===O_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===N_)return i.BYTE;if(n===U_)return i.SHORT;if(n===Wo)return i.UNSIGNED_SHORT;if(n===of)return i.INT;if(n===js)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===F_)return i.ALPHA;if(n===B_)return i.RGB;if(n===On)return i.RGBA;if(n===k_)return i.LUMINANCE;if(n===z_)return i.LUMINANCE_ALPHA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===Gr)return i.DEPTH_STENCIL;if(n===cf)return i.RED;if(n===hf)return i.RED_INTEGER;if(n===H_)return i.RG;if(n===uf)return i.RG_INTEGER;if(n===ff)return i.RGBA_INTEGER;if(n===rl||n===ol||n===al||n===ll)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ol)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hh||n===Vh||n===Gh||n===Wh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===qh||n===Yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xh||n===qh)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jh||n===Kh||n===$h||n===Zh||n===Jh||n===Qh||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$h)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===lu||n===cu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===V_||n===hu||n===uu||n===fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class dw extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fi extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pw={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_w=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:mw,fragmentShader:_w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xw extends er{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const g=new gw,p=t.getContextAttributes();let m=null,T=null;const x=[],v=[],A=new me;let P=null;const E=new Ht;E.layers.enable(1),E.viewport=new je;const C=new Ht;C.layers.enable(2),C.viewport=new je;const I=[E,C],y=new dw;y.layers.enable(1),y.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=x[J];return ae===void 0&&(ae=new Kc,x[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=x[J];return ae===void 0&&(ae=new Kc,x[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=x[J];return ae===void 0&&(ae=new Kc,x[J]=ae),ae.getHandSpace()};function F(J){const ae=v.indexOf(J.inputSource);if(ae===-1)return;const Se=x[ae];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||o),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<x.length;J++){const ae=v[J];ae!==null&&(v[J]=null,x[J].disconnect(ae))}b=null,z=null,g.reset(),e.setRenderTarget(m),d=null,f=null,u=null,s=null,T=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new zi(d.framebufferWidth,d.framebufferHeight,{format:On,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,Se=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?Gr:Dr,Se=p.stencil?Vr:js);const Oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new zi(f.textureWidth,f.textureHeight,{format:On,type:ki,depthTexture:new sg(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(J){for(let ae=0;ae<J.removed.length;ae++){const Se=J.removed[ae],_e=v.indexOf(Se);_e>=0&&(v[_e]=null,x[_e].disconnect(Se))}for(let ae=0;ae<J.added.length;ae++){const Se=J.added[ae];let _e=v.indexOf(Se);if(_e===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=v.length){v.push(Se),_e=Ie;break}else if(v[Ie]===null){v[Ie]=Se,_e=Ie;break}if(_e===-1)break}const Oe=x[_e];Oe&&Oe.connect(Se)}}const U=new L,Y=new L;function G(J,ae,Se){U.setFromMatrixPosition(ae.matrixWorld),Y.setFromMatrixPosition(Se.matrixWorld);const _e=U.distanceTo(Y),Oe=ae.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Ge=Oe[14]/(Oe[10]-1),Je=Oe[14]/(Oe[10]+1),Ye=(Oe[9]+1)/Oe[5],S=(Oe[9]-1)/Oe[5],N=(Oe[8]-1)/Oe[0],X=(Ie[8]+1)/Ie[0],ee=Ge*N,j=Ge*X,te=_e/(-N+X),ne=te*-N;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ne),J.translateZ(te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Oe[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const w=Ge+te,M=Je+te,D=ee-ne,q=j+(_e-ne),W=Ye*Je/M*w,H=S*Je/M*w;J.projectionMatrix.makePerspective(D,q,W,H,w,M),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,Se=J.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),y.near=C.near=E.near=ae,y.far=C.far=E.far=Se,(b!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,z=y.far);const _e=J.parent,Oe=y.cameras;ue(y,_e);for(let Ie=0;Ie<Oe.length;Ie++)ue(Oe[Ie],_e);Oe.length===2?G(y,E,C):y.projectionMatrix.copy(E.projectionMatrix),ce(J,y,_e)};function ce(J,ae,Se){Se===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let pe=null;function Ee(J,ae){if(h=ae.getViewerPose(c||o),_=ae,h!==null){const Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let _e=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let Ie=0;Ie<Se.length;Ie++){const Ge=Se[Ie];let Je=null;if(d!==null)Je=d.getViewport(Ge);else{const S=u.getViewSubImage(f,Ge);Je=S.viewport,Ie===0&&(e.setRenderTargetTextures(T,S.colorTexture,f.ignoreDepthValues?void 0:S.depthStencilTexture),e.setRenderTarget(T))}let Ye=I[Ie];Ye===void 0&&(Ye=new Ht,Ye.layers.enable(Ie),Ye.viewport=new je,I[Ie]=Ye),Ye.matrix.fromArray(Ge.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ge.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Je.x,Je.y,Je.width,Je.height),Ie===0&&(y.matrix.copy(Ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(Ye)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ie=u.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,s.renderState)}}for(let Se=0;Se<x.length;Se++){const _e=v[Se],Oe=x[Se];_e!==null&&Oe!==void 0&&Oe.update(_e,ae,c||o)}pe&&pe(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Be=new ig;Be.setAnimationLoop(Ee),this.setAnimationLoop=function(J){pe=J},this.dispose=function(){}}}const Ps=new fi,vw=new Ne;function yw(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,eg(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,T,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=e.get(m),x=T.envMap,v=T.envMapRotation;x&&(p.envMap.value=x,Ps.copy(v),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),p.envMapRotation.value.setFromMatrix4(vw.makeRotationFromEuler(Ps)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mw(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const v=x.program;n.uniformBlockBinding(T,v)}function c(T,x){let v=s[T.id];v===void 0&&(_(T),v=h(T),s[T.id]=v,T.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(T,A);const P=e.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function h(T){const x=u();T.__bindingPointIndex=x;const v=i.createBuffer(),A=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const x=s[T.id],v=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let P=0,E=v.length;P<E;P++){const C=Array.isArray(v[P])?v[P]:[v[P]];for(let I=0,y=C.length;I<y;I++){const b=C[I];if(d(b,P,I,A)===!0){const z=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let V=0;for(let Z=0;Z<F.length;Z++){const U=F[Z],Y=g(U);typeof U=="number"||typeof U=="boolean"?(b.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,z+V,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=0,b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=0,b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=0):(U.toArray(b.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,x,v,A){const P=T.value,E=x+"_"+v;if(A[E]===void 0)return typeof P=="number"||typeof P=="boolean"?A[E]=P:A[E]=P.clone(),!0;{const C=A[E];if(typeof P=="number"||typeof P=="boolean"){if(C!==P)return A[E]=P,!0}else if(C.equals(P)===!1)return C.copy(P),!0}return!1}function _(T){const x=T.uniforms;let v=0;const A=16;for(let E=0,C=x.length;E<C;E++){const I=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,b=I.length;y<b;y++){const z=I[y],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,Z=F.length;V<Z;V++){const U=F[V],Y=g(U),G=v%A,ue=G%Y.boundary,ce=G+ue;v+=ue,ce!==0&&A-ce<Y.storage&&(v+=A-ce),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Y.storage}}}const P=v%A;return P>0&&(v+=A-P),T.__size=v,T.__cache={},this}function g(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function p(T){const x=T.target;x.removeEventListener("dispose",p);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Sw{constructor(e={}){const{canvas:t=aM(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=us,this.toneMappingExposure=1;const x=this;let v=!1,A=0,P=0,E=null,C=-1,I=null;const y=new je,b=new je;let z=null;const F=new De(0);let V=0,Z=t.width,U=t.height,Y=1,G=null,ue=null;const ce=new je(0,0,Z,U),pe=new je(0,0,Z,U);let Ee=!1;const Be=new mf;let J=!1,ae=!1;const Se=new Ne,_e=new Ne,Oe=new L,Ie=new je,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Ye(){return E===null?Y:1}let S=n;function N(R,B){return t.getContext(R,B)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rf}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),S===null){const B="webgl2";if(S=N(B,R),S===null)throw N(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let X,ee,j,te,ne,w,M,D,q,W,H,re,ie,le,Te,oe,fe,Re,we,ge,We,Ce,Xe,O;function ye(){X=new Ab(S),X.init(),Ce=new fw(S,X),ee=new Mb(S,X,e,Ce),j=new cw(S),ee.reverseDepthBuffer&&j.buffers.depth.setReversed(!0),te=new Pb(S),ne=new jE,w=new uw(S,X,j,ne,ee,Ce,te),M=new Tb(x),D=new wb(x),q=new FM(S),Xe=new vb(S,q),W=new Rb(S,q,te,Xe),H=new Db(S,W,q,te),we=new Lb(S,ee,w),oe=new Sb(ne),re=new YE(x,M,D,X,ee,Xe,oe),ie=new yw(x,ne),le=new $E,Te=new nw(X),Re=new xb(x,M,D,j,H,f,l),fe=new aw(x,H,ee),O=new Mw(S,te,ee,j),ge=new yb(S,X,te),We=new Cb(S,X,te),te.programs=re.programs,x.capabilities=ee,x.extensions=X,x.properties=ne,x.renderLists=le,x.shadowMap=fe,x.state=j,x.info=te}ye();const Q=new xw(x,S);this.xr=Q,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const R=X.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=X.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(Z,U,!1))},this.getSize=function(R){return R.set(Z,U)},this.setSize=function(R,B,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,U=B,t.width=Math.floor(R*Y),t.height=Math.floor(B*Y),K===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(Z*Y,U*Y).floor()},this.setDrawingBufferSize=function(R,B,K){Z=R,U=B,Y=K,t.width=Math.floor(R*K),t.height=Math.floor(B*K),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(ce)},this.setViewport=function(R,B,K,$){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,B,K,$),j.viewport(y.copy(ce).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(pe)},this.setScissor=function(R,B,K,$){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,B,K,$),j.scissor(b.copy(pe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){j.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(R=!0,B=!0,K=!0){let $=0;if(R){let k=!1;if(E!==null){const he=E.texture.format;k=he===ff||he===uf||he===hf}if(k){const he=E.texture.type,ve=he===ki||he===js||he===Wo||he===Vr||he===af||he===lf,be=Re.getClearColor(),Ae=Re.getClearAlpha(),Ue=be.r,Fe=be.g,Pe=be.b;ve?(d[0]=Ue,d[1]=Fe,d[2]=Pe,d[3]=Ae,S.clearBufferuiv(S.COLOR,0,d)):(_[0]=Ue,_[1]=Fe,_[2]=Pe,_[3]=Ae,S.clearBufferiv(S.COLOR,0,_))}else $|=S.COLOR_BUFFER_BIT}B&&($|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&($|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),le.dispose(),Te.dispose(),ne.dispose(),M.dispose(),D.dispose(),H.dispose(),Xe.dispose(),O.dispose(),re.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Kf),Q.removeEventListener("sessionend",$f),Ss.stop()};function se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=te.autoReset,B=fe.enabled,K=fe.autoUpdate,$=fe.needsUpdate,k=fe.type;ye(),te.autoReset=R,fe.enabled=B,fe.autoUpdate=K,fe.needsUpdate=$,fe.type=k}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $e(R){const B=R.target;B.removeEventListener("dispose",$e),Et(B)}function Et(R){ln(R),ne.remove(R)}function ln(R){const B=ne.get(R).programs;B!==void 0&&(B.forEach(function(K){re.releaseProgram(K)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,K,$,k,he){B===null&&(B=Ge);const ve=k.isMesh&&k.matrixWorld.determinant()<0,be=A0(R,B,K,$,k);j.setMaterial($,ve);let Ae=K.index,Ue=1;if($.wireframe===!0){if(Ae=W.getWireframeAttribute(K),Ae===void 0)return;Ue=2}const Fe=K.drawRange,Pe=K.attributes.position;let st=Fe.start*Ue,dt=(Fe.start+Fe.count)*Ue;he!==null&&(st=Math.max(st,he.start*Ue),dt=Math.min(dt,(he.start+he.count)*Ue)),Ae!==null?(st=Math.max(st,0),dt=Math.min(dt,Ae.count)):Pe!=null&&(st=Math.max(st,0),dt=Math.min(dt,Pe.count));const yt=dt-st;if(yt<0||yt===1/0)return;Xe.setup(k,$,be,K,Ae);let xn,et=ge;if(Ae!==null&&(xn=q.get(Ae),et=We,et.setIndex(xn)),k.isMesh)$.wireframe===!0?(j.setLineWidth($.wireframeLinewidth*Ye()),et.setMode(S.LINES)):et.setMode(S.TRIANGLES);else if(k.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),j.setLineWidth(Le*Ye()),k.isLineSegments?et.setMode(S.LINES):k.isLineLoop?et.setMode(S.LINE_LOOP):et.setMode(S.LINE_STRIP)}else k.isPoints?et.setMode(S.POINTS):k.isSprite&&et.setMode(S.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)et.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,zt=k._multiDrawCounts,tt=k._multiDrawCount,Vn=Ae?q.get(Ae).bytesPerElement:1,nr=ne.get($).currentProgram.getUniforms();for(let vn=0;vn<tt;vn++)nr.setValue(S,"_gl_DrawID",vn),et.render(Le[vn]/Vn,zt[vn])}else if(k.isInstancedMesh)et.renderInstances(st,yt,k.count);else if(K.isInstancedBufferGeometry){const Le=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,zt=Math.min(K.instanceCount,Le);et.renderInstances(st,yt,zt)}else et.render(st,yt)};function Qe(R,B,K){R.transparent===!0&&R.side===Un&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,_a(R,B,K),R.side=Bi,R.needsUpdate=!0,_a(R,B,K),R.side=Un):_a(R,B,K)}this.compile=function(R,B,K=null){K===null&&(K=R),p=Te.get(K),p.init(B),T.push(p),K.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==K&&R.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const $=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const be=he[ve];Qe(be,K,k),$.add(be)}else Qe(he,K,k),$.add(he)}),T.pop(),p=null,$},this.compileAsync=function(R,B,K=null){const $=this.compile(R,B,K);return new Promise(k=>{function he(){if($.forEach(function(ve){ne.get(ve).currentProgram.isReady()&&$.delete(ve)}),$.size===0){k(R);return}setTimeout(he,10)}X.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let cn=null;function vi(R){cn&&cn(R)}function Kf(){Ss.stop()}function $f(){Ss.start()}const Ss=new ig;Ss.setAnimationLoop(vi),typeof self<"u"&&Ss.setContext(self),this.setAnimationLoop=function(R){cn=R,Q.setAnimationLoop(R),R===null?Ss.stop():Ss.start()},Q.addEventListener("sessionstart",Kf),Q.addEventListener("sessionend",$f),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,B,E),p=Te.get(R,T.length),p.init(B),T.push(p),_e.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(_e),ae=this.localClippingEnabled,J=oe.init(this.clippingPlanes,ae),g=le.get(R,m.length),g.init(),m.push(g),Q.enabled===!0&&Q.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&rc(he,B,-1/0,x.sortObjects)}rc(R,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(G,ue),Je=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Je&&Re.addToRenderList(g,R),this.info.render.frame++,J===!0&&oe.beginShadows();const K=p.state.shadowsArray;fe.render(K,R,B),J===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,k=g.transmissive;if(p.setupLights(),B.isArrayCamera){const he=B.cameras;if(k.length>0)for(let ve=0,be=he.length;ve<be;ve++){const Ae=he[ve];Jf($,k,R,Ae)}Je&&Re.render(R);for(let ve=0,be=he.length;ve<be;ve++){const Ae=he[ve];Zf(g,R,Ae,Ae.viewport)}}else k.length>0&&Jf($,k,R,B),Je&&Re.render(R),Zf(g,R,B);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,B),Xe.resetDefaultState(),C=-1,I=null,T.pop(),T.length>0?(p=T[T.length-1],J===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function rc(R,B,K,$){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){$&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const ve=H.update(R),be=R.material;be.visible&&g.push(R,ve,be,K,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const ve=H.update(R),be=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ie.copy(ve.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(be)){const Ae=ve.groups;for(let Ue=0,Fe=Ae.length;Ue<Fe;Ue++){const Pe=Ae[Ue],st=be[Pe.materialIndex];st&&st.visible&&g.push(R,ve,st,K,Ie.z,Pe)}}else be.visible&&g.push(R,ve,be,K,Ie.z,null)}}const he=R.children;for(let ve=0,be=he.length;ve<be;ve++)rc(he[ve],B,K,$)}function Zf(R,B,K,$){const k=R.opaque,he=R.transmissive,ve=R.transparent;p.setupLightsView(K),J===!0&&oe.setGlobalState(x.clippingPlanes,K),$&&j.viewport(y.copy($)),k.length>0&&ma(k,B,K),he.length>0&&ma(he,B,K),ve.length>0&&ma(ve,B,K),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Jf(R,B,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new zi(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Kn:ki,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const he=p.state.transmissionRenderTarget[$.id],ve=$.viewport||y;he.setSize(ve.z,ve.w);const be=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(F),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Je&&Re.render(K);const Ae=x.toneMapping;x.toneMapping=us;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),J===!0&&oe.setGlobalState(x.clippingPlanes,$),ma(R,K,$),w.updateMultisampleRenderTarget(he),w.updateRenderTargetMipmap(he),X.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Pe=0,st=B.length;Pe<st;Pe++){const dt=B[Pe],yt=dt.object,xn=dt.geometry,et=dt.material,Le=dt.group;if(et.side===Un&&yt.layers.test($.layers)){const zt=et.side;et.side=fn,et.needsUpdate=!0,Qf(yt,K,$,xn,et,Le),et.side=zt,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(w.updateMultisampleRenderTarget(he),w.updateRenderTargetMipmap(he))}x.setRenderTarget(be),x.setClearColor(F,V),Ue!==void 0&&($.viewport=Ue),x.toneMapping=Ae}function ma(R,B,K){const $=B.isScene===!0?B.overrideMaterial:null;for(let k=0,he=R.length;k<he;k++){const ve=R[k],be=ve.object,Ae=ve.geometry,Ue=$===null?ve.material:$,Fe=ve.group;be.layers.test(K.layers)&&Qf(be,B,K,Ae,Ue,Fe)}}function Qf(R,B,K,$,k,he){R.onBeforeRender(x,B,K,$,k,he),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(x,B,K,$,R,he),k.transparent===!0&&k.side===Un&&k.forceSinglePass===!1?(k.side=fn,k.needsUpdate=!0,x.renderBufferDirect(K,B,$,k,R,he),k.side=Bi,k.needsUpdate=!0,x.renderBufferDirect(K,B,$,k,R,he),k.side=Un):x.renderBufferDirect(K,B,$,k,R,he),R.onAfterRender(x,B,K,$,k,he)}function _a(R,B,K){B.isScene!==!0&&(B=Ge);const $=ne.get(R),k=p.state.lights,he=p.state.shadowsArray,ve=k.state.version,be=re.getParameters(R,k.state,he,B,K),Ae=re.getProgramCacheKey(be);let Ue=$.programs;$.environment=R.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(R.isMeshStandardMaterial?D:M).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Ue===void 0&&(R.addEventListener("dispose",$e),Ue=new Map,$.programs=Ue);let Fe=Ue.get(Ae);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===ve)return td(R,be),Fe}else be.uniforms=re.getUniforms(R),R.onBeforeCompile(be,x),Fe=re.acquireProgram(be,Ae),Ue.set(Ae,Fe),$.uniforms=be.uniforms;const Pe=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),td(R,be),$.needsLights=C0(R),$.lightsStateVersion=ve,$.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMap.value=k.state.directionalShadowMap,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotShadowMap.value=k.state.spotShadowMap,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMap.value=k.state.pointShadowMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Fe,$.uniformsList=null,Fe}function ed(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=ul.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function td(R,B){const K=ne.get(R);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function A0(R,B,K,$,k){B.isScene!==!0&&(B=Ge),w.resetTextureUnits();const he=B.fog,ve=$.isMeshStandardMaterial?B.environment:null,be=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Lt,Ae=($.isMeshStandardMaterial?D:M).get($.envMap||ve),Ue=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Fe=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!K.morphAttributes.position,st=!!K.morphAttributes.normal,dt=!!K.morphAttributes.color;let yt=us;$.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(yt=x.toneMapping);const xn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=xn!==void 0?xn.length:0,Le=ne.get($),zt=p.state.lights;if(J===!0&&(ae===!0||R!==I)){const Ln=R===I&&$.id===C;oe.setState($,R,Ln)}let tt=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==zt.state.version||Le.outputColorSpace!==be||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==Ae||$.fog===!0&&Le.fog!==he||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==Fe||Le.morphTargets!==Pe||Le.morphNormals!==st||Le.morphColors!==dt||Le.toneMapping!==yt||Le.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Le.__version=$.version);let Vn=Le.currentProgram;tt===!0&&(Vn=_a($,B,k));let nr=!1,vn=!1,oc=!1;const Tt=Vn.getUniforms(),Xi=Le.uniforms;if(j.useProgram(Vn.program)&&(nr=!0,vn=!0,oc=!0),$.id!==C&&(C=$.id,vn=!0),nr||I!==R){ee.reverseDepthBuffer?(Se.copy(R.projectionMatrix),cM(Se),hM(Se),Tt.setValue(S,"projectionMatrix",Se)):Tt.setValue(S,"projectionMatrix",R.projectionMatrix),Tt.setValue(S,"viewMatrix",R.matrixWorldInverse);const Ln=Tt.map.cameraPosition;Ln!==void 0&&Ln.setValue(S,Oe.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&Tt.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),I!==R&&(I=R,vn=!0,oc=!0)}if(k.isSkinnedMesh){Tt.setOptional(S,k,"bindMatrix"),Tt.setOptional(S,k,"bindMatrixInverse");const Ln=k.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Tt.setValue(S,"boneTexture",Ln.boneTexture,w))}k.isBatchedMesh&&(Tt.setOptional(S,k,"batchingTexture"),Tt.setValue(S,"batchingTexture",k._matricesTexture,w),Tt.setOptional(S,k,"batchingIdTexture"),Tt.setValue(S,"batchingIdTexture",k._indirectTexture,w),Tt.setOptional(S,k,"batchingColorTexture"),k._colorsTexture!==null&&Tt.setValue(S,"batchingColorTexture",k._colorsTexture,w));const ac=K.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0)&&we.update(k,K,Vn),(vn||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,Tt.setValue(S,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Xi.envMap.value=Ae,Xi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Xi.envMapIntensity.value=B.environmentIntensity),vn&&(Tt.setValue(S,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&R0(Xi,oc),he&&$.fog===!0&&ie.refreshFogUniforms(Xi,he),ie.refreshMaterialUniforms(Xi,$,Y,U,p.state.transmissionRenderTarget[R.id]),ul.upload(S,ed(Le),Xi,w)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ul.upload(S,ed(Le),Xi,w),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(S,"center",k.center),Tt.setValue(S,"modelViewMatrix",k.modelViewMatrix),Tt.setValue(S,"normalMatrix",k.normalMatrix),Tt.setValue(S,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ln=$.uniformsGroups;for(let lc=0,P0=Ln.length;lc<P0;lc++){const nd=Ln[lc];O.update(nd,Vn),O.bind(nd,Vn)}}return Vn}function R0(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function C0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,B,K){ne.get(R.texture).__webglTexture=B,ne.get(R.depthTexture).__webglTexture=K;const $=ne.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const K=ne.get(R);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,K=0){E=R,A=B,P=K;let $=!0,k=null,he=!1,ve=!1;if(R){const Ae=ne.get(R);if(Ae.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(S.FRAMEBUFFER,null),$=!1;else if(Ae.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Ae.__hasExternalTextures)w.rebindTextures(R,ne.get(R.texture).__webglTexture,ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Pe=R.depthTexture;if(Ae.__boundDepthTexture!==Pe){if(Pe!==null&&ne.has(Pe)&&(R.width!==Pe.image.width||R.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const Ue=R.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const Fe=ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?k=Fe[B][K]:k=Fe[B],he=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?k=ne.get(R).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[K]:k=Fe,y.copy(R.viewport),b.copy(R.scissor),z=R.scissorTest}else y.copy(ce).multiplyScalar(Y).floor(),b.copy(pe).multiplyScalar(Y).floor(),z=Ee;if(j.bindFramebuffer(S.FRAMEBUFFER,k)&&$&&j.drawBuffers(R,k),j.viewport(y),j.scissor(b),j.setScissorTest(z),he){const Ae=ne.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,K)}else if(ve){const Ae=ne.get(R.texture),Ue=B||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ae.__webglTexture,K||0,Ue)}C=-1},this.readRenderTargetPixels=function(R,B,K,$,k,he,ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){j.bindFramebuffer(S.FRAMEBUFFER,be);try{const Ae=R.texture,Ue=Ae.format,Fe=Ae.type;if(!ee.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-$&&K>=0&&K<=R.height-k&&S.readPixels(B,K,$,k,Ce.convert(Ue),Ce.convert(Fe),he)}finally{const Ae=E!==null?ne.get(E).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(R,B,K,$,k,he,ve){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){const Ae=R.texture,Ue=Ae.format,Fe=Ae.type;if(!ee.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-$&&K>=0&&K<=R.height-k){j.bindFramebuffer(S.FRAMEBUFFER,be);const Pe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Pe),S.bufferData(S.PIXEL_PACK_BUFFER,he.byteLength,S.STREAM_READ),S.readPixels(B,K,$,k,Ce.convert(Ue),Ce.convert(Fe),0);const st=E!==null?ne.get(E).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,st);const dt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await lM(S,dt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Pe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,he),S.deleteBuffer(Pe),S.deleteSync(dt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,B=null,K=0){R.isTexture!==!0&&(hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-K),k=Math.floor(R.image.width*$),he=Math.floor(R.image.height*$),ve=B!==null?B.x:0,be=B!==null?B.y:0;w.setTexture2D(R,0),S.copyTexSubImage2D(S.TEXTURE_2D,K,0,0,ve,be,k,he),j.unbindTexture()},this.copyTextureToTexture=function(R,B,K=null,$=null,k=0){R.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],B=arguments[2],k=arguments[3]||0,K=null);let he,ve,be,Ae,Ue,Fe;K!==null?(he=K.max.x-K.min.x,ve=K.max.y-K.min.y,be=K.min.x,Ae=K.min.y):(he=R.image.width,ve=R.image.height,be=0,Ae=0),$!==null?(Ue=$.x,Fe=$.y):(Ue=0,Fe=0);const Pe=Ce.convert(B.format),st=Ce.convert(B.type);w.setTexture2D(B,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,B.unpackAlignment);const dt=S.getParameter(S.UNPACK_ROW_LENGTH),yt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),xn=S.getParameter(S.UNPACK_SKIP_PIXELS),et=S.getParameter(S.UNPACK_SKIP_ROWS),Le=S.getParameter(S.UNPACK_SKIP_IMAGES),zt=R.isCompressedTexture?R.mipmaps[k]:R.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,zt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,zt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,be),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ae),R.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,k,Ue,Fe,he,ve,Pe,st,zt.data):R.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,k,Ue,Fe,zt.width,zt.height,Pe,zt.data):S.texSubImage2D(S.TEXTURE_2D,k,Ue,Fe,he,ve,Pe,st,zt),S.pixelStorei(S.UNPACK_ROW_LENGTH,dt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,yt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,xn),S.pixelStorei(S.UNPACK_SKIP_ROWS,et),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Le),k===0&&B.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(R,B,K=null,$=null,k=0){R.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,R=arguments[2],B=arguments[3],k=arguments[4]||0);let he,ve,be,Ae,Ue,Fe,Pe,st,dt;const yt=R.isCompressedTexture?R.mipmaps[k]:R.image;K!==null?(he=K.max.x-K.min.x,ve=K.max.y-K.min.y,be=K.max.z-K.min.z,Ae=K.min.x,Ue=K.min.y,Fe=K.min.z):(he=yt.width,ve=yt.height,be=yt.depth,Ae=0,Ue=0,Fe=0),$!==null?(Pe=$.x,st=$.y,dt=$.z):(Pe=0,st=0,dt=0);const xn=Ce.convert(B.format),et=Ce.convert(B.type);let Le;if(B.isData3DTexture)w.setTexture3D(B,0),Le=S.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)w.setTexture2DArray(B,0),Le=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,B.unpackAlignment);const zt=S.getParameter(S.UNPACK_ROW_LENGTH),tt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Vn=S.getParameter(S.UNPACK_SKIP_PIXELS),nr=S.getParameter(S.UNPACK_SKIP_ROWS),vn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,yt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,yt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ae),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ue),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Fe),R.isDataTexture||R.isData3DTexture?S.texSubImage3D(Le,k,Pe,st,dt,he,ve,be,xn,et,yt.data):B.isCompressedArrayTexture?S.compressedTexSubImage3D(Le,k,Pe,st,dt,he,ve,be,xn,yt.data):S.texSubImage3D(Le,k,Pe,st,dt,he,ve,be,xn,et,yt),S.pixelStorei(S.UNPACK_ROW_LENGTH,zt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,tt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Vn),S.pixelStorei(S.UNPACK_SKIP_ROWS,nr),S.pixelStorei(S.UNPACK_SKIP_IMAGES,vn),k===0&&B.generateMipmaps&&S.generateMipmap(Le),j.unbindTexture()},this.initRenderTarget=function(R){ne.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),j.unbindTexture()},this.resetState=function(){A=0,P=0,E=null,j.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===df?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===$l?"display-p3":"srgb"}}class Tw extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pu,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new L;class xf{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ap=new L,Rp=new je,Cp=new je,Ew=new L,Pp=new Ne,Ha=new L,$c=new pi,Lp=new Ne,Zc=new ca;class ww extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Id,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(s),e.ray.intersectsSphere($c)!==!1&&(Lp.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(Lp),!(this.boundingBox!==null&&Zc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Rp.fromBufferAttribute(s.attributes.skinIndex,e),Cp.fromBufferAttribute(s.attributes.skinWeight,e),Ap.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Cp.getComponent(r);if(o!==0){const a=Rp.getComponent(r);Pp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ew.copy(Ap).applyMatrix4(Pp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cg extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vf extends Bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=on,h=on,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dp=new Ne,Aw=new Ne;class yf{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Aw;Dp.multiplyMatrices(a,t[r]),Dp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new yf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vf(t,e,e,On,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new cg),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class _u extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xr=new Ne,Ip=new Ne,Va=[],Np=new Wi,Rw=new Ne,ho=new Vt,uo=new pi;class Al extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _u(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),Np.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(Np)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),uo.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),Ip.multiplyMatrices(n,xr),ho.matrixWorld=Ip,ho.raycast(e,Va);for(let o=0,a=Va.length;o<a;o++){const l=Va[o];l.instanceId=r,l.object=this,t.push(l)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _u(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vf(new Float32Array(s*this.count),s,this.count,cf,un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hg extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new L,Cl=new L,Up=new Ne,fo=new ca,Ga=new pi,Jc=new L,Op=new L;class Mf extends ft{constructor(e=new Zt,t=new hg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rl.fromBufferAttribute(t,s-1),Cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rl.distanceTo(Cl);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Up.copy(s).invert(),fo.copy(e.ray).applyMatrix4(Up);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=h.getX(g),T=h.getX(g+1),x=Wa(this,e,fo,l,m,T);x&&t.push(x)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(d),m=Wa(this,e,fo,l,g,p);m&&t.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=Wa(this,e,fo,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=Wa(this,e,fo,l,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wa(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Rl.fromBufferAttribute(o,s),Cl.fromBufferAttribute(o,r),t.distanceSqToSegment(Rl,Cl,Jc,Op)>n)return;Jc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Jc);if(!(l<e.near||l>e.far))return{distance:l,point:Op.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Fp=new L,Bp=new L;class Cw extends Mf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fp.fromBufferAttribute(t,s),Bp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fp.distanceTo(Bp);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pw extends Mf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Sf extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kp=new Ne,gu=new ca,Xa=new pi,qa=new L;class Pl extends ft{constructor(e=new Zt,t=new Sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;kp.copy(s).invert(),gu.copy(e.ray).applyMatrix4(kp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);qa.fromBufferAttribute(u,p),zp(qa,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)qa.fromBufferAttribute(u,_),zp(qa,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zp(i,e,t,n,s,r,o){const a=gu.distanceSqToPoint(i);if(a<t){const l=new L;gu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new me:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,s=[],r=[],o=[],a=new L,l=new Ne;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tf extends mi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new me){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lw extends Tf{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bf(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ya=new L,Qc=new bf,eh=new bf,th=new bf;class Dw extends mi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ya.subVectors(s[0],s[1]).add(s[0]),c=Ya);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ya),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Qc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,g,p),eh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,g,p),th.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),eh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),th.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Qc.calc(l),eh.calc(l),th.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hp(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Iw(i,e){const t=1-i;return t*t*e}function Nw(i,e){return 2*(1-i)*i*e}function Uw(i,e){return i*i*e}function Lo(i,e,t,n){return Iw(i,e)+Nw(i,t)+Uw(i,n)}function Ow(i,e){const t=1-i;return t*t*t*e}function Fw(i,e){const t=1-i;return 3*t*t*i*e}function Bw(i,e){return 3*(1-i)*i*i*e}function kw(i,e){return i*i*i*e}function Do(i,e,t,n,s){return Ow(i,e)+Fw(i,t)+Bw(i,n)+kw(i,s)}class ug extends mi{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zw extends mi{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y),Do(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fg extends mi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hw extends mi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dg extends mi{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lo(e,s.x,r.x,o.x),Lo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vw extends mi{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lo(e,s.x,r.x,o.x),Lo(e,s.y,r.y,o.y),Lo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pg extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Hp(a,l.x,c.x,h.x,u.x),Hp(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new me().fromArray(s))}return this}}var Vp=Object.freeze({__proto__:null,ArcCurve:Lw,CatmullRomCurve3:Dw,CubicBezierCurve:ug,CubicBezierCurve3:zw,EllipseCurve:Tf,LineCurve:fg,LineCurve3:Hw,QuadraticBezierCurve:dg,QuadraticBezierCurve3:Vw,SplineCurve:pg});class Gw extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vp[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Vp[s.type]().fromJSON(s))}return this}}class Ll extends Gw{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fg(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new dg(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ug(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Tf(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ef extends Zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,h=new me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("normal",new an(a,3)),this.setAttribute("uv",new an(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nh extends Ll{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ll().fromJSON(s))}return this}}const Ww={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=mg(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Kw(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let _=t;_<s;_+=t)u=i[_],f=i[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return jo(r,o,t,a,l,d,0),o}};function mg(i,e,t,n,s){let r,o;if(s===oA(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Gp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Gp(r,i[r],i[r+1],o);return o&&Ql(o,o.next)&&($o(o),o=o.next),o}function Ks(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ql(t,t.next)||xt(t.prev,t,t.next)===0)){if($o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&eA(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?qw(i,n,s,r):Xw(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),$o(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Yw(Ks(i),e,t),jo(i,e,t,n,s,r,2)):o===2&&jw(i,e,t,n,s,r):jo(Ks(i),e,t,n,s,r,1);break}}}function Xw(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=d&&Tr(s,a,r,l,o,c,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function qw(i,e,t,n){const s=i.prev,r=i,o=i.next;if(xt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,g=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=xu(d,_,e,t,n),T=xu(g,p,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=m&&v&&v.z<=T;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&Tr(a,h,l,u,c,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==s&&v!==o&&Tr(a,h,l,u,c,f,v.x,v.y)&&xt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&Tr(a,h,l,u,c,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=T;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==s&&v!==o&&Tr(a,h,l,u,c,f,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Yw(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ql(s,r)&&_g(s,n,n.next,r)&&Ko(s,r)&&Ko(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$o(n),$o(n.next),n=i=r),n=n.next}while(n!==i);return Ks(n)}function jw(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iA(o,a)){let l=gg(o,a);o=Ks(o,o.next),l=Ks(l,l.next),jo(o,e,t,n,s,r,0),jo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Kw(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=mg(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(nA(c));for(s.sort($w),r=0;r<s.length;r++)t=Zw(s[r],t);return t}function $w(i,e){return i.x-e.x}function Zw(i,e){const t=Jw(i,e);if(!t)return e;const n=gg(t,i);return Ks(n,n.next),Ks(t,t.next)}function Jw(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Tr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ko(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Qw(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Qw(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function eA(i,e,t,n){let s=i;do s.z===0&&(s.z=xu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tA(s)}function tA(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function xu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function nA(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Tr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function iA(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sA(i,e)&&(Ko(i,e)&&Ko(e,i)&&rA(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||Ql(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ql(i,e){return i.x===e.x&&i.y===e.y}function _g(i,e,t,n){const s=Ka(xt(i,e,t)),r=Ka(xt(i,e,n)),o=Ka(xt(t,n,i)),a=Ka(xt(t,n,e));return!!(s!==r&&o!==a||s===0&&ja(i,t,e)||r===0&&ja(i,n,e)||o===0&&ja(t,i,n)||a===0&&ja(t,e,n))}function ja(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ka(i){return i>0?1:i<0?-1:0}function sA(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_g(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ko(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function rA(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gg(i,e){const t=new vu(i.i,i.x,i.y),n=new vu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Gp(i,e,t,n){const s=new vu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oA(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class wf{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return wf.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Wp(e),Xp(n,e);let o=e.length;t.forEach(Wp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Xp(n,t[l]);const a=Ww.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Dl extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const T=[],x=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const P=A/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),p.push(P+v,1-x),T.push(c++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<t;T++){const x=h[m][T+1],v=h[m][T],A=h[m+1][T],P=h[m+1][T+1];(m!==0||o>0)&&d.push(x,v,P),(m!==n-1||l<Math.PI)&&d.push(v,A,P)}this.setIndex(d),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(g,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zo extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W_,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _i extends Zo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function $a(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function aA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lA(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qp(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function xg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class fa{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cA extends fa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nd,endingEnd:Nd}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ud:r=e,a=2*t-n;break;case Od:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ud:o=e,l=2*n-t;break;case Od:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(s-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,T=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-d)*p+(1.5+d)*g+.5*_,v=d*p-d*g;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+T*o[c+A]+x*o[l+A]+v*o[u+A];return r}}class hA extends fa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}}class uA extends fa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case Mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&aA(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=qo;class to extends gi{constructor(e,t,n){super(e,t,n)}}to.prototype.ValueTypeName="bool";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=Xo;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;class vg extends gi{}vg.prototype.ValueTypeName="color";class qr extends gi{}qr.prototype.ValueTypeName="number";class fA extends fa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)zn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Yr extends gi{InterpolantFactoryMethodLinear(e){return new fA(this.times,this.values,this.getValueSize(),e)}}Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends gi{constructor(e,t,n){super(e,t,n)}}no.prototype.ValueTypeName="string";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=Xo;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends gi{}jr.prototype.ValueTypeName="vector";class dA{constructor(e="",t=-1,n=[],s=Iy){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(mA(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(gi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=lA(l);l=qp(l,1,h),c=qp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new qr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,_,g){if(d.length!==0){const p=[],m=[];xg(d,p,m,_),p.length!==0&&g.push(new u(f,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let T=0;T!==f[_].morphTargets.length;++T){const x=f[_];p.push(x.time),m.push(x.morphTarget===g?1:0)}s.push(new qr(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(jr,d+".position",f,"pos",s),n(Yr,d+".quaternion",f,"rot",s),n(jr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function pA(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return vg;case"quaternion":return Yr;case"bool":case"boolean":return to;case"string":return no}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function mA(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pA(i.type);if(i.times===void 0){const t=[],n=[];xg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ss={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _A{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const gA=new _A;class xi{constructor(e){this.manager=e!==void 0?e:gA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xi.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class xA extends Error{constructor(e,t){super(e),this.response=t}}class $s extends xi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ss.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=wi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){T();function T(){u.read().then(({done:x,value:v})=>{if(x)m.close();else{g+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let P=0,E=h.length;P<E;P++){const C=h[P];C.onProgress&&C.onProgress(A)}m.enqueue(v),T()}},x=>{m.error(x)})}}});return new Response(p)}else throw new xA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{ss.add(e,c);const h=wi[e];delete wi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=wi[e];if(h===void 0)throw this.manager.itemError(e),c;delete wi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vA extends xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ss.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Yo("img");function l(){h(),ss.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class yA extends xi{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new vf,a=new $s(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:ri,o.wrapT=c.wrapT!==void 0?c.wrapT:ri,o.magFilter=c.magFilter!==void 0?c.magFilter:Ft,o.minFilter=c.minFilter!==void 0?c.minFilter:Ft,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=oi),c.mipmapCount===1&&(o.minFilter=Ft),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class ec extends xi{constructor(e){super(e)}load(e,t,n,s){const r=new Bt,o=new vA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Af extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ih=new Ne,Yp=new L,jp=new L;class Rf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class MA extends Rf{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class SA extends Af{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new MA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Kp=new Ne,po=new L,sh=new L;class TA extends Rf{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),n.position.copy(po),sh.copy(n.position),sh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sh),n.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),Kp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kp)}}class yu extends Af{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new TA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bA extends Rf{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yg extends Af{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new bA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Io{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class EA extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ss.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ss.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ss.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ss.add(e,l),r.manager.itemStart(e)}}let Za;class Mg{static getContext(){return Za===void 0&&(Za=new(window.AudioContext||window.webkitAudioContext)),Za}static setContext(e){Za=e}}class Sg extends xi{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new $s(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);Mg.getContext().decodeAudioData(c,function(u){t(u)}).catch(a)}catch(c){a(c)}},n,s);function a(l){s?s(l):console.error(l),r.manager.itemError(e)}}}class da{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$p(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$p();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $p(){return performance.now()}const Ls=new L,Zp=new zn,wA=new L,Ds=new L;class Tg extends ft{constructor(){super(),this.type="AudioListener",this.context=Mg.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new da}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ls,Zp,wA),Ds.set(0,0,-1).applyQuaternion(Zp),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ls.x,s),t.positionY.linearRampToValueAtTime(Ls.y,s),t.positionZ.linearRampToValueAtTime(Ls.z,s),t.forwardX.linearRampToValueAtTime(Ds.x,s),t.forwardY.linearRampToValueAtTime(Ds.y,s),t.forwardZ.linearRampToValueAtTime(Ds.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(Ls.x,Ls.y,Ls.z),t.setOrientation(Ds.x,Ds.y,Ds.z,n.x,n.y,n.z)}}class bg extends ft{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Cf="\\[\\]\\.:\\/",AA=new RegExp("["+Cf+"]","g"),Pf="[^"+Cf+"]",RA="[^"+Cf.replace("\\.","")+"]",CA=/((?:WC+[\/:])*)/.source.replace("WC",Pf),PA=/(WCOD+)?/.source.replace("WCOD",RA),LA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pf),DA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pf),IA=new RegExp("^"+CA+PA+LA+DA+"$"),NA=["material","materials","bones","map"];class UA{constructor(e,t,n){const s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AA,"")}static parseTrackName(e){const t=IA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);NA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=UA;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class OA{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ll,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const T=[];for(let x=0,v=m.length;x<v;x++){const A=m[x],P=new nh;P.curves=A.curves,T.push(P)}return T}function n(m,T){const x=T.length;let v=!1;for(let A=x-1,P=0;P<x;A=P++){let E=T[A],C=T[P],I=C.x-E.x,y=C.y-E.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(E=T[P],I=-I,C=T[A],y=-y),m.y<E.y||m.y>C.y)continue;if(m.y===E.y){if(m.x===E.x)return!0}else{const b=y*(m.x-E.x)-I*(m.y-E.y);if(b===0)return!0;if(b<0)continue;v=!v}}else{if(m.y!==E.y)continue;if(C.x<=m.x&&m.x<=E.x||E.x<=m.x&&m.x<=C.x)return!0}}return v}const s=wf.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new nh,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],_=0,g;f[_]=void 0,d[_]=[];for(let m=0,T=r.length;m<T;m++)a=r[m],g=a.getPoints(),o=s(g),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new nh,p:g},f[_].s.curves=a.curves,h&&_++,d[_]=[]):d[_].push({h:a,p:g[0]});if(!f[0])return t(r);if(f.length>1){let m=!1,T=0;for(let x=0,v=f.length;x<v;x++)u[x]=[];for(let x=0,v=f.length;x<v;x++){const A=d[x];for(let P=0;P<A.length;P++){const E=A[P];let C=!0;for(let I=0;I<f.length;I++)n(E.p,f[I].p)&&(x!==I&&T++,C?(C=!1,u[I].push(E)):m=!0);C&&u[x].push(E)}}T>0&&m===!1&&(d=u)}let p;for(let m=0,T=f.length;m<T;m++){l=f[m].s,c.push(l),p=d[m];for(let x=0,v=p.length;x<v;x++)l.holes.push(p[x].h)}return c}}class FA extends er{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);function Ci(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Eg(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kr={duration:.5,overwrite:!1,delay:0},Lf,Kt,mt,Fn=1e8,ut=1/Fn,Mu=Math.PI*2,BA=Mu/4,kA=0,wg=Math.sqrt,zA=Math.cos,HA=Math.sin,kt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Hi=function(e){return typeof e=="number"},Df=function(e){return typeof e>"u"},di=function(e){return typeof e=="object"},dn=function(e){return e!==!1},If=function(){return typeof window<"u"},Ja=function(e){return Mt(e)||kt(e)},Ag=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,Su=/(?:-?\.?\d|\.)+/gi,Rg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cg=/[+-]=-?[.\d]+/,Pg=/[^,'"\[\]\s]+/gi,VA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,ei,Tu,Nf,Pn={},Il={},Lg,Dg=function(e){return(Il=Zs(e,Pn))&&gn},Uf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Jo=function(e,t){return!t&&console.warn(e)},Ig=function(e,t){return e&&(Pn[e]=t)&&Il&&(Il[e]=t)||Pn},Qo=function(){return 0},GA={suppressEvents:!0,isStart:!0,kill:!1},fl={suppressEvents:!0,kill:!1},WA={suppressEvents:!0},Of={},fs=[],bu={},Ng,bn={},oh={},Qp=30,dl=[],Ff="",Bf=function(e){var t=e[0],n,s;if(di(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=dl.length;s--&&!dl[s].targetTest(t););n=dl[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new s0(e[s],n)))||e.splice(s,1);return e},Gs=function(e){return e._gsap||Bf(Bn(e))[0]._gsap},Ug=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():Df(n)&&e.getAttribute&&e.getAttribute(t)||n},pn=function(e,t){return(e=e.split(",")).forEach(t)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Nr=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},XA=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Nl=function(){var e=fs.length,t=fs.slice(0),n,s;for(bu={},fs.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Og=function(e,t,n,s){fs.length&&!Kt&&Nl(),e.render(t,n,Kt&&t<0&&(e._initted||e._startAt)),fs.length&&!Kt&&Nl()},Fg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Pg).length<2?t:kt(e)?e.trim():e},Bg=function(e){return e},Hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qA=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},Zs=function(e,t){for(var n in t)e[n]=t[n];return e},em=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=di(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ul=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},No=function(e){var t=e.parent||_t,n=e.keyframes?qA($t(e.keyframes)):Hn;if(dn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},YA=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},kg=function(e,t,n,s,r){var o=e[s],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},tc=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},_s=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ws=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},jA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Eu=function(e,t,n,s){return e._startAt&&(Kt?e._startAt.revert(fl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},KA=function i(e){return!e||e._ts&&i(e.parent)},tm=function(e){return e._repeat?$r(e._tTime,e=e.duration()+e._rDelay)*e:0},$r=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ol=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nc=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},ic=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nc(e),n._dirty||Ws(n,e)),e},zg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ol(e.rawTime(),t),(!t._dur||pa(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),Ws(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},ii=function(e,t,n,s){return t.parent&&_s(t),t._start=Ot((Hi(n)?n:n||e!==_t?In(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kg(e,t,"_first","_last",e._sort?"_start":0),wu(t)||(e._recent=t),s||zg(e,t),e._ts<0&&ic(e,e._tTime),e},Hg=function(e,t){return(Pn.ScrollTrigger||Uf("scrollTrigger",t))&&Pn.ScrollTrigger.create(t,e)},Vg=function(e,t,n,s,r){if(zf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ng!==En.frame)return fs.push(e),e._lazy=[r,s],1},$A=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},wu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ZA=function(e,t,n,s){var r=e.ratio,o=t<0||!t&&(!e._start&&$A(e)&&!(!e._initted&&wu(e))||(e._ts<0||e._dp._ts<0)&&!wu(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=pa(0,e._tDur,t),h=$r(l,a),e._yoyo&&h&1&&(o=1-o),h!==$r(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Kt||s||e._zTime===ut||!t&&e._zTime){if(!e._initted&&Vg(e,t,s,n,l))return;for(u=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Eu(e,t,n,!0),e._onUpdate&&!n&&An(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&An(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&_s(e,1),!n&&!Kt&&(An(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},JA=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Zr=function(e,t,n,s){var r=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Ot(o*(r+1)+e._rDelay*r):o,a>0&&!s&&ic(e,e._tTime=e._tDur*a),e.parent&&nc(e),n||Ws(e.parent,e),e},nm=function(e){return e instanceof rn?Ws(e):Zr(e,e._dur)},QA={_start:0,endTime:Qo,totalDuration:Qo},In=function i(e,t,n){var s=e.labels,r=e._recent||QA,o=e.duration()>=Fn?r.endTime(!1):e._dur,a,l,c;return kt(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*($t(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Uo=function(e,t,n){var s=Hi(t[1]),r=(s?2:1)+(e<2?0:1),o=t[r],a,l;if(s&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=dn(l.vars.inherit)&&l.parent;o.immediateRender=dn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new At(t[0],o,t[r+1])},Ms=function(e,t){return e||e===0?t(e):t},pa=function(e,t,n){return n<e?e:n>t?t:n},Yt=function(e,t){return!kt(e)||!(t=VA.exec(e))?"":t[1]},e1=function(e,t,n){return Ms(n,function(s){return pa(e,t,s)})},Au=[].slice,Gg=function(e,t){return e&&di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&di(e[0]))&&!e.nodeType&&e!==ei},t1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return kt(s)&&!t||Gg(s,1)?(r=n).push.apply(r,Bn(s)):n.push(s)})||n},Bn=function(e,t,n){return mt&&!t&&mt.selector?mt.selector(e):kt(e)&&!n&&(Tu||!Jr())?Au.call((t||Nf).querySelectorAll(e),0):$t(e)?t1(e,n):Gg(e)?Au.call(e,0):e?[e]:[]},Ru=function(e){return e=Bn(e)[0]||Jo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Bn(t,n.querySelectorAll?n:n===e?Jo("Invalid scope")||Nf.createElement("div"):e)}},Wg=function(e){return e.sort(function(){return .5-Math.random()})},Xg=function(e){if(Mt(e))return e;var t=di(e)?e:{each:e},n=Xs(t.ease),s=t.from||0,r=parseFloat(t.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=t.axis,h=s,u=s;return kt(s)?h=u={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(h=s[0],u=s[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,T,x,v,A,P,E,C,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,Fn])[1],!I){for(E=-Fn;E<(E=_[I++].getBoundingClientRect().left)&&I<g;);I<g&&I--}for(p=o[g]=[],m=l?Math.min(I,g)*h-.5:s%I,T=I===Fn?0:l?g*u/I-.5:s/I|0,E=0,C=Fn,P=0;P<g;P++)x=P%I-m,v=T-(P/I|0),p[P]=A=c?Math.abs(c==="y"?v:x):wg(x*x+v*v),A>E&&(E=A),A<C&&(C=A);s==="random"&&Wg(p),p.max=E-C,p.min=C,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(I>g?g-1:c?c==="y"?g/I:I:Math.max(I,g/I))||0)*(s==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Yt(t.amount||t.each)||0,n=n&&g<0?t0(n):n}return g=(p[f]-p.min)/p.max||0,Ot(p.b+(n?n(g):g)*p.v)+p.u}},Cu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Ot(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(Hi(n)?0:Yt(n))}},qg=function(e,t){var n=$t(e),s,r;return!n&&di(e)&&(s=n=e.radius||Fn,e.values?(e=Bn(e.values),(r=!Hi(e[0]))&&(s*=s)):e=Cu(e.increment)),Ms(t,n?Mt(e)?function(o){return r=e(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Fn,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!s||c<=s?e[h]:o,r||h===o||Hi(o)?h:h+Yt(o)}:Cu(e))},Yg=function(e,t,n,s){return Ms($t(e)?!t:n===!0?!!(n=0):!s,function(){return $t(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},n1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,o){return o(r)},s)}},i1=function(e,t){return function(n){return e(parseFloat(n))+(t||Yt(n))}},s1=function(e,t,n){return Kg(e,t,0,1,n)},jg=function(e,t,n){return Ms(n,function(s){return e[~~t(s)]})},r1=function i(e,t,n){var s=t-e;return $t(e)?jg(e,i(0,e.length),t):Ms(n,function(r){return(s+(r-e)%s)%s+e})},o1=function i(e,t,n){var s=t-e,r=s*2;return $t(e)?jg(e,i(0,e.length-1),t):Ms(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>s?r-o:o)})},ea=function(e){for(var t=0,n="",s,r,o,a;~(s=e.indexOf("random(",t));)o=e.indexOf(")",s),a=e.charAt(s+7)==="[",r=e.substr(s+7,o-s-7).match(a?Pg:Su),n+=e.substr(t,s-t)+Yg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Kg=function(e,t,n,s,r){var o=t-e,a=s-n;return Ms(r,function(l){return n+((l-e)/o*a||0)})},a1=function i(e,t,n,s){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=kt(e),a={},l,c,h,u,f;if(n===!0&&(s=1)&&(n=null),o)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(i(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=t}else s||(e=Zs($t(e)?[]:{},e));if(!h){for(l in t)kf.call(a,e,l,"get",t[l]);r=function(_){return Gf(_,a)||(o?e.p:e)}}}return Ms(n,r)},im=function(e,t,n){var s=e.labels,r=Fn,o,a,l;for(o in s)a=s[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},An=function(e,t,n){var s=e.vars,r=s[t],o=mt,a=e._ctx,l,c,h;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&fs.length&&Nl(),a&&(mt=a),h=l?r.apply(c,l):r.call(c),mt=o,h},yo=function(e){return _s(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&An(e,"onInterrupt"),e},Er,$g=[],Zg=function(e){if(e)if(e=!e.name&&e.default||e,If()||e.headless){var t=e.name,n=Mt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Qo,render:Gf,add:kf,kill:T1,modifier:S1,rawVars:0},o={targetTest:0,get:0,getSetter:Vf,aliases:{},register:0};if(Jr(),e!==s){if(bn[t])return;Hn(s,Hn(Ul(e,r),o)),Zs(s.prototype,Zs(r,Ul(e,o))),bn[s.prop=t]=s,e.targetTest&&(dl.push(s),Of[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ig(t,s),e.register&&e.register(gn,s,mn)}else $g.push(e)},lt=255,Mo={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},ah=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Jg=function(e,t,n){var s=e?Hi(e)?[e>>16,e>>8&lt,e&lt]:0:Mo.black,r,o,a,l,c,h,u,f,d,_;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mo[e])s=Mo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&lt,s&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(s=_=e.match(Su),!t)l=+s[0]%360/360,c=+s[1]/100,h=+s[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,s.length>3&&(s[3]*=1),s[0]=ah(l+1/3,r,o),s[1]=ah(l,r,o),s[2]=ah(l-1/3,r,o);else if(~e.indexOf("="))return s=e.match(Rg),n&&s.length<4&&(s[3]=1),s}else s=e.match(Su)||Mo.transparent;s=s.map(Number)}return t&&!_&&(r=s[0]/lt,o=s[1]/lt,a=s[2]/lt,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},Qg=function(e){var t=[],n=[],s=-1;return e.split(ds).forEach(function(r){var o=r.match(br)||[];t.push.apply(t,o),n.push(s+=o.length+1)}),t.c=n,t},sm=function(e,t,n){var s="",r=(e+s).match(ds),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=Jg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Qg(e),l=n.c,l.join(s)!==h.c.join(s)))for(c=e.replace(ds,"1").split(br),u=c.length-1;a<u;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(ds),u=c.length-1;a<u;a++)s+=c[a]+r[a];return s+c[u]},ds=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),l1=/hsl[a]?\(/,e0=function(e){var t=e.join(" "),n;if(ds.lastIndex=0,ds.test(t))return n=l1.test(t),e[1]=sm(e[1],n),e[0]=sm(e[0],n,Qg(e[1])),!0},ta,En=function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,_=function g(p){var m=i()-s,T=p===!0,x,v,A,P;if((m>e||m<0)&&(n+=m-t),s+=m,A=s-n,x=A-o,(x>0||T)&&(P=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,o+=x+(x>=r?4:r-x),v=1),T||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](A,f,P,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Lg&&(!Tu&&If()&&(ei=Tu=window,Nf=ei.document||{},Pn.gsap=gn,(ei.gsapVersions||(ei.gsapVersions=[])).push(gn.version),Dg(Il||ei.GreenSockGlobals||!ei.gsap&&ei||{}),$g.forEach(Zg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},ta=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ta=0,c=Qo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=u.time*1e3+r},add:function(p,m,T){var x=m?function(v,A,P,E){p(v,A,P,E),u.remove(x)}:p;return u.remove(p),a[T?"unshift":"push"](x),Jr(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u}(),Jr=function(){return!ta&&En.wake()},Ke={},c1=/^[\d.\-M][\d.\-,\s]/,h1=/["']/g,u1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[s]=isNaN(c)?c.replace(h1,"").trim():+c,s=l.substr(a+1).trim();return t},f1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},d1=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[u1(t[1])]:f1(e).split(",").map(Fg)):Ke._CE&&c1.test(e)?Ke._CE("",e):n},t0=function(e){return function(t){return 1-e(1-t)}},n0=function i(e,t){for(var n=e._first,s;n;)n instanceof rn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},Xs=function(e,t){return e&&(Mt(e)?e:Ke[e]||d1(e))||t},tr=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},o;return pn(e,function(a){Ke[a]=Pn[a]=r,Ke[o=a.toLowerCase()]=n;for(var l in r)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=r[l]}),r},i0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lh=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Mu*(Math.asin(1/s)||0),a=function(h){return h===1?1:s*Math.pow(2,-10*h)*HA((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:i0(a);return r=Mu/r,l.config=function(c,h){return i(e,c,h)},l},ch=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:i0(n);return s.config=function(r){return i(e,r)},s};pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;tr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;tr("Elastic",lh("in"),lh("out"),lh());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<s?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};tr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);tr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});tr("Circ",function(i){return-(wg(1-i*i)-1)});tr("Sine",function(i){return i===1?1:-zA(i*BA)+1});tr("Back",ch("in"),ch("out"),ch());Ke.SteppedEase=Ke.steps=Pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,o=1-ut;return function(a){return((s*pa(0,o,a)|0)+r)*n}}};Kr.ease=Ke["quad.out"];pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Ff+=i+","+i+"Params,"});var s0=function(e,t){this.id=kA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ug,this.set=t?t.getSetter:Vf},na=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zr(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),ta||En.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(Jr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ic(this,n),!r._dp||r.parent||zg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Og(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tm(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tm(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?$r(this._tTime,r)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ol(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(pa(-Math.abs(this._delay),this._tDur,r),s!==!1),nc(this),jA(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ii(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ol(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=WA);var s=Kt;return Kt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,nm(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(In(this,n),dn(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,dn(s))},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-ut)},e.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},e.then=function(n){var s=this;return new Promise(function(r){var o=Mt(n)?n:Bg,a=function(){var c=s.then;s.then=null,Mt(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=c),r(o),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},e.kill=function(){yo(this)},i}();Hn(na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var rn=function(i){Eg(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=dn(n.sortChildren),_t&&ii(n.parent||_t,Ci(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Hg(Ci(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,o){return Uo(0,arguments,this),this},t.from=function(s,r,o){return Uo(1,arguments,this),this},t.fromTo=function(s,r,o,a){return Uo(2,arguments,this),this},t.set=function(s,r,o){return r.duration=0,r.parent=this,No(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new At(s,r,In(this,o),1),this},t.call=function(s,r,o){return ii(this,At.delayedCall(0,s,r),o)},t.staggerTo=function(s,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new At(s,o,In(this,l)),this},t.staggerFrom=function(s,r,o,a,l,c,h){return o.runBackwards=1,No(o).immediateRender=dn(o.immediateRender),this.staggerTo(s,r,o,a,l,c,h)},t.staggerFromTo=function(s,r,o,a,l,c,h,u){return a.startAt=o,No(a).immediateRender=dn(a.immediateRender),this.staggerTo(s,r,a,l,c,h,u)},t.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=s<=0?0:Ot(s),u=this._zTime<0!=s<0&&(this._initted||!c),f,d,_,g,p,m,T,x,v,A,P,E;if(this!==_t&&h>l&&s>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,s+=this._time-a),f=h,v=this._start,x=this._ts,m=!x,u&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,p=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(p*100+s,r,o);if(f=Ot(h%p),h===l?(g=this._repeat,f=c):(g=~~(h/p),g&&g===h/p&&(f=c,g--),f>c&&(f=c)),A=$r(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),P&&g&1&&(f=c-f,E=1),g!==A&&!this._lock){var C=P&&A&1,I=C===(P&&g&1);if(g<A&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Ot(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&An(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;n0(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=JA(this,Ot(a),Ot(f)),T&&(h-=f-(f=T._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&f&&!r&&!g&&(An(this,"onStart"),this._tTime!==h))return this;if(f>=a&&s>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(s,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!m){T=0,_&&(h+=this._zTime=-ut);break}}d=_}else{d=this._last;for(var y=s<0?s:f;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(s,r,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,o||Kt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){T=0,_&&(h+=this._zTime=y?-ut:ut);break}}d=_}}if(T&&!r&&(this.pause(),T.render(f>=a?0:-ut)._zTime=f>=a?1:-1,this._ts))return this._start=v,nc(this),this.render(s,r,o);this._onUpdate&&!r&&An(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&_s(this,1),!r&&!(s<0&&!a)&&(h||a||!l)&&(An(this,h===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var o=this;if(Hi(r)||(r=In(this,r,s)),!(s instanceof na)){if($t(s))return s.forEach(function(a){return o.add(a,r)}),this;if(kt(s))return this.addLabel(s,r);if(Mt(s))s=At.delayedCall(0,s);else return this}return this!==s?ii(this,s,r):this},t.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof At?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},t.remove=function(s){return kt(s)?this.removeLabel(s):Mt(s)?this.killTweensOf(s):(tc(this,s),s===this._recent&&(this._recent=this._last),Ws(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(En.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=In(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,o){var a=At.delayedCall(0,r||Qo,o);return a.data="isPause",this._hasPause=1,ii(this,a,In(this,s))},t.removePause=function(s){var r=this._first;for(s=In(this,s);r;)r._start===s&&r.data==="isPause"&&_s(r),r=r._next},t.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)rs!==a[l]&&a[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var o=[],a=Bn(s),l=this._first,c=Hi(r),h;l;)l instanceof At?XA(l._targets,a)&&(c?(!rs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(s,r){r=r||{};var o=this,a=In(o,s),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=At.to(o,Hn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ut,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Zr(_,p,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(s,r,o){return this.tweenTo(r,Hn({startAt:{time:In(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),im(this,In(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),im(this,In(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(s,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return Ws(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ws(this)},t.totalDuration=function(s){var r=0,o=this,a=o._last,l=Fn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ii(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Zr(o,o===_t&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(_t._ts&&(Og(_t,Ol(s,_t)),Ng=En.frame),En.frame>=Qp){Qp+=Rn.autoSleep||120;var r=_t._first;if((!r||!r._ts)&&Rn.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},e}(na);Hn(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var p1=function(e,t,n,s,r,o,a){var l=new mn(this._pt,e,t,0,1,h0,null,r),c=0,h=0,u,f,d,_,g,p,m,T;for(l.b=n,l.e=s,n+="",s+="",(m=~s.indexOf("random("))&&(s=ea(s)),o&&(T=[n,s],o(T,e,t),n=T[0],s=T[1]),f=n.match(rh)||[];u=rh.exec(s);)_=u[0],g=s.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Nr(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=rh.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(Cg.test(s)||m)&&(l.e=0),this._pt=l,l},kf=function(e,t,n,s,r,o,a,l,c,h){Mt(s)&&(s=s(r||0,e,o));var u=e[t],f=n!=="get"?n:Mt(u)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Mt(u)?c?v1:l0:Hf,_;if(kt(s)&&(~s.indexOf("random(")&&(s=ea(s)),s.charAt(1)==="="&&(_=Nr(f,s)+(Yt(f)||0),(_||_===0)&&(s=_))),!h||f!==s||Pu)return!isNaN(f*s)&&s!==""?(_=new mn(this._pt,e,t,+f||0,s-(f||0),typeof u=="boolean"?M1:c0,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&Uf(t,s),p1.call(this,e,t,f,s,d,l||Rn.stringFilter,c))},m1=function(e,t,n,s,r){if(Mt(e)&&(e=Oo(e,r,t,n,s)),!di(e)||e.style&&e.nodeType||$t(e)||Ag(e))return kt(e)?Oo(e,r,t,n,s):e;var o={},a;for(a in e)o[a]=Oo(e[a],r,t,n,s);return o},r0=function(e,t,n,s,r,o){var a,l,c,h;if(bn[e]&&(a=new bn[e]).init(r,a.rawVars?t[e]:m1(t[e],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new mn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Er))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},rs,Pu,zf=function i(e,t,n){var s=e.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,h=s.runBackwards,u=s.yoyoEase,f=s.keyframes,d=s.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,T=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Lf,v=e.timeline,A,P,E,C,I,y,b,z,F,V,Z,U,Y;if(v&&(!f||!r)&&(r="none"),e._ease=Xs(r,Kr.ease),e._yEase=u?t0(Xs(u===!0?r:u,Kr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!s.runBackwards,!v||f&&!s.stagger){if(z=p[0]?Gs(p[0]).harness:0,U=z&&s[z.prop],A=Ul(s,Of),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?fl:GA),g._lazy=0),o){if(_s(e._startAt=At.set(p,Hn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&dn(l),startAt:null,delay:0,onUpdate:c&&function(){return An(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!a&&!d)&&e._startAt.revert(fl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),E=Hn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&dn(l),immediateRender:a,stagger:0,parent:m},A),U&&(E[z.prop]=U),_s(e._startAt=At.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(fl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&dn(l)||l&&!_,P=0;P<p.length;P++){if(I=p[P],b=I._gsap||Bf(p)[P]._gsap,e._ptLookup[P]=V={},bu[b.id]&&fs.length&&Nl(),Z=T===p?P:T.indexOf(I),z&&(F=new z).init(I,U||A,e,Z,T)!==!1&&(e._pt=C=new mn(e._pt,I,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(G){V[G]=C}),F.priority&&(y=1)),!z||U)for(E in A)bn[E]&&(F=r0(E,A,e,Z,I,T))?F.priority&&(y=1):V[E]=C=kf.call(e,I,E,"get",A[E],Z,T,0,s.stringFilter);e._op&&e._op[P]&&e.kill(I,e._op[P]),x&&e._pt&&(rs=e,_t.killTweensOf(I,V,e.globalTime(t)),Y=!e.parent,rs=0),e._pt&&l&&(bu[b.id]=1)}y&&u0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&v.render(Fn,!0,!0)},_1=function(e,t,n,s,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Pu=1,e.vars[t]="+=0",zf(e,a),Pu=0,l?Jo(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(s||s===0)&&!r?s:h.s+(s||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=bt(n)+Yt(u.e)),u.b&&(u.b=h.s+Yt(u.b))},g1=function(e,t){var n=e[0]?Gs(e[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return t;r=Zs({},t);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},x1=function(e,t,n,s){var r=t.ease||s||"power1.inOut",o,a;if($t(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Oo=function(e,t,n,s,r){return Mt(e)?e.call(t,n,s,r):kt(e)&&~e.indexOf("random(")?ea(e):e},o0=Ff+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",a0={};pn(o0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return a0[i]=1});var At=function(i){Eg(e,i);function e(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:No(s))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,T=s.parent||_t,x=($t(n)||Ag(n)?Hi(n[0]):"length"in s)?[n]:Bn(n),v,A,P,E,C,I,y,b;if(a._targets=x.length?Bf(x):Jo("GSAP target "+n+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Ja(c)||Ja(h)){if(s=a.vars,v=a.timeline=new rn({data:"nested",defaults:g||{},targets:T&&T.data==="nested"?T.vars.targets:x}),v.kill(),v.parent=v._dp=Ci(a),v._start=0,f||Ja(c)||Ja(h)){if(E=x.length,y=f&&Xg(f),di(f))for(C in f)~o0.indexOf(C)&&(b||(b={}),b[C]=f[C]);for(A=0;A<E;A++)P=Ul(s,a0),P.stagger=0,m&&(P.yoyoEase=m),b&&Zs(P,b),I=x[A],P.duration=+Oo(c,Ci(a),A,I,x),P.delay=(+Oo(h,Ci(a),A,I,x)||0)-a._delay,!f&&E===1&&P.delay&&(a._delay=h=P.delay,a._start+=h,P.delay=0),v.to(I,P,y?y(A,I,x):0),v._ease=Ke.none;v.duration()?c=h=0:a.timeline=0}else if(_){No(Hn(v.vars.defaults,{ease:"none"})),v._ease=Xs(_.ease||s.ease||"none");var z=0,F,V,Z;if($t(_))_.forEach(function(U){return v.to(x,U,">")}),v.duration();else{P={};for(C in _)C==="ease"||C==="easeEach"||x1(C,_[C],P,_.easeEach);for(C in P)for(F=P[C].sort(function(U,Y){return U.t-Y.t}),z=0,A=0;A<F.length;A++)V=F[A],Z={ease:V.e,duration:(V.t-(A?F[A-1].t:0))/100*c},Z[C]=V.v,v.to(x,Z,z),z+=Z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Lf&&(rs=Ci(a),_t.killTweensOf(x),rs=0),ii(T,Ci(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(u||!c&&!_&&a._start===Ot(T._time)&&dn(u)&&KA(Ci(a))&&T.data!=="nested")&&(a._tTime=-ut,a.render(Math.max(0,-h)||0)),p&&Hg(Ci(a),p),a}var t=e.prototype;return t.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,h=s<0,u=s>l-ut&&!h?l:s<ut?0:s,f,d,_,g,p,m,T,x,v;if(!c)ZA(this,s,r,o);else if(u!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+s,r,o);if(f=Ot(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===Ot(u/g)&&(f=c,_--),f>c&&(f=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,f=c-f),p=$r(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(x&&this._yEase&&n0(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Ot(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Vg(this,h?s:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(f/c),this._from&&(this.ratio=T=1-T),f&&!a&&!r&&!_&&(An(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;x&&x.render(s<0?s:x._dur*x._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(h&&Eu(this,s,r,o),An(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&An(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Eu(this,s,!0,!0),(s||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&_s(this,1),!r&&!(h&&!a)&&(u||a||m)&&(An(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,o,a,l){ta||En.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||zf(this,c),h=this._ease(c/this._dur),_1(this,s,r,o,a,h,c,l)?this.resetTo(s,r,o,a,1):(ic(this,0),this.parent||kg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?yo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,rs&&rs.vars.overwrite!==!0)._first||yo(this),this.parent&&o!==this.timeline.totalDuration()&&Zr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?Bn(s):a,c=this._ptLookup,h=this._pt,u,f,d,_,g,p,m;if((!r||r==="all")&&YA(a,l))return r==="all"&&(this._pt=0),yo(this);for(u=this._op=this._op||[],r!=="all"&&(kt(r)&&(g={},pn(r,function(T){return g[T]=1}),r=g),r=g1(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(u[m]=r,_=f,d={}):(d=u[m]=u[m]||{},_=r);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&tc(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&yo(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return Uo(1,arguments)},e.delayedCall=function(s,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,r,o){return Uo(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,o){return _t.killTweensOf(s,r,o)},e}(na);Hn(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pn("staggerTo,staggerFrom,staggerFromTo",function(i){At[i]=function(){var e=new rn,t=Au.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Hf=function(e,t,n){return e[t]=n},l0=function(e,t,n){return e[t](n)},v1=function(e,t,n,s){return e[t](s.fp,n)},y1=function(e,t,n){return e.setAttribute(t,n)},Vf=function(e,t){return Mt(e[t])?l0:Df(e[t])&&e.setAttribute?y1:Hf},c0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},M1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},h0=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Gf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},S1=function(e,t,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(e,t,n),r=o},T1=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?tc(this,t,"_pt"):t.dep||(n=1),t=s;return!n},b1=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},u0=function(e){for(var t=e._pt,n,s,r,o;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:o=t,t=n}e._pt=r},mn=function(){function i(t,n,s,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||c0,this.d=l||this,this.set=c||Hf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=b1,this.m=n,this.mt=r,this.tween=s},i}();pn(Ff+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Of[i]=1});Pn.TweenMax=Pn.TweenLite=At;Pn.TimelineLite=Pn.TimelineMax=rn;_t=new rn({sortChildren:!1,defaults:Kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=e0;var qs=[],pl={},E1=[],rm=0,w1=0,hh=function(e){return(pl[e]||E1).map(function(t){return t()})},Lu=function(){var e=Date.now(),t=[];e-rm>2&&(hh("matchMediaInit"),qs.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=ei.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),hh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),rm=e,hh("matchMedia"))},f0=function(){function i(t,n){this.selector=n&&Ru(n),this.data=[],this._r=[],this.isReverted=!1,this.id=w1++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){Mt(n)&&(r=s,s=n,n=Mt);var o=this,a=function(){var c=mt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ru(r)),mt=o,u=s.apply(o,arguments),Mt(u)&&o._r.push(u),mt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Mt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var s=mt;mt=null,n(this),mt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof At&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof At)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=qs.length;o--;)qs[o].id===this.id&&qs.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),A1=function(){function i(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=i.prototype;return e.add=function(n,s,r){di(n)||(n={matches:n});var o=new f0(0,r||this.scope),a=o.conditions={},l,c,h;mt&&!o.selector&&(o.selector=mt.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?h=1:(l=ei.matchMedia(n[c]),l&&(qs.indexOf(o)<0&&qs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Lu):l.addEventListener("change",Lu)));return h&&s(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),Fl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Zg(s)})},timeline:function(e){return new rn(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,n,s){kt(e)&&(e=Bn(e)[0]);var r=Gs(e||{}).get,o=n?Bg:Fg;return n==="native"&&(n=""),e&&(t?o((bn[t]&&bn[t].get||r)(e,t,n,s)):function(a,l,c){return o((bn[a]&&bn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Bn(e),e.length>1){var s=e.map(function(h){return gn.quickSetter(h,t,n)}),r=s.length;return function(h){for(var u=r;u--;)s[u](h)}}e=e[0]||{};var o=bn[t],a=Gs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Er._pt=0,u.init(e,n?h+n:h,Er,0,[e]),u.render(1,u),Er._pt&&Gf(1,Er)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var s,r=gn.to(e,Zs((s={},s[t]="+=0.1",s.paused=!0,s),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xs(e.ease,Kr.ease)),em(Kr,e||{})},config:function(e){return em(Rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!bn[a]&&!Pn[a]&&Jo(t+" effect requires "+a+" plugin.")}),oh[t]=function(a,l,c){return n(Bn(a),Hn(l||{},r),c)},o&&(rn.prototype[t]=function(a,l,c){return this.add(oh[t](a,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=Xs(t)},parseEase:function(e,t){return arguments.length?Xs(e,t):Ke},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new rn(e),s,r;for(n.smoothChildTiming=dn(e.smoothChildTiming),_t.remove(n),n._dp=0,n._time=n._tTime=_t._time,s=_t._first;s;)r=s._next,(t||!(!s._dur&&s instanceof At&&s.vars.onComplete===s._targets[0]))&&ii(n,s,s._start-s._delay),s=r;return ii(_t,n,0),n},context:function(e,t){return e?new f0(e,t):mt},matchMedia:function(e){return new A1(e)},matchMediaRefresh:function(){return qs.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Lu()},addEventListener:function(e,t){var n=pl[e]||(pl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=pl[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:r1,wrapYoyo:o1,distribute:Xg,random:Yg,snap:qg,normalize:s1,getUnit:Yt,clamp:e1,splitColor:Jg,toArray:Bn,selector:Ru,mapRange:Kg,pipe:n1,unitize:i1,interpolate:a1,shuffle:Wg},install:Dg,effects:oh,ticker:En,updateRoot:rn.updateRoot,plugins:bn,globalTimeline:_t,core:{PropTween:mn,globals:Ig,Tween:At,Timeline:rn,Animation:na,getCache:Gs,_removeLinkedListItem:tc,reverting:function(){return Kt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return Lf=e}}};pn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Fl[i]=At[i]});En.add(rn.updateRoot);Er=Fl.to({},{duration:0});var R1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},C1=function(e,t){var n=e._targets,s,r,o;for(s in t)for(r=n.length;r--;)o=e._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=R1(o,s)),o&&o.modifier&&o.modifier(t[s],e,n[r],s))},uh=function(e,t){return{name:e,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(kt(r)&&(l={},pn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}C1(a,r)}}}},gn=Fl.registerPlugin({name:"attr",init:function(e,t,n,s,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},uh("roundProps",Cu),uh("modifiers"),uh("snap",qg))||Fl;At.version=rn.version=gn.version="3.12.5";Lg=1;If()&&Jr();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var om,os,Ur,Wf,Hs,am,Xf,P1=function(){return typeof window<"u"},Vi={},Bs=180/Math.PI,Or=Math.PI/180,vr=Math.atan2,lm=1e8,qf=/([A-Z])/g,L1=/(left|right|width|margin|padding|x)/i,D1=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},N1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},U1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},d0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},p0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},O1=function(e,t,n){return e.style[t]=n},F1=function(e,t,n){return e.style.setProperty(t,n)},B1=function(e,t,n){return e._gsap[t]=n},k1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},z1=function(e,t,n,s,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},H1=function(e,t,n,s,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},vt="transform",_n=vt+"Origin",V1=function i(e,t){var n=this,s=this.target,r=s.style,o=s._gsap;if(e in Vi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Di(s,a)}):this.tfm[e]=o.x?o[e]:Di(s,e),e===_n&&(this.tfm.zOrigin=o.zOrigin);else return ai.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(vt)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(_n,t,"")),e=vt}(r||t)&&this.props.push(e,t,r[e])},m0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},G1=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(qf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Xf(),(!r||!r.isStart)&&!n[vt]&&(m0(n),s.zOrigin&&n[_n]&&(n[_n]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},_0=function(e,t){var n={target:e,props:[],revert:G1,save:V1};return e._gsap||gn.core.getCache(e),t&&t.split(",").forEach(function(s){return n.save(s)}),n},g0,Iu=function(e,t){var n=os.createElementNS?os.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):os.createElement(e);return n&&n.style?n:os.createElement(e)},hi=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(qf,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,Qr(t)||t,1)||""},cm="O,Moz,ms,Ms,Webkit".split(","),Qr=function(e,t,n){var s=t||Hs,r=s.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(cm[o]+e in r););return o<0?null:(o===3?"ms":o>=0?cm[o]:"")+e},Nu=function(){P1()&&window.document&&(om=window,os=om.document,Ur=os.documentElement,Hs=Iu("div")||{style:{}},Iu("div"),vt=Qr(vt),_n=vt+"Origin",Hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",g0=!!Qr("perspective"),Xf=gn.core.reverting,Wf=1)},fh=function i(e){var t=Iu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,s=this.nextSibling,r=this.style.cssText,o;if(Ur.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(s?n.insertBefore(this,s):n.appendChild(this)),Ur.removeChild(t),this.style.cssText=r,o},hm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},x0=function(e){var t;try{t=e.getBBox()}catch{t=fh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===fh||(t=fh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+hm(e,["x","cx","x1"])||0,y:+hm(e,["y","cy","y1"])||0,width:0,height:0}:t},v0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&x0(e))},Js=function(e,t){if(t){var n=e.style,s;t in Vi&&t!==_n&&(t=vt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(qf,"-$1").toLowerCase())):n.removeAttribute(t)}},as=function(e,t,n,s,r,o){var a=new mn(e._pt,t,n,0,1,o?p0:d0);return e._pt=a,a.b=s,a.e=r,e._props.push(n),a},um={deg:1,rad:1,turn:1},W1={grid:1,flex:1},gs=function i(e,t,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Hs.style,l=L1.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=s==="px",d=s==="%",_,g,p,m;if(s===o||!r||um[s]||um[o])return r;if(o!=="px"&&!f&&(r=i(e,t,n,"px")),m=e.getCTM&&v0(e),(d||o==="%")&&(Vi[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[h],bt(d?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(f?o:s),g=~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===os||!g.appendChild)&&(g=os.body),p=g._gsap,p&&d&&p.width&&l&&p.time===En.time&&!p.uncache)return bt(r/p.width*u);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=u+s,_=e[h],T?e.style[t]=T:Js(e,t)}else(d||o==="%")&&!W1[hi(g,"display")]&&(a.position=hi(e,"position")),g===e&&(a.position="static"),g.appendChild(Hs),_=Hs[h],g.removeChild(Hs),a.position="absolute";return l&&d&&(p=Gs(g),p.time=En.time,p.width=g[h]),bt(f?_*r/u:_&&r?u/_*r:0)},Di=function(e,t,n,s){var r;return Wf||Nu(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vi[t]&&t!=="transform"?(r=sa(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:kl(hi(e,_n))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Bl[t]&&Bl[t](e,t,n)||hi(e,t)||Ug(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?gs(e,t,r,n)+n:r},X1=function(e,t,n,s){if(!n||n==="none"){var r=Qr(t,e,1),o=r&&hi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var a=new mn(this._pt,e.style,t,0,1,h0),l=0,c=0,h,u,f,d,_,g,p,m,T,x,v,A;if(a.b=n,a.e=s,n+="",s+="",s==="auto"&&(g=e.style[t],e.style[t]=s,s=hi(e,t)||s,g?e.style[t]=g:Js(e,t)),h=[n,s],e0(h),n=h[0],s=h[1],f=n.match(br)||[],A=s.match(br)||[],A.length){for(;u=br.exec(s);)p=u[0],T=s.substring(l,u.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),p.charAt(1)==="="&&(p=Nr(d,p)+v),m=parseFloat(p),x=p.substr((m+"").length),l=br.lastIndex-x.length,x||(x=x||Rn.units[t]||v,l===s.length&&(s+=x,a.e+=x)),v!==x&&(d=gs(e,t,g,x)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=t==="display"&&s==="none"?p0:d0;return Cg.test(s)&&(a.e=0),this._pt=a,a},fm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},q1=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=fm[n]||n,t[1]=fm[s]||s,t.join(" ")},Y1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Vi[a]&&(l=1,a=a==="transformOrigin"?_n:vt),Js(n,a);l&&(Js(n,vt),o&&(o.svg&&n.removeAttribute("transform"),sa(n,1),o.uncache=1,m0(s)))}},Bl={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var o=e._pt=new mn(e._pt,t,n,0,0,Y1);return o.u=s,o.pr=-10,o.tween=r,e._props.push(n),1}}},ia=[1,0,0,1,0,0],y0={},M0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dm=function(e){var t=hi(e,vt);return M0(t)?ia:t.substr(7).match(Rg).map(bt)},Yf=function(e,t){var n=e._gsap||Gs(e),s=e.style,r=dm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ia:r):(r===ia&&!e.offsetParent&&e!==Ur&&!n.svg&&(l=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Ur.appendChild(e)),r=dm(e),l?s.display=l:Js(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ur.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Uu=function(e,t,n,s,r,o){var a=e._gsap,l=r||Yf(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],T=l[5],x=t.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,P,E,C,I;n?l!==ia&&(E=d*p-_*g)&&(C=v*(p/E)+A*(-g/E)+(g*T-p*m)/E,I=v*(-_/E)+A*(d/E)-(d*T-_*m)/E,v=C,A=I):(P=x0(e),v=P.x+(~x[0].indexOf("%")?v/100*P.width:v),A=P.y+(~(x[1]||x[0]).indexOf("%")?A/100*P.height:A)),s||s!==!1&&a.smooth?(m=v-c,T=A-h,a.xOffset=u+(m*d+T*g)-m,a.yOffset=f+(m*_+T*p)-T):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!n,e.style[_n]="0px 0px",o&&(as(o,a,"xOrigin",c,v),as(o,a,"yOrigin",h,A),as(o,a,"xOffset",u,a.xOffset),as(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},sa=function(e,t){var n=e._gsap||new s0(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=hi(e,_n)||"0",h,u,f,d,_,g,p,m,T,x,v,A,P,E,C,I,y,b,z,F,V,Z,U,Y,G,ue,ce,pe,Ee,Be,J,ae;return h=u=f=g=p=m=T=x=v=0,d=_=1,n.svg=!!(e.getCTM&&v0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),s.scale=s.rotate=s.translate="none"),E=Yf(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Uu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,P=n.yOrigin||0,E!==ia&&(b=E[0],z=E[1],F=E[2],V=E[3],h=Z=E[4],u=U=E[5],E.length===6?(d=Math.sqrt(b*b+z*z),_=Math.sqrt(V*V+F*F),g=b||z?vr(z,b)*Bs:0,T=F||V?vr(F,V)*Bs+g:0,T&&(_*=Math.abs(Math.cos(T*Or))),n.svg&&(h-=A-(A*b+P*F),u-=P-(A*z+P*V))):(ae=E[6],Be=E[7],ce=E[8],pe=E[9],Ee=E[10],J=E[11],h=E[12],u=E[13],f=E[14],C=vr(ae,Ee),p=C*Bs,C&&(I=Math.cos(-C),y=Math.sin(-C),Y=Z*I+ce*y,G=U*I+pe*y,ue=ae*I+Ee*y,ce=Z*-y+ce*I,pe=U*-y+pe*I,Ee=ae*-y+Ee*I,J=Be*-y+J*I,Z=Y,U=G,ae=ue),C=vr(-F,Ee),m=C*Bs,C&&(I=Math.cos(-C),y=Math.sin(-C),Y=b*I-ce*y,G=z*I-pe*y,ue=F*I-Ee*y,J=V*y+J*I,b=Y,z=G,F=ue),C=vr(z,b),g=C*Bs,C&&(I=Math.cos(C),y=Math.sin(C),Y=b*I+z*y,G=Z*I+U*y,z=z*I-b*y,U=U*I-Z*y,b=Y,Z=G),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=bt(Math.sqrt(b*b+z*z+F*F)),_=bt(Math.sqrt(U*U+ae*ae)),C=vr(Z,U),T=Math.abs(C)>2e-4?C*Bs:0,v=J?1/(J<0?-J:J):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!M0(hi(e,vt)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(r?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=bt(d),n.scaleY=bt(_),n.rotation=bt(g)+a,n.rotationX=bt(p)+a,n.rotationY=bt(m)+a,n.skewX=T+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(s[_n]=kl(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?K1:g0?S0:j1,n.uncache=0,n},kl=function(e){return(e=e.split(" "))[0]+" "+e[1]},dh=function(e,t,n){var s=Yt(t);return bt(parseFloat(t)+parseFloat(gs(e,"x",n+"px",s)))+s},j1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,S0(e,t)},Is="0deg",mo="0px",Ns=") ",S0=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,T=n.target,x=n.zOrigin,v="",A=m==="auto"&&e&&e!==1||m===!0;if(x&&(u!==Is||h!==Is)){var P=parseFloat(h)*Or,E=Math.sin(P),C=Math.cos(P),I;P=parseFloat(u)*Or,I=Math.cos(P),o=dh(T,o,E*I*-x),a=dh(T,a,-Math.sin(P)*-x),l=dh(T,l,C*I*-x+x)}p!==mo&&(v+="perspective("+p+Ns),(s||r)&&(v+="translate("+s+"%, "+r+"%) "),(A||o!==mo||a!==mo||l!==mo)&&(v+=l!==mo||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ns),c!==Is&&(v+="rotate("+c+Ns),h!==Is&&(v+="rotateY("+h+Ns),u!==Is&&(v+="rotateX("+u+Ns),(f!==Is||d!==Is)&&(v+="skew("+f+", "+d+Ns),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ns),T.style[vt]=v||"translate(0, 0)"},K1=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,T=n.forceCSS,x=parseFloat(o),v=parseFloat(a),A,P,E,C,I;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Or,c*=Or,A=Math.cos(l)*u,P=Math.sin(l)*u,E=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=Or,I=Math.tan(c-h),I=Math.sqrt(1+I*I),E*=I,C*=I,h&&(I=Math.tan(h),I=Math.sqrt(1+I*I),A*=I,P*=I)),A=bt(A),P=bt(P),E=bt(E),C=bt(C)):(A=u,C=f,P=E=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=gs(d,"x",o,"px"),v=gs(d,"y",a,"px")),(_||g||p||m)&&(x=bt(x+_-(_*A+g*E)+p),v=bt(v+g-(_*P+g*C)+m)),(s||r)&&(I=d.getBBox(),x=bt(x+s/100*I.width),v=bt(v+r/100*I.height)),I="matrix("+A+","+P+","+E+","+C+","+x+","+v+")",d.setAttribute("transform",I),T&&(d.style[vt]=I)},$1=function(e,t,n,s,r){var o=360,a=kt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Bs:1),c=l-s,h=s+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*lm)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*lm)%o-~~(c/o)*o)),e._pt=f=new mn(e._pt,t,n,s,c,I1),f.e=h,f.u="deg",e._props.push(n),f},pm=function(e,t){for(var n in t)e[n]=t[n];return e},Z1=function(e,t,n){var s=pm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,_;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[vt]=t,a=sa(n,1),Js(n,vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[vt],o[vt]=t,a=sa(n,1),o[vt]=c);for(l in Vi)c=s[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=Yt(c),_=Yt(h),u=d!==_?gs(n,l,c,_):parseFloat(c),f=parseFloat(h),e._pt=new mn(e._pt,a,l,u,f-u,Du),e._pt.u=_||0,e._props.push(l));pm(a,s)};pn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",o=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(a){return e<2?i+a:"border"+a+i});Bl[e>1?"border"+i:i]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(_){return Di(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,u)}});var T0={name:"css",register:Nu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,_,g,p,m,T,x,v,A,P,E,C;Wf||Nu(),this.styles=this.styles||_0(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(bn[g]&&r0(g,t,n,s,e,r)))){if(d=typeof h,_=Bl[g],d==="function"&&(h=h.call(n,s,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ea(h)),_)_(this,e,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",ds.lastIndex=0,ds.test(c)||(p=Yt(c),m=Yt(h)),m?p!==m&&(c=gs(e,g,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,s,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,s,e,r):l[g],kt(c)&&~c.indexOf("random(")&&(c=ea(c)),Yt(c+"")||c==="auto"||(c+=Rn.units[g]||Yt(Di(e,g))||""),(c+"").charAt(1)==="="&&(c=Di(e,g))):c=Di(e,g),f=parseFloat(c),T=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),T&&(h=h.substr(2)),u=parseFloat(h),g in ai&&(g==="autoAlpha"&&(f===1&&Di(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,a.visibility),as(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ai[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Vi,x){if(this.styles.save(g),v||(A=e._gsap,A.renderTransform&&!t.parseTransform||sa(e,t.parseTransform),P=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new mn(this._pt,a,vt,0,1,A.renderTransform,A,0,-1),v.dep=1),g==="scale")this._pt=new mn(this._pt,A,"scaleY",A.scaleY,(T?Nr(A.scaleY,T+u):u)-A.scaleY||0,Du),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(_n,0,a[_n]),h=q1(h),A.svg?Uu(e,h,0,P,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==A.zOrigin&&as(this,A,"zOrigin",A.zOrigin,m),as(this,a,g,kl(c),kl(h)));continue}else if(g==="svgOrigin"){Uu(e,h,1,P,0,this);continue}else if(g in y0){$1(this,A,g,f,T?Nr(f,T+h):h);continue}else if(g==="smoothOrigin"){as(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){Z1(this,h,e);continue}}else g in a||(g=Qr(g)||g);if(x||(u||u===0)&&(f||f===0)&&!D1.test(h)&&g in a)p=(c+"").substr((f+"").length),u||(u=0),m=Yt(h)||(g in Rn.units?Rn.units[g]:p),p!==m&&(f=gs(e,g,c,m)),this._pt=new mn(this._pt,x?A:a,g,f,(T?Nr(f,T+u):u)-f,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?U1:Du),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=N1);else if(g in a)X1.call(this,e,g,c,T?T+h:h);else if(g in e)this.add(e,g,c||e[g],T?T+h:h,s,r);else if(g!=="parseTransform"){Uf(g,h);continue}x||(g in a?C.push(g,0,a[g]):C.push(g,1,c||e[g])),o.push(g)}}E&&u0(this)},render:function(e,t){if(t.tween._time||!Xf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Di,aliases:ai,getSetter:function(e,t,n){var s=ai[t];return s&&s.indexOf(",")<0&&(t=s),t in Vi&&t!==_n&&(e._gsap.x||Di(e,"x"))?n&&am===n?t==="scale"?k1:B1:(am=n||{})&&(t==="scale"?z1:H1):e.style&&!Df(e.style[t])?O1:~t.indexOf("-")?F1:Vf(e,t)},core:{_removeProperty:Js,_getMatrix:Yf}};gn.utils.checkPrefix=Qr;gn.core.getStyleSaver=_0;(function(i,e,t,n){var s=pn(i+","+e+","+t,function(r){Vi[r]=1});pn(e,function(r){Rn.units[r]="deg",y0[r]=1}),ai[s[13]]=i+","+e,pn(n,function(r){var o=r.split(":");ai[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Rn.units[i]="px"});gn.registerPlugin(T0);var Qi=gn.registerPlugin(T0)||gn;Qi.core.Tween;const mm={type:"change"},jf={type:"start"},b0={type:"end"},Qa=new ca,_m=new qn,J1=Math.cos(70*q_.DEG2RAD),Ct=new L,hn=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ph=1e-6;class Q1 extends FA{constructor(e,t=null){super(e,t),this.state=at.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new zn,this._lastTargetPosition=new L,this._quat=new zn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jp,this._sphericalDelta=new Jp,this._scale=1,this._panOffset=new L,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new L,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tR.bind(this),this._onPointerDown=eR.bind(this),this._onPointerUp=nR.bind(this),this._onContextMenu=cR.bind(this),this._onMouseWheel=rR.bind(this),this._onKeyDown=oR.bind(this),this._onTouchStart=aR.bind(this),this._onTouchMove=lR.bind(this),this._onMouseDown=iR.bind(this),this._onMouseMove=sR.bind(this),this._interceptControlDown=hR.bind(this),this._interceptControlUp=uR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mm),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ct.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qa.origin.copy(this.object.position),Qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qa.direction))<J1?this.object.lookAt(this.target):(_m.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qa.intersectPlane(_m,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ph||this._lastTargetPosition.distanceToSquared(this.target)>ph?(this.dispatchEvent(mm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ct.copy(s).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function eR(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function tR(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nR(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(b0),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iR(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case Pr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case Pr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(jf)}function sR(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rR(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent(jf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(b0))}function oR(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function aR(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(jf)}function lR(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function cR(i){this.enabled!==!1&&i.preventDefault()}function hR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gm(i,e){if(e===Ny)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===du||e===G_){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===du)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class fR extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gR(t)}),this.register(function(t){return new xR(t)}),this.register(function(t){return new AR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new yR(t)}),this.register(function(t){return new MR(t)}),this.register(function(t){return new SR(t)}),this.register(function(t){return new TR(t)}),this.register(function(t){return new _R(t)}),this.register(function(t){return new bR(t)}),this.register(function(t){return new vR(t)}),this.register(function(t){return new wR(t)}),this.register(function(t){return new ER(t)}),this.register(function(t){return new pR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new LR(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Io.extractUrlBase(e);o=Io.resolveURL(c,this.path)}else o=Io.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new $s(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===E0){try{o[qe.KHR_BINARY_GLTF]=new DR(e)}catch(u){s&&s(u);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XR(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:o[u]=new mR;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new IR(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[u]=new NR;break;case qe.KHR_MESH_QUANTIZATION:o[u]=new UR;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function dR(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pR{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Lt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yg(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yu(h),c.distance=u;break;case"spot":c=new SA(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class mR{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Oi}extendParams(e,t,n){const s=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Lt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(s)}}class _R{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class gR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(r)}}class xR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class vR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class yR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Lt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class MR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class SR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],Lt),Promise.all(r)}}class TR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class bR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],Lt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(r)}}class ER{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class wR{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class AR{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class RR{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class CR{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PR{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class LR{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const _ of u){const g=new Ne,p=new L,m=new zn,T=new L(1,1,1),x=new Al(_.geometry,_.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&T.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,g.compose(p,m,T));for(const v in l)if(v==="_COLOR_0"){const A=l[v];x.instanceColor=new _u(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);ft.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const E0="glTF",_o=12,xm={JSON:1313821514,BIN:5130562};class DR{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_o),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==E0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-_o,r=new DataView(e,_o);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===xm.JSON){const c=new Uint8Array(e,_o+o,a);this.content=n.decode(c)}else if(l===xm.BIN){const c=_o+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Ou[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ou[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Fr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}u(d)},a,c,Lt,f)})})}}class NR{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UR{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class w0 extends fa{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,T=1-p,x=m-f+u;for(let v=0;v!==a;v++){const A=o[g+v+a],P=o[g+v+l]*h,E=o[_+v+a],C=o[_+v]*h;r[v]=T*A+x*P+p*E+m*C}return r}}const OR=new zn;class FR extends w0{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return OR.fromArray(r).normalize().toArray(r),r}}const Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vm={9728:on,9729:Ft,9984:I_,9985:sl,9986:xo,9987:oi},ym={33071:ri,33648:Sl,10497:ms},mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ou={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BR={CUBICSPLINE:void 0,LINEAR:qo,STEP:Xo},_h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kR(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Zo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),i.DefaultMaterial}function Us(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zR(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function HR(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VR(i){let e;const t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gh(t.attributes):e=i.indices+":"+gh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+gh(i.targets[n]);return e}function gh(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GR(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const WR=new Ne;class XR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ec(this.options.manager):this.textureLoader=new EA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $s(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Us(r,a,s),Pi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Io.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=mh[s.type],a=Fr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new gt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=mh[s.type],c=Fr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,p;if(d&&d!==u){const m=Math.floor(f/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let x=t.cache.get(T);x||(g=new c(a,m*d,s.count*d/h),x=new bw(g,d/h),t.cache.add(T,x)),p=new xf(x,l,f%d/h,_)}else a===null?g=new c(s.count*l):g=new c(a,f,s.count*l),p=new gt(g,l,_);if(s.sparse!==void 0){const m=mh.SCALAR,T=Fr[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,A=new T(o[1],x,s.sparse.count*m),P=new c(o[2],v,s.sparse.count*l);a!==null&&(p=new gt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,C=A.length;E<C;E++){const I=A[E];if(p.setX(I,P[E*l]),l>=2&&p.setY(I,P[E*l+1]),l>=3&&p.setZ(I,P[E*l+2]),l>=4&&p.setW(I,P[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=vm[f.magFilter]||Ft,h.minFilter=vm[f.minFilter]||oi,h.wrapS=ym[f.wrapS]||ms,h.wrapT=ym[f.wrapT]||ms,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Bt(g);p.needsUpdate=!0,f(p)}),t.load(Io.resolveURL(u,r.path),_,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Pi(u,o),u.userData.mimeType=o.mimeType||GR(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Sf,ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hg,ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zo}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const u=s[qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Lt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Un);const h=r.alphaMode||_h.OPAQUE;if(h===_h.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_h.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Oi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Oi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Oi){const u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],Lt)}return r.emissiveTexture!==void 0&&o!==Oi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Us(s,u,r),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Mm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=VR(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Mm(new Zt,c,t),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?kR(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,_=h.length;d<_;d++){const g=h[d],p=o[d];let m;const T=c[d];if(p.mode===Nn.TRIANGLES||p.mode===Nn.TRIANGLE_STRIP||p.mode===Nn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ww(g,T):new Vt(g,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Nn.TRIANGLE_STRIP?m.geometry=gm(m.geometry,G_):p.mode===Nn.TRIANGLE_FAN&&(m.geometry=gm(m.geometry,du));else if(p.mode===Nn.LINES)m=new Cw(g,T);else if(p.mode===Nn.LINE_STRIP)m=new Mf(g,T);else if(p.mode===Nn.LINE_LOOP)m=new Pw(g,T);else if(p.mode===Nn.POINTS)m=new Pl(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&HR(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Pi(m,r),p.extensions&&Us(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,_=u.length;d<_;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Us(s,u[0],r),u[0];const f=new Fi;r.extensions&&Us(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=u.length;d<_;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(q_.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new _f(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new Ne;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yf(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],_=s.samplers[d.sampler],g=d.target,p=g.node,m=s.parameters!==void 0?s.parameters[_.input]:_.input,T=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",T)),c.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],_=u[2],g=u[3],p=u[4],m=[];for(let T=0,x=f.length;T<x;T++){const v=f[T],A=d[T],P=_[T],E=g[T],C=p[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const I=n._createAnimationTracks(v,A,P,E,C);if(I)for(let y=0;y<I.length;y++)m.push(I[y])}return new dA(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,WR)});for(let d=0,_=u.length;d<_;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new cg:c.length>1?h=new Fi:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Pi(h,r),r.extensions&&Us(n,h,r),r.matrix!==void 0){const u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Fi;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&Us(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof ci||f instanceof Bt)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ji[r.path]===Ji.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ji[r.path]){case Ji.weights:c=qr;break;case Ji.rotation:c=Yr;break;case Ji.position:case Ji.scale:c=jr;break;default:switch(n.itemSize){case 1:c=qr;break;case 2:case 3:default:c=jr;break}break}const h=s.interpolation!==void 0?BR[s.interpolation]:qo,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Ji[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Yr?FR:w0;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qR(i,e,t){const n=e.attributes,s=new Wi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Fu(Fr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Fu(Fr[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new pi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Mm(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Ou[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Pi(i,e),qR(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?zR(i,e.targets,t):i})}const xh=new WeakMap;class YR extends xi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new $s(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ut,n).catch(n)}decodeDracoFile(e,t,n,s,r=Lt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(xh.has(e)){const l=xh.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),xh.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Zt;e.index&&t.setIndex(new gt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,l=new gt(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ut)return;const n=new De;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),Ze.toWorkingColorSpace(n,Ut),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new $s(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=jR.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function jR(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,f=new u.Decoder;try{const d=t(u,f,new Int8Array(l),c),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{u.destroy(f)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let f,d;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const p in h){const m=self[u[p]];let T,x;if(c.useUniqueIDs)x=h[p],T=a.GetAttributeByUniqueId(f,x);else{if(x=a.GetAttributeId(f,o[h[p]]),x===-1)continue;T=a.GetAttribute(f,x)}const v=s(o,a,f,p,m,T);p==="color"&&(v.vertexColorSpace=c.vertexColorSpace),g.attributes.push(v)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,l){const h=l.num_faces()*3,u=h*4,f=o._malloc(u);a.GetTrianglesUInt32Array(l,u,f);const d=new Uint32Array(o.HEAPF32.buffer,f,h).slice();return o._free(f),{array:d,itemSize:1}}function s(o,a,l,c,h,u){const f=u.num_components(),_=l.num_points()*f,g=_*h.BYTES_PER_ELEMENT,p=r(o,h),m=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,u,p,g,m);const T=new h(o.HEAPF32.buffer,m,_).slice();return o._free(m),{name:c,array:T,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class KR extends yA{constructor(e){super(e),this.type=Kn}parse(e){const o=function(C,I){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(I||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(I||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(I||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(I||""))}},h=`
`,u=function(C,I,y){I=I||1024;let z=C.pos,F=-1,V=0,Z="",U=String.fromCharCode.apply(null,new Uint16Array(C.subarray(z,z+128)));for(;0>(F=U.indexOf(h))&&V<I&&z<C.byteLength;)Z+=U,V+=U.length,z+=128,U+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(z,z+128)));return-1<F?(C.pos+=V+F+1,Z+U.slice(0,F)):!1},f=function(C){const I=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,V={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Z,U;for((C.pos>=C.byteLength||!(Z=u(C)))&&o(1,"no header found"),(U=Z.match(I))||o(3,"bad initial token"),V.valid|=1,V.programtype=U[1],V.string+=Z+`
`;Z=u(C),Z!==!1;){if(V.string+=Z+`
`,Z.charAt(0)==="#"){V.comments+=Z+`
`;continue}if((U=Z.match(y))&&(V.gamma=parseFloat(U[1])),(U=Z.match(b))&&(V.exposure=parseFloat(U[1])),(U=Z.match(z))&&(V.valid|=2,V.format=U[1]),(U=Z.match(F))&&(V.valid|=4,V.height=parseInt(U[1],10),V.width=parseInt(U[2],10)),V.valid&2&&V.valid&4)break}return V.valid&2||o(3,"missing format specifier"),V.valid&4||o(3,"missing image size specifier"),V},d=function(C,I,y){const b=I;if(b<8||b>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);b!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const z=new Uint8Array(4*I*y);z.length||o(4,"unable to allocate buffer space");let F=0,V=0;const Z=4*b,U=new Uint8Array(4),Y=new Uint8Array(Z);let G=y;for(;G>0&&V<C.byteLength;){V+4>C.byteLength&&o(1),U[0]=C[V++],U[1]=C[V++],U[2]=C[V++],U[3]=C[V++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=b)&&o(3,"bad rgbe scanline format");let ue=0,ce;for(;ue<Z&&V<C.byteLength;){ce=C[V++];const Ee=ce>128;if(Ee&&(ce-=128),(ce===0||ue+ce>Z)&&o(3,"bad scanline data"),Ee){const Be=C[V++];for(let J=0;J<ce;J++)Y[ue++]=Be}else Y.set(C.subarray(V,V+ce),ue),ue+=ce,V+=ce}const pe=b;for(let Ee=0;Ee<pe;Ee++){let Be=0;z[F]=Y[Ee+Be],Be+=b,z[F+1]=Y[Ee+Be],Be+=b,z[F+2]=Y[Ee+Be],Be+=b,z[F+3]=Y[Ee+Be],F+=4}G--}return z},_=function(C,I,y,b){const z=C[I+3],F=Math.pow(2,z-128)/255;y[b+0]=C[I+0]*F,y[b+1]=C[I+1]*F,y[b+2]=C[I+2]*F,y[b+3]=1},g=function(C,I,y,b){const z=C[I+3],F=Math.pow(2,z-128)/255;y[b+0]=Ra.toHalfFloat(Math.min(C[I+0]*F,65504)),y[b+1]=Ra.toHalfFloat(Math.min(C[I+1]*F,65504)),y[b+2]=Ra.toHalfFloat(Math.min(C[I+2]*F,65504)),y[b+3]=Ra.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=f(p),T=m.width,x=m.height,v=d(p.subarray(p.pos),T,x);let A,P,E;switch(this.type){case un:E=v.length/4;const C=new Float32Array(E*4);for(let y=0;y<E;y++)_(v,y*4,C,y*4);A=C,P=un;break;case Kn:E=v.length/4;const I=new Uint16Array(E*4);for(let y=0;y<E;y++)g(v,y*4,I,y*4);A=I,P=Kn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:x,data:A,header:m.string,gamma:m.gamma,exposure:m.exposure,type:P}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case un:case Kn:o.colorSpace=Lt,o.minFilter=Ft,o.magFilter=Ft,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}class $R extends xi{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new $s(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,s)}parse(e){return new ZR(e)}}class ZR{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=JR(e,t,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function JR(i,e,t){const n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const u=QR(h,s,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function QR(i,e,t,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new OA;let a,l,c,h,u,f,d,_;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=g.length;p<m;)switch(g[p++]){case"m":a=g[p++]*e+t,l=g[p++]*e+n,o.moveTo(a,l);break;case"l":a=g[p++]*e+t,l=g[p++]*e+n,o.lineTo(a,l);break;case"q":c=g[p++]*e+t,h=g[p++]*e+n,u=g[p++]*e+t,f=g[p++]*e+n,o.quadraticCurveTo(u,f,c,h);break;case"b":c=g[p++]*e+t,h=g[p++]*e+n,u=g[p++]*e+t,f=g[p++]*e+n,d=g[p++]*e+t,_=g[p++]*e+n,o.bezierCurveTo(u,f,d,_,c,h);break}}return{offsetX:r.ha*e,path:o}}class ra extends Vt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Ht;const n=this,s=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||ra.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new qn,u=new L,f=new L,d=new L,_=new Ne,g=new L(0,0,-1),p=new je,m=new L,T=new L,x=new je,v=new Ne,A=this.camera,P=new zi(r,o,{samples:c,type:Kn}),E=new Cn({name:l.name!==void 0?l.name:"unspecified",uniforms:Zl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=P.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=v,this.material=E,this.onBeforeRender=function(C,I,y){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(y.matrixWorld),_.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(_),m.subVectors(f,d),m.dot(u)>0)return;m.reflect(u).negate(),m.add(f),_.extractRotation(y.matrixWorld),g.set(0,0,-1),g.applyMatrix4(_),g.add(d),T.subVectors(f,g),T.reflect(u).negate(),T.add(f),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(_),A.up.reflect(u),A.lookAt(T),A.far=y.far,A.updateMatrixWorld(),A.projectionMatrix.copy(y.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(A.projectionMatrix),v.multiply(A.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(A.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const b=A.projectionMatrix;x.x=(Math.sign(p.x)+b.elements[8])/b.elements[0],x.y=(Math.sign(p.y)+b.elements[9])/b.elements[5],x.z=-1,x.w=(1+b.elements[10])/b.elements[14],p.multiplyScalar(2/p.dot(x)),b.elements[2]=p.x,b.elements[6]=p.y,b.elements[10]=p.z+1-a,b.elements[14]=p.w,n.visible=!1;const z=C.getRenderTarget(),F=C.xr.enabled,V=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(P),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(I,A),C.xr.enabled=F,C.shadowMap.autoUpdate=V,C.setRenderTarget(z);const Z=y.viewport;Z!==void 0&&C.state.viewport(Z),n.visible=!0},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),n.material.dispose()}}}ra.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class oa extends Vt{constructor(e,t={}){super(e),this.isRefractor=!0,this.type="Refractor",this.camera=new Ht;const n=this,s=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||oa.RefractorShader,c=t.multisample!==void 0?t.multisample:4,h=this.camera;h.matrixAutoUpdate=!1,h.userData.refractor=!0;const u=new qn,f=new Ne,d=new zi(r,o,{samples:c,type:Kn});this.material=new Cn({name:l.name!==void 0?l.name:"unspecified",uniforms:Zl.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=s,this.material.uniforms.tDiffuse.value=d.texture,this.material.uniforms.textureMatrix.value=f;const _=function(){const x=new L,v=new L,A=new Ne,P=new L,E=new L;return function(I){return x.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(I.matrixWorld),P.subVectors(x,v),A.extractRotation(n.matrixWorld),E.set(0,0,1),E.applyMatrix4(A),P.dot(E)<0}}(),g=function(){const x=new L,v=new L,A=new zn,P=new L;return function(){n.matrixWorld.decompose(v,A,P),x.set(0,0,1).applyQuaternion(A).normalize(),x.negate(),u.setFromNormalAndCoplanarPoint(x,v)}}(),p=function(){const x=new qn,v=new je,A=new je;return function(E){h.matrixWorld.copy(E.matrixWorld),h.matrixWorldInverse.copy(h.matrixWorld).invert(),h.projectionMatrix.copy(E.projectionMatrix),h.far=E.far,x.copy(u),x.applyMatrix4(h.matrixWorldInverse),v.set(x.normal.x,x.normal.y,x.normal.z,x.constant);const C=h.projectionMatrix;A.x=(Math.sign(v.x)+C.elements[8])/C.elements[0],A.y=(Math.sign(v.y)+C.elements[9])/C.elements[5],A.z=-1,A.w=(1+C.elements[10])/C.elements[14],v.multiplyScalar(2/v.dot(A)),C.elements[2]=v.x,C.elements[6]=v.y,C.elements[10]=v.z+1-a,C.elements[14]=v.w}}();function m(x){f.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),f.multiply(x.projectionMatrix),f.multiply(x.matrixWorldInverse),f.multiply(n.matrixWorld)}function T(x,v,A){n.visible=!1;const P=x.getRenderTarget(),E=x.xr.enabled,C=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(d),x.autoClear===!1&&x.clear(),x.render(v,h),x.xr.enabled=E,x.shadowMap.autoUpdate=C,x.setRenderTarget(P);const I=A.viewport;I!==void 0&&x.state.viewport(I),n.visible=!0}this.onBeforeRender=function(x,v,A){A.userData.refractor!==!0&&_(A)&&(g(),m(A),p(A),T(x,v,A))},this.getRenderTarget=function(){return d},this.dispose=function(){d.dispose(),n.material.dispose()}}}oa.RefractorShader={name:"RefractorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class sc extends Vt{constructor(e,t={}){super(e),this.isWater=!0,this.type="Water";const n=this,s=t.color!==void 0?new De(t.color):new De(16777215),r=t.textureWidth!==void 0?t.textureWidth:512,o=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,l=t.flowDirection!==void 0?t.flowDirection:new me(1,0),c=t.flowSpeed!==void 0?t.flowSpeed:.03,h=t.reflectivity!==void 0?t.reflectivity:.02,u=t.scale!==void 0?t.scale:1,f=t.shader!==void 0?t.shader:sc.WaterShader,d=new ec,_=t.flowMap||void 0,g=t.normalMap0||d.load("textures/water/Water_1_M_Normal.jpg"),p=t.normalMap1||d.load("textures/water/Water_2_M_Normal.jpg"),m=.15,T=m*.5,x=new Ne,v=new da;if(ra===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(oa===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const A=new ra(e,{textureWidth:r,textureHeight:o,clipBias:a}),P=new oa(e,{textureWidth:r,textureHeight:o,clipBias:a});A.matrixAutoUpdate=!1,P.matrixAutoUpdate=!1,this.material=new Cn({name:f.name,uniforms:Zl.merge([de.fog,f.uniforms]),vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,transparent:!0,fog:!0}),_!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:_}):this.material.uniforms.flowDirection={type:"v2",value:l},g.wrapS=g.wrapT=ms,p.wrapS=p.wrapT=ms,this.material.uniforms.tReflectionMap.value=A.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=P.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=g,this.material.uniforms.tNormalMap1.value=p,this.material.uniforms.color.value=s,this.material.uniforms.reflectivity.value=h,this.material.uniforms.textureMatrix.value=x,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=T,this.material.uniforms.config.value.z=T,this.material.uniforms.config.value.w=u;function E(I){x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(I.projectionMatrix),x.multiply(I.matrixWorldInverse),x.multiply(n.matrixWorld)}function C(){const I=v.getDelta(),y=n.material.uniforms.config;y.value.x+=c*I,y.value.y=y.value.x+T,y.value.x>=m?(y.value.x=0,y.value.y=T):y.value.y>=m&&(y.value.y=y.value.y-m)}this.onBeforeRender=function(I,y,b){E(b),C(),n.visible=!1,A.matrixWorld.copy(n.matrixWorld),P.matrixWorld.copy(n.matrixWorld),A.onBeforeRender(I,y,b),P.onBeforeRender(I,y,b),n.visible=!0}}}sc.WaterShader={name:"WaterShader",uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new je}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>

		}`};var eC=`attribute vec3 aStep; 
uniform float uDistance; 
uniform float uSize; 
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0); 
  modelPosition.xyz += aStep * uDistance; 

  vec4 viewPosition = viewMatrix * modelPosition; 

  gl_Position = projectionMatrix * viewPosition; 
  gl_PointSize = uSize; 
}`,tC=`uniform vec3 uColor; 
void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(0.5)); 
  float strength = pow(1.0 - (distanceToCenter * 2.0), 1.5); 

  gl_FragColor = vec4(uColor, strength); 
}`,nC=`attribute float aScale; 
attribute vec3 aDirection; 
uniform float uDistance; 
uniform float uSize; 
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0); 
  modelPosition.xyz += aDirection * uDistance; 
  vec4 viewPosition = viewMatrix * modelPosition; 

  gl_Position = projectionMatrix * viewPosition; 
  gl_PointSize = uSize * aScale - (uDistance * 4.0); 
}`,iC=`uniform vec3 uColor; 
void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(0.5)); 
  float strength = pow(1.0 - (distanceToCenter * 2.0), 1.5); 

  gl_FragColor = vec4(uColor, strength); 
}`;const sC={color:"#FFF",position:new L(0,0,0),fireworksCount:300,fireworksUpSpeed:3,fireworksBombSpeed:3,fireworksSize:20,fireworksShape:"circle",resourceLoadingFn:(i,e)=>{console.log(`资源正在加载中 ${Math.round(i/e*100)}%`)},resourceLoadedFn:()=>{console.log("资源加载完毕")}};class rC{constructor(e){this.config={...sC,...e},this.clock=new da,this.color=new De(this.config.color),this.position=this.config.position,this.isAllowMusic=!1,this.resourcesLoaded=0,this.totalResources=1,this._initStartPoint(),this._initBomb(),this._initListener()}_initStartPoint(){const e=new Zt,t=new Float32Array([this.position.x,0,this.position.z]),n=new Cn({vertexShader:eC,fragmentShader:tC,transparent:!0,blending:Go,depthWrite:!1,uniforms:{uDistance:{value:0},uColor:{value:this.color},uSize:{value:this.config.fireworksSize}}});e.setAttribute("position",new gt(t,3)),e.setAttribute("aStep",new gt(new Float32Array([0,1,0]),3)),this.startPoint=new Pl(e,n)}_initBomb(){const e=new Zt;let t;this.config.fireworksShape==="circle"?t=this._getCircleDirection():this.config.fireworksShape==="heart"?t=this._getHeartDirection():t=this._getRandomDirection(),e.setAttribute("position",new gt(t.bombPointPosition,3)),e.setAttribute("aScale",new gt(t.bombPointScale,1)),e.setAttribute("aDirection",new gt(t.bombDirection,3));const n=new Cn({vertexShader:nC,fragmentShader:iC,transparent:!0,blending:Go,depthWrite:!1,uniforms:{uDistance:{value:0},uColor:{value:this.color},uSize:{value:0}}});this.bomb=new Pl(e,n)}_initListener(){this.listener=new Tg,this.sound=new bg(this.listener);const e=new Sg,t=this.config.fireworksShape==="heart"?"./audio/heart.mp3":"./audio/bomb.mp3";e.load(t,n=>{this.sound.setBuffer(n),this.sound.setLoop(!1),this.sound.setVolume(.2),this.sound.playbackRate=.8,this._checkResourcesLoaded()})}_getRandomDirection(){const e=this.config.fireworksCount,t=new Float32Array(e*3),n=new Float32Array(e),s=new Float32Array(e*3);for(let r=0;r<e;r++){t[r*3]=this.position.x,t[r*3+1]=this.position.y,t[r*3+2]=this.position.z,n[r]=1;let o=Math.random()*Math.PI*2,a=Math.random()*Math.PI*2,l=Math.random();s[r*3]=l*Math.sin(o)+l*Math.sin(a),s[r*3+1]=l*Math.cos(o)+l*Math.cos(a),s[r*3+2]=l*Math.sin(o)+l*Math.cos(a)}return{bombPointPosition:t,bombPointScale:n,bombDirection:s}}_getCircleDirection(){const e=this.config.fireworksCount,t=new Float32Array(e*3),n=new Float32Array(e),s=new Float32Array(e*3);for(let r=0;r<e;r++){t[r*3]=this.position.x,t[r*3+1]=this.position.y,t[r*3+2]=this.position.z,n[r]=1;let o=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),l=Math.random();s[r*3]=l*Math.sin(a)*Math.cos(o),s[r*3+1]=l*Math.sin(a)*Math.sin(o),s[r*3+2]=l*Math.cos(a)}return{bombPointPosition:t,bombPointScale:n,bombDirection:s}}_getHeartDirection(){const e=this.config.fireworksCount,t=new Float32Array(e*3),n=new Float32Array(e),s=new Float32Array(e*3);for(let r=0;r<e;r++){t[r*3]=this.position.x,t[r*3+1]=this.position.y,t[r*3+2]=this.position.z,n[r]=1;let o=Math.random()*Math.PI*2,a=16*Math.pow(Math.sin(o),3),l=13*Math.cos(o)-5*Math.cos(2*o)-2*Math.cos(3*o)-Math.cos(4*o),c=0;s[r*3]=a/20,s[r*3+1]=l/20,s[r*3+2]=c/20}return{bombPointPosition:t,bombPointScale:n,bombDirection:s}}addScene(e,t){this.scene=e,this.camera=t,this.scene.add(this.startPoint),this.scene.add(this.bomb)}update(){const e=this.clock.getElapsedTime(),t=e*this.config.fireworksUpSpeed;if(t<this.position.y)this.startPoint.material.uniforms.uDistance.value=t;else{const s=(e-this.position.y/this.config.fireworksUpSpeed)*this.config.fireworksBombSpeed;Sm(this.startPoint),this.bomb.material.uniforms.uSize.value=this.config.fireworksSize,this.bomb.material.uniforms.uDistance.value=s,!this.sound.isPlaying&&!this.playAudio&&this.isAllowMusic&&(this.playAudio=!0,this.sound.stop(),this.sound.play()),s*4>this.config.fireworksSize&&(Sm(this.bomb),this._resetFirework())}}musicControl(e){e?this.sound.context.resume().then(()=>{this.isAllowMusic=e,this.playAudio=!0}):this.sound.context.suspend().then(()=>{this.isAllowMusic=e})}_resetFirework(){this.playAudio=!1,this.clock.start(),this._initStartPoint(),this._initBomb(),this.scene.add(this.startPoint),this.scene.add(this.bomb)}_checkResourcesLoaded(){this.resourcesLoaded++,this.config.resourceLoadingFn(this.resourcesLoaded,this.totalResources),this.resourcesLoaded===this.totalResources&&this.config.resourceLoadedFn()}}function Sm(i){if(i&&i.parent&&(i.parent.remove(i),i.geometry&&i.geometry.dispose(),i.material))if(Array.isArray(i.material))for(let e of i.material)e.dispose();else i.material.dispose()}const oC={scene:null,camera:null,fontSize:70,fontScale:.075,fontThickness:200,resourceLoadingFn:(i,e)=>{console.log(`资源正在加载中 ${Math.round(i/e*100)}%`)},resourceLoadedFn:()=>{console.log("资源加载完毕")}};class aC{constructor(e){this.config={...oC,...e},this.scene=this.config.scene,this.camera=this.config.camera,this.meshGroup=new Fi,this.scene.add(this.meshGroup),this.resourcesLoaded=0,this.totalResources=2,this._initGeometry(),this._initTexture(),this._initData()}_initGeometry(){this.planeGeometry=new ua(1.2,1.2)}_initTexture(){this.textureLoader=new ec,this.textureLoader.load("./textures/flower.png",e=>{this.flowerTexture=e,this.flowerMaterial=new Oi({alphaMap:e,opacity:.6,depthTest:!1,transparent:!0,side:Un}),this._checkResourcesLoaded()}),this.textureLoader.load("./textures/leaf.png",e=>{this.leafTexture=e,this.leafMaterial=new Oi({alphaMap:e,opacity:.7,depthTest:!1,transparent:!0,side:Un}),this._checkResourcesLoaded()})}_initData(){this.textCanvas=document.createElement("canvas"),this.textCanvas.width=0,this.textCanvas.height=0,this.textContext=this.textCanvas.getContext("2d",{willReadFrequently:!0}),this.dummy=new ft,this.clock=new da,this.textureCoordinates=[],this.particles=[]}_checkResourcesLoaded(){this.resourcesLoaded++,this.config.resourceLoadingFn(this.resourcesLoaded,this.totalResources),this.resourcesLoaded===this.totalResources&&this.config.resourceLoadedFn()}_updateCoordinatesAndParticles(){const e=this.text.split(`
`),t=e.length,n=Math.max(...e.map(s=>s.length));if(this.textCanvas.width=this.config.fontSize*n,this.textCanvas.height=this.config.fontSize*t*1.1,this.textContext.font=`${this.config.fontThickness} ${this.config.fontSize}px Verdana`,this.textContext.fillStyle="#2a9d8f",this.textContext.clearRect(0,0,this.textCanvas.width,this.textCanvas.height),e.forEach((s,r)=>{this.textContext.fillText(s,0,this.config.fontSize*1.1*(r+.8))}),this.textCanvas.width>0){const s=this.textContext.getImageData(0,0,this.textCanvas.width,this.textCanvas.height),r=Array.from(Array(this.textCanvas.height),()=>new Array(this.textCanvas.width));for(let o=0;o<this.textCanvas.height;o++)for(let a=0;a<this.textCanvas.width;a++)r[o][a]=s.data[(a+o*this.textCanvas.width)*4]>0;this.textureCoordinates.length&&(this.textureCoordinates=this.textureCoordinates.filter(o=>!o.toDelete),this.particles=this.particles.filter(o=>!o.toDelete),this.textureCoordinates.forEach(o=>{r[o.y]&&r[o.y][o.x]?(o.old=!0,o.toDelete||(r[o.y][o.x]=!1)):o.toDelete=!0}));for(let o=0;o<this.textCanvas.height;o++)for(let a=0;a<this.textCanvas.width;a++)r[o][a]&&this.textureCoordinates.push({x:a,y:o,old:!1,toDelete:!1})}else this.textureCoordinates=[];this.particles=this.textureCoordinates.map((s,r)=>{const o=s.x*this.config.fontScale,a=s.y*this.config.fontScale;return s.old&&this.particles[r]?this.particles[r]:Math.random()>.2?new lC({x:o,y:a}):new cC({x:o,y:a})})}_recreateInstancedMesh(){this.meshGroup.remove(this.flowerInstancedMesh,this.leafInstancedMesh);const e=this.particles.filter(r=>r.type===0).length,t=this.particles.filter(r=>r.type===1).length;this.flowerInstancedMesh=new Al(this.planeGeometry,this.flowerMaterial,e),this.leafInstancedMesh=new Al(this.planeGeometry,this.leafMaterial,t),this.meshGroup.add(this.flowerInstancedMesh,this.leafInstancedMesh);let n=0,s=0;this.particles.forEach(r=>{r.type===0?this.flowerInstancedMesh.setColorAt(n++,new De(`hsl(${r.color}, 100%, 70%)`)):this.leafInstancedMesh.setColorAt(s++,new De(`hsl(${r.color}, 100%, 40%)`))})}drawText(e){return this.text=e,this.textureCoordinates=[],this._updateCoordinatesAndParticles(),this._recreateInstancedMesh(),this.meshGroup}update(){let e=0,t=0;this.particles.forEach(n=>{n.grow(),this.dummy.quaternion.copy(this.camera.quaternion),this.dummy.rotation.z+=n.rotationZ,this.dummy.scale.set(n.scale,n.scale,n.scale),this.dummy.position.set(n.x,this.textCanvas.height*this.config.fontScale-n.y,n.z),n.type===1&&(this.dummy.position.y+=.5*n.scale),this.dummy.updateMatrix(),n.type===0?this.flowerInstancedMesh.setMatrixAt(e++,this.dummy.matrix):this.leafInstancedMesh.setMatrixAt(t++,this.dummy.matrix)}),this.flowerInstancedMesh&&this.leafInstancedMesh&&(this.flowerInstancedMesh.instanceMatrix.needsUpdate=!0,this.leafInstancedMesh.instanceMatrix.needsUpdate=!0)}}class lC{constructor({x:e,y:t}){this.type=0,this.x=e+.2*(Math.random()-.5),this.y=t+.2*(Math.random()-.5),this.z=0,this.color=Math.random()*60,this.isGrowing=!0,this.toDelete=!1,this.scale=0,this.maxScale=.9*Math.pow(Math.random(),20),this.deltaScale=.03+.1*Math.random(),this.age=Math.PI*Math.random(),this.ageDelta=.01+.02*Math.random(),this.rotationZ=.5*Math.random()*Math.PI,this.grow=function(){this.age+=this.ageDelta,this.isGrowing?(this.deltaScale*=.99,this.scale+=this.deltaScale,this.scale>=this.maxScale&&(this.isGrowing=!1)):this.toDelete?(this.deltaScale*=1.1,this.scale-=this.deltaScale,this.scale<=0&&(this.scale=0,this.deltaScale=0)):(this.scale=this.maxScale+.2*Math.sin(this.age),this.rotationZ+=.001*Math.cos(this.age))}}}class cC{constructor({x:e,y:t}){this.type=1,this.x=e,this.y=t,this.z=0,this.rotationZ=.6*(Math.random()-.5)*Math.PI,this.color=100+Math.random()*50,this.isGrowing=!0,this.toDelete=!1,this.scale=0,this.maxScale=.1+.7*Math.pow(Math.random(),7),this.deltaScale=.03+.03*Math.random(),this.age=Math.PI*Math.random(),this.grow=function(){this.isGrowing&&(this.deltaScale*=.99,this.scale+=this.deltaScale,this.scale>=this.maxScale&&(this.isGrowing=!1)),this.toDelete&&(this.deltaScale*=1.1,this.scale-=this.deltaScale,this.scale<=0&&(this.scale=0))}}}const hC={snowCount:5e3,particleCount:100,shapeScale:.4,shapePath:"M24,0 C12,-12 0,12 24,24 C48,12 36,-12 24,0 Z",sceneText:["跟着天空的暗示","离开冰冷的城市","踏上飞驰的列车消失","脱离黑夜的控制","现在就抛弃一切出发"],sceneTextThickness:200,fireworksPositions:[],fireworksColor:[],fireworksCount:180,fireworksUpSpeed:3,fireworksBombSpeed:3,fireworksSize:20,fireworksShape:"circle",resourceLoadingFn:()=>{console.log("资源正在加载中")},resourceLoadedFn:()=>{console.log("资源加载完毕")}};class uC{constructor(e,t){const n=document.querySelector(e);if(!n)throw new Error("未找到挂载元素");this.el=n,this.config={...hC,...t},this._init()}_init(){this._initData(),this._initLoader(),this._initScene(),this._initCamera(),this._initRenderer(),this._initControls(),this._initLight(),this._initStar(),this._initSnow(),this._initText(),this._initBear(),this._initFireworks(),this._initBackgroundMusic();const e=()=>{this.renderer.render(this.scene,this.camera),this.controls.update(),requestAnimationFrame(e)};e(),this.el.addEventListener("wheel",fC(n=>{n.deltaY>0?this.sceneIndex=(this.sceneIndex+1)%this.sceneCallback.length:this.sceneIndex=(this.sceneIndex-1+this.sceneCallback.length)%this.sceneCallback.length,this.sceneCallback[this.sceneIndex]()},100));let t=0;this.el.addEventListener("touchend",()=>{const n=new Date().getTime();n-t<=300&&(this.sceneIndex=(this.sceneIndex+1)%this.sceneCallback.length,this.sceneCallback[this.sceneIndex]()),t=n}),window.addEventListener("resize",()=>{this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.camera.aspect=this.el.clientWidth/this.el.clientHeight,this.camera.updateProjectionMatrix()})}_initData(){var e;this.clock=new da,this.gsapOptions={pointAngel:0,pathTime:0,textTime:0},this.starPositions=[],this.pathPositions=[],this.sceneIndex=0,this.sceneCallback=[()=>{this.translateCamera(new L(-7.75,3.09,6.17),new L(-8,2,0)),this.translatePath(!0),this.translateText(new L(-9.4,4.5,.1),new L(0,0,0),new L(.15,.15,.15))},()=>{this.translateCamera(new L(7,.1,23),new L(0,0,0)),this.translatePath(),this.translateText(new L(-5.5,11,2),new L(0,Math.PI/8,0),new L(.4,.4,.4))},()=>{this.translateCamera(new L(10,3,0),new L(5,2,0)),this.translatePath(!0),this.translateText(new L(4,4,1.8),new L(0,Math.PI/1.5,0),new L(.1,.1,.1))},()=>{this.translateCamera(new L(7,.1,23),new L(0,0,0)),this.translatePath(),this.translateText(new L(-5.5,11,2),new L(0,Math.PI/8,0),new L(.4,.4,.4))},()=>{this.translateCamera(new L(-20,1.3,6.6),new L(5,2,0)),this.translateText(new L(-13,5,2.5),new L(0,-Math.PI/3,0),new L(.1,.1,.1))}],(e=this.config.fireworksPositions)!=null&&e.length?this.fireworksPositions=this.config.fireworksPositions.map(t=>new L(...t)):this.fireworksPositions=[new L(-20,5,4),new L(-18,6,-2),new L(-30,14,-20),new L(-2,13,-12),new L(-10,8,-10),new L(-10,7,15),new L(2,10,1),new L(0,9,12)]}_initLoader(){this.dracoLoader=new YR,this.dracoLoader.setDecoderPath("./draco/"),this.gltfLoader=new fR,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.rgbeLoader=new KR,this.fontLoader=new $R,this.textureLoader=new ec,this.resourcesLoaded=0,this.totalResources=6+this.fireworksPositions.length}_initScene(){this.scene=new Tw,this.gltfLoader.load("./model/scene.glb",n=>{this.scene.add(n.scene),n.scene.traverse(s=>{s.name==="Plane"&&(s.visible=!1),s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),this._checkResourcesLoaded()}),this.rgbeLoader.load("./textures/sky.hdr",n=>{this.scene.background=n,this.scene.environment=n,n.mapping=Ml,this._checkResourcesLoaded()});const e=new Ef(300,32),t=new sc(e,{textureWidth:1024,textureHeight:1024,color:15658751,flowDirection:new me(1,1),scale:50});t.rotation.x=-Math.PI/2,this.scene.add(t)}_initCamera(){this.camera=new Ht(75,this.el.clientWidth/this.el.clientHeight,.1,1e3),this.camera.position.set(0,0,10),this.camera.updateProjectionMatrix(),this.scene.add(this.camera)}_initRenderer(){this.renderer=new Sw({alpha:!0,antialias:!0,toneMapping:L_,toneMappingExposure:.5,outputEncoding:void 0,physicallyCorrectLights:!0}),this.renderer.setPixelRatio(this.el.devicePixelRatio),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.renderer.shadowMap.enabled=!0,this.el.appendChild(this.renderer.domElement)}_initControls(){this.controls=new Q1(this.camera,this.renderer.domElement),this.controls.enableZoom=!1,this.controls.enableDamping=!0}_initLight(){this.directionalLight=new yg(16777215,1),this.directionalLight.position.set(0,50,0),this.scene.add(this.directionalLight),this.pointLight=new yu(16777215,50),this.pointLight.position.set(.1,2,0),this.pointLight.castShadow=!0,this.scene.add(this.pointLight);const e=3;this.pointLightGroup=new Fi,this.pointLightGroup.position.set(-7,2.5,-1.5);for(let t=0;t<3;t++){const n=new Dl(.2,32,32),s=new Zo({color:16777215,emissive:16777215,emissiveIntensity:10}),r=new Vt(n,s);r.position.set(Math.cos(t*2*Math.PI/3)*e,Math.cos(t*2*Math.PI/3),Math.sin(t*2*Math.PI/3)*e);const o=new yu(16777215,20);r.add(o),this.pointLightGroup.add(r)}this.scene.add(this.pointLightGroup),Qi.to(this.gsapOptions,{pointAngel:Math.PI*2,duration:10,ease:"linear",repeat:-1,onUpdate:()=>{this.pointLightGroup.rotation.y=this.gsapOptions.pointAngel,this.pointLightGroup.children.forEach((t,n)=>{t.position.y=Math.cos(n*2*Math.PI/3+this.gsapOptions.pointAngel*5)})}})}_initStar(){this.starInstance=new Al(new Dl(.03,32,32),new Zo({color:16777215,emissive:16777215,emissiveIntensity:10}),this.config.particleCount);for(let n=0;n<this.starInstance.count;n++){const s=Math.random()*100-50,r=Math.random()*100-50,o=Math.random()*100-50;this.starPositions.push(new L(s,r,o));const a=new Ne;a.setPosition(s,r,o),this.starInstance.setMatrixAt(n,a)}this.scene.add(this.starInstance);const e=new L(4.2,.5,18),t=dC(this.config.shapePath);for(let n=0;n<this.starInstance.count;n++){const s=t.getPoint(n/this.starInstance.count),r=new L(s.x*this.config.shapeScale+e.x,s.y*this.config.shapeScale+e.y,e.z);this.pathPositions[n]=r}}_initSnow(){this.textureLoader.load("./textures/snow.png",e=>{const t=new Zt,n=new Float32Array(this.config.snowCount*3);for(let r=0;r<this.config.snowCount;r++)n[r*3]=Math.random()*300-150,n[r*3+1]=Math.random()*300,n[r*3+2]=Math.random()*300-150;t.setAttribute("position",new gt(n,3)),this.snowInstance=new Pl(t,new Sf({size:.5,map:e,depthWrite:!1,blending:Go})),this.scene.add(this.snowInstance);const s=()=>{const r=this.snowInstance.geometry.attributes.position.array;for(let o=0;o<r.length;o+=3)r[o+1]-=.1,r[o+1]<0&&(r[o+1]=300);this.snowInstance.geometry.attributes.position.needsUpdate=!0,requestAnimationFrame(s)};s(),this._checkResourcesLoaded()})}_initText(){const e=new aC({scene:this.scene,camera:this.camera,fontThickness:this.config.sceneTextThickness,resourceLoadingFn:()=>{},resourceLoadedFn:()=>this._checkResourcesLoaded()});this.flowerTextInstance=e;const t=()=>{e.update(),requestAnimationFrame(t)};t()}_initBear(){this.gltfLoader.load("./model/bear/scene.gltf",e=>{this.bear=e.scene,this.bear.position.set(-9.5,2.5,.4),this.bear.scale.set(.5,.5,.5),this.bear.rotation.set(0,Math.PI/6,0),this.scene.add(this.bear),this._checkResourcesLoaded()})}_initFireworks(){this.fireworks=[],this.fireworksPositions.forEach((t,n)=>{let s;this.config.fireworksColor.length?s=this.config.fireworksColor[n%this.config.fireworksColor.length]:s=`hsl(${Math.random()*360}, 100%, 80%)`;const r=new rC({color:s,position:t,fireworksCount:this.config.fireworksCount,fireworksUpSpeed:this.config.fireworksUpSpeed,fireworksBombSpeed:this.config.fireworksBombSpeed,fireworksSize:this.config.fireworksSize,fireworksShape:this.config.fireworksShape,resourceLoadingFn:()=>{},resourceLoadedFn:()=>this._checkResourcesLoaded()});r.addScene(this.scene,this.camera),this.fireworks.push(r)});const e=()=>{this.fireworks.forEach(t=>{t.update()}),requestAnimationFrame(e)};e()}_initBackgroundMusic(){this.listener=new Tg,this.backgroundMusic=new bg(this.listener),new Sg().load("./audio/background.mp3",t=>{this.backgroundMusic.setBuffer(t),this.backgroundMusic.setLoop(!0),this.backgroundMusic.setVolume(.7),this._checkResourcesLoaded()})}_createFlowerText(){}_checkResourcesLoaded(){this.resourcesLoaded++,this.config.resourceLoadingFn(this.resourcesLoaded,this.totalResources),this.resourcesLoaded===this.totalResources&&(this.config.resourceLoadedFn(),this.sceneCallback[this.sceneIndex]())}translatePath(e=!1){Qi.to(this.gsapOptions,{pathTime:1,duration:1,onUpdate:()=>{for(let t=0;t<this.starInstance.count;t++){const n=e?this.pathPositions[t]:this.starPositions[t],s=e?this.starPositions[t]:this.pathPositions[t],r=n.x+(s.x-n.x)*this.gsapOptions.pathTime,o=n.y+(s.y-n.y)*this.gsapOptions.pathTime,a=n.z+(s.z-n.z)*this.gsapOptions.pathTime,l=new Ne;l.setPosition(r,o,a),this.starInstance.setMatrixAt(t,l)}this.starInstance.instanceMatrix.needsUpdate=!0},onComplete:()=>{this.gsapOptions.pathTime=0}})}translateCamera(e,t){Qi.to(this.camera.position,{x:e.x,y:e.y,z:e.z,duration:1,ease:"power2.inOut"}),Qi.to(this.controls.target,{x:t.x,y:t.y,z:t.z,duration:1,ease:"power2.inOut"})}translateText(e,t,n){const s=this.config.sceneText[this.sceneIndex];this.text=this.flowerTextInstance.drawText(s),Qi.to(this.text.position,{x:e.x,y:e.y,z:e.z,duration:1,ease:"power2.inOut"}),Qi.to(this.text.rotation,{x:t.x,y:t.y,z:t.z,duration:1,ease:"power2.inOut"}),Qi.to(this.text.scale,{x:n.x,y:n.y,z:n.z,duration:1,ease:"power2.inOut"})}musicControl(e){this.fireworks.forEach(t=>{t.musicControl(e)}),e?this.backgroundMusic.context.resume().then(()=>{this.backgroundMusic.play()}):this.backgroundMusic.context.suspend().then(()=>{this.backgroundMusic.pause()})}}function fC(i,e,t=!1,n){let s=null,r=!1;const o=function(...a){s&&clearTimeout(s),t&&!r?(i.apply(this,a),r=!0):s=setTimeout(()=>{i.apply(this,a),r=!1},e)};return o.cancel=function(){s&&clearTimeout(s),s=null,r=!1},o}function dC(i){const e=new Ll;return i.match(/[a-zA-Z][^a-zA-Z]*/g).forEach(n=>{const s=n[0],r=n.slice(1).trim().split(/[\s,]+/).map(Number);switch(s){case"M":e.moveTo(r[0],r[1]);break;case"C":e.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);break;case"L":e.lineTo(r[0],r[1]);break;case"V":e.lineTo(e.currentPoint.x,r[0]);break;case"H":e.lineTo(r[0],e.currentPoint.y);break;case"Q":e.quadraticCurveTo(r[0],r[1],r[2],r[3]);break;case"A":e.absarc(r[0],r[1],r[2],r[3],r[4],r[5]===1);break;case"Z":e.closePath();break;default:console.warn(`未知的路径命令: ${s}`)}}),e}const pC={class:"xmyThree",id:"xmyThree"},mC={class:"xmyThree_tip"},_C={__name:"App",setup(i){const e=fx(null),t=ux(!1),n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);r_(()=>{e.value=new uC("#xmyThree",{snowCount:5e3,particleCount:50,shapeScale:.07,sceneText:["依依","想和你看世界","一直到尽头","想和你在一起","一直到永远"],sceneTextThickness:200,fireworksPositions:[],fireworksColor:[],fireworksCount:300,fireworksUpSpeed:3,fireworksBombSpeed:5,fireworksSize:20,fireworksShape:"heart",resourceLoadingFn:(r,o)=>{const a=document.querySelector(".xmyThree_loading .xwid");a.style.width=`${r/o*100}%`},resourceLoadedFn:()=>{setTimeout(()=>{const r=document.querySelector(".xmyThree_loading");r.style.display="none"},1e3)}}),window.instance=e.value});function s(){t.value=!t.value,e.value.musicControl(t.value)}return(r,o)=>(dv(),_v("div",pC,[vl("div",mC,Lm(Km(n)?"双击切换场景":"鼠标滚轮切换场景"),1),vl("div",{class:Wl(["xmyThree_music",{stop:!t.value}]),onClick:s},null,2),o[0]||(o[0]=yv('<div class="xmyThree_loading"><p class="xstar"></p><p class="xtext">Loading</p><p class="xbar"><span class="xwid"></span></p></div>',1))]))}};ey(_C).mount("#app");
