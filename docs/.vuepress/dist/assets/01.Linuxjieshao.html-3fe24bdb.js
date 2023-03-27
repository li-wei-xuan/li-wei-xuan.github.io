import{_ as e,p as r,q as a,Y as n,s as t,R as d}from"./framework-aa5c4115.js";const i={},s=n(`<h3 id="什么是linux" tabindex="-1"><a class="header-anchor" href="#什么是linux" aria-hidden="true">#</a> 什么是Linux</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多用户，多任务，支持多线程和多CPU的操作系统。

linux的应用领域：一般运行在大型服务器上

linux的核心思想：一切皆为文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录介绍" tabindex="-1"><a class="header-anchor" href="#目录介绍" aria-hidden="true">#</a> 目录介绍</h3><table><thead><tr><th>目录名</th><th>说明</th></tr></thead><tbody><tr><td>/ 根目录</td><td>一般根目录下只存放目录，有且只有一个根目录</td></tr><tr><td>/home</td><td>家目录 系统默认的家目录，新增用户账号时，用户的家目录都存放在此目录下</td></tr><tr><td>/root</td><td>系统管理员root的家目录</td></tr><tr><td>/bin/usr/bin</td><td>可执行二进制文件的目录</td></tr><tr><td>/etc</td><td>系统配置文件存放的目录</td></tr><tr><td>/mnt /media</td><td>光盘默认挂载点</td></tr><tr><td>/tmp</td><td>一般用户或正在执行的程序临时存放文件的目录</td></tr><tr><td>/var</td><td>这个目录中存放着不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下，包括各种日志文件</td></tr></tbody></table><h3 id="root-localhost-的含义" tabindex="-1"><a class="header-anchor" href="#root-localhost-的含义" aria-hidden="true">#</a> [root@localhost ~]# 的含义:</h3><table><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td>@</td><td>@之前的是当前登录的用户</td></tr><tr><td>localhost</td><td>主机名字</td></tr><tr><td>~</td><td>当前所在的位置（所在的目录）</td></tr><tr><td>~</td><td>家目录</td></tr><tr><td>/</td><td>根目录</td></tr><tr><td>#</td><td>用户标识</td></tr><tr><td>#</td><td>超级用户</td></tr><tr><td>$</td><td>普通用户</td></tr></tbody></table><h3 id="命令写法" tabindex="-1"><a class="header-anchor" href="#命令写法" aria-hidden="true">#</a> 命令写法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令名  [选项]  [参数]

- 命令名：相应功能的英文单词或单词的缩写
- 选项：可以用来对命令进行控制，也可以省略，选项不同，命令的结果不同
- 参数：传给命令的参数，可以是0个，也可以一个或多个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>`,9),l=t("div",{class:"custom-container danger"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M10 10l4 4m0-4l-4 4"})])]),t("p",{class:"custom-container-title"},"DANGER"),t("p",null,[d("1.严格区分大小写"),t("br"),d(" 2.有的命令有选项和参数，有的有其一，有的都没有"),t("br"),d(" 3.选项的格式一般是 -字母 -单词 字母"),t("br"),d(" 4.可以加多个选项，多个选项可以合并（例 -a -b 可以合并成-ab）"),t("br"),d(" 5.命令 选项 参数 之间一定要有空格")])],-1),o=[s,l];function c(h,u){return r(),a("div",null,o)}const v=e(i,[["render",c],["__file","01.Linuxjieshao.html.vue"]]);export{v as default};
