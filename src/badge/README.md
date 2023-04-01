# Badge

---

#### 1、红点

设置 type 为`dot`来呈现红点的形式

```html
<v-badge type="dot" />
```

#### 2、圆形和胶囊形状

```html
<v-badge>9</v-badge>
<v-badge type="capsule">99+</v-badge>
<v-badge type="capsule">新</v-badge>
```

#### 3、不同的颜色

通过`background-color`、`text-color`来设置背景色和文本色

```html
<v-badge background-color="#67C23A">9</v-badge>
<v-badge type="capsule" background-color="#B0B3BF" text-color="#000">99+</v-badge>
```

#### 4、Accessibility

通过`aria-label`属性来设置红点的无障碍

```html
<v-badge type="dot" aria-label="新消息" />
<v-badge type="capsule" aria-label="9条新消息">9</v-badge>
<v-badge type="capsule" aria-label="99+条新消息">99+</v-badge>
```

## Props

| 属性             | 说明             | 类型     | 默认值    | 可选值                             |
| ---------------- | ---------------- | -------- | --------- | ---------------------------------- |
| type             | 徽章类型         | _string_ | `normal`  | `normal`&#124;`dot`&#124;`capsule` |
| background-color | 背景颜色         | _string_ | `#FF596A` | -                                  |
| text-color       | 文本颜色         | _string_ | `#FFF`    | -                                  |
| size             | 大小（单位: px） | _string_ | `12px`    | -                                  |

## Event

| 事件  | 说明           | 参数 |
| ----- | -------------- | ---- |
| click | 点击徽章时触发 | -    |
