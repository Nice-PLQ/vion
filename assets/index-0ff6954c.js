import{_ as c,r as o,o as _,c as h,a as t,w as e,b as d,t as p,g as u}from"./index-5ac088ad.js";const m={data(){return{val:.35,val1:.5,val2:.7,val3:.8}},methods:{add(){this.val=this.limit(this.val+.1),this.val1=this.limit(this.val1+.1),this.val2=this.limit(this.val2+.1),this.val3=this.limit(this.val3+.1)},reduce(){this.val=this.limit(this.val-.1),this.val1=this.limit(this.val1-.1),this.val2=this.limit(this.val2-.1),this.val3=this.limit(this.val3-.1)},limit(s){return s>1?1:s<0?0:s}}},f={class:"progress-demo"},g={style:{color:"#05c9fa","font-size":"12px","margin-left":"8px"}};function x(s,k,C,b,l,n){const i=o("v-progress"),a=o("demo-doc"),r=o("v-button"),v=o("v-button-group");return _(),h("div",f,[t(a,{title:"基础用法"},{default:e(()=>[t(i,{value:l.val},null,8,["value"]),t(i,{value:l.val1,"show-txt":!1},null,8,["value"])]),_:1}),t(a,{title:"自定义颜色"},{default:e(()=>[t(i,{value:l.val2,background:"linear-gradient(135deg, #F9C278 0%, #F29D2B 100%)"},null,8,["value"])]),_:1}),t(a,{title:"自定义文本"},{default:e(()=>[t(i,{value:l.val3},{text:e(()=>[d("span",g,"LV"+p(Math.round(l.val3*10)),1)]),_:1},8,["value"])]),_:1}),t(a,{title:"进度条高度"},{default:e(()=>[t(i,{value:l.val2,height:"10px",background:"#67C23A"},null,8,["value"])]),_:1}),t(a,{title:"环形进度"},{default:e(()=>[t(i,{value:l.val2,type:"circle"},null,8,["value"])]),_:1}),t(v,null,{default:e(()=>[t(r,{size:"large",onClick:n.reduce},{default:e(()=>[u("-")]),_:1},8,["onClick"]),t(r,{type:"primary",size:"large",onClick:n.add},{default:e(()=>[u("+")]),_:1},8,["onClick"])]),_:1})])}const B=c(m,[["render",x]]);export{B as default};
