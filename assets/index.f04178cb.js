import{_ as C,r as u,o as f,c as m,a as i,w as s,g as o}from"./index.466186a3.js";const g={data(){return{visible:!1,visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1,value:null,value1:new Date(2030,10,11,11,11)}},methods:{handleOk(r){this.visible3=!0,this.value=new Date(2030,3,20,10,11)},handleChange(r){console.log("change------:",r)}}};function p(r,e,y,d,l,t){const v=u("v-button"),a=u("v-datetime-picker"),b=u("demo-doc");return f(),m("div",null,[i(b,{title:"\u57FA\u7840\u7528\u6CD5"},{default:s(()=>[i(v,{size:"large",type:"primary",class:"m-b-16",onClick:e[0]||(e[0]=n=>l.visible=!0)},{default:s(()=>[o("\u5E74")]),_:1}),i(v,{size:"large",type:"primary",class:"m-b-16",onClick:e[1]||(e[1]=n=>l.visible1=!0)},{default:s(()=>[o("\u5E74-\u6708")]),_:1}),i(v,{size:"large",type:"primary",class:"m-b-16",onClick:e[2]||(e[2]=n=>l.visible2=!0)},{default:s(()=>[o("\u5E74-\u6708-\u65E5")]),_:1}),i(v,{size:"large",type:"primary",class:"m-b-16",onClick:e[3]||(e[3]=n=>l.visible3=!0)},{default:s(()=>[o("\u5E74-\u6708-\u65E5-\u65F6-\u5206")]),_:1}),i(v,{size:"large",type:"primary",onClick:e[4]||(e[4]=n=>l.visible4=!0)},{default:s(()=>[o("\u65F6-\u5206")]),_:1}),i(a,{"click-selectable":!1,type:"year",visible:l.visible,onClose:e[5]||(e[5]=n=>l.visible=!1),"immediate-change":!0,onChange:t.handleChange},null,8,["visible","onChange"]),i(a,{"click-selectable":!1,type:"year-month",visible:l.visible1,onClose:e[6]||(e[6]=n=>l.visible1=!1),onChange:t.handleChange},null,8,["visible","onChange"]),i(a,{"click-selectable":!1,type:"date",visible:l.visible2,onClose:e[7]||(e[7]=n=>l.visible2=!1),onChange:t.handleChange},null,8,["visible","onChange"]),i(a,{"click-selectable":!1,type:"date-time",visible:l.visible3,value:new Date(2025,10,11,11,11),onClose:e[8]||(e[8]=n=>l.visible3=!1),onChange:t.handleChange},null,8,["visible","value","onChange"]),i(a,{"click-selectable":!1,type:"time",visible:l.visible4,onClose:e[9]||(e[9]=n=>l.visible4=!1),onChange:t.handleChange},null,8,["visible","onChange"])]),_:1}),i(b,{title:"\u81EA\u5B9A\u4E49\u5E74\u4EFD\u8303\u56F4"},{default:s(()=>[i(v,{size:"large",type:"primary",onClick:e[10]||(e[10]=n=>l.visible5=!0)},{default:s(()=>[o("2023-2040")]),_:1}),i(a,{type:"year","min-year":2023,"max-year":2040,visible:l.visible5,"click-selectable":!1,onClose:e[11]||(e[11]=n=>l.visible5=!1),onChange:t.handleChange},null,8,["visible","onChange"])]),_:1}),i(b,{title:"\u9ED8\u8BA4\u9009\u4E2D\u67D0\u4E2A\u65F6\u95F4"},{default:s(()=>[i(v,{size:"large",type:"primary",onClick:e[12]||(e[12]=n=>l.visible6=!0)},{default:s(()=>[o("2030-11-11 11:11")]),_:1}),i(a,{type:"date-time","min-year":2019,"max-year":2040,visible:l.visible6,"click-selectable":!1,modelValue:l.value1,"onUpdate:modelValue":e[13]||(e[13]=n=>l.value1=n),onClose:e[14]||(e[14]=n=>l.visible6=!1),onChange:t.handleChange},null,8,["visible","modelValue","onChange"])]),_:1})])}var h=C(g,[["render",p]]);export{h as default};
