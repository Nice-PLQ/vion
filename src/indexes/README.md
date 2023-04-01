# Indexes

---

#### 1、基础用法

通过`columns`属性配置选项的数据

```html
<v-indexes :list="list" :default-index="5">
  <template v-slot:row="scope">
    <v-list :title="`${scope.row.name}`" @click="handleClick(scope.row.name)" />
  </template>
</v-indexes>
```

```js
export default {
  data() {
    return {
      list: [
        {
          label: "当前定位",
          anchor: "#",
          children: [{ name: "深圳" }]
        },
        {
          label: "热门城市",
          anchor: "热",
          children: [
            { name: "北京" },
            { name: "上海" },
            { name: "广州" },
            { name: "深圳" }
          ]
        },
        {
          label: "A",
          children: [{ name: "安庆" }]
        }
        // ...
      ]
    };
  },
  methods: {
    handleClick(name) {
      console.log(name);
    }
  }
};
```

## Props

| 属性          | 说明                         | 类型                     | 默认值 |
| ------------- | ---------------------------- | ------------------------ | ------ |
| list          | 对象数组，用于配置显示的数据 | _List[Option]_           | -      |
| default-index | 默认索引                     | _number_ &#124; _string_ | `0`    |

## Event

| 事件   | 说明                 | 参数                       |
| ------ | -------------------- | -------------------------- |
| select | 点击右侧指示器时触发 | (index: Number&#124;String) |

## slot

| 插槽名 | 说明                     | 参数        |
| ------ | ------------------------ | ----------- |
| row    | 自定义列表左侧展示的内容 | `scope.row` |

#### List 列 数据结构

`list`是一个数组，数组的每一项是 `Option` 类型的对象，如`[Option, Option]`。

#### Option 列的项 数据结构

列的项是一个对象的结构，默认把这个对象的`label`属性用于展示组的标题以及右侧的锚点。`anchor`作为可选的属性，用于自定义锚点的展示文本

| 属性     | 说明                     | 类型     |
| -------- | ------------------------ | -------- |
| label    | 索引组的标题             | _string_ |
| anchor   | 索引组的锚点文本（可选） | _string_ |
| children | 索引组的内容             | _array_  |
