# Checkbox

![](https://img.shields.io/badge/coverage-100%25-green)

---

#### 1、基础用法

通过`v-model`绑定多选框的选中状态，`true`表示选中，`false`表示未选中

```html
<v-checkbox v-model="checked" />
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```

#### 2、禁用状态

通过`disabled`属性来禁用多选框，禁用状态下多选框不可以选择操作

```html
<v-checkbox v-model="checked" disabled />
```

#### 3、设置选中时的背景颜色

```html
<v-checkbox v-model="checked" checked-color="#67C23A">自定义背景色</v-checkbox>
```

#### 4、多选框大小自定义

`size`可以设置多选框的大小，单位 px

```html
<v-checkbox v-model="checked" size="24px">24px</v-checkbox>
<v-checkbox v-model="checked" size="18px">18px</v-checkbox>
```

#### 5、不同形状

```html
<v-checkbox v-model="checked" shape="square">方形多选框</v-checkbox>
```

#### 6、多选框组合

使用`<v-checkbox-group>`标签来嵌套你的多选框，此时`v-model`绑定的是一个数组值

```html
<v-checkbox-group v-model="checkList">
  <v-checkbox value="a">多选A</v-checkbox>
  <v-checkbox value="b">多选B</v-checkbox>
  <v-checkbox value="c">多选C</v-checkbox>
</v-checkbox-group>
```

```html
<v-checkbox-group v-model="dataTime" vertical>
  <v-checkbox value="month">一个月</v-checkbox>
  <v-checkbox value="quarter">一个季</v-checkbox>
  <v-checkbox value="year">一年</v-checkbox>
</v-checkbox-group>
```

```js
export default {
  data() {
    return {
      checkList: ["b"],
      dataTime: ["month"],
    };
  },
};
```

## Props

#### Checkbox

| 属性            | 说明                     | 类型      | 默认值    | 可选值                                      |
| --------------- | ------------------------ | --------- | --------- | ------------------------------------------- |
| v-model/checked | 多选框选中的状态         | _boolean_ | `false`   | -                                           |
| disabled        | 禁用状态                 | _boolean_ | `false`   | -                                           |
| readonly        | 是否只读                 | _boolean_ | `false`   | -                                           |
| checked-color   | 选中时的背景色           | _string_  | `#00CAFC` | -                                           |
| size            | 多选框的大小（单位：px） | _string_  | `16px`    | -                                           |
| count           | 多选框的数值             | _number_  | -         | -                                           |
| shape           | 设置形状，支持方形和圆形 | _string_  | `circle`  | `circle`&#124;`square` |

#### Checkbox-Group

| 属性     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| v-model  | 多选框选中的值             | _array_   | `[]`    |
| disabled | 禁用所有的多选框           | _boolean_ | `false` |
| readonly | 设置所有的多选框为只读状态 | _boolean_ | `false` |
| vertical | 是否纵向排列               | _boolean_ | `false` |

## Event

#### Checkbox

| 事件   | 说明                 | 参数                 |
| ------ | -------------------- | -------------------- |
| change | 多选框状态变化时触发 | `(checked: Boolean)` |
| click  | 多选框点击时触发     | -                    |

#### Checkbox-Group

| 事件   | 说明                 | 参数                |
| ------ | -------------------- | ------------------- |
| change | 多选框状态变化时触发 | `(selected: Array)` |
