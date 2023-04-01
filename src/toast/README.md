# Toast

---

#### 1、基础用法

Toast 组件默认在 vue 实例下挂载`$toast`对象，方便在业务代码中快捷调用

```html
<v-button @click="success" type="primary">完成类提示</v-button>
<v-button @click="error" type="warning">警示类提示</v-button>
<v-button @click="info">通知类提示</v-button>
```

```js
export default {
  methods: {
    success() {
      this.$toast.success('草稿已保存');
    },
    error() {
      this.$toast.error('此账号为高风险账号');
    },
    info() {
      this.$toast({
        type: 'info',
        message: '今天的任务已经完成了',
        duration: 3000
      });
    }
  }
};
```

## Props

#### 快捷调用

| 方法名        | 说明     | 参数                     |
| ------------- | -------- | ------------------------ |
| Toast.success | 成功提示 | `options`&#124;`message` |
| Toast.error   | 错误提示 | `options`&#124;`message` |
| Toast.info    | 信息提示 | `options`&#124;`message` |

##### options

| 参数     | 说明                    | 类型      | 可选值                             |
| -------- | ----------------------- | --------- | ---------------------------------- |
| type     | toast 类型              | _string_  | `success`&#124;`error`&#124;`info` |
| message  | 提示文案                | _string_  | -                                  |
| duration | 自动隐藏时长（单位 ms） | _number_  | 1500                               |
| safe     | 是否适配刘海屏          | _boolean_ | false                              |
