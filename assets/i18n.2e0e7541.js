import{o as a,c as n,a2 as o}from"./index.466186a3.js";const e={class:"markdown-body"},l=o(`<h1>\u56FD\u9645\u5316</h1><p>vion \u9ED8\u8BA4\u91C7\u7528\u4E2D\u6587\u8BED\u8A00\uFF0C\u5982\u679C\u9700\u8981\u5207\u6362\u5176\u4ED6\u8BED\u8A00\uFF0C\u8BF7\u53C2\u8003\u5982\u4E0B</p><h3>1\u3001\u5207\u6362\u8BED\u8A00</h3><p>vion \u901A\u8FC7 Locale \u7EC4\u4EF6\u5B9E\u73B0\u591A\u8BED\u8A00\u652F\u6301\uFF0C\u4F7F\u7528<code>Locale.use</code>\u65B9\u6CD5\u5207\u6362\u8BED\u8A00\u73AF\u5883\uFF0C\u6BD4\u5982\u5207\u6362\u5230\u82F1\u6587\u73AF\u5883</p><pre><code class="hljs js"><span class="hljs-comment">// \u6309\u9700\u5F15\u5165</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> { ActionSheet, Locale } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;
<span class="hljs-keyword">import</span> messages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion/es/locale/lang/en-US&quot;</span>;

Locale.use(<span class="hljs-string">&quot;en-US&quot;</span>, messages);

createApp()
  .use(ActionSheet);
  .use(Locale);

</code></pre><p>\u6216</p><pre><code class="hljs js"><span class="hljs-comment">// \u5168\u91CF\u5F15\u5165Vion</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> vion <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;
<span class="hljs-keyword">import</span> messages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion/es/locale/lang/en-US&quot;</span>;

vion.Locale.use(<span class="hljs-string">&quot;en-US&quot;</span>, messages);

createApp().use(vion);
</code></pre><h3>2\u3001\u8BED\u8A00\u5305</h3><p>\u76EE\u524D vion \u5185\u7F6E\u4E86\u4EE5\u4E0B\u51E0\u79CD\u8BED\u8A00</p><ul><li>\u7B80\u4F53\u4E2D\u6587\uFF08zh-CN\uFF09</li><li>\u7E41\u4F53\u4E2D\u6587\uFF08zh-Hant\uFF09</li><li>\u82F1\u8BED\uFF08en-US\uFF09</li><li>\u65E5\u8BED\uFF08ja-JP\uFF09</li></ul><p>\u5982\u679C\u4E0D\u80FD\u6EE1\u8DB3\u4E1A\u52A1\u573A\u666F\uFF0C\u53EA\u9700\u8981\u6309\u7167<a href="https://git.woa.com/q-ui/q-ui/blob/feature/locale/src/locale/lang/zh-CN.js">\u8BED\u8A00\u5305\u683C\u5F0F</a>\u81EA\u5B9A\u4E49\u8BED\u8A00\uFF0C\u7136\u540E\u4F7F\u7528<code>Locale</code>\u7EC4\u4EF6\u52A0\u8F7D\u5373\u53EF\uFF0C\u5982\uFF1A</p><pre><code class="hljs js"><span class="hljs-keyword">import</span> messages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./lang/fr-FR&quot;</span>; <span class="hljs-comment">// \u81EA\u5B9A\u4E49\u7684\u3010\u6CD5\u8BED\u3011\u8BED\u8A00\u5305</span>
Locale.use(<span class="hljs-string">&quot;fr-FR&quot;</span>, messages);
</code></pre><h3>3\u3001\u5F15\u5165\u591A\u4E2A\u8BED\u8A00\u5305</h3><pre><code class="hljs js"><span class="hljs-keyword">import</span> frMessages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./lang/fr-FR&quot;</span>; <span class="hljs-comment">// \u81EA\u5B9A\u4E49\u7684\u3010\u6CD5\u8BED\u3011\u8BED\u8A00\u5305</span>
<span class="hljs-keyword">import</span> trMessages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./lang/tr-TR&quot;</span>; <span class="hljs-comment">// \u81EA\u5B9A\u4E49\u7684\u3010\u571F\u8033\u5176\u8BED\u3011\u8BED\u8A00\u5305</span>

Locale.add(<span class="hljs-string">&quot;tr-TR&quot;</span>, trMessages); <span class="hljs-comment">// \u5C06\u8BED\u8A00\u5305\u52A0\u5165\u5230\u96C6\u5408\u4E2D</span>
Locale.use(<span class="hljs-string">&quot;fr-FR&quot;</span>, frMessages); <span class="hljs-comment">// \u9ED8\u8BA4\u4F7F\u7528\u6CD5\u8BED\u4F5C\u4E3A\u9996\u9009\u8BED\u8A00</span>
</code></pre>`,14),p=[l],j={__name:"i18n",setup(t,{expose:s}){return s({frontmatter:{}}),(r,h)=>(a(),n("div",e,p))}};export{j as default};
