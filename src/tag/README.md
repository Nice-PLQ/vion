# Tag

---

#### 1、基础用法

```html
<v-tag>深圳</v-tag>
```

#### 2、带图标

```html
<v-tag> <v-icon name="Female" size="16px" />22岁 </v-tag>
```

#### 3、不同的颜色

通过`background-color`、`text-color`来设置背景色和文本色

```html
<v-tag background-color="#E2F4FF" text-color="#09f">深圳</v-tag>
<v-tag background-color="#E8F1FF" text-color="#3385FF">水瓶座</v-tag>
```

#### 4、自定义大小

```html
<v-tag size="small">兴趣爱好</v-tag> <v-tag size="large">兴趣爱好</v-tag>
```

## Props

| 属性             | 说明     | 类型     | 默认值    | 可选值                                                                                                            |
| ---------------- | -------- | -------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| background-color | 背景颜色 | _string_ | `#00CAFC` | -                                                                                                                 |
| text-color       | 文本颜色 | _string_ | `#FFF`    | -                                                                                                                 |
| size             | 标签大小 | _string_ | `medium`  | `small`&#124;`medium`&#124;`large`                                                                                |
| shape            | 标签形状 | _string_ | `fill`    | `fill`&#124;`outline`                                                                                             |
| color            | 标签颜色 | _string_ | `gray`    | `gray`&#124;`blue`&#124;`dark-blue`&#124;`indigo`&#124;`green`&#124;`pink`&#124;`red`&#124;`orange`&#124;`yellow` |

## Event

| 事件  | 说明           | 参数             |
| ----- | -------------- | ---------------- |
| click | 点击标签时触发 | `(event: Event)` |
