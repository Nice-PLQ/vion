import{o as a,c as t,a2 as n}from"./index-993d6fae.js";const l={class:"markdown-body"},e=n(`<h1>Tag</h1><hr><h4>1、基础用法</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tag</span>&gt;</span>深圳<span class="hljs-tag">&lt;/<span class="hljs-name">v-tag</span>&gt;</span>
</code></pre></div><h4>2、线性标签</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tag</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>深圳<span class="hljs-tag">&lt;/<span class="hljs-name">v-tag</span>&gt;</span>
</code></pre></div><h4>3、带图标</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tag</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Male&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;16px&quot;</span> /&gt;</span>18岁 <span class="hljs-tag">&lt;/<span class="hljs-name">v-tag</span>&gt;</span>
</code></pre></div><h4>4、不同的颜色</h4><p>通过<code>background-color</code>、<code>text-color</code>来设置背景色和文本色</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tag</span> <span class="hljs-attr">background-color</span>=<span class="hljs-string">&quot;#E2F4FF&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#09f&quot;</span>&gt;</span>深圳<span class="hljs-tag">&lt;/<span class="hljs-name">v-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-tag</span> <span class="hljs-attr">background-color</span>=<span class="hljs-string">&quot;#E8F1FF&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#3385FF&quot;</span>&gt;</span>水瓶座<span class="hljs-tag">&lt;/<span class="hljs-name">v-tag</span>&gt;</span>
</code></pre></div><h4>5、自定义大小</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>小标签<span class="hljs-tag">&lt;/<span class="hljs-name">v-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>大标签<span class="hljs-tag">&lt;/<span class="hljs-name">v-tag</span>&gt;</span>
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>bg-color</td><td>背景颜色</td><td><em>string</em></td><td><code>#00CAFC</code></td><td>-</td></tr><tr><td>text-color</td><td>文本颜色</td><td><em>string</em></td><td><code>#FFF</code></td><td>-</td></tr><tr><td>size</td><td>标签大小</td><td><em>string</em></td><td><code>medium</code></td><td><code>small</code>|<code>medium</code>|<code>large</code></td></tr><tr><td>shape</td><td>标签形状</td><td><em>string</em></td><td><code>fill</code></td><td><code>fill</code>|<code>outline</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击标签时触发</td><td><code>(event: Event)</code></td></tr></tbody></table>`,17),p=[e],g={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(a(),t("div",l,p))}};export{g as default};