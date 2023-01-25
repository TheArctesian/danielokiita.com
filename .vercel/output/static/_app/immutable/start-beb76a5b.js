import{S as nt,i as at,s as rt,a as ot,e as M,c as it,b as K,g as de,t as B,d as pe,f as G,h as H,j as st,o as Ie,k as lt,l as ct,m as ft,n as ve,p as q,q as ut,r as dt,u as pt,v as Y,w as X,x as Ne,y as Z,z as Q,A as ce}from"./chunks/index-8705c0e5.js";import{S as et,I as C,g as Ke,f as ze,a as Ee,b as fe,s as F,i as We,c as ue,P as Ye,d as ht,e as mt,h as _t}from"./chunks/singletons-95aacd88.js";import{_ as V}from"./chunks/preload-helper-41c905a7.js";function gt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function wt(a){return a.split("%25").map(decodeURI).join("%25")}function yt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(a,e){const n=new URL(a);for(const l of bt){let o=n[l];Object.defineProperty(n,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return Et(n),n}function Et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function Rt(a){return a.replace(/\/$/,"")+kt}function St(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let l=n.length;for(;l;)e=e*33^n[--l]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ne.delete(Te(a)),he(a,e));const ne=new Map;function Lt(a,e){const n=Te(a,e),l=document.querySelector(n);if(l!=null&&l.textContent){const{body:o,...m}=JSON.parse(l.textContent),t=l.getAttribute("data-ttl");return t&&ne.set(n,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return he(a,e)}function It(a,e,n){if(ne.size>0){const l=Te(a,n),o=ne.get(l);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);ne.delete(l)}}return he(e,n)}function Te(a,e){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(l+=`[data-hash="${St(e.body)}"]`),l}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(l=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(l);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!l)return;const t=l.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,_)=>{if(_%2){if(h.startsWith("x+"))return ke(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ke(String.fromCharCode(...h.slice(2).split("-").map(O=>parseInt(O,16))));const w=At.exec(h);if(!w)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,S,$,j]=w;return e.push({name:$,matcher:j,optional:!!v,rest:!!S,chained:S?_===1&&t[0]==="":!1}),S?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return ke(h)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(Pt)}function Tt(a,e,n){const l={},o=a.slice(1);let m="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=o[t];if(f.chained&&f.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)f.rest&&(l[f.name]="");else{if(f.matcher&&!n[f.matcher](h)){if(f.optional&&f.chained){let _=o.indexOf(void 0,t);if(_===-1){const w=e[t+1];if(w!=null&&w.rest&&w.chained)m=h;else return}for(;_>=t;)o[_]=o[_-1],_-=1;continue}return}l[f.name]=h}}if(!m)return l}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(a,e,n,l){const o=new Set(e);return Object.entries(n).map(([f,[h,_,w]])=>{const{pattern:v,params:S}=Ot(f),$={id:f,exec:j=>{const O=v.exec(j);if(O)return Tt(O,S,l)},errors:[1,...w||[]].map(j=>a[j]),layouts:[0,..._||[]].map(t),leaf:m(h)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function m(f){const h=f<0;return h&&(f=~f),[h,a[f]]}function t(f){return f===void 0?f:[o.has(f),a[f]]}}function $t(a){let e,n,l;var o=a[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Y(o,m(a))),{c(){e&&X(e.$$.fragment),n=M()},l(t){e&&Ne(e.$$.fragment,t),n=M()},m(t,f){e&&Z(e,t,f),K(t,n,f),l=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),o!==(o=t[0][0])){if(e){de();const _=e;B(_.$$.fragment,1,0,()=>{Q(_,1)}),pe()}o?(e=Y(o,m(t)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){l||(e&&G(e.$$.fragment,t),l=!0)},o(t){e&&B(e.$$.fragment,t),l=!1},d(t){t&&H(n),e&&Q(e,t)}}}function Dt(a){let e,n,l;var o=a[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[jt]},$$scope:{ctx:t}}}}return o&&(e=Y(o,m(a))),{c(){e&&X(e.$$.fragment),n=M()},l(t){e&&Ne(e.$$.fragment,t),n=M()},m(t,f){e&&Z(e,t,f),K(t,n,f),l=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){de();const _=e;B(_.$$.fragment,1,0,()=>{Q(_,1)}),pe()}o?(e=Y(o,m(t)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){l||(e&&G(e.$$.fragment,t),l=!0)},o(t){e&&B(e.$$.fragment,t),l=!1},d(t){t&&H(n),e&&Q(e,t)}}}function jt(a){let e,n,l;var o=a[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Y(o,m(a))),{c(){e&&X(e.$$.fragment),n=M()},l(t){e&&Ne(e.$$.fragment,t),n=M()},m(t,f){e&&Z(e,t,f),K(t,n,f),l=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),o!==(o=t[0][1])){if(e){de();const _=e;B(_.$$.fragment,1,0,()=>{Q(_,1)}),pe()}o?(e=Y(o,m(t)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){l||(e&&G(e.$$.fragment,t),l=!0)},o(t){e&&B(e.$$.fragment,t),l=!1},d(t){t&&H(n),e&&Q(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=lt("div"),n&&n.c(),this.h()},l(l){e=ct(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ft(e);n&&n.l(o),o.forEach(H),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(l,o){K(l,e,o),n&&n.m(e,null)},p(l,o){l[5]?n?n.p(l,o):(n=Ze(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(l){l&&H(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=ut(a[6])},l(n){e=dt(n,a[6])},m(n,l){K(n,e,l)},p(n,l){l&64&&pt(e,n[6])},d(n){n&&H(e)}}}function Vt(a){let e,n,l,o,m;const t=[Dt,$t],f=[];function h(w,v){return w[0][1]?0:1}e=h(a),n=f[e]=t[e](a);let _=a[4]&&Xe(a);return{c(){n.c(),l=ot(),_&&_.c(),o=M()},l(w){n.l(w),l=it(w),_&&_.l(w),o=M()},m(w,v){f[e].m(w,v),K(w,l,v),_&&_.m(w,v),K(w,o,v),m=!0},p(w,[v]){let S=e;e=h(w),e===S?f[e].p(w,v):(de(),B(f[S],1,1,()=>{f[S]=null}),pe(),n=f[e],n?n.p(w,v):(n=f[e]=t[e](w),n.c()),G(n,1),n.m(l.parentNode,l)),w[4]?_?_.p(w,v):(_=Xe(w),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(w){m||(G(n),m=!0)},o(w){B(n),m=!1},d(w){f[e].d(w),w&&H(l),_&&_.d(w),w&&H(o)}}}function qt(a,e,n){let{stores:l}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;st(l.page.notify);let _=!1,w=!1,v=null;return Ie(()=>{const S=l.page.subscribe(()=>{_&&(n(5,w=!0),n(6,v=document.title||"untitled page"))});return n(4,_=!0),S}),a.$$set=S=>{"stores"in S&&n(7,l=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,m=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,h=S.data_1)},a.$$.update=()=>{a.$$.dirty&384&&l.page.set(o)},[m,t,f,h,_,w,v,l,o]}class Ct extends nt{constructor(e){super(),at(this,e,qt,Vt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft={},me=[()=>V(()=>import("./chunks/0-92557c3f.js"),["./chunks/0-92557c3f.js","./components/pages/_layout.svelte-0d7c49b3.js","./chunks/index-8705c0e5.js","./assets/_layout-fb9b9124.css","./assets/app-fe7ce899.css"],import.meta.url),()=>V(()=>import("./chunks/1-69f3cb02.js"),["./chunks/1-69f3cb02.js","./components/error.svelte-af7e83bb.js","./chunks/index-8705c0e5.js","./chunks/singletons-95aacd88.js"],import.meta.url),()=>V(()=>import("./chunks/2-cc443af8.js"),["./chunks/2-cc443af8.js","./components/pages/_page.svelte-fc2d9e6b.js","./chunks/index-8705c0e5.js","./chunks/Typewriter-7a58b2a0.js","./chunks/preload-helper-41c905a7.js","./assets/Typewriter-85214208.css","./assets/_page-1733a8ec.css","./assets/app-fe7ce899.css"],import.meta.url),()=>V(()=>import("./chunks/3-8f03bc3c.js"),["./chunks/3-8f03bc3c.js","./components/pages/aboutme/_page.svelte-3895ffa1.js","./chunks/index-8705c0e5.js","./assets/_page-d1797381.css","./assets/app-fe7ce899.css"],import.meta.url),()=>V(()=>import("./chunks/4-e730f881.js"),["./chunks/4-e730f881.js","./components/pages/blog/_page.svelte-581869f1.js","./chunks/index-8705c0e5.js","./chunks/Typewriter-7a58b2a0.js","./chunks/preload-helper-41c905a7.js","./assets/Typewriter-85214208.css","./assets/_page-34bf67e1.css","./assets/app-fe7ce899.css"],import.meta.url),()=>V(()=>import("./chunks/5-36525357.js"),["./chunks/5-36525357.js","./components/pages/blog/book/_page.svelte-7830b8dc.js","./chunks/index-8705c0e5.js"],import.meta.url),()=>V(()=>import("./chunks/6-75dd484c.js"),["./chunks/6-75dd484c.js","./components/pages/blog/movies/_page.svelte-9a318878.js","./chunks/index-8705c0e5.js","./chunks/Typewriter-7a58b2a0.js","./chunks/preload-helper-41c905a7.js","./assets/Typewriter-85214208.css","./assets/_page-34bf67e1.css","./assets/app-fe7ce899.css"],import.meta.url),()=>V(()=>import("./chunks/7-5e9e2e9b.js"),["./chunks/7-5e9e2e9b.js","./components/pages/blog/tvshow/_page.svelte-9a318878.js","./chunks/index-8705c0e5.js","./chunks/Typewriter-7a58b2a0.js","./chunks/preload-helper-41c905a7.js","./assets/Typewriter-85214208.css","./assets/_page-34bf67e1.css","./assets/app-fe7ce899.css"],import.meta.url),()=>V(()=>import("./chunks/8-9ac66049.js"),["./chunks/8-9ac66049.js","./components/pages/blog/writings/_page.svelte-9a318878.js","./chunks/index-8705c0e5.js","./chunks/Typewriter-7a58b2a0.js","./chunks/preload-helper-41c905a7.js","./assets/Typewriter-85214208.css","./assets/_page-34bf67e1.css","./assets/app-fe7ce899.css"],import.meta.url),()=>V(()=>import("./chunks/9-6e06ccd6.js"),["./chunks/9-6e06ccd6.js","./components/pages/home/_page.svelte-7c8f8944.js","./chunks/index-8705c0e5.js","./chunks/Typewriter-7a58b2a0.js","./chunks/preload-helper-41c905a7.js","./assets/Typewriter-85214208.css","./assets/_page-0827dc77.css","./assets/app-fe7ce899.css"],import.meta.url)],Mt=[],Bt={"/":[2],"/aboutme":[3],"/blog":[4],"/blog/book":[5],"/blog/movies":[6],"/blog/tvshow":[7],"/blog/writings":[8],"/home":[9]},Gt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},Qe=class{constructor(e,n){this.status=e,this.location=n}};async function Ht(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([l,o])=>[l,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Jt=-1,Kt=-2,zt=-3,Wt=-4,Yt=-5,Xt=-6;function Zt(a){if(typeof a=="number")return l(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function l(o,m=!1){if(o===Jt)return;if(o===zt)return NaN;if(o===Wt)return 1/0;if(o===Yt)return-1/0;if(o===Xt)return-0;if(m)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const h=new Set;n[o]=h;for(let v=1;v<t.length;v+=1)h.add(l(t[v]));break;case"Map":const _=new Map;n[o]=_;for(let v=1;v<t.length;v+=2)_.set(l(t[v]),l(t[v+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const w=Object.create(null);n[o]=w;for(let v=1;v<t.length;v+=2)w[t[v]]=l(t[v+1]);break}else{const f=new Array(t.length);n[o]=f;for(let h=0;h<t.length;h+=1){const _=t[h];_!==Kt&&(f[h]=l(_))}}else{const f={};n[o]=f;for(const h in t){const _=t[h];f[h]=l(_)}}return n[o]}return l(0)}function Qt(a){return a.filter(e=>e!=null)}const Re=Ut(me,Mt,Bt,Ft),Oe=me[0],Pe=me[1];Oe();Pe();let ae={};try{ae=JSON.parse(sessionStorage[et])}catch{}function Se(a){ae[a]=ue()}function xt({target:a,base:e}){var Ge;const n=document.documentElement,l=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,_=!0,w=!1,v=!1,S=!1,$=!1,j,O=(Ge=history.state)==null?void 0:Ge[C];O||(O=Date.now(),history.replaceState({...history.state,[C]:O},"",location.href));const _e=ae[O];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let J,Ue,re;async function $e(){re=re||Promise.resolve(),await re,re=null;const r=new URL(location.href),i=se(r,!0);o=null,await je(i,r,[])}async function ge(r,{noScroll:i=!1,replaceState:c=!1,keepFocus:s=!1,state:d={},invalidateAll:u=!1},p,b){return typeof r=="string"&&(r=new URL(r,Ke(document))),le({url:r,scroll:i?ue():null,keepfocus:s,redirect_chain:p,details:{state:d,replaceState:c},nav_token:b,accepted:()=>{u&&($=!0)},blocked:()=>{},type:"goto"})}async function De(r){const i=se(r,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return o={id:i.id,promise:Ce(i).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function oe(...r){const c=Re.filter(s=>r.some(d=>s.exec(d))).map(s=>Promise.all([...s.layouts,s.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function je(r,i,c,s,d={},u){var b,y;Ue=d;let p=r&&await Ce(r);if(p||(p=await Be(i,{id:null},await te(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(r==null?void 0:r.url)||i,Ue!==d)return!1;if(p.type==="redirect")if(c.length>10||c.includes(i.pathname))p=await ie({status:500,error:await te(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ge(new URL(p.location,i).href,{},[...c,i.pathname],d),!1;else((y=(b=p.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await F.updated.check()&&await ee(i);if(l.length=0,$=!1,w=!0,s&&s.details){const{details:g}=s,k=g.replaceState?0:1;g.state[C]=O+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",i)}if(o=null,h?(t=p.state,p.props.page&&(p.props.page.url=i),j.$set(p.props)):Ve(p),s){const{scroll:g,keepfocus:k}=s,{activeElement:P}=document;await ce();const D=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!D&&await Le(),_){const L=i.hash&&document.getElementById(i.hash.slice(1));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();_=!0,p.props.page&&(J=p.props.page),u&&u(),w=!1}function Ve(r){var s;t=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),J=r.props.page,j=new Ct({target:a,props:{...r.props,stores:F},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((s=t.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(d=>d(c)),h=!0}async function x({url:r,params:i,branch:c,status:s,error:d,route:u,form:p}){let b="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);r.pathname=gt(r.pathname,b),r.search=r.search;const y={type:"loaded",state:{url:r,params:i,branch:c,error:d,route:u},props:{components:Qt(c).map(L=>L.node.component)}};p!==void 0&&(y.props.form=p);let g={},k=!J,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],N=t.branch[L];(E==null?void 0:E.data)!==(N==null?void 0:N.data)&&(k=!0),E&&(g={...g,...E.data},k&&(y.props[`data_${P}`]=g),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==d||p!==void 0&&p!==J.form||k)&&(y.props.page={error:d,params:i,route:{id:(u==null?void 0:u.id)??null},status:s,url:new URL(r),form:p??null,data:k?g:J.data}),y}async function we({loader:r,parent:i,url:c,params:s,route:d,server_data_node:u}){var g,k,P;let p=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((g=y.universal)!=null&&g.load){let D=function(...E){for(const N of E){const{href:U}=new URL(N,c);b.dependencies.add(U)}};const L={route:{get id(){return b.route=!0,d.id}},params:new Proxy(s,{get:(E,N)=>(b.params.add(N),E[N])}),data:(u==null?void 0:u.data)??null,url:vt(c,()=>{b.url=!0}),async fetch(E,N){let U;E instanceof Request?(U=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):U=E;const R=new URL(U,c).href;return D(R),h?It(U,R,N):Lt(U,N)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,i()}};p=await y.universal.load.call(null,L)??null,p=p?await Ht(p):null}return{node:y,loader:r,server:u,universal:(k=y.universal)!=null&&k.load?{type:"data",data:p,uses:b}:null,data:p??(u==null?void 0:u.data)??null,slash:((P=y.universal)==null?void 0:P.trailingSlash)??(u==null?void 0:u.slash)}}function qe(r,i,c,s,d){if($)return!0;if(!s)return!1;if(s.parent&&r||s.route&&i||s.url&&c)return!0;for(const u of s.params)if(d[u]!==t.params[u])return!0;for(const u of s.dependencies)if(l.some(p=>p(new URL(u))))return!0;return!1}function ye(r,i){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?i??null:null}async function Ce({id:r,invalidating:i,url:c,params:s,route:d}){if((o==null?void 0:o.id)===r)return o.promise;const{errors:u,layouts:p,leaf:b}=d,y=[...p,b];u.forEach(R=>R==null?void 0:R().catch(()=>{})),y.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let g=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?d.id!==t.route.id:!1,D=y.reduce((R,A,T)=>{var W;const I=t.branch[T],z=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||qe(R.some(Boolean),P,k,(W=I.server)==null?void 0:W.uses,s));return R.push(z),R},[]);if(D.some(Boolean)){try{g=await xe(c,D)}catch(R){return ie({status:500,error:await te(R,{url:c,params:s,route:{id:d.id}}),url:c,route:d})}if(g.type==="redirect")return g}const L=g==null?void 0:g.nodes;let E=!1;const N=y.map(async(R,A)=>{var W;if(!R)return;const T=t.branch[A],I=L==null?void 0:L[A];if((!I||I.type==="skip")&&R[1]===(T==null?void 0:T.loader)&&!qe(E,P,k,(W=T.universal)==null?void 0:W.uses,s))return T;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return we({loader:R[1],url:c,params:s,route:d,parent:async()=>{var Je;const He={};for(let be=0;be<A;be+=1)Object.assign(He,(Je=await N[be])==null?void 0:Je.data);return He},server_data_node:ye(I===void 0&&R[0]?{type:"skip"}:I??null,T==null?void 0:T.server)})});for(const R of N)R.catch(()=>{});const U=[];for(let R=0;R<y.length;R+=1)if(y[R])try{U.push(await N[R])}catch(A){if(A instanceof Qe)return{type:"redirect",location:A.location};let T=500,I;if(L!=null&&L.includes(A))T=A.status??T,I=A.error;else if(A instanceof Ae)T=A.status,I=A.body;else{if(await F.updated.check())return await ee(c);I=await te(A,{params:s,url:c,route:{id:d.id}})}const z=await Fe(R,U,u);return z?await x({url:c,params:s,branch:U.slice(0,z.idx).concat(z.node),status:T,error:I,route:d}):await Be(c,{id:d.id},I,T)}else U.push(void 0);return await x({url:c,params:s,branch:U,status:200,error:null,route:d,form:i?void 0:null})}async function Fe(r,i,c){for(;r--;)if(c[r]){let s=r;for(;!i[s];)s-=1;try{return{idx:s+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:r,error:i,url:c,route:s}){const d={},u=await Oe();let p=null;if(u.has_server_load)try{const g=await xe(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;p=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ee(c)}const b=await we({loader:Oe,url:c,params:d,route:s,parent:()=>Promise.resolve({}),server_data_node:ye(p)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await x({url:c,params:d,branch:[b,y],status:r,error:i,route:null})}function se(r,i){if(We(r,e))return;const c=wt(r.pathname.slice(e.length)||"/");for(const s of Re){const d=s.exec(c);if(d)return{id:r.pathname+r.search,invalidating:i,route:s,params:yt(d),url:r}}}function Me({url:r,type:i,intent:c,delta:s}){var b,y;let d=!1;const u={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:r},willUnload:!c,type:i};s!==void 0&&(u.delta=s);const p={...u,cancel:()=>{d=!0}};return v||m.before_navigate.forEach(g=>g(p)),d?null:u}async function le({url:r,scroll:i,keepfocus:c,redirect_chain:s,details:d,type:u,delta:p,nav_token:b,accepted:y,blocked:g}){const k=se(r,!1),P=Me({url:r,type:u,delta:p,intent:k});if(!P){g();return}Se(O),y(),v=!0,h&&F.navigating.set(P),await je(k,r,s,{scroll:i,keepfocus:c,details:d},b,()=>{v=!1,m.after_navigate.forEach(D=>D(P)),F.navigating.set(null)})}async function Be(r,i,c,s){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await ie({status:s,error:c,url:r,route:i}):await ee(r)}function ee(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;n.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(r),r=setTimeout(()=>{s(p,2)},20)});function i(u){s(u.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(oe(new URL(p.target.href).pathname),c.unobserve(p.target))},{threshold:0});function s(u,p){const b=ze(u,n);if(!b)return;const{url:y,external:g}=Ee(b,e);if(g)return;const k=fe(b);k.reload||(p<=k.preload_data?De(y):p<=k.preload_code&&oe(y.pathname))}function d(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:p,external:b}=Ee(u,e);if(b)continue;const y=fe(u);y.reload||(y.preload_code===Ye.viewport&&c.observe(u),y.preload_code===Ye.eager&&oe(p.pathname))}}m.after_navigate.push(d),d()}return{after_navigate:r=>{Ie(()=>(m.after_navigate.push(r),()=>{const i=m.after_navigate.indexOf(r);m.after_navigate.splice(i,1)}))},before_navigate:r=>{Ie(()=>(m.before_navigate.push(r),()=>{const i=m.before_navigate.indexOf(r);m.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(w||!h)&&(_=!1)},goto:(r,i={})=>ge(r,i,[]),invalidate:r=>{if(typeof r=="function")l.push(r);else{const{href:i}=new URL(r,location.href);l.push(c=>c.href===i)}return $e()},invalidateAll:()=>($=!0,$e()),preload_data:async r=>{const i=new URL(r,Ke(document));await De(i)},preload_code:oe,apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:c,route:s}=t;if(!s)return;const d=await Fe(t.branch.length,c,s.errors);if(d){const u=await x({url:i,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:r.status??500,error:r.error,route:s});t=u.state,j.$set(u.props),ce().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const i={form:r.data,page:{...J,form:r.data,status:r.status}};j.$set(i),r.type==="success"&&ce().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var s;let c=!1;if(!v){const d={from:{params:t.params,route:{id:((s=t.route)==null?void 0:s.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(u=>u(d))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(O);try{sessionStorage[et]=JSON.stringify(ae)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=ze(i.composedPath()[0],n);if(!c)return;const{url:s,external:d,target:u}=Ee(c,e);if(!s)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const p=fe(c);if(!(c instanceof SVGAElement)&&s.protocol!==location.protocol&&!(s.protocol==="https:"||s.protocol==="http:"))return;if(d||p.reload){Me({url:s,type:"link"})||i.preventDefault(),v=!0;return}const[y,g]=s.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){S=!0,Se(O),t.url=s,F.page.set({...J,url:s}),F.page.notify();return}le({url:s,scroll:p.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:s.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),s=i.submitter;if(((s==null?void 0:s.formMethod)||c.method)!=="get")return;const u=new URL((s==null?void 0:s.hasAttribute("formaction"))&&(s==null?void 0:s.formAction)||c.action);if(We(u,e))return;const p=i.target,{noscroll:b,reload:y}=fe(p);if(y)return;i.preventDefault(),i.stopPropagation();const g=new FormData(p),k=s==null?void 0:s.getAttribute("name");k&&g.append(k,(s==null?void 0:s.getAttribute("value"))??""),u.search=new URLSearchParams(g).toString(),le({url:u,scroll:b?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[C]){if(i.state[C]===O)return;const s=i.state[C]-O;le({url:new URL(location.href),scroll:ae[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[C]},blocked:()=>{history.go(-s)},type:"popstate",delta:s})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[C]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&F.navigating.set(null)})},_hydrate:async({status:r=200,error:i,node_ids:c,params:s,route:d,data:u,form:p})=>{f=!0;const b=new URL(location.href);({params:s={},route:d={id:null}}=se(b,!1)||{});let y;try{const g=c.map(async(k,P)=>{const D=u[P];return we({loader:me[k],url:b,params:s,route:d,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await g[E]).data);return L},server_data_node:ye(D)})});y=await x({url:b,params:s,branch:await Promise.all(g),status:r,error:i,form:p,route:Re.find(({id:k})=>k===d.id)??null})}catch(g){if(g instanceof Qe){await ee(new URL(g.location,location.href));return}y=await ie({status:g instanceof Ae?g.status:500,error:await te(g,{url:b,params:s,route:d}),url:b,route:d})}Ve(y)}}}async function xe(a,e){var m;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const l=await he(n.href),o=await l.json();if(!l.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function te(a,e){return a instanceof Ae?a.body:Gt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(l=>{setTimeout(()=>{var o;l((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function on({env:a,hydrate:e,paths:n,target:l,version:o}){ht(n),_t(o);const m=xt({target:l,base:n.base});mt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{on as start};
