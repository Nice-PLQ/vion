import{o as a,c as t,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},p=n(`<h1>NavBar</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u9ED8\u8BA4\u5C55\u793A\u5BFC\u822A\u680F\u5DE6\u4FA7\u7684\u8FD4\u56DE\u56FE\u6807</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-nav-bar</span>&gt;</span>\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">v-nav-bar</span>&gt;</span>
</code></pre><h4>2\u3001\u8BBE\u7F6E\u5DE6\u53F3\u4E24\u8FB9\u7684\u56FE\u6807\u6216\u6587\u672C</h4><p>\u901A\u8FC7<code>left-icon</code>\u8BBE\u7F6E\u5DE6\u8FB9\u7684\u56FE\u6807\uFF0C\u9ED8\u8BA4\u53EA\u80FD\u8BBE\u7F6E<code>left</code>\u6216<code>close</code>\uFF0C\u82E5\u9700\u8981\u989D\u5916\u7684\u56FE\u6807\uFF0C\u53C2\u8003\u4E0B\u9762\u7B2C 3 \u70B9\u7684\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u533A\u57DF\u7684\u5185\u5BB9\u6765\u5B9E\u73B0\u3002</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-nav-bar</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">v-nav-bar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-nav-bar</span> <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span> <span class="hljs-attr">right-text</span>=<span class="hljs-string">&quot;\u7F16\u8F91&quot;</span>&gt;</span>\u5E10\u53F7\u7BA1\u7406<span class="hljs-tag">&lt;/<span class="hljs-name">v-nav-bar</span>&gt;</span>
</code></pre><h4>3\u3001\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u5DE6\u53F3\u533A\u57DF\u5185\u5BB9</h4><p><code>v-slot:left</code>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9\u7684\u5C55\u793A\uFF0C<code>v-slot:right</code>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9\u7684\u5C55\u793A\uFF0C\u901A\u8FC7\u8FD9\u4E24\u4E2A\u63D2\u69FD\u53EF\u4EE5\u5B9E\u73B0\u66F4\u4E3A\u590D\u6742\u7684\u5BFC\u822A</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-nav-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;left-content&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> <span class="hljs-attr">uin</span>=<span class="hljs-string">&quot;2647439900&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;18px&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-l-8&quot;</span>&gt;</span>
        \u98DE\u7FD4\u7684\u4F01\u9E45
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;status online&quot;</span>&gt;</span>
          4G\u5728\u7EBF <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;ArrowRight&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;12px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">v-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Camera&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-r-10&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Add&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-nav-bar</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-nav-bar</span>&gt;</span>
  \u6211\u7684\u8D44\u6599
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> <span class="hljs-attr">uin</span>=<span class="hljs-string">&quot;2647439900&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Setting&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;18px&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-nav-bar</span>&gt;</span>
</code></pre><h4>4\u3001\u4E3B\u9898</h4><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-nav-bar</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;white&quot;</span> <span class="hljs-attr">right-icon</span>=<span class="hljs-string">&quot;scan&quot;</span>&gt;</span>\u767D\u8272\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">v-nav-bar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-nav-bar</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;gray&quot;</span> <span class="hljs-attr">right-icon</span>=<span class="hljs-string">&quot;quit&quot;</span>&gt;</span>\u7070\u8272\u4E3B\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">v-nav-bar</span>&gt;</span>
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th></th></tr></thead><tbody><tr><td>show-left-icon</td><td>\u662F\u5426\u5C55\u793A\u5BFC\u822A\u680F\u5DE6\u4FA7\u7684\u56FE\u6807</td><td><em>boolean</em></td><td><code>true</code></td><td></td><td></td></tr><tr><td>left-icon</td><td>\u5BFC\u822A\u680F\u5DE6\u4FA7\u7684\u56FE\u6807</td><td><em>string</em></td><td><code>left</code></td><td><code>left</code>|<code>close</code></td><td></td></tr><tr><td>left-text</td><td>\u5BFC\u822A\u680F\u5DE6\u4FA7\u7684\u6587\u5B57</td><td><em>string</em></td><td>-</td><td></td><td></td></tr><tr><td>right-text</td><td>\u5BFC\u822A\u680F\u53F3\u4FA7\u7684\u6587\u5B57</td><td><em>string</em></td><td>-</td><td></td><td></td></tr><tr><td>theme</td><td>\u5BFC\u822A\u680F\u4E3B\u9898</td><td><em>string</em></td><td><code>white</code></td><td><code>white</code>|<code>gray</code></td><td></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>back</td><td>\u70B9\u51FB\u5DE6\u4FA7\u8FD4\u56DE\u65F6\u89E6\u53D1</td><td><code>(event: Event)</code></td></tr><tr><td>left-click</td><td>\u70B9\u51FB\u5DE6\u4FA7\u533A\u57DF\u5185\u5BB9\u65F6\u89E6\u53D1</td><td><code>(event: Event)</code></td></tr><tr><td>title-click</td><td>\u70B9\u51FB\u6807\u9898\u65F6\u89E6\u53D1</td><td><code>(event: Event)</code></td></tr><tr><td>right-click</td><td>\u70B9\u51FB\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9\u65F6\u89E6\u53D1</td><td><code>(event: Event)</code></td></tr><tr><td>right-text-click</td><td>\u70B9\u51FB\u53F3\u4FA7\u7684\u6587\u672C\u65F6\u89E6\u53D1</td><td><code>(event: Event)</code></td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u5DE6\u4FA7\u5185\u5BB9</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u6807\u9898\u5185\u5BB9</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u53F3\u4FA7\u5185\u5BB9</td></tr></tbody></table>`,19),c=[p],j={__name:"README",setup(e,{expose:s}){return s({frontmatter:{}}),(d,r)=>(a(),t("div",l,c))}};export{j as default};