import{_ as d,r as n,o as s,c,a as t,w as e,g as i}from"./index.466186a3.js";const _={data(){return{ratio:0}},mounted(){this.timer=setInterval(()=>{if(this.ratio>=100){this.ratio=0;return}this.ratio+=10},1e3)},unmounted(){this.$loading.hide(),clearInterval(this.timer)},methods:{handleShow(){this.$loading.show({text:"\u52A0\u8F7D\u4E2D",duration:3e3})},handleHide(){this.$loading.hide()}}};function u(h,m,f,p,v,l){const o=n("v-loading"),a=n("demo-doc"),r=n("v-button");return s(),c("div",null,[t(a,{title:"\u666E\u901A\u7C7B\u578B\u7684"},{default:e(()=>[t(o)]),_:1}),t(a,{title:"\u5E26\u6587\u672C"},{default:e(()=>[t(o,null,{default:e(()=>[i("\u6B63\u5728\u52A0\u8F7D")]),_:1})]),_:1}),t(a,{title:"\u5176\u4ED6\u989C\u8272\u7684\u56FE\u6807"},{default:e(()=>[t(o,{color:"#67C23A",class:"m-r-8"}),t(o,{color:"#00CAFC",class:"m-r-8"}),t(o,{color:"#FF596A"})]),_:1}),t(a,{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F"},{default:e(()=>[t(o,{size:"24px"})]),_:1}),t(a,{title:"\u5FEB\u6377\u8C03\u7528"},{default:e(()=>[t(r,{onClick:l.handleShow,type:"primary"},{default:e(()=>[i("\u663E\u793A\u6D6E\u5C42loading")]),_:1},8,["onClick"])]),_:1})])}var g=d(_,[["render",u]]);export{g as default};