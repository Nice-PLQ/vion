# InfiniteLoading

---

#### 1、基础用法

通过`bottom-offset`属性设置滚动到离底部多少距离时加载，默认为 0

当需要加载时，会触发`load`事件，该事件包含`loaded`、`completed`、`error`3 个函数参数，在当前页的数据加载完成后，调用`loaded`方法，在所有的数据都加载完成后，调用`completed`方法，在数据加载异常时，可调用`error`方法展示错误提示

```html
<v-infinite-loading @load="handleLoad" bottom-offset="200">
  <ul>
    <li v-for="(item, index) of list" :key="index">
      {{index + 1}}
    </li>
  </ul>
</v-infinite-loading>
```

```js
import { defineComponent, ref, effect, reactive } from 'vue'
export default defineComponent({
  setup() {
    let page = ref(1);
    let list = ref(new  Array(30 * page.value).fill(0));
    const handleScroll = (e) => {
      console.log(e);
    }
    const handleLoad = (loaded, completed, error) => {
      setTimeout(() => {
        const nextPage = page.value + 1;
        if (nextPage <= 3) {
          list.value = new  Array(30 * nextPage).fill(0)
          page.value = nextPage;
          loaded();
        } else {
          completed();
        }
      }, 1000);
    }
    return {
        handleLoad,
        handleScroll,
        page,
        list
    }
  }
})
```

#### 2、指定容器内的滚动加载

默认情况下是监听 document 的滚动事件，如果需要在指定的容器内进行滚动加载，可通过设置`container`属性指定容器，该属性的值是 css 选择器，例如 id 选择器：`#list_wrapper`

`画重点：q-infinite-loading`组件的父容器需要设置高度

```html
<div id="list_wrapper" style="height: 300px; overflow: scroll;">
  <v-infinite-loading @load="handleLoad" container="#list_wrapper">
    <ul>
      <li class="list-item" v-for="(item, index) of list" :key="index">
        {{index + 1}}
      </li>
    </ul>
  </v-infinite-loading>
</div>
```

## Props

| 属性           | 说明                       | 类型                     | 默认值              |
| -------------- | -------------------------- | ------------------------ | ------------------- |
| bottom-offset  | 滚动到离底部多少距离时加载 | _string_ &#124; _number_ | `0`                 |
| loading-text   | 正在加载时的提示           | _string_                 | `正在加载`          |
| completed-text | 完成加载时的提示           | _string_                 | `没有更多的数据了~` |
| error-text     | 加载异常时的提示           | _string_                 | `数据加载异常`      |
| container      | 父容器的 css 选择器        | _string_                 | -                   |

## Event

| 事件   | 说明                                     | 参数                                                       |
| ------ | ---------------------------------------- | ---------------------------------------------------------- |
| load   | 当滚动到离底部`bottom-offset`的值时触发  | `(loaded: Function, completed: Function, error: Function)` |
| scroll | 滚动时持续触发，等价于原生的`scroll`事件 | `(event: Event)`                                           |

## slot

| 插槽名    | 说明                 |
| --------- | -------------------- |
| loading   | 正在加载时的提示内容 |
| completed | 完成加载时的提示内容 |
| error     | 加载异常时的提示内容 |
