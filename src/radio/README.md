# Radio

---

#### 1、基础用法

使用`<v-radio-group>`标签来嵌套你的单选框

```html
<v-radio-group v-model="selected">
  <v-radio value="a">选项A</v-radio>
  <v-radio value="b">选项B</v-radio>
  <v-radio value="c">选项C</v-radio>
</v-radio-group>
```

```html
<v-radio-group v-model="privance" vertical>
  <v-radio value="guangdong">广东省</v-radio>
  <v-radio value="zhejiang">浙江省</v-radio>
  <v-radio value="shandong">山东省</v-radio>
</v-radio-group>
```

```js
export default {
  data() {
    return {
      selected: "b",
      privance: "guangdong"
    };
  }
};
```

#### 2、禁用状态

通过`disabled`属性来禁用单选框，禁用状态下单选框不可以点击操作

```html
<v-radio disabled />
```

#### 3、设置选中时的背景颜色

```html
<v-radio checked-color="#67C23A">自定义背景色</v-radio>
```

#### 4、自定义大小

`size`可以设置单选框的大小，单位 px

```html
<v-radio size="24px">24px</v-radio>
<v-radio size="18px">18px</v-radio>
```

#### 5、不同形状

```html
<v-radio shape="square">方形单选框</v-radio>
```

## Props

#### Radio

| 属性            | 说明                     | 类型      | 默认值    | 可选值          |
| --------------- | ------------------------ | --------- | --------- | --------------- |
| v-model/checked | 单选框选中的状态         | _boolean_ | `false`   | -               |
| disabled        | 禁用状态                 | _boolean_ | `false`   | -               |
| readonly        | 是否只读                 | _boolean_ | `false`   | -               |
| checked-color   | 选中时的背景色           | _string_  | `#00CAFC` | -               |
| size            | 单选框的大小（单位：px） | _string_  | `20px`    | -               |
| shape           | 设置形状，支持方形和圆形 | _string_  | `circle`  | `circle`&#124;`square` |

#### RadioGroup

| 属性     | 说明             | 类型      | 默认值          |
| -------- | ---------------- | --------- | --------------- |
| v-model  | 单选框选中的值   | _array_   | `string`&#124;`number` |
| disabled | 禁用所有的单选框 | _boolean_ | `false`         |
| readonly | 设置所有的单选框为只读状态 | _boolean_ | `false` |
| vertical | 是否纵向排列     | _boolean_ | `false`         |

## Event

#### Radio

| 事件   | 说明             | 参数                 |
| ------ | ---------------- | -------------------- |
| change | 单选框选中时触发 | `(checked: Boolean)` |
| click  | 单选框点击时触发 | -                    |

#### RadioGroup

| 事件   | 说明                 | 参数                        |
| ------ | -------------------- | --------------------------- |
| change | 单选框状态变化时触发 | (selected: String &#124; Number) |
