import{o as a,c as t,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},p=n(`<h1>Progress</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;val&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;val1&quot;</span> <span class="hljs-attr">:show-txt</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">val</span>: <span class="hljs-number">0.35</span>,
      <span class="hljs-attr">val1</span>: <span class="hljs-number">0.5</span>,
    };
  },
};
</code></pre><h4>2\u3001\u8BBE\u7F6E\u80CC\u666F\u8272</h4><p>\u901A\u8FC7<code>background</code>\u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u7684\u80CC\u666F\u8272\uFF0C\u5176\u503C\u7B49\u540C\u4E8E css \u7684 background \u5C5E\u6027\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8BBE\u7F6E\u6E10\u53D8\u6216\u7EAF\u8272\u7684\u80CC\u666F</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-progress</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;linear-gradient(135deg, #F9C278 0%, #F29D2B 100%)&quot;</span> /&gt;</span>
</code></pre><h4>3\u3001\u81EA\u5B9A\u4E49\u8F85\u52A9\u6587\u672C</h4><p><code>v-slot:text</code>\u6307\u4EE4\u53EF\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684\u8F85\u52A9\u6587\u672C</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;val&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:text</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #05C9FA; font-size: 12px; margin-left: 8px&quot;</span>&gt;</span>LV{{Math.round(val * 10)}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-progress</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">val</span>: <span class="hljs-number">0.8</span>,
    };
  },
};
</code></pre><h4>4\u3001\u8BBE\u7F6E\u9AD8\u5EA6</h4><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-progress</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10px&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#67C23A&quot;</span> /&gt;</span>
</code></pre><h4>5\u3001\u73AF\u5F62\u8FDB\u5EA6\u6761</h4><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-progress</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;0.5&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> /&gt;</span>
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u8FDB\u5EA6\u6761\u5F53\u524D\u503C\uFF0C\u53D6\u503C\u8303\u56F4 0-1</td><td><em>number</em></td><td><code>0</code></td><td></td></tr><tr><td>background</td><td>\u80CC\u666F\u8272\uFF0C\u7B49\u540C\u4E8E css \u7684 background \u5C5E\u6027</td><td><em>string</em></td><td></td><td></td></tr><tr><td>show-txt</td><td>\u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u672C</td><td><em>boolean</em></td><td><code>true</code></td><td></td></tr><tr><td>height</td><td>\u8FDB\u5EA6\u6761\u9AD8\u5EA6\uFF08\u5355\u4F4D\uFF1Apx\uFF09</td><td><em>string</em></td><td><code>5px</code></td><td></td></tr><tr><td>type</td><td>\u8FDB\u5EA6\u6761\u7C7B\u578B</td><td><em>string</em></td><td><code>normal</code></td><td><code>normal</code>|<code>circle</code></td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>text</td><td>\u81EA\u5B9A\u4E49\u8F85\u52A9\u6587\u672C</td></tr></tbody></table>`,20),e=[p],j={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(d,h)=>(a(),t("div",l,e))}};export{j as default};
