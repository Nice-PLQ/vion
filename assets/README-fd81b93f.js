import{o as a,c as n,a2 as l}from"./index-c264c4e8.js";const t={class:"markdown-body"},p=l(`<h1>Tabbar</h1><p><img src="https://img.shields.io/badge/coverage-100%25-green" alt=""></p><hr><p><code>Tabbar</code> 组件必须结合<code>TabbarItem</code>组件一起使用</p><h4>1、基础用法</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    主页
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Message&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    消息
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Contact&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    联系人
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar</span>&gt;</span>
</code></pre></div><h4>2、设置红点或徽章</h4><p>通过设置<code>badge</code>属性来显示红点或徽章，当值为<code>true</code>时，以红点呈现，当值为数字或字符串，则以胶囊型的徽章呈现</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    主页
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;99+&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Message&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    消息
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">:badge</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Mail&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    邮件
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Contact&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    联系人
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar</span>&gt;</span>
</code></pre></div><h4>3、自定义颜色</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div><pre><code class="hljs html"><span class="hljs-comment">&lt;!-- 统一设置颜色 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#00CAFC&quot;</span> <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#03081A&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    主页
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Message&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    消息
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Contact&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    联系人
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 分别为单个标签指定颜色 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#00CAFC&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    主页
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#FFCD00&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Message&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    消息
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-tabbar-item</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#67C23A&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Contact&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    联系人
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-tabbar</span>&gt;</span>
</code></pre></div><h2>Props</h2><h4>Tabbar</h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中标签的索引值</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>active-color</td><td>标签选中时的颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>inactive-color</td><td>标签未选中时的颜色</td><td><em>string</em></td><td>-</td></tr></tbody></table><h4>TabbarItem</h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>badge</td><td>红点或徽章，值为 <em>true</em> 时显示为红点，否则显示为胶囊形态</td><td><em>number</em> | <em>string</em> | <em>boolean</em></td><td>-</td></tr><tr><td>active-color</td><td>当前标签选中时的颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>inactive-color</td><td>当前标签未选中时的颜色</td><td><em>string</em></td><td>-</td></tr></tbody></table><h2>Event</h2><h4>Tabbar</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数类型</th></tr></thead><tbody><tr><td>change</td><td>切换标签栏时触发</td><td><code>(index: Number, event: Event)</code></td></tr></tbody></table><h4>TabbarItem</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数类型</th></tr></thead><tbody><tr><td>click</td><td>点击标签时触发</td><td><code>(event: Event)</code></td></tr></tbody></table><h2>Slot</h2><h4>TabbarItem</h4><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标内容</td></tr></tbody></table>`,24),e=[p],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(b,h)=>(a(),n("div",t,e))}};export{i as default};
