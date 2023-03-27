import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const e={},p=t(`<h3 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
它是 JavaScript语言的第七种数据类型，是一种类似于字符串的数据类型。

Symbol 特点
  1) Symbol 的值是唯一的，用来解决命名冲突的问题
  2) Symbol 值不能与其他数据进行运算
  3) Symbol 定义的对象属性不能使用 for…in 循环遍历，但是可以使用Reflect.ownKeys来获取对象的所有键名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol创建" tabindex="-1"><a class="header-anchor" href="#symbol创建" aria-hidden="true">#</a> Symbol创建</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//普通创建</span>
  <span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token keyword">typeof</span> s1<span class="token punctuation">)</span> <span class="token comment">// Symbol() &#39;symbol&#39;</span>

  <span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>s2<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// {s2: Symbol(test)}</span>

  <span class="token comment">//Symbol.for 创建</span>
  <span class="token keyword">let</span> s3 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>s3<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// {s3: Symbol(test)}</span>

  <span class="token comment">// 相同参数 Symbol() 返回的值不相等</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> s2 <span class="token operator">===</span> s3<span class="token punctuation">)</span>  <span class="token comment">// false</span>

  <span class="token comment">// Symbol.for() 全局搜索指定key的Symbol，找到的话，就返回该Symbol，找不到，就新建一个</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

  <span class="token comment">// Symbol.for() 定义才能返回值，否则 undefined</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// test</span>

  <span class="token comment">//不能与其他数据进行运算</span>
  <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// TypeError</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// TypeError</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s <span class="token operator">+</span> s<span class="token punctuation">)</span> <span class="token comment">// TypeError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol作为属性名" tabindex="-1"><a class="header-anchor" href="#symbol作为属性名" aria-hidden="true">#</a> Symbol作为属性名</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 第一种写法</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  a<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// 第二种写法</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 第三种写法</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> mySymbol<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 以上写法都得到同样结果</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Hello!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol实际使用" tabindex="-1"><a class="header-anchor" href="#symbol实际使用" aria-hidden="true">#</a> Symbol实际使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 定义一个对象</span>
  <span class="token keyword">let</span> symbol<span class="token operator">=</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;address&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以加参数 指定属性名</span>
  <span class="token keyword">let</span> obj<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 假如我们要向对象里额外加个属性</span>
  <span class="token comment">// obj.address=&#39;非洲&#39; // 以前的写法，不过假如属性很多的时候，可能会出现属性重复</span>

  obj<span class="token punctuation">[</span>symbol<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;非洲&#39;</span> <span class="token comment">// 这样能保证属性不重复</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// name: &#39;jack&#39;, age: 10, Symbol(address): &#39;非洲&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","09.Symbol.html.vue"]]);export{r as default};
