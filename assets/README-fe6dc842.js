import{o as a,c as n,a2 as t}from"./index-5ac088ad.js";const l={class:"markdown-body"},e=t(`<h1>Loading</h1><hr><h4>1、普通类型的 loading</h4><p>通过<code>visible</code>属性控制 loading 组件的显示与隐藏</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-loading</span> /&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">v-loading</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre></div><h4>2、带文本的 loading</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-loading</span>&gt;</span>正在加载<span class="hljs-tag">&lt;/<span class="hljs-name">v-loading</span>&gt;</span>
</code></pre></div><h4>3、loading 图标颜色配置，只支持纯色</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-loading</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#67C23A&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-loading</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#00CAFC&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-loading</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#FF596A&quot;</span> /&gt;</span>
</code></pre></div><h4>4、环形进度条</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">:ratio</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre></div><h4>5、快捷调用</h4><p>Loading 组件默认在 vue 实例下挂载<code>$loading</code>对象，方便在业务代码中快捷调用，需要注意的是，快捷调用形式的 UI 是以浮层形式呈现，具体请参考示例。另外，此时 loading 图标不支持颜色配置</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShow&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>显示浮层loading<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleHide&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>隐藏浮层loading<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShow2&quot;</span>&gt;</span>定时隐藏<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    handleShow() {
      <span class="hljs-keyword">this</span>.$loading.show(<span class="hljs-string">&quot;加载中&quot;</span>);
    },
    handleHide() {
      <span class="hljs-keyword">this</span>.$loading.hide();
    },
    handleShow2() {
      <span class="hljs-keyword">this</span>.$loading.show({
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;3s后自动隐藏&quot;</span>,
        <span class="hljs-attr">duration</span>: <span class="hljs-number">3000</span>,
      });
    },
  },
};
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>visible</td><td>显示与隐藏</td><td><em>boolean</em></td><td><code>true</code></td><td></td></tr><tr><td>type</td><td>loading 类型</td><td><em>string</em></td><td><code>normal</code></td><td><code>normal</code>|<code>float</code>|<code>circle</code></td></tr><tr><td>theme</td><td>图标样式</td><td><em>string</em></td><td><code>white</code></td><td><code>white</code>|<code>gray</code>|<code>red</code></td></tr><tr><td>size</td><td>图标大小(单位: px)</td><td><em>string</em></td><td><code>16px</code></td><td></td></tr><tr><td>ratio</td><td>环形进度条的进度比例，1-100</td><td><em>number</em></td><td><code>0</code></td><td></td></tr></tbody></table><h4>快捷调用</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>Loading.show</td><td>展示 loading</td><td><code>options</code>|<code>message</code></td></tr><tr><td>Loading.hide</td><td>隐藏 loading</td><td>-</td></tr></tbody></table><h5>options</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>text</td><td>loading 文本</td><td><em>string</em></td></tr><tr><td>duration</td><td>自动隐藏时长（单位 ms）</td><td><em>number</em></td></tr></tbody></table>`,21),p=[e],i={__name:"README",setup(d,{expose:s}){return s({frontmatter:{}}),(c,o)=>(a(),n("div",l,p))}};export{i as default};
