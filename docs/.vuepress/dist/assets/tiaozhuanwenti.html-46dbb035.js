import{_ as n,p as a,q as s,Y as t}from"./framework-aa5c4115.js";const e={},p=t(`<h2 id="跳转方式" tabindex="-1"><a class="header-anchor" href="#跳转方式" aria-hidden="true">#</a> 跳转方式</h2><h3 id="html跳转" tabindex="-1"><a class="header-anchor" href="#html跳转" aria-hidden="true">#</a> html跳转</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="meta标签页面跳转" tabindex="-1"><a class="header-anchor" href="#meta标签页面跳转" aria-hidden="true">#</a> meta标签页面跳转</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refresh<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5;url=https://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="javascript跳转" tabindex="-1"><a class="header-anchor" href="#javascript跳转" aria-hidden="true">#</a> JavaScript跳转</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 第一种</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 第二种</span>
    window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span>

<span class="token comment">// 第三种</span>
    document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span>

<span class="token comment">// 第四种</span>
    top<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span>

<span class="token comment">// 第五种</span>
    window<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 第六种</span>
    self<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊情况" tabindex="-1"><a class="header-anchor" href="#特殊情况" aria-hidden="true">#</a> 特殊情况</h2><h3 id="跳转页面后-出现403" tabindex="-1"><a class="header-anchor" href="#跳转页面后-出现403" aria-hidden="true">#</a> 跳转页面后，出现403</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 解决方法一 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">referrerpolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-referrer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 解决方法二 --&gt;</span>
    ①meta中添加
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>referrer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-referrer<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    ②调用方法
      window.open(&#39;http://www.baidu.com&#39;,&#39;_blank&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[p];function o(l,i){return a(),s("div",null,c)}const r=n(e,[["render",o],["__file","tiaozhuanwenti.html.vue"]]);export{r as default};
