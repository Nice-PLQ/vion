# Avatar

![](https://img.shields.io/badge/coverage-93.33%25-green)

---

#### 1、单一头像

通过 color 设置默认头像的颜色，也可以设置 url 来自定义头像

```html
<v-avatar />
<v-avatar color="blue" />
<v-avatar url="https://path/to/avatar/url" />
```

#### 3、设置头像大小

通过`size`字段设置头像的大小，单位是 px

```html
<v-avatar size="28px" />
```

#### 4、头像集合

可以同时设置 2 - 4 个头像显示，与此同时头像也会被缩放

```html
<v-avatar
  size="28px"
  :url="[
    'https://path/to/avatar/url_1',
    'https://path/to/avatar/url_2',
    'https://path/to/avatar/url_3',
    'https://path/to/avatar/url_4', 
  ]"
/>
```

#### 5、轮播头像

同时设置多个头像时，可以让头像滚动播放起来

```html
<v-avatar
  size="28px"
  :url="[
    'https://path/to/avatar/url_1',
    'https://path/to/avatar/url_2',
    'https://path/to/avatar/url_3',
    'https://path/to/avatar/url_4', 
  ]"
  carousel
/>
```

## Props

| 属性     | 说明                                                | 类型                    | 默认值  |
| -------- | --------------------------------------------------- | ----------------------- | ------- |
| url      | 头像的 url 链接                                     | _string_ &#124; _array_ | -       |
| color    | 默认头像的颜色                                      | _string_                | -       |
| size     | 头像大小（单位: px）                                | _string_                | `20px`  |
| carousel | 是否为轮播头像（仅当 uin 或 url 长度大于 1 时生效） | _boolean_               | `false` |

## Event

| 事件  | 说明           | 参数 |
| ----- | -------------- | ---- |
| click | 点击头像时触发 | -    |
