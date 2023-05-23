import{o as a,c as n,a2 as t}from"./index.466186a3.js";const l={class:"markdown-body"},p=t(`<h1>Picker</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u901A\u8FC7<code>columns</code>\u5C5E\u6027\u914D\u7F6E\u9009\u9879\u7684\u6570\u636E\uFF0C<code>visible</code>\u5C5E\u6027\u63A7\u5236\u7EC4\u4EF6\u663E\u793A\u4E0E\u9690\u85CF</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">columns</span>: [
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5317\u4EAC\u5E02&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5929\u6D25\u5E02&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10002</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6CB3\u5317\u7701&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10003</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5C71\u897F\u7701&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10004</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u8FBD\u5B81\u7701&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10005</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10006</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6D59\u6C5F\u7701&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10007</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6C5F\u82CF\u7701&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10008</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u798F\u5EFA\u7701&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10009</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u56DB\u5DDD\u7701&quot;</span> }
        <span class="hljs-comment">// ....</span>
      ]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleChange(selectedIndex, selected, columnIndex, picker) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\u9009\u4E2D\u7684\u7D22\u5F15\uFF1A&quot;</span> + selectedIndex);
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\u9009\u4E2D\u9879\uFF1A&quot;</span> + selected);
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;\u9009\u62E9\u7684\u5217\uFF1A&quot;</span> + columnIndex);
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;Picker\u7EC4\u4EF6\u5B9E\u4F8B&quot;</span> + picker);
    }
  }
};
</code></pre><h4>2\u3001\u591A\u5217\u9009\u62E9</h4><p><code>columns</code>\u652F\u6301\u914D\u7F6E\u591A\u5217\uFF0C\u6B64\u65F6\u6570\u7EC4\u4E3A\u4E8C\u7EF4\u6570\u7EC4</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">const</span> years = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>)
  .fill(<span class="hljs-number">1</span>)
  .map(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> ({ <span class="hljs-attr">id</span>: index, <span class="hljs-attr">label</span>: <span class="hljs-number">2020</span> + index + <span class="hljs-string">&quot;\u5E74&quot;</span> }));
<span class="hljs-keyword">const</span> months = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">12</span>)
  .fill(<span class="hljs-number">1</span>)
  .map(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> ({ <span class="hljs-attr">id</span>: index, <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&quot;\u6708&quot;</span> }));
<span class="hljs-keyword">const</span> days = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span>)
  .fill(<span class="hljs-number">1</span>)
  .map(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> ({ <span class="hljs-attr">id</span>: index, <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&quot;\u65E5&quot;</span> }));

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">columns</span>: [years, months, days]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleChange(selectedIndex, selected, columnIndex) {}
  }
};
</code></pre><h4>3\u3001\u8BBE\u7F6E\u5217\u8868\u663E\u793A\u7684\u6570\u91CF</h4><p>\u901A\u8FC7<code>show-item-count</code>\u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5217\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570\uFF0C\u8303\u56F4\u5728[3, 10]\uFF0C\u9ED8\u8BA4\u663E\u793A 5 \u4E2A\uFF0C\u5EFA\u8BAE\u8BBE\u4E3A\u5947\u6570</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:show-item-count</span>=<span class="hljs-string">&quot;7&quot;</span> /&gt;</span>
</code></pre><h4>4\u3001\u591A\u7EA7\u8054\u52A8</h4><p>\u7ED3\u5408<code>change</code>\u4E8B\u4EF6\u8FDB\u884C\u591A\u5217\u7684\u8054\u52A8\u5904\u7406</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-comment">// \u6A21\u62DF\u6570\u636E</span>
<span class="hljs-keyword">const</span> area = {
  <span class="hljs-comment">// \u7701</span>
  <span class="hljs-attr">province</span>: [{ <span class="hljs-attr">id</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701&quot;</span> }, { <span class="hljs-attr">id</span>: <span class="hljs-number">1001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6D59\u6C5F\u7701&quot;</span> }],
  <span class="hljs-comment">// \u5E02</span>
  <span class="hljs-attr">city</span>: [
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6DF1\u5733\u5E02&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2001</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5E7F\u5DDE\u5E02&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2002</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u4E1C\u839E\u5E02&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2003</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u676D\u5DDE\u5E02&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2004</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5B81\u6CE2\u5E02&quot;</span> }
  ],
  <span class="hljs-comment">// \u533A</span>
  <span class="hljs-attr">district</span>: [
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3000</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5357\u5C71\u533A&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3001</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u7F57\u6E56\u533A&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3002</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5929\u6CB3\u533A&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3003</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u8D8A\u79C0\u533A&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3004</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2002</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u957F\u5B89\u9547&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3005</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2002</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5E38\u5E73\u9547&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3006</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2003</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u897F\u6E56\u533A&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3007</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2003</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u4F59\u676D\u533A&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3008</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2004</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5317\u4ED1\u533A&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3009</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2004</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5949\u5316\u533A&quot;</span> }
  ]
};
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">columns</span>: []
    };
  },
  mounted() {
    <span class="hljs-keyword">const</span> provinceData = area.province;
    <span class="hljs-keyword">const</span> cityData = area.city.filter(
      <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === provinceData[<span class="hljs-number">0</span>].id
    );
    <span class="hljs-keyword">const</span> districtData = area.district.filter(
      <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === cityData[<span class="hljs-number">0</span>].id
    );
    <span class="hljs-comment">// \u8BBE\u7F6E\u6BCF\u5217\u7684\u6570\u636E\u9879</span>
    <span class="hljs-keyword">this</span>.columns = [provinceData, cityData, districtData];
  },
  <span class="hljs-attr">methods</span>: {
    handleChange(selectedIndex, selected, columnIndex, picker) {
      <span class="hljs-comment">// \u9009\u62E9\u7B2C\u4E00\u5217\u7684\u7701\u4EFD\u540E\uFF0C\u5206\u522B\u8BBE\u7F6E\u7B2C\u4E8C\u3001\u4E09\u5217\u7684\u5E02\u3001\u533A\u6570\u636E\u9879</span>
      <span class="hljs-keyword">if</span> (columnIndex === <span class="hljs-number">0</span>) {
        <span class="hljs-keyword">const</span> cityData = area.city.filter(
          <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === selected.id
        );
        <span class="hljs-keyword">const</span> districtData = area.district.filter(
          <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === cityData[<span class="hljs-number">0</span>].id
        );
        <span class="hljs-comment">// \u8BBE\u7F6E\u9009\u4E2D\u7701\u91CC\u7684\u57CE\u5E02\u6570\u636E</span>
        picker.setColumnValues(<span class="hljs-number">1</span>, cityData);
        <span class="hljs-comment">// \u8BBE\u7F6E\u9009\u4E2D\u7701\u91CC\u7B2C\u4E00\u4E2A\u57CE\u5E02\u91CC\u7684\u533A</span>
        picker.setColumnValues(<span class="hljs-number">2</span>, districtData);
      }

      <span class="hljs-comment">// \u9009\u62E9\u7B2C\u4E8C\u5217\u7684\u5E02\u540E\uFF0C\u518D\u8BBE\u7F6E\u533A\u7684\u6570\u636E\u9879</span>
      <span class="hljs-keyword">if</span> (columnIndex === <span class="hljs-number">1</span>) {
        <span class="hljs-keyword">const</span> districtData = area.district.filter(
          <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === selected.id
        );
        picker.setColumnValues(<span class="hljs-number">2</span>, districtData);
      }
    }
  }
};
</code></pre><h4>5\u3001\u8BBE\u7F6E\u9009\u4E2D\u9879</h4><p>\u901A\u8FC7<code>selected-value</code>\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D\u9879</p><pre><code class="hljs html"><span class="hljs-comment">&lt;!-- \u5355\u5217 \u9009\u4E2D\u7B2C\u4E09\u4E2A\u9879 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:selected-value</span>=<span class="hljs-string">&quot;columns[2]&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- \u591A\u5217 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
  <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:selected-value</span>=<span class="hljs-string">&quot;selectedValue&quot;</span>
/&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">columns</span>: [],
      <span class="hljs-attr">selectedValue</span>: <span class="hljs-literal">null</span>
    };
  },
  mounted() {
    <span class="hljs-keyword">const</span> provinceData = area.province;
    <span class="hljs-keyword">const</span> cityData = area.city.filter(
      <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === provinceData[<span class="hljs-number">0</span>].id
    );
    <span class="hljs-keyword">const</span> district = area.district.filter(
      <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === cityData[<span class="hljs-number">0</span>].id
    );
    <span class="hljs-keyword">this</span>.columns = [provinceData, cityData, district];
    <span class="hljs-keyword">this</span>.selectedValue = [
      { <span class="hljs-attr">id</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5E7F\u4E1C\u7701&quot;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6DF1\u5733\u5E02&quot;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">3001</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5357\u5C71\u533A&quot;</span> }
    ];

    <span class="hljs-comment">// \u6216</span>
    <span class="hljs-comment">/* this.selectedValue = [
      this.columns[0][0],
      this.columns[1][0],
      this.columns[2][1]
    ]; */</span>
  }
};
</code></pre><h2>Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visible</td><td>\u663E\u793A\u4E0E\u9690\u85CF</td><td><em>boolean</em></td><td>-</td></tr><tr><td>mask-visible</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>title</td><td>\u6807\u9898</td><td><em>string</em></td><td>-</td></tr><tr><td>columns</td><td>\u5BF9\u8C61\u6570\u7EC4\uFF0C\u7528\u4E8E\u914D\u7F6E\u5217\u663E\u793A\u7684\u6570\u636E</td><td><em>Column[Option]</em></td><td><code>[]</code></td></tr><tr><td>show-item-count</td><td>\u914D\u7F6E\u5217\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>number</em></td><td>-</td></tr><tr><td>selected-value</td><td>\u5217\u9009\u4E2D\u7684\u9879</td><td><em>object</em> | <em>array</em></td><td>-</td></tr><tr><td>value-key</td><td>\u9009\u9879\u6587\u5B57\u5BF9\u5E94\u7684\u952E\u540D</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td>inertia</td><td>\u60EF\u6027\u6EDA\u52A8\u7CFB\u6570\uFF0C\u6570\u503C\u8D8A\u5927\u60EF\u6027\u8D8A\u5927\uFF0C\u4E3A 0 \u65F6\u6CA1\u6709\u60EF\u6027</td><td><em>number</em> | <em>string</em></td><td><code>0.8</code></td></tr><tr><td>show-cancel</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-ok</td><td>\u662F\u5426\u663E\u793A\u786E\u5B9A\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>cancel-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>ok-text</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u6848</td><td><em>strinng</em></td><td><code>\u786E\u5B9A</code></td></tr><tr><td>immediate-change</td><td>\u662F\u5426\u7ACB\u5373\u89E6\u53D1 change \u4E8B\u4EF6\uFF0C\u4E3A true \u65F6\uFF0C\u5728\u8FC7\u6E21\u52A8\u753B\u5F00\u59CB\u524D\u89E6\u53D1\uFF0C\u5426\u5219\u5728\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u83DC\u5355\u9879\u65F6\u89E6\u53D1</td><td><code>(selectedIndex: Number, selected: Option, columnIndex: Number, picker: Picker)</code></td></tr><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9A\u65F6\u89E6\u53D1</td><td>\`(selected: Option</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table><h2>Method</h2><p>\u53EF\u901A\u8FC7 <code>ref</code> \u83B7\u53D6\u5230\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u7136\u540E\u8C03\u7528\u4EE5\u4E0B\u7684\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u5217\u7684\u7D22\u5F15\u9ED8\u8BA4\u4ECE 0 \u5F00\u59CB</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>getValues</td><td>\u83B7\u53D6\u6240\u6709\u5217\u9009\u4E2D\u7684\u503C</td><td>-</td></tr><tr><td>setValues</td><td>\u8BBE\u7F6E\u6240\u6709\u5217\u9009\u4E2D\u7684\u503C</td><td><code>(values: Option[])</code></td></tr><tr><td>getColumnSelectValue</td><td>\u83B7\u53D6\u6307\u5B9A\u5217\u9009\u4E2D\u7684\u503C</td><td><code>(columnIndex: Number)</code></td></tr><tr><td>setColumnSelectValue</td><td>\u8BBE\u7F6E\u6307\u5B9A\u5217\u9009\u4E2D\u7684\u503C</td><td><code>(columnIndex: Number, value: Option)</code></td></tr><tr><td>setColumnValues</td><td>\u8BBE\u7F6E\u6307\u5B9A\u5217\u7684\u6240\u6709\u9879(\u6570\u636E\u6E90)</td><td><code>(columnIndex: Number, values: Option[], resetOffset: Boolean)</code></td></tr></tbody></table><h4>Column \u5217 \u6570\u636E\u7ED3\u6784</h4><p><code>columns</code>\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5355\u5217\u65F6\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F <code>Option</code> \u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u5982<code>[Option, Option]</code>\u3002\u591A\u5217\u65F6\uFF0C\u662F\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u5982\u4E24\u5217\u7684<code>[[Option, Option], [Option, Option]]</code></p><h4>Option \u5217\u7684\u9879 \u6570\u636E\u7ED3\u6784</h4><p>\u5217\u7684\u9879\u662F\u4E00\u4E2A\u5BF9\u8C61\u7684\u7ED3\u6784\uFF0C\u9ED8\u8BA4\u628A\u8FD9\u4E2A\u5BF9\u8C61\u7684<code>label</code>\u5C5E\u6027\u7528\u4E8E\u5C55\u793A\uFF0C\u5982\u679C\u9700\u8981\u8C03\u6574\u5C55\u793A\u7684\u5BF9\u8C61\u5B57\u6BB5\uFF0C\u53EF\u901A\u8FC7<code>value-key</code>\u8BBE\u7F6E\uFF0C</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>label</td><td>\u5217\u7684\u9009\u9879\u503C</td><td><em>string</em></td></tr></tbody></table>`,33),e=[p],j={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(d,h)=>(a(),n("div",l,e))}};export{j as default};
