import{o as t,c as a,a2 as n}from"./index.466186a3.js";const e={class:"markdown-body"},l=n(`<h1>Swiper</h1><hr><p><code>Swiper</code> \u7EC4\u4EF6\u5FC5\u987B\u7ED3\u5408<code>SwiperItem</code>\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528</p><h4>1\u3001\u57FA\u7840\u7528\u6CD5</h4><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-swiper</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-swiper-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;n in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;n&quot;</span>&gt;</span>{{ n }}<span class="hljs-tag">&lt;/<span class="hljs-name">v-swiper-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-swiper</span>&gt;</span>
</code></pre><h4>2\u3001\u81EA\u52A8\u8F6E\u64AD</h4><p>\u901A\u8FC7<code>auto-play</code>\u5C5E\u6027\u8BBE\u7F6E\u81EA\u52A8\u8F6E\u64AD\uFF0C\u9ED8\u8BA4\u8F6E\u64AD\u95F4\u9694\u4E3A 3000ms\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>interval</code>\u81EA\u5B9A\u4E49\u8F6E\u64AD\u95F4\u9694</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-swiper</span> <span class="hljs-attr">auto-play</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-swiper-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;n in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;n&quot;</span>&gt;</span>{{ n }}<span class="hljs-tag">&lt;/<span class="hljs-name">v-swiper-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-swiper</span>&gt;</span>
</code></pre><h4>3\u3001\u81EA\u5B9A\u4E49\u6307\u793A\u5668</h4><p>\u901A\u8FC7<code>v-slot:indicator</code>\u6307\u4EE4\u81EA\u5B9A\u4E49\u8F6E\u64AD\u6307\u793A\u5668</p><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-swiper</span> <span class="hljs-attr">auto-play</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">v-swiper-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;n in 4&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;n&quot;</span>&gt;</span>{{ n }}<span class="hljs-tag">&lt;/<span class="hljs-name">v-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:indicator</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span>&gt;</span>{{ current }} / 4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">v-swiper</span>&gt;</span>
</code></pre><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">current</span>: <span class="hljs-number">0</span>
    };
  },
  <span class="hljs-attr">methods</span>: {
    change(index) {
      <span class="hljs-keyword">this</span>.current = index;
    }
  }
};
</code></pre><h2>Props</h2><h4>Swiper</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>auto-play</td><td>\u662F\u5426\u81EA\u52A8\u8F6E\u64AD</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>interval</td><td>\u81EA\u52A8\u8F6E\u64AD\u7684\u65F6\u95F4\u95F4\u9694\uFF08\u5355\u4F4D: ms\uFF09</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F \uFF08\u5355\u4F4D: ms\uFF09</td><td><em>number</em> | <em>string</em></td><td><code>500</code></td></tr><tr><td>show-indicators</td><td>\u662F\u5426\u663E\u793A\u6307\u793A\u5668</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>indicator-color</td><td>\u6307\u793A\u5668\u7684\u989C\u8272</td><td><em>string</em></td><td>-</td></tr><tr><td>loop</td><td>\u662F\u5426\u5F00\u542F\u65E0\u9650\u5FAA\u73AF</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>SwiperItem</h4><p>\u65E0</p><h2>Event</h2><h4>Swiper</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570\u7C7B\u578B</th></tr></thead><tbody><tr><td>change</td><td>\u8F6E\u64AD\u5207\u6362\u65F6\u89E6\u53D1</td><td><code>(index: Number)</code></td></tr></tbody></table><h4>SwiperItem</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570\u7C7B\u578B</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><code>(event: Event)</code></td></tr></tbody></table>`,22),p=[l],i={__name:"README",setup(d,{expose:s}){return s({frontmatter:{}}),(h,r)=>(t(),a("div",e,p))}};export{i as default};