<p>
  <a href="https://nice-plq.github.io/vion/" target="_blank" rel="noopener noreferrer">
    <img width="200" src="../logo.svg" alt="Vion logo">
  </a>
</p>
<br/>
<p>
  <a href="https://npmjs.com/package/vion"><img src="https://badgen.net/npm/v/vion"></a>
  <img src="https://img.shields.io/badge/coverage-88.15%25-green">
  <img src="https://img.shields.io/badge/PR-welcome-brightgreen">
</p>
<br/>

## 特性

- 基于 Vue3 构建
- 30 个组件
- 完善的示例和文档说明
- 单元测试覆盖 88%
- 支持 tree-shaking
- 支持国际化
- 支持服务端渲染

## 快速上手

### 1、安装

```
tnpm install vion --save
```

### 2、引用组件

##### 方式一: 自动按需引入组件（推荐）

vion 原生支持基于 ES Module 按需引入组件，未使用的组件会自动 Tree Shaking 掉，包括 js 和 css 代码，无需配置任何插件即可实现。

以`Button`为例，下面的代码打包后，只会保留 Button 组件的 js 和 css 代码，其他的都会被剔除掉。

```js
import { createApp } from "vue";
// 以 Button 为例
import { Button } from "vion";

const app = createApp();
app.use(Button);
```

##### 方式二：全量引入

组件全量引入会将没有使用的组件一同打包到代码里，会导致业务代码体积增加，一般不推荐全量引入

```js
import { createApp } from "vue";

import vion from "vion/lib";
import "vion/lib/style/index.css";

const app = createApp();
app.use(vion);
```

通过`app.use`加载的组件，都可以用`<v-xxx />`的标签形式使用，如`<v-button>按钮</v-button>`

### 3、关于 SVG 图标

vion 的图标库依赖`vion-svg-icon`，你可以单独引入这个图标库来使用，这种方式是支持 tree-shaking 的，按需使用图标，所以优先考虑这种方式使用图标。而 Icon 组件默认依赖了`vion-svg-icon`的全量 svg 图标，该方式会引起 bundle 变大。

```js
// ✅ 建议 ✅
import { createApp } from "vue";
import { Mail, Delete } from "vion-svg-icon";

const app = createApp();
app.use(Mail).use(Delete);


// ⚠️ 尽量避免使用全量的Icon组件，除非你确定是真的需要 ⚠️
import { createApp } from "vue";
import { Icon } from "vion";

const app = createApp();
app.use(Icon);
```
