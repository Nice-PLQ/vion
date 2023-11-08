# SearchBar

![](https://img.shields.io/badge/coverage-100%25-green)

---

#### 1、基础用法

通过`type`设置搜索框的样式

```html
<v-search-bar
  type="capsule"
  v-model="keyword"
/>

<v-search-bar
  type="capsule"
  v-model="keyword1"
  back-btn-visible
/>

<v-search-bar type="form" v-model="keyword2" />
```

```js
export default defineComponent({
  setup() {
    return {
      keyword: ref(''),
      keyword1: ref(''),
      keyword2: ref('')
    }
  }
})
// or
export default {
  data() {
    return {
      keyword: "",
      keyword1: "",
      keyword2: ""
    };
  }
};
```

## Props

| 属性               | 说明                 | 类型      | 默认值    | 可选值                |
| ------------------ | -------------------- | --------- | --------- | --------------------- |
| v-model/value      | 输入框的值           | _string_  | -         |                       |
| type               | 搜索框样式           | _string_  | `capsule` | `capsule`&#124;`form` |
| placeholder        | 提示信息             | _string_  | `搜索`    |                       |
| back-btn-visible   | 左侧后退箭头是否显示 | _boolean_ | `false`   |                       |
| cancel-btn-visible | 右侧取消按钮是否显示 | _boolean_ | `false`   |                       |

## Event

| 事件名         | 说明                     | 参数              |
| -------------- | ------------------------ | ----------------- |
| back-btn-click | 点击左侧后退箭头时触发   | -                 |
| change         | 搜索框文字内容变化时触发 | `(value: String)` |
| search         | 点击键盘的回车键时触发   | `(value: String)` |
| focus          | 搜索框聚焦时触发         | -                 |
| blur           | 搜索框失去焦点时触发     | -                 |
| clear          | 清除搜索框内容时触发     | -                 |
| cancel         | 点击取消按钮时触发       | -                 |
