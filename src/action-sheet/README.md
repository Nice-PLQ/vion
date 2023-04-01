# ActionSheet

---

#### 1、基础用法

通过`v-model`控制组件的显示与隐藏，`items`数组定义展示的选项，数组的每一项是字符串或对象类型，对象属性见 API 文档说明

```html
<v-action-sheet
  title="ActionSheet标题"
  v-model="visible"
  :items="items"
  @select="handleSelect"
/>
```

```js
export default {
  data() {
    return {
      visible: false,
      items: ["选项一", "选项二", "选项三"]
    };
  },
  methods: {
    handleSelect(selected, selectedIndex) {
      console.log("选中的项：" + selected);
      console.log("选中的项的索引：" + selectedIndex);
    }
  }
};
```

#### 2、显示取消按钮选项

```html
<v-action-sheet
  title="ActionSheet标题"
  v-model="visible"
  :items="items"
  show-cancel
/>
```

#### 3、设置菜单项的文本颜色

将`items`属性设置为对象数组，通过对象的`color`字段可以控制文本的颜色

```html
<v-action-sheet v-model="visible" :items="items" showCancel />
<v-action-sheet v-model="visible2" :items="items2" showCancel />
```

```js
export default {
  data() {
    return {
      visible: false,
      items: [
        { text: "确定", color: "#00CAFC" },
        { text: "删除", color: "red" }
      ]
    };
  }
};
```

```js
export default {
  data() {
    return {
      visible2: false,
      items2: ["选项一", "选项二", { text: "删除", color: "red" }]
    };
  }
};
```

#### 4、选择后显示选中的图标

自定义多选和单选，此时可以将`items`属性设置为对象数组形式，对象必须包含`text`和`selected`2 个字段，通过自行设置`selected`的值来达到多选或单选的效果

```html
<v-action-sheet
  title="ActionSheet标题"
  v-model="visible"
  :items="items"
  show-cancel
  show-select-icon
  @select="handleSelect"
/>
```

```js
export default {
  data() {
    return {
      visible: false,
      items: [
        { text: "选项一", selected: false },
        { text: "选项二", selected: false }
      ]
    };
  },
  methods: {
    handleSelect(selected, selectedIndex) {
      // 多选
      const selectedItem = this.items[selectedIndex];
      selectedItem.selected = !selectedItem.selected;

      // 单选
      // this.items.forEach((item, index) => {
      //   item.selected = index === selectedIndex;
      // });
    }
  }
};
```

#### 5. 自定义标题和自定义选项
支持自定义标题和自定义选项

```html
<v-action-sheet
  v-model="visible6"
  :items="items4"
  show-cancel
>
  <template #title>
    <div style="color: #00cafc; font-size: 16px;">自定义标题</div>
  </template>
   <template #item="{data}">
    <div style="color: #00cafc;">自定义{{'{{data.item.text\}\}'}}</div>
  </template>
</v-action-sheet>
```

## Props

| 属性             | 说明                 | 类型      | 默认值  |
| ---------------- | -------------------- | --------- | ------- |
| v-model          | 显示与隐藏           | _boolean_ | -       |
| items            | 菜单选项             | _Item[]_  | `[]`    |
| title            | 顶部标题             | _string_  | -       |
| show-cancel      | 是否显示取消选择项   | _boolean_ | `false` |
| show-select-icon | 是否显示选中后的图标 | _boolean_ | `false` |

## Event

| 事件   | 说明                   | 参数                                  |
| ------ | ---------------------- | ------------------------------------- |
| select | 选中菜单项时触发       | `(item: Item, selectedIndex: number)` |
| cancel | 点击取消项时触发       | -                                     |
| close  | actionSheet 关闭时触发 | -                                     |

#### Item 数据结构

`items`属性类型是一个数组，数组项可以是`string|object`，对象类型可以包含以下的值：

| 属性  | 说明           | 类型     |
| ----- | -------------- | -------- |
| key | key(可选) | _string_ &#124; _number_ |
| text  | 选项文本       | _string_ |
| color | 选项文本的颜色 | _string_ |

## slot

| 插槽名  | 说明      | 插槽props                                           |
| ------ | -------- | --------------------------------------------------- |
| title  | 自定义标题 | -                                                   |
| item   | 自定义选项 | `{ data: { item: Item, index : number} }` |
