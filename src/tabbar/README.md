# Tabbar

![](https://img.shields.io/badge/coverage-100%25-green)

---

`Tabbar` 组件必须结合`TabbarItem`组件一起使用

#### 1、基础用法

```html
<v-tabbar>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="home" />
    </template>
    主页
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="Message" />
    </template>
    消息
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="Contact" />
    </template>
    联系人
  </v-tabbar-item>
</v-tabbar>
```

#### 2、设置红点或徽章

通过设置`badge`属性来显示红点或徽章，当值为`true`时，以红点呈现，当值为数字或字符串，则以胶囊型的徽章呈现

```html
<v-tabbar>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="home" />
    </template>
    主页
  </v-tabbar-item>
  <v-tabbar-item badge="99+">
    <template #icon>
      <v-icon name="Message" />
    </template>
    消息
  </v-tabbar-item>
  <v-tabbar-item :badge="true">
    <template #icon>
      <v-icon name="Mail" />
    </template>
    邮件
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="Contact" />
    </template>
    联系人
  </v-tabbar-item>
</v-tabbar>
```

#### 3、自定义颜色

```html
<!-- 统一设置颜色 -->
<v-tabbar active-color="#00CAFC" inactive-color="#03081A">
  <v-tabbar-item>
    <template #icon>
      <v-icon name="home" />
    </template>
    主页
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="Message" />
    </template>
    消息
  </v-tabbar-item>
  <v-tabbar-item>
    <template #icon>
      <v-icon name="Contact" />
    </template>
    联系人
  </v-tabbar-item>
</v-tabbar>

<!-- 分别为单个标签指定颜色 -->
<v-tabbar>
  <v-tabbar-item active-color="#00CAFC">
    <template #icon>
      <v-icon name="home" />
    </template>
    主页
  </v-tabbar-item>
  <v-tabbar-item active-color="#FFCD00">
    <template #icon>
      <v-icon name="Message" />
    </template>
    消息
  </v-tabbar-item>
  <v-tabbar-item active-color="#67C23A">
    <template #icon>
      <v-icon name="Contact" />
    </template>
    联系人
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
