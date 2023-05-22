# Tag

---

#### 1、基础用法

```html
<v-tag>深圳</v-tag>
```

#### 2、线性标签

```html
<v-tag shape="outline">深圳</v-tag>
```

#### 3、带图标

```html
<v-tag> <v-icon name="Male" size="16px" />18岁 </v-tag>
```

#### 4、不同的颜色

通过`background-color`、`text-color`来设置背景色和文本色

```html
<v-tag background-color="#E2F4FF" text-color="#09f">深圳</v-tag>
<v-tag background-color="#E8F1FF" text-color="#3385FF">水瓶座</v-tag>
```

#### 5、自定义大小

```html
<v-tag size="small">小标签</v-tag>
<v-tag size="large">大标签</v-tag>
```

## Props

| 属性       | 说明     | 类型     | 默认值    | 可选值                             |
| ---------- | -------- | -------- | --------- | ---------------------------------- |
| bg-color   | 背景颜色 | _string_ | `#00CAFC` | -                                  |
| text-color | 文本颜色 | _string_ | `#FFF`    | -                                  |
| size       | 标签大小 | _string_ | `medium`  | `small`&#124;`medium`&#124;`large` |
| shape      | 标签形状 | _string_ | `fill`    | `fill`&#124;`outline`              |

## Event

| 事件  | 说明           | 参数             |
| ----- | -------------- | ---------------- |
| click | 点击标签时触发 | `(event: Event)` |
