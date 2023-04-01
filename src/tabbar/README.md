# Tabbar

---

`Tabbar` 组件必须结合`TabbarItem`组件一起使用

#### 1、基础用法

```html
<v-tabbar>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="qq" />
    </template>
    QQ
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="qzone" />
    </template>
    QZone
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="wechat" />
    </template>
    Wechat
  </v-tabbar-item>
</v-tabbar>
```

#### 2、设置红点或徽章

通过设置`badge`属性来显示红点或徽章，当值为`true`时，以红点呈现，当值为数字或字符串，则以胶囊型的徽章呈现

```html
<v-tabbar>
  <v-tabbar-item :badge="true">
    <template #icon>
      <v-icon name="qq" />
    </template>
    QQ
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="qzone" />
    </template>
    QZone
  </v-tabbar-item>
  <v-tabbar-item badge="99+">
    <template #icon>
      <v-icon name="wechat" />
    </template>
    Wechat
  </v-tabbar-item>
</v-tabbar>
```

#### 3、自定义图标

通过`v-slot:icon`指令自定义标签的图标

```html
<v-tabbar v-model="current">
  <v-tabbar-item v-for="(tab, index) in tabs" :key="index" :badge="tab.badge">
    <template #icon>
      <img :src="current === index ? tab.selected : tab.unselected" />
    </template>
    {{'{{tab.label\}\}'}}
  </v-tabbar-item>
</v-tabbar>
```

```js
export default {
  data() {
    return {
      current: 0,
      tabs: [
        {
          label: "消息",
          badge: "30",
          selected:
            "https://sola.gtimg.cn/aoi/sola/20200826160924_kYGWbQNOqK.png",
          unselected:
            "https://sola.gtimg.cn/aoi/sola/20200826160924_i3k2OEiPYY.png"
        },
        {
          label: "联系人",
          badge: "新",
          selected:
            "https://sola.gtimg.cn/aoi/sola/20200826160924_AZFH5y7dWO.png",
          unselected:
            "https://sola.gtimg.cn/aoi/sola/20200826160924_T7Im0EYRu9.png"
        },
        {
          label: "看点",
          selected:
            "https://sola.gtimg.cn/aoi/sola/20200826160924_iP8jUrmE4G.png",
          unselected:
            "https://sola.gtimg.cn/aoi/sola/20200826160924_uGy1fL9Oso.png"
        },
        {
          label: "动态",
          selected:
            "https://sola.gtimg.cn/aoi/sola/20200826160924_JX7rrkBOdq.png",
          unselected:
            "https://sola.gtimg.cn/aoi/sola/20200826160924_LyYXOY5zmd.png"
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.current = index;
    }
  }
};
```

#### 4、自定义颜色

```html
<!-- 统一设置颜色 -->
<v-tabbar active-color="#00CAFC" inactive-color="#03081A">
  <v-tabbar-item>
    <template #icon>
      <v-icon name="qq" />
    </template>
    QQ
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="qzone" />
    </template>
    QZone
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="wechat" />
    </template>
    Wechat
  </v-tabbar-item>
</v-tabbar>

<!-- 分别为单个标签指定颜色 -->
<v-tabbar>
  <v-tabbar-item active-color="#00CAFC">
    <template #icon>
      <v-icon name="qq" />
    </template>
    QQ
  </v-tabbar-item>
  <v-tabbar-item active-color="#FFCD00">
    <template #icon>
      <v-icon name="qzone" />
    </template>
    QZone
  </v-tabbar-item>
  <v-tabbar-item active-color="#67C23A">
    <template #icon>
      <v-icon name="wechat" />
    </template>
    Wechat
  </v-tabbar-item>
</v-tabbar>
```

## Props

#### Tabbar

| 属性           | 说明                 | 类型     | 默认值 |
| -------------- | -------------------- | -------- | ------ |
| v-model        | 当前选中标签的索引值 | _number_ | `0`    |
| active-color   | 标签选中时的颜色     | _string_ | -      |
| inactive-color | 标签未选中时的颜色   | _string_ | -      |

#### TabbarItem

| 属性           | 说明                                                     | 类型                                      | 默认值 |
| -------------- | -------------------------------------------------------- | ----------------------------------------- | ------ |
| badge          | 红点或徽章，值为 _true_ 时显示为红点，否则显示为胶囊形态 | _number_ &#124; _string_ &#124; _boolean_ | -      |
| active-color   | 当前标签选中时的颜色                                     | _string_                                  | -      |
| inactive-color | 当前标签未选中时的颜色                                   | _string_                                  | -      |

## Event

#### Tabbar

| 事件名 | 说明             | 回调参数类型                    |
| ------ | ---------------- | ------------------------------- |
| change | 切换标签栏时触发 | `(index: Number, event: Event)` |

#### TabbarItem

| 事件名 | 说明           | 回调参数类型     |
| ------ | -------------- | ---------------- |
| click  | 点击标签时触发 | `(event: Event)` |

## Slot

#### TabbarItem

| 插槽名 | 说明           |
| ------ | -------------- |
| icon   | 自定义图标内容 |
