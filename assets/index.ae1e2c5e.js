import{D as x}from"./demo.3270c561.js";import{_ as g,r as o,o as k,c as f,a as e,w as t,b as c,g as u}from"./index.466186a3.js";const C={components:{DemoDocument:x},data(){return{checked:!0,checked1:!0,checked2:!0}},methods:{handleClick(){console.log("click")}}},w={class:"list-demo"},b=c("div",{class:"picture-placeholder",style:{width:"32px",height:"32px","border-radius":"32px"}},null,-1),y={class:"avatar-dot"},V=c("div",{class:"picture-placeholder",style:{width:"32px",height:"32px","border-radius":"32px"}},null,-1),z=c("div",{class:"picture-placeholder",style:{width:"48px",height:"48px"}},null,-1),B=c("div",{class:"picture-placeholder",style:{width:"48px",height:"48px"}},null,-1),A=c("div",{class:"picture-placeholder",style:{width:"48px",height:"48px"}},null,-1),D=c("div",{class:"picture-placeholder",style:{width:"48px",height:"48px"}},null,-1),E=c("div",{class:"picture-placeholder right",style:{width:"48px",height:"48px"}},null,-1),N=c("div",{class:"picture-placeholder"},null,-1),R=c("div",{class:"picture-placeholder right"},null,-1);function q(Q,a,T,U,r,s){const l=o("v-list"),_=o("v-badge"),d=o("v-icon"),p=o("v-switch"),i=o("v-list-group"),m=o("v-checkbox"),h=o("v-button"),n=o("demo-document");return k(),f("div",w,[e(n,{title:"\u5355\u884C\u5217\u8868"},{default:t(()=>[e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898"}),e(l,{title:"\u5217\u8868\u6807\u9898",help:"\u8F85\u52A9\u4FE1\u606F","arrow-direction":"right",onClick:s.handleClick},null,8,["onClick"]),e(l,{title:"\u5217\u8868\u6807\u9898"},{right:t(()=>[e(_,{type:"dot"}),e(d,{name:"ArrowRight"})]),_:1}),e(l,{title:"\u5217\u8868\u6807\u9898"},{right:t(()=>[e(p,{modelValue:r.checked,"onUpdate:modelValue":a[0]||(a[0]=v=>r.checked=v)},null,8,["modelValue"])]),_:1}),e(l,{title:"\u5217\u8868\u6807\u9898"},{icon:t(()=>[e(d,{name:"Check",size:"20px",color:"var(--brand-standard)"})]),_:1}),e(l,{title:"\u94FE\u63A5\u64CD\u4F5C","title-color":"var(--text-link)",onClick:s.handleClick},null,8,["onClick"])]),_:1}),e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898",onClick:s.handleClick},{right:t(()=>[b,e(d,{name:"ArrowRight",size:"16px",color:"#979EB6"})]),_:1},8,["onClick"]),e(l,{title:"\u5217\u8868\u6807\u9898",onClick:s.handleClick},{right:t(()=>[c("div",y,[V,e(_,{type:"dot"})]),e(d,{name:"ArrowRight",size:"16px",color:"#979EB6"})]),_:1},8,["onClick"])]),_:1}),e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898",onClick:s.handleClick},{left:t(()=>[e(m,{checked:!0,class:"m-r-14"})]),_:1},8,["onClick"]),e(l,{title:"\u5217\u8868\u6807\u9898",onClick:s.handleClick},{left:t(()=>[e(d,{name:"Qq",class:"m-r-10"})]),_:1},8,["onClick"])]),_:1}),e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898"},{left:t(()=>[z]),_:1}),e(l,{title:"\u5217\u8868\u6807\u9898"},{left:t(()=>[B]),right:t(()=>[e(h,{size:"small"},{default:t(()=>[u("\u6DFB\u52A0")]),_:1})]),_:1})]),_:1})]),_:1}),e(n,{title:"\u53CC\u884C\u5217\u8868"},{default:t(()=>[e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898",desc:"\u63CF\u8FF0\u6587\u672C"}),e(l,{title:"\u5217\u8868\u6807\u9898",desc:"\u63CF\u8FF0\u6587\u672C",help:"\u8F85\u52A9\u4FE1\u606F","arrow-direction":"right"})]),_:1}),e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898",desc:"\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217",style:{"padding-top":"10px","padding-bottom":"10px"}},{left:t(()=>[A]),right:t(()=>[e(h,{size:"small",class:"m-l-12"},{default:t(()=>[u("\u6DFB\u52A0")]),_:1})]),_:1})]),_:1}),e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898",desc:"\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217"},{left:t(()=>[D]),_:1}),e(l,{title:"\u5217\u8868\u6807\u9898",desc:"\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217\u8868\u6458\u8981\u5217"},{right:t(()=>[E]),_:1})]),_:1})]),_:1}),e(n,{title:"\u591A\u884C\u5217\u8868"},{default:t(()=>[e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898",desc:"\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C","desc-ellipsis":"multiple"})]),_:1}),e(i,null,{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898",desc:"\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C","desc-ellipsis":"multiple"},{left:t(()=>[N]),_:1}),e(l,{title:"\u5217\u8868\u6807\u9898",desc:"\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C\u63CF\u8FF0\u6587\u672C","desc-ellipsis":"multiple"},{right:t(()=>[R]),_:1})]),_:1})]),_:1}),e(n,{title:"\u5217\u8868\u8BF4\u660E\u53CA\u6536\u6298",class:"p-b-32"},{default:t(()=>[e(i,{title:"\u9876\u90E8\u6807\u9898\u8BF4\u660E",extra:"\u5E95\u90E8\u9644\u52A0\u8BF4\u660E\u5E95\u90E8\u9644\u52A0\u8BF4\u660E",class:"m-t-10"},{default:t(()=>[e(l,{title:"\u5217\u8868\u6807\u9898",help:"\u8F85\u52A9\u4FE1\u606F","arrow-direction":"right"})]),_:1})]),_:1})])}var G=g(C,[["render",q]]);export{G as default};