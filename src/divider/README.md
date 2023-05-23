# Divider

---

#### 1、基础用法

分割线默认分为粗和细两种类型，细分割线为`1px`，粗分割线为`12px`

```html
<v-divider /> <v-divider type="bold" />
```

#### 2、自定义分割线高度和背景色

需要注意的是，若要自定义分割线的高度，需要基于粗分割线基础上自定义

```html
<v-divider color="blue" />
<v-divider type="bold" height="24px" />
```

## Props

#### Row

| 属性   | 说明         | 类型     | 默认值    | 可选值                |
| ------ | ------------ | -------- | --------- | --------------------- |
| type   | 分割线的类型 | _string_ | `lighter` | `lighter`&#124;`bold` |
| color  | 分割线的颜色 | _string_ | -         | -                     |
| height | 分割线高度   | _string_ | -         | -                     |

## Event

无
