import{_ as n,r as a,o as i,e as l,w as e,a as s,g as c}from"./index-c264c4e8.js";const _={methods:{success(){this.$toast.success("通知类提示")},error(){this.$toast.error("警示类提示")},info(){this.$toast({type:"info",message:"完成类提示",duration:3e3})}}};function d(u,f,m,p,k,o){const t=a("v-button"),r=a("demo-doc");return i(),l(r,{title:"基础用法"},{default:e(()=>[s(t,{onClick:o.info,size:"large"},{default:e(()=>[c("通知类提示")]),_:1},8,["onClick"]),s(t,{onClick:o.success,size:"large",class:"m-y-16"},{default:e(()=>[c("完成类提示")]),_:1},8,["onClick"]),s(t,{onClick:o.error,size:"large"},{default:e(()=>[c("警示类提示")]),_:1},8,["onClick"])]),_:1})}const h=n(_,[["render",d]]);export{h as default};