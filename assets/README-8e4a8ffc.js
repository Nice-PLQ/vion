import{o as n,c as a,a2 as l}from"./index-5ac088ad.js";const e={class:"markdown-body"},t=l(`<h1>InfiniteLoading</h1><hr><h4>1、基础用法</h4><p>通过<code>bottom-offset</code>属性设置滚动到离底部多少距离时加载，默认为 0</p><p>当需要加载时，会触发<code>load</code>事件，该事件包含<code>loaded</code>、<code>completed</code>、<code>error</code>3 个函数参数，在当前页的数据加载完成后，调用<code>loaded</code>方法，在所有的数据都加载完成后，调用<code>completed</code>方法，在数据加载异常时，可调用<code>error</code>方法展示错误提示</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-infinite-loading</span> @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;handleLoad&quot;</span> <span class="hljs-attr">bottom-offset</span>=<span class="hljs-string">&quot;200&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) of list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
      {{index + 1}}
    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-infinite-loading</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">import</span> { defineComponent, ref, effect, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
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
</code></pre></div><h4>2、指定容器内的滚动加载</h4><p>默认情况下是监听 document 的滚动事件，如果需要在指定的容器内进行滚动加载，可通过设置<code>container</code>属性指定容器，该属性的值是 css 选择器，例如 id 选择器：<code>#list_wrapper</code></p><p><code>画重点：q-infinite-loading</code>组件的父容器需要设置高度</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;list_wrapper&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 300px; overflow: scroll;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-infinite-loading</span> @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;handleLoad&quot;</span> <span class="hljs-attr">container</span>=<span class="hljs-string">&quot;#list_wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-item&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) of list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
        {{index + 1}}
      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-infinite-loading</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>bottom-offset</td><td>滚动到离底部多少距离时加载</td><td><em>string</em> | <em>number</em></td><td><code>0</code></td></tr><tr><td>loading-text</td><td>正在加载时的提示</td><td><em>string</em></td><td><code>正在加载</code></td></tr><tr><td>completed-text</td><td>完成加载时的提示</td><td><em>string</em></td><td><code>没有更多的数据了~</code></td></tr><tr><td>error-text</td><td>加载异常时的提示</td><td><em>string</em></td><td><code>数据加载异常</code></td></tr><tr><td>container</td><td>父容器的 css 选择器</td><td><em>string</em></td><td>-</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>load</td><td>当滚动到离底部<code>bottom-offset</code>的值时触发</td><td><code>(loaded: Function, completed: Function, error: Function)</code></td></tr><tr><td>scroll</td><td>滚动时持续触发，等价于原生的<code>scroll</code>事件</td><td><code>(event: Event)</code></td></tr></tbody></table><h2>slot</h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>loading</td><td>正在加载时的提示内容</td></tr><tr><td>completed</td><td>完成加载时的提示内容</td></tr><tr><td>error</td><td>加载异常时的提示内容</td></tr></tbody></table>`,17),p=[t],h={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(d,o)=>(n(),a("div",e,p))}};export{h as default};
