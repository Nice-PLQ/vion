import{_ as k,r as n,o as r,c as f,a as e,w as l,b as i,g as u}from"./index-993d6fae.js";const _={data(){return{checked:!0,checked1:!0,checked2:!0,checked3:!0,checked4:!0,checked5:!0,checkList:["b"],checkList1:["aa"]}},watch:{checkList(s){console.log(s)},checkList1(s){console.log(s)}}},p={style:{"padding-bottom":"8px"}},V={style:{"margin-bottom":"10px"}};function h(s,d,x,v,o,b){const t=n("v-checkbox"),a=n("demo-doc"),m=n("v-checkbox-group");return r(),f("div",p,[e(a,{title:"基础用法"},{default:l(()=>[i("div",V,[e(t,{modelValue:o.checked,"onUpdate:modelValue":d[0]||(d[0]=c=>o.checked=c)},null,8,["modelValue"])]),e(t,{modelValue:o.checked1,"onUpdate:modelValue":d[1]||(d[1]=c=>o.checked1=c)},{default:l(()=>[u("带文本")]),_:1},8,["modelValue"])]),_:1}),e(a,{title:"设置选中背景色"},{default:l(()=>[e(t,{modelValue:o.checked2,"onUpdate:modelValue":d[2]||(d[2]=c=>o.checked2=c),"checked-color":"#67C23A"},{default:l(()=>[u("自定义背景色")]),_:1},8,["modelValue"])]),_:1}),e(a,{title:"只读"},{default:l(()=>[e(t,{checked:"",readonly:"",class:"m-r-16"},{default:l(()=>[u("选中")]),_:1}),e(t,{checked:!1,readonly:""},{default:l(()=>[u("未选中")]),_:1})]),_:1}),e(a,{title:"禁用"},{default:l(()=>[e(t,{checked:!0,disabled:"",class:"m-r-16"},{default:l(()=>[u("选中态禁用")]),_:1}),e(t,{checked:!1,disabled:""},{default:l(()=>[u("未选中禁用")]),_:1})]),_:1}),e(a,{title:"设置大小"},{default:l(()=>[e(t,{modelValue:o.checked3,"onUpdate:modelValue":d[3]||(d[3]=c=>o.checked3=c),size:"26px",class:"m-r-16"},{default:l(()=>[u("26px")]),_:1},8,["modelValue"]),e(t,{modelValue:o.checked4,"onUpdate:modelValue":d[4]||(d[4]=c=>o.checked4=c),size:"32px"},{default:l(()=>[u("32px")]),_:1},8,["modelValue"])]),_:1}),e(a,{title:"设置形状"},{default:l(()=>[e(t,{modelValue:o.checked5,"onUpdate:modelValue":d[5]||(d[5]=c=>o.checked5=c),shape:"square"},{default:l(()=>[u("方形多选框")]),_:1},8,["modelValue"])]),_:1}),e(a,{title:"多选组（横向）"},{default:l(()=>[e(m,{modelValue:o.checkList,"onUpdate:modelValue":d[6]||(d[6]=c=>o.checkList=c)},{default:l(()=>[e(t,{value:"a"},{default:l(()=>[u("多选A")]),_:1}),e(t,{value:"b"},{default:l(()=>[u("多选B")]),_:1}),e(t,{value:"c"},{default:l(()=>[u("多选C")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(a,{title:"多选组合（纵向）"},{default:l(()=>[e(m,{modelValue:o.checkList1,"onUpdate:modelValue":d[7]||(d[7]=c=>o.checkList1=c),vertical:""},{default:l(()=>[e(t,{value:"aa"},{default:l(()=>[u("多选A")]),_:1}),e(t,{value:"bb"},{default:l(()=>[u("多选B")]),_:1}),e(t,{value:"cc"},{default:l(()=>[u("多选C")]),_:1})]),_:1},8,["modelValue"])]),_:1})])}const U=k(_,[["render",h]]);export{U as default};