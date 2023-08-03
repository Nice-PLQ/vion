import{o as a,c as n,a2 as l}from"./index-fa0a3844.js";const e={class:"markdown-body"},t=l(`<h1>ActionSheet</h1><hr><h4>1、基础用法</h4><p>通过<code>v-model</code>控制组件的显示与隐藏，<code>items</code>数组定义展示的选项，数组的每一项是字符串或对象类型，对象属性见 API 文档说明</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;ActionSheet标题&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span>
/&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">items</span>: [<span class="hljs-string">&quot;选项一&quot;</span>, <span class="hljs-string">&quot;选项二&quot;</span>, <span class="hljs-string">&quot;选项三&quot;</span>]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleSelect(selected, selectedIndex) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;选中的项：&quot;</span> + selected);
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;选中的项的索引：&quot;</span> + selectedIndex);
    }
  }
};
</code></pre></div><h4>2、显示取消按钮选项</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;ActionSheet标题&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
  <span class="hljs-attr">show-cancel</span>
/&gt;</span>
</code></pre></div><h4>3、设置菜单项的文本颜色</h4><p>将<code>items</code>属性设置为对象数组，通过对象的<code>color</code>字段可以控制文本的颜色</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span> <span class="hljs-attr">showCancel</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible2&quot;</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items2&quot;</span> <span class="hljs-attr">showCancel</span> /&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">items</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;确定&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;#00CAFC&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;删除&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;red&quot;</span> }
      ]
    };
  }
};
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">items2</span>: [<span class="hljs-string">&quot;选项一&quot;</span>, <span class="hljs-string">&quot;选项二&quot;</span>, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;删除&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;red&quot;</span> }]
    };
  }
};
</code></pre></div><h4>4、选择后显示选中的图标</h4><p>自定义多选和单选，此时可以将<code>items</code>属性设置为对象数组形式，对象必须包含<code>text</code>和<code>selected</code>2 个字段，通过自行设置<code>selected</code>的值来达到多选或单选的效果</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;ActionSheet标题&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
  <span class="hljs-attr">show-cancel</span>
  <span class="hljs-attr">show-select-icon</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelect&quot;</span>
/&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">items</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;选项一&quot;</span>, <span class="hljs-attr">selected</span>: <span class="hljs-literal">false</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;选项二&quot;</span>, <span class="hljs-attr">selected</span>: <span class="hljs-literal">false</span> }
      ]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleSelect(selected, selectedIndex) {
      <span class="hljs-comment">// 多选</span>
      <span class="hljs-keyword">const</span> selectedItem = <span class="hljs-keyword">this</span>.items[selectedIndex];
      selectedItem.selected = !selectedItem.selected;

      <span class="hljs-comment">// 单选</span>
      <span class="hljs-comment">// this.items.forEach((item, index) =&gt; {</span>
      <span class="hljs-comment">//   item.selected = index === selectedIndex;</span>
      <span class="hljs-comment">// });</span>
    }
  }
};
</code></pre></div><h4>5. 自定义标题和自定义选项</h4><p>支持自定义标题和自定义选项</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-action-sheet</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible6&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items4&quot;</span>
  <span class="hljs-attr">show-cancel</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #00cafc; font-size: 16px;&quot;</span>&gt;</span>自定义标题<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">item</span>=<span class="hljs-string">&quot;{data}&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #00cafc;&quot;</span>&gt;</span>自定义{{&#39;{{data.item.text\\}\\}&#39;}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-action-sheet</span>&gt;</span>
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>显示与隐藏</td><td><em>boolean</em></td><td>-</td></tr><tr><td>items</td><td>菜单选项</td><td><em>Item[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>顶部标题</td><td><em>string</em></td><td>-</td></tr><tr><td>show-cancel</td><td>是否显示取消选择项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-select-icon</td><td>是否显示选中后的图标</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>select</td><td>选中菜单项时触发</td><td><code>(item: Item, selectedIndex: number)</code></td></tr><tr><td>cancel</td><td>点击取消项时触发</td><td>-</td></tr><tr><td>close</td><td>actionSheet 关闭时触发</td><td>-</td></tr></tbody></table><h4>Item 数据结构</h4><p><code>items</code>属性类型是一个数组，数组项可以是<code>string|object</code>，对象类型可以包含以下的值：</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>key</td><td>key(可选)</td><td><em>string</em> | <em>number</em></td></tr><tr><td>text</td><td>选项文本</td><td><em>string</em></td></tr><tr><td>color</td><td>选项文本的颜色</td><td><em>string</em></td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>插槽名</th><th>说明</th><th>插槽props</th></tr></thead><tbody><tr><td>title</td><td>自定义标题</td><td>-</td></tr><tr><td>item</td><td>自定义选项</td><td><code>{ data: { item: Item, index : number} }</code></td></tr></tbody></table>`,29),p=[t],h={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(d,i)=>(a(),n("div",e,p))}};export{h as default};
