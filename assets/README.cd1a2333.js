import{o as a,c as t,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},p=n(`<h1>Tabbar</h1><hr><p><code>Tabbar</code> \u7EC4\u4EF6\u5FC5\u987B\u7ED3\u5408<code>TabbarItem</code>\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528</p><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u4E3B\u9875
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Message&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u6D88\u606F
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Contact&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u8054\u7CFB\u4EBA
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar</span>&gt;</span>
</code></pre><h4>2\u3001\u8BBE\u7F6E\u7EA2\u70B9\u6216\u5FBD\u7AE0</h4><p>\u901A\u8FC7\u8BBE\u7F6E<code>badge</code>\u5C5E\u6027\u6765\u663E\u793A\u7EA2\u70B9\u6216\u5FBD\u7AE0\uFF0C\u5F53\u503C\u4E3A<code>true</code>\u65F6\uFF0C\u4EE5\u7EA2\u70B9\u5448\u73B0\uFF0C\u5F53\u503C\u4E3A\u6570\u5B57\u6216\u5B57\u7B26\u4E32\uFF0C\u5219\u4EE5\u80F6\u56CA\u578B\u7684\u5FBD\u7AE0\u5448\u73B0</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u4E3B\u9875
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;99+&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Message&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u6D88\u606F
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">:badge</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Mail&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u90AE\u4EF6
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Contact&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u8054\u7CFB\u4EBA
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar</span>&gt;</span>
</code></pre><h4>3\u3001\u81EA\u5B9A\u4E49\u989C\u8272</h4><pre><code class="hljs html"><span class="hljs-comment">&lt;!-- \u7EDF\u4E00\u8BBE\u7F6E\u989C\u8272 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#00CAFC&quot;</span> <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#03081A&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u4E3B\u9875
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Message&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u6D88\u606F
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Contact&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u8054\u7CFB\u4EBA
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar</span>&gt;</span>

<span class="hljs-comment">&lt;!-- \u5206\u522B\u4E3A\u5355\u4E2A\u6807\u7B7E\u6307\u5B9A\u989C\u8272 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#00CAFC&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u4E3B\u9875
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#FFCD00&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Message&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u6D88\u606F
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#67C23A&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Contact&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    \u8054\u7CFB\u4EBA
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar</span>&gt;</span>
</code></pre><h2>Props</h2><h4>Tabbar</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u6807\u7B7E\u7684\u7D22\u5F15\u503C</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>active-color</td><td>\u6807\u7B7E\u9009\u4E2D\u65F6\u7684\u989C\u8272</td><td><em>string</em></td><td>-</td></tr><tr><td>inactive-color</td><td>\u6807\u7B7E\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272</td><td><em>string</em></td><td>-</td></tr></tbody></table><h4>TabbarItem</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>badge</td><td>\u7EA2\u70B9\u6216\u5FBD\u7AE0\uFF0C\u503C\u4E3A <em>true</em> \u65F6\u663E\u793A\u4E3A\u7EA2\u70B9\uFF0C\u5426\u5219\u663E\u793A\u4E3A\u80F6\u56CA\u5F62\u6001</td><td><em>number</em> | <em>string</em> | <em>boolean</em></td><td>-</td></tr><tr><td>active-color</td><td>\u5F53\u524D\u6807\u7B7E\u9009\u4E2D\u65F6\u7684\u989C\u8272</td><td><em>string</em></td><td>-</td></tr><tr><td>inactive-color</td><td>\u5F53\u524D\u6807\u7B7E\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272</td><td><em>string</em></td><td>-</td></tr></tbody></table><h2>Event</h2><h4>Tabbar</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570\u7C7B\u578B</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u6807\u7B7E\u680F\u65F6\u89E6\u53D1</td><td><code>(index: Number, event: Event)</code></td></tr></tbody></table><h4>TabbarItem</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570\u7C7B\u578B</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1</td><td><code>(event: Event)</code></td></tr></tbody></table><h2>Slot</h2><h4>TabbarItem</h4><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\u5185\u5BB9</td></tr></tbody></table>`,23),e=[p],r={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(j,m)=>(a(),t("div",l,e))}};export{r as default};
