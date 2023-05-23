import{o as s,c as a,a2 as n}from"./index.466186a3.js";const d={class:"markdown-body"},e=n(`<h1>SearchBar</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u901A\u8FC7<code>type</code>\u8BBE\u7F6E\u641C\u7D22\u6846\u7684\u6837\u5F0F</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-search-bar</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;capsule&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;keyword&quot;</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-search-bar</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;capsule&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;keyword1&quot;</span>
  <span class="hljs-attr">back-btn-visible</span>
/&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-search-bar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;form&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;keyword2&quot;</span> /&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
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
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>v-model/value</td><td>\u8F93\u5165\u6846\u7684\u503C</td><td><em>string</em></td><td>-</td><td></td></tr><tr><td>type</td><td>\u641C\u7D22\u6846\u6837\u5F0F</td><td><em>string</em></td><td><code>capsule</code></td><td><code>capsule</code>|<code>form</code></td></tr><tr><td>placeholder</td><td>\u63D0\u793A\u4FE1\u606F</td><td><em>string</em></td><td><code>\u641C\u7D22</code></td><td></td></tr><tr><td>back-btn-visible</td><td>\u5DE6\u4FA7\u540E\u9000\u7BAD\u5934\u662F\u5426\u663E\u793A</td><td><em>boolean</em></td><td><code>false</code></td><td></td></tr><tr><td>cancel-btn-visible</td><td>\u53F3\u4FA7\u53D6\u6D88\u6309\u94AE\u662F\u5426\u663E\u793A</td><td><em>boolean</em></td><td><code>false</code></td><td></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>back-btn-click</td><td>\u70B9\u51FB\u5DE6\u4FA7\u540E\u9000\u7BAD\u5934\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>change</td><td>\u641C\u7D22\u6846\u6587\u5B57\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>(value: String)</code></td></tr><tr><td>search</td><td>\u70B9\u51FB\u952E\u76D8\u7684\u56DE\u8F66\u952E\u65F6\u89E6\u53D1</td><td><code>(value: String)</code></td></tr><tr><td>focus</td><td>\u641C\u7D22\u6846\u805A\u7126\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>blur</td><td>\u641C\u7D22\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>clear</td><td>\u6E05\u9664\u641C\u7D22\u6846\u5185\u5BB9\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,10),l=[e],j={__name:"README",setup(r,{expose:t}){return t({frontmatter:{}}),(c,o)=>(s(),a("div",d,l))}};export{j as default};
