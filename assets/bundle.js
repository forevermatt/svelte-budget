var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function c(t,n,e){t.$$.on_destroy.push(i(n,e))}function s(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(){return d("")}function m(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function g(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){n=""+n,t.data!==n&&(t.data=n)}function b(t,n){(null!=n||t.value)&&(t.value=n)}let v;function w(t){v=t}function x(){if(!v)throw new Error("Function called outside component initialization");return v}function E(){const t=x();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}function _(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const k=[],A=[],C=[],j=[],O=Promise.resolve();let N=!1;function S(t){C.push(t)}let R=!1;const I=new Set;function L(){if(!R){R=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];w(n),D(n.$$)}for(k.length=0;A.length;)A.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];I.has(n)||(I.add(n),n())}C.length=0}while(k.length);for(;j.length;)j.pop()();N=!1,R=!1,I.clear()}}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const q=new Set;let V;function T(){V={r:0,c:[],p:V}}function M(){V.r||r(V.c),V=V.p}function P(t,n){t&&t.i&&(q.delete(t),t.i(n))}function B(t,n,e,r){if(t&&t.o){if(q.has(t))return;q.add(t),V.c.push(()=>{q.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function F(t){t&&t.c()}function J(t,e,u){const{fragment:i,on_mount:c,on_destroy:s,after_update:a}=t.$$;i&&i.m(e,u),S(()=>{const e=c.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(S)}function z(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function H(t,n){-1===t.$$.dirty[0]&&(k.push(t),N||(N=!0,O.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function U(n,o,u,i,c,s,a=[-1]){const f=v;w(n);const d=o.props||{},p=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:a};let h=!1;if(p.ctx=u?u(n,d,(t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&H(n,t)),e}):[],p.update(),h=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();o.intro&&P(n.$$.fragment),J(n,o.target,o.anchor),L()}w(f)}class W{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const G=Array.isArray,K=[];function Q(t,n){return{subscribe:X(t,n).subscribe}}function X(n,e=t){let r;const o=[];function i(t){if(u(n,t)&&(n=t,r)){const t=!K.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),K.push(e,n)}if(t){for(let t=0;t<K.length;t+=2)K[t][0](K[t+1]);K.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(u,c=t){const s=[u,c];return o.push(s),1===o.length&&(r=e(i)||t),u(n),()=>{const t=o.indexOf(s);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function Y(n,e,u){const c=!Array.isArray(n),s=c?[n]:n,a=e.length<2;return Q(u,n=>{let u=!1;const l=[];let f=0,d=t;const p=()=>{if(f)return;d();const r=e(c?l[0]:l,n);a?n(r):d=o(r)?r:t},h=s.map((t,n)=>i(t,t=>{l[n]=t,f&=~(1<<n),u&&p()},()=>{f|=1<<n}));return u=!0,p(),function(){r(h),d()}})}var Z="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),tt=new Uint8Array(16);function nt(){if(!Z)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Z(tt)}for(var et=[],rt=0;rt<256;++rt)et[rt]=(rt+256).toString(16).substr(1);function ot(t,n,e){var r=n&&e||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||nt)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n)for(var u=0;u<16;++u)n[r+u]=o[u];return n||function(t,n){var e=n||0,r=et;return[r[t[e++]],r[t[e++]],r[t[e++]],r[t[e++]],"-",r[t[e++]],r[t[e++]],"-",r[t[e++]],r[t[e++]],"-",r[t[e++]],r[t[e++]],"-",r[t[e++]],r[t[e++]],r[t[e++]],r[t[e++]],r[t[e++]],r[t[e++]]].join("")}(o)}const ut=X(""),it=()=>ut.set("");function ct(t){let n,e,r,o,u;return{c(){n=f("div"),e=f("button"),e.innerHTML='<span aria-hidden="true">×</span>',r=p(),o=d(t[0]),$(e,"type","button"),$(e,"class","close"),$(e,"aria-label","Close"),$(n,"class","alert alert-danger keep-line-breaks svelte-byhjk5"),$(n,"role","alert")},m(t,i,c){a(t,n,i),s(n,e),s(n,r),s(n,o),c&&u(),u=m(e,"click",it)},p(t,n){1&n&&y(o,t[0])},d(t){t&&l(n),u()}}}function st(n){let e,r=n[0]&&ct(n);return{c(){r&&r.c(),e=h()},m(t,n){r&&r.m(t,n),a(t,e,n)},p(t,[n]){t[0]?r?r.p(t,n):(r=ct(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&l(e)}}}function at(t,n,e){let r;return c(t,ut,t=>e(0,r=t)),[r]}window.onunhandledrejection=t=>{let n=t.reason;ut.set(n.message)};class lt extends W{constructor(t){super(),U(this,t,at,st,u,{})}}const ft=X([]),dt=()=>{ft.set((t=>{const n=localStorage.getItem(t),e=JSON.parse(n);return G(e)?e:[]})("categories"))},pt=()=>{return t="categories",n=function(t){let n;return i(t,t=>n=t)(),n}(ft),void localStorage.setItem(t,JSON.stringify(n));var t,n},ht=(t,n)=>{((t,n,e)=>{e.update(e=>{const r=e.find(n=>n.uuid===t),o=Object.assign({},r,n);for(let n=0;n<e.length;n++)if(e[n].uuid===t){e[n]=o;break}return e})})(t,n,ft),pt()};function mt(t){let n,e;var r=t[0];if(r){var o=new r({});o.$on("routeEvent",t[10])}return{c(){o&&F(o.$$.fragment),n=h()},m(t,r){o&&J(o,t,r),a(t,n,r),e=!0},p(t,e){if(r!==(r=t[0])){if(o){T();const t=o;B(t.$$.fragment,1,0,()=>{z(t,1)}),M()}r?((o=new r({})).$on("routeEvent",t[10]),F(o.$$.fragment),P(o.$$.fragment,1),J(o,n.parentNode,n)):o=null}},i(t){e||(o&&P(o.$$.fragment,t),e=!0)},o(t){o&&B(o.$$.fragment,t),e=!1},d(t){t&&l(n),o&&z(o,t)}}}function gt(t){let n,e;var r=t[0];function o(t){return{props:{params:t[1]}}}if(r){var u=new r(o(t));u.$on("routeEvent",t[9])}return{c(){u&&F(u.$$.fragment),n=h()},m(t,r){u&&J(u,t,r),a(t,n,r),e=!0},p(t,e){const i={};if(2&e&&(i.params=t[1]),r!==(r=t[0])){if(u){T();const t=u;B(t.$$.fragment,1,0,()=>{z(t,1)}),M()}r?((u=new r(o(t))).$on("routeEvent",t[9]),F(u.$$.fragment),P(u.$$.fragment,1),J(u,n.parentNode,n)):u=null}else r&&u.$set(i)},i(t){e||(u&&P(u.$$.fragment,t),e=!0)},o(t){u&&B(u.$$.fragment,t),e=!1},d(t){t&&l(n),u&&z(u,t)}}}function $t(t){let n,e,r,o;const u=[gt,mt],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=u[n](t),{c(){e.c(),r=h()},m(t,e){i[n].m(t,e),a(t,r,e),o=!0},p(t,[o]){let s=n;n=c(t),n===s?i[n].p(t,o):(T(),B(i[s],1,1,()=>{i[s]=null}),M(),e=i[n],e||(e=i[n]=u[n](t),e.c()),P(e,1),e.m(r.parentNode,r))},i(t){o||(P(e),o=!0)},o(t){B(e),o=!1},d(t){i[n].d(t),t&&l(r)}}}function yt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let r="";return e>-1&&(r=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:r}}const bt=Q(yt(),(function(t){const n=()=>{t(yt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));Y(bt,t=>t.location),Y(bt,t=>t.querystring);function vt(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");return wt(()=>{window.location.hash=("#"==t.charAt(0)?"":"#")+t})}function wt(t){return new Promise(n=>{setTimeout(()=>{n(t())},0)})}function xt(n,e,r){let o,u=t;c(n,bt,t=>r(4,o=t)),n.$$.on_destroy.push(()=>u());let{routes:i={}}=e,{prefix:s=""}=e;class a{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:r}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,u,i=[],c="",s=t.split("/");for(s[0]||s.shift();o=s.shift();)"*"===(e=o[0])?(i.push("wild"),c+="/(.*)"):":"===e?(r=o.indexOf("?",1),u=o.indexOf(".",1),i.push(o.substring(1,~r?r:~u?u:o.length)),c+=~r&&!~u?"(?:/([^/]+?))?":"/([^/]+?)",~u&&(c+=(~r?"?":"")+"\\"+o.substring(u))):c+="/"+o;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=e,this._keys=r}match(t){s&&t.startsWith(s)&&(t=t.substr(s.length)||"/");const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let r=0;for(;r<this._keys.length;)e[this._keys[r]]=n[++r]||null;return e}checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](t))return!1;return!0}}const l=[];i instanceof Map?i.forEach((t,n)=>{l.push(new a(n,t))}):Object.keys(i).forEach(t=>{l.push(new a(t,i[t]))});let f=null,d=null;const p=E(),h=(t,n)=>{setTimeout(()=>{p(t,n)},0)};return n.$set=t=>{"routes"in t&&r(2,i=t.routes),"prefix"in t&&r(3,s=t.prefix)},n.$$.update=()=>{if(17&n.$$.dirty){r(0,f=null);let t=0;for(;!f&&t<l.length;){const n=l[t].match(o.location);if(n){const e={component:l[t].component,name:l[t].component.name,location:o.location,querystring:o.querystring,userData:l[t].userData};if(!l[t].checkConditions(e)){h("conditionsFailed",e);break}r(0,f=l[t].component),n&&"object"==typeof n&&Object.keys(n).length?r(1,d=n):r(1,d=null),h("routeLoaded",e)}t++}}},[f,d,i,s,o,a,l,p,h,function(t){_(n,t)},function(t){_(n,t)}]}class Et extends W{constructor(t){super(),U(this,t,xt,$t,u,{routes:2,prefix:3})}}function _t(t,n,e){const r=t.slice();return r[1]=n[e],r}function kt(t){let n,e,r,o,u=t[1].name+"",i=t[1].amount/100+"";return{c(){n=f("li"),e=d(u),r=d(": $"),o=d(i)},m(t,u){a(t,n,u),s(n,e),s(n,r),s(n,o)},p(t,n){1&n&&u!==(u=t[1].name+"")&&y(e,u),1&n&&i!==(i=t[1].amount/100+"")&&y(o,i)},d(t){t&&l(n)}}}function At(n){let e,r,o,u,i,c=n[0],s=[];for(let t=0;t<c.length;t+=1)s[t]=kt(_t(n,c,t));return{c(){e=f("h2"),e.textContent="Budget",r=p(),o=f("ul");for(let t=0;t<s.length;t+=1)s[t].c();u=p(),i=f("a"),i.textContent="Add new category",$(i,"href","#/category/new")},m(t,n){a(t,e,n),a(t,r,n),a(t,o,n);for(let t=0;t<s.length;t+=1)s[t].m(o,null);a(t,u,n),a(t,i,n)},p(t,[n]){if(1&n){let e;for(c=t[0],e=0;e<c.length;e+=1){const r=_t(t,c,e);s[e]?s[e].p(r,n):(s[e]=kt(r),s[e].c(),s[e].m(o,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=c.length}},i:t,o:t,d(t){t&&l(e),t&&l(r),t&&l(o),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(s,t),t&&l(u),t&&l(i)}}}function Ct(t,n,e){let r;return c(t,ft,t=>e(0,r=t)),[r]}function jt(n){let e,o,u,i,c,h,v,w=n[1].name+"",x=!1;function E(){x=!0,n[6].call(h)}return{c(){e=f("h2"),o=d("Amount for "),u=d(w),i=p(),c=f("form"),h=f("input"),$(h,"type","number"),$(h,"class","form-control"),$(h,"step","0.01"),$(h,"min","0")},m(t,l,f){a(t,e,l),s(e,o),s(e,u),a(t,i,l),a(t,c,l),s(c,h),b(h,n[0]),f&&r(v),v=[m(h,"input",E),m(c,"submit",g(n[2]))]},p(t,[n]){2&n&&w!==(w=t[1].name+"")&&y(u,w),!x&&1&n&&b(h,t[0]),x=!1},i:t,o:t,d(t){t&&l(e),t&&l(i),t&&l(c),r(v)}}}function Ot(t,n,e){let r;c(t,ft,t=>e(5,r=t));let o,u,{params:i}=n,s=0;return t.$set=t=>{"params"in t&&e(3,i=t.params)},t.$$.update=()=>{8&t.$$.dirty&&e(4,o=i.uuid),48&t.$$.dirty&&e(1,u=r.find(t=>t.uuid===o)||{})},[s,u,function(){ht(o,{amount:100*s}),vt("/budget")},i,o,r,function(){var t;t=this.value,s=""===t?void 0:+t,e(0,s)}]}function Nt(n){let e,o,u,i,c;return{c(){e=f("h2"),e.textContent="New Category",o=p(),u=f("form"),i=f("input"),$(i,"class","form-control"),$(i,"placeholder","New category name")},m(t,l,f){a(t,e,l),a(t,o,l),a(t,u,l),s(u,i),b(i,n[0]),f&&r(c),c=[m(i,"input",n[2]),m(u,"submit",g(n[1]))]},p(t,[n]){1&n&&i.value!==t[0]&&b(i,t[0])},i:t,o:t,d(t){t&&l(e),t&&l(o),t&&l(u),r(c)}}}function St(t,n,e){let r="";return[r,function(){vt(`/category/${(t=>{const n={uuid:ot(),name:t};var e;return e=n,ft.update(t=>[e,...t]),pt(),n})(r).uuid}/amount`)},function(){r=this.value,e(0,r)}]}function Rt(t){return function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");wt(()=>{const n=("#"==t.charAt(0)?"":"#")+t;try{window.history.replaceState(void 0,void 0,n)}catch(t){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))})}("/budget"),[]}const It={"/":class extends W{constructor(t){super(),U(this,t,Rt,null,u,{})}},"/budget":class extends W{constructor(t){super(),U(this,t,Ct,At,u,{})}},"/category/new":class extends W{constructor(t){super(),U(this,t,St,Nt,u,{})}},"/category/:uuid/amount":class extends W{constructor(t){super(),U(this,t,Ot,jt,u,{params:3})}}};function Lt(n){let e,r,o;const u=new lt({}),i=new Et({props:{routes:It}});return{c(){e=f("div"),F(u.$$.fragment),r=p(),F(i.$$.fragment),$(e,"class","container my-3")},m(t,n){a(t,e,n),J(u,e,null),s(e,r),J(i,e,null),o=!0},p:t,i(t){o||(P(u.$$.fragment,t),P(i.$$.fragment,t),o=!0)},o(t){B(u.$$.fragment,t),B(i.$$.fragment,t),o=!1},d(t){t&&l(e),z(u),z(i)}}}function Dt(t){var n;return n=async()=>{dt()},x().$$.on_mount.push(n),[]}return new class extends W{constructor(t){super(),U(this,t,Dt,Lt,u,{})}}({target:document.body})}();