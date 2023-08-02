import{o as n,c as a,a2 as p}from"./index-993d6fae.js";const e={class:"markdown-body"},l=p(`<h2>特性</h2><ul><li>基于 Vue3 构建</li><li>30 个组件</li><li>完善的示例和文档说明</li><li>支持 tree-shaking</li><li>支持国际化</li><li>支持服务端渲染</li></ul><h2>快速上手</h2><h3>1、安装</h3><pre class="hljs"><code>tnpm install vion --save
</code></pre><h3>2、引用组件</h3><h5>方式一: 自动按需引入组件（推荐）</h5><p>vion 原生支持基于 ES Module 按需引入组件，未使用的组件会自动 Tree Shaking 掉，包括 js 和 css 代码，无需配置任何插件即可实现。</p><p>以<code>Button</code>为例，下面的代码打包后，只会保留 Button 组件的 js 和 css 代码，其他的都会被剔除掉。</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-comment">// 以 Button 为例</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Button);
</code></pre></div><h5>方式二：全量引入</h5><p>组件全量引入会将没有使用的组件一同打包到代码里，会导致业务代码体积增加，一般不推荐全量引入</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;

<span class="hljs-keyword">import</span> vion <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion/lib&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;vion/lib/style/index.css&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(vion);
</code></pre></div><p>通过<code>app.use</code>加载的组件，都可以用<code>&lt;v-xxx /&gt;</code>的标签形式使用，如<code>&lt;v-button&gt;按钮&lt;/v-button&gt;</code></p><h3>3、关于 SVG 图标</h3><p>vion 的图标库依赖<code>vion-svg-icon</code>，你可以单独引入这个图标库来使用，这种方式是支持 tree-shaking 的，按需使用图标，所以优先考虑这种方式使用图标。而 Icon 组件默认依赖了<code>vion-svg-icon</code>的全量 svg 图标，该方式会引起 bundle 变大。</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div><pre><code class="hljs js"><span class="hljs-comment">// ✅ 建议 ✅</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> { Mail, Delete } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion-svg-icon&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Mail).use(Delete);


<span class="hljs-comment">// ⚠️ 尽量避免使用全量的Icon组件，除非你确定是真的需要 ⚠️</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Icon);
</code></pre></div>`,17),r=[l],d={__name:"intro",setup(o,{expose:s}){return s({frontmatter:{}}),(t,i)=>(n(),a("div",e,r))}};export{d as default};
