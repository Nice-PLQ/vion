# Popup

![](https://img.shields.io/badge/coverage-86%25-green)

---

#### 1、基础用法

通过`v-model`控制组件的显示与隐藏，`position`属性设置弹出位置

```html
<v-popup v-model="visible" position="left">
  <div style="width: 200px; height: 100%; background: #fff;"></div>
</v-popup>

<v-popup v-model="visible" position="right">
  <div style="width: 200px; height: 100%; background: #fff;"></div>
</v-popup>

<v-popup v-model="visible" position="top">
  <div style="height: 200px; background: #fff;"></div>
</v-popup>

<v-popup v-model="visible" position="bottom">
  <div style="height: 200px; background: #fff;"></div>
</v-popup>

<v-popup v-model="visible" position="center">
  <div style="width: 200px; height: 200px; background: #fff;"></div>
</v-popup>
```

```js
export default {
  data() {
    return {
      visible: false,
    };
  },
};
```

#### 2、设置弹出层内容区的动画名

可以自定义`transition-name`来控制弹出层内容区的动画，其等价于 transition 组件的[name](https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D)属性

```html
<v-popup v-model="visible" position="bottom" transition-name="slide-fade">
  <div style="height: 200px; background: #fff;"></div>
</v-popup>
```

```css
@keyframes slideFadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideFadeOut {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

.slide-fade-enter-active {
  animation: slideFadeIn 1.5s;
}

.slide-fade-leave-active {
  animation: slideFadeOut 1.5s;
}
```

## Props

| 属性            | 说明                                                                     | 类型      | 默认值         | 可选值                                                     |
| --------------- | ------------------------------------------------------------------------ | --------- | -------------- | ---------------------------------------------------------- |
| v-model/visible | 是否显示组件                                                             | _boolean_ | `false`        |                                                            |
| mask-visible    | 是否显示遮罩层                                                           | _boolean_ | `true`         |                                                            |
| mask-click-close| 点击遮罩是否关闭弹窗                                                      | _boolean_ | `true`         |                                                            |
| position        | 弹出层的位置                                                             | _string_  | `bottom`       | `top`&#124;`right`&#124;`bottom`&#124;`left`&#124;`center` |
| transition-name | 弹出层动画名，等价于 transition 组件的 name 属性                         | _string_  | `slide-bottom` |                                                            |
| lock-scroll     | 是否锁定内容滚动                                                         | _boolean_ | `true`         |                                                            |
| to              | el 选择器, 将 popup 渲染到哪个 el 下,这个 el 在执行 createApp 前必须存在 | _string_  | `body`         |                                                            |

## Event

| 事件   | 说明                         | 参数 |
| ------ | ---------------------------- | ---- |
| open   | 打开弹出层时触发             | -    |
| opened | 打开弹出层并且动画结束后触发 | -    |
| close  | 关闭弹出层时触发             | -    |
| closed | 关闭弹出层并且动画结束后触发 | -    |
