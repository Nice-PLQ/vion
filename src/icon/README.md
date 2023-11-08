# Icon

![](https://img.shields.io/badge/coverage-46.51%25-yellow)

---

vion 的图标库依赖`vion-svg-icon`，你可以单独引入这个图标库来使用，这种方式是支持 tree-shaking 的，按需使用svg图标，所以优先考虑这种方式使用图标

```js
// 生产环境构建时，只会打包AddFriend、Delete的图标资源 ✅
import { createApp } from "vue";
import { AddFriend, Delete } from "vion-svg-icon";

const app = createApp();
app.use(AddFriend).use(Delete);
```

```html
<v-mail color="#FFCD00" size="24px" />
<v-delete color="#FFCD00" size="24px" />
```

而 Icon 组件默认依赖了`vion-svg-icon`的全量 svg 图标，该方式会引起 bundle 变大

```js
// 生产环境构建时，会打包vion-svg-icon全量的图标资源 ⚠️
import { createApp } from "vue";
import { Icon } from "vion";

const app = createApp();
app.use(Icon);
```

```html
<v-icon name="Mail" color="#FFCD00" size="24px" />
<v-icon name="Delete" color="#FFCD00" size="24px" />
```

## Props

| 属性  | 说明                   | 类型     | 默认值    |
| ----- | ---------------------- | -------- | --------- |
| name  | 图标类型               | _string_ | -         |
| size  | 图标的大小，单位自定义 | _string_ | `24px`    |
| color | 图标的颜色             | _string_ | `#989EB4` |

## Event

| 事件  | 说明           | 参数 |
| ----- | -------------- | ---- |
| click | 点击图标时触发 | -    |
