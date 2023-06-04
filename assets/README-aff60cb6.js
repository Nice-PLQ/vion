import{o as a,c as n,a2 as t}from"./index-5ac088ad.js";const l={class:"markdown-body"},e=t(`<h1>Checkbox</h1><hr><h4>1、基础用法</h4><p>通过<code>v-model</code>绑定多选框的选中状态，<code>true</code>表示选中，<code>false</code>表示未选中</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,
    };
  },
};
</code></pre></div><h4>2、禁用状态</h4><p>通过<code>disabled</code>属性来禁用多选框，禁用状态下多选框不可以选择操作</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><h4>3、设置选中时的背景颜色</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#67C23A&quot;</span>&gt;</span>自定义背景色<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
</code></pre></div><h4>4、多选框大小自定义</h4><p><code>size</code>可以设置多选框的大小，单位 px</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>24px<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;18px&quot;</span>&gt;</span>18px<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
</code></pre></div><h4>5、不同形状</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>方形多选框<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
</code></pre></div><h4>6、多选框组合</h4><p>使用<code>&lt;v-checkbox-group&gt;</code>标签来嵌套你的多选框，此时<code>v-model</code>绑定的是一个数组值</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkList&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>多选A<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>多选B<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>多选C<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox-group</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;dataTime&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>一个月<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;quarter&quot;</span>&gt;</span>一个季<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;year&quot;</span>&gt;</span>一年<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-checkbox-group</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">checkList</span>: [<span class="hljs-string">&quot;b&quot;</span>],
      <span class="hljs-attr">dataTime</span>: [<span class="hljs-string">&quot;month&quot;</span>],
    };
  },
};
</code></pre></div><h2>Props</h2><h4>Checkbox</h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>v-model/checked</td><td>多选框选中的状态</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用状态</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td></tr><tr><td>readonly</td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td></tr><tr><td>checked-color</td><td>选中时的背景色</td><td><em>string</em></td><td><code>#00CAFC</code></td><td>-</td></tr><tr><td>size</td><td>多选框的大小（单位：px）</td><td><em>string</em></td><td><code>16px</code></td><td>-</td></tr><tr><td>count</td><td>多选框的数值</td><td><em>number</em></td><td>-</td><td>-</td></tr><tr><td>shape</td><td>设置形状，支持方形和圆形</td><td><em>string</em></td><td><code>circle</code></td><td><code>circle</code>|<code>square</code></td></tr></tbody></table><h4>Checkbox-Group</h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>多选框选中的值</td><td><em>array</em></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁用所有的多选框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>设置所有的多选框为只读状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>vertical</td><td>是否纵向排列</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><h4>Checkbox</h4><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>多选框状态变化时触发</td><td><code>(checked: Boolean)</code></td></tr><tr><td>click</td><td>多选框点击时触发</td><td>-</td></tr></tbody></table><h4>Checkbox-Group</h4><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>多选框状态变化时触发</td><td><code>(selected: Array)</code></td></tr></tbody></table>`,31),p=[e],b={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(a(),n("div",l,p))}};export{b as default};
