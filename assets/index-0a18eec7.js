import{_ as v,r as s,o as V,c as g,a as n,w as d,b as h}from"./index-5ac088ad.js";const p={data(){return{value:"",value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:"",value11:"",value12:"输入错误"}},methods:{handleChange(t,l){console.log("change-----: ",t,l)},handleFocus(t){console.log("focus------: ",t)},handleBlur(t){console.log("blur------: ",t)}}},c={class:"input-demo"},C=h("button",{class:"sms-code-btn"},"发送验证码",-1),b=h("div",{class:"custom-label"},"中国+86",-1);function B(t,l,F,i,e,o){const a=s("v-input"),r=s("demo-doc"),m=s("v-input-group");return V(),g("div",c,[n(r,{title:"基本用法"},{default:d(()=>[n(a,{placeholder:"输入文本","show-clear":"",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),onChange:o.handleChange,onFocus:o.handleFocus,onBlur:o.handleBlur},null,8,["modelValue","onChange","onFocus","onBlur"]),n(a,{type:"tel",placeholder:"请输入验证码",modelValue:e.value1,"onUpdate:modelValue":l[1]||(l[1]=u=>e.value1=u),onChange:o.handleChange,onFocus:o.handleFocus,onBlur:o.handleBlur},{extra:d(()=>[C]),_:1},8,["modelValue","onChange","onFocus","onBlur"])]),_:1}),n(r,{title:"有标题"},{default:d(()=>[n(a,{label:"标题",placeholder:"请输入手机号","show-clear":"",modelValue:e.value2,"onUpdate:modelValue":l[2]||(l[2]=u=>e.value2=u),onChange:o.handleChange,onFocus:o.handleFocus,onBlur:o.handleBlur},null,8,["modelValue","onChange","onFocus","onBlur"]),n(a,{placeholder:"输入电话号码",type:"tel","label-width":"90px",modelValue:e.value3,"onUpdate:modelValue":l[3]||(l[3]=u=>e.value3=u),onChange:o.handleChange},{label:d(()=>[b]),_:1},8,["modelValue","onChange"])]),_:1}),n(r,{title:"限制输入字数并显示指示器"},{default:d(()=>[n(a,{label:"标题",placeholder:"最多10个字符","show-clear":"","max-length":10,modelValue:e.value4,"onUpdate:modelValue":l[4]||(l[4]=u=>e.value4=u),"show-count-indicator":"",onChange:o.handleChange,onFocus:o.handleFocus,onBlur:o.handleBlur},null,8,["modelValue","onChange","onFocus","onBlur"])]),_:1}),n(r,{title:"多行输入"},{default:d(()=>[n(a,{label:"标题",type:"textarea",rows:"6","show-count-indicator":"","max-length":128,modelValue:e.value5,"onUpdate:modelValue":l[5]||(l[5]=u=>e.value5=u),onChange:o.handleChange,onFocus:o.handleFocus,onBlur:o.handleBlur},null,8,["modelValue","onChange","onFocus","onBlur"])]),_:1}),n(r,{title:"自动撑起内容高度"},{default:d(()=>[n(a,{label:"标题",placeholder:"请输入",type:"textarea",autoSize:!0,modelValue:e.value6,"onUpdate:modelValue":l[6]||(l[6]=u=>e.value6=u),onChange:o.handleChange,onFocus:o.handleFocus,onBlur:o.handleBlur},null,8,["modelValue","onChange","onFocus","onBlur"])]),_:1}),n(r,{title:"标题对齐方式（右对齐）"},{default:d(()=>[n(a,{label:"新密码",type:"password",modelValue:e.value7,"onUpdate:modelValue":l[7]||(l[7]=u=>e.value7=u),"label-align":"right","label-width":"70px",placeholder:"请设置新密码"},null,8,["modelValue"]),n(a,{label:"确认密码",type:"password",modelValue:e.value8,"onUpdate:modelValue":l[8]||(l[8]=u=>e.value8=u),"label-align":"right","label-width":"70px",placeholder:"请再次输入新密码"},null,8,["modelValue"])]),_:1}),n(r,{title:"输入框组合（带边框）"},{default:d(()=>[n(m,{border:"","label-align":"center","label-width":"70px"},{default:d(()=>[n(a,{label:"职业",placeholder:"请输入职业",modelValue:e.value9,"onUpdate:modelValue":l[9]||(l[9]=u=>e.value9=u)},null,8,["modelValue"]),n(a,{label:"公司",placeholder:"请输入公司",modelValue:e.value10,"onUpdate:modelValue":l[10]||(l[10]=u=>e.value10=u)},null,8,["modelValue"]),n(a,{label:"毕业学校",placeholder:"请输入毕业学校",modelValue:e.value11,"onUpdate:modelValue":l[11]||(l[11]=u=>e.value11=u)},null,8,["modelValue"])]),_:1})]),_:1}),n(r,{title:"实时报错",class:"p-b-16"},{default:d(()=>[n(a,{"is-error":"","show-clear":"",label:"标题",modelValue:e.value12,"onUpdate:modelValue":l[12]||(l[12]=u=>e.value12=u),onChange:o.handleChange,onFocus:o.handleFocus,onBlur:o.handleBlur},null,8,["modelValue","onChange","onFocus","onBlur"])]),_:1})])}const f=v(p,[["render",B]]);export{f as default};
