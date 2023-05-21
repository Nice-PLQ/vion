# Tooltips

---

#### 1、基础用法

常用于展示提示信息，通过`visible`控制气泡显示或隐藏，`placement`设置气泡的位置

```html
<v-tooltips
  text="气泡提示的内容"
  :visible="visible"
  placement="top-center"
  @visible-change="onVisibleChange"
>
  <v-button type="primary" @click="visible = !visible"> Top-Center </v-button>
</v-tooltips>
```

```js
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    onVisibleChange(value) {
      console.log(value);
    },
  },
};
```

#### 2、自定义气泡内容

通过`v-slot:content`插槽自定义气泡内容

```html
<v-tooltips :visible="visible">
  <v-button type="primary" @click="visible = !visible">自定义内容</v-button>
  <template v-slot:content>
    <ul class="custom-tooltips">
      <li>全选</li>
      <li>复制</li>
      <li>剪切</li>
    </ul>
  </template>
</v-tooltips>
```

```css
.custom-tooltips {
  color: var(--text-white);
  display: flex;
  font-size: 14px;
  li {
    padding: 8px;
    &:not(:last-child) {
      border-right: 1px solid rgba(255, 255, 255, 0.4);
    }
  }
}
```

## Props

| 属性      | 说明         | 类型      | 默认值       | 可选值                                                                                                    |     |
| --------- | ------------ | --------- | ------------ | --------------------------------------------------------------------------------------------------------- | --- |
| visible   | 是否可见     | _boolean_ | `false`      | -                                                                                                         |
| placement | 气泡位置     | _string_  | `top-center` | `top-center`&#124;`top-left`&#124;`top-right`&#124;`bottom-center`&#124;`bottom-right`&#124;`bottom-left` |
| text      | 提示内容     | _string_  | -            | -                                                                                                         |
| animation | 是否需要动效 | _boolean_ | `true`       | -                                                                                                         |

## Event

| 事件名         | 说明                   | 参数                 |
| -------------- | ---------------------- | -------------------- |
| visible-change | visible 参数变化时触发 | `(visible: Boolean)` |
| click          | 点击气泡时触发         | -                    |

## slot

| 插槽名  | 说明           |
| ------- | -------------- |
| content | 自定义气泡内容 |
