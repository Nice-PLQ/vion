# Switch

![](https://img.shields.io/badge/coverage-100%25-green)

---

#### 1、基础用法

通过`v-model`绑定开关的选中状态，`true`表示开，`false`表示关

```html
<v-switch v-model="value" />
```

```js
export default defineComponent({
  setup() {
    return {
      value: ref(true)
    }
  }
})
// or
export default {
  data() {
    return {
      value: true
    };
  }
};
```

#### 2、禁用状态

通过`disabled`属性来禁用开关，禁用状态下开关不可以点击操作

```html
<v-switch v-model="value" disabled />
```

#### 3、自定义大小

通过`size`属性自定义开关的大小，单位是 px

```html
<v-switch size="36px" />
```

#### 4、自定义背景色

`active-color`属性表示打开时的背景色，`inactive-color`表示关闭时的背景色

```html
<v-switch v-model="value" active-color="#67C23A" inactive-color="#FF596A" />
```

#### 5、native 样式

通过设置`shap="native"`来呈现类似 ios 原生开关的样式效果（即原来旧版的样式风格）

**`Tips:`** 手 Q 在 8.8.17 版本调整了 switch 的视觉规范。这里为了考虑兼容性和通用性，将旧的样式降级到通过新增的 shap 属性来设置

```html
<v-switch v-model="value" shap="native" />
```

## Props

| 属性            | 说明                          | 类型      | 默认值    | 可选值                 |
| --------------- | ----------------------------- | --------- | --------- | ---------------------- |
| v-model/checked | 开关选中状态                  | _boolean_ | `false`   |                        |
| disabled        | 是否为禁用状态                | _boolean_ | `false`   |                        |
| size            | 开关大小，默认单位为 px       | _string_  | `26px`    |                        |
| active-color    | 打开时的背景色                | _string_  | `#01CAFC` |                        |
| inactive-color  | 关闭时的背景色                | _string_  | `#EBEDF5` |                        |
| shap            | 开关样式（2.0.0-beta20 新增） | _string_  | `normal`  | `normal`&#124;`native` |

## Event

| 事件   | 说明           | 参数                 |
| ------ | -------------- | -------------------- |
| change | 开关切换时触发 | `(checked: Boolean)` |
| click  | 点击开关时触发 | `(event: Event)`     |
