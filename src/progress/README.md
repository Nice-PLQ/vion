# Progress

---

#### 1、基础用法

```html
<v-progress :value="val" />
<v-progress :value="val1" :show-txt="false" />
```

```js
export default {
  data() {
    return {
      val: 0.35,
      val1: 0.5,
    };
  },
};
```

#### 2、设置背景色

通过`background`属性可自定义进度条的背景色，其值等同于 css 的 background 属性，因此可以设置渐变或纯色的背景

```html
<v-progress background="linear-gradient(135deg, #F9C278 0%, #F29D2B 100%)" />
```

#### 3、自定义辅助文本

`v-slot:text`指令可设置自定义的辅助文本

```html
<v-progress :value="val">
  <template v-slot:text>
    <span style="color: #05C9FA; font-size: 12px; margin-left: 8px">LV{{Math.round(val * 10)}}</span>
  </template>
</v-progress>
```

```js
export default {
  data() {
    return {
      val: 0.8,
    };
  },
};
```

#### 4、设置高度

```html
<v-progress height="10px" background="#67C23A" />
```

#### 5、环形进度条

```html
<v-progress :value="0.5" type="circle" />
```

## Props

| 属性       | 说明                                  | 类型      | 默认值   | 可选值                 |
| ---------- | ------------------------------------- | --------- | -------- | ---------------------- |
| value      | 进度条当前值，取值范围 0-1            | _number_  | `0`      |                        |
| background | 背景色，等同于 css 的 background 属性 | _string_  |          |                        |
| show-txt   | 是否显示辅助文本                      | _boolean_ | `true`   |                        |
| height     | 进度条高度（单位：px）                | _string_  | `5px`    |                        |
| type       | 进度条类型                            | _string_  | `normal` | `normal`&#124;`circle` |

## slot

| 插槽名 | 说明           |
| ------ | -------------- |
| text   | 自定义辅助文本 |
