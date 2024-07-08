import{_ as t,o as e,c as d,a}from"./app-EaupiRXX.js";const i={},n=a(`<h3 id="三种模式" tabindex="-1"><a class="header-anchor" href="#三种模式"><span>三种模式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>基本上 vi/vim 共分为三种模式，分别是
    - 命令模式（Command mode）
    - 输入模式（Insert mode）
    - 底线命令模式（Last line mode）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式"><span>命令模式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>用户刚刚启动 vi/vim，便进入了命令模式。
此状态下敲击键盘动作会被Vim识别为命令，而非输入字符。
比如我们此时按下i，并不会输入一个字符，i被当作了一个命令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用按钮" tabindex="-1"><a class="header-anchor" href="#常用按钮"><span>常用按钮</span></a></h4><table><thead><tr><th>输入</th><th>作用</th></tr></thead><tbody><tr><td>i</td><td>切换到输入模式，以输入字符。</td></tr><tr><td>x</td><td>删除当前光标所在处的字符。</td></tr><tr><td>：</td><td>切换到底线命令模式，以在最底一行输入命令。</td></tr></tbody></table><h3 id="输入模式" tabindex="-1"><a class="header-anchor" href="#输入模式"><span>输入模式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在命令模式下按下 i 就进入了输入模式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="常用按钮-1" tabindex="-1"><a class="header-anchor" href="#常用按钮-1"><span>常用按钮</span></a></h4><table><thead><tr><th>输入</th><th>作用</th></tr></thead><tbody><tr><td>字符按键以及Shift组合</td><td>输入字符</td></tr><tr><td>ENTER</td><td>回车键，换行</td></tr><tr><td>BACK SPACE</td><td>退格键，删除光标前一个字符</td></tr><tr><td>DEL</td><td>删除键，删除光标后一个字符</td></tr><tr><td>方向键</td><td>在文本中移动光标</td></tr><tr><td>HOME/END</td><td>移动光标到行首/行尾</td></tr><tr><td>Page Up/Page Down</td><td>上/下翻页</td></tr><tr><td>Insert</td><td>切换光标为输入/替换模式，光标将变成竖线/下划线</td></tr><tr><td>ESC</td><td>退出输入模式，切换到命令模式</td></tr></tbody></table><h3 id="底线命令模式" tabindex="-1"><a class="header-anchor" href="#底线命令模式"><span>底线命令模式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在命令模式下按下:（英文冒号）就进入了底线命令模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h4><table><thead><tr><th>输入</th><th>作用</th></tr></thead><tbody><tr><td>q</td><td>退出程序</td></tr><tr><td>w</td><td>保存文件</td></tr><tr><td>ESC键</td><td>退出底线命令模式</td></tr></tbody></table>`,14),r=[n];function s(l,h){return e(),d("div",null,r)}const o=t(i,[["render",s],["__file","04.vi-vimgongzuomoshi.html.vue"]]),m=JSON.parse('{"path":"/docs/Linux/04.vi-vimgongzuomoshi.html","title":"vi-vim工作模式","lang":"zh-CN","frontmatter":{"title":"vi-vim工作模式","date":"2023-02-14T00:00:00.000Z","tags":["Linux"]},"headers":[{"level":3,"title":"三种模式","slug":"三种模式","link":"#三种模式","children":[]},{"level":3,"title":"命令模式","slug":"命令模式","link":"#命令模式","children":[]},{"level":3,"title":"输入模式","slug":"输入模式","link":"#输入模式","children":[]},{"level":3,"title":"底线命令模式","slug":"底线命令模式","link":"#底线命令模式","children":[]}],"git":{"createdTime":1680588280000,"updatedTime":1680588280000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/Linux/04.vi-vim工作模式.md","readingTime":{"minutes":1.25,"words":374}}');export{o as comp,m as data};