# Tab

![](https://img.shields.io/badge/coverage-96.26%25-green)

---

`Tab` 组件必须结合 `TabPanel` 组件一起使用

#### 1、基础用法

通过 `v-model` 绑定当前激活页签对应的索引值，默认情况下启用第一个页签。另外，索引值可通过`name`来自定义

```html
<v-tab v-model="active">
  <v-tab-panel title="选项一">选项一</v-tab-panel>
  <v-tab-panel title="选项二">选项二</v-tab-panel>
  <v-tab-panel title="选项三">选项三</v-tab-panel>
</v-tab>

<v-tab v-model="active1" active-bg-color="#e47575" active-text-color="#e47575">
  <v-tab-panel name="a" title="选项一">选项一</v-tab-panel>
  <v-tab-panel name="b" title="选项二">选项二</v-tab-panel>
  <v-tab-panel name="c" title="选项三">选项三</v-tab-panel>
</v-tab>
```

```js
export default {
  data() {
    return {
      active: 0 // 选中的索引
      active1: 'a' // 选中的索引
    };
  }
};
```

#### 2、页签滚动

当页签的数量大于 4 个时，将启用 tab 的滚动特性，可以通过`show-count`来调整这个数量的阀值，默认是 4

```html
<v-tab v-model="active">
  <v-tab-panel v-for="(tab,index) in tabs" :title="tab" :key="index"
    >{{tab}}</v-tab-panel
  >
</v-tab>
```

```js
export default {
  data() {
    return {
      active: 0,
      tabs: [
        "选项一",
        "选项二",
        "选项三",
        "选项四",
        "选项五",
        "选项六",
        "选项七",
        "选项八",
        "选项九",
        "选项十",
      ],
    };
  },
};
```

#### 3、禁用内容区的滚动动画

默认情况下，当切换 tab 时，内容区有转场动画，可以通过`animation`属性来禁用

```html
<v-tab :animation="false">
  <v-tab-panel title="选项一">选项一</v-tab-panel>
  <v-tab-panel title="选项二">选项二</v-tab-panel>
  <v-tab-panel title="选项三">选项三</v-tab-panel>
</v-tab>
```

#### 4、自定义动画的时长和方法

通过配合`duration`和`timing-function`属性自定义动画效果

```html
<v-tab duration="500ms" timing-function="linear">
  <v-tab-panel title="选项一">选项一</v-tab-panel>
  <v-tab-panel title="选项二">选项二</v-tab-panel>
  <v-tab-panel title="选项三">选项三</v-tab-panel>
</v-tab>
```

## Props

#### Tab

| 属性                   | 说明                                           | 类型                     | 默认值  |
| ---------------------- | ---------------------------------------------- | ------------------------ | ------- |
| v-model                | 绑定当前选中页签的标识符                       | _number_ &#124; _string_ | `0`     |
| show-count             | tab 显示的数量，当页签超过该值时将开启滚动特性 | _number_                 | `4`     |
| active-indicator-color | tab 激活时的指示器颜色                         | _string_                 | -       |
| active-text-color      | tab 激活时的文本颜色                           | _string_                 | -       |
| animation              | 是否需要过渡动画                               | _boolean_                | `true`  |
| duration               | 动画时长                                       | _string_                 | `400ms` |
| timing-function        | 动画函数                                       | _string_                 | `ease`  |

#### TabPanel

| 属性  | 说明                       | 类型     | 默认值 |
| ----- | -------------------------- | -------- | ------ |
| title | 页签的标题                 | _string_ |        |
| name  | 页签名称，作为匹配的标识符 | _string_ |        |

## Event

#### Tab

| 事件   | 说明           | 参数                                      |     |
| ------ | -------------- | ----------------------------------------- | --- |
| change | 页签改变时触发 | `(index: Number)` &#124; `(name: String)` |
| click  | 点击页签时触发 | `(index: Number)` &#124; `(name: String)` |

#### TabPanel

无
