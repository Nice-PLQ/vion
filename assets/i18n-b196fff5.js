import{o as n,c as a,a2 as e}from"./index-993d6fae.js";const p={class:"markdown-body"},l=e(`<h1>国际化</h1><p>Vion 默认采用中文语言，如果需要切换其他语言，请参考如下</p><h3>1、切换语言</h3><p>Vion 通过 Locale 组件实现多语言支持，使用<code>Locale.use</code>方法切换语言环境，比如切换到英文环境</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div><pre><code class="hljs js"><span class="hljs-comment">// 按需引入</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> { ActionSheet, Locale } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;
<span class="hljs-keyword">import</span> messages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion/es/locale/lang/en-US&quot;</span>;

Locale.use(<span class="hljs-string">&quot;en-US&quot;</span>, messages);

createApp()
  .use(ActionSheet);
  .use(Locale);

</code></pre></div><p>或</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div><pre><code class="hljs js"><span class="hljs-comment">// 全量引入Vion</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> Vion <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion&quot;</span>;
<span class="hljs-keyword">import</span> messages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vion/es/locale/lang/en-US&quot;</span>;

vion.Locale.use(<span class="hljs-string">&quot;en-US&quot;</span>, messages);

createApp().use(Vion);
</code></pre></div><h3>2、语言包</h3><p>目前 vion 内置了以下几种语言</p><ul><li>简体中文（zh-CN）</li><li>繁体中文（zh-Hant）</li><li>英语（en-US）</li><li>日语（ja-JP）</li></ul><p>如果不能满足业务场景，只需要按照<a href="https://github.com/Nice-PLQ/vion/blob/master/src/locale/lang/zh-CN.js">语言包格式</a>自定义语言，然后使用<code>Locale</code>组件加载即可，如：</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">import</span> messages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./lang/fr-FR&quot;</span>; <span class="hljs-comment">// 自定义的【法语】语言包</span>
Locale.use(<span class="hljs-string">&quot;fr-FR&quot;</span>, messages);
</code></pre></div><h3>3、引入多个语言包</h3><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">import</span> frMessages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./lang/fr-FR&quot;</span>; <span class="hljs-comment">// 自定义的【法语】语言包</span>
<span class="hljs-keyword">import</span> trMessages <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./lang/tr-TR&quot;</span>; <span class="hljs-comment">// 自定义的【土耳其语】语言包</span>

Locale.add(<span class="hljs-string">&quot;tr-TR&quot;</span>, trMessages); <span class="hljs-comment">// 将语言包加入到集合中</span>
Locale.use(<span class="hljs-string">&quot;fr-FR&quot;</span>, frMessages); <span class="hljs-comment">// 默认使用法语作为首选语言</span>
</code></pre></div>`,14),r=[l],u={__name:"i18n",setup(c,{expose:s}){return s({frontmatter:{}}),(i,t)=>(n(),a("div",p,r))}};export{u as default};
