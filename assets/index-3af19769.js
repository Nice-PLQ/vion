import{_ as tt,r as et,o as S,c as D,a as I,w as H,a5 as nt,b as E,F as rt,h as ot,e as A,L,t as it}from"./index-993d6fae.js";var ut=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ct(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var B={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(b,m){(function(T,_){b.exports=_()})(ut,function(){return function(){var N={686:function(u,c,t){t.d(c,{default:function(){return q}});var a=t(279),f=t.n(a),l=t(370),h=t.n(l),y=t(817),g=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=g()(n);return d("cut"),e},p=v;function w(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var z=function(n,e){var r=w(n);e.container.appendChild(r);var o=g()(r);return d("copy"),r.remove(),o},V=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=z(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=z(n.value,e):(r=g()(n),d("copy")),r},P=V;function O(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(i)}var U=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,s=n.target,x=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(s!==void 0)if(s&&O(s)==="object"&&s.nodeType===1){if(r==="copy"&&s.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(s.hasAttribute("readonly")||s.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(x)return P(x,{container:o});if(s)return r==="cut"?p(s):P(s,{container:o})},Y=U;function C(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(e){return typeof e}:C=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(i)}function $(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function F(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function Q(i,n,e){return n&&F(i.prototype,n),e&&F(i,e),i}function G(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&R(i,n)}function R(i,n){return R=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},R(i,n)}function X(i){var n=W();return function(){var r=k(i),o;if(n){var s=k(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return J(this,o)}}function J(i,n){return n&&(C(n)==="object"||typeof n=="function")?n:K(i)}function K(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function W(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(i){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(i)}function M(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var Z=function(i){G(e,i);var n=X(e);function e(r,o){var s;return $(this,e),s=n.call(this),s.resolveOptions(o),s.listenClick(r),s}return Q(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=C(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var s=this;this.listener=h()(o,"click",function(x){return s.onClick(x)})}},{key:"onClick",value:function(o){var s=o.delegateTarget||o.currentTarget,x=this.action(s)||"copy",j=Y({action:x,container:this.container,target:this.target(s),text:this.text(s)});this.emit(j?"success":"error",{action:x,text:j,trigger:s,clearSelection:function(){s&&s.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return M("action",o)}},{key:"defaultTarget",value:function(o){var s=M("target",o);if(s)return document.querySelector(s)}},{key:"defaultText",value:function(o){return M("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return P(o,s)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],s=typeof o=="string"?[o]:o,x=!!document.queryCommandSupported;return s.forEach(function(j){x=x&&!!document.queryCommandSupported(j)}),x}}]),e}(f()),q=Z},828:function(u){var c=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(f,l){for(;f&&f.nodeType!==c;){if(typeof f.matches=="function"&&f.matches(l))return f;f=f.parentNode}}u.exports=a},438:function(u,c,t){var a=t(828);function f(y,g,d,v,p){var w=h.apply(this,arguments);return y.addEventListener(d,w,p),{destroy:function(){y.removeEventListener(d,w,p)}}}function l(y,g,d,v,p){return typeof y.addEventListener=="function"?f.apply(null,arguments):typeof d=="function"?f.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(w){return f(w,g,d,v,p)}))}function h(y,g,d,v){return function(p){p.delegateTarget=a(p.target,g),p.delegateTarget&&v.call(y,p)}}u.exports=l},879:function(u,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(u,c,t){var a=t(879),f=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!a.string(v))throw new TypeError("Second argument must be a String");if(!a.fn(p))throw new TypeError("Third argument must be a Function");if(a.node(d))return h(d,v,p);if(a.nodeList(d))return y(d,v,p);if(a.string(d))return g(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(w){w.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(w){w.removeEventListener(v,p)})}}}function g(d,v,p){return f(document.body,d,v,p)}u.exports=l},817:function(u){function c(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),h=document.createRange();h.selectNodeContents(t),l.removeAllRanges(),l.addRange(h),a=l.toString()}return a}u.exports=c},279:function(u){function c(){}c.prototype={on:function(t,a,f){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:a,ctx:f}),this},once:function(t,a,f){var l=this;function h(){l.off(t,h),a.apply(f,arguments)}return h._=a,this.on(t,h,f)},emit:function(t){var a=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),l=0,h=f.length;for(l;l<h;l++)f[l].fn.apply(f[l].ctx,a);return this},off:function(t,a){var f=this.e||(this.e={}),l=f[t],h=[];if(l&&a)for(var y=0,g=l.length;y<g;y++)l[y].fn!==a&&l[y].fn._!==a&&h.push(l[y]);return h.length?f[t]=h:delete f[t],this}},u.exports=c,u.exports.TinyEmitter=c}},T={};function _(u){if(T[u])return T[u].exports;var c=T[u]={exports:{}};return N[u](c,c.exports,_),c.exports}return function(){_.n=function(u){var c=u&&u.__esModule?function(){return u.default}:function(){return u};return _.d(c,{a:c}),c}}(),function(){_.d=function(u,c){for(var t in c)_.o(c,t)&&!_.o(u,t)&&Object.defineProperty(u,t,{enumerable:!0,get:c[t]})}}(),function(){_.o=function(u,c){return Object.prototype.hasOwnProperty.call(u,c)}}(),_(686)}().default})})(B);var at=B.exports;const st=ct(at);const ft={data(){return{}},computed:{iconList(){const{version:b,...m}=nt;return m}},methods:{handleSelect(b){const m=new st(event.currentTarget,{text:()=>`<${b.replace("Q","")} />`});m.on("success",()=>{m.off("error"),m.off("success"),m.destroy(),this.$toast.success("已复制到剪贴板")}),m.on("error",()=>{m.off("error"),m.off("success"),m.destroy(),this.$toast.error("复制失败")}),m.onClick(event)}}},lt={class:"v-icon-list"},dt=["onClick"],pt={class:"v-icon_name"},yt={class:"v-icon-size"},vt=E("div",null,"32px",-1),ht=E("div",null,"48px",-1),mt=E("div",null,"56px",-1),gt=E("div",null,"64px",-1);function bt(b,m,N,T,_,u){const c=et("demo-doc");return S(),D("div",null,[I(c,{title:"图标类型"},{default:H(()=>[E("ul",lt,[(S(!0),D(rt,null,ot(u.iconList,t=>(S(),D("li",{class:"v-icon_item",key:t.name,onClick:a=>u.handleSelect(t.name)},[(S(),A(L(t))),E("div",pt,it(t.name.replace("Q","")),1)],8,dt))),128))])]),_:1}),I(c,{title:"图标大小"},{default:H(()=>[E("ul",yt,[E("li",null,[(S(),A(L(u.iconList.Emoji),{size:"32px"})),vt]),E("li",null,[(S(),A(L(u.iconList.Emoji),{size:"48px"})),ht]),E("li",null,[(S(),A(L(u.iconList.Emoji),{size:"56px"})),mt]),E("li",null,[(S(),A(L(u.iconList.Emoji),{size:"64px"})),gt])])]),_:1})])}const Et=tt(ft,[["render",bt]]);export{Et as default};