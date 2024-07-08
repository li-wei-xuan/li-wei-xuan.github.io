import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const e={},p=t(`<h2 id="date-对象属性" tabindex="-1"><a class="header-anchor" href="#date-对象属性"><span>Date 对象属性</span></a></h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>constructor</td><td>返回对创建此对象的 Date 函数的引用。</td></tr><tr><td>prototype</td><td>使您有能力向对象添加属性和方法。</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token comment">// 返回创建Date对象的函数原型：</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span> <span class="token comment">// ƒ Date() { [native code] }</span>

  <span class="token comment">// 创建一个新的日期对象方法：</span>
  <span class="token class-name">Date</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myMet</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;January&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;February&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;March&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;April&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;May&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;June&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;July&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;August&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;Spetember&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;October&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;November&quot;</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myProp <span class="token operator">=</span> <span class="token string">&quot;December&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 创建一个 Date 对象,调用对象的 myMet 方法:</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  d<span class="token punctuation">.</span><span class="token function">myMet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> monthname <span class="token operator">=</span> d<span class="token punctuation">.</span>myProp

  <span class="token comment">// monthname 输出结果：</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>monthname<span class="token punctuation">)</span> <span class="token comment">// January</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="math-对象方法" tabindex="-1"><a class="header-anchor" href="#math-对象方法"><span>Math 对象方法</span></a></h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>getDate()</td><td>从 Date 对象返回一个月中的某一天 (1 ~ 31)。</td></tr><tr><td>getDay()</td><td>从 Date 对象返回一周中的某一天 (0 ~ 6)。</td></tr><tr><td>getFullYear()</td><td>从 Date 对象以四位数字返回年份。</td></tr><tr><td>getHours()</td><td>返回 Date 对象的小时 (0 ~ 23)。</td></tr><tr><td>getMilliseconds()</td><td>返回 Date 对象的毫秒(0 ~ 999)。</td></tr><tr><td>getMinutes()</td><td>返回 Date 对象的分钟 (0 ~ 59)。</td></tr><tr><td>getMonth()</td><td>从 Date 对象返回月份 (0 ~ 11)。</td></tr><tr><td>getSeconds()</td><td>返回 Date 对象的秒数 (0 ~ 59)。</td></tr><tr><td>getTime()</td><td>返回 1970 年 1 月 1 日至今的毫秒数。</td></tr><tr><td>getTimezoneOffset()</td><td>返回本地时间与格林威治标准时间 (GMT) 的分钟差。</td></tr><tr><td>getUTCDate()</td><td>根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。</td></tr><tr><td>getUTCDay()</td><td>根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。</td></tr><tr><td>getUTCFullYear()</td><td>根据世界时从 Date 对象返回四位数的年份。</td></tr><tr><td>getUTCHours()</td><td>根据世界时返回 Date 对象的小时 (0 ~ 23)。</td></tr><tr><td>getUTCMilliseconds()</td><td>根据世界时返回 Date 对象的毫秒(0 ~ 999)。</td></tr><tr><td>getUTCMinutes()</td><td>根据世界时返回 Date 对象的分钟 (0 ~ 59)。</td></tr><tr><td>getUTCMonth()</td><td>根据世界时从 Date 对象返回月份 (0 ~ 11)。</td></tr><tr><td>getUTCSeconds()</td><td>根据世界时返回 Date 对象的秒钟 (0 ~ 59)。</td></tr><tr><td>parse()</td><td>返回1970年1月1日午夜到指定日期（字符串）的毫秒数。</td></tr></tbody></table><h3 id="getdate" tabindex="-1"><a class="header-anchor" href="#getdate"><span>getDate()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 返回月份的某一天：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getday" tabindex="-1"><a class="header-anchor" href="#getday"><span>getDay()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 返回一周的某一天数字</span>
<span class="token comment">// 星期天为 0, 星期一为 1, 以此类推。</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getfullyear" tabindex="-1"><a class="header-anchor" href="#getfullyear"><span>getFullYear()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 返回一个表示年份的 4 位数字：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2023</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gethours" tabindex="-1"><a class="header-anchor" href="#gethours"><span>getHours()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 根据本地时间返回时间的小时字段：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getmilliseconds" tabindex="-1"><a class="header-anchor" href="#getmilliseconds"><span>getMilliseconds()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 根据当地时间返回时间的毫秒:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 292</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getminutes" tabindex="-1"><a class="header-anchor" href="#getminutes"><span>getMinutes()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 依据当地时间返回时间的分钟数：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 26</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getmonth" tabindex="-1"><a class="header-anchor" href="#getmonth"><span>getMonth()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 返回表示月份的数字。返回值是 0（一月） 到 11（十二月） 之间的一个整数。</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getseconds" tabindex="-1"><a class="header-anchor" href="#getseconds"><span>getSeconds()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 可返回时间的秒。返回值是 0 ~ 59 之间的一个整数。</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gettimezoneoffset" tabindex="-1"><a class="header-anchor" href="#gettimezoneoffset"><span>getTimezoneOffset()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 可返回格林威治时间和本地时间之间的时差，以分钟为单位</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTimezoneOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -480</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getutcdate" tabindex="-1"><a class="header-anchor" href="#getutcdate"><span>getUTCDate()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 根据世界时返回一个月 (UTC) 中的某一天:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUTCDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getutcday" tabindex="-1"><a class="header-anchor" href="#getutcday"><span>getUTCDay()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 返回表示星期的一天的一个数字：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUTCDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getutcfullyear" tabindex="-1"><a class="header-anchor" href="#getutcfullyear"><span>getUTCFullYear()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 根据世界时 (UTC) 返回表年份的四位数字：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUTCFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2023</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getutchours" tabindex="-1"><a class="header-anchor" href="#getutchours"><span>getUTCHours()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 根据世界时 (UTC) 返回时间的小时:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUTCHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getutcmilliseconds" tabindex="-1"><a class="header-anchor" href="#getutcmilliseconds"><span>getUTCMilliseconds()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 根据世界时 (UTC) 返回时间的毫秒(0~999):</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUTCMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 292</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getutcminutes" tabindex="-1"><a class="header-anchor" href="#getutcminutes"><span>getUTCMinutes()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 可根据世界时 (UTC) 返回时间的分钟字段（0~59）</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUTCMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 26</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getutcmonth" tabindex="-1"><a class="header-anchor" href="#getutcmonth"><span>getUTCMonth()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 按照世界时 UTC,返回月份：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUTCMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getutcseconds" tabindex="-1"><a class="header-anchor" href="#getutcseconds"><span>getUTCSeconds()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 根据世界时返回时间的秒数：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUTCSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse"><span>parse()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 返回 1970/01/01 至 2012/3/21 之间的毫秒数：</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;March 21, 2012&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1332259200000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,41),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","11.Dateduixiang.html.vue"]]),r=JSON.parse('{"path":"/docs/JavaScript/11.Dateduixiang.html","title":"Date对象","lang":"zh-CN","frontmatter":{"title":"Date对象","date":"2023-01-14T00:00:00.000Z","tags":["JavaScript"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"Date 对象属性","slug":"date-对象属性","link":"#date-对象属性","children":[]},{"level":2,"title":"Math 对象方法","slug":"math-对象方法","link":"#math-对象方法","children":[{"level":3,"title":"getDate()","slug":"getdate","link":"#getdate","children":[]},{"level":3,"title":"getDay()","slug":"getday","link":"#getday","children":[]},{"level":3,"title":"getFullYear()","slug":"getfullyear","link":"#getfullyear","children":[]},{"level":3,"title":"getHours()","slug":"gethours","link":"#gethours","children":[]},{"level":3,"title":"getMilliseconds()","slug":"getmilliseconds","link":"#getmilliseconds","children":[]},{"level":3,"title":"getMinutes()","slug":"getminutes","link":"#getminutes","children":[]},{"level":3,"title":"getMonth()","slug":"getmonth","link":"#getmonth","children":[]},{"level":3,"title":"getSeconds()","slug":"getseconds","link":"#getseconds","children":[]},{"level":3,"title":"getTimezoneOffset()","slug":"gettimezoneoffset","link":"#gettimezoneoffset","children":[]},{"level":3,"title":"getUTCDate()","slug":"getutcdate","link":"#getutcdate","children":[]},{"level":3,"title":"getUTCDay()","slug":"getutcday","link":"#getutcday","children":[]},{"level":3,"title":"getUTCFullYear()","slug":"getutcfullyear","link":"#getutcfullyear","children":[]},{"level":3,"title":"getUTCHours()","slug":"getutchours","link":"#getutchours","children":[]},{"level":3,"title":"getUTCMilliseconds()","slug":"getutcmilliseconds","link":"#getutcmilliseconds","children":[]},{"level":3,"title":"getUTCMinutes()","slug":"getutcminutes","link":"#getutcminutes","children":[]},{"level":3,"title":"getUTCMonth()","slug":"getutcmonth","link":"#getutcmonth","children":[]},{"level":3,"title":"getUTCSeconds()","slug":"getutcseconds","link":"#getutcseconds","children":[]},{"level":3,"title":"parse()","slug":"parse","link":"#parse","children":[]}]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/JavaScript/11.Date对象.md","readingTime":{"minutes":3.13,"words":940}}');export{d as comp,r as data};