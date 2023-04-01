# NoticeBar

---

#### 1、基础用法

常用于顶部展示通知，通过`type`来设置通知栏的展示类型

```html
<v-notice-bar type="warning">网络出现异常，请检查。</v-notice-bar>
<v-notice-bar type="info">现在的等级不支持该服务，敬请期待。</v-notice-bar>
<v-notice-bar type="black">现在的等级不支持该服务，敬请期待。</v-notice-bar>
<v-notice-bar type="gray">现在的等级不支持该服务，敬请期待。</v-notice-bar>

<!-- 固定在顶部 -->
<v-notice-bar type="warning" fixed>网络出现异常，请检查。</v-notice-bar>
```

#### 2、自定义 ICON 或图片

通过 `v-slot` 可以指定绑定 icon，注意该指令只能作用在 `template` 标签中，如需要将图标更改为自定义图片，参考下方示例

```html
<v-notice-bar icon="success-o" icon-color="#00ddc6">自定义icon</v-notice-bar>

<v-notice-bar>
  将icon设置为图片
  <template v-slot:icon>
    <div
      :style="{
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://qzonestyle.gtimg.cn/aoi/sola/20191216110827_dUvRTX1bBy.png)',
          backgroundSize: '100% 100%'
        }"
    ></div>
  </template>
</v-notice-bar>
```

## Props

| 属性             | 说明           | 类型      | 默认值  | 可选值                                         |
| ---------------- | -------------- | --------- | ------- | ---------------------------------------------- |
| type             | 通知栏类型     | _string_  | `info`  | `info`&#124;`warning`&#124;`black`&#124;`gray` |
| icon-color       | 通知图标的颜色 | _string_  | -       | -                                              |
| text-color       | 文本的颜色     | _string_  | -       | -                                              |
| background-color | 背景颜色       | _string_  | -       | -                                              |
| fixed            | 是否固定在顶部 | _boolean_ | `false` |                                                |
| right-text       | 右方文本内容   | _string_  | -       | -                                              |
| right-icon-type  | 右方图标类型   | _string_  | -       | `right`&#124;`close`                           |

## Event

| 事件名           | 说明                 | 参数 |
| ---------------- | -------------------- | ---- |
| click            | 点击通知栏时触发     | -    |
| right-text-click | 右方文本点击时触发   | -    |
| right-icon-click | 最右方图标点击时触发 | -    |

## slot

| 插槽名 | 说明           |
| ------ | -------------- |
| icon   | 自定义图标内容 |
