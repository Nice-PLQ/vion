import{_ as m,p as C,r as u,o as V,c as y,a as l,w as i,E as b,g as v,b as r}from"./index-5ac088ad.js";const h=C({setup(){const e=b(!0),t=b(!0),p=b(!0),d=b(!0),g=b(!0),f=b(!0),n=b(!0),s=b(!0);return{visible:e,visible1:t,visible2:p,visible3:d,visible4:g,visible5:f,visible6:n,visible7:s,onVisibleChange:a=>{console.log(a)}}}}),$={class:"tooltips-demo"},k=r("ul",{class:"custom-tooltips"},[r("li",null,"全选"),r("li",null,"复制"),r("li",null,"剪切")],-1);function _(e,t,p,d,g,f){const n=u("v-button"),s=u("v-tooltips"),o=u("demo-doc");return V(),y("div",$,[l(o,null,{default:i(()=>[l(s,{text:"气泡提示的内容",placement:"top-center",visible:e.visible,onVisibleChange:e.onVisibleChange},{default:i(()=>[l(n,{size:"large",type:"primary",onClick:t[0]||(t[0]=a=>e.visible=!e.visible)},{default:i(()=>[v("Top-Center")]),_:1})]),_:1},8,["visible","onVisibleChange"])]),_:1}),l(o,null,{default:i(()=>[l(s,{text:"气泡提示的内容",placement:"top-left",visible:e.visible1,onVisibleChange:e.onVisibleChange},{default:i(()=>[l(n,{size:"large",type:"primary",onClick:t[1]||(t[1]=a=>e.visible1=!e.visible1)},{default:i(()=>[v("Top-Left")]),_:1})]),_:1},8,["visible","onVisibleChange"])]),_:1}),l(o,null,{default:i(()=>[l(s,{text:"气泡提示的内容",placement:"top-right",visible:e.visible3,onVisibleChange:e.onVisibleChange},{default:i(()=>[l(n,{size:"large",type:"primary",onClick:t[2]||(t[2]=a=>e.visible3=!e.visible3)},{default:i(()=>[v("Top-Right")]),_:1})]),_:1},8,["visible","onVisibleChange"])]),_:1}),l(o,null,{default:i(()=>[l(s,{text:"自定义气泡提示的内容",visible:e.visible4},{content:i(()=>[k]),default:i(()=>[l(n,{size:"large",type:"primary",onClick:t[3]||(t[3]=a=>e.visible4=!e.visible4)},{default:i(()=>[v("自定义内容")]),_:1})]),_:1},8,["visible"])]),_:1}),l(o,null,{default:i(()=>[l(s,{text:"气泡提示的内容",placement:"bottom-center",visible:e.visible5,onVisibleChange:e.onVisibleChange},{default:i(()=>[l(n,{size:"large",type:"primary",onClick:t[4]||(t[4]=a=>e.visible5=!e.visible5)},{default:i(()=>[v("Bottom-Center")]),_:1})]),_:1},8,["visible","onVisibleChange"])]),_:1}),l(o,null,{default:i(()=>[l(s,{text:"气泡提示的内容",placement:"bottom-left",visible:e.visible6,onVisibleChange:e.onVisibleChange},{default:i(()=>[l(n,{size:"large",type:"primary",onClick:t[5]||(t[5]=a=>e.visible6=!e.visible6)},{default:i(()=>[v("Bottom-Left")]),_:1})]),_:1},8,["visible","onVisibleChange"])]),_:1}),l(o,null,{default:i(()=>[l(s,{text:"气泡提示的内容",placement:"bottom-right",visible:e.visible7,onVisibleChange:e.onVisibleChange},{default:i(()=>[l(n,{size:"large",type:"primary",onClick:t[6]||(t[6]=a=>e.visible7=!e.visible7)},{default:i(()=>[v("Bottom-Right")]),_:1})]),_:1},8,["visible","onVisibleChange"])]),_:1})])}const B=m(h,[["render",_]]);export{B as default};
