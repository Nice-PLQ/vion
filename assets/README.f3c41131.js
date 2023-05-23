import{o as a,c as t,a2 as n}from"./index.466186a3.js";const l={class:"markdown-body"},p=n(`<h1>SlipDrawer</h1><hr><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><p>\u901A\u8FC7<code>left-items</code>\u6216<code>right-items</code>\u5C5E\u6027\u5206\u522B\u8BBE\u7F6E\u5DE6\u53F3\u4E24\u4FA7\u7684\u64CD\u4F5C\u9879\uFF0C\u6570\u636E\u7ED3\u6784\u662F\u6570\u7EC4\u5BF9\u8C61\uFF0C\u5305\u542B<code>text</code>\u548C<code>style</code>\u5B57\u6BB5</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span>
  <span class="hljs-attr">:left-items</span>=<span class="hljs-string">&quot;leftItems&quot;</span>
  <span class="hljs-attr">:right-items</span>=<span class="hljs-string">&quot;rightItems&quot;</span>
  @<span class="hljs-attr">left-click</span>=<span class="hljs-string">&quot;handleLeft&quot;</span>
  @<span class="hljs-attr">right-click</span>=<span class="hljs-string">&quot;handleRight&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5DE6\u53F3\u6ED1\u52A8&quot;</span> <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;right&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">leftItems</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u7F6E\u9876&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #b0c2cc&quot;</span> }],
      <span class="hljs-attr">rightItems</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6536\u85CF&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #15bd62&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6807\u8BB0\u4E3A\u5DF2\u8BFB&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #eac707&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u5220\u9664&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #ee0a24&quot;</span> },
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
</code></pre><h4>2\u3001\u81EA\u5B9A\u64CD\u4F5C\u9879</h4><p><code>v-slot:left</code>\u3001<code>v-slot:right</code>\u63D2\u69FD\u53EF\u4EE5\u5206\u522B\u81EA\u5B9A\u4E49\u5DE6\u53F3\u4E24\u4FA7\u7684\u64CD\u4F5C\u9879</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button reset&quot;</span>&gt;</span>\u64A4\u9500<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:left</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-placholder&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:right</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">v-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;gray&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u6DFB\u52A0<span class="hljs-tag">&lt;/<span class="hljs-name">v-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-list</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button like&quot;</span>&gt;</span>
      \u70B9\u8D5E
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;like&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;button share&quot;</span>&gt;</span>
      \u5206\u4EAB
      <span class="hljs-tag">&lt;<span class="hljs-name">v-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;share&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
</code></pre><pre><code class="hljs less"><span class="hljs-selector-class">.button</span> {
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
</code></pre><h4>3\u3001\u7EC4\u5408</h4><p>\u4F7F\u7528<code>q-slip-drawer-group</code>\u7EC4\u4EF6\u6765\u5D4C\u5957\u5B50\u7EC4\u4EF6</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer-group</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;slipDraserGroup&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span> <span class="hljs-attr">:left-items</span>=<span class="hljs-string">&quot;leftItems&quot;</span> <span class="hljs-attr">:right-items</span>=<span class="hljs-string">&quot;rightItems&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898\u4E00&quot;</span>
      <span class="hljs-attr">help</span>=<span class="hljs-string">&quot;\u8F85\u52A9\u6587\u672C&quot;</span>
      <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;right&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">v-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span> <span class="hljs-attr">:left-items</span>=<span class="hljs-string">&quot;leftItems&quot;</span> <span class="hljs-attr">:right-items</span>=<span class="hljs-string">&quot;rightItems&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898\u4E8C&quot;</span>
      <span class="hljs-attr">help</span>=<span class="hljs-string">&quot;\u8F85\u52A9\u6587\u672C&quot;</span>
      <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;right&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">v-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-slip-drawer</span> <span class="hljs-attr">:left-items</span>=<span class="hljs-string">&quot;leftItems&quot;</span> <span class="hljs-attr">:right-items</span>=<span class="hljs-string">&quot;rightItems&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">v-list</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898\u4E09&quot;</span>
      <span class="hljs-attr">help</span>=<span class="hljs-string">&quot;\u8F85\u52A9\u6587\u672C&quot;</span>
      <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;right&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">v-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-slip-drawer-group</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">rightItems</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6536\u85CF&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #15bd62&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6807\u8BB0\u4E3A\u5DF2\u8BFB&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #eac707&quot;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u5220\u9664&quot;</span>, <span class="hljs-attr">style</span>: <span class="hljs-string">&quot;background: #ee0a24&quot;</span> },
      ],
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleRight() {
      <span class="hljs-comment">// \u901A\u8FC7\u83B7\u53D6\u5230&lt;v-slip-drawer-group&gt;\u7EC4\u4EF6\u5B9E\u4F8B\u540E\uFF0C\u8C03\u7528\u5B9E\u4F8B\u7684reset()\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6536\u8D77\u62BD\u5C49</span>
      <span class="hljs-keyword">this</span>.$refs.slipDraserGroup.reset();
    },
  },
};
</code></pre><h2>Props</h2><h4>SlipDrawer</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>offset</td><td>\u5141\u8BB8\u6ED1\u52A8\u7684\u504F\u79FB\u91CF</td><td><em>number</em></td><td><code>15</code></td></tr><tr><td>left-items</td><td>\u5DE6\u4FA7\u7684\u64CD\u4F5C\u9879</td><td><em>Item[]</em></td><td>-</td></tr><tr><td>right-items</td><td>\u53F3\u4FA7\u7684\u64CD\u4F5C\u9879</td><td><em>Item[]</em></td><td>-</td></tr></tbody></table><h4>Item \u6570\u636E\u7ED3\u6784</h4><p><code>left-items|right-items</code>\u5C5E\u6027\u7C7B\u578B\u662F\u4E00\u4E2A\u6570\u7EC4\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u5305\u542B\u4EE5\u4E0B\u7684\u5C5E\u6027\uFF1A</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>text</td><td>\u9009\u9879\u6587\u672C</td><td><em>string</em></td></tr><tr><td>style</td><td>\u9009\u9879\u7684\u6837\u5F0F</td><td><em>string</em></td></tr></tbody></table><h4>SlipDrawerGroup</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><h4>SlipDrawer</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570\u7C7B\u578B</th></tr></thead><tbody><tr><td>left-click</td><td>\u70B9\u51FB\u5DE6\u4FA7\u64CD\u4F5C\u9879\u65F6\u89E6\u53D1</td><td><code>(index: Number)</code></td></tr><tr><td>right-click</td><td>\u70B9\u51FB\u53F3\u4FA7\u64CD\u4F5C\u9879\u65F6\u89E6\u53D1</td><td><code>(index: Number)</code></td></tr><tr><td>opened</td><td>\u5F53\u6ED1\u52A8\u5C55\u5F00\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>closed</td><td>\u5F53\u6ED1\u52A8\u5173\u95ED\u540E\u89E6\u53D1</td><td>-</td></tr></tbody></table><h4>SlipDrawerGroup</h4><p>\u65E0</p><h2>Slot</h2><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u9009\u9879\u5185\u5BB9</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u9009\u9879\u5185\u5BB9</td></tr></tbody></table>`,29),e=[p],d={__name:"README",setup(h,{expose:s}){return s({frontmatter:{}}),(r,o)=>(a(),t("div",l,e))}};export{d as default};
