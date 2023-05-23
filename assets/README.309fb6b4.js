import{o as t,c as a,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},e=n(`<h1>Indexes</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u901A\u8FC7<code>columns</code>\u5C5E\u6027\u914D\u7F6E\u9009\u9879\u7684\u6570\u636E</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-indexes</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span> <span class="hljs-attr">:default-index</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:row</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;\`\${scope.row.name}\`&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick(scope.row.name)&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-indexes</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">list</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5F53\u524D\u5B9A\u4F4D&quot;</span>,
          <span class="hljs-attr">anchor</span>: <span class="hljs-string">&quot;#&quot;</span>,
          <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u6DF1\u5733&quot;</span> }]
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u70ED\u95E8\u57CE\u5E02&quot;</span>,
          <span class="hljs-attr">anchor</span>: <span class="hljs-string">&quot;\u70ED&quot;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5317\u4EAC&quot;</span> },
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u4E0A\u6D77&quot;</span> },
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5E7F\u5DDE&quot;</span> },
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u6DF1\u5733&quot;</span> }
          ]
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;A&quot;</span>,
          <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5B89\u5E86&quot;</span> }]
        }
        <span class="hljs-comment">// ...</span>
      ]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleClick(name) {
      <span class="hljs-built_in">console</span>.log(name);
    }
  }
};
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>list</td><td>\u5BF9\u8C61\u6570\u7EC4\uFF0C\u7528\u4E8E\u914D\u7F6E\u663E\u793A\u7684\u6570\u636E</td><td><em>List[Option]</em></td><td>-</td></tr><tr><td>default-index</td><td>\u9ED8\u8BA4\u7D22\u5F15</td><td><em>number</em> | <em>string</em></td><td><code>0</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u70B9\u51FB\u53F3\u4FA7\u6307\u793A\u5668\u65F6\u89E6\u53D1</td><td>(index: Number|String)</td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>row</td><td>\u81EA\u5B9A\u4E49\u5217\u8868\u5DE6\u4FA7\u5C55\u793A\u7684\u5185\u5BB9</td><td><code>scope.row</code></td></tr></tbody></table><h4>List \u5217 \u6570\u636E\u7ED3\u6784</h4><p><code>list</code>\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F <code>Option</code> \u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5982<code>[Option, Option]</code>\u3002</p><h4>Option \u5217\u7684\u9879 \u6570\u636E\u7ED3\u6784</h4><p>\u5217\u7684\u9879\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u7ED3\u6784\uFF0C\u9ED8\u8BA4\u628A\u8FD9\u4E2A\u5BF9\u8C61\u7684<code>label</code>\u5C5E\u6027\u7528\u4E8E\u5C55\u793A\u7EC4\u7684\u6807\u9898\u4EE5\u53CA\u53F3\u4FA7\u7684\u951A\u70B9\u3002<code>anchor</code>\u4F5C\u4E3A\u53EF\u9009\u7684\u5C5E\u6027\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u951A\u70B9\u7684\u5C55\u793A\u6587\u672C</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>label</td><td>\u7D22\u5F15\u7EC4\u7684\u6807\u9898</td><td><em>string</em></td></tr><tr><td>anchor</td><td>\u7D22\u5F15\u7EC4\u7684\u951A\u70B9\u6587\u672C\uFF08\u53EF\u9009\uFF09</td><td><em>string</em></td></tr><tr><td>children</td><td>\u7D22\u5F15\u7EC4\u7684\u5185\u5BB9</td><td><em>array</em></td></tr></tbody></table>`,17),p=[e],i={__name:"README",setup(h,{expose:s}){return s({frontmatter:{}}),(c,d)=>(t(),a("div",l,p))}};export{i as default};
