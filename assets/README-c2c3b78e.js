import{o as a,c as n,a2 as l}from"./index-993d6fae.js";const t={class:"markdown-body"},p=l(`<h1>SlipDrawer</h1><hr><h4>1、基础用法</h4><p>通过<code>left-items</code>或<code>right-items</code>属性分别设置左右两侧的操作项，数据结构是数组对象，包含<code>text</code>和<code>style</code>字段</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span>
  <span class="hljs-attr">:left-items</span>=<span class="hljs-string">&quot;leftItems&quot;</span>
  <span class="hljs-attr">:right-items</span>=<span class="hljs-string">&quot;rightItems&quot;</span>
  @<span class="hljs-attr">left-click</span>=<span class="hljs-string">&quot;handleLeft&quot;</span>
  @<span class="hljs-attr">right-click</span>=<span class="hljs-string">&quot;handleRight&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;左右滑动&quot;</span> <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;right&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">leftItems</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;置顶&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #b0c2cc&quot;</span> }],
      <span class="hljs-attr">rightItems</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;收藏&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #15bd62&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;标记为已读&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #eac707&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;删除&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #ee0a24&quot;</span> },
      ],
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleLeft(index) {
      <span class="hljs-built_in">console</span>.log(index);
    },
    handleRight(index) {
      <span class="hljs-built_in">console</span>.log(index);
    },
  },
};
</code></pre></div><h4>2、自定操作项</h4><p><code>v-slot:left</code>、<code>v-slot:right</code>插槽可以分别自定义左右两侧的操作项</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button reset&quot;</span>&gt;</span>撤销<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:left</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-placholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:right</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;gray&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>添加<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-list</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button like&quot;</span>&gt;</span>
      点赞
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;like&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button share&quot;</span>&gt;</span>
      分享
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;share&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div><pre><code class="hljs less"><span class="hljs-selector-class">.button</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">56px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">16px</span>;
  <span class="hljs-attribute">border</span>: none;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-selector-tag">&amp;</span><span class="hljs-selector-class">.reset</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#ee0a24</span>;
  }
  <span class="hljs-selector-tag">&amp;</span><span class="hljs-selector-class">.share</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#15bd62</span>;
  }
  <span class="hljs-selector-tag">&amp;</span><span class="hljs-selector-class">.like</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#13a2ea</span>;
  }
}
</code></pre></div><h4>3、组合</h4><p>使用<code>q-slip-drawer-group</code>组件来嵌套子组件</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer-group</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;slipDraserGroup&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span> <span class="hljs-attr">:left-items</span>=<span class="hljs-string">&quot;leftItems&quot;</span> <span class="hljs-attr">:right-items</span>=<span class="hljs-string">&quot;rightItems&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题一&quot;</span>
      <span class="hljs-attr">help</span>=<span class="hljs-string">&quot;辅助文本&quot;</span>
      <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;right&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">v-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span> <span class="hljs-attr">:left-items</span>=<span class="hljs-string">&quot;leftItems&quot;</span> <span class="hljs-attr">:right-items</span>=<span class="hljs-string">&quot;rightItems&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题二&quot;</span>
      <span class="hljs-attr">help</span>=<span class="hljs-string">&quot;辅助文本&quot;</span>
      <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;right&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">v-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span> <span class="hljs-attr">:left-items</span>=<span class="hljs-string">&quot;leftItems&quot;</span> <span class="hljs-attr">:right-items</span>=<span class="hljs-string">&quot;rightItems&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题三&quot;</span>
      <span class="hljs-attr">help</span>=<span class="hljs-string">&quot;辅助文本&quot;</span>
      <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;right&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">v-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer-group</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">rightItems</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;收藏&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #15bd62&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;标记为已读&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #eac707&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;删除&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #ee0a24&quot;</span> },
      ],
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleRight() {
      <span class="hljs-comment">// 通过获取到&lt;v-slip-drawer-group&gt;组件实例后，调用实例的reset()方法，可以收起抽屉</span>
      <span class="hljs-keyword">this</span>.$refs.slipDraserGroup.reset();
    },
  },
};
</code></pre></div><h2>Props</h2><h4>SlipDrawer</h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>offset</td><td>允许滑动的偏移量</td><td><em>number</em></td><td><code>15</code></td></tr><tr><td>left-items</td><td>左侧的操作项</td><td><em>Item[]</em></td><td>-</td></tr><tr><td>right-items</td><td>右侧的操作项</td><td><em>Item[]</em></td><td>-</td></tr></tbody></table><h4>Item 数据结构</h4><p><code>left-items|right-items</code>属性类型是一个数组对象，对象包含以下的属性：</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>text</td><td>选项文本</td><td><em>string</em></td></tr><tr><td>style</td><td>选项的样式</td><td><em>string</em></td></tr></tbody></table><h4>SlipDrawerGroup</h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><h4>SlipDrawer</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数类型</th></tr></thead><tbody><tr><td>left-click</td><td>点击左侧操作项时触发</td><td><code>(index: Number)</code></td></tr><tr><td>right-click</td><td>点击右侧操作项时触发</td><td><code>(index: Number)</code></td></tr><tr><td>opened</td><td>当滑动展开后触发</td><td>-</td></tr><tr><td>closed</td><td>当滑动关闭后触发</td><td>-</td></tr></tbody></table><h4>SlipDrawerGroup</h4><p>无</p><h2>Slot</h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>自定义左侧选项内容</td></tr><tr><td>right</td><td>自定义右侧选项内容</td></tr></tbody></table>`,29),e=[p],u={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(h,i)=>(a(),n("div",t,e))}};export{u as default};
