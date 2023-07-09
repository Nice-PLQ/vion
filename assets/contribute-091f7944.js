import{o as l,c as s,a2 as i}from"./index-2a7e0456.js";const t={class:"markdown-body"},o=i(`<h1>开发指南</h1><h3>介绍</h3><p>首先感谢你关注 Vion 组件库，并进行代码贡献。 以下是关于向 Vion 提交代码的指南。在向 Vion 提交 Issue 或者 MR 之前，请先花几分钟时间阅读以下文字</p><h3>Issue 规范</h3><ul><li>遇到问题时，请先确认这个问题已经在 issue 中有记录或者已被修复</li><li>提 Issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤</li></ul><h3>Commit Message格式规范</h3><ul><li>feat: 新特性</li><li>fix: 修改问题</li><li>refactor: 代码重构</li><li>docs: 文档修改</li><li>style: 代码格式修改, 注意不是 css 修改</li><li>test: 测试用例修改</li><li>chore: 其他修改, 比如构建流程, 依赖管理</li></ul><h3>Merge Request 规范</h3><ul><li>如果遇到问题，建议保持你的 MR 足够小。保证一个 MR 只解决一个问题或只添加一个功能</li><li>当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定</li><li>在 MR 中请添加合适的描述，并关联相关的 Issue</li></ul><h3>Merge Request 流程</h3><ol><li>从主仓库中Fork一份到自己的代码仓库</li><li>新建开发分支，分支规范要求如下： <ul><li>修复组件 bug，分支命名形式为 <strong>bugfix/[组件名]_[问题简称]</strong> ，如：<code>bugfix/button_color</code></li><li>新增全新组件，分支命名形式为 <strong>feature/[组件名]</strong>，如：<code>feature/button</code></li><li>新增组件特性，分支命名形式为 <strong>feature/[组件名]_[功能]</strong>，如：<code>feature/button_loading</code></li></ul></li><li>在新分支上开发完成后，提 Merge Request 到仓库的 dev 分支</li><li>Merge Request 会在 Review 通过后被合并到仓库 Master 分支</li></ol><h3>目录结构</h3><ul><li>仓库的组件代码位于 src 下，每个组件一个文件夹</li><li>site 目录下是文档网站的代码，本地查看网站效果时可以在目录下运行 <code>npm run dev</code> 开启文档网站</li></ul><p>项目目录大致如下：</p><pre class="hljs"><code>├─ script    # 构建脚本
├─ lib       # 产物
├─ es        # ESM产物
├─ docs      # 文档
├─ src       # 组件
├─ site      # 网站
├─ types     # 类型定义
</code></pre><h3>添加新组件</h3><p>添加新组件时，请按照下面的目录结构组织文件，并在 site/[demo|docs]/config.js 中配置组件名称及相关信息。运行<code>npm run dev</code>即可以打开浏览器查看组件示例了。</p><pre class="hljs"><code>src
|- button
|  ├─ __test__         # 单元测试
|  ├─ demo             # 示例代码
|  ├─ button.vue       # 组件源码
|  ├─ index.js         # 组件入口
|  ├─ style.js         # 样式入口
|  ├─ README.md        # 组件文档
|
|- style
|  ├─ button.less      # 组件样式
|
├─ index.js            # 所有组件入口
├─ index-es.js         # ESM组件入口
├─ config.js           # 配置文件
</code></pre><h3>关于相关命名规范</h3><ul><li>样式的 class 必须以<code>v-</code>作为前缀，并遵循<a href="https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83">BEM</a>命名规范</li><li>组件 API 命名尽可能语义简洁，不能带有业务含义</li></ul>`,20),n=[o],h={__name:"contribute",setup(c,{expose:e}){return e({frontmatter:{}}),(u,d)=>(l(),s("div",t,n))}};export{h as default};
