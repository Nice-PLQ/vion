import{o as a,c as n,a2 as t}from"./index-bfa72c3c.js";const l={class:"markdown-body"},e=t(`<h1>Indexes</h1><p><img src="https://img.shields.io/badge/coverage-0%25-red" alt=""></p><hr><h4>1、基础用法</h4><p>通过<code>columns</code>属性配置选项的数据</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-indexes</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span> <span class="hljs-attr">:default-index</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:row</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;\`\${scope.row.name}\`&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick(scope.row.name)&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-indexes</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">list</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;当前定位&quot;</span>,
          <span class="hljs-attr">anchor</span>: <span class="hljs-string">&quot;#&quot;</span>,
          <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;深圳&quot;</span> }]
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;热门城市&quot;</span>,
          <span class="hljs-attr">anchor</span>: <span class="hljs-string">&quot;热&quot;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;北京&quot;</span> },
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;上海&quot;</span> },
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;广州&quot;</span> },
            { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;深圳&quot;</span> }
          ]
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;A&quot;</span>,
          <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;安庆&quot;</span> }]
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
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>list</td><td>对象数组，用于配置显示的数据</td><td><em>List[Option]</em></td><td>-</td></tr><tr><td>default-index</td><td>默认索引</td><td><em>number</em> | <em>string</em></td><td><code>0</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>select</td><td>点击右侧指示器时触发</td><td>(index: Number|String)</td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>row</td><td>自定义列表左侧展示的内容</td><td><code>scope.row</code></td></tr></tbody></table><h4>List 列 数据结构</h4><p><code>list</code>是一个数组，数组的每一项是 <code>Option</code> 类型的对象，如<code>[Option, Option]</code>。</p><h4>Option 列的项 数据结构</h4><p>列的项是一个对象的结构，默认把这个对象的<code>label</code>属性用于展示组的标题以及右侧的锚点。<code>anchor</code>作为可选的属性，用于自定义锚点的展示文本</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>索引组的标题</td><td><em>string</em></td></tr><tr><td>anchor</td><td>索引组的锚点文本（可选）</td><td><em>string</em></td></tr><tr><td>children</td><td>索引组的内容</td><td><em>array</em></td></tr></tbody></table>`,18),p=[e],i={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(d,h)=>(a(),n("div",l,p))}};export{i as default};
