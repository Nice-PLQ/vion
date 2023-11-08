# NavBar

![](https://img.shields.io/badge/coverage-100%25-green)

---

#### 1、基础用法

默认展示导航栏左侧的返回图标

```html
<v-nav-bar>标题</v-nav-bar>
```

#### 2、设置左右两边的图标或文本

通过`left-icon`设置左边的图标，默认只能设置`left`或`close`，若需要额外的图标，参考下面第 3 点的自定义左侧区域的内容来实现。

```html
<v-nav-bar left-icon="close">标题</v-nav-bar>
<v-nav-bar left-text="取消" right-text="编辑">帐号管理</v-nav-bar>
```

#### 3、自定义导航栏左右区域内容

`v-slot:left`自定义左侧内容的展示，`v-slot:right`自定义右侧内容的展示，通过这两个插槽可以实现更为复杂的导航

```html
<v-nav-bar>
  <template v-slot:left>
    <div class="left-content">
      <v-avatar uin="2647439900" size="18px" />
      <div class="m-l-8">
        飞翔的企鹅
        <div class="status online">
          4G在线 <v-icon name="ArrowRight" size="12px"></v-icon>
        </div>
      </div>
    </div>
  </template>
  <template v-slot:right>
    <v-icon name="Camera" size="24px" class="m-r-10" />
    <v-icon name="Add" size="24px" />
  </template>
</v-nav-bar>

<v-nav-bar>
  我的资料
  <template v-slot:left>
    <v-avatar uin="2647439900" size="14px" />
  </template>
  <template v-slot:right>
    <v-icon name="Setting" size="18px" />
  </template>
</v-nav-bar>
```

#### 4、主题

```html
<v-nav-bar theme="white" right-icon="scan">白色主题</v-nav-bar>
<v-nav-bar theme="gray" right-icon="quit">灰色主题</v-nav-bar>
```

## Props

| 属性           | 说明                     | 类型      | 默认值  | 可选值              |     |
| -------------- | ------------------------ | --------- | ------- | ------------------- | --- |
| show-left-icon | 是否展示导航栏左侧的图标 | _boolean_ | `true`  |                     |
| left-icon      | 导航栏左侧的图标         | _string_  | `left`  | `left`&#124;`close` |
| left-text      | 导航栏左侧的文字         | _string_  | -       |                     |
| right-text     | 导航栏右侧的文字         | _string_  | -       |                     |
| theme          | 导航栏主题               | _string_  | `white` | `white`&#124;`gray` |

## Event

| 事件             | 说明                   | 参数             |
| ---------------- | ---------------------- | ---------------- |
| back             | 点击左侧返回时触发     | `(event: Event)` |
| left-click       | 点击左侧区域内容时触发 | `(event: Event)` |
| title-click      | 点击标题时触发         | `(event: Event)` |
| right-click      | 点击右侧区域内容时触发 | `(event: Event)` |
| right-text-click | 点击右侧的文本时触发   | `(event: Event)` |

## slot

| 插槽名 | 说明                 |
| ------ | -------------------- |
| left   | 自定义导航栏左侧内容 |
| title  | 自定义导航栏标题内容 |
| right  | 自定义导航栏右侧内容 |
