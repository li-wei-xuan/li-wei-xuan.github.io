import{_ as n,o as s,c as a,a as e}from"./app-EaupiRXX.js";const t={},i=e(`<h3 id="promise" tabindex="-1"><a class="header-anchor" href="#promise"><span>Promise</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，
当它执行完成后，其状态会变成 resolved 或者rejected

Promise 异步操作有三种状态：
	pending（进行中）
	resolve（已成功）
	reject（已失败）

除了异步操作的结果，任何其他操作都无法改变这个状态

当状态一旦改变后，那么结果就确定是成功还是失败了，所以状态就不会再次改变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="then方法" tabindex="-1"><a class="header-anchor" href="#then方法"><span>then方法</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  then 方法接收两个函数作为参数
    第一个参数是 Promise 执行成功时的回调
    第二个参数是 Promise 执行失败时的回调
  两个函数只会有一个被调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="async修饰符" tabindex="-1"><a class="header-anchor" href="#async修饰符"><span>async修饰符</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>异步请求操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="await修饰符" tabindex="-1"><a class="header-anchor" href="#await修饰符"><span>await修饰符</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token comment">//先让函数变成异步函数</span>
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//给一个状态用于下面的判断</span>
      <span class="token keyword">var</span> IsLogin <span class="token operator">=</span> <span class="token boolean">true</span>

      <span class="token comment">//创建异步的状态对象</span>
      <span class="token keyword">var</span> axios <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>IsLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">//设置异步为成功状态</span>
              <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;登录成功&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token comment">//设置异步为失败状态</span>
              <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;登录失败&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">//异步的方式 不需要等待 会继续往后执行</span>
      <span class="token comment">// axios.then(</span>
      <span class="token comment">//     (success) =&gt; console.log(success),</span>
      <span class="token comment">//     (error) =&gt; console.log(error)</span>
      <span class="token comment">// )</span>

      <span class="token comment">//同步的方式  必须要等await拿到结果之后，才可以往后走</span>
      <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[i];function c(p,o){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","08.Promise-Async-Await.html.vue"]]),u=JSON.parse('{"path":"/docs/ECMAScript/08.Promise-Async-Await.html","title":"Promise-Async-Await","lang":"zh-CN","frontmatter":{"title":"Promise-Async-Await","date":"2022-12-12T00:00:00.000Z","tags":["ECMASript"]},"headers":[{"level":3,"title":"Promise","slug":"promise","link":"#promise","children":[]},{"level":3,"title":"then方法","slug":"then方法","link":"#then方法","children":[]},{"level":3,"title":"async修饰符","slug":"async修饰符","link":"#async修饰符","children":[]},{"level":3,"title":"await修饰符","slug":"await修饰符","link":"#await修饰符","children":[]}],"git":{"createdTime":1720420551000,"updatedTime":1720420551000,"contributors":[{"name":"lwj","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/ECMAScript/08.Promise-Async-Await.md","readingTime":{"minutes":1.18,"words":355}}');export{d as comp,u as data};
