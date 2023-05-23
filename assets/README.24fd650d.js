import{o as a,c as t,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},p=n(`<h1>Popup</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u901A\u8FC7<code>v-model</code>\u63A7\u5236\u7EC4\u4EF6\u7684\u663E\u793A\u4E0E\u9690\u85CF\uFF0C<code>position</code>\u5C5E\u6027\u8BBE\u7F6E\u5F39\u51FA\u4F4D\u7F6E</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px; height: 100%; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px; height: 100%; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px; height: 200px; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    };
  },
};
</code></pre><h4>2\u3001\u8BBE\u7F6E\u5F39\u51FA\u5C42\u5185\u5BB9\u533A\u7684\u52A8\u753B\u540D</h4><p>\u53EF\u4EE5\u81EA\u5B9A\u4E49<code>transition-name</code>\u6765\u63A7\u5236\u5F39\u51FA\u5C42\u5185\u5BB9\u533A\u7684\u52A8\u753B\uFF0C\u5176\u7B49\u4EF7\u4E8E transition \u7EC4\u4EF6\u7684<a href="https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D">name</a>\u5C5E\u6027</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">transition-name</span>=<span class="hljs-string">&quot;slide-fade&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>
</code></pre><pre><code class="hljs css"><span class="hljs-keyword">@keyframes</span> slideFadeIn {
  <span class="hljs-selector-tag">from</span> {
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">100%</span>, <span class="hljs-number">0</span>);
  }

  <span class="hljs-selector-tag">to</span> {
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
  }
}

<span class="hljs-keyword">@keyframes</span> slideFadeOut {
  <span class="hljs-selector-tag">from</span> {
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
  }

  <span class="hljs-selector-tag">to</span> {
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">100%</span>, <span class="hljs-number">0</span>);
  }
}

<span class="hljs-selector-class">.slide-fade-enter-active</span> {
  <span class="hljs-attribute">animation</span>: slideFadeIn <span class="hljs-number">1.5s</span>;
}

<span class="hljs-selector-class">.slide-fade-leave-active</span> {
  <span class="hljs-attribute">animation</span>: slideFadeOut <span class="hljs-number">1.5s</span>;
}
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>v-model/visible</td><td>\u662F\u5426\u663E\u793A\u7EC4\u4EF6</td><td><em>boolean</em></td><td><code>false</code></td><td></td></tr><tr><td>mask-visible</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td><td></td></tr><tr><td>mask-click-close</td><td>\u70B9\u51FB\u906E\u7F69\u662F\u5426\u5173\u95ED\u5F39\u7A97</td><td><em>boolean</em></td><td><code>true</code></td><td></td></tr><tr><td>position</td><td>\u5F39\u51FA\u5C42\u7684\u4F4D\u7F6E</td><td><em>string</em></td><td><code>bottom</code></td><td><code>top</code>|<code>right</code>|<code>bottom</code>|<code>left</code>|<code>center</code></td></tr><tr><td>transition-name</td><td>\u5F39\u51FA\u5C42\u52A8\u753B\u540D\uFF0C\u7B49\u4EF7\u4E8E transition \u7EC4\u4EF6\u7684 name \u5C5E\u6027</td><td><em>string</em></td><td><code>slide-bottom</code></td><td></td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u9501\u5B9A\u5185\u5BB9\u6EDA\u52A8</td><td><em>boolean</em></td><td><code>true</code></td><td></td></tr><tr><td>to</td><td>el \u9009\u62E9\u5668, \u5C06 popup \u6E32\u67D3\u5230\u54EA\u4E2A el \u4E0B,\u8FD9\u4E2A el \u5728\u6267\u884C createApp \u524D\u5FC5\u987B\u5B58\u5728</td><td><em>string</em></td><td><code>body</code></td><td></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>opened</td><td>\u6253\u5F00\u5F39\u51FA\u5C42\u5E76\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>closed</td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u5E76\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,14),e=[p],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(d,h)=>(a(),t("div",l,e))}};export{i as default};
