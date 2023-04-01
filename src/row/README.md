# Row、Col

---

`Row` 组件必须结合`Col`组件一起使用

#### 1、基础用法

通过`Col`组件的`span`设置列的宽度栅格，`Row`组件总宽度为`24`栅格

```html
<v-row>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
```

#### 2、列的偏移

```html
<v-row>
  <v-col span="6" offset="3">offset: 3</v-col>
  <v-col span="6" offset="6">offset: 6</v-col>
</v-row>
```

#### 3、列的间距

```html
<v-row gutter="8">
  <v-col span="6">gutter: 8</v-col>
  <v-col span="6">gutter: 8</v-col>
  <v-col span="6">gutter: 8</v-col>
</v-row>
```

#### 4、水平方向上的对齐方式

```html
<v-row>
  <v-col span="4">span</v-col>
  <v-col span="4">start</v-col>
  <v-col span="4">span: 4</v-col>
</v-row>
<v-row justify="center">
  <v-col span="4">span: 4</v-col>
  <v-col span="4">center</v-col>
  <v-col span="4">span: 4</v-col>
</v-row>
<v-row justify="end">
  <v-col span="4">span: 4</v-col>
  <v-col span="4">end</v-col>
  <v-col span="4">span: 4</v-col>
</v-row>
<v-row justify="space-between">
  <v-col span="4">span: 4</v-col>
  <v-col span="10">space-between</v-col>
  <v-col span="4">span: 4</v-col>
</v-row>
<v-row justify="space-around">
  <v-col span="4">span: 4</v-col>
  <v-col span="10">space-around</v-col>
  <v-col span="4">span: 4</v-col>
</v-row>
```

#### 4、垂直方向上的对齐方式

```html
<v-row justify="space-around" align="top">
  <v-col span="4" style="height: 50px">top</v-col>
  <v-col span="4" style="height: 70px">top</v-col>
  <v-col span="4" style="height: 40px">top</v-col>
</v-row>
<v-row justify="space-around" align="center">
  <v-col span="4" style="height: 50px">center</v-col>
  <v-col span="4" style="height: 70px">center</v-col>
  <v-col span="4" style="height: 40px">center</v-col>
</v-row>
<v-row justify="space-around" align="bottom">
  <v-col span="4" style="height: 50px">bottom</v-col>
  <v-col span="4" style="height: 70px">bottom</v-col>
  <v-col span="4" style="height: 40px">bottom</v-col>
</v-row>
```

## Props

#### Row

| 属性    | 说明                       | 类型                     | 默认值    | 可选值                                                                    |
| ------- | -------------------------- | ------------------------ | --------- | ------------------------------------------------------------------------- |
| justify | 水平主轴对齐方式           | _string_                 | `start`   | `start`&#124;`center`&#124;`end`&#124;`space-between`&#124;`space-around` |
| align   | 垂直交叉轴对齐方式         | _string_                 | `top`     | `top`&#124;`center`&#124;`bottom`&#124;`stretch`                          |
| gutter  | 列的间距                   | _number_ &#124; _string_ | -         | -                                                                         |
| wrap    | 超出容器宽度时是否需要换行 | _string_                 | `no-wrap` | `wrap`&#124;`no-wrap`&#124;`wrap-reverse`                                 |

#### Col

| 属性   | 说明         | 类型                     | 默认值 |
| ------ | ------------ | ------------------------ | ------ |
| span   | 列的栅格宽度 | _number_ &#124; _string_ |        |
| offset | 列的栅偏移量 | _number_ &#124; _string_ |        |

## Event

无
