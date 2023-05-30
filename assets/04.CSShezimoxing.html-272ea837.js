import{_ as n,p as i,q as l,Y as d,s as t,R as e}from"./framework-aa5c4115.js";const r={},s=d(`<h2 id="css长度单位" tabindex="-1"><a class="header-anchor" href="#css长度单位" aria-hidden="true">#</a> CSS长度单位</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   1. px ：像素。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="盒子内容区-content" tabindex="-1"><a class="header-anchor" href="#盒子内容区-content" aria-hidden="true">#</a> 盒子内容区（content）</h2><table><thead><tr><th>CSS 属性名</th><th>功能</th><th>属性值</th></tr></thead><tbody><tr><td>width</td><td>设置内容区域宽度</td><td>长度</td></tr><tr><td>max-width</td><td>设置内容区域的最大宽度</td><td>长度</td></tr><tr><td>min-width</td><td>设置内容区域的最小宽度</td><td>长度</td></tr><tr><td>height</td><td>设置内容区域的高度</td><td>长度</td></tr><tr><td>max-height</td><td>设置内容区域的最大高度</td><td>长度</td></tr><tr><td>min-height</td><td>设置内容区域的最小高度</td><td>长度</td></tr></tbody></table>`,13),o=t("div",{class:"custom-container danger"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M10 10l4 4m0-4l-4 4"})])]),t("p",{class:"custom-container-title"},"注意"),t("p",null,[t("code",null,"max-width"),e(" 、 "),t("code",null,"min-width"),e(" 一般不与 "),t("code",null,"width"),e(" 一起使用。"),t("br"),t("code",null,"max-height"),e(" 、 "),t("code",null,"min-height"),e(" 一般不与 "),t("code",null,"height"),e(" 一起使用。")])],-1),c=d('<h2 id="关于默认宽度" tabindex="-1"><a class="header-anchor" href="#关于默认宽度" aria-hidden="true">#</a> 关于默认宽度</h2><p>所谓的默认宽度，就是不设置 <code>width</code> 属性时，元素所呈现出来的宽度。<br> 总宽度 = 父的 <code>content</code> — 自身的左右 <code>margin</code> 。<br> 内容区的宽度 = 父的 <code>content</code> — 自身的左右 <code>margin</code> — 自身的左右 <code>border</code> — 自身的左右<code>padding</code> 。</p><h2 id="盒子内边距-padding" tabindex="-1"><a class="header-anchor" href="#盒子内边距-padding" aria-hidden="true">#</a> 盒子内边距（padding）</h2><table><thead><tr><th>CSS 属性名</th><th>功能</th><th>属性值</th></tr></thead><tbody><tr><td>padding-top</td><td>上内边距</td><td>长度</td></tr><tr><td>padding-right</td><td>右内边距</td><td>长度</td></tr><tr><td>padding-bottom</td><td>下内边距</td><td>长度</td></tr><tr><td>padding-left</td><td>左内边距</td><td>长度</td></tr><tr><td>padding</td><td>复合属性</td><td>长度，可以设置 1 ~ 4 个值</td></tr></tbody></table><p><code>padding</code> 复合属性的使用规则：</p><ol><li><code>padding: 10px;</code> 四个方向内边距都是 10px 。</li><li><code>padding: 10px 20px; </code>上 10px ，左右 20px 。（上下、左右）</li><li><code>padding: 10px 20px 30px;</code> 上 10px ，左右 20px ，下 30px 。（上、左右、下）</li><li><code>padding: 10px 20px 30px 40px;</code> 上 10px ，右 20px ，下 30px ，左 40px 。（上、右、下、左）</li></ol>',6),a=t("div",{class:"custom-container danger"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M10 10l4 4m0-4l-4 4"})])]),t("p",{class:"custom-container-title"},"注意点"),t("ol",null,[t("li",null,"padding 的值不能为负数。"),t("li",null,[t("strong",null,"行内元素"),e(" 的 左右内边距是没问题的，上下内边距不能完美的设置。")]),t("li",null,[t("strong",null,"块级元素"),e("、"),t("strong",null,"行内块元素"),e("，四个方向"),t("strong",null,"内边距"),e("都可以完美设置。")])])],-1),b=d('<h2 id="盒子边框-border" tabindex="-1"><a class="header-anchor" href="#盒子边框-border" aria-hidden="true">#</a> 盒子边框（border）</h2><table><thead><tr><th style="text-align:center;">CSS 属性名</th><th style="text-align:center;">功能</th><th style="text-align:center;">属性值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>border-style</code></td><td style="text-align:center;">边框线风格 复合了四个方向的边框风格</td><td style="text-align:center;"><code>none </code>： 默认值 <br><code>solid </code>： 实线<br><code>dashed </code>： 虚线<br><code>dotted </code>： 点线<br><code>double</code> ： 双实线</td></tr><tr><td style="text-align:center;"><code>border-width</code></td><td style="text-align:center;">边框线宽度 复合了四个方向的边框宽度</td><td style="text-align:center;">长度，默认 3px</td></tr><tr><td style="text-align:center;"><code>border-color</code></td><td style="text-align:center;">边框线颜色 复合了四个方向的边框颜色</td><td style="text-align:center;">颜色，默认黑色</td></tr><tr><td style="text-align:center;"><code>border</code></td><td style="text-align:center;">复合属性</td><td style="text-align:center;">值没有顺序和数量要求。</td></tr><tr><td style="text-align:center;"><code>border-left</code><br> <code>border-left-style</code><br> <code>border-left-width</code><br> <code>border-left-color</code><br> <code>border-right</code> <br><code>border-right-style</code><br><code>border-right-width</code><br> <code>border-right-color</code><br> <code>border-top</code><br> <code>border-top-style</code><br> <code>border-top-width</code> <br><code>border-top-color</code> <br><code>border-bottom</code><br> <code>border-bottom-style</code> <br><code>border-bottom-width</code> <br><code>border-bottom-color</code></td><td style="text-align:center;">分别设置各个方向的边框</td><td style="text-align:center;">同上</td></tr></tbody></table>',2),h=t("div",{class:"custom-container tip"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"9"}),t("path",{d:"M12 8h.01"}),t("path",{d:"M11 12h1v4h1"})])]),t("p",{class:"custom-container-title"},"边框相关属性共20个。"),t("p",null,[t("code",null,"border-style"),e(" 、 "),t("code",null,"border-width"),e(" 、 "),t("code",null,"border-color"),e(" 其实也是复合属性。")])],-1),v=[s,o,c,a,b,h];function g(u,m){return i(),l("div",null,v)}const x=n(r,[["render",g],["__file","04.CSShezimoxing.html.vue"]]);export{x as default};
