# Avatar

---

#### 1、单一头像

通过 uin（即 qq）或 url 属性可以设置头像

```html
<v-avatar uin="2647439500" />
<v-avatar
  url="https://qzonestyle.gtimg.cn/aoi/sola/20200314113311_co3AxlROWA.png"
/>
```

#### 2、群头像

`group`属性标识头像为群头像，此时`uin`为群号

```html
<v-avatar uin="325710777" group />
```

#### 3、设置头像大小

通过`size`字段设置头像的大小，单位是 px

```html
<v-avatar uin="2647439600" size="28px" />
```

#### 4、头像集合

可以同时设置最多 4 个头像显示，与此同时头像也会被缩放

```html
<v-avatar size="28px" :uin="[2647439700, 2647439800]" />
<v-avatar size="28px" :uin="[2647439500, 2647439600, 2647439800]" />
<v-avatar size="28px" :uin="[2647439500, 2647439600, 2647439700, 2647439800]" />
```

#### 5、轮播头像

同时设置多个头像时，可以让头像滚动播放起来

```html
<v-avatar size="28px" :uin="[2647439500, 2647439600, 2647439700, 2647439800, 2647439900]" carousel />
```

## Props

| 属性     | 说明                 | 类型                                    | 默认值  |
| -------- | -------------------- | --------------------------------------- | ------- |
| uin      | qq 号                | _string_ &#124; _number_ &#124; _array_ | -       |
| url      | 头像的 url 链接      | _string_ &#124; _array_                 | -       |
| group    | 是否为群头像         | _boolean_                               | `false` |
| size     | 头像大小（单位: px） | _string_                                | `20px`  |
| carousel | 是否为轮播头像（仅当uin或url长度大于1时生效） | _boolean_            | `false`  |

## Event

| 事件  | 说明           | 参数 |
| ----- | -------------- | ---- |
| click | 点击头像时触发 | -    |
