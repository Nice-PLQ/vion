import{_ as m,r as s,o as _,c as f,a as e,w as t,g as a,b as g}from"./index.466186a3.js";const p={data(){return{visible:!1}},unmounted(){this.$dialog.close(),this.visible=!1},methods:{alert(){this.$dialog.alert({title:"\u63D0\u793A",content:"\u8FD9\u662FAlert\u5F39\u7A97",callback:l=>{console.log(l)}})},alert2(){this.$dialog.alert({title:"\u63D0\u793A",content:'<strong style="color: red;">\u8FD9\u662Falert\u5F39\u7A97</strong>',dangerouslyUseHTMLString:!0,callback:l=>{console.log(l)}})},alert3(){this.$dialog.alert({title:"\u63D0\u793A",content:"\u8FD9\u662Falert\u5F39\u7A97",beforeClose:(l,n)=>{console.log(l),setTimeout(n,1e3)}})},confirm(){this.$dialog.confirm({title:"\u63D0\u793A",content:"\u8FD9\u662Fconfirm\u5F39\u7A97",callback:l=>{console.log(l)}})},confirm2(){this.$dialog.confirm({title:"\u63D0\u793A",content:"\u8FD9\u662Fconfirm\u5F39\u7A97",cancelBtnTextColor:"#FF596A",confirmBtnTextColor:"#00cafc",callback:l=>{console.log(l)}})},customButtons(){this.$dialog.show({title:"\u63D0\u793A",content:"\u53EF\u81EA\u5B9A\u4E49\u591A\u4E2A\u6309\u94AE\uFF0C\u5EFA\u8BAE\u6700\u591A3\u4E2A",buttons:["\u4F7F\u7528","\u4E0D\u4F7F\u7528",{text:"\u53D6\u6D88",color:"#FF596A"}],callback:l=>{console.log("\u6309\u94AE\u7684\u7D22\u5F15\uFF1A",l)}})}}},k=g("div",null,"\u8FD9\u662F\u7EC4\u4EF6\u7684\u5F39\u7A97\u7528\u6CD5",-1);function C(l,n,y,v,c,r){const o=s("v-button"),i=s("demo-doc"),u=s("v-dialog");return _(),f("div",null,[e(i,{title:"\u57FA\u7840\u7528\u6CD5"},{default:t(()=>[e(o,{onClick:r.alert,type:"primary",size:"large"},{default:t(()=>[a("Alert")]),_:1},8,["onClick"])]),_:1}),e(i,{title:"html\u7247\u6BB5"},{default:t(()=>[e(o,{onClick:r.alert2,type:"primary",size:"large"},{default:t(()=>[a("\u5185\u5BB9\u652F\u6301html\u7247\u6BB5")]),_:1},8,["onClick"])]),_:1}),e(i,{title:"\u5EF6\u65F6\u5173\u95ED"},{default:t(()=>[e(o,{onClick:r.alert3,type:"primary",size:"large"},{default:t(()=>[a("\u624B\u52A8\u5173\u95ED\uFF0C\u5EF6\u65F61s")]),_:1},8,["onClick"])]),_:1}),e(i,{title:"\u9009\u62E9\u5BF9\u8BDD\u6846"},{default:t(()=>[e(o,{onClick:r.confirm,type:"primary",size:"large"},{default:t(()=>[a("Confirm")]),_:1},8,["onClick"])]),_:1}),e(i,{title:"\u8BBE\u7F6E\u6309\u94AE\u6587\u672C\u989C\u8272"},{default:t(()=>[e(o,{onClick:r.confirm2,type:"primary",size:"large"},{default:t(()=>[a("Confirm")]),_:1},8,["onClick"])]),_:1}),e(i,{title:"\u7EC4\u4EF6\u65B9\u5F0F\u5F15\u7528"},{default:t(()=>[e(o,{onClick:n[0]||(n[0]=d=>c.visible=!0),type:"primary",size:"large"},{default:t(()=>[a("\u663E\u793A")]),_:1}),e(u,{title:"\u63D0\u793A",modelValue:c.visible,"onUpdate:modelValue":n[1]||(n[1]=d=>c.visible=d)},{default:t(()=>[k]),_:1},8,["modelValue"])]),_:1}),e(i,{title:"\u81EA\u5B9A\u4E49\u6309\u94AE"},{default:t(()=>[e(o,{onClick:r.customButtons,type:"primary",size:"large",class:"m-b-16"},{default:t(()=>[a("\u81EA\u5B9A\u4E493\u4E2A\u6309\u94AE")]),_:1},8,["onClick"])]),_:1})])}var h=m(p,[["render",C]]);export{h as default};
