import{o as a,c as n,a2 as t}from"./index-901e99cb.js";const l={class:"markdown-body"},p=t(`<h1>Tooltips</h1><hr><h4>1、基础用法</h4><p>常用于展示提示信息，通过<code>visible</code>控制气泡显示或隐藏，<code>placement</code>设置气泡的位置</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tooltips</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;气泡提示的内容&quot;</span>
  <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top-center&quot;</span>
  @<span class="hljs-attr">visible-change</span>=<span class="hljs-string">&quot;onVisibleChange&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = !visible&quot;</span>&gt;</span> Top-Center <span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tooltips</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">true</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    onVisibleChange(value) {
      <span class="hljs-built_in">console</span>.log(value);
    },
  },
};
</code></pre></div><h4>2、自定义气泡内容</h4><p>通过<code>v-slot:content</code>插槽自定义气泡内容</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tooltips</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = !visible&quot;</span>&gt;</span>自定义内容<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-tooltips&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>复制<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>剪切<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tooltips</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div><pre><code class="hljs css"><span class="hljs-selector-class">.custom-tooltips</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--text-white);
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
  li {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">8px</span>;
    &amp;:not(:last-child) {
      <span class="hljs-attribute">border-right</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0.4</span>);
    }
  }
}
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th><th></th></tr></thead><tbody><tr><td>visible</td><td>是否可见</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td><td></td></tr><tr><td>placement</td><td>气泡位置</td><td><em>string</em></td><td><code>top-center</code></td><td><code>top-center</code>|<code>top-left</code>|<code>top-right</code>|<code>bottom-center</code>|<code>bottom-right</code>|<code>bottom-left</code></td><td></td></tr><tr><td>text</td><td>提示内容</td><td><em>string</em></td><td>-</td><td>-</td><td></td></tr><tr><td>animation</td><td>是否需要动效</td><td><em>boolean</em></td><td><code>true</code></td><td>-</td><td></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>visible-change</td><td>visible 参数变化时触发</td><td><code>(visible: Boolean)</code></td></tr><tr><td>click</td><td>点击气泡时触发</td><td>-</td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>content</td><td>自定义气泡内容</td></tr></tbody></table>`,16),e=[p],b={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(i,d)=>(a(),n("div",l,e))}};export{b as default};
