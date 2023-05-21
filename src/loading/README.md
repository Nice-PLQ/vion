# Loading

---

#### 1、普通类型的 loading

通过`visible`属性控制 loading 组件的显示与隐藏

```html
<v-loading /> <v-loading :visible="false" />
```

#### 2、带文本的 loading

```html
<v-loading>正在加载</v-loading>
```

#### 3、loading 图标颜色配置，只支持纯色

```html
<v-loading color="#67C23A" />
<v-loading color="#00CAFC" />
<v-loading color="#FF596A" />
```

#### 4、环形进度条

```html
<v-loading type="circle" :ratio="50" />
```

#### 5、快捷调用

Loading 组件默认在 vue 实例下挂载`$loading`对象，方便在业务代码中快捷调用，需要注意的是，快捷调用形式的 UI 是以浮层形式呈现，具体请参考示例。另外，此时 loading 图标不支持颜色配置

```html
<v-button @click="handleShow" type="primary">显示浮层loading</v-button>
<v-button @click="handleHide" type="warning">隐藏浮层loading</v-button>
<v-button @click="handleShow2">定时隐藏</v-button>
```

```js
export default {
  methods: {
    handleShow() {
      this.$loading.show("加载中");
    },
    handleHide() {
      this.$loading.hide();
    },
    handleShow2() {
      this.$loading.show({
        text: "3s后自动隐藏",
        duration: 3000,
      });
    },
  },
};
```

## Props

| 属性    | 说明                        | 类型      | 默认值   | 可选值                              |
| ------- | --------------------------- | --------- | -------- | ----------------------------------- |
| visible | 显示与隐藏                  | _boolean_ | `true`   |                                     |
| type    | loading 类型                | _string_  | `normal` | `normal`&#124;`float`&#124;`circle` |
| theme   | 图标样式                    | _string_  | `white`  | `white`&#124;`gray`&#124;`red`      |
| size    | 图标大小(单位: px)          | _string_  | `16px`   |                                     |
| ratio   | 环形进度条的进度比例，1-100 | _number_  | `0`      |                                     |

#### 快捷调用

| 方法名       | 说明         | 参数                     |
| ------------ | ------------ | ------------------------ |
| Loading.show | 展示 loading | `options`&#124;`message` |
| Loading.hide | 隐藏 loading | -                        |

##### options

| 参数     | 说明                    | 类型     |
| -------- | ----------------------- | -------- |
| text     | loading 文本            | _string_ |
| duration | 自动隐藏时长（单位 ms） | _number_ |
