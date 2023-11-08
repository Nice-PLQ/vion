# Swiper

![](https://img.shields.io/badge/coverage-86.44%25-green)

---

`Swiper` 组件必须结合`SwiperItem`组件一起使用

#### 1、基础用法

```html
<v-swiper>
  <v-swiper-item v-for="n in 4" :key="n">{{ n }}</v-swiper-item>
</v-swiper>
```

#### 2、自动轮播

通过`auto-play`属性设置自动轮播，默认轮播间隔为 3000ms，可以通过`interval`自定义轮播间隔

```html
<v-swiper auto-play>
  <v-swiper-item v-for="n in 4" :key="n">{{ n }}</v-swiper-item>
</v-swiper>
```

#### 3、自定义指示器

通过`v-slot:indicator`指令自定义轮播指示器

```html
<v-swiper auto-play @change="change">
  <v-swiper-item v-for="n in 4" :key="n">{{ n }}</v-swiper-item>
  <template v-slot:indicator>
    <div class="custom-indicator">{{ current }} / 4</div>
  </template>
</v-swiper>
```

```js
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    change(index) {
      this.current = index;
    }
  }
};
```

## Props

#### Swiper

| 属性            | 说明                           | 类型                     | 默认值  |
| --------------- | ------------------------------ | ------------------------ | ------- |
| auto-play       | 是否自动轮播                   | _boolean_                | `false` |
| interval        | 自动轮播的时间间隔（单位: ms） | _number_                 | `3000`  |
| duration        | 动画时长 （单位: ms）          | _number_ &#124; _string_ | `500`   |
| show-indicators | 是否显示指示器                 | _boolean_                | `true`  |
| indicator-color | 指示器的颜色                   | _string_                 | -       |
| loop            | 是否开启无限循环               | _boolean_                | `true`  |

#### SwiperItem

无

## Event

#### Swiper

| 事件名 | 说明           | 回调参数类型      |
| ------ | -------------- | ----------------- |
| change | 轮播切换时触发 | `(index: Number)` |

#### SwiperItem

| 事件名 | 说明       | 回调参数类型     |
| ------ | ---------- | ---------------- |
| click  | 点击时触发 | `(event: Event)` |
