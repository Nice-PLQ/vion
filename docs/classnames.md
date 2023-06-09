# 提供快捷使用的 css 类名

`Tips:` 快捷类名在独立的 less 文件中，如需使用，请手动引入

```js
import "vion/es/style/util.less";
```

下面表格中列出了已支持的快捷类名，不定期更新

`{num}`表示数值，如`m-t-10`的含义是上外边距是`10px`，等价于 css 的`.m-t-10{ margin-top: 10px; }`
| 类名 | 说明 | 范围 |
| ----- | -------------- | -------|
| 外边距 | | |
| _m-t-{num}_ | 上外边距 | `1-64` (单位: px，下同)|
| _m-r-{num}_ | 右外边距 | |
| _m-b-{num}_ | 下外边距 | |
| _m-l-{num}_ | 左外边距 | |
| _m-x-{num}_ | 水平外边距 | |
| _m-y-{num}_ | 垂直外边距 | |
| _m-l-{num}_ | 四周外边距 | |
| 内边距 | | |
| _p-t-{num}_ | 上内边距 | |
| _p-r-{num}_ | 右内边距 | |
| _p-b-{num}_ | 下内边距 | |
| _p-l-{num}_ | 左内边距 | |
| _p-x-{num}_ | 水平内边距 | |
| _p-y-{num}_ | 垂直内边距 | |
| _p-l-{num}_ | 四周内边距 | |
| 字体 | | |
| _font-{num}_ | 字体大小 | `12-64` |
| 其他 | | |
| _tc_ | 内联水平居中 | |
| _flex-center_ | 主轴方向居中 | |
| _flex-middle_ | 垂直交叉轴方向居中 | |
| _flex-center-middle_ | 水平垂直居中 | |
| _flex-1_ | flex: 1 | |
