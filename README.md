# Vion

## 特性

- 基于 Vue3 构建
- 30 个组件
- 完善的示例和文档说明
- 支持 tree-shaking
- 支持主题定制
- 支持国际化
- 支持服务端渲染

## 快速上手

### 1、安装

```
npm install vion --save
```

### 2、引用组件

#### 方式一: 自动按需引入组件（推荐）

Vion 原生支持基于 ES Module 按需引入组件，未使用的组件会自动 Tree Shaking 掉，包括 js 和 css 代码，无需配置任何插件即可实现。

以`Button`为例，下面的代码打包后，只会保留 Button 组件的 js 和 css 代码，其他的都会被剔除掉。

```js
import { createApp } from "vue";
// 以 Button 为例
import { Button } from "vion";

const app = createApp();
app.use(Button);
```

#### 方式二：手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import { createApp } from "vue";

import Button from "vion/lib/button";
import "vion/lib/style/button.css";

const app = createApp();
app.use(Button);
```

#### 方式三：全量引入

组件全量引入会将没有使用的组件一同打包到代码里，会导致业务代码体积增加，一般不推荐全量引入

```js
import { createApp } from "vue";

import Vion from "vion/lib";
import "vion/lib/style/index.css";

const app = createApp();
app.use(Vion);
```

通过`app.use`加载的组件，都可以用`<v-xxx />`的标签形式使用，如`<v-button>按钮</v-button>`

## 贡献

我们十分期待你的任何贡献，无论是修复错别字、提 Bug 还是提交一个新的特性。

如果你使用过程中发现 Bug，请通过 issues 来提交并描述相关的问题，你也可以在这里查看其它的 issue，通过解决这些 issue 来贡献代码

如果你是第一次贡献代码，请阅读 [CONTRIBUTING](./CONTRIBUTING.md) 了解我们的贡献流程，并提交 Merge Request 给我们。
