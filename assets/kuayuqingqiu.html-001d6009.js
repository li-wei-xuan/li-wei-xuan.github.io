import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const t={},i=e(`<h3 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域" aria-hidden="true">#</a> 什么是跨域</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当协议、域名、端口三者，任意一个与当前URL不同，即为跨域。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="同源限制" tabindex="-1"><a class="header-anchor" href="#同源限制" aria-hidden="true">#</a> 同源限制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>同源策略
  网页地址：http://www.baidu.com
  异步请求地址：http://www.baidu.com/api.php

非同源策略
  网页地址：http://www.baidu.com
  异步请求地址：http://www.taobao.com/api.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsonp前端跨域" tabindex="-1"><a class="header-anchor" href="#jsonp前端跨域" aria-hidden="true">#</a> JSONP前端跨域</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  JSONP就是用来解决跨域请求问题的

  ajax请求受同源策略影响，不允许进行跨域请求
  而script标签src属性中的链接却可以访问跨域的js脚本
  利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码
  在src中进行了调用，这样实现了跨域
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="demo-html" tabindex="-1"><a class="header-anchor" href="#demo-html" aria-hidden="true">#</a> demo.html</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://www.demo.com/api.php?username=demo&amp;password=123&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;jsonp&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">jsonp</span><span class="token operator">:</span> <span class="token string">&quot;callback&quot;</span><span class="token punctuation">,</span> <span class="token comment">//请求php的参数名</span>
      <span class="token literal-property property">jsonpCallback</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span><span class="token comment">//要执行的回调函数</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="api-php" tabindex="-1"><a class="header-anchor" href="#api-php" aria-hidden="true">#</a> api.php</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    	<span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;age&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token variable">$json</span> <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$callback</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;callback&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token variable">$callback</span></span>(<span class="token interpolation"><span class="token variable">$json</span></span>)&quot;</span><span class="token punctuation">;</span>   <span class="token comment">//success(json)</span>
    <span class="token keyword">exit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cors后端跨域" tabindex="-1"><a class="header-anchor" href="#cors后端跨域" aria-hidden="true">#</a> CORS后端跨域</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>跨域资源共享（<span class="token constant">CORS</span>）是一种网络浏览器的技术规范，它为Web服务器定义了一种方式，允许网页从不同的域名访问其资源
<span class="token constant">CORS</span>就是为了让<span class="token constant">AJAX</span>可以实现可控的跨域访问而生的

只需要在后台中加上响应头来允许域请求
在被请求的Response header中加入以下设置，就可以实现跨域访问了

<span class="token comment">//指定允许其他域名访问</span>
<span class="token string single-quoted-string">&#39;Access-Control-Allow-Origin:*&#39;</span><span class="token comment">//或指定域</span>
<span class="token comment">//响应类型</span>
<span class="token string single-quoted-string">&#39;Access-Control-Allow-Methods:GET,POST&#39;</span>
<span class="token comment">//响应头设置</span>
<span class="token string single-quoted-string">&#39;Access-Control-Allow-Headers:x-requested-with,content-type&#39;</span>


以<span class="token constant">PHP</span>为例 设置跨域请求头
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type: text/html;charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Access-Control-Allow-Origin:*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// *代表允许任何网址请求</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 允许请求的类型</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Access-Control-Allow-Credentials: true&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置是否允许发送 cookies</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Access-Control-Allow-Headers: Content-Type,Content-Length,Accept-Encoding,X-Requested-with, Origin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置允许自定义请求头的字段</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cors与jsonp相比" tabindex="-1"><a class="header-anchor" href="#cors与jsonp相比" aria-hidden="true">#</a> CORS与JSONP相比</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求
	使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理
	JSONP主要被老的浏览器支持，但它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[i];function l(c,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","kuayuqingqiu.html.vue"]]);export{d as default};
