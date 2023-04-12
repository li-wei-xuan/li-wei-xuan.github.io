import{_ as s,p as n,q as a,Y as e}from"./framework-aa5c4115.js";const t={},i=e(`<h3 id="gitee镜像仓库" tabindex="-1"><a class="header-anchor" href="#gitee镜像仓库" aria-hidden="true">#</a> gitee镜像仓库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 用gitee镜像仓库实现github的自动拉取，加快github的拉取速度 --&gt;

镜像仓库 -&gt; 登录github -&gt; 获取私人令牌(建议设置永久) -&gt; gitee添加pull和push -&gt; 实现自动同步
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webhook与gitee" tabindex="-1"><a class="header-anchor" href="#webhook与gitee" aria-hidden="true">#</a> webhook与gitee</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 使用宝塔webhook来自动更新gitee仓库代码 --&gt;
&lt;!-- 宝塔webhook设置 --&gt;
  添加hook，设置名称，脚本，生成密钥，地址

&lt;!-- gitee设置 --&gt;
  仓库管理webhoks -&gt; 填写密钥和地址，测试连通性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
<span class="token comment">#输出当前时间</span>
<span class="token function">date</span> <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token string">&#39;0 days ago&#39;</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Start&quot;</span>
<span class="token comment">#判断宝塔WebHook参数是否存在</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">then</span>
          <span class="token builtin class-name">echo</span> <span class="token string">&quot;param参数错误&quot;</span>
          <span class="token builtin class-name">echo</span> <span class="token string">&quot;End&quot;</span>
          <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token comment">#git项目路径</span>
<span class="token assign-left variable">gitPath</span><span class="token operator">=</span><span class="token string">&quot;/www/wwwroot/<span class="token variable">$1</span>&quot;</span>
<span class="token comment">#git网址 码云仓库地址</span>
<span class="token assign-left variable">gitHttp</span><span class="token operator">=</span><span class="token string">&quot;https://gitee.com/yourname/<span class="token variable">$1</span>.git&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Web站点路径：<span class="token variable">$gitPath</span>&quot;</span>
<span class="token comment">#判断项目路径是否存在</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$gitPath</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">cd</span> <span class="token variable">$gitPath</span>
        <span class="token comment">#判断是否存在git目录</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;.git&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;在该目录下克隆 git&quot;</span>
                <span class="token function">sudo</span> <span class="token function">git</span> clone <span class="token variable">$gitHttp</span> gittemp
                <span class="token function">sudo</span> <span class="token function">mv</span> gittemp/.git <span class="token builtin class-name">.</span>
                <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> gittemp
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;拉取最新的项目文件&quot;</span>
        <span class="token comment">#sudo git reset --hard origin/master</span>
        <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/master
        <span class="token function">sudo</span> <span class="token function">git</span> pull        
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;设置目录权限&quot;</span>
        <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> www:www <span class="token variable">$gitPath</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;End&quot;</span>
        <span class="token builtin class-name">exit</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;该项目路径不存在&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;End&quot;</span>
        <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[i];function o(c,p){return n(),a("div",null,l)}const r=s(t,[["render",o],["__file","webhook.html.vue"]]);export{r as default};
