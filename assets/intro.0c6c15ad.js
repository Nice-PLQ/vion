import{o as n,c as a,a2 as p}from"./index.466186a3.js";const o={class:"markdown-body"},e=p(`<h2>\u7279\u6027</h2><ul><li>\u57FA\u4E8E Vue3 \u6784\u5EFA</li><li>88% \u7684\u5355\u5143\u6D4B\u8BD5\u8986\u76D6</li><li>30 \u4E2A\u7EC4\u4EF6</li><li>\u5B8C\u5584\u7684\u793A\u4F8B\u548C\u6587\u6863\u8BF4\u660E</li><li>\u652F\u6301 tree-shaking</li><li>\u652F\u6301\u56FD\u9645\u5316</li><li>\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3</li></ul><h2>\u5FEB\u901F\u4E0A\u624B</h2><h3>1\u3001\u5B89\u88C5</h3><pre class="hljs"><code>tnpm install vion --save
</code></pre><h3>2\u3001\u5F15\u7528\u7EC4\u4EF6</h3><h5>\u65B9\u5F0F\u4E00: \u81EA\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\uFF08\u63A8\u8350\uFF09</h5><p>vion \u539F\u751F\u652F\u6301\u57FA\u4E8E ES Module \u6309\u9700\u5F15\u5165\u7EC4\u4EF6\uFF0C\u672A\u4F7F\u7528\u7684\u7EC4\u4EF6\u4F1A\u81EA\u52A8 Tree Shaking \u6389\uFF0C\u5305\u62EC js \u548C css \u4EE3\u7801\uFF0C\u65E0\u9700\u914D\u7F6E\u4EFB\u4F55\u63D2\u4EF6\u5373\u53EF\u5B9E\u73B0\u3002</p><p>\u4EE5<code>Button</code>\u4E3A\u4F8B\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u6253\u5305\u540E\uFF0C\u53EA\u4F1A\u4FDD\u7559 Button \u7EC4\u4EF6\u7684 js \u548C css \u4EE3\u7801\uFF0C\u5176\u4ED6\u7684\u90FD\u4F1A\u88AB\u5254\u9664\u6389\u3002</p><pre><code class="hljs js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-comment">// \u4EE5 Button \u4E3A\u4F8B</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Button);
</code></pre><h5>\u65B9\u5F0F\u4E8C\uFF1A\u5168\u91CF\u5F15\u5165</h5><p>\u7EC4\u4EF6\u5168\u91CF\u5F15\u5165\u4F1A\u5C06\u6CA1\u6709\u4F7F\u7528\u7684\u7EC4\u4EF6\u4E00\u540C\u6253\u5305\u5230\u4EE3\u7801\u91CC\uFF0C\u4F1A\u5BFC\u81F4\u4E1A\u52A1\u4EE3\u7801\u4F53\u79EF\u589E\u52A0\uFF0C\u4E00\u822C\u4E0D\u63A8\u8350\u5168\u91CF\u5F15\u5165</p><pre><code class="hljs js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;

<span class="hljs-keyword">import</span> vion <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion/lib&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;vion/lib/style/index.css&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(vion);
</code></pre><p>\u901A\u8FC7<code>app.use</code>\u52A0\u8F7D\u7684\u7EC4\u4EF6\uFF0C\u90FD\u53EF\u4EE5\u7528<code>&lt;v-xxx /&gt;</code>\u7684\u6807\u7B7E\u5F62\u5F0F\u4F7F\u7528\uFF0C\u5982<code>&lt;v-button&gt;\u6309\u94AE&lt;/v-button&gt;</code></p><h3>3\u3001\u5173\u4E8E SVG \u56FE\u6807</h3><p>vion \u7684\u56FE\u6807\u5E93\u4F9D\u8D56<code>vion-svg-icon</code>\uFF0C\u4F60\u53EF\u4EE5\u5355\u72EC\u5F15\u5165\u8FD9\u4E2A\u56FE\u6807\u5E93\u6765\u4F7F\u7528\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u662F\u652F\u6301 tree-shaking \u7684\uFF0C\u6309\u9700\u4F7F\u7528\u56FE\u6807\uFF0C\u6240\u4EE5\u4F18\u5148\u8003\u8651\u8FD9\u79CD\u65B9\u5F0F\u4F7F\u7528\u56FE\u6807\u3002\u800C Icon \u7EC4\u4EF6\u9ED8\u8BA4\u4F9D\u8D56\u4E86<code>vion-svg-icon</code>\u7684\u5168\u91CF svg \u56FE\u6807\uFF0C\u8BE5\u65B9\u5F0F\u4F1A\u5F15\u8D77 bundle \u53D8\u5927\u3002</p><pre><code class="hljs js"><span class="hljs-comment">// \u2705 \u5EFA\u8BAE \u2705</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> { Mail, Delete } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion-svg-icon&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Mail).use(Delete);


<span class="hljs-comment">// \u26A0\uFE0F \u5C3D\u91CF\u907F\u514D\u4F7F\u7528\u5168\u91CF\u7684Icon\u7EC4\u4EF6\uFF0C\u9664\u975E\u4F60\u786E\u5B9A\u662F\u771F\u7684\u9700\u8981 \u26A0\uFE0F</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Icon);
</code></pre>`,17),l=[e],d={__name:"intro",setup(t,{expose:s}){return s({frontmatter:{}}),(r,i)=>(n(),a("div",o,l))}};export{d as default};
