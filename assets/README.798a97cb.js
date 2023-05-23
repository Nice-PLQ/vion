import{o as s,c as a,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},d=n(`<h1>Dialog</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>Dialog \u7EC4\u4EF6\u9ED8\u8BA4\u5728 vue \u5B9E\u4F8B\u4E0B\u6302\u8F7D<code>$dialog</code>\u5BF9\u8C61\uFF0C\u63D0\u4F9B<code>alert</code>\u3001<code>confirm</code>\u5FEB\u6377\u8C03\u7528\u3002</p><pre><code class="hljs js"><span class="hljs-keyword">this</span>.$dialog.alert({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u63D0\u793A&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;\u8FD9\u662Falert\u5F39\u7A97&quot;</span>,
  <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">action</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(action);
  },
});

<span class="hljs-keyword">this</span>.$dialog.confirm({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u63D0\u793A&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;\u8FD9\u662Fconfirm\u5F39\u7A97&quot;</span>,
  <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">action</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(action);
  },
});
</code></pre><h4>2\u3001\u5BF9\u8BDD\u6846\u5185\u5BB9\u652F\u6301 html \u4EE3\u7801\u7247\u6BB5</h4><p>\u4F7F\u7528\u4EE3\u7801\u7247\u6BB5\u662F\u6709\u98CE\u9669\u7684\uFF0C\u9700\u8981\u8BBE\u7F6E<code>dangerouslyUseHTMLString</code>\u5C5E\u6027</p><pre><code class="hljs js"><span class="hljs-keyword">this</span>.$dialog.alert({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u63D0\u793A&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;&lt;strong style=&quot;color: red;&quot;&gt;\u8FD9\u662Falert\u5F39\u7A97&lt;/strong&gt;&#39;</span>,
  <span class="hljs-attr">dangerouslyUseHTMLString</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">action</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(action);
  },
});
</code></pre><h4>3\u3001\u624B\u52A8\u5173\u95ED</h4><p>\u8BBE\u7F6E<code>beforeClose</code>\u53EF\u963B\u6B62\u5BF9\u8BDD\u6846\u81EA\u52A8\u5173\u95ED\uFF0C\u5728\u6070\u5F53\u7684\u65F6\u673A\u8C03\u7528\u56DE\u8C03\u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u624B\u52A8\u5173\u95ED\uFF0C\u56DE\u8C03\u53C2\u6570\u5217\u8868\u53EF\u53C2\u8003\u4E0B\u9762\u793A\u4F8B\u4EE3\u7801</p><pre><code class="hljs js"><span class="hljs-keyword">this</span>.$dialog.alert({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u63D0\u793A&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;\u8FD9\u662Falert\u5F39\u7A97&quot;</span>,
  <span class="hljs-attr">beforeClose</span>: <span class="hljs-function">(<span class="hljs-params">action, done</span>) =&gt;</span> {
    setTimeout(done, <span class="hljs-number">1000</span>);
  },
});
</code></pre><h4>4\u3001\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u989C\u8272</h4><pre><code class="hljs js"><span class="hljs-keyword">this</span>.$dialog.confirm({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u63D0\u793A&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;\u8FD9\u662Fconfirm\u5F39\u7A97&quot;</span>,
  <span class="hljs-attr">cancelBtnTextColor</span>: <span class="hljs-string">&quot;#FF596A&quot;</span>,
  <span class="hljs-attr">confirmBtnTextColor</span>: <span class="hljs-string">&quot;#00cafc&quot;</span>,
  <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">action</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(action);
  },
});
</code></pre><h4>5\u3001\u7EC4\u4EF6\u65B9\u5F0F\u5F15\u7528</h4><p>\u9664\u4E86\u5FEB\u6377\u8C03\u7528\u5916\uFF0C\u540C\u65F6\u63D0\u4F9B\u4E86\u7EC4\u4EF6\u65B9\u5F0F\u5F15\u7528 Dialog \u7EC4\u4EF6</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u663E\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u63D0\u793A&quot;</span>
  <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;visible = false&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;visible = false&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u8FD9\u662F\u7EC4\u4EF6\u7684\u5F39\u7A97\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-dialog</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    };
  },
};
</code></pre><h4>6\u3001\u81EA\u5B9A\u4E49\u9009\u9879\u6309\u94AE</h4><p>\u901A\u8FC7<code>buttons</code>\u5C5E\u6027\u5B9A\u4E49\u9009\u9879\u6309\u94AE\uFF0C\u8BE5\u5B57\u6BB5\u662F\u6570\u7EC4\u7C7B\u578B\uFF0C\u5176\u5143\u7D20\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5305\u542B<code>text</code>\u548C<code>color</code>\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5176\u4E2D<code>text</code>\u8868\u793A\u6309\u94AE\u7684\u6587\u672C\uFF0C<code>color</code>\u4E3A\u6587\u672C\u7684\u989C\u8272</p><pre><code class="hljs html"><span class="hljs-comment">&lt;!-- \u7EC4\u4EF6\u65B9\u5F0F\u8C03\u7528 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u63D0\u793A&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:buttons</span>=<span class="hljs-string">&quot;[&#39;\u4F7F\u7528&#39;, &#39;\u4E0D\u4F7F\u7528&#39;, {text: &#39;\u53D6\u6D88&#39;, color: &#39;#FF596A&#39;}]&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleBtnClick&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u53EF\u81EA\u5B9A\u4E49\u591A\u4E2A\u6309\u94AE\uFF0C\u5EFA\u8BAE\u6700\u591A3\u4E2A<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-dialog</span>&gt;</span>

<span class="hljs-comment">&lt;!-- \u5FEB\u6377\u65B9\u5F0F\u8C03\u7528 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShowDialog&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u81EA\u5B9A\u4E493\u4E2A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleBtnClick(index) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\u6309\u94AE\u7684\u7D22\u5F15\uFF1A&quot;</span>, index);
    },
    handleShowDialog() {
      <span class="hljs-keyword">this</span>.$dialog.show({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u63D0\u793A&quot;</span>,
        <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;\u53EF\u81EA\u5B9A\u4E49\u591A\u4E2A\u6309\u94AE\uFF0C\u5EFA\u8BAE\u6700\u591A3\u4E2A&quot;</span>,
        <span class="hljs-attr">buttons</span>: [<span class="hljs-string">&quot;\u4F7F\u7528&quot;</span>, <span class="hljs-string">&quot;\u4E0D\u4F7F\u7528&quot;</span>, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;#FF596A&quot;</span> }],
        <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\u6309\u94AE\u7684\u7D22\u5F15\uFF1A&quot;</span>, index);
        },
      });
    },
  },
};
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model/visible</td><td>\u663E\u793A\u4E0E\u9690\u85CF</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>title</td><td>\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>content</td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9</td><td><em>string</em></td><td>-</td></tr><tr><td>show-confirm-btn</td><td>\u662F\u5426\u663E\u793A\u786E\u5B9A\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-cancel-btn</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>confirm-btn-text</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u672C</td><td><em>string</em></td><td><code>\u786E\u5B9A</code></td></tr><tr><td>cancel-btn-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u672C</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>confirm-btn-text-color</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u672C\u989C\u8272</td><td><em>string</em></td><td><code>#03081A</code></td></tr><tr><td>cancel-btn-text-color</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u672C\u989C\u8272</td><td><em>string</em></td><td><code>#03081A</code></td></tr><tr><td>dialog-class</td><td>\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u7684class</td><td><em>string</em></td><td>-</td></tr><tr><td>buttons</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u6309\u94AE</td><td><em>Array</em></td><td>-</td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u9501\u5B9A\u5185\u5BB9\u6EDA\u52A8\uFF08\u7EE7\u627F\u81EA Popup\uFF09</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>callback</td><td>\u70B9\u51FB\u53D6\u6D88\u6216\u786E\u5B9A\u6309\u94AE\u540E\u7684\u56DE\u8C03</td><td><em>function</em></td><td><code>(action: String)</code></td></tr><tr><td>beforeClose</td><td>\u5173\u95ED\u4E4B\u524D\u7684\u56DE\u8C03</td><td><em>function</em></td><td><code>(action: String, done: Function)</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>click</td><td>\u70B9\u51FB<em>\u81EA\u5B9A\u4E49</em>\u9009\u9879\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code>(index: Number)</code></td></tr></tbody></table><h2>\u5FEB\u6377\u8C03\u7528</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>Dialog.alert</td><td>\u57FA\u7840\u5BF9\u8BDD\u6846</td><td><code>options</code></td></tr><tr><td>Dialog.confirm</td><td>\u9009\u62E9\u5BF9\u8BDD\u6846</td><td><code>options</code></td></tr><tr><td>Dialog.show</td><td>\u901A\u7528\u5BF9\u8BDD\u6846</td><td><code>options</code></td></tr><tr><td>Dialog.close</td><td>\u5173\u95ED\u5BF9\u8BDD\u6846</td><td>-</td></tr></tbody></table><h5>options</h5><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><em>string</em></td><td>-</td><td>-</td></tr><tr><td>content</td><td>\u5BF9\u8BDD\u6846\u5185\u5BB9</td><td><em>string</em></td><td>-</td><td>-</td></tr><tr><td>showConfirmBtn</td><td>\u662F\u5426\u663E\u793A\u786E\u5B9A\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td><td>-</td></tr><tr><td>showCancelBtn</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td></tr><tr><td>confirmBtnText</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u672C</td><td><em>string</em></td><td><code>\u786E\u5B9A</code></td><td>-</td></tr><tr><td>cancelBtnText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u672C</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td><td>-</td></tr><tr><td>confirmBtnTextColor</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u672C\u989C\u8272</td><td><em>string</em></td><td><code>#03081A</code></td><td>-</td></tr><tr><td>cancelBtnTextColor</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u672C\u989C\u8272</td><td><em>string</em></td><td><code>#03081A</code></td><td>-</td></tr><tr><td>dangerouslyUseHTMLString</td><td>\u662F\u5426\u4F7F\u7528\u4EE3\u7801\u7247\u6BB5</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td></tr><tr><td>dialog-class</td><td>\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u7684class</td><td><em>string</em></td><td>-</td><td></td></tr><tr><td>buttons</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u6309\u94AE</td><td><em>Array</em></td><td>-</td><td></td></tr><tr><td>callback</td><td>\u70B9\u51FB\u53D6\u6D88\u6216\u786E\u5B9A\u6309\u94AE\u540E\u7684\u56DE\u8C03</td><td><em>function</em></td><td>-</td><td><code>(action: String)</code></td></tr><tr><td>beforeClose</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03</td><td><em>function</em></td><td>-</td><td><code>(action: String, done: Function)</code></td></tr></tbody></table>`,29),o=[d],i={__name:"README",setup(e,{expose:t}){return t({frontmatter:{}}),(p,r)=>(s(),a("div",l,o))}};export{i as default};
