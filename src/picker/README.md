# Picker

---

#### 1、基础用法

通过`columns`属性配置选项的数据，`visible`属性控制组件显示与隐藏

```html
<v-picker :columns="columns" :visible="visible" @change="handleChange" />
```

```js
export default {
  data() {
    return {
      visible: false,
      columns: [
        { id: 10000, label: "北京市" },
        { id: 10001, label: "天津市" },
        { id: 10002, label: "河北省" },
        { id: 10003, label: "山西省" },
        { id: 10004, label: "辽宁省" },
        { id: 10005, label: "广东省" },
        { id: 10006, label: "浙江省" },
        { id: 10007, label: "江苏省" },
        { id: 10008, label: "福建省" },
        { id: 10009, label: "四川省" }
        // ....
      ]
    };
  },
  methods: {
    handleChange(selectedIndex, selected, columnIndex, picker) {
      console.log("选中的索引：" + selectedIndex);
      console.log("选中项：" + selected);
      console.log("选择的列：" + columnIndex);
      console.log("Picker组件实例" + picker);
    }
  }
};
```

#### 2、多列选择

`columns`支持配置多列，此时数组为二维数组

```html
<v-picker :columns="columns" :visible="visible" @change="handleChange" />
```

```js
const years = new Array(10)
  .fill(1)
  .map((item, index) => ({ id: index, label: 2020 + index + "年" }));
const months = new Array(12)
  .fill(1)
  .map((item, index) => ({ id: index, label: index + 1 + "月" }));
const days = new Array(30)
  .fill(1)
  .map((item, index) => ({ id: index, label: index + 1 + "日" }));

export default {
  data() {
    return {
      visible: false,
      columns: [years, months, days]
    };
  },
  methods: {
    handleChange(selectedIndex, selected, columnIndex) {}
  }
};
```

#### 3、设置列表显示的数量

通过`show-item-count`属性可以配置列可见的选项个数，范围在[3, 10]，默认显示 5 个，建议设为奇数

```html
<v-picker :columns="columns" :show-item-count="7" />
```

#### 4、多级联动

结合`change`事件进行多列的联动处理

```html
<v-picker :columns="columns" @change="handleChange" />
```

```js
// 模拟数据
const area = {
  // 省
  province: [{ id: 1000, label: "广东省" }, { id: 1001, label: "浙江省" }],
  // 市
  city: [
    { id: 2000, parentId: 1000, label: "深圳市" },
    { id: 2001, parentId: 1000, label: "广州市" },
    { id: 2002, parentId: 1000, label: "东莞市" },
    { id: 2003, parentId: 1001, label: "杭州市" },
    { id: 2004, parentId: 1001, label: "宁波市" }
  ],
  // 区
  district: [
    { id: 3000, parentId: 2000, label: "南山区" },
    { id: 3001, parentId: 2000, label: "罗湖区" },
    { id: 3002, parentId: 2001, label: "天河区" },
    { id: 3003, parentId: 2001, label: "越秀区" },
    { id: 3004, parentId: 2002, label: "长安镇" },
    { id: 3005, parentId: 2002, label: "常平镇" },
    { id: 3006, parentId: 2003, label: "西湖区" },
    { id: 3007, parentId: 2003, label: "余杭区" },
    { id: 3008, parentId: 2004, label: "北仑区" },
    { id: 3009, parentId: 2004, label: "奉化区" }
  ]
};
export default {
  data() {
    return {
      visible: false,
      columns: []
    };
  },
  mounted() {
    const provinceData = area.province;
    const cityData = area.city.filter(
      item => item.parentId === provinceData[0].id
    );
    const districtData = area.district.filter(
      item => item.parentId === cityData[0].id
    );
    // 设置每列的数据项
    this.columns = [provinceData, cityData, districtData];
  },
  methods: {
    handleChange(selectedIndex, selected, columnIndex, picker) {
      // 选择第一列的省份后，分别设置第二、三列的市、区数据项
      if (columnIndex === 0) {
        const cityData = area.city.filter(
          item => item.parentId === selected.id
        );
        const districtData = area.district.filter(
          item => item.parentId === cityData[0].id
        );
        // 设置选中省里的城市数据
        picker.setColumnValues(1, cityData);
        // 设置选中省里第一个城市里的区
        picker.setColumnValues(2, districtData);
      }

      // 选择第二列的市后，再设置区的数据项
      if (columnIndex === 1) {
        const districtData = area.district.filter(
          item => item.parentId === selected.id
        );
        picker.setColumnValues(2, districtData);
      }
    }
  }
};
```

