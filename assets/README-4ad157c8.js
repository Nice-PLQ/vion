import{o as a,c as n,a2 as t}from"./index-cac22ab8.js";const p={class:"markdown-body"},e=t(`<h1>Icon</h1><p><img src="https://img.shields.io/badge/coverage-46.51%25-yellow" alt=""></p><hr><p>vion 的图标库依赖<code>vion-svg-icon</code>，你可以单独引入这个图标库来使用，这种方式是支持 tree-shaking 的，按需使用svg图标，所以优先考虑这种方式使用图标</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div><pre><code class="hljs js"><span class="hljs-comment">// 生产环境构建时，只会打包AddFriend、Delete的图标资源 ✅</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> { AddFriend, Delete } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion-svg-icon&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(AddFriend).use(Delete);
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-mail</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#FFCD00&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-delete</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#FFCD00&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
</code></pre></div><p>而 Icon 组件默认依赖了<code>vion-svg-icon</code>的全量 svg 图标，该方式会引起 bundle 变大</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div><pre><code class="hljs js"><span class="hljs-comment">// 生产环境构建时，会打包vion-svg-icon全量的图标资源 ⚠️</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Icon);
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Mail&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#FFCD00&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Delete&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#FFCD00&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>图标类型</td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>图标的大小，单位自定义</td><td><em>string</em></td><td><code>24px</code></td></tr><tr><td>color</td><td>图标的颜色</td><td><em>string</em></td><td><code>#989EB4</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击图标时触发</td><td>-</td></tr></tbody></table>`,13),l=[e],h={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(o,d)=>(a(),n("div",p,l))}};export{h as default};