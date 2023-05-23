import{o as t,c as a,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},p=n(`<h1>Tooltips</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u5E38\u7528\u4E8E\u5C55\u793A\u63D0\u793A\u4FE1\u606F\uFF0C\u901A\u8FC7<code>visible</code>\u63A7\u5236\u6C14\u6CE1\u663E\u793A\u6216\u9690\u85CF\uFF0C<code>placement</code>\u8BBE\u7F6E\u6C14\u6CE1\u7684\u4F4D\u7F6E</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tooltips</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6C14\u6CE1\u63D0\u793A\u7684\u5185\u5BB9&quot;</span>
  <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top-center&quot;</span>
  @<span class="hljs-attr">visible-change</span>=<span class="hljs-string">&quot;onVisibleChange&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = !visible&quot;</span>&gt;</span> Top-Center <span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tooltips</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
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
</code></pre><h4>2\u3001\u81EA\u5B9A\u4E49\u6C14\u6CE1\u5185\u5BB9</h4><p>\u901A\u8FC7<code>v-slot:content</code>\u63D2\u69FD\u81EA\u5B9A\u4E49\u6C14\u6CE1\u5185\u5BB9</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tooltips</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = !visible&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-tooltips&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\u590D\u5236<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\u526A\u5207<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tooltips</span>&gt;</span>
</code></pre><pre><code class="hljs css"><span class="hljs-selector-class">.custom-tooltips</span> {
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
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th></th></tr></thead><tbody><tr><td>visible</td><td>\u662F\u5426\u53EF\u89C1</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td><td></td></tr><tr><td>placement</td><td>\u6C14\u6CE1\u4F4D\u7F6E</td><td><em>string</em></td><td><code>top-center</code></td><td><code>top-center</code>|<code>top-left</code>|<code>top-right</code>|<code>bottom-center</code>|<code>bottom-right</code>|<code>bottom-left</code></td><td></td></tr><tr><td>text</td><td>\u63D0\u793A\u5185\u5BB9</td><td><em>string</em></td><td>-</td><td>-</td><td></td></tr><tr><td>animation</td><td>\u662F\u5426\u9700\u8981\u52A8\u6548</td><td><em>boolean</em></td><td><code>true</code></td><td>-</td><td></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>visible-change</td><td>visible \u53C2\u6570\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>(visible: Boolean)</code></td></tr><tr><td>click</td><td>\u70B9\u51FB\u6C14\u6CE1\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>content</td><td>\u81EA\u5B9A\u4E49\u6C14\u6CE1\u5185\u5BB9</td></tr></tbody></table>`,16),e=[p],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(h,d)=>(t(),a("div",l,e))}};export{i as default};
