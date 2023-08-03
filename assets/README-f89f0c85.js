import{o as a,c as n,a2 as t}from"./index-bfa72c3c.js";const e={class:"markdown-body"},r=t(`<h1>SearchBar</h1><p><img src="https://img.shields.io/badge/coverage-100%25-green" alt=""></p><hr><h4>1、基础用法</h4><p>通过<code>type</code>设置搜索框的样式</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-search-bar</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;capsule&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;keyword&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-search-bar</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;capsule&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;keyword1&quot;</span>
  <span class="hljs-attr">back-btn-visible</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-search-bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;form&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;keyword2&quot;</span> /&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  setup() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">keyword</span>: ref(<span class="hljs-string">&#39;&#39;</span>),
      <span class="hljs-attr">keyword1</span>: ref(<span class="hljs-string">&#39;&#39;</span>),
      <span class="hljs-attr">keyword2</span>: ref(<span class="hljs-string">&#39;&#39;</span>)
    }
  }
})
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">keyword</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">keyword1</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">keyword2</span>: <span class="hljs-string">&quot;&quot;</span>
    };
  }
};
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>v-model/value</td><td>输入框的值</td><td><em>string</em></td><td>-</td><td></td></tr><tr><td>type</td><td>搜索框样式</td><td><em>string</em></td><td><code>capsule</code></td><td><code>capsule</code>|<code>form</code></td></tr><tr><td>placeholder</td><td>提示信息</td><td><em>string</em></td><td><code>搜索</code></td><td></td></tr><tr><td>back-btn-visible</td><td>左侧后退箭头是否显示</td><td><em>boolean</em></td><td><code>false</code></td><td></td></tr><tr><td>cancel-btn-visible</td><td>右侧取消按钮是否显示</td><td><em>boolean</em></td><td><code>false</code></td><td></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>back-btn-click</td><td>点击左侧后退箭头时触发</td><td>-</td></tr><tr><td>change</td><td>搜索框文字内容变化时触发</td><td><code>(value: String)</code></td></tr><tr><td>search</td><td>点击键盘的回车键时触发</td><td><code>(value: String)</code></td></tr><tr><td>focus</td><td>搜索框聚焦时触发</td><td>-</td></tr><tr><td>blur</td><td>搜索框失去焦点时触发</td><td>-</td></tr><tr><td>clear</td><td>清除搜索框内容时触发</td><td>-</td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td>-</td></tr></tbody></table>`,11),l=[r],h={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(c,o)=>(a(),n("div",e,l))}};export{h as default};
