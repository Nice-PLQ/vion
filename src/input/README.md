# Input

---

#### 1、基础用法

通过 `v-model` 绑定当前输入框的值

```html
<v-input placeholder="请输入" v-model="value" />
```

```js
export default {
  data() {
    return {
      value: "",
    };
  },
};
```

#### 2、自定义输入框右边的额外元素

通过`v-slot:extra`指令设置右边的额外元素，`v-slot`指令只能应用在 template 标签里

```html
<v-input placeholder="请输入验证码">
  <template v-slot:extra>
    <button class="sms-code-btn">发送验证码</button>
  </template>
</v-input>
```

#### 3、标题

`label`属性定义标题，也可以通过`v-slot:label`自定义标题

```html
<v-input label="标题" placeholder="请输入内容"></v-input>

<v-input placeholder="请输入手机号">
  <template v-slot:label>
    <div class="custom-label">中国大陆+86</div>
  </template>
</v-input>
```

#### 4、限制字符长度

`max-length`属性用于限定输入框允许输入的最大长度，超出的会被截断，可以结合`show-count-indicator`显示字数指示器

```html
<v-input
  label="标题"
  placeholder="最多10个字符"
  :max-length="10"
  show-count-indicator
/>
```

#### 5、输入数字

```html
<v-input
  type="tel"
  label="手机号"
  placeholder="请输入手机号"
  show-count-indicator
/>
```

#### 6、多行的文本域,支持高度自适应。

```html
<v-input label="文本域" placeholder="请输入" type="textarea" />
```

```html
<v-input label="文本域" placeholder="请输入" type="textarea" autoSize="true" />
```

#### 7、标题对齐方式

通过结合`label-align`和`label-width`属性控制输入框标题的对齐方式

```html
<v-input
  label="新密码"
  type="password"
  label-align="right"
  label-width="70px"
  placeholder="请设置新密码"
/>
<v-input
  label="确认密码"
  type="password"
  label-align="right"
  label-width="70px"
  placeholder="请再次输入新密码"
/>
```

#### 8、输入框组合

使用`<v-input-group>`标签来嵌套你的输入框

```html
<v-input-group label-align="center" label-width="70px">
  <v-input label="QQ" placeholder="请输入QQ账号" />
  <v-input label="邮箱" placeholder="请输入邮箱" />
  <v-input label="个人说明" placeholder="请输入邮箱" />
</v-input-group>
```

## Props

#### Input

| 属性                 | 说明                                             | 类型                     | 默认值  | 可选值                                             |
| -------------------- | ------------------------------------------------ | ------------------------ | ------- | -------------------------------------------------- |
| v-model              | 绑定当前当前输入框的值                           | _string_                 | -       |                                                    |
| type                 | 输入框类型                                       | _string_                 | `input` | `input`&#124;`textarea`&#124;`tel`&#124;`password` |
| label                | 标题                                             | _string_                 | -       |                                                    |
| label-align          | 标题对齐方式                                     | _string_                 | `left`  | `left`&#124;`center`&#124;`right`                  |
| label-width          | 标题宽度（单位: px）                             | _string_                 | `auto`  |                                                    |
| help                 | 底部说明文本                                     | _string_                 | -       |                                                    |
| placeholder          | 占位文字                                         | _string_                 | -       |                                                    |
| readonly             | 是否只读                                         | _boolean_                | `false` |                                                    |
| max-length           | 允许输入的最大字符长度                           | _number_                 | -       |                                                    |
| show-count-indicator | 是否显示字数指示器，仅在设置过 max-length 时生效 | _boolean_                | `false` |                                                    |
| rows                 | 显示的行数，仅在 type 为 textarea 时生效         | _number_ &#124; _string_ | `3`     |                                                    |
| show-clear           | 是否显示清除按钮                                 | _boolean_                | `false` |                                                    |
| autoSize             | 是否使用内容撑起 textarea 的高度                 | _boolean_                | `false` |

#### InputGroup

| 属性        | 说明                                                                                                  | 类型                      | 默认值  | 可选值                            |
| ----------- | ----------------------------------------------------------------------------------------------------- | ------------------------- | ------- | --------------------------------- |
| border      | 是否需要输入框之间的边框                                                                              | _boolean_                 | `true`  |                                   |
| readonly    | 是否只读                                                                                              | _boolean_                 | `false` |                                   |
| label-align | 标题对齐方式                                                                                          | _string_                  | `left`  | `left`&#124;`center`&#124;`right` |
| label-width | 标题宽度（单位: px）                                                                                  | _string_                  | `auto`  |                                   |

## Event

#### Input

| 事件   | 说明                 | 参数                            |
| ------ | -------------------- | ------------------------------- |
| change | 输入框内容改变时触发 | `(value: String, event: Event)` |
| focus  | 输入框聚焦时触发     | `(event: Event)`                |
| blur   | 输入框失焦时触发     | `(event: Event)`                |
| clear  | 点击清除按钮时触发   | -                               |

#### InputGroup

无

## Slots

| 名称  | 说明                     |
| ----- | ------------------------ |
| label | 标题插槽                 |
| extra | 输入框右边的额外元素插槽 |
