import{_ as p,p as f,r as m,o as h,c as B,a,w as t,E as c}from"./index.466186a3.js";const k=f({setup(){const e=c(""),o=c(""),r=c("");function u(){console.log("back")}function d(n){console.log(n)}function i(){console.log("focus")}function l(){console.log("blur"),console.log(e.value)}function s(){console.log("search")}return{searchText1:e,searchText2:o,searchText3:r,onBackBtnClick:u,onChange:d,onFocus:i,onBlur:l,onSearch:s}}}),g={class:"search-bar-demo"};function v(e,o,r,u,d,i){const l=m("v-search-bar"),s=m("demo-document");return h(),B("div",g,[a(s,{title:"\u80F6\u56CA\u578B\u641C\u7D22",desc:"\u4E00\u7EA7\u641C\u7D22"},{default:t(()=>[a(l,{"cancel-btn-visible":"",onBackBtnClick:e.onBackBtnClick,modelValue:e.searchText1,"onUpdate:modelValue":o[0]||(o[0]=n=>e.searchText1=n),onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur,onSearch:e.onSearch},null,8,["onBackBtnClick","modelValue","onChange","onFocus","onBlur","onSearch"])]),_:1}),a(s,{desc:"\u4E8C\u7EA7\u641C\u7D22"},{default:t(()=>[a(l,{modelValue:e.searchText2,"onUpdate:modelValue":o[1]||(o[1]=n=>e.searchText2=n),"back-btn-visible":"",onFocus:e.onFocus},null,8,["modelValue","onFocus"])]),_:1}),a(s,{title:"\u8868\u5355\u578B\u641C\u7D22"},{default:t(()=>[a(l,{modelValue:e.searchText3,"onUpdate:modelValue":o[2]||(o[2]=n=>e.searchText3=n),type:"form"},null,8,["modelValue"])]),_:1})])}var b=p(k,[["render",v]]);export{b as default};