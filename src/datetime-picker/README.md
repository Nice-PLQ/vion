# DatetimePicker

---

#### 1、基础用法

通过`type`属性这是日期选择器类型

```html
<v-datetime-picker type="year" />
<v-datetime-picker type="year-month" />
<v-datetime-picker type="date" />
<v-datetime-picker type="date-time" />
<v-datetime-picker type="time" />
```

#### 2、自定义年份的范围

默认情况下，年份的范围时前后十年，可以通过`min-year`和`max-year`属性自定义范围

```html
<v-datetime-picker type="year" :min-year="2019" :max-year="2040" />
```

#### 3、设置默认时间

默认选中当前时间点，可通过给`v-model`传入指定时间点，**请注意**，该时间必须是`Date`类型，即`new Date()`之后的时间类型

```html
<v-datetime-picker type="date-time" v-model="value" @change="handleChange" />
```

```js
export default {
  data() {
    return {
      value: new Date(2030, 10, 11, 11, 11) // 2030-11-11 11:11
    };
  },
  methods: {
    handleChange(date) {
      console.log(date);

      // date是Date类型
      console.log(date instanceof Date); // true
    }
  }
};
```

## Props

| 属性          | 说明               | 类型                     | 默认值  | 可选值                                |
| ------------- | ------------------ | ------------------------ | ------- | ------------------------------------- |
| type          | 日期选择器类型     | _string_                 | `date`  | `date`&#124;`date-time`&#124;`year`&#124;`year-month`&#124;`time` |
| visible       | 显示与隐藏         | _boolean_                | `false` |                                       |
| mask-visible  | 是否显示遮罩层     | _boolean_                | `true`  |                                       |
| v-model/value | 选中的时间         | _date_                   | -       |                                       |
| min-year      | 允许选择的最小年份 | _number_                 | -       |                                       |
| max-year      | 允许选择的最大年份 | _number_                 | -       |                                       |
| inertia       | 惯性滚动系数       | _number_ &#124; _string_ | `0.8`   |                                       |
| show-cancel   | 是否显示取消按钮   | _boolean_                | `true`  |                                       |
| show-ok       | 是否显示确定按钮   | _boolean_                | `true`  |                                       |
| cancel-text   | 取消按钮文案       | _string_                 | `取消`  |                                       |
| ok-text       | 确定按钮文案       | _strinng_                | `确定`  |                                       |

## Event

| 事件   | 说明           | 参数           |
| ------ | -------------- | -------------- |
| change | 改变时间时触发 | `(date: Date)` |
| ok     | 点击确定时触发 | -              |
| cancel | 点击取消时触发 | -              |
| close  | 关闭时触发     | -              |
