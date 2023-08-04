import{o as a,c as n,a2 as l}from"./index-cac22ab8.js";const p={class:"markdown-body"},t=l(`<h1>Popup</h1><p><img src="https://img.shields.io/badge/coverage-86%25-green" alt=""></p><hr><h4>1、基础用法</h4><p>通过<code>v-model</code>控制组件的显示与隐藏，<code>position</code>属性设置弹出位置</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px; height: 100%; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px; height: 100%; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px; height: 200px; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    };
  },
};
</code></pre></div><h4>2、设置弹出层内容区的动画名</h4><p>可以自定义<code>transition-name</code>来控制弹出层内容区的动画，其等价于 transition 组件的<a href="https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D">name</a>属性</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">transition-name</span>=<span class="hljs-string">&quot;slide-fade&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 200px; background: #fff;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-popup</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div><pre><code class="hljs css"><span class="hljs-keyword">@keyframes</span> slideFadeIn {
  <span class="hljs-selector-tag">from</span> {
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">100%</span>, <span class="hljs-number">0</span>);
  }

  <span class="hljs-selector-tag">to</span> {
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
  }
}

<span class="hljs-keyword">@keyframes</span> slideFadeOut {
  <span class="hljs-selector-tag">from</span> {
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
  }

  <span class="hljs-selector-tag">to</span> {
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(<span class="hljs-number">0</span>, <span class="hljs-number">100%</span>, <span class="hljs-number">0</span>);
  }
}

<span class="hljs-selector-class">.slide-fade-enter-active</span> {
  <span class="hljs-attribute">animation</span>: slideFadeIn <span class="hljs-number">1.5s</span>;
}

<span class="hljs-selector-class">.slide-fade-leave-active</span> {
  <span class="hljs-attribute">animation</span>: slideFadeOut <span class="hljs-number">1.5s</span>;
}
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>v-model/visible</td><td>是否显示组件</td><td><em>boolean</em></td><td><code>false</code></td><td></td></tr><tr><td>mask-visible</td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td><td></td></tr><tr><td>mask-click-close</td><td>点击遮罩是否关闭弹窗</td><td><em>boolean</em></td><td><code>true</code></td><td></td></tr><tr><td>position</td><td>弹出层的位置</td><td><em>string</em></td><td><code>bottom</code></td><td><code>top</code>|<code>right</code>|<code>bottom</code>|<code>left</code>|<code>center</code></td></tr><tr><td>transition-name</td><td>弹出层动画名，等价于 transition 组件的 name 属性</td><td><em>string</em></td><td><code>slide-bottom</code></td><td></td></tr><tr><td>lock-scroll</td><td>是否锁定内容滚动</td><td><em>boolean</em></td><td><code>true</code></td><td></td></tr><tr><td>to</td><td>el 选择器, 将 popup 渲染到哪个 el 下,这个 el 在执行 createApp 前必须存在</td><td><em>string</em></td><td><code>body</code></td><td></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>open</td><td>打开弹出层时触发</td><td>-</td></tr><tr><td>opened</td><td>打开弹出层并且动画结束后触发</td><td>-</td></tr><tr><td>close</td><td>关闭弹出层时触发</td><td>-</td></tr><tr><td>closed</td><td>关闭弹出层并且动画结束后触发</td><td>-</td></tr></tbody></table>`,15),e=[t],h={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(d,i)=>(a(),n("div",p,e))}};export{h as default};
