import{o as a,c as n,a2 as l}from"./index-5ac088ad.js";const p={class:"markdown-body"},e=l(`<h1>Picker</h1><hr><h4>1、基础用法</h4><p>通过<code>columns</code>属性配置选项的数据，<code>visible</code>属性控制组件显示与隐藏</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">columns</span>: [
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;北京市&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;天津市&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10002</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;河北省&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10003</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;山西省&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10004</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;辽宁省&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10005</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;广东省&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10006</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;浙江省&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10007</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;江苏省&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10008</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;福建省&quot;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">10009</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;四川省&quot;</span> }
        <span class="hljs-comment">// ....</span>
      ]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleChange(selectedIndex, selected, columnIndex, picker) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;选中的索引：&quot;</span> + selectedIndex);
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;选中项：&quot;</span> + selected);
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;选择的列：&quot;</span> + columnIndex);
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;Picker组件实例&quot;</span> + picker);
    }
  }
};
</code></pre></div><h4>2、多列选择</h4><p><code>columns</code>支持配置多列，此时数组为二维数组</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">const</span> years = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>)
  .fill(<span class="hljs-number">1</span>)
  .map(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> ({ <span class="hljs-attr">id</span>: index, <span class="hljs-attr">label</span>: <span class="hljs-number">2020</span> + index + <span class="hljs-string">&quot;年&quot;</span> }));
<span class="hljs-keyword">const</span> months = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">12</span>)
  .fill(<span class="hljs-number">1</span>)
  .map(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> ({ <span class="hljs-attr">id</span>: index, <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&quot;月&quot;</span> }));
<span class="hljs-keyword">const</span> days = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span>)
  .fill(<span class="hljs-number">1</span>)
  .map(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> ({ <span class="hljs-attr">id</span>: index, <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&quot;日&quot;</span> }));

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">columns</span>: [years, months, days]
    };
  },
  <span class="hljs-attr">methods</span>: {
    handleChange(selectedIndex, selected, columnIndex) {}
  }
};
</code></pre></div><h4>3、设置列表显示的数量</h4><p>通过<code>show-item-count</code>属性可以配置列可见的选项个数，范围在[3, 10]，默认显示 5 个，建议设为奇数</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:show-item-count</span>=<span class="hljs-string">&quot;7&quot;</span> /&gt;</span>
</code></pre></div><h4>4、多级联动</h4><p>结合<code>change</code>事件进行多列的联动处理</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div><pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div><pre><code class="hljs js"><span class="hljs-comment">// 模拟数据</span>
<span class="hljs-keyword">const</span> area = {
  <span class="hljs-comment">// 省</span>
  <span class="hljs-attr">province</span>: [{ <span class="hljs-attr">id</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;广东省&quot;</span> }, { <span class="hljs-attr">id</span>: <span class="hljs-number">1001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;浙江省&quot;</span> }],
  <span class="hljs-comment">// 市</span>
  <span class="hljs-attr">city</span>: [
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;深圳市&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2001</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;广州市&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2002</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;东莞市&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2003</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;杭州市&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2004</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;宁波市&quot;</span> }
  ],
  <span class="hljs-comment">// 区</span>
  <span class="hljs-attr">district</span>: [
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3000</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;南山区&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3001</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;罗湖区&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3002</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;天河区&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3003</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2001</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;越秀区&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3004</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2002</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;长安镇&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3005</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2002</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;常平镇&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3006</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2003</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;西湖区&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3007</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2003</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;余杭区&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3008</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2004</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;北仑区&quot;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3009</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2004</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;奉化区&quot;</span> }
  ]
};
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">columns</span>: []
    };
  },
  mounted() {
    <span class="hljs-keyword">const</span> provinceData = area.province;
    <span class="hljs-keyword">const</span> cityData = area.city.filter(
      <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === provinceData[<span class="hljs-number">0</span>].id
    );
    <span class="hljs-keyword">const</span> districtData = area.district.filter(
      <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === cityData[<span class="hljs-number">0</span>].id
    );
    <span class="hljs-comment">// 设置每列的数据项</span>
    <span class="hljs-keyword">this</span>.columns = [provinceData, cityData, districtData];
  },
  <span class="hljs-attr">methods</span>: {
    handleChange(selectedIndex, selected, columnIndex, picker) {
      <span class="hljs-comment">// 选择第一列的省份后，分别设置第二、三列的市、区数据项</span>
      <span class="hljs-keyword">if</span> (columnIndex === <span class="hljs-number">0</span>) {
        <span class="hljs-keyword">const</span> cityData = area.city.filter(
          <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === selected.id
        );
        <span class="hljs-keyword">const</span> districtData = area.district.filter(
          <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === cityData[<span class="hljs-number">0</span>].id
        );
        <span class="hljs-comment">// 设置选中省里的城市数据</span>
        picker.setColumnValues(<span class="hljs-number">1</span>, cityData);
        <span class="hljs-comment">// 设置选中省里第一个城市里的区</span>
        picker.setColumnValues(<span class="hljs-number">2</span>, districtData);
      }

      <span class="hljs-comment">// 选择第二列的市后，再设置区的数据项</span>
      <span class="hljs-keyword">if</span> (columnIndex === <span class="hljs-number">1</span>) {
        <span class="hljs-keyword">const</span> districtData = area.district.filter(
          <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === selected.id
        );
        picker.setColumnValues(<span class="hljs-number">2</span>, districtData);
      }
    }
  }
};
</code></pre></div><h4>5、设置选中项</h4><p>通过<code>selected-value</code>属性可以设置默认选中项</p><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div><pre><code class="hljs html"><span class="hljs-comment">&lt;!-- 单列 选中第三个项 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:selected-value</span>=<span class="hljs-string">&quot;columns[2]&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- 多列 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">v-picker</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
  <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>
  <span class="hljs-attr">:selected-value</span>=<span class="hljs-string">&quot;selectedValue&quot;</span>
/&gt;</span>
</code></pre></div><div class="code-wrapper"><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div><pre><code class="hljs js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">columns</span>: [],
      <span class="hljs-attr">selectedValue</span>: <span class="hljs-literal">null</span>
    };
  },
  mounted() {
    <span class="hljs-keyword">const</span> provinceData = area.province;
    <span class="hljs-keyword">const</span> cityData = area.city.filter(
      <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === provinceData[<span class="hljs-number">0</span>].id
    );
    <span class="hljs-keyword">const</span> district = area.district.filter(
      <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.parentId === cityData[<span class="hljs-number">0</span>].id
    );
    <span class="hljs-keyword">this</span>.columns = [provinceData, cityData, district];
    <span class="hljs-keyword">this</span>.selectedValue = [
      { <span class="hljs-attr">id</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;广东省&quot;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">1000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;深圳市&quot;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">3001</span>, <span class="hljs-attr">parentId</span>: <span class="hljs-number">2000</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;南山区&quot;</span> }
    ];

    <span class="hljs-comment">// 或</span>
    <span class="hljs-comment">/* this.selectedValue = [
      this.columns[0][0],
      this.columns[1][0],
      this.columns[2][1]
    ]; */</span>
  }
};
</code></pre></div><h2>Props</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>显示与隐藏</td><td><em>boolean</em></td><td>-</td></tr><tr><td>mask-visible</td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>title</td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td>columns</td><td>对象数组，用于配置列显示的数据</td><td><em>Column[Option]</em></td><td><code>[]</code></td></tr><tr><td>show-item-count</td><td>配置列可见的选项个数</td><td><em>number</em></td><td>-</td></tr><tr><td>selected-value</td><td>列选中的项</td><td><em>object</em> | <em>array</em></td><td>-</td></tr><tr><td>value-key</td><td>选项文字对应的键名</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td>inertia</td><td>惯性滚动系数，数值越大惯性越大，为 0 时没有惯性</td><td><em>number</em> | <em>string</em></td><td><code>0.8</code></td></tr><tr><td>show-cancel</td><td>是否显示取消按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-ok</td><td>是否显示确定按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>cancel-text</td><td>取消按钮文案</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>ok-text</td><td>确定按钮文案</td><td><em>strinng</em></td><td><code>确定</code></td></tr><tr><td>immediate-change</td><td>是否立即触发 change 事件，为 true 时，在过渡动画开始前触发，否则在动画结束后触发</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>选中菜单项时触发</td><td><code>(selectedIndex: Number, selected: Option, columnIndex: Number, picker: Picker)</code></td></tr><tr><td>ok</td><td>点击确定时触发</td><td>\`(selected: Option</td></tr><tr><td>cancel</td><td>点击取消时触发</td><td>-</td></tr><tr><td>close</td><td>关闭时触发</td><td>-</td></tr></tbody></table><h2>Method</h2><p>可通过 <code>ref</code> 获取到组件实例，然后调用以下的实例方法，列的索引默认从 0 开始</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>getValues</td><td>获取所有列选中的值</td><td>-</td></tr><tr><td>setValues</td><td>设置所有列选中的值</td><td><code>(values: Option[])</code></td></tr><tr><td>getColumnSelectValue</td><td>获取指定列选中的值</td><td><code>(columnIndex: Number)</code></td></tr><tr><td>setColumnSelectValue</td><td>设置指定列选中的值</td><td><code>(columnIndex: Number, value: Option)</code></td></tr><tr><td>setColumnValues</td><td>设置指定列的所有项(数据源)</td><td><code>(columnIndex: Number, values: Option[], resetOffset: Boolean)</code></td></tr></tbody></table><h4>Column 列 数据结构</h4><p><code>columns</code>是一个数组，单列时，数组的每一项是 <code>Option</code> 类型的对象，如<code>[Option, Option]</code>。多列时，是一个二维数组，如两列的<code>[[Option, Option], [Option, Option]]</code></p><h4>Option 列的项 数据结构</h4><p>列的项是一个对象的结构，默认把这个对象的<code>label</code>属性用于展示，如果需要调整展示的对象字段，可通过<code>value-key</code>设置，</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>列的选项值</td><td><em>string</em></td></tr></tbody></table>`,33),t=[e],u={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(i,b)=>(a(),n("div",p,t))}};export{u as default};
