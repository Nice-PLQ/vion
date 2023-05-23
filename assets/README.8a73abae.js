import{o as a,c as t,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},e=n(`<h1>InfiniteLoading</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u901A\u8FC7<code>bottom-offset</code>\u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u5230\u79BB\u5E95\u90E8\u591A\u5C11\u8DDD\u79BB\u65F6\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u4E3A 0</p><p>\u5F53\u9700\u8981\u52A0\u8F7D\u65F6\uFF0C\u4F1A\u89E6\u53D1<code>load</code>\u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u5305\u542B<code>loaded</code>\u3001<code>completed</code>\u3001<code>error</code>3 \u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u5728\u5F53\u524D\u9875\u7684\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u8C03\u7528<code>loaded</code>\u65B9\u6CD5\uFF0C\u5728\u6240\u6709\u7684\u6570\u636E\u90FD\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u8C03\u7528<code>completed</code>\u65B9\u6CD5\uFF0C\u5728\u6570\u636E\u52A0\u8F7D\u5F02\u5E38\u65F6\uFF0C\u53EF\u8C03\u7528<code>error</code>\u65B9\u6CD5\u5C55\u793A\u9519\u8BEF\u63D0\u793A</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-infinite-loading</span> @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;handleLoad&quot;</span> <span class="hljs-attr">bottom-offset</span>=<span class="hljs-string">&quot;200&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) of list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
      {{index + 1}}
    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-infinite-loading</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">import</span> { defineComponent, ref, effect, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  setup() {
    <span class="hljs-keyword">let</span> page = ref(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">let</span> list = ref(<span class="hljs-keyword">new</span>  <span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span> * page.value).fill(<span class="hljs-number">0</span>));
    <span class="hljs-keyword">const</span> handleScroll = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(e);
    }
    <span class="hljs-keyword">const</span> handleLoad = <span class="hljs-function">(<span class="hljs-params">loaded, completed, error</span>) =&gt;</span> {
      setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
        <span class="hljs-keyword">const</span> nextPage = page.value + <span class="hljs-number">1</span>;
        <span class="hljs-keyword">if</span> (nextPage &lt;= <span class="hljs-number">3</span>) {
          list.value = <span class="hljs-keyword">new</span>  <span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span> * nextPage).fill(<span class="hljs-number">0</span>)
          page.value = nextPage;
          loaded();
        } <span class="hljs-keyword">else</span> {
          completed();
        }
      }, <span class="hljs-number">1000</span>);
    }
    <span class="hljs-keyword">return</span> {
        handleLoad,
        handleScroll,
        page,
        list
    }
  }
})
</code></pre><h4>2\u3001\u6307\u5B9A\u5BB9\u5668\u5185\u7684\u6EDA\u52A8\u52A0\u8F7D</h4><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u76D1\u542C document \u7684\u6EDA\u52A8\u4E8B\u4EF6\uFF0C\u5982\u679C\u9700\u8981\u5728\u6307\u5B9A\u7684\u5BB9\u5668\u5185\u8FDB\u884C\u6EDA\u52A8\u52A0\u8F7D\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E<code>container</code>\u5C5E\u6027\u6307\u5B9A\u5BB9\u5668\uFF0C\u8BE5\u5C5E\u6027\u7684\u503C\u662F css \u9009\u62E9\u5668\uFF0C\u4F8B\u5982 id \u9009\u62E9\u5668\uFF1A<code>#list_wrapper</code></p><p><code>\u753B\u91CD\u70B9\uFF1Aq-infinite-loading</code>\u7EC4\u4EF6\u7684\u7236\u5BB9\u5668\u9700\u8981\u8BBE\u7F6E\u9AD8\u5EA6</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;list_wrapper&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 300px; overflow: scroll;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-infinite-loading</span> @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;handleLoad&quot;</span> <span class="hljs-attr">container</span>=<span class="hljs-string">&quot;#list_wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) of list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
        {{index + 1}}
      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-infinite-loading</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>bottom-offset</td><td>\u6EDA\u52A8\u5230\u79BB\u5E95\u90E8\u591A\u5C11\u8DDD\u79BB\u65F6\u52A0\u8F7D</td><td><em>string</em> | <em>number</em></td><td><code>0</code></td></tr><tr><td>loading-text</td><td>\u6B63\u5728\u52A0\u8F7D\u65F6\u7684\u63D0\u793A</td><td><em>string</em></td><td><code>\u6B63\u5728\u52A0\u8F7D</code></td></tr><tr><td>completed-text</td><td>\u5B8C\u6210\u52A0\u8F7D\u65F6\u7684\u63D0\u793A</td><td><em>string</em></td><td><code>\u6CA1\u6709\u66F4\u591A\u7684\u6570\u636E\u4E86~</code></td></tr><tr><td>error-text</td><td>\u52A0\u8F7D\u5F02\u5E38\u65F6\u7684\u63D0\u793A</td><td><em>string</em></td><td><code>\u6570\u636E\u52A0\u8F7D\u5F02\u5E38</code></td></tr><tr><td>container</td><td>\u7236\u5BB9\u5668\u7684 css \u9009\u62E9\u5668</td><td><em>string</em></td><td>-</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>load</td><td>\u5F53\u6EDA\u52A8\u5230\u79BB\u5E95\u90E8<code>bottom-offset</code>\u7684\u503C\u65F6\u89E6\u53D1</td><td><code>(loaded: Function, completed: Function, error: Function)</code></td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u6301\u7EED\u89E6\u53D1\uFF0C\u7B49\u4EF7\u4E8E\u539F\u751F\u7684<code>scroll</code>\u4E8B\u4EF6</td><td><code>(event: Event)</code></td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>loading</td><td>\u6B63\u5728\u52A0\u8F7D\u65F6\u7684\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>completed</td><td>\u5B8C\u6210\u52A0\u8F7D\u65F6\u7684\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>error</td><td>\u52A0\u8F7D\u5F02\u5E38\u65F6\u7684\u63D0\u793A\u5185\u5BB9</td></tr></tbody></table>`,17),p=[e],i={__name:"README",setup(d,{expose:s}){return s({frontmatter:{}}),(c,r)=>(a(),t("div",l,p))}};export{i as default};
