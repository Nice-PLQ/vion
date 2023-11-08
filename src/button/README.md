# Button

![](https://img.shields.io/badge/coverage-90.9%25-green)

---

#### 1、按钮类型

支持`primary`、`warning`、`ghost`、`link`、`default`六种类型，默认类型是`default`

```html
<v-button @click="handleClick">默认按钮</v-button>
<v-button type="primary" @click="handleClick">主按钮</v-button>
<v-button type="warning" @click="handleClick">警示按钮</v-button>
<v-button type="ghost" @click="handleClick">灰色按钮</v-button>
<v-button type="link">文本按钮</v-button>
```

```js
export default {
  methods: {
    handleClick(e) {
      alert("点击了按钮！");
    },
  },
};
```

#### 2、loading 状态

通过设置 `loading` 属性控制按钮显示 loading 图标，图标颜色跟随按钮字体颜色变化。在 loading 时，按钮处于禁用状态。

```html
<v-button type="primary" loading>主按钮</v-button>
<v-button type="warning" loading>警示按钮</v-button>
```

#### 3、按钮禁用

```html
<v-button type="primary" disabled>主按钮</v-button>
```

#### 4、按钮禁用

```html
<v-button type="primary" disabled>主按钮</v-button>
```

#### 5、按钮大小

Button 组件提供三种尺寸大小，`small`、`medium`、`large`，通过设置`size`来更改大小，默认值为`medium`

```html
<v-button type="ghost" size="medium">灰色按钮</v-button>
<v-button size="large">默认按钮</v-button>
<v-button type="primary" size="large">主按钮</v-button>
<v-button size="small">默认按钮</v-button>
<v-button type="primary" size="small">主按钮</v-button>
<v-button type="ghost" size="small">灰色按钮</v-button>
<v-button type="warning" size="small">警示按钮</v-button>
```

#### 6、按钮组合

使用`<v-button-group>`标签来嵌套你的按钮

```html
<v-button-group>
  <v-button type="primary">主按钮</v-button>
  <v-button>默认按钮</v-button>
</v-button-group>
```

## Props

| 属性              | 说明                | 类型      | 默认值    | 可选值                                                           |
| ----------------- | ------------------- | --------- | --------- | ---------------------------------------------------------------- |
| type              | 按钮的样式类型      | _string_  | `default` | `default`&#124;`primary`&#124;`warning`&#124;`ghost`&#124;`link` |
| size              | 按钮的大小          | _string_  | `medium`  | `small`&#124;`medium`&#124;`large`                               |
| disabled          | 是否禁用            | _boolean_ | `false`   |                                                                  |
| loading           | 是否 loading 态     | _boolean_ | `false`   |                                                                  |
| show-loading-icon | 是否 loading 的图标 | _boolean_ | `true`   |                                                                  |

## Event

| 事件  | 说明           | 参数             |
| ----- | -------------- | ---------------- |
| click | 点击按钮时触发 | `(event: Event)` |
