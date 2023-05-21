# Dialog

---

#### 1、基础用法

Dialog 组件默认在 vue 实例下挂载`$dialog`对象，提供`alert`、`confirm`快捷调用。

```js
this.$dialog.alert({
  title: "提示",
  content: "这是alert弹窗",
  callback: (action) => {
    console.log(action);
  },
});

this.$dialog.confirm({
  title: "提示",
  content: "这是confirm弹窗",
  callback: (action) => {
    console.log(action);
  },
});
```

#### 2、对话框内容支持 html 代码片段

使用代码片段是有风险的，需要设置`dangerouslyUseHTMLString`属性

```js
this.$dialog.alert({
  title: "提示",
  content: '<strong style="color: red;">这是alert弹窗</strong>',
  dangerouslyUseHTMLString: true,
  callback: (action) => {
    console.log(action);
  },
});
```

#### 3、手动关闭

设置`beforeClose`可阻止对话框自动关闭，在恰当的时机调用回调函数的第二个参数可手动关闭，回调参数列表可参考下面示例代码

```js
this.$dialog.alert({
  title: "提示",
  content: "这是alert弹窗",
  beforeClose: (action, done) => {
    setTimeout(done, 1000);
  },
});
```

#### 4、自定义按钮的颜色

```js
this.$dialog.confirm({
  title: "提示",
  content: "这是confirm弹窗",
  cancelBtnTextColor: "#FF596A",
  confirmBtnTextColor: "#00cafc",
  callback: (action) => {
    console.log(action);
  },
});
```

#### 5、组件方式引用

除了快捷调用外，同时提供了组件方式引用 Dialog 组件

```html
<v-button @click="visible = true" type="primary">显示</v-button>
<v-dialog
  title="提示"
  :visible="visible"
  @cancel="visible = false"
  @confirm="visible = false"
>
  <div>这是组件的弹窗用法</div>
</v-dialog>
```

```js
export default {
  data() {
    return {
      visible: false,
    };
  },
};
```

#### 6、自定义选项按钮

通过`buttons`属性定义选项按钮，该字段是数组类型，其元素可以是字符串，也可以是一个包含`text`和`color`属性的对象，其中`text`表示按钮的文本，`color`为文本的颜色

```html
<!-- 组件方式调用 -->
<v-dialog
  title="提示"
  v-model="visible"
  :buttons="['使用', '不使用', {text: '取消', color: '#FF596A'}]"
  @click="handleBtnClick"
>
  <div>可自定义多个按钮，建议最多3个</div>
</v-dialog>

<!-- 快捷方式调用 -->
<v-button @click="handleShowDialog" type="primary">自定义3个按钮</v-button>
```

```js
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleBtnClick(index) {
      console.log("按钮的索引：", index);
    },
    handleShowDialog() {
      this.$dialog.show({
        title: "提示",
        content: "可自定义多个按钮，建议最多3个",
        buttons: ["使用", "不使用", { text: "取消", color: "#FF596A" }],
        callback: (index) => {
          console.log("按钮的索引：", index);
        },
      });
    },
  },
};
```

## Props

| 属性                   | 说明                             | 类型       | 默认值                             |
| ---------------------- | -------------------------------- | ---------- | ---------------------------------- |
| v-model/visible        | 显示与隐藏                       | _boolean_  | `false`                            |
| title                  | 标题                             | _string_   | -                                  |
| content                | 对话框内容                       | _string_   | -                                  |
| show-confirm-btn       | 是否显示确定按钮                 | _boolean_  | `true`                             |
| show-cancel-btn        | 是否显示取消按钮                 | _boolean_  | `true`                             |
| confirm-btn-text       | 确定按钮文本                     | _string_   | `确定`                             |
| cancel-btn-text        | 取消按钮文本                     | _string_   | `取消`                             |
| confirm-btn-text-color | 确定按钮文本颜色                 | _string_   | `#03081A`                          |
| cancel-btn-text-color  | 取消按钮文本颜色                 | _string_   | `#03081A`                          |
| dialog-class           | 自定义对话框的class              | _string_   | -                                  |
| buttons                | 自定义选项按钮                   | _Array_    | -                                  |
| lock-scroll            | 是否锁定内容滚动（继承自 Popup） | _boolean_  | `true`                             |
| callback               | 点击取消或确定按钮后的回调       | _function_ | `(action: String)`                 |
| beforeClose            | 关闭之前的回调                   | _function_ | `(action: String, done: Function)` |

## Event

| 事件    | 说明                       | 参数              |
| ------- | -------------------------- | ----------------- |
| cancel  | 点击取消按钮时触发         | -                 |
| confirm | 点击确定按钮时触发         | -                 |
| click   | 点击*自定义*选项按钮时触发 | `(index: Number)` |

## 快捷调用

| 方法名         | 说明       | 参数      |
| -------------- | ---------- | --------- |
| Dialog.alert   | 基础对话框 | `options` |
| Dialog.confirm | 选择对话框 | `options` |
| Dialog.show    | 通用对话框 | `options` |
| Dialog.close   | 关闭对话框 | -         |

##### options

| 参数                     | 说明                       | 类型       | 默认值    | 参数                               |
| ------------------------ | -------------------------- | ---------- | --------- | ---------------------------------- |
| title                    | 标题                       | _string_   | -         | -                                  |
| content                  | 对话框内容                 | _string_   | -         | -                                  |
| showConfirmBtn           | 是否显示确定按钮           | _boolean_  | `true`    | -                                  |
| showCancelBtn            | 是否显示取消按钮           | _boolean_  | `false`   | -                                  |
| confirmBtnText           | 确定按钮文本               | _string_   | `确定`    | -                                  |
| cancelBtnText            | 取消按钮文本               | _string_   | `取消`    | -                                  |
| confirmBtnTextColor      | 确定按钮文本颜色           | _string_   | `#03081A` | -                                  |
| cancelBtnTextColor       | 取消按钮文本颜色           | _string_   | `#03081A` | -                                  |
| dangerouslyUseHTMLString | 是否使用代码片段           | _boolean_  | `false`   | -                                  |
| dialog-class             | 自定义对话框的class        | _string_   | -                                              |
| buttons                  | 自定义选项按钮             | _Array_    | -         |
| callback                 | 点击取消或确定按钮后的回调 | _function_ | -         | `(action: String)`                 |
| beforeClose              | 关闭前的回调               | _function_ | -         | `(action: String, done: Function)` |
