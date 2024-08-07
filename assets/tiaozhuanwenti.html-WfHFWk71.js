import{_ as a,o as n,c as s,a as t}from"./app-EaupiRXX.js";const e={},l=t(`<h2 id="跳转方式" tabindex="-1"><a class="header-anchor" href="#跳转方式"><span>跳转方式</span></a></h2><h3 id="html跳转" tabindex="-1"><a class="header-anchor" href="#html跳转"><span>html跳转</span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="meta标签页面跳转" tabindex="-1"><a class="header-anchor" href="#meta标签页面跳转"><span>meta标签页面跳转</span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refresh<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5;url=https://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="javascript跳转" tabindex="-1"><a class="header-anchor" href="#javascript跳转"><span>JavaScript跳转</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 第一种</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊情况" tabindex="-1"><a class="header-anchor" href="#特殊情况"><span>特殊情况</span></a></h2><h3 id="跳转页面后-出现403" tabindex="-1"><a class="header-anchor" href="#跳转页面后-出现403"><span>跳转页面后，出现403</span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 解决方法一 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">referrerpolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-referrer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 解决方法二 --&gt;</span>
    ①meta中添加
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>referrer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-referrer<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    ②调用方法
      window.open(&#39;http://www.baidu.com&#39;,&#39;_blank&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[l];function c(i,o){return n(),s("div",null,p)}const r=a(e,[["render",c],["__file","tiaozhuanwenti.html.vue"]]),d=JSON.parse('{"path":"/blogs/other/tiaozhuanwenti.html","title":"跳转问题","lang":"zh-CN","frontmatter":{"title":"跳转问题","date":"2022-11-25T00:00:00.000Z","tags":["JavaScript","html"],"categories":["other"]},"headers":[{"level":2,"title":"跳转方式","slug":"跳转方式","link":"#跳转方式","children":[{"level":3,"title":"html跳转","slug":"html跳转","link":"#html跳转","children":[]},{"level":3,"title":"meta标签页面跳转","slug":"meta标签页面跳转","link":"#meta标签页面跳转","children":[]},{"level":3,"title":"JavaScript跳转","slug":"javascript跳转","link":"#javascript跳转","children":[]}]},{"level":2,"title":"特殊情况","slug":"特殊情况","link":"#特殊情况","children":[{"level":3,"title":"跳转页面后，出现403","slug":"跳转页面后-出现403","link":"#跳转页面后-出现403","children":[]}]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"blogs/other/跳转问题.md","readingTime":{"minutes":0.47,"words":141}}');export{r as comp,d as data};
