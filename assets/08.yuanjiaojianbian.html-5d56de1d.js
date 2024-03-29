import{_ as n,p as s,q as a,Y as e}from"./framework-aa5c4115.js";const p={},t=e(`<h1 id="圆角样式" tabindex="-1"><a class="header-anchor" href="#圆角样式" aria-hidden="true">#</a> 圆角样式</h1><p><strong>圆角样式的开发意义</strong></p><ul><li>代码代替原生的图片素材,使得网页体量更小,用户下载更快.</li><li>网页的观感更佳</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
<span class="token comment">/*一个属性值:上下左右*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span>50px 100px<span class="token punctuation">;</span>
<span class="token comment">/*两个属性值:左上与右下，左下与右上;*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>Border-radius：50px 100px 150px<span class="token punctuation">;</span> 
<span class="token comment">/*三个属性值:左上 右上与左下 右下*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 50px 60px 120px 150px<span class="token punctuation">;</span>
<span class="token comment">/*四个属性值:分别为左上 右上 右下 左下.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>回到最开始我们如果只要两个角有样式.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 50px 100px 0px 0px<span class="token punctuation">;</span>
<span class="token comment">/*除了这样我们还可以设置单例型写法*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个我们用圆角的单例型样式的设置为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-top-left-radius</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span><span class="token comment">/*左上角小圆半径*/</span> 
<span class="token property">border-top-right-radius</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span> <span class="token comment">/*右上角小圆半径*/</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>border-bottom-left-radius：60px<span class="token punctuation">;</span><span class="token comment">/*设置左下角边框的圆角样式；*/</span>
border-bottom-right-radius：70px<span class="token punctuation">;</span><span class="token comment">/*设置右下角边框的圆角样式；*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>:边框的顺序不能打乱，比如border-top-left-radius就不可以写成border-left-top-radius 属性是固定的。</p><p>我们去左上角设置一个圆弧,把这个圆弧设置的足够大,整个圆的半径和矩形的宽高一样大,这时候会显示什么?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
 <span class="token comment">/*即便单一一个角圆特别大,大到好像可以把其他的角影响到.
   游览器也只会切割矩形的左上角,对其他的三个角没有影响*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果继续扩大呢,此时我们去让圆的半径是矩形的宽高</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-top-left-radius</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>
<span class="token comment">/*左上角的圆已经超出矩形了,即使是在这样的情况下也只会对矩形的左上角进行裁切.
  无论我们画的圆有多大,你设置是左上角的圆角样式,也只会影响左上角.
  所以我们设置单一角度的圆角值,只会影响你设置单一的那个角
  如果我们打开控制台继续调大圆角数值,可以发现此时数值再大是没有效果.
  所以我们圆角的半径横轴必须小于等于元素的宽度,我们的纵轴必须小于等于元素   的高度*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们说了如何去设置圆角,其实我们还可以去设置椭圆角</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 200px/50px<span class="token punctuation">;</span>
<span class="token comment">/*此时前面的值为椭圆的横轴值200px,斜杠后面的为椭圆的纵轴值50px.
 我们横轴和纵轴是完全独立开来的,用斜杠分割,中间的值要进行分别设置.
 前面的横轴值可接受四个值,后面的纵轴值同样最多接受四个值.
 方向规则和我们上面讲的是一样的.*/</span>

<span class="token comment">/*注意前面没有斜杠的情况*/</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
<span class="token comment">/*这个其实默认是border-radius:200px/200px;*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们去学习实用的应用</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token comment">/*这时候我们可以看到一个正圆就出现了,为什么我们给矩形这四个角设置这样的圆角值它会变成圆呢?

  因为我们在四个角分别画了半径200px的圆,然后把弧线外面的进行裁切.

  然后这四条裁切的弧线相互连接就形成了我们的圆.*/</span>
<span class="token comment">/*这时候我们打开开发者工具继续调大圆角值,大家觉得会有变化吗?
  结果是不会有任何的变化.
  
可是刚刚我们设置的单个角直到400px之后才会不变化,这里为什么每个角200px就    没有变化了?
  
  这是因为当时就一个角裁切所以弧线到了矩形高一半的位置还能继续裁切.
  可是这里是四个角的弧线进行裁切,上下两个圆都到中点弧线进行相交的时候.
  此时继续增大圆角值,该怎么裁切?
  所以他个两个就会打架,最后实在没有办法就各占一半.所以才形成了我们的圆.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们用的都是像素px值设置圆角值,</p><p>我们还有一种更为简单的单位去设置圆角,就是我们的百分比值.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token comment">/*此时我们同样实现了圆,这个百分比的单位又是相对于什么呢?

上面我们说过设置单一的值并不代表我们就没有横轴与纵轴了.

我们写的50%相当于横轴也是50%,纵轴也是50%,即反斜杠前后值相等.

反斜杠前的50%就是相对于元素的宽度,反斜杠后的50%就是相对于元素的高度

我们要想实现一个圆形，首先要设置出一个正方形.
给border-radius设置任何大于或等于50%的百分数,都可以实现圆形效果.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>做出圆形</strong></p><blockquote><p>1)我们大盒子一定正方形</p><p>2)设置大于等于50%正方形边长的数字或者是百分数</p></blockquote><p>前面我们可以设置椭圆角,就是斜杠前后设置不一样的值.我们其实还有另外一种方法实现椭圆.</p><p><strong>半圆:</strong></p><blockquote><p>1)长等于宽的2倍的长方形/或者宽等于长的2倍的长方形</p><p>2)半径大于等于宽 或者大于等于高半径</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token comment">/*我们慢慢减少宽度或者高度也能慢慢变成椭圆.
 所以当我们设置元素的宽和高不再相等,表现出来的也是椭圆形.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候我们想去做一个自适应的半圆去怎么制作?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span>50% 50% 0 0/100% 100% 0 0
<span class="token comment">/*半圆不就是由两个四分之一圆组成,相当于把左上变成四分之一个圆,右上变成四分之一个圆.
 这个情况下圆的半径刚好等于宽度的一半,高度就是我们整个元素的高度.
  所以我们左上右上宽度是元素的50%,左下右下不要了,纵轴就是元素高度的全部即可*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者我们这么去设置也行.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 400px 400px 0 0<span class="token punctuation">;</span>
<span class="token comment">/*同样能实现一个半圆的效果*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>前面我们说的椭圆形可能不那么受欢迎,我们有时候更希望看到&quot;胶囊形&quot;,即一个矩形的两端各带一个半圆形.</p><p>这种形状在工程上称为&quot;长圆形&quot;.</p><p>比如实现谷歌游览器地址栏这个长方形圆角功能怎么去实现?</p><blockquote><p>我们可以利用border-radius计算上的一个特性来达到目的,</p><p>我们知道,圆角弧线为保证不会相交会自动缩小半径</p><p>在使用长度值(而非百分之比值的时候),半径并不相对于元素大小而缩小.最终会得到对称效果.</p><p>因此,在创建胶囊两头的半圆形时,我们可以故意指定一个比所需半径大的值的来得到半圆形.</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token comment">/*这里只需每个角的四分之一圆组成,我们将每个圆的半径设置为高度的一半相等就可以.
  或者设置足够大的像素值也行.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>最后关于边框的圆角效果效果,最后还有一点要跟大家说清楚.</p><p>元素形状改变前后对页面的布局不会产生影响.矩形在变成圆角之前之后对布局没有影响.</p><p>但是会改变圆角后元素的可点击和可触摸的区域,会以变化之后的圆角为准.</p><p>所以在使用圆角矩形按钮的时候,需要保证可点击触摸的区域不要太小.</p></blockquote><p><strong>border-radius实现四个方向的半圆</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> 		<span class="token selector">.top</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px 100px 0 0<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.left</span> <span class="token punctuation">{</span>
        
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px 0 0 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.bottom</span> <span class="token punctuation">{</span>
  
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 0 100px 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.right</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 100px 100px 0<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    &lt;div class=<span class="token string">&quot;top&quot;</span>&gt;1&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;left&quot;</span>&gt;2&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;bottom&quot;</span>&gt;3&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;right&quot;</span>&gt;4&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渐变-彩虹" tabindex="-1"><a class="header-anchor" href="#渐变-彩虹" aria-hidden="true">#</a> 渐变(彩虹)</h2><p><strong>渐渐(均匀)的变化</strong></p><p>通过建那边可以设置一些复杂的背景颜色,可以实现从一个颜色向其他颜色的过渡的效果</p><blockquote><p>在日常生活中我们有什么东西是一个渐变的效果,</p><p>头发,比如有可能父母发尖是黑色的,到发根慢慢就变成白色了,由黑色到白色,由一块变色位置到另一块.</p><p>还有一个更加典型的渐变例子就是彩虹.彩虹的颜色从外到里是赤橙黄绿青蓝紫.</p><p>我们日常所吃的苹果的颜色也可能是渐变,</p><p>我们就需要在页面中制作颜色变化位置的效果.</p><p>渐变色更多属于一种装饰型的样式,显示多种颜色平滑过度的效果.</p><p>渐变色通过代码来实现就像我们刚刚的border-raidus一样.</p><p>通过border-raidus来画一个图形好处在于我们不用担心它的体积,体积一定是最小的.</p><p>通过border-radius画出来可能只有几十字节到几百字节.</p><p>但用图片就要几kb到几十kb.渐变如果用代码书写体积同样会比用渐变颜色的图片体积小的多.</p></blockquote><p><strong>渐变分为两种:</strong></p><p>1.颜色沿着一条直线发生变化</p><p>2.变化方向从一个点出发(径向渐变)</p><blockquote><p>渐变是我们<strong>视觉上的效果</strong></p><p><strong>描述的是页面中的元素盒子的渐变</strong></p></blockquote><p><strong>渐变的基础是背景</strong></p><p><strong>1.背景颜色</strong>(那渐变效果更像是一张图片还是颜色,我们页面上的盒子其实是不能用background-color设置渐变颜色的,因为background-color本质上是单色,或者叫纯色,更多是充当一个打底的颜色)</p><p><strong>2,背景图片</strong>(如果把渐变当成是一张背景图片的话,大家可以这么理解,我们在盒子内部创建了一张图片,这张图片有渐变效果,所以我们去写渐变的时候是写在background-image中.)</p><h3 id="线性渐变-linear-gradient" tabindex="-1"><a class="header-anchor" href="#线性渐变-linear-gradient" aria-hidden="true">#</a> 线性渐变(linear-gradient)</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>		<span class="token selector">.box</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
			<span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
         <span class="token comment">/*这里我们不使用url去引入渐变,因为url本质上是引用一个地址.
           相当于游览器悄悄的又打开了一个游览器悄悄的输入了网址把图片下载       下来放在盒子里边.
           我们这里去使用linear-gradient,这里必然要有颜色和颜色的变化.
           没有颜色怎么渐变,而一种颜色也没法渐变,所以我们还至少要去写两个颜色的参数,*/</span>
		
	&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>background-image<span class="token punctuation">;</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>red<span class="token punctuation">)</span>
<span class="token comment">/*两个一样的颜色就为全红,跟我们的背景颜色一样.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>background-image<span class="token punctuation">;</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>blue<span class="token punctuation">)</span>
<span class="token comment">/*我问大家一个问题,这个效果是不是渐变效果?它是由红色逐渐变成了蓝色.
  中间的颜色说它红又不是很红,说它蓝也不够蓝.
  而且这从上往下是一个像素一个像素去变化的.变化方向是平行的.
  这里面的颜色单位可以是关键字,可以是十六进制表示法,当然也可以是rgb表示法
  这就是由我们的纯红色渐变到纯蓝色*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>lightgreen<span class="token punctuation">,</span>skyblue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*我们换个颜色给大家演示一下,大家就会看到一个还算比较好看到颜色.这就是我们的线性渐变,
 大家在今后做开发时,颜色就不会太过单调,我们就可以去做颜色的渐渐变化,对于网 站视觉效果会非常好.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>渐变的特性</strong></p><blockquote><p><strong>变化方向默认是从上往下</strong></p><p>就像百米赛跑一样,我们顶部就相当于初始位置,底部就相当于结束位置,这是我们的整体朝向</p><p>我们规定了初始位置在0%的位置,结束位置在100%的位置,</p><p>我们把0%和100%就当做描述这个位置的关键节点.</p></blockquote><p>​ <strong>颜色最浓的地方在哪里?</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>green<span class="token punctuation">,</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*这两个颜色最浓的地方分别就会在0%和100%;
此时绿色最浓的地方默认在0%的位置,蓝色最浓的地方在100%的位置.
*/</span>

<span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>green 0%<span class="token punctuation">,</span>blue 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*这样写没区别*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>green<span class="token punctuation">,</span>blue<span class="token punctuation">,</span>yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*如果我们写三个颜色最浓的地方分别在0% 50% 100%*/</span>

<span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>green<span class="token punctuation">,</span>blue<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>pink<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*如果我们写四个颜色最浓的地方在哪里?这里我们一共有四个节点,四个节点分为三段,
每一段100除以3,所以他们颜色最浓的地方分别0% 33.3% 66.6% 100%,只需在颜色变化方向上进行分割确认,
渐变可以同时指定多个颜色,多个颜色默认情况下平均分布
如果我们有四种颜色就分割为三块区域,有五种颜色就四块,六种自然就为五块.
我们能不能手动去控制最浓地方在哪里?*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>green<span class="token punctuation">,</span>blue<span class="token punctuation">,</span>yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*这时候我们就要去控制颜色最浓的位置.让蓝色往上走
  怎么去控制我们颜色最浓的位置呢?我们只需在颜色后面写百分比就可以控制*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>green<span class="token punctuation">,</span>blue 60%<span class="token punctuation">,</span>yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*此时blue后面写60%
  最上面是0%的位置,最下面是100%位置,60%位置就从上往下十分之六的位置.
  我们在这里把60%改一改,改成到百分之70%话蓝色最浓的地方就更下去了.
  改成百分之20%的话,最浓的蓝色就会上去.
  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家要抓住一个核心问题</p><blockquote><p><strong>百分比是一个相对于谁的百分比?</strong></p><p><strong>相对于自身盒子的高度,这时候我们去把盒子高度调高,你会发现颜色的变化也符合一个比例关系</strong></p></blockquote><p><strong>接下来我们来聊一个问题?</strong></p><p><strong>渐变的极限在哪里?</strong></p><blockquote><p>两种颜色一开始均匀分布,如果我用百分比使他们慢慢靠近,最后颜色冲突到了一起怎么办</p><p>假如我们一个区域,</p><p>上面是蓝色下面是紫色,它能够缓慢的变化,</p><p>假如这两块渐变最浓的区域区域越来越近,会出现什么效果.</p><p>会不会融合成一个颜色,其实是不会融合成一个颜色</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple<span class="token punctuation">,</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*现在渐变上面是紫色,下面是蓝色.
  第一个颜色默认位置百分比是多少?默认是0%的位置.
  第二个颜色的默认位置就是100%,这是它的默认值.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 0%<span class="token punctuation">,</span>blue 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*刷新后可以发现颜色渐变跟原来没有变化*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 20%<span class="token punctuation">,</span>blue 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token comment">/*这时候我把第一个区域增大到20%;现在最浓的位置在哪里?
  我们现在盒子的高度是300px,最浓的位置就是从上往下60px的位置,利用300乘以   20%可以算出.
  那在60px之前是什么颜色?点击刷新页面看下,鼠标移动到这块区域.
  20%位置之前区域都是一个颜色,你在这写20%代表20%前都是这个最浓的颜色,即我们的紫色*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 20% <span class="token punctuation">,</span>blue 80%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*前面代表20%的位置之前那都是紫色,后面代表80%位置之后时都是蓝色.这两个位置没有发生所谓的渐变.

我们设置前面颜色40%,后面颜色60%,此时40%位置之前的颜色都是紫色,60%的位置之后都是蓝色.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那如果前后颜色位置都写50%,50%的话.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 50% <span class="token punctuation">,</span>blue 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*两种颜色泾渭分明.
	上面50%的区域全是紫色,下面50%的区域全是蓝色.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们先写的颜色位置比后写的颜色位置更大呢?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 60% <span class="token punctuation">,</span>blue 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token comment">/*此时后写的百分比的就没有效果了.
 就跟我们的正宫和我们的侧室一个概念,正房比侧房更有发言权.
 第一个颜色也更有发言权.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 60% <span class="token punctuation">,</span>blue 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*写10%也没作用谁先写就厉害,我们一般来写不会写出这样的表现效果*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 40% <span class="token punctuation">,</span>blue 40%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*注意这样写表示0-40%的位置为紫色,40%位置之后默认填充为蓝色.

  所以前一个颜色位置的百分比最好小于等于后一个的颜色位置,这样才好观察颜色	的变化.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们渐变还可以渐变透明色.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 30% <span class="token punctuation">,</span>transparent 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*此时30%之前的区域是紫色,30%到70%的是由紫色渐变到透明色,70%之后全是透明*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们只想让中间的区域有紫色呢?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>transparent 30%<span class="token punctuation">,</span>purple 30% <span class="token punctuation">,</span>purple 70% <span class="token punctuation">,</span>transparent 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了百分比描述颜色的位置</p><p>现在说一个新的单位 <strong>像素值px</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 100px <span class="token punctuation">,</span>blue 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*100px高度之前的区域也都是紫色,现在紫色区域的高度刚好也就是100px,后面的区域就全为蓝色了.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们的渐变都是从上往下渐变的,那我如果想改变方向可以实现吗?</p><p><strong>渐变的方向可以控制,用第一个参数控制,第一个参数不写默认方向从上往下</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left <span class="token punctuation">,</span>purple 30% <span class="token punctuation">,</span>transparent 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*从右往左去渐变.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right <span class="token punctuation">,</span>purple 30% <span class="token punctuation">,</span>transparent 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*现在百分比朝向也发生变化,现在?百分比30%现在跟宽度什么关系?
 宽度的30%现在就是90px前面都是颜色最浓的地方.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对角线渐变</strong></p><p>你甚至可以设置渐变方向为从一个对角到另一个对角.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left top <span class="token punctuation">,</span>purple 30% <span class="token punctuation">,</span>transparent 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*可以写两个值,表示左上,但是最多只有八个方向,有局限性.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除了left top right bootom等关键字值之外还有<strong>度数deg</strong></p><p>一个圆周就是360度 从12点钟出发,顺时针</p><p><strong>to top == 0deg</strong></p><p><strong>to right == 90deg</strong></p><p><strong>to bottom == 180deg</strong></p><p><strong>to left == 270deg</strong></p><p><strong>正角度都属于顺时针方向。 而负角度意味着逆时针方向</strong></p><p><strong>渐变的本质是一张图片(用控制背景图片的方式控制渐变的效果)</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 0% <span class="token punctuation">,</span>blue 100%<span class="token punctuation">)</span> 0px 0px /100px 100px<span class="token punctuation">;</span>
<span class="token comment">/*这时候我们的背景图片怎么变成了三段了?
  其实背景图片大小默认不是盒子所决定的,而是由背景图片中background-size这个来决定的.
  这时这张渐变图片相当于进行了平铺,那我们如何解决掉平铺呢?
  要去写上no-repeat.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 0% <span class="token punctuation">,</span>blue 100%<span class="token punctuation">)</span> no-repeat 0px 0px /100px 100px<span class="token punctuation">;</span>
<span class="token comment">/*现在这个背景是不是有点像一张图片的写法,默认位置从上往下,基础像素大小100px,
  我们就可以通过这样一个背景的复合样式去书写我们的渐变.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们还可以写逗号创建多个渐变效果</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span>
	<span class="token function">linear-gradient</span><span class="token punctuation">(</span>purple 0% <span class="token punctuation">,</span>blue 100%<span class="token punctuation">)</span> no-repeat 0px 0px /100px 100px<span class="token punctuation">,</span>
	<span class="token function">linear-gradient</span><span class="token punctuation">(</span>red 0% <span class="token punctuation">,</span>green 100%<span class="token punctuation">)</span> no-repeat 100px 0px / 100px 100px<span class="token punctuation">;</span>
<span class="token comment">/*渐变的本质是一张图片,我们通过background可以创建多张渐变的图片.
  同样是先写的会覆盖后写的.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>堆叠渐变</strong></p><p>您甚至可以将渐变与其他渐变堆叠在一起。只要顶部渐变不是完全不透明，下面的渐变仍将可见。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.stacked-linear</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span>
      <span class="token function">linear-gradient</span><span class="token punctuation">(</span>217deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span> 70.71%<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">linear-gradient</span><span class="token punctuation">(</span>127deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span> 70.71%<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">linear-gradient</span><span class="token punctuation">(</span>336deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>255<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>255<span class="token punctuation">,</span>0<span class="token punctuation">)</span> 70.71%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局网格桌布</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
	<span class="token property">background-image</span><span class="token punctuation">:</span> 
    	<span class="token function">linear-gradient</span><span class="token punctuation">(</span>
     	  transparent<span class="token punctuation">,</span>
        transparent 50%<span class="token punctuation">,</span> 
        <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.2<span class="token punctuation">)</span> 50%		      
<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token function">linear-gradient</span><span class="token punctuation">(</span>
    		to right<span class="token punctuation">,</span>
    		transparent<span class="token punctuation">,</span>
    		transparent 50%<span class="token punctuation">,</span>
   		 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.2<span class="token punctuation">)</span> 50%          
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="径向渐变-radial-gradient" tabindex="-1"><a class="header-anchor" href="#径向渐变-radial-gradient" aria-hidden="true">#</a> 径向渐变(radial-gradient)</h3><p>这个径向渐变和我们的线性渐变有什么区别?</p><p>线性渐变表示我们的变化方向均匀,径向渐变是从某一个点出发,发散开来.如同放烟花爆炸的效果,</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>yellow<span class="token punctuation">,</span>red<span class="token punctuation">)</span>
<span class="token comment">/*这个渐变效果有没有像一个太阳或者向日葵?
  此时的渐变方向由中心点的黄色到红色.
  所以我管这种点状中心发散的变化叫做径向渐变.
  
 我们刚才学线性渐变说的是颜色最浓的地方在哪里,这个图颜色最浓的地方在哪里?
  
	第一个就是我们的中心点.
	那另外一个颜色最浓的地方就在我们的四个角里面.
  
	这里中心点到一个角的距离为100%的距离,最开始的位置为0%,最后的位置为100%.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候如果有产品经理提需求,说我们颜色变化太单调了.</p><p>我们这时就需要添加更多的颜色</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>yellow<span class="token punctuation">,</span>red<span class="token punctuation">,</span>pink<span class="token punctuation">)</span>
<span class="token comment">/*这里颜色最浓的地方改变了没有?
	其实这里颜色变化最浓的地方没有变化.
  最浓的0%的黄色和100%粉色中间多了一个50%的最浓的红色*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们去聊聊颜色的极限问题.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> radial-gradient <span class="token punctuation">(</span>yellow 30%<span class="token punctuation">,</span>red 70%<span class="token punctuation">)</span>
<span class="token comment">/*中心有一个圆的颜色都是最浓的,其次四角的浓度也会变大.
  
我们可以慢慢的让颜色进行靠近*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>yellow 50%<span class="token punctuation">,</span>red 50%<span class="token punctuation">)</span>
<span class="token comment">/*/*这个时候50%的分界圆特别明显,
    这个圆的半径现在是多少?

    圆中心到四角的距离是我们100%,我们盒子宽度是300px.

    那我们盒子的对角线的长度就是300乘以根号2,再中间截掉一半的一半就是75乘	以根号2.

    打开控制台可以计算一下75*Math.pow(2,1/2)

    结果这个就为圆的半径,乘以2就是圆的直径*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以设置多个不同的颜色值</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span>
			<span class="token function">radial-gradient</span><span class="token punctuation">(</span>black 20% <span class="token punctuation">,</span>transparent 20% <span class="token punctuation">,</span>                            transparent 40%<span class="token punctuation">,</span> red 40% <span class="token punctuation">,</span>red 70%<span class="token punctuation">,</span>yellow 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*此时径向渐变就是由内往外balck黑色 0-20% tansparent透明 20%-40%   红色40%-70%全为红色*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们把颜色变化范围都改成99%</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>yellow 99%<span class="token punctuation">,</span>red 99%<span class="token punctuation">)</span><span class="token comment">/*四个角就只有一点不是我们黄色的颜色*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们去写像素来看看</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>yellow 70px<span class="token punctuation">,</span>red 70px<span class="token punctuation">)</span><span class="token comment">/*此时这个圆的直径就是140px*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>上面我们可以控制线性渐变颜色变化的方向</p><p><strong>但我们的径向渐变是不可以控制渐变变化方向的</strong>,</p><p>不可以控制渐变方向,那控制什么?</p><p><strong>我们可以控制它的圆心位置和圆的种类</strong>,同样通过第一个参数控制.</p></blockquote><p>在我们的径向渐变中有两种渐变方向</p><p><strong>1.圆形径向渐变</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at 70px 70px<span class="token punctuation">,</span> yellow 70px<span class="token punctuation">,</span>red 70px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*假如我们把这个圆心位置写在70px和70px的位置,第一个代表水平偏移70px,第二个代表竖直偏移70px.

 这是从哪里开始偏呢?这时候用到我们直角坐标系,水平向右为正,竖直向下为正,左上角就是我们的坐标圆角.

 所以这个圆心会往右偏移70px,往下偏移70px.

 此时我们的圆心在水平向右和竖直向下70px的位置,圆的半径是70px,这个圆形的边界就是70px.

 此时我们可以看到这个圆与我们矩形两边相切*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果让圆心的位置在0,0的位置呢?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at 0 0<span class="token punctuation">,</span> yellow 70px<span class="token punctuation">,</span>red 70px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*此时我们的圆心就是从矩形左上角开始排列.
  圆心跟矩形的左上角进行了重叠.只出现了四分之一的圆*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的circle at 后面可以增加圆心位置.圆心位置默认是center.在矩形的中心点</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at center center<span class="token punctuation">,</span> yellow 70px<span class="token punctuation">,</span>red 70px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以去使用top,right,left,bottom.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at top left<span class="token punctuation">,</span> yellow 70px<span class="token punctuation">,</span>red 70px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*圆心的位置与左上顶点重合*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>圆心位置除了像素值px我们同样还可以写百分比</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>background-image: radial-gradient(circle at 30% 30%, yellow 70px ,red 70px);
/*此时高度和宽度都是300px,这个30%表示一个相对于盒子宽度,一个相对于盒子的高度.
  
	一个相对于是宽度90px.高度也是90px.

  打开控制台,当我们把大盒子高度调高,你会发现这个大盒子的高度也会慢慢的往下移动.

  这是因为我们设置了圆心位置为百分比,他会乘以我们圆的高度,所以圆心位置数值会不断变大.
  
	宽度同理*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以在后面的渐变颜色中去写百分比</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at 30% 30%<span class="token punctuation">,</span> yellow 30%<span class="token punctuation">,</span>red 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*此时circle at圆心位置不在大盒子中心点时,后面颜色百分比表示多少?
   
	 原来圆心在中心点的时候,从圆心往四个顶点的距离都是一样的.
   
	 但现在圆心没有在中心点,现在圆心到四个角距离不一样了.

   但现在肯定圆心距离四个顶点有一个最远的点,从这个圆心到最远的点的线段就是100%*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>圆心到最远点的距离线段为100%;</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">radial-gradient</span><span class="token punctuation">(</span>red 80%<span class="token punctuation">,</span>black 80%<span class="token punctuation">)</span>
<span class="token comment">/*此时圆会不会只有80%的区域进行展示?为什么这时候上下左右会超过去*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候如果我们想让这个圆相切于这个正方形</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>利用Math.<span class="token function">sqrt</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span>/2=0.7071067811865476

<span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">radial-gradient</span><span class="token punctuation">(</span>red 70.7%<span class="token punctuation">,</span>black 70.7%<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的circle at这两个单词中间还可以去添加一个单位.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle 100px at 30% 30%<span class="token punctuation">,</span> yellow 30%<span class="token punctuation">,</span>red 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*这时候我们圆变小,这是为什么?
 
  这时候我们写的circle 100px就是我们渐变的线段长度.	

  我们手动去规定渐变的线段长度,从这个圆心出发,往周围100px去画这样的一个圆.
  这一块区域就是我们100%的位置,我们在这里写30%,你会发现这个圆的的宽高就是60px*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在去在颜色后面写上100%</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle 100px at 30% 30%<span class="token punctuation">,</span> yellow 100%<span class="token punctuation">,</span>red 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*此时圆就不会将盒子给完全盖住.你会发现这个圆的半径就是100px.
  和我们设置的100px是一样的.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.椭圆径向渐变 elicpsse</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>ellipse 100px 50px at center<span class="token punctuation">,</span> yellow 100%<span class="token punctuation">,</span>red 100%<span class="token punctuation">)</span>
<span class="token comment">/*这里我们手动规定椭圆的横轴半径100px,竖轴半径规定为50px.
  
   现在椭圆渐变的位置全部都是终点的位置,说明这个分界线就是椭圆的边界.
  
	椭圆边界的宽是200px,高是100px.

  换句话来说椭圆的中心点到水平方向的右边边界,或者左边是100px的距离.在竖直  方向是50p的距离*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里我们可以不去写ellipse后面的数值</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>ellipse at center<span class="token punctuation">,</span> yellow 100%<span class="token punctuation">,</span>red 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*黄色为100%盖住了盒子*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们给这个圆写小一点</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>ellipse at center<span class="token punctuation">,</span> yellow 30%<span class="token punctuation">,</span>red 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">/*现在完全就是我们的圆.
  
 打开控制台改盒子的宽度,这个圆慢慢会变成椭圆.
 
  因为我们径向渐变默认值就是椭圆的值,会根据盒子的高度和宽度去进行计算*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果搞不清楚,请用像素值测试演练.</strong></p><h3 id="重复渐变" tabindex="-1"><a class="header-anchor" href="#重复渐变" aria-hidden="true">#</a> 重复渐变</h3><blockquote><p><code>linear-gradient</code>和<code>radial-gradient</code>性能不支持自动重复颜色停止。</p><p>但是[<code>repeating-linear-gradient</code>和<code>repeating-radial-gradient</code>属性可用于提供此功能</p><p>重复的渐变线的大小是第一个色标值和最后一个色标值之间的长度。</p><p>如果最后一个色标只有一种颜色且没有色标长度，则该值默认为0，这意味着线性渐变将不重复.</p><p>并且仅当渐变的半径小于中心之间的长度时，径向渐变才会重复。渐变和最远的角落。</p></blockquote><p><strong>重复线性渐变</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">repeating-linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> red<span class="token punctuation">,</span> red 5px<span class="token punctuation">,</span> blue   5px<span class="token punctuation">,</span> blue 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重复径向渐变</strong></p><p>随着渐变的重复，颜色一遍又一遍地循环。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">repeating-radial-gradient</span><span class="token punctuation">(</span>black<span class="token punctuation">,</span> black 5px<span class="token punctuation">,</span> white 5px<span class="token punctuation">,</span> white 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>前面很多东西都是超纲的内容,正常开发中不会用到.</p><p><strong>我们必须要掌握</strong></p><p><strong>1.linear-gradient/radial-gradient的基础写法:颜色+长度 , 方向 , 圆心位置.</strong></p><p><strong>2,背景的叠加</strong></p><p><strong>椭圆了解即可.</strong></p></blockquote>`,164),i=[t];function c(l,o){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","08.yuanjiaojianbian.html.vue"]]);export{d as default};
