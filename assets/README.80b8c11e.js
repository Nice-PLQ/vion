import{o as s,c as a,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},p=n(`<h1>Avatar</h1><hr><h4>1\u3001\u5355\u4E00\u5934\u50CF</h4><p>\u901A\u8FC7 color \u8BBE\u7F6E\u9ED8\u8BA4\u5934\u50CF\u7684\u989C\u8272\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E url \u6765\u81EA\u5B9A\u4E49\u5934\u50CF</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;blue&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://path/to/avatar/url&quot;</span> /&gt;</span>
</code></pre><h4>3\u3001\u8BBE\u7F6E\u5934\u50CF\u5927\u5C0F</h4><p>\u901A\u8FC7<code>size</code>\u5B57\u6BB5\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u662F px</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;28px&quot;</span> /&gt;</span>
</code></pre><h4>4\u3001\u5934\u50CF\u96C6\u5408</h4><p>\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E 2 - 4 \u4E2A\u5934\u50CF\u663E\u793A\uFF0C\u4E0E\u6B64\u540C\u65F6\u5934\u50CF\u4E5F\u4F1A\u88AB\u7F29\u653E</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;28px&quot;</span>
  <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;[
    &#39;https://path/to/avatar/url_1&#39;,
    &#39;https://path/to/avatar/url_2&#39;,
    &#39;https://path/to/avatar/url_3&#39;,
    &#39;https://path/to/avatar/url_4&#39;, 
  ]&quot;</span>
/&gt;</span>
</code></pre><h4>5\u3001\u8F6E\u64AD\u5934\u50CF</h4><p>\u540C\u65F6\u8BBE\u7F6E\u591A\u4E2A\u5934\u50CF\u65F6\uFF0C\u53EF\u4EE5\u8BA9\u5934\u50CF\u6EDA\u52A8\u64AD\u653E\u8D77\u6765</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-avatar</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;28px&quot;</span>
  <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;[
    &#39;https://path/to/avatar/url_1&#39;,
    &#39;https://path/to/avatar/url_2&#39;,
    &#39;https://path/to/avatar/url_3&#39;,
    &#39;https://path/to/avatar/url_4&#39;, 
  ]&quot;</span>
  <span class="hljs-attr">carousel</span>
/&gt;</span>
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>url</td><td>\u5934\u50CF\u7684 url \u94FE\u63A5</td><td><em>string</em> | <em>array</em></td><td>-</td></tr><tr><td>color</td><td>\u9ED8\u8BA4\u5934\u50CF\u7684\u989C\u8272</td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>\u5934\u50CF\u5927\u5C0F\uFF08\u5355\u4F4D: px\uFF09</td><td><em>string</em></td><td><code>20px</code></td></tr><tr><td>carousel</td><td>\u662F\u5426\u4E3A\u8F6E\u64AD\u5934\u50CF\uFF08\u4EC5\u5F53 uin \u6216 url \u957F\u5EA6\u5927\u4E8E 1 \u65F6\u751F\u6548\uFF09</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u5934\u50CF\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,18),r=[p],u={__name:"README",setup(h,{expose:t}){return t({frontmatter:{}}),(o,c)=>(s(),a("div",l,r))}};export{u as default};
