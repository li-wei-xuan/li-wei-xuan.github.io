import{_ as n,p as i,q as s,Y as e}from"./framework-aa5c4115.js";const l={},d=e(`<h2 id="颜色属性" tabindex="-1"><a class="header-anchor" href="#颜色属性" aria-hidden="true">#</a> 颜色属性</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">表示1</span><span class="token punctuation">:</span> 英文单词<span class="token punctuation">(</span>red<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> green....<span class="token punctuation">)</span>

<span class="token property">表示2</span><span class="token punctuation">:</span> rgb 或 rgba 
  r 表示 红色
  g 表示 绿色
  b 表示 蓝色
  a 表示 透明度 <span class="token punctuation">(</span>0-1<span class="token punctuation">)</span>

小规律：
  1. 若三种颜色值相同，呈现的是灰色，值越大，灰色越浅。
  2. <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span> 是黑色， <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span>255<span class="token punctuation">)</span> 是白色。
  3. 对于 rbga 来说，前三位的 rgb 形式要保持一致，要么都是 0~255 的数字，要么都是百分比 。

表示3：HEX 或 HEXA
  HEX 的原理同与 rgb 一样，依然是通过：红、绿、蓝色 进行组合，只不过要用 6位（分成3组）来表达，格式为：# rrggbb

注意点： IE 浏览器不支持 HEXA ，但支持 HEX 。

表示4：HSL 或 HSLA
HSL 是通过：色相、饱和度、亮度，来表示一个颜色的，格式为： <span class="token function">hsl</span><span class="token punctuation">(</span>色相<span class="token punctuation">,</span>饱和度<span class="token punctuation">,</span>亮度<span class="token punctuation">)</span>
  1、色相：取值范围是 0~360 度，具体度数对应的颜色如下图：
  2、饱和度：取值范围是 0%~100% 。（向色相中对应颜色中添加灰色， 0% 全灰， 100% 没有灰）
  3、亮度：取值范围是 0%~100% 。（ 0% 亮度没了，所以就是黑色。 100% 亮度太强，所以就是白色了）
HSLA 其实就是在 HSL 的基础上，添加了透明度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字体属性" tabindex="-1"><a class="header-anchor" href="#字体属性" aria-hidden="true">#</a> 字体属性</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1. 字体大小
  font-size 控制字体大小

注意点
  1. Chrome 浏览器支持的最小文字为 12px ，默认的文字大小为 16px ，并且 0px 会自动消失。
  2. 不同浏览器默认的字体大小可能不一致，所以最好给一个明确的值，不要用默认大小。
  3. 通常以给 body 设置 font-size 属性，这样 body 中的其他元素就都可以继承了。

2. 字体族
  font-family 控制字体类型。

注意点
  1. 使用字体的英文名字兼容性会更好，具体的英文名可以自行查询，或在电脑的设置里
  去寻找。
  2. 如果字体名包含空格，必须使用引号包裹起来。
  3. 可以设置多个字体，按照从左到右的顺序逐个查找，找到就用，没有找到就使用后面的，且通常在最后写上 serif（衬线字体）或 sans-serif （非衬线字体）。
  4. windows 系统中，默认的字体就是微软雅黑。

3. 字体风格
  font-style 控制字体是否为斜体。

常用值：
  1. normal ：正常（默认值）
  2. italic ：斜体（使用字体自带的斜体效果）<span class="token punctuation">(</span>推荐<span class="token punctuation">)</span>
  3. oblique ：斜体（强制倾斜产生的斜体效果）

4. 字体粗细
  font-weight 控制字体的粗细。

常用值：
  关键词
    1. lighter ：细
    2. normal ：正常
    3. bold ：粗
    4. bolder ：很粗 （多数字体不支持）

  数值：
    1. 100~1000 且无单位，数值越大，字体越粗 （或一样粗，具体得看字体设计时的精确程度）。
    2. 100~300 等同于 lighter ， 400~500 等同于 normal ， 600 及以上等同于bold 。

5. 字体复合写法
  font 将上述所有字体相关的属性复合在一起编写。

编写规则：
  1. 字体大小、字体族必须都写上。
  2. 字体族必须是最后一位、字体大小必须是倒数第二位。
  3. 各个属性间用空格隔开。

实际开发中更推荐复合写法，但这也不是绝对的，比如只想设置字体大小，那就直接用font-size 属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本属性" tabindex="-1"><a class="header-anchor" href="#文本属性" aria-hidden="true">#</a> <strong>文本属性</strong></h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>1 文本颜色
  color 控制文字的颜色。

可选值：
  1. 颜色名
  2. rgb 或 rgba 
  3. HEX 或 HEXA （十六进制）
  4. HSL 或 HSLA
开发中常用的是： rgb/rgba 或 HEX/HEXA （十六进制）。

2 文本间距
  字母间距： letter-spacing
  单词间距： word-spacing （通过空格识别词）
属性值为像素（ px ），正值让间距增大，负值让间距缩小

3 文本修饰
  text-decoration 控制文本的各种装饰线。

可选值：
  1. none ： 无装饰线（常用）
  2. underline ：下划线（常用）
  3. overline ： 上划线
  4. line-through ： 删除线

可搭配如下值使用：
  1. dotted ：虚线
  2. wavy ：波浪线
  3. 也可以指定颜色

4 文本缩进
  text-indent 控制文本首字母的缩进。

5 文本对齐_水平
  text-align 控制文本的水平对齐方式。

常用值：
  1. left ：左对齐（默认值）
  2. right ：右对齐
  3. center ：居中对齐

6  行高
  line-height 控制一行文字的高度。

可选值：
  1. normal ：由浏览器根据文字大小决定的一个默认值。
  2. 像素<span class="token punctuation">(</span> px <span class="token punctuation">)</span>。 
  3. 数字：参考自身 font-size 的倍数（很常用）。
  4. 百分比：参考自身 font-size 的百分比。

备注：由于字体设计原因，文字在一行中，并不是绝对垂直居中，若一行中都是文字，不会太影响观感。

行高注意事项：
  1. line-height 过小会怎样？—— 文字产生重叠，且最小值是 0 ，不能为负数。
  2. line-height 是可以继承的，且为了能更好的呈现文字，最好写数值。
  3. line-height 和 height 是什么关系？
    设置了 height ，那么高度就是 height 的值。
    不设置 height 的时候，会根据 line-height 计算高度。

应用场景：
  1. 对于多行文字：控制行与行之间的距离。
  2. 对于单行文字：让 height 等于 line-height ，可以实现文字垂直居中。

备注：由于字体设计原因，靠上述办法实现的居中，并不是绝对的垂直居中，但如果
一行中都是文字，不会太影响观感。

7 文本对齐_垂直 
  1. 顶部：无需任何属性，在垂直方向上，默认就是顶部对齐。
  2. 居中：对于单行文字，让 height = line-height 即可。
  3. 底部：对于单行文字，目前一个临时的方式：
    让 line-height = <span class="token punctuation">(</span> height × 2 <span class="token punctuation">)</span> - font-size - x 。
备注： x 是根据字体族，动态决定的一个值。

8 vertical-align
  vertical-align 用于指定同一行元素之间，或 表格单元格 内文字的 垂直对齐方式。

常用值：
  1. baseline （默认值）：使元素的基线与父元素的基线对齐。
  2. top ：使元素的顶部与其所在行的顶部对齐。
  3. middle ：使元素的中部与父元素的基线加上父元素字母 x 的一半对齐。
  4. bottom ：使元素的底部与其所在行的底部对齐。

特别注意： vertical-align 不能控制块元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[d];function v(c,r){return i(),s("div",null,a)}const b=n(l,[["render",v],["__file","03.CSSchangyongshuxing.html.vue"]]);export{b as default};
