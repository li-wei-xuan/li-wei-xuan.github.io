import{_ as t,p as i,q as l,Y as n,s as e,R as d}from"./framework-aa5c4115.js";const s={},r=n(`<h2 id="css长度单位" tabindex="-1"><a class="header-anchor" href="#css长度单位" aria-hidden="true">#</a> CSS长度单位</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   1. px ：像素。
   2. em ：相对元素 font-size 的倍数。
   3. rem ：相对根字体大小，html标签就是根。
   4. % ：相对父元素计算。

注意： CSS 中设置长度，必须加单位，否则样式无效！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元素的显示模式" tabindex="-1"><a class="header-anchor" href="#元素的显示模式" aria-hidden="true">#</a> 元素的显示模式</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>块元素（block） 又称：块级元素

特点：
   1. 在页面中独占一行，不会与任何元素共用一行，是从上到下排列的。
   2. 默认宽度：撑满父元素。 
   3. 默认高度：由内容撑开。
   4. 可以通过 CSS 设置宽高。

行内元素（inline）又称：内联元素
<span class="token property">特点</span><span class="token punctuation">:</span> 
   1. 在页面中不独占一行，一行中不能容纳下的行内元素，会在下一行继续从左到右排列。
   2. 默认宽度：由内容撑开。
   3. 默认高度：由内容撑开。
   4. 无法通过 CSS 设置宽高。

行内块元素（inline-block）又称：内联块元素
特点：
   1. 在页面中不独占一行，一行中不能容纳下的行内元素，会在下一行继续从左到右排
   列。
   2. 默认宽度：由内容撑开。
   3. 默认高度：由内容撑开。
   4. 可以通过 CSS 设置宽高。

注意：
   元素早期只分为：行内元素、块级元素，区分条件也只有一条：<span class="token string">&quot;是否独占一行&quot;</span>，
   如果按照这种分类方式，行内块元素应该算作行内元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结各元素的显示模式" tabindex="-1"><a class="header-anchor" href="#总结各元素的显示模式" aria-hidden="true">#</a> 总结各元素的显示模式</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>块元素（block） 
   1. 主体结构标签： &lt;html&gt; 、 &lt;body&gt; 
   2. 排版标签： &lt;h1&gt; ~ &lt;h6&gt; 、 &lt;hr&gt; 、 &lt;p&gt; 、 &lt;pre&gt; 、 &lt;div&gt; 
   3. 列表标签： &lt;ul&gt; 、 &lt;ol&gt; 、 &lt;li&gt; 、 &lt;dl&gt; 、 &lt;dt&gt; 、 &lt;dd&gt; 
   4. 表格相关标签： &lt;table&gt; 、 &lt;tbody&gt; 、 &lt;thead&gt; 、 &lt;tfoot&gt; 、 &lt;tr&gt; 、 &lt;caption&gt; 
   5. &lt;form&gt; 与 &lt;option&gt; 

行内元素（inline） 
   1. 文本标签： &lt;br&gt; 、 &lt;em&gt; 、 &lt;strong&gt; 、 &lt;sup&gt; 、 &lt;sub&gt; 、 &lt;del&gt; 、 &lt;ins&gt; 
   2. &lt;a&gt; 与 &lt;label&gt; 

行内块元素（inline-block） 
   1. 图片： &lt;img&gt; 
   2. 单元格： &lt;td&gt; 、 &lt;th&gt; 
   3. 表单控件： &lt;input&gt; 、 &lt;textarea&gt; 、 &lt;select&gt; 、 &lt;button&gt; 
   4. 框架标签： &lt;iframe&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改元素的显示模式" tabindex="-1"><a class="header-anchor" href="#修改元素的显示模式" aria-hidden="true">#</a> 修改元素的显示模式</h2><p>通过 CSS 中的 display 属性可以修改元素的默认显示模式，常用值如下：</p><table><thead><tr><th><strong>值</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>none</td><td>元素会被<strong>隐藏</strong>。</td></tr><tr><td>block</td><td>元素将作为<strong>块级元素</strong>显示。</td></tr><tr><td>inline</td><td>元素将作为<strong>内联元素</strong>显示。</td></tr><tr><td>inline-block</td><td>元素将作为<strong>行内块元素</strong>显示。</td></tr></tbody></table><h2 id="盒子模型的组成" tabindex="-1"><a class="header-anchor" href="#盒子模型的组成" aria-hidden="true">#</a> 盒子模型的组成</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>CSS 会把所有的 HTML 元素都看成一个盒子，所有的样式也都是基于这个盒子。
   1. margin（外边距）： 盒子与外界的距离。
   2. border（边框）： 盒子的边框。
   3. padding（内边距）： 紧贴内容的补白区域。
   4. content（内容）：元素中的文本或后代元素都是它的内容。

盒子的大小 = content + 左右 padding + 左右 border 。

注意：外边距 margin 不会影响盒子的大小，但会影响盒子的位置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="盒子内容区-content" tabindex="-1"><a class="header-anchor" href="#盒子内容区-content" aria-hidden="true">#</a> 盒子内容区（content）</h2><table><thead><tr><th>CSS 属性名</th><th>功能</th><th>属性值</th></tr></thead><tbody><tr><td>width</td><td>设置内容区域宽度</td><td>长度</td></tr><tr><td>max-width</td><td>设置内容区域的最大宽度</td><td>长度</td></tr><tr><td>min-width</td><td>设置内容区域的最小宽度</td><td>长度</td></tr><tr><td>height</td><td>设置内容区域的高度</td><td>长度</td></tr><tr><td>max-height</td><td>设置内容区域的最大高度</td><td>长度</td></tr><tr><td>min-height</td><td>设置内容区域的最小高度</td><td>长度</td></tr></tbody></table>`,13),a=e("div",{class:"custom-container danger"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M10 10l4 4m0-4l-4 4"})])]),e("p",{class:"custom-container-title"},"注意"),e("p",null,[e("code",null,"max-width"),d(" 、 "),e("code",null,"min-width"),d(" 一般不与 "),e("code",null,"width"),d(" 一起使用。"),e("br"),e("code",null,"max-height"),d(" 、 "),e("code",null,"min-height"),d(" 一般不与 "),e("code",null,"height"),d(" 一起使用。")])],-1),c=n('<h2 id="关于默认宽度" tabindex="-1"><a class="header-anchor" href="#关于默认宽度" aria-hidden="true">#</a> 关于默认宽度</h2><p>所谓的默认宽度，就是不设置 <code>width</code> 属性时，元素所呈现出来的宽度。<br> 总宽度 = 父的 <code>content</code> — 自身的左右 <code>margin</code> 。<br> 内容区的宽度 = 父的 <code>content</code> — 自身的左右 <code>margin</code> — 自身的左右 <code>border</code> — 自身的左右<code>padding</code> 。</p><h2 id="盒子内边距-padding" tabindex="-1"><a class="header-anchor" href="#盒子内边距-padding" aria-hidden="true">#</a> 盒子内边距（padding）</h2><table><thead><tr><th>CSS 属性名</th><th>功能</th><th>属性值</th></tr></thead><tbody><tr><td>padding-top</td><td>上内边距</td><td>长度</td></tr><tr><td>padding-right</td><td>右内边距</td><td>长度</td></tr><tr><td>padding-bottom</td><td>下内边距</td><td>长度</td></tr><tr><td>padding-left</td><td>左内边距</td><td>长度</td></tr><tr><td>padding</td><td>复合属性</td><td>长度，可以设置 1 ~ 4 个值</td></tr></tbody></table><p><code>padding</code> 复合属性的使用规则：</p><ol><li><code>padding: 10px;</code> 四个方向内边距都是 10px 。</li><li><code>padding: 10px 20px; </code>上 10px ，左右 20px 。（上下、左右）</li><li><code>padding: 10px 20px 30px;</code> 上 10px ，左右 20px ，下 30px 。（上、左右、下）</li><li><code>padding: 10px 20px 30px 40px;</code> 上 10px ，右 20px ，下 30px ，左 40px 。（上、右、下、左）</li></ol>',6),o=e("div",{class:"custom-container danger"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M10 10l4 4m0-4l-4 4"})])]),e("p",{class:"custom-container-title"},"注意点"),e("ol",null,[e("li",null,"padding 的值不能为负数。"),e("li",null,[e("strong",null,"行内元素"),d(" 的 左右内边距是没问题的，上下内边距不能完美的设置。")]),e("li",null,[e("strong",null,"块级元素"),d("、"),e("strong",null,"行内块元素"),d("，四个方向"),e("strong",null,"内边距"),d("都可以完美设置。")])])],-1),v=n('<h2 id="盒子边框-border" tabindex="-1"><a class="header-anchor" href="#盒子边框-border" aria-hidden="true">#</a> 盒子边框（border）</h2><table><thead><tr><th style="text-align:center;">CSS 属性名</th><th style="text-align:center;">功能</th><th style="text-align:center;">属性值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>border-style</code></td><td style="text-align:center;">边框线风格 复合了四个方向的边框风格</td><td style="text-align:center;"><code>none </code>： 默认值 <br><code>solid </code>： 实线<br><code>dashed </code>： 虚线<br><code>dotted </code>： 点线<br><code>double</code> ： 双实线</td></tr><tr><td style="text-align:center;"><code>border-width</code></td><td style="text-align:center;">边框线宽度 复合了四个方向的边框宽度</td><td style="text-align:center;">长度，默认 3px</td></tr><tr><td style="text-align:center;"><code>border-color</code></td><td style="text-align:center;">边框线颜色 复合了四个方向的边框颜色</td><td style="text-align:center;">颜色，默认黑色</td></tr><tr><td style="text-align:center;"><code>border</code></td><td style="text-align:center;">复合属性</td><td style="text-align:center;">值没有顺序和数量要求。</td></tr><tr><td style="text-align:center;"><code>border-left</code><br> <code>border-left-style</code><br> <code>border-left-width</code><br> <code>border-left-color</code><br> <code>border-right</code> <br><code>border-right-style</code><br><code>border-right-width</code><br> <code>border-right-color</code><br> <code>border-top</code><br> <code>border-top-style</code><br> <code>border-top-width</code> <br><code>border-top-color</code> <br><code>border-bottom</code><br> <code>border-bottom-style</code> <br><code>border-bottom-width</code> <br><code>border-bottom-color</code></td><td style="text-align:center;">分别设置各个方向的边框</td><td style="text-align:center;">同上</td></tr></tbody></table>',2),u=e("div",{class:"custom-container tip"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"边框相关属性共20个。"),e("p",null,[e("code",null,"border-style"),d(" 、 "),e("code",null,"border-width"),d(" 、 "),e("code",null,"border-color"),d(" 其实也是复合属性。")])],-1),b=n(`<h2 id="盒子外边距-margin" tabindex="-1"><a class="header-anchor" href="#盒子外边距-margin" aria-hidden="true">#</a> 盒子外边距（margin）</h2><table><thead><tr><th>CSS 属性名</th><th>功能</th><th>属性值</th></tr></thead><tbody><tr><td><code>margin-left</code></td><td>左外边距</td><td>CSS 中的长度值</td></tr><tr><td><code>margin-right</code></td><td>右外边距</td><td>CSS 中的长度值</td></tr><tr><td><code>margin-top</code></td><td>上外边距</td><td>CSS 中的长度值</td></tr><tr><td><code>margin-bottom</code></td><td>下外边距</td><td>CSS 中的长度值</td></tr><tr><td><code>margin</code></td><td>复合属性，可以写 1~4 个值，规律同 padding （顺时针）</td><td>CSS 中的长度值</td></tr></tbody></table><h4 id="margin-注意事项" tabindex="-1"><a class="header-anchor" href="#margin-注意事项" aria-hidden="true">#</a> margin 注意事项</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1. 子元素的 margin ，是参考父元素的 content 计算的。（因为是父亲的 content 中承装着子元素）

2. 上 margin 、左 margin ：影响自己的位置；下 margin 、右 margin ：影响后面兄弟元素的位置。

3. 块级元素、行内块元素，均可以完美地设置四个方向的 margin ；但行内元素，左右margin 可以完美设置，上下 margin 设置无效。

4. margin 的值也可以是 auto ，如果给一个块级元素设置左右 margin 都为 auto ，该块级元素会在父元素中水平居中。

5. margin 的值可以是负值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="margin-塌陷问题" tabindex="-1"><a class="header-anchor" href="#margin-塌陷问题" aria-hidden="true">#</a> margin 塌陷问题</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>什么是margin 塌陷？
	第一个子元素的上 margin 会作用在父元素上，最后一个子元素的下 margin 会作用在父元素上。

如何解决 margin 塌陷？
方案一：   
	给父元素设置不为 0 的 padding 。

方案二：   
	给父元素设置宽度不为 0 的 border 。
	
方案三：
	给父元素设置 css 样式 <span class="token property">overflow</span><span class="token punctuation">:</span>hidden 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="margin-合并问题" tabindex="-1"><a class="header-anchor" href="#margin-合并问题" aria-hidden="true">#</a> margin 合并问题</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>什么是 margin 合并？
	上面兄弟元素的下外边距和下面兄弟元素的上外边距会合并，取一个最大的值，而不是相加。

如何解决  margin 塌陷？
	无需解决，布局的时候上下的兄弟元素，只给一个设置上下外边距就可以了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理内容溢出" tabindex="-1"><a class="header-anchor" href="#处理内容溢出" aria-hidden="true">#</a> 处理内容溢出</h2><table><thead><tr><th>CSS 属性名</th><th>功能</th><th>属性值</th></tr></thead><tbody><tr><td><code>overflow</code></td><td>溢出内容的处理方式</td><td>visible ：显示，默认值<br>hidden ：隐藏<br>scroll ：显示滚动条，不论内容是否溢出<br>auto ：自动显示滚动条，内容不溢出不显示</td></tr><tr><td><code>overflow-x</code></td><td>水平方向溢出内容的处理方式</td><td>同 overflow</td></tr><tr><td><code>overflow-y</code></td><td>垂直方向溢出内容给的处理方式</td><td>同 overflow</td></tr></tbody></table>`,10),h=e("div",{class:"custom-container danger"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M10 10l4 4m0-4l-4 4"})])]),e("p",{class:"custom-container-title"},"注意"),e("ol",null,[e("li",null,[e("code",null,"overflow-x"),d(" 、 "),e("code",null,"overflow-y"),d(" 不能一个是 "),e("code",null,"hidden"),d(" ，一个是 "),e("code",null,"visible"),d(" ，是实验性属性，不建议使用。")]),e("li",null,[e("code",null,"overflow"),d(" 常用的值是 "),e("code",null,"hidden"),d(" 和 "),e("code",null,"auto"),d(" ，除了能处理溢出的显示方式，还可以解决很多疑难杂症。")])])],-1),m=n(`<h2 id="隐藏元素的方式" tabindex="-1"><a class="header-anchor" href="#隐藏元素的方式" aria-hidden="true">#</a> 隐藏元素的方式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方式一：visibility 属性 
	visibility 属性默认值是 show ，如果设置为 hidden ，元素会隐藏。
	元素看不见了，还占有原来的位置（元素的大小依然保持）。
	
方式二： display 属性
	设置 display:none ，就可以让元素隐藏。
	彻底地隐藏，不但看不见，也不占用任何位置，没有大小宽高。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式的继承" tabindex="-1"><a class="header-anchor" href="#样式的继承" aria-hidden="true">#</a> 样式的继承</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有些样式会继承，元素如果本身设置了某个样式，就使用本身设置的样式；
但如果本身没有设置某个样式，会从父元素开始一级一级继承（优先继承离得近的祖先元素）。

会继承的 css 属性 
	字体属性、文本属性（除了vertical-align）、文字颜色 等。

不会继承的 css 属性
	边框、背景、内边距、外边距、宽高、溢出方式 等。

一个规律：能继承的属性，都是不影响布局的，简单说：都是和盒子模型没关系的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认样式" tabindex="-1"><a class="header-anchor" href="#默认样式" aria-hidden="true">#</a> 默认样式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素一般都些默认的样式，例如：
  1. &lt;a&gt; 元素：下划线、字体颜色、鼠标小手。
  2. &lt;h1&gt; ~ &lt;h6&gt; 元素： 文字加粗、文字大小、上下外边距。
  3. &lt;p&gt; 元素：上下外边距
  4. &lt;ul&gt; 、 ol 元素：左内边距
  5. body 元素： 8px 外边距（4个方向）
  	......

优先级：元素的默认样式 &gt; 继承的样式，所以如果要重置元素的默认样式，选择器一定要直接选择器到该元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="布局小技巧" tabindex="-1"><a class="header-anchor" href="#布局小技巧" aria-hidden="true">#</a> 布局小技巧</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 行内元素、行内块元素，可以被父元素当做文本处理。
  即：可以像处理文本对齐一样，去处理：行内、行内块在父元素中的对齐。
  例如： text-align 、 line-height 、 text-indent 等。
  
2. 如何让子元素，在父亲中 水平居中：
  若子元素为块元素，给父元素加上： margin:0 auto; 。
  若子元素为行内元素、行内块元素，给父元素加上： text-align:center 。 

3. 如何让子元素，在父亲中 垂直居中：
	若子元素为块元素，给子元素加上： margin-top ，值为：(父元素 content －子元素盒子总高) / 2。
	若子元素为行内元素、行内块元素：
		让父元素的 height = line-height ，每个子元素都加上： vertical- align:middle; 。
		补充：若想绝对垂直居中，父元素 font-size 设置为 0 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元素之间的空白问题" tabindex="-1"><a class="header-anchor" href="#元素之间的空白问题" aria-hidden="true">#</a> 元素之间的空白问题</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>产生的原因：
	行内元素、行内块元素，彼此之间的换行会被浏览器解析为一个空白字符。

解决方案：
  1. 方案一： 去掉换行和空格（不推荐）。
  2. 方案二： 给父元素设置 font-size:0 ，再给需要显示文字的元素，单独设置字体大小（推荐）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行内块的幽灵空白问题" tabindex="-1"><a class="header-anchor" href="#行内块的幽灵空白问题" aria-hidden="true">#</a> 行内块的幽灵空白问题</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>产生原因：
	行内块元素与文本的基线对齐，而文本的基线与文本最底端之间是有一定距离的。

解决方案：
	方案一： 给行行内块设置 vertical ，值不为 baseline 即可，设置为 middel 、 bottom 、 top 均可。
	方案二： 若父元素中只有一张图片，设置图片为 <span class="token property">display</span><span class="token punctuation">:</span>block 。 
	方案三： 给父元素设置 <span class="token property">font-size</span><span class="token punctuation">:</span> 0 。如果该行内块内部还有文本，则需单独设置 font- size 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),g=[r,a,c,o,v,u,b,h,m];function p(x,w){return i(),l("div",null,g)}const f=t(s,[["render",p],["__file","04.CSShezimoxing.html.vue"]]);export{f as default};
