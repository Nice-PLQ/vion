# SlipDrawer

---

#### 1、基础用法

通过`left-items`或`right-items`属性分别设置左右两侧的操作项，数据结构是数组对象，包含`text`和`style`字段

```html
<v-slip-drawer
  :left-items="leftItems"
  :right-items="rightItems"
  @left-click="handleLeft"
  @right-click="handleRight"
>
  <v-list title="左右滑动" arrow-direction="right" />
</v-slip-drawer>
```

```js
export default {
  data() {
    return {
      leftItems: [{ text: "置顶", style: "background: #b0c2cc" }],
      rightItems: [
        { text: "收藏", style: "background: #15bd62" },
        { text: "标记为已读", style: "background: #eac707" },
        { text: "删除", style: "background: #ee0a24" },
      ],
    };
  },
  methods: {
    handleLeft(index) {
      console.log(index);
    },
    handleRight(index) {
      console.log(index);
    },
  },
};
```

#### 2、自定操作项

`v-slot:left`、`v-slot:right`插槽可以分别自定义左右两侧的操作项

```html
<v-slip-drawer style="height: 56px;">
  <template #left>
    <button class="button reset">撤销</button>
  </template>
  <v-list title="用户昵称">
    <template v-slot:left>
      <v-avatar uin="2647439900" style="margin-right: 12px;" />
    </template>
    <template v-slot:right>
      <v-button type="gray" size="small">添加</v-button>
    </template>
  </v-list>
  <template #right>
    <div style="display: flex;">
      <button class="button like">
        点赞
        <v-icon name="like" size="14px" />
      </button>
      <button class="button share">
        分享
        <v-icon name="share" size="14px" />
      </button>
    </div>
  </template>
</v-slip-drawer>
```

```less
.button {
  height: 56px;
  padding: 0 16px;
  border: none;
  color: #fff;
  &.reset {
    background: #ee0a24;
  }
  &.share {
    background: #15bd62;
  }
  &.like {
    background: #13a2ea;
  }
}
```

#### 3、组合

使用`q-slip-drawer-group`组件来嵌套子组件

```html
<v-slip-drawer-group ref="slipDraserGroup">
  <v-slip-drawer :right-items="rightItems">
    <v-list title="QQ团队" help="登录操作通知" arrow-direction="right">
      <template v-slot:left>
        <v-avatar style="margin-right: 12px;" />
      </template>
    </v-list>
  </v-slip-drawer>
  <v-slip-drawer :right-items="rightItems">
    <v-list title="腾讯web技术支持" help="暂无消息" arrow-direction="right">
      <template v-slot:left>
        <v-avatar uin="2647439900" style="margin-right: 12px;" />
      </template>
    </v-list>
  </v-slip-drawer>
  <v-slip-drawer :right-items="rightItems">
    <v-list
      title="QQ问题反馈群"
      help="该需求排期确认..."
      arrow-direction="right"
    >
      <template v-slot:left>
        <v-avatar
          :uin="[2647439500, 2647439600, 2647439700, 2647439800]"
          style="margin-right: 12px;"
        />
      </template>
    </v-list>
  </v-slip-drawer>
</v-slip-drawer-group>
```

```js
export default {
  data() {
    return {
      rightItems: [
        { text: "收藏", style: "background: #15bd62" },
        { text: "标记为已读", style: "background: #eac707" },
        { text: "删除", style: "background: #ee0a24" },
      ],
    };
  },
  methods: {
    handleRight() {
      // 通过获取到<v-slip-drawer-group>组件实例后，调用实例的reset()方法，可以收起抽屉
      this.$refs.slipDraserGroup.reset();
    },
  },
};
```

## Props

#### SlipDrawer

| 属性        | 说明             | 类型      | 默认值  |
| ----------- | ---------------- | --------- | ------- |
| disabled    | 是否禁用         | _boolean_ | `false` |
| offset      | 允许滑动的偏移量 | _number_  | `15`    |
| left-items  | 左侧的操作项     | _Item[]_  | -       |
| right-items | 右侧的操作项     | _Item[]_  | -       |

#### Item 数据结构

`left-items|right-items`属性类型是一个数组对象，对象包含以下的属性：

| 属性  | 说明       | 类型     |
| ----- | ---------- | -------- |
| text  | 选项文本   | _string_ |
| style | 选项的样式 | _string_ |

#### SlipDrawerGroup

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| disabled | 是否禁用 | _boolean_ | `false` |

## Event

#### SlipDrawer

| 事件名      | 说明                 | 回调参数类型      |
| ----------- | -------------------- | ----------------- |
| left-click  | 点击左侧操作项时触发 | `(index: Number)` |
| right-click | 点击右侧操作项时触发 | `(index: Number)` |
| opened      | 当滑动展开后触发     | -                 |
| closed      | 当滑动关闭后触发     | -                 |

#### SlipDrawerGroup

无

## Slot

| 插槽名 | 说明               |
| ------ | ------------------ |
| left   | 自定义左侧选项内容 |
| right  | 自定义右侧选项内容 |
