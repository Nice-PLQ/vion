import{_ as r,r as l,o as g,c as h,a as t,w as e,g as a,b as s}from"./index.466186a3.js";const p={data(){return{}},methods:{handleBack(){console.log("click back-----")},handleTitleClick(){console.log("click title-----")},handleRightClick(){console.log("click right-----")}}},f={style:{"padding-bottom":"16px"}},u={style:{display:"flex","align-items":"center"}},m={title:"\u5206\u4EAB"};function k(x,v,b,C,y,c){const o=l("v-nav-bar"),n=l("demo-doc"),i=l("v-icon"),_=l("v-badge"),d=l("v-avatar");return g(),h("div",f,[t(n,{title:"\u57FA\u672C\u7528\u6CD5"},{default:e(()=>[t(o,{onBack:c.handleBack,onTitleClick:c.handleTitleClick},{default:e(()=>[a("\u6807\u9898")]),_:1},8,["onBack","onTitleClick"])]),_:1}),t(n,{title:"\u8BBE\u7F6E\u5DE6\u53F3\u7684\u56FE\u6807\u6216\u6587\u672C"},{default:e(()=>[t(o,{"right-text":"\u8BBE\u7F6E","left-text":"\u8FD4\u56DE",onRightClick:c.handleRightClick},{default:e(()=>[a("\u5BFC\u822A\u680F\u6807\u9898\u957F\u5EA6\u8D85\u51FA\u8303\u56F4")]),_:1},8,["onRightClick"]),t(o,{"left-icon":"close","right-icon":"setting",style:{"margin-top":"8px"}},{default:e(()=>[a("\u6807\u9898")]),_:1})]),_:1}),t(n,{title:"\u81EA\u5B9A\u4E49\u5DE6\u53F3\u533A\u57DF\u7684\u5185\u5BB9"},{default:e(()=>[t(o,null,{left:e(()=>[s("button",u,[t(i,{name:"left",size:"18px"}),t(_,{type:"capsule","background-color":"rgba(255, 255, 255, .2)"},{default:e(()=>[a("99+")]),_:1})])]),default:e(()=>[a(" \u6807\u9898 ")]),_:1}),t(o,{style:{"margin-top":"8px"}},{left:e(()=>[t(d,{uin:"595527134",size:"14px"})]),right:e(()=>[s("button",m,[t(i,{name:"share",size:"18px"})])]),default:e(()=>[a(" \u6807\u9898 ")]),_:1})]),_:1}),t(n,{title:"\u4E3B\u9898"},{default:e(()=>[t(o,{theme:"black","right-icon":"setting"},{default:e(()=>[a("\u9ED1\u8272\u4E3B\u9898")]),_:1}),t(o,{theme:"white",style:{"margin-top":"8px"},"right-icon":"scan"},{default:e(()=>[a("\u767D\u8272\u4E3B\u9898")]),_:1}),t(o,{theme:"gray",style:{"margin-top":"8px"},"right-icon":"quit"},{default:e(()=>[a("\u7070\u8272\u4E3B\u9898")]),_:1})]),_:1})])}var T=r(p,[["render",k]]);export{T as default};
