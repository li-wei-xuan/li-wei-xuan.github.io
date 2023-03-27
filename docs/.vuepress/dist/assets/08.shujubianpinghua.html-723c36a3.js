import{_ as n,p as s,q as a,w as p,Y as t}from"./framework-aa5c4115.js";const o={},c=t(`<h3 id="array-prototype-flat" tabindex="-1"><a class="header-anchor" href="#array-prototype-flat" aria-hidden="true">#</a> Array.prototype.flat()</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// es6 新增数组方法。Array.prototype.flat()</span>
<span class="token comment">// 缺点：需要计算数组的维度</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">221</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2211</span><span class="token punctuation">,</span> <span class="token number">2212</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">331</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// [1,2,21,22,221,2211,2212,3,31,32,33,331,4,{&#39;name&#39;: &#39;jack&#39;}]</span>
<span class="token comment">// 使用 Infinity 作为深度，展开任意深度的嵌套数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// [1,2,21,22,221,2211,2212,3,31,32,33,331,4,{&#39;name&#39;: &#39;jack&#39;}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组字符串化" tabindex="-1"><a class="header-anchor" href="#数组字符串化" aria-hidden="true">#</a> 数组字符串化</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 缺点：数组内对象无法转换</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">221</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2211</span><span class="token punctuation">,</span> <span class="token number">2212</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">331</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
arr <span class="token operator">+=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// [&#39;1&#39;, &#39;2&#39;, &#39;21&#39;, &#39;22&#39;, &#39;221&#39;, &#39;2211&#39;, &#39;2212&#39;, &#39;3&#39;, &#39;31&#39;, &#39;32&#39;, &#39;33&#39;, &#39;331&#39;, &#39;4&#39;, &#39;[object Object]&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">221</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2211</span><span class="token punctuation">,</span> <span class="token number">2212</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">331</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token keyword">function</span> <span class="token function">reduceDimension</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token function-variable function">toArr</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// instanceof 就是判断一个实例是否属于某种类型</span>
        item <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token function">toArr</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">:</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">toArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reduceDimension</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[1,2,21,22,221,2211,2212,3,31,32,33,331,4,{&#39;name&#39;: &#39;jack&#39;}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reduce-concat-递归" tabindex="-1"><a class="header-anchor" href="#reduce-concat-递归" aria-hidden="true">#</a> reduce + concat + 递归</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">221</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2211</span><span class="token punctuation">,</span> <span class="token number">2212</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">331</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token keyword">function</span> <span class="token function">reduceDimension</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span> <span class="token operator">?</span> prev<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">reduceDimension</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> prev<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reduceDimension</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[1,2,21,22,221,2211,2212,3,31,32,33,331,4,{&#39;name&#39;: &#39;jack&#39;}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function e(u,l){return s(),a("div",null,[p(" https://segmentfault.com/a/1190000038414123 "),c])}const k=n(o,[["render",e],["__file","08.shujubianpinghua.html.vue"]]);export{k as default};
