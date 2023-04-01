# List

---

#### 1、基础用法

```html
<v-list
  title="列表标题"
  help="辅助信息"
  desc="列表摘要"
  arrow-direction="right"
></v-list>
```

#### 2、自定义右侧图标

`v-slot:icon`自定义列表右侧的图标

```html
<v-list title="列表标题" help="通过v-slot:icon设置">
  <template v-slot:icon>
    <v-icon name="Check" color="var(--brand-standard)" />
  </template>
</v-list>
```

#### 3、自定义右侧区域的内容

`v-slot:right`自定义列表右侧展示的内容

```html
<v-list title="列表标题">
  <template v-slot:right>
    <v-switch />
  </template>
</v-list>

<v-list title="列表标题">
  <template v-slot:right>
    <v-avatar uin="2647439900" size="14px" style="margin-right: 12px;" />
    <v-icon name="ArrowRight" size="16px"></v-icon>
  </template>
</v-list>
```

#### 4、自定义左侧区域的内容

`v-slot:left`自定义列表左侧展示的内容

```html
<v-list title="用户昵称">
  <template v-slot:left>
    <v-checkbox style="margin-right: 8px;" />
    <v-avatar uin="2647439900" style="margin: 0 12px;" />
  </template>
</v-list>
```

#### 5、标题颜色

```html
<v-list title="链接操作" title-color="var(--text-link)"></v-list>
```

#### 6、列表组合

通过`q-list-group`组件标签来嵌套列表，`border`属性可设置列表项之间是否需要边框

```html
<v-list-group :border="false">
  <v-list title="列表标题" desc="详细说明"></v-list>
  <v-list title="列表标题" desc="详细说明"></v-list>
</v-list-group>
<v-list-group>
  <v-list title="列表标题" desc="详细说明"></v-list>
  <v-list title="列表标题" desc="详细说明"></v-list>
</v-list-group>
```

## Props

#### List

| 属性            | 说明                   | 类型     | 默认值   | 可选值                        |
| --------------- | ---------------------- | -------- | -------- | ----------------------------- |
| title           | 列表标题               | _string_ | -        |                               |
| title-color     | 列表标题颜色           | _string_ | -        |                               |
| help            | 辅助标题               | _string_ | -        |                               |
| desc            | 详细说明               | _string_ | -        |                               |
| arrow-direction | 箭头图标的方向         | _string_ | `right`  | `right`&#124;`up`&#124;`down` |
| desc-ellipsis   | 详细说明的文本省略方式 | _string_ | `single` | `single`&#124;`multiple`      |

#### ListGroup

| 属性   | 说明                 | 类型      | 默认值 |
| ------ | -------------------- | --------- | ------ |
| border | 是否显示列表项的边框 | _boolean_ | `true` |
| title  | 列表组标题           | _string_  | -      |
| border | 列表组底部附加说明   | _string_  | -      |

## Event

#### List

| 事件  | 说明           | 参数 |
| ----- | -------------- | ---- |
| click | 列表点击时触发 | -    |

#### ListGroup

无

## slot

#### List

| 插槽名 | 说明                     |
| ------ | ------------------------ |
| left   | 自定义列表左侧展示的内容 |
| right  | 自定义列表右侧展示的内容 |
| icon   | 自定义列表右侧的图标     |
| title  | 自定义标题内容           |
| help   | 自定义辅助文本           |

#### ListGroup

无
