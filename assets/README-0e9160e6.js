import{o as n,c as a,a2 as t}from"./index-cac22ab8.js";const l={class:"markdown-body"},e=t(`<h1>Dialog</h1><p><img src="https://img.shields.io/badge/coverage-98.14%25-green" alt=""></p><hr><h4>1、基础用法</h4><p>Dialog 组件默认在 vue 实例下挂载<code>$dialog</code>对象，提供<code>alert</code>、<code>confirm</code>快捷调用。</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">this</span>.$dialog.alert({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;提示&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;这是alert弹窗&quot;</span>,
  <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">action</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(action);
  },
});

<span class="hljs-keyword">this</span>.$dialog.confirm({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;提示&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;这是confirm弹窗&quot;</span>,
  <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">action</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(action);
  },
});
</code></pre></div><h4>2、对话框内容支持 html 代码片段</h4><p>使用代码片段是有风险的，需要设置<code>dangerouslyUseHTMLString</code>属性</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">this</span>.$dialog.alert({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;提示&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;&lt;strong style=&quot;color: red;&quot;&gt;这是alert弹窗&lt;/strong&gt;&#39;</span>,
  <span class="hljs-attr">dangerouslyUseHTMLString</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">action</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(action);
  },
});
</code></pre></div><h4>3、手动关闭</h4><p>设置<code>beforeClose</code>可阻止对话框自动关闭，在恰当的时机调用回调函数的第二个参数可手动关闭，回调参数列表可参考下面示例代码</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">this</span>.$dialog.alert({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;提示&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;这是alert弹窗&quot;</span>,
  <span class="hljs-attr">beforeClose</span>: <span class="hljs-function">(<span class="hljs-params">action, done</span>) =&gt;</span> {
    setTimeout(done, <span class="hljs-number">1000</span>);
  },
});
</code></pre></div><h4>4、自定义按钮的颜色</h4><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">this</span>.$dialog.confirm({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;提示&quot;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;这是confirm弹窗&quot;</span>,
  <span class="hljs-attr">cancelBtnTextColor</span>: <span class="hljs-string">&quot;#FF596A&quot;</span>,
  <span class="hljs-attr">confirmBtnTextColor</span>: <span class="hljs-string">&quot;#00cafc&quot;</span>,
  <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">action</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(action);
  },
});
</code></pre></div><h4>5、组件方式引用</h4><p>除了快捷调用外，同时提供了组件方式引用 Dialog 组件</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible = true&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>显示<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;提示&quot;</span>
  <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;visible = false&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;visible = false&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>这是组件的弹窗用法<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-dialog</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    };
  },
};
</code></pre></div><h4>6、自定义选项按钮</h4><p>通过<code>buttons</code>属性定义选项按钮，该字段是数组类型，其元素可以是字符串，也可以是一个包含<code>text</code>和<code>color</code>属性的对象，其中<code>text</code>表示按钮的文本，<code>color</code>为文本的颜色</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div><pre><code class="hljs html"><span class="hljs-comment">&lt;!-- 组件方式调用 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;提示&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:buttons</span>=<span class="hljs-string">&quot;[&#39;使用&#39;, &#39;不使用&#39;, {text: &#39;取消&#39;, color: &#39;#FF596A&#39;}]&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleBtnClick&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>可自定义多个按钮，建议最多3个<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-dialog</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 快捷方式调用 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleShowDialog&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>自定义3个按钮<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleBtnClick(index) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;按钮的索引：&quot;</span>, index);
    },
    handleShowDialog() {
      <span class="hljs-keyword">this</span>.$dialog.show({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;提示&quot;</span>,
        <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;可自定义多个按钮，建议最多3个&quot;</span>,
        <span class="hljs-attr">buttons</span>: [<span class="hljs-string">&quot;使用&quot;</span>, <span class="hljs-string">&quot;不使用&quot;</span>, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;取消&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;#FF596A&quot;</span> }],
        <span class="hljs-attr">callback</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;按钮的索引：&quot;</span>, index);
        },
      });
    },
  },
};
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model/visible</td><td>显示与隐藏</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td>content</td><td>对话框内容</td><td><em>string</em></td><td>-</td></tr><tr><td>show-confirm-btn</td><td>是否显示确定按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-cancel-btn</td><td>是否显示取消按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>confirm-btn-text</td><td>确定按钮文本</td><td><em>string</em></td><td><code>确定</code></td></tr><tr><td>cancel-btn-text</td><td>取消按钮文本</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>confirm-btn-text-color</td><td>确定按钮文本颜色</td><td><em>string</em></td><td><code>#03081A</code></td></tr><tr><td>cancel-btn-text-color</td><td>取消按钮文本颜色</td><td><em>string</em></td><td><code>#03081A</code></td></tr><tr><td>dialog-class</td><td>自定义对话框的class</td><td><em>string</em></td><td>-</td></tr><tr><td>buttons</td><td>自定义选项按钮</td><td><em>Array</em></td><td>-</td></tr><tr><td>lock-scroll</td><td>是否锁定内容滚动（继承自 Popup）</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>callback</td><td>点击取消或确定按钮后的回调</td><td><em>function</em></td><td><code>(action: String)</code></td></tr><tr><td>beforeClose</td><td>关闭之前的回调</td><td><em>function</em></td><td><code>(action: String, done: Function)</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>cancel</td><td>点击取消按钮时触发</td><td>-</td></tr><tr><td>confirm</td><td>点击确定按钮时触发</td><td>-</td></tr><tr><td>click</td><td>点击<em>自定义</em>选项按钮时触发</td><td><code>(index: Number)</code></td></tr></tbody></table><h2>快捷调用</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>Dialog.alert</td><td>基础对话框</td><td><code>options</code></td></tr><tr><td>Dialog.confirm</td><td>选择对话框</td><td><code>options</code></td></tr><tr><td>Dialog.show</td><td>通用对话框</td><td><code>options</code></td></tr><tr><td>Dialog.close</td><td>关闭对话框</td><td>-</td></tr></tbody></table><h5>options</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>参数</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><em>string</em></td><td>-</td><td>-</td></tr><tr><td>content</td><td>对话框内容</td><td><em>string</em></td><td>-</td><td>-</td></tr><tr><td>showConfirmBtn</td><td>是否显示确定按钮</td><td><em>boolean</em></td><td><code>true</code></td><td>-</td></tr><tr><td>showCancelBtn</td><td>是否显示取消按钮</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td></tr><tr><td>confirmBtnText</td><td>确定按钮文本</td><td><em>string</em></td><td><code>确定</code></td><td>-</td></tr><tr><td>cancelBtnText</td><td>取消按钮文本</td><td><em>string</em></td><td><code>取消</code></td><td>-</td></tr><tr><td>confirmBtnTextColor</td><td>确定按钮文本颜色</td><td><em>string</em></td><td><code>#03081A</code></td><td>-</td></tr><tr><td>cancelBtnTextColor</td><td>取消按钮文本颜色</td><td><em>string</em></td><td><code>#03081A</code></td><td>-</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否使用代码片段</td><td><em>boolean</em></td><td><code>false</code></td><td>-</td></tr><tr><td>dialog-class</td><td>自定义对话框的class</td><td><em>string</em></td><td>-</td><td></td></tr><tr><td>buttons</td><td>自定义选项按钮</td><td><em>Array</em></td><td>-</td><td></td></tr><tr><td>callback</td><td>点击取消或确定按钮后的回调</td><td><em>function</em></td><td>-</td><td><code>(action: String)</code></td></tr><tr><td>beforeClose</td><td>关闭前的回调</td><td><em>function</em></td><td>-</td><td><code>(action: String, done: Function)</code></td></tr></tbody></table>`,30),p=[e],b={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(c,o)=>(n(),a("div",l,p))}};export{b as default};
