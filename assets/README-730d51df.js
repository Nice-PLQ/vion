import{o as a,c as t,a2 as n}from"./index-901e99cb.js";const l={class:"markdown-body"},p=n(`<h1>Avatar</h1><hr><h4>1、单一头像</h4><p>通过 color 设置默认头像的颜色，也可以设置 url 来自定义头像</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;blue&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://path/to/avatar/url&quot;</span> /&gt;</span>
</code></pre></div><h4>3、设置头像大小</h4><p>通过<code>size</code>字段设置头像的大小，单位是 px</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;28px&quot;</span> /&gt;</span>
</code></pre></div><h4>4、头像集合</h4><p>可以同时设置 2 - 4 个头像显示，与此同时头像也会被缩放</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;28px&quot;</span>
  <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;[
    &#39;https://path/to/avatar/url_1&#39;,
    &#39;https://path/to/avatar/url_2&#39;,
    &#39;https://path/to/avatar/url_3&#39;,
    &#39;https://path/to/avatar/url_4&#39;, 
  ]&quot;</span>
/&gt;</span>
</code></pre></div><h4>5、轮播头像</h4><p>同时设置多个头像时，可以让头像滚动播放起来</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;28px&quot;</span>
  <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;[
    &#39;https://path/to/avatar/url_1&#39;,
    &#39;https://path/to/avatar/url_2&#39;,
    &#39;https://path/to/avatar/url_3&#39;,
    &#39;https://path/to/avatar/url_4&#39;, 
  ]&quot;</span>
  <span class="hljs-attr">carousel</span>
/&gt;</span>
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>头像的 url 链接</td><td><em>string</em> | <em>array</em></td><td>-</td></tr><tr><td>color</td><td>默认头像的颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>头像大小（单位: px）</td><td><em>string</em></td><td><code>20px</code></td></tr><tr><td>carousel</td><td>是否为轮播头像（仅当 uin 或 url 长度大于 1 时生效）</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击头像时触发</td><td>-</td></tr></tbody></table>`,18),r=[p],i={__name:"README",setup(e,{expose:s}){return s({frontmatter:{}}),(h,d)=>(a(),t("div",l,r))}};export{i as default};
