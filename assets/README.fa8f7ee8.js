import{o as t,c as a,a2 as n}from"./index.466186a3.js";const o={class:"markdown-body"},e=n(`<h1>Toast</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>Toast \u7EC4\u4EF6\u9ED8\u8BA4\u5728 vue \u5B9E\u4F8B\u4E0B\u6302\u8F7D<code>$toast</code>\u5BF9\u8C61\uFF0C\u65B9\u4FBF\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u5FEB\u6377\u8C03\u7528</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u5B8C\u6210\u7C7B\u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u8B66\u793A\u7C7B\u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u901A\u77E5\u7C7B\u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    success() {
      <span class="hljs-keyword">this</span>.$toast.success(<span class="hljs-string">&quot;\u5B8C\u6210\u7C7B\u63D0\u793A&quot;</span>);
    },
    error() {
      <span class="hljs-keyword">this</span>.$toast.error(<span class="hljs-string">&quot;\u8B66\u793A\u7C7B\u63D0\u793A&quot;</span>);
    },
    info() {
      <span class="hljs-keyword">this</span>.$toast({
        <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;info&quot;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u901A\u77E5\u7C7B\u63D0\u793A&quot;</span>,
        <span class="hljs-attr">duration</span>: <span class="hljs-number">3000</span>, <span class="hljs-comment">// 3s\u540E\u9690\u85CF</span>
      });
    },
  },
};
</code></pre><h2>Props</h2><h4>\u5FEB\u6377\u8C03\u7528</h4><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>Toast.success</td><td>\u6210\u529F\u63D0\u793A</td><td><code>options</code>|<code>message</code></td></tr><tr><td>Toast.error</td><td>\u9519\u8BEF\u63D0\u793A</td><td><code>options</code>|<code>message</code></td></tr><tr><td>Toast.info</td><td>\u4FE1\u606F\u63D0\u793A</td><td><code>options</code>|<code>message</code></td></tr></tbody></table><h5>options</h5><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>type</td><td>toast \u7C7B\u578B</td><td><em>string</em></td><td><code>success</code>|<code>error</code>|<code>info</code></td></tr><tr><td>message</td><td>\u63D0\u793A\u6587\u6848</td><td><em>string</em></td><td>-</td></tr><tr><td>duration</td><td>\u81EA\u52A8\u9690\u85CF\u65F6\u957F\uFF08\u5355\u4F4D ms\uFF09</td><td><em>number</em></td><td><code>1500</code></td></tr><tr><td>safe</td><td>\u662F\u5426\u9002\u914D\u5218\u6D77\u5C4F</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,11),d=[e],j={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(p,r)=>(t(),a("div",o,d))}};export{j as default};
