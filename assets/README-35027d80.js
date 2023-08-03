import{o as a,c as n,a2 as t}from"./index-fa0a3844.js";const e={class:"markdown-body"},l=t(`<h1>Toast</h1><hr><h4>1、基础用法</h4><p>Toast 组件默认在 vue 实例下挂载<code>$toast</code>对象，方便在业务代码中快捷调用</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>完成类提示<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>警示类提示<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>通知类提示<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    success() {
      <span class="hljs-keyword">this</span>.$toast.success(<span class="hljs-string">&quot;完成类提示&quot;</span>);
    },
    error() {
      <span class="hljs-keyword">this</span>.$toast.error(<span class="hljs-string">&quot;警示类提示&quot;</span>);
    },
    info() {
      <span class="hljs-keyword">this</span>.$toast({
        <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;info&quot;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;通知类提示&quot;</span>,
        <span class="hljs-attr">duration</span>: <span class="hljs-number">3000</span>, <span class="hljs-comment">// 3s后隐藏</span>
      });
    },
  },
};
</code></pre></div><h2>Props</h2><h4>快捷调用</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>Toast.success</td><td>成功提示</td><td><code>options</code>|<code>message</code></td></tr><tr><td>Toast.error</td><td>错误提示</td><td><code>options</code>|<code>message</code></td></tr><tr><td>Toast.info</td><td>信息提示</td><td><code>options</code>|<code>message</code></td></tr></tbody></table><h5>options</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th></tr></thead><tbody><tr><td>type</td><td>toast 类型</td><td><em>string</em></td><td><code>success</code>|<code>error</code>|<code>info</code></td></tr><tr><td>message</td><td>提示文案</td><td><em>string</em></td><td>-</td></tr><tr><td>duration</td><td>自动隐藏时长（单位 ms）</td><td><em>number</em></td><td><code>1500</code></td></tr><tr><td>safe</td><td>是否适配刘海屏</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,11),p=[l],i={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(o,d)=>(a(),n("div",e,p))}};export{i as default};
