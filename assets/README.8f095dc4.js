import{o as t,c as a,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},e=n(`<h1>ActionSheet</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u901A\u8FC7<code>v-model</code>\u63A7\u5236\u7EC4\u4EF6\u7684\u663E\u793A\u4E0E\u9690\u85CF\uFF0C<code>items</code>\u6570\u7EC4\u5B9A\u4E49\u5C55\u793A\u7684\u9009\u9879\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\u5B57\u7B26\u4E32\u6216\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5BF9\u8C61\u5C5E\u6027\u89C1 API \u6587\u6863\u8BF4\u660E</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;ActionSheet\u6807\u9898&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span>
/&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">items</span>: [<span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span>, <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span>, <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span>]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleSelect(selected, selectedIndex) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\u9009\u4E2D\u7684\u9879\uFF1A&quot;</span> + selected);
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\u9009\u4E2D\u7684\u9879\u7684\u7D22\u5F15\uFF1A&quot;</span> + selectedIndex);
    }
  }
};
</code></pre><h4>2\u3001\u663E\u793A\u53D6\u6D88\u6309\u94AE\u9009\u9879</h4><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;ActionSheet\u6807\u9898&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
  <span class="hljs-attr">show-cancel</span>
/&gt;</span>
</code></pre><h4>3\u3001\u8BBE\u7F6E\u83DC\u5355\u9879\u7684\u6587\u672C\u989C\u8272</h4><p>\u5C06<code>items</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u901A\u8FC7\u5BF9\u8C61\u7684<code>color</code>\u5B57\u6BB5\u53EF\u4EE5\u63A7\u5236\u6587\u672C\u7684\u989C\u8272</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span> <span class="hljs-attr">showCancel</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible2&quot;</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items2&quot;</span> <span class="hljs-attr">showCancel</span> /&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">items</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u786E\u5B9A&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;#00CAFC&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u5220\u9664&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;red&quot;</span> }
      ]
    };
  }
};
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">items2</span>: [<span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span>, <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span>, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u5220\u9664&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;red&quot;</span> }]
    };
  }
};
</code></pre><h4>4\u3001\u9009\u62E9\u540E\u663E\u793A\u9009\u4E2D\u7684\u56FE\u6807</h4><p>\u81EA\u5B9A\u4E49\u591A\u9009\u548C\u5355\u9009\uFF0C\u6B64\u65F6\u53EF\u4EE5\u5C06<code>items</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u5BF9\u8C61\u6570\u7EC4\u5F62\u5F0F\uFF0C\u5BF9\u8C61\u5FC5\u987B\u5305\u542B<code>text</code>\u548C<code>selected</code>2 \u4E2A\u5B57\u6BB5\uFF0C\u901A\u8FC7\u81EA\u884C\u8BBE\u7F6E<code>selected</code>\u7684\u503C\u6765\u8FBE\u5230\u591A\u9009\u6216\u5355\u9009\u7684\u6548\u679C</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;ActionSheet\u6807\u9898&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
  <span class="hljs-attr">show-cancel</span>
  <span class="hljs-attr">show-select-icon</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span>
/&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">items</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span>, <span class="hljs-attr">selected</span>: <span class="hljs-literal">false</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span>, <span class="hljs-attr">selected</span>: <span class="hljs-literal">false</span> }
      ]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleSelect(selected, selectedIndex) {
      <span class="hljs-comment">// \u591A\u9009</span>
      <span class="hljs-keyword">const</span> selectedItem = <span class="hljs-keyword">this</span>.items[selectedIndex];
      selectedItem.selected = !selectedItem.selected;

      <span class="hljs-comment">// \u5355\u9009</span>
      <span class="hljs-comment">// this.items.forEach((item, index) =&gt; {</span>
      <span class="hljs-comment">//   item.selected = index === selectedIndex;</span>
      <span class="hljs-comment">// });</span>
    }
  }
};
</code></pre><h4>5. \u81EA\u5B9A\u4E49\u6807\u9898\u548C\u81EA\u5B9A\u4E49\u9009\u9879</h4><p>\u652F\u6301\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u81EA\u5B9A\u4E49\u9009\u9879</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible6&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items4&quot;</span>
  <span class="hljs-attr">show-cancel</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #00cafc; font-size: 16px;&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">item</span>=<span class="hljs-string">&quot;{data}&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #00cafc;&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49{{&#39;{{data.item.text\\}\\}&#39;}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-action-sheet</span>&gt;</span>
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u663E\u793A\u4E0E\u9690\u85CF</td><td><em>boolean</em></td><td>-</td></tr><tr><td>items</td><td>\u83DC\u5355\u9009\u9879</td><td><em>Item[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>\u9876\u90E8\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>show-cancel</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u9009\u62E9\u9879</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-select-icon</td><td>\u662F\u5426\u663E\u793A\u9009\u4E2D\u540E\u7684\u56FE\u6807</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u9009\u4E2D\u83DC\u5355\u9879\u65F6\u89E6\u53D1</td><td><code>(item: Item, selectedIndex: number)</code></td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u9879\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>actionSheet \u5173\u95ED\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table><h4>Item \u6570\u636E\u7ED3\u6784</h4><p><code>items</code>\u5C5E\u6027\u7C7B\u578B\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u9879\u53EF\u4EE5\u662F<code>string|object</code>\uFF0C\u5BF9\u8C61\u7C7B\u578B\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u7684\u503C\uFF1A</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>key</td><td>key(\u53EF\u9009)</td><td><em>string</em> | <em>number</em></td></tr><tr><td>text</td><td>\u9009\u9879\u6587\u672C</td><td><em>string</em></td></tr><tr><td>color</td><td>\u9009\u9879\u6587\u672C\u7684\u989C\u8272</td><td><em>string</em></td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u63D2\u69FDprops</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td><td>-</td></tr><tr><td>item</td><td>\u81EA\u5B9A\u4E49\u9009\u9879</td><td><code>{ data: { item: Item, index : number} }</code></td></tr></tbody></table>`,29),p=[e],j={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(o,d)=>(t(),a("div",l,p))}};export{j as default};