#### 5、设置选中项

通过`selected-value`属性可以设置默认选中项

```html
<!-- 单列 选中第三个项 -->
<v-picker :columns="columns" :selected-value="columns[2]" :visible="visible" />

<!-- 多列 -->
<v-picker
  :columns="columns"
  :visible="visible"
  :selected-value="selectedValue"
/>
```

```js
export default {
  data() {
    return {
      visible: false,
      columns: [],
      selectedValue: null
    };
  },
  mounted() {
    const provinceData = area.province;
    const cityData = area.city.filter(
      item => item.parentId === provinceData[0].id
    );
    const district = area.district.filter(
      item => item.parentId === cityData[0].id
    );
    this.columns = [provinceData, cityData, district];
    this.selectedValue = [
      { id: 1000, label: "广东省" },
      { id: 2000, parentId: 1000, label: "深圳市" },
      { id: 3001, parentId: 2000, label: "南山区" }
    ];

    // 或
    /* this.selectedValue = [
      this.columns[0][0],
      this.columns[1][0],
      this.columns[2][1]
    ]; */
  }
};
```

## Props

| 属性             | 说明                                                                             | 类型                     | 默认值  |
| ---------------- | -------------------------------------------------------------------------------- | ------------------------ | ------- |
| visible          | 显示与隐藏                                                                       | _boolean_                | -       |
| mask-visible     | 是否显示遮罩层                                                                   | _boolean_                | `true`  |  |
| title            | 标题                                                                          | _string_         | -   |
| columns          | 对象数组，用于配置列显示的数据                                                   | _Column[Option]_         | `[]`    |
| show-item-count  | 配置列可见的选项个数                                                             | _number_                 | -       |
| selected-value   | 列选中的项                                                                       | _object_ &#124; _array_  | -       |
| value-key        | 选项文字对应的键名                                                               | _string_                 | `label` |
| inertia          | 惯性滚动系数，数值越大惯性越大，为 0 时没有惯性                                  | _number_ &#124; _string_ | `0.8`   |
| show-cancel      | 是否显示取消按钮                                                                 | _boolean_                | `true`  |
| show-ok          | 是否显示确定按钮                                                                 | _boolean_                | `true`  |
| cancel-text      | 取消按钮文案                                                                     | _string_                 | `取消`  |
| ok-text          | 确定按钮文案                                                                     | _strinng_                | `确定`  |
| immediate-change | 是否立即触发 change 事件，为 true 时，在过渡动画开始前触发，否则在动画结束后触发 | _boolean_                | `false` |

## Event

| 事件   | 说明             | 参数                                                                             |
| ------ | ---------------- | -------------------------------------------------------------------------------- |
| change | 选中菜单项时触发 | `(selectedIndex: Number, selected: Option, columnIndex: Number, picker: Picker)` |
| ok     | 点击确定时触发   | `(selected: Option | option[])`                                                  |
| cancel | 点击取消时触发   | -                                                                                |
| close  | 关闭时触发       | -                                                                                |

## Method

可通过 `ref` 获取到组件实例，然后调用以下的实例方法，列的索引默认从 0 开始

| 方法名               | 说明                       | 参数                                                            |
| -------------------- | -------------------------- | --------------------------------------------------------------- |
| getValues            | 获取所有列选中的值         | -                                                               |
| setValues            | 设置所有列选中的值         | `(values: Option[])`                                            |
| getColumnSelectValue | 获取指定列选中的值         | `(columnIndex: Number)`                                         |
| setColumnSelectValue | 设置指定列选中的值         | `(columnIndex: Number, value: Option)`                          |
| setColumnValues      | 设置指定列的所有项(数据源) | `(columnIndex: Number, values: Option[], resetOffset: Boolean)` |

#### Column 列 数据结构

`columns`是一个数组，单列时，数组的每一项是 `Option` 类型的对象，如`[Option, Option]`。多列时，是一个二维数组，如两列的`[[Option, Option], [Option, Option]]`

#### Option 列的项 数据结构

列的项是一个对象的结构，默认把这个对象的`label`属性用于展示，如果需要调整展示的对象字段，可通过`value-key`设置，

| 属性  | 说明       | 类型     |
| ----- | ---------- | -------- |
| label | 列的选项值 | _string_ |
