import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const p={},t=e(`<h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>算术运算符
赋值运算符
字符串运算符
递增递减运算符
逻辑运算符
比较运算符
三元运算符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">+</span> 加法运算 <span class="token variable">$a</span> <span class="token operator">+</span> <span class="token variable">$b</span>
<span class="token operator">-</span> 减法运算 <span class="token variable">$a</span> <span class="token operator">-</span> <span class="token variable">$b</span>
<span class="token operator">*</span> 乘法运算 <span class="token variable">$a</span> <span class="token operator">*</span> <span class="token variable">$b</span>
<span class="token operator">/</span> 除法运算 <span class="token variable">$a</span> <span class="token operator">/</span> <span class="token variable">$b</span>
<span class="token operator">%</span> 去模运算 <span class="token variable">$a</span> <span class="token operator">%</span> <span class="token variable">$b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋值运算" tabindex="-1"><a class="header-anchor" href="#赋值运算" aria-hidden="true">#</a> 赋值运算</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">5</span>      赋值
<span class="token variable">$a</span> <span class="token operator">+=</span> <span class="token number">5</span>     加法赋值    <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">+</span> <span class="token number">5</span>
<span class="token variable">$a</span> <span class="token operator">-=</span> <span class="token number">5</span>     减法运算    <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">-</span> <span class="token number">5</span>
<span class="token variable">$a</span> <span class="token operator">*=</span> <span class="token number">5</span>     乘法运算    <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">*</span> <span class="token number">5</span>
<span class="token variable">$a</span> <span class="token operator">/=</span> <span class="token number">5</span>     除法运算    <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">/</span> <span class="token number">5</span>
<span class="token variable">$a</span> <span class="token operator">.=</span> <span class="token number">5</span>     拼接运算    <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$a</span><span class="token number">.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串运算" tabindex="-1"><a class="header-anchor" href="#字符串运算" aria-hidden="true">#</a> 字符串运算</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$a</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$b</span> <span class="token operator">=</span> <span class="token variable">$a</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39; world&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$c</span> <span class="token operator">.=</span> <span class="token variable">$a</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39; friend&#39;</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello world</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$c</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello friend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递增递减运算符" tabindex="-1"><a class="header-anchor" href="#递增递减运算符" aria-hidden="true">#</a> 递增递减运算符</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">++</span><span class="token variable">$a</span>    先加    <span class="token variable">$a</span>加<span class="token number">1</span>，然后再返回<span class="token variable">$a</span>的值
<span class="token variable">$a</span><span class="token operator">++</span>    后加    先返回<span class="token variable">$a</span>的值，然后<span class="token variable">$a</span>加<span class="token number">1</span>
<span class="token operator">--</span><span class="token variable">$a</span>    先减    <span class="token variable">$a</span>减<span class="token number">1</span>，然后再返回<span class="token variable">$a</span>的值
<span class="token variable">$a</span><span class="token operator">--</span>    后减    先返回<span class="token variable">$a</span>的值，然后<span class="token variable">$a</span>减<span class="token number">1</span>

<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token variable">$b</span> <span class="token operator">=</span> <span class="token variable">$a</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>逻辑操作符常用于控制程序中，<span class="token keyword">if</span>、<span class="token keyword">while</span>、<span class="token keyword">for</span>等
<span class="token operator">&amp;&amp;</span> <span class="token keyword">AND</span> 逻辑与
<span class="token operator">||</span> <span class="token keyword">OR</span>  逻辑或
！ <span class="token constant">NOT</span> 逻辑非
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>比较运算符  返回布尔值 <span class="token constant boolean">TRUE</span> 或 <span class="token constant boolean">FALSE</span>
<span class="token operator">&lt;</span>       大于
<span class="token operator">&gt;</span>       小于
<span class="token operator">&lt;=</span>      大于等于
<span class="token operator">&gt;=</span>      小于等于
<span class="token operator">!=</span>      不等于
<span class="token operator">&lt;</span><span class="token operator">&gt;</span>      不等于
<span class="token operator">==</span>      等于
<span class="token operator">===</span>     全等于<span class="token punctuation">(</span>类型，值全等<span class="token punctuation">)</span>
<span class="token operator">!==</span>     不全等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>语法：  判断 <span class="token operator">?</span>  <span class="token constant boolean">TRUE</span> <span class="token punctuation">:</span> <span class="token class-name type-declaration">FALSE</span>

<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token string single-quoted-string">&#39;yes&#39;</span> <span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;no&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$res</span><span class="token punctuation">;</span> <span class="token comment">// no</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断语句" tabindex="-1"><a class="header-anchor" href="#判断语句" aria-hidden="true">#</a> 判断语句</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1.</span><span class="token keyword">if</span>语句
<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;负数&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token function">esleif</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token variable">$a</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;在 1 至 10 之间&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> esle <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;大于 10&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token number">2.</span><span class="token keyword">switch</span>语句

<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string double-quoted-string">&quot;0&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;零&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string double-quoted-string">&quot;5&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;五&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string double-quoted-string">&quot;10&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;十&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;unknow&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while" aria-hidden="true">#</a> do{}while()</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3 4 5</span>
    <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while(){}</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for(){}</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach(){}</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$list</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;nickname&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;张三&#39;</span>，
    <span class="token string single-quoted-string">&#39;age&#39;</span>   <span class="token operator">=&gt;</span>  <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;sex&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;男&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$list</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;索引名称：&#39;</span><span class="token operator">.</span><span class="token variable">$key</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;----值为：&quot;</span><span class="token operator">.</span><span class="token variable">$item</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="break立即停止循环" tabindex="-1"><a class="header-anchor" href="#break立即停止循环" aria-hidden="true">#</a> break立即停止循环</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="continue退出当前一次循环" tabindex="-1"><a class="header-anchor" href="#continue退出当前一次循环" aria-hidden="true">#</a> continue退出当前一次循环</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),l=[t];function o(i,c){return s(),a("div",null,l)}const u=n(p,[["render",o],["__file","02.caozuofu_liuchengkongzhi.html.vue"]]);export{u as default};
