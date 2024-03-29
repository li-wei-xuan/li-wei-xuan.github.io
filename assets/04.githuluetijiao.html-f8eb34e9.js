import{_ as i,p as e,q as n,w as d,Y as a}from"./framework-aa5c4115.js";const s={},l=a(`<h2 id="git忽略文件提交的三种方式" tabindex="-1"><a class="header-anchor" href="#git忽略文件提交的三种方式" aria-hidden="true">#</a> git忽略文件提交的三种方式</h2><h3 id="gitignore文件" tabindex="-1"><a class="header-anchor" href="#gitignore文件" aria-hidden="true">#</a> .gitignore文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在项目.gitignore文件中，设置对应的忽略规则，来管理项目的提交行为

如：
  .DS_Store
  node_modules/
  dist/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在git项目的设置中指定排除文件" tabindex="-1"><a class="header-anchor" href="#在git项目的设置中指定排除文件" aria-hidden="true">#</a> 在git项目的设置中指定排除文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这种方式只是临时指定该项目的行为，需要编辑当前项目下的 .git/info/exclude 文件，然后将需要忽略提交的文件写入其中。

需要注意的是，这种方式指定的忽略文件的根目录是项目根目录。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义git全局的-gitignore-文件" tabindex="-1"><a class="header-anchor" href="#定义git全局的-gitignore-文件" aria-hidden="true">#</a> 定义Git全局的 .gitignore 文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>除了可以在项目中定义 .gitignore 文件外，还可以设置全局的 git .gitignore 文件来管理所有Git项目的行为。
这种方式在不同的项目开发者之间是不共享的，是属于项目之上Git应用级别的行为。

这种方式也需要创建相应的 .gitignore 文件，可以放在任意位置。然后在使用以下命令配置Git：
  git config --global core.excludesfile ~/.gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore规则" tabindex="-1"><a class="header-anchor" href="#gitignore规则" aria-hidden="true">#</a> gitignore规则</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>空行或者以#开头的行是不生效的
  # *.a

忽略所有的.a格式的文件
  *.a

但是要追踪lib.a，即lib.a不会被忽略，尽管上面已经忽略了所有的.a文件，这就是!的作用
  !lib.a

只忽略当前文件夹下面的TODO文件，而不会递归子文件夹
  /TODO

忽略所有build文件夹下面的文件和文件夹
  build/

忽略doc文件夹下面的.txt文件，但是不会递归子文件夹下面的.txt
  doc/*.txt

递归忽略doc文件夹下面的所有的.pdf文件
  doc/**/*.pdf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore规则不生效" tabindex="-1"><a class="header-anchor" href="#gitignore规则不生效" aria-hidden="true">#</a> gitignore规则不生效</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.gitignore文件只能忽略没有被track的文件，如果文件已被纳入版本管理中，则修改.gitignore是无效的

解决方法：
  git rm -r --cached . //删除本地缓存
  git add .  //提交
  git commit -m &#39;update .gitignore&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function r(t,c){return e(),n("div",null,[d(" https://www.runoob.com/git/git-basic-operations.html "),l])}const u=i(s,[["render",r],["__file","04.githuluetijiao.html.vue"]]);export{u as default};
