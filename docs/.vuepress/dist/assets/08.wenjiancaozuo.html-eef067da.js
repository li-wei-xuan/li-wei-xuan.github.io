import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const e={},p=t(`<h3 id="文件操作内容" tabindex="-1"><a class="header-anchor" href="#文件操作内容" aria-hidden="true">#</a> 文件操作内容</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// file_put_contents 文件写入，如果不存在会自动创建</span>
<span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;demo.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;写入文件的内容的&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// FILE_APPEND 追加模式</span>
<span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;demo.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;写入文件的内容的&#39;</span><span class="token punctuation">,</span> <span class="token constant">FILE_APPEND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// file_get_contents 读取文件内容</span>
<span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;demo.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制-重命名-移动-删除文件" tabindex="-1"><a class="header-anchor" href="#复制-重命名-移动-删除文件" aria-hidden="true">#</a> 复制/重命名/移动/删除文件</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// copy 文件复制</span>
<span class="token function">copy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;test2.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// rename 重命名 移动</span>
<span class="token comment">//重命名</span>
<span class="token function">rename</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;demo.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">//移动</span>
<span class="token function">rename</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.txt&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;./path/test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">// unlink 删除文件</span>
<span class="token function">unlink</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件信息获取" tabindex="-1"><a class="header-anchor" href="#文件信息获取" aria-hidden="true">#</a> 文件信息获取</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// filesize 获取文件大小</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">filesize</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// filectime 文件创建时间</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">filectime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;demo.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// file_exists 判断文件是否存在</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// is_file 判断是否是文件</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">is_file</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// is_dir 判断是否是文件夹</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">is_dir</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录操作" tabindex="-1"><a class="header-anchor" href="#目录操作" aria-hidden="true">#</a> 目录操作</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// scandir 读取目录</span>
<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token function">scandir</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;./demo/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// mkdir 创建目录 true 递归创建目录</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo/a/b/c/d&#39;</span><span class="token punctuation">,</span> <span class="token number">0777</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// rmdir 删除为空目录</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">rmdir</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径信息获取" tabindex="-1"><a class="header-anchor" href="#路径信息获取" aria-hidden="true">#</a> 路径信息获取</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// basename 返回路径中的文件名部分</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo/index.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// dirname 返回路径中的目录名称部分</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">dirname</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo/index.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// pathinfo 返回 目录名，文件名，扩展名信息</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./demo/index.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="权限操作" tabindex="-1"><a class="header-anchor" href="#权限操作" aria-hidden="true">#</a> 权限操作</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// chmod 修改权限</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">chmod</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;demo.txt&#39;</span><span class="token punctuation">,</span> <span class="token number">0777</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// chown 修改文件所属用户组</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">chown</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;demo.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;www&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","08.wenjiancaozuo.html.vue"]]);export{d as default};
