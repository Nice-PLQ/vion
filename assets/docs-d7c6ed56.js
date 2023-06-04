import{_ as B,v as he,r as P,o as b,c as w,b as E,a as M,F as U,h as F,n as H,w as j,g as ee,t as N,f as Z,a2 as de,p as q,K as S,E as $,a3 as te,G as me,a4 as fe,x as re,y as ne,j as f,k as x,l as ve,m as pe,a1 as _e,J as Ee,a0 as ge}from"./index-5ac088ad.js";const be={props:["navList","searchVisible"],data(){return{matchedNav:[],keyword:"",current:-1,version:he,downloadCount:"",showVersionList:!1}},mounted(){document.addEventListener("click",()=>{this.matchedNav.length&&this.handleClear(),this.showVersionList&&(this.showVersionList=!1)},!1)},methods:{handleInput(a){const{value:i}=a.target;this.keyword=i;const l=[];this.navList.forEach(h=>{h.children.forEach(c=>{c.type===2&&(c.name.toLowerCase().includes(i)||c.label.includes(i))&&l.push(c)})}),this.matchedNav=l,l.length===0&&(this.current=-1)},handleKeyUp(a){const{code:i}=a;if(i==="ArrowDown"?(this.current+=1,this.current>this.matchedNav.length-1&&(this.current=0)):i==="ArrowUp"&&(this.current-=1,this.current<0&&(this.current=this.matchedNav.length-1)),i==="Enter"&&this.current!==-1){const l=this.matchedNav[this.current];this.$router.push(l.path).catch(()=>{}),this.handleClear()}},handleClear(){this.matchedNav=[],this.keyword="",this.current=-1},handleToggleShow(){this.$emit("onVisibleChange")}}},we={class:"header"},Ce={class:"header-left"},Re=de('<a href="###"><svg width="37px" viewBox="0 0 137 121" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stop-color="#65B687" offset="0%"></stop><stop stop-color="#65B687" offset="100%"></stop></linearGradient></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(0.614194, 0.000000)"><path d="M4.76825426,36.39178 L64.6796577,116.702201 C66.0006013,118.472908 68.5068793,118.837514 70.2775862,117.51657 C70.586905,117.285819 70.8612037,117.01152 71.0919548,116.702201 L131.003358,36.39178 C132.324302,34.621073 131.959697,32.1147951 130.18899,30.7938515 C129.498089,30.2784412 128.659179,30 127.79721,30 L104.122175,30 C103.808512,30 103.513022,30.1471709 103.324045,30.3975147 L68.6852185,76.2845819 C68.3524751,76.7253769 67.7253982,76.81297 67.2846032,76.4802265 C67.2102252,76.4240807 67.1440605,76.3578138 67.0880296,76.2833492 L32.5621193,30.3987473 C32.3732021,30.1476782 32.0772663,30 31.7630603,30 L7.97440281,30 C5.76526381,30 3.97440281,31.790861 3.97440281,34 C3.97440281,34.8619694 4.25284397,35.7008795 4.76825426,36.39178 Z" fill="url(#linearGradient-1)"></path><circle fill="#39485C" cx="67.3858063" cy="15" r="15"></circle></g></g></svg></a>',1),Ae={key:0,class:"search"},Pe=["value"],Me={key:0,class:"popup-list"},Le={class:"header-right"},Ie={class:"version-select"},Ne={class:"version"},ye=E("a",{class:"code-group",href:"https://github.com/Nice-PLQ/vion",target:"_blank"},[E("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30"},[E("path",{d:"M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z",fill:"#ffffff"})])],-1);function Te(a,i,l,h,c,d){const n=P("v-icon"),e=P("router-link");return b(),w("header",we,[E("div",Ce,[Re,l.searchVisible?(b(),w("div",Ae,[M(n,{name:"Search"}),E("input",{type:"text",placeholder:"搜索组件...",value:c.keyword,onInput:i[0]||(i[0]=(...t)=>d.handleInput&&d.handleInput(...t)),onKeyup:i[1]||(i[1]=(...t)=>d.handleKeyUp&&d.handleKeyUp(...t))},null,40,Pe),c.matchedNav.length>0?(b(),w("ul",Me,[(b(!0),w(U,null,F(c.matchedNav,(t,r)=>(b(),w("li",{key:r,onClick:i[2]||(i[2]=(...o)=>d.handleClear&&d.handleClear(...o)),class:H({on:r===c.current})},[M(e,{to:t.path},{default:j(()=>[ee(N(t.name)+" "+N(t.label),1)]),_:2},1032,["to"])],2))),128))])):Z("",!0)])):Z("",!0)]),E("div",Le,[E("div",Ie,[E("span",Ne,N(c.version),1)]),ye])])}const De=B(be,[["render",Te]]);const Oe={},Se={class:"main"};function Be(a,i){const l=P("router-view");return b(),w("div",Se,[M(l)])}const ke=B(Oe,[["render",Be]]);/*!
 * qrcode.vue v3.4.0
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var z=function(){return z=Object.assign||function(i){for(var l,h=1,c=arguments.length;h<c;h++){l=arguments[h];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(i[d]=l[d])}return i},z.apply(this,arguments)},y;(function(a){var i=function(){function n(e,t,r,o){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var s=[],u=0;u<this.size;u++)s.push(!1);for(var u=0;u<this.size;u++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();var m=this.addEccAndInterleave(r);if(this.drawCodewords(m),o==-1)for(var v=1e9,u=0;u<8;u++){this.applyMask(u),this.drawFormatBits(u);var g=this.getPenaltyScore();g<v&&(o=u,v=g),this.applyMask(u)}c(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return n.encodeText=function(e,t){var r=a.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=a.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,o,s,u){if(r===void 0&&(r=1),o===void 0&&(o=40),s===void 0&&(s=-1),u===void 0&&(u=!0),!(n.MIN_VERSION<=r&&r<=o&&o<=n.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");var m,v;for(m=r;;m++){var g=n.getNumDataCodewords(m,t)*8,C=d.getTotalBits(e,m);if(C<=g){v=C;break}if(m>=o)throw new RangeError("Data too long")}for(var _=0,R=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];_<R.length;_++){var A=R[_];u&&v<=n.getNumDataCodewords(m,A)*8&&(t=A)}for(var p=[],L=0,T=e;L<T.length;L++){var I=T[L];l(I.mode.modeBits,4,p),l(I.numChars,I.mode.numCharCountBits(m),p);for(var O=0,k=I.getData();O<k.length;O++){var ue=k[O];p.push(ue)}}c(p.length==v);var Q=n.getNumDataCodewords(m,t)*8;c(p.length<=Q),l(0,Math.min(4,Q-p.length),p),l(0,(8-p.length%8)%8,p),c(p.length%8==0);for(var X=236;p.length<Q;X^=253)l(X,8,p);for(var V=[];V.length*8<p.length;)V.push(0);return p.forEach(function(ce,J){return V[J>>>3]|=ce<<7-(J&7)}),new n(m,t,V,s)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var o=0;o<r;o++)e==0&&o==0||e==0&&o==r-1||e==r-1&&o==0||this.drawAlignmentPattern(t[e],t[o]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,o=0;o<10;o++)r=r<<1^(r>>>9)*1335;var s=(t<<10|r)^21522;c(s>>>15==0);for(var o=0;o<=5;o++)this.setFunctionModule(8,o,h(s,o));this.setFunctionModule(8,7,h(s,6)),this.setFunctionModule(8,8,h(s,7)),this.setFunctionModule(7,8,h(s,8));for(var o=9;o<15;o++)this.setFunctionModule(14-o,8,h(s,o));for(var o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,h(s,o));for(var o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,h(s,o));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;c(r>>>18==0);for(var t=0;t<18;t++){var o=h(r,t),s=this.size-11+t%3,u=Math.floor(t/3);this.setFunctionModule(s,u,o),this.setFunctionModule(u,s,o)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var o=-4;o<=4;o++){var s=Math.max(Math.abs(o),Math.abs(r)),u=e+o,m=t+r;0<=u&&u<this.size&&0<=m&&m<this.size&&this.setFunctionModule(u,m,s!=2&&s!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var o=-2;o<=2;o++)this.setFunctionModule(e+o,t+r,Math.max(Math.abs(o),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var o=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],s=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],u=Math.floor(n.getNumRawDataModules(t)/8),m=o-u%o,v=Math.floor(u/o),g=[],C=n.reedSolomonComputeDivisor(s),_=0,R=0;_<o;_++){var A=e.slice(R,R+v-s+(_<m?0:1));R+=A.length;var p=n.reedSolomonComputeRemainder(A,C);_<m&&A.push(0),g.push(A.concat(p))}for(var L=[],T=function(I){g.forEach(function(O,k){(I!=v-s||k>=m)&&L.push(O[I])})},_=0;_<g[0].length;_++)T(_);return c(L.length==u),L},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var o=0;o<this.size;o++)for(var s=0;s<2;s++){var u=r-s,m=(r+1&2)==0,v=m?this.size-1-o:o;!this.isFunction[v][u]&&t<e.length*8&&(this.modules[v][u]=h(e[t>>>3],7-(t&7)),t++)}}c(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var o=void 0;switch(e){case 0:o=(r+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+t)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:o=r*t%2+r*t%3==0;break;case 6:o=(r*t%2+r*t%3)%2==0;break;case 7:o=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&o&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,o=0,s=[0,0,0,0,0,0,0],u=0;u<this.size;u++)this.modules[t][u]==r?(o++,o==5?e+=n.PENALTY_N1:o>5&&e++):(this.finderPenaltyAddHistory(o,s),r||(e+=this.finderPenaltyCountPatterns(s)*n.PENALTY_N3),r=this.modules[t][u],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,s)*n.PENALTY_N3}for(var u=0;u<this.size;u++){for(var r=!1,m=0,s=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][u]==r?(m++,m==5?e+=n.PENALTY_N1:m>5&&e++):(this.finderPenaltyAddHistory(m,s),r||(e+=this.finderPenaltyCountPatterns(s)*n.PENALTY_N3),r=this.modules[t][u],m=1);e+=this.finderPenaltyTerminateAndCount(r,m,s)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var u=0;u<this.size-1;u++){var v=this.modules[t][u];v==this.modules[t][u+1]&&v==this.modules[t+1][u]&&v==this.modules[t+1][u+1]&&(e+=n.PENALTY_N2)}for(var g=0,C=0,_=this.modules;C<_.length;C++){var R=_[C];g=R.reduce(function(L,T){return L+(T?1:0)},g)}var A=this.size*this.size,p=Math.ceil(Math.abs(g*20-A*10)/A)-1;return c(0<=p&&p<=9),e+=p*n.PENALTY_N4,c(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],o=this.size-7;r.length<e;o-=t)r.splice(1,0,o);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return c(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var o=1,r=0;r<e;r++){for(var s=0;s<t.length;s++)t[s]=n.reedSolomonMultiply(t[s],o),s+1<t.length&&(t[s]^=t[s+1]);o=n.reedSolomonMultiply(o,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(v){return 0}),o=function(v){var g=v^r.shift();r.push(0),t.forEach(function(C,_){return r[_]^=n.reedSolomonMultiply(C,g)})},s=0,u=e;s<u.length;s++){var m=u[s];o(m)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,o=7;o>=0;o--)r=r<<1^(r>>>7)*285,r^=(t>>>o&1)*e;return c(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];c(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();a.QrCode=i;function l(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function h(n,e){return(n>>>e&1)!=0}function c(n){if(!n)throw new Error("Assertion error")}var d=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,o=e;r<o.length;r++){var s=o[r];l(s,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var o=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+o),10),o*3+1,t),r+=o}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var o=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;o+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(o,11,t)}return r<e.length&&l(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,o=0,s=e;o<s.length;o++){var u=s[o],m=u.mode.numCharCountBits(t);if(u.numChars>=1<<m)return 1/0;r+=4+m+u.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();a.QrSegment=d})(y||(y={}));(function(a){(function(i){var l=function(){function h(c,d){this.ordinal=c,this.formatBits=d}return h.LOW=new h(0,1),h.MEDIUM=new h(1,0),h.QUARTILE=new h(2,3),h.HIGH=new h(3,2),h}();i.Ecc=l})(a.QrCode||(a.QrCode={}))})(y||(y={}));(function(a){(function(i){var l=function(){function h(c,d){this.modeBits=c,this.numBitsCharCount=d}return h.prototype.numCharCountBits=function(c){return this.numBitsCharCount[Math.floor((c+7)/17)]},h.NUMERIC=new h(1,[10,12,14]),h.ALPHANUMERIC=new h(2,[9,11,13]),h.BYTE=new h(4,[8,16,16]),h.KANJI=new h(8,[8,10,12]),h.ECI=new h(7,[0,0,0]),h}();i.Mode=l})(a.QrSegment||(a.QrSegment={}))})(y||(y={}));var D=y,oe="H",G={L:D.QrCode.Ecc.LOW,M:D.QrCode.Ecc.MEDIUM,Q:D.QrCode.Ecc.QUARTILE,H:D.QrCode.Ecc.HIGH},Ve=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ae(a){return a in G}function ie(a,i){i===void 0&&(i=0);var l=[];return a.forEach(function(h,c){var d=null;h.forEach(function(n,e){if(!n&&d!==null){l.push("M".concat(d+i," ").concat(c+i,"h").concat(e-d,"v1H").concat(d+i,"z")),d=null;return}if(e===h.length-1){if(!n)return;d===null?l.push("M".concat(e+i,",").concat(c+i," h1v1H").concat(e+i,"z")):l.push("M".concat(d+i,",").concat(c+i," h").concat(e+1-d,"v1H").concat(d+i,"z"));return}n&&d===null&&(d=e)})}),l.join("")}var K={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:oe,validator:function(a){return ae(a)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},ze=z(z({},K),{renderAs:{type:String,required:!1,default:"canvas",validator:function(a){return["canvas","svg"].indexOf(a)>-1}}}),Qe=q({name:"QRCodeSvg",props:K,setup:function(a){var i=$(0),l=$(""),h=function(){var c=a.value,d=a.level,n=a.margin,e=D.QrCode.encodeText(c,G[d]).getModules();i.value=e.length+n*2,l.value=ie(e,n)};return h(),te(h),function(){return S("svg",{width:a.size,height:a.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(i.value," ").concat(i.value)},[S("path",{fill:a.background,d:"M0,0 h".concat(i.value,"v").concat(i.value,"H0z")}),S("path",{fill:a.foreground,d:l.value})])}}}),Ue=q({name:"QRCodeCanvas",props:K,setup:function(a){var i=$(null),l=function(){var h=a.value,c=a.level,d=a.size,n=a.margin,e=a.background,t=a.foreground,r=i.value;if(r){var o=r.getContext("2d");if(o){var s=D.QrCode.encodeText(h,G[c]).getModules(),u=s.length+n*2,m=window.devicePixelRatio||1,v=d/u*m;r.height=r.width=d*m,o.scale(v,v),o.fillStyle=e,o.fillRect(0,0,u,u),o.fillStyle=t,Ve?o.fill(new Path2D(ie(s,n))):s.forEach(function(g,C){g.forEach(function(_,R){_&&o.fillRect(R+n,C+n,1,1)})})}}};return me(l),te(l),function(){return S("canvas",{ref:i,style:{width:"".concat(a.size,"px"),height:"".concat(a.size,"px")}})}}}),Fe=q({name:"Qrcode",render:function(){var a=this.$props,i=a.renderAs,l=a.value,h=a.size,c=a.margin,d=a.level,n=a.background,e=a.foreground,t=h>>>0,r=c>>>0,o=ae(d)?d:oe;return S(i==="svg"?Qe:Ue,{value:l,size:t,margin:r,level:o,background:n,foreground:e})},props:ze});const He={props:["url","label"],components:{QrcodeIcon:fe,QrcodeVue:Fe},data(){return{showQrcode:!1}},computed:{qrcodeUrl(){return`${this.url.split("#/").pop()}`}}},$e={class:"simulator"},qe={class:"simulator-header"},xe={class:"address-bar"},Ge=["src"],Ke={class:"iframe-footer"},Ye={class:"qrcode"};function We(a,i,l,h,c,d){const n=P("QrcodeIcon"),e=P("QrcodeVue");return b(),w("div",$e,[E("div",qe,[E("div",xe,[E("span",null,N(l.label),1)])]),E("iframe",{width:"375",height:"611",src:l.url,frameborder:"0",ref:"iframe"},null,8,Ge),E("div",Ke,[E("span",{onMouseenter:i[0]||(i[0]=t=>c.showQrcode=!0),onMouseleave:i[1]||(i[1]=t=>c.showQrcode=!1)},[M(n)],32),re(E("div",Ye,[M(e,{value:d.qrcodeUrl},null,8,["value"])],512),[[ne,c.showQrcode]])])])}const Xe=B(He,[["render",We]]);const Je={props:["visible","navList","current"]},Ze={class:"sidebar-links"},je={class:"sidebar-links-group-title"};function et(a,i,l,h,c,d){const n=P("router-link");return b(),w("aside",{class:H({sidebar:!0,visible:l.visible})},[E("ul",Ze,[(b(!0),w(U,null,F(l.navList,e=>(b(),w("li",{key:e.name},[E("div",je,N(e.label),1),E("ul",null,[(b(!0),w(U,null,F(e.children,t=>(b(),w("li",{key:t.name},[M(n,{to:t.path,class:H({"sidebar-link-item":!0,active:t.pageName===l.current})},{default:j(()=>[ee(N(t.type!==1?t.name:"")+" "+N(t.label),1)]),_:2},1032,["to","class"])]))),128))])]))),128))])],2)}const tt=B(Je,[["render",et]]),se=[{label:"开始",name:"start",children:[{name:"intro",label:"起步",type:1},{name:"i18n",label:"国际化",type:1},{name:"classnames",label:"快捷类名",type:1},{name:"contribute",label:"贡献代码",type:1}]},{label:"组件",name:"components",children:[{name:"Avatar",label:"头像",type:2},{name:"ActionSheet",label:"动作面板",type:2},{name:"Button",label:"按钮",type:2},{name:"Badge",label:"红点",type:2},{name:"Checkbox",label:"多选框",type:2},{name:"Dialog",label:"对话框",type:2},{name:"DatetimePicker",label:"日期选择器",type:2},{name:"Divider",label:"分割线",type:2},{name:"Flex",component:"Row",label:"弹性布局",type:2},{name:"Icon",label:"图标",type:2},{name:"InfiniteLoading",label:"无限滚动",type:2},{name:"Input",label:"输入框",type:2},{name:"Indexes",label:"索引",type:2},{name:"Loading",label:"加载",type:2},{name:"List",label:"列表",type:2},{name:"NoticeBar",label:"通告栏",type:2},{name:"NavBar",label:"导航栏",type:2},{name:"Picker",label:"选择器",type:2},{name:"Popup",label:"弹出层",type:2},{name:"Progress",label:"进度条",type:2},{name:"Radio",label:"单选框",type:2},{name:"Switch",label:"开关",type:2},{name:"SlipDrawer",label:"滑动抽屉",type:2},{name:"SearchBar",label:"搜索框",type:2},{name:"Swiper",label:"轮播",type:2},{name:"Tab",label:"页签",type:2},{name:"Tabbar",label:"标签栏",type:2},{name:"Toast",label:"提示",type:2},{name:"Tag",label:"标签",type:2},{name:"Tooltips",label:"气泡提示",type:2}]}],le=[{name:"intro",label:"起步",component:()=>f(()=>import("./intro-f8a4f76c.js"),["./intro-f8a4f76c.js","./index-5ac088ad.js"],import.meta.url)},{name:"i18n",label:"国际化",component:()=>f(()=>import("./i18n-6b47b86b.js"),["./i18n-6b47b86b.js","./index-5ac088ad.js"],import.meta.url)},{name:"classnames",label:"快捷类名",component:()=>f(()=>import("./classnames-408f889c.js"),["./classnames-408f889c.js","./index-5ac088ad.js"],import.meta.url)},{name:"contribute",label:"贡献代码",component:()=>f(()=>import("./contribute-84dec6e0.js"),["./contribute-84dec6e0.js","./index-5ac088ad.js"],import.meta.url)},{name:"Avatar",label:"头像",component:()=>f(()=>import("./README-c88d436f.js"),["./README-c88d436f.js","./index-5ac088ad.js"],import.meta.url)},{name:"ActionSheet",label:"动作面板",component:()=>f(()=>import("./README-b6eb08e5.js"),["./README-b6eb08e5.js","./index-5ac088ad.js"],import.meta.url)},{name:"Button",label:"按钮",component:()=>f(()=>import("./README-e292d2ae.js"),["./README-e292d2ae.js","./index-5ac088ad.js"],import.meta.url)},{name:"Badge",label:"红点",component:()=>f(()=>import("./README-ebd56fe7.js"),["./README-ebd56fe7.js","./index-5ac088ad.js"],import.meta.url)},{name:"Checkbox",label:"多选框",component:()=>f(()=>import("./README-aff60cb6.js"),["./README-aff60cb6.js","./index-5ac088ad.js"],import.meta.url)},{name:"Dialog",label:"对话框",component:()=>f(()=>import("./README-cceb94f3.js"),["./README-cceb94f3.js","./index-5ac088ad.js"],import.meta.url)},{name:"DatetimePicker",label:"日期选择器",component:()=>f(()=>import("./README-835d2dcf.js"),["./README-835d2dcf.js","./index-5ac088ad.js"],import.meta.url)},{name:"Divider",label:"分割线",component:()=>f(()=>import("./README-67cde291.js"),["./README-67cde291.js","./index-5ac088ad.js"],import.meta.url)},{name:"Flex",alias:"Row",label:"弹性布局",component:()=>f(()=>import("./README-5f8faaeb.js"),["./README-5f8faaeb.js","./index-5ac088ad.js"],import.meta.url)},{name:"Icon",label:"图标",component:()=>f(()=>import("./README-a79f8689.js"),["./README-a79f8689.js","./index-5ac088ad.js"],import.meta.url)},{name:"InfiniteLoading",label:"无限滚动",component:()=>f(()=>import("./README-8e4a8ffc.js"),["./README-8e4a8ffc.js","./index-5ac088ad.js"],import.meta.url)},{name:"Input",label:"输入框",component:()=>f(()=>import("./README-c2572175.js"),["./README-c2572175.js","./index-5ac088ad.js"],import.meta.url)},{name:"Indexes",label:"索引",component:()=>f(()=>import("./README-857b6ed2.js"),["./README-857b6ed2.js","./index-5ac088ad.js"],import.meta.url)},{name:"Loading",label:"加载",component:()=>f(()=>import("./README-fe6dc842.js"),["./README-fe6dc842.js","./index-5ac088ad.js"],import.meta.url)},{name:"NoticeBar",label:"通告栏",component:()=>f(()=>import("./README-8016fe3e.js"),["./README-8016fe3e.js","./index-5ac088ad.js"],import.meta.url)},{name:"NavBar",label:"导航栏",component:()=>f(()=>import("./README-cbc20dad.js"),["./README-cbc20dad.js","./index-5ac088ad.js"],import.meta.url)},{name:"List",label:"列表",component:()=>f(()=>import("./README-4ccf5166.js"),["./README-4ccf5166.js","./index-5ac088ad.js"],import.meta.url)},{name:"Picker",label:"选择器",component:()=>f(()=>import("./README-ea095ffa.js"),["./README-ea095ffa.js","./index-5ac088ad.js"],import.meta.url)},{name:"Popup",label:"弹出层",component:()=>f(()=>import("./README-52503463.js"),["./README-52503463.js","./index-5ac088ad.js"],import.meta.url)},{name:"Progress",label:"进度条",component:()=>f(()=>import("./README-1ea2cadb.js"),["./README-1ea2cadb.js","./index-5ac088ad.js"],import.meta.url)},{name:"Radio",label:"单选框",component:()=>f(()=>import("./README-b372ebb1.js"),["./README-b372ebb1.js","./index-5ac088ad.js"],import.meta.url)},{name:"Switch",label:"开关",component:()=>f(()=>import("./README-19800c5e.js"),["./README-19800c5e.js","./index-5ac088ad.js"],import.meta.url)},{name:"SlipDrawer",label:"滑动抽屉",component:()=>f(()=>import("./README-6bbe747d.js"),["./README-6bbe747d.js","./index-5ac088ad.js"],import.meta.url)},{name:"SearchBar",label:"搜索框",component:()=>f(()=>import("./README-8cf2bfb2.js"),["./README-8cf2bfb2.js","./index-5ac088ad.js"],import.meta.url)},{name:"Swiper",label:"轮播",component:()=>f(()=>import("./README-de9bb742.js"),["./README-de9bb742.js","./index-5ac088ad.js"],import.meta.url)},{name:"Tab",label:"页签",component:()=>f(()=>import("./README-a9d12c62.js"),["./README-a9d12c62.js","./index-5ac088ad.js"],import.meta.url)},{name:"Tabbar",label:"标签栏",component:()=>f(()=>import("./README-ca79c7ec.js"),["./README-ca79c7ec.js","./index-5ac088ad.js"],import.meta.url)},{name:"Toast",label:"提示",component:()=>f(()=>import("./README-9e458c20.js"),["./README-9e458c20.js","./index-5ac088ad.js"],import.meta.url)},{name:"Tag",label:"标签",component:()=>f(()=>import("./README-19d7c358.js"),["./README-19d7c358.js","./index-5ac088ad.js"],import.meta.url)},{name:"Tooltips",label:"气泡提示",component:()=>f(()=>import("./README-44fbfb3c.js"),["./README-44fbfb3c.js","./index-5ac088ad.js"],import.meta.url)}];se.forEach(a=>{a.children.forEach(i=>{const l=x(i.component||i.name);i.pageName=l,i.path=`/${l}`})});const rt={components:{HeaderBar:De,AsideBar:tt,MainContent:ke,Simulator:Xe},data(){return{demoUrl:"",sideVisible:!1,current:"",label:"",navList:se,showSimulator:!0}},mounted(){const a=d=>d.split("/").pop(),i=d=>{var n;return(n=le.find(e=>x(e.alias||e.name)===d))==null?void 0:n.label},l=(d,n)=>{this.demoUrl=`./demo.html#/${d}`,this.current=d,this.label=n,this.showSimulator=!["intro","theme","i18n","classnames","contribute","plugin"].includes(d)},h=a(location.hash),c=i(h);l(h,c),this.$router.afterEach((d,n)=>{l(d.name,i(d.name))})},methods:{getOffsetHeight(){const{offsetHeight:a}=document.querySelector(".main");window.parent.postMessage({offsetHeight:a},"*")}}},nt={class:"page-content"};function ot(a,i,l,h,c,d){const n=P("header-bar"),e=P("aside-bar"),t=P("main-content"),r=P("simulator");return b(),w("div",nt,[M(n,{navList:c.navList,searchVisible:!0},null,8,["navList"]),M(e,{navList:c.navList,current:c.current,visible:c.sideVisible},null,8,["navList","current","visible"]),M(t),re(M(r,{url:c.demoUrl,label:c.label},null,8,["url","label"]),[[ne,c.showSimulator]])])}const at=B(rt,[["render",ot]]),Y=[];le.forEach(a=>{const i=x(a.alias||a.name);Y.push({name:i,path:`/${i}`,component:a.component,meta:{title:a.label}})});Y.push({path:"/:pathMatch(.*)*",redirect:"/intro"});const it=ve({history:pe(),routes:Y,scrollBehavior(a){return a.path==="/index"?null:{x:0,y:0}}}),st=it;_e&&document.documentElement.classList.add("is-win");const W=Ee(at);W.use(ge);W.use(st);W.mount("#app");
