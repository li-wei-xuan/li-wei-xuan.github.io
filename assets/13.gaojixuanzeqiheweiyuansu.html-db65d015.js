import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const e={},l=t(`<h1 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h1><p><strong>:hover :focus :foucswithin</strong></p><p>我们给任何选择器加上冒号就叫做我们的伪类,这种伪类的存在的意义是什么?</p><p>他会凭空去多出来元素或者选择其他的元素?其实是不会.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.box</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.box:hover</span><span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token comment">/*打开控制台,页面的结构不会发生改变,元素也不会发生增加或者减少.*/</span>
	<span class="token punctuation">}</span>
	&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**伪类核心 **</p><p><strong>页面中的元素,状态发生改变,会有不同的样式</strong></p><p><strong>状态发生改变:初始状态 ==&gt; 结束状态</strong></p><blockquote><p>状态时是什么?</p><p>比如这个Hover要么我鼠标处于悬浮状态,要么我鼠标没有处于悬浮状态.</p><p>与之对应我们还有样式还有<strong>初始样式 ===&gt; 结束样式</strong></p><p>当我们悬浮到这个盒子的时候背景颜色由黑色变为了红色.</p></blockquote><hr><p>伪类选择器是以冒号开始的选择器,描述元素当前所处的状态,这时候想个问题;</p><p>如果我们把冒号以及后面的hover删除后会出现什么?</p><p>然后盒子的的颜色就变成了绿色,不管加没加上hover,都是对盒子的样式进行描述</p><p>所以简单说.</p><p>当我们不写伪类选择器之后,他会变成普通的选择器.现在我们重新去写.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token comment">/*现在我有一个需求,当我鼠标放在ul上面时我想要让li元素变成绿色*/</span>
<span class="token selector">.box .list li:hover</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>	
		<span class="token punctuation">}</span>
<span class="token comment">/*把:hover去掉,可以看出这个本质上还是对li设置样式,
  还是是对li设置样式,加上了hover之后也是对这个li设置样式.
  所以说去掉伪类选择器它会变成一个普通的选择器,选中的元素和之前的是一样的.*/</span>
&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
		&lt;ul class=<span class="token string">&quot;list&quot;</span>&gt;
			&lt;li&gt;111&lt;/li&gt;
			&lt;li&gt;222&lt;/li&gt;
		&lt;/ul&gt;
	&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.box .list <span class="token property">li</span><span class="token punctuation">:</span>hover<span class="token punctuation">;</span>
.box .<span class="token property">list</span><span class="token punctuation">:</span>hover li<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这两个选择器是不是相同的选择器,选中的元素相不相同?选中的元素是相同.</p><p>但因为我们选中的条件不一样,最后呈现的效果也会不一样.</p><p>第一个选择器做了什么?</p><p>第一个首先选中类名为box下面的.list,.list下面的li.</p><p>当我鼠标放在这个li标签的时候我们将这个li里面的字体颜色变为绿色.</p><p>换而言之也就是这个样式我们是针对li这个元素去设置的.当鼠标放在自己的li上面才会变成绿色.</p><p>第二个选择器是当鼠标放在.list也就是ul的时候,这个条件就触发了.</p><p>只是我们是对里面的li进行样式设置.</p><p>ul是一个大盒子,只要我们鼠标进入这个大盒子,里面的所有lii的字都会变成绿色;*/</p></blockquote><p><strong>理解方式:学会翻译</strong>,下意识从左往右读</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">&lt;div class=&quot;box&quot;&gt;
		&lt;ul class=&quot;list&quot;&gt;
			&lt;li class=&quot;item&quot;&gt;
				&lt;a href=&quot;&quot;&gt;我是a&lt;/a&gt;
				&lt;p&gt;p1&lt;/p&gt;
				&lt;p&gt;p2&lt;/p&gt;
			&lt;/li&gt;
		&lt;/ul&gt;
	&lt;/div&gt;

.box &gt; list &gt; li.item &gt; a:hover + p + p</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span><span class="token comment">/*此时当我们鼠标放在a标签,p2变成了绿色*/</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>li.item是什么意思?</p><blockquote><p>li是不是一个选择器,它叫标签选择器, .item他是一个类名选择器,</p><p>标签和类名都是选择器,这两个中间没有空格,所以他们是一个并列条件.</p><p>这里只有一个元素,标签名是li类名是item,所以我们简写成li.item,这个精确了我们选择的范围</p></blockquote><p><strong>介绍常见的的伪类选择器(介绍元素/标签的状态)</strong></p><ul><li><strong>:link 链接未被访问时</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*没有访问过的a标签的样式*/</span>
<span class="token selector">a:link</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>:visited: 被访问过的,当我们a标签被访问过了之后,他会触发伪类选择器</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:visited</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>:focus 当链接和Input被使用tab键选中或激活时</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:focus</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>:active 元素被激活时</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">a:active</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span><span class="token comment">/*鼠标按下去未抬起就是激活状态*/</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>:active适用于很多标签 除了a标签,input,div标签同样适用</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">div:active</span><span class="token punctuation">{</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	&lt;div&gt;1111&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们甚至可以做一些很神奇的操作</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token selector">div</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>1.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
		<span class="token property">transition</span><span class="token punctuation">:</span> .3s<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">div:active</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span><span class="token comment">/*会影响布局,加一些数字可以看到*/</span>
		<span class="token punctuation">}</span>
	&lt;div&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>checked 被勾选的状态(适用于input type=&quot;checkbox/radio&quot; )</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.checkbox:checked</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
&lt;input type=<span class="token string">&quot;checkbox&quot;</span> class=<span class="token string">&quot;checkbox&quot;</span>&gt;
<span class="token comment">/*这个和刚才的active有什么区别?
  active需要你鼠标不停的按住,鼠标按下去才能出现效果,鼠标抬起来就没有效果了.
  然而这个input你只要点击一次就有效果了,这就是一个非常强大的进步.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.checkbox:checked +.box</span><span class="token punctuation">{</span>
    				<span class="token property">width</span><span class="token punctuation">:</span>700px<span class="token punctuation">;</span>
    				<span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>
  					<span class="token property">background-color</span><span class="token punctuation">:</span>skyblue<span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
&lt;input type=<span class="token string">&quot;checkbox&quot;</span> class=<span class="token string">&quot;checkbox&quot;</span>&gt;
&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token comment">/*点击图片放大和缩小*/</span>	
<span class="token selector">.box</span><span class="token punctuation">{</span> 
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>1.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
		<span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.checkbox</span><span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
		<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.checkbox:checked~.box</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token comment">/*按下checkbox*/</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.checkbox:checked</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
&lt;input type=<span class="token string">&quot;checkbox&quot;</span> class=<span class="token string">&quot;checkbox&quot;</span>&gt;
&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>checkbox状态开启和状态关闭(单个区块)</strong></p><hr><p><strong>radio(多个区域,选中一个,别的就不选中)</strong></p><p>这里就可以去完成一个有意思效果</p><p>有三块区域正常颜色都为天蓝色,我点击哪一块就变成粉色,点击另一块其他块恢复天蓝色,这块又变成粉色.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> 	<span class="token selector">&lt;ul class=&quot;list&quot;&gt;
        &lt;li&gt;
            &lt;input type=&quot;radio&quot; name=&quot;box&quot;&gt;
            &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;input type=&quot;radio&quot; name=&quot;box&quot;&gt;
            &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;     
        &lt;/li&gt;
        &lt;li&gt;
            &lt;input type=&quot;radio&quot; name=&quot;box&quot;&gt;
            &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
        &lt;/li&gt;
    &lt;/ul&gt;

		ul</span><span class="token punctuation">{</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 		<span class="token selector">.list &gt; li</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		<span class="token selector">.list &gt; li &gt; input</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
          	<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        
        <span class="token punctuation">}</span>
    <span class="token selector">.list &gt; li &gt; .box</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> .5s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

   <span class="token selector">.list input:checked + .box</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>:not(select)反选</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul&gt;li:not(:first-child)</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span><span class="token comment">/*除了第一个其他全部变为红色*/</span>
		<span class="token punctuation">}</span>
	&lt;ul&gt;
		&lt;li&gt;1&lt;/li&gt;
		&lt;li&gt;2&lt;/li&gt;
		&lt;li&gt;3&lt;/li&gt;
		&lt;li&gt;4&lt;/li&gt;
	&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div:not(.box)</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;1&lt;/div&gt;
&lt;div&gt;2&lt;/div&gt;
&lt;div&gt;3&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构性伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构性伪类选择器" aria-hidden="true">#</a> 结构性伪类选择器</h2><p><strong>选择器可以选择特定(类名)的元素,结构性伪类选择器可以通过序号来进行选择.</strong></p><ul><li><strong>nth-child 根据序号进行选择 优先按照序号选中元素,再判断类型(优先序号)</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.list&gt;li:nth-child(1)</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token comment">/*nth是第n个的意思，child是儿子的意思 
   根据序号进行选择.
  这里表示选中ul下面的li.  第一个子元素且为li的元素
  这里可以写2n表现2的倍数会被选择,3n表示3的倍数,这里写n+1表示的是所有元素,没有倍数默认从0开始把     所有元素选中*/</span>
		<span class="token punctuation">}</span>
&lt;ul class=<span class="token string">&quot;list&quot;</span>&gt;
		&lt;li&gt;1&lt;/li&gt;
		&lt;li&gt;2&lt;/li&gt;
		&lt;li&gt;3&lt;/li&gt;
		&lt;li&gt;4&lt;/li&gt;
		&lt;li&gt;5&lt;/li&gt;
		&lt;li&gt;6&lt;/li&gt;
	&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>咋们来看看另外一种情况</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">li:nth-child(2)</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token comment">/*2和5都变成了紫色,因为在我们没有规定父元素的情况下，页面中所有的li元素都会选中.
     因此这里我们不但选中了ul下排在第二个并且是li的元素.
      同时也选中了div下排在第二个并且是li的子元素.*/</span>
    <span class="token comment">/*如果要解决这种情况，得限制下li的选择范围*/</span>
 <span class="token selector">ul &gt; li:nth-child(2)</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span><span class="token comment">/*这时只有2变为了紫色*/</span>
    <span class="token punctuation">}</span>
&lt;ul&gt;
	&lt;li&gt;1&lt;/li&gt;
	&lt;li&gt;2&lt;/li&gt;
	&lt;li&gt;3&lt;/li&gt;
&lt;/ul&gt;
&lt;div&gt;
   	&lt;li&gt;4&lt;/li&gt;
	&lt;li&gt;5&lt;/li&gt;
	&lt;li&gt;6&lt;/li&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>**第一种写法：an+b / an-b **</p><p><strong>例如:2n+1 n会从0开始每次加1，因此2n+1的结果是：n为0时，2n+1=0*2+1=1；n为1时，2n+1=3</strong></p><p><strong>第二种写法: an 例如: 2n 选中所有满足2的倍数的子元素</strong></p><p><strong>第三种写法：Odd(符合条件的奇数子元素) / even选中所有满足条件的偶数子元素</strong></p></blockquote><ul><li>**nth-of-type 根据序号进行选择 **</li><li><strong>忽略其他类型的标签,只看目标标签,直接给第几个染色.</strong></li><li><strong>优先类型</strong></li><li>看起来和nth-child一样,一样的数字选中也行,但是还是有所区别的</li></ul><p>nth-of-type精准识别，什么叫精准识别呢？我们来看一下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">&lt;ul&gt;
		&lt;li&gt;1&lt;/li&gt;
  		&lt;p&gt;1.1&lt;/p&gt;
		&lt;li&gt;2&lt;/li&gt;
		&lt;li&gt;3&lt;/li&gt;
	&lt;/ul&gt;
&lt;div&gt;
    &lt;li&gt;4&lt;/li&gt;
    &lt;p&gt;1.1&lt;/p&gt;
	  &lt;li&gt;5&lt;/li&gt;
		&lt;li&gt;6&lt;/li&gt;
&lt;/div&gt;

&lt;style&gt;
    li:nth-of-type(2)</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span><span class="token comment">/*2和5都变为了橘色*/</span>
    <span class="token punctuation">}</span>
    <span class="token selector">ul &gt; li:nth-of-type(2)</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
        <span class="token comment">/*2变为橘色，它能找到所有子元素里的li，并且找到第二个li，不管它前面有没有其他元素*/</span> 
    <span class="token punctuation">}</span>
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>:nth-last-child(),:nth-last-of-type ()倒数，支持公式</strong></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;ul&gt;
	&lt;li&gt;1&lt;/li&gt;
	&lt;li&gt;2&lt;/li&gt;
	&lt;li&gt;3&lt;/li&gt;
&lt;/ul&gt;
&lt;div&gt;
  &lt;li&gt;4&lt;/li&gt;
	&lt;li&gt;5&lt;/li&gt;
	&lt;li&gt;6&lt;/li&gt;
&lt;/div&gt;

li:nth-last-child(1)</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span><span class="token comment">/*3和6同时变为橘色*/</span>
    <span class="token punctuation">}</span>
  <span class="token selector">ul &gt; li:nth-last-child(1)</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span><span class="token comment">/*3变为橘色*/</span>
   <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2><ul><li><strong>[attr]用的中括号[],</strong></li></ul><blockquote><p>学完JS之后你们会非常喜欢它.因为我们去访问属性都是用中括号.</p><p>之前我们给一个元素加样式的方式是通过class，id或者标签名来选中这个元素.</p><p>除此之外我们还可以使用这个属性来选中元素给它添加样式。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">/*这个叫做简写*/</span>

<span class="token selector">li[class=&quot;box&quot;]</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token comment">/*这样依然能够去选中*/</span>
&lt;ul&gt;
	&lt;li class=<span class="token string">&quot;box&quot;</span>&gt;1&lt;/li&gt;
	&lt;li&gt;2&lt;/li&gt;
	&lt;li&gt;3&lt;/li&gt;
&lt;/ul&gt;
&lt;div&gt;
  &lt;li&gt;4&lt;/li&gt;
	&lt;li&gt;5&lt;/li&gt;
	&lt;li&gt;6&lt;/li&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自由度很高,可以只通过属性名去选中</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input[type=&quot;submit&quot;]</span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token comment">/*input元素*/</span>
<span class="token selector">input[name]</span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token comment">/*只有有name属性的input才会被选中*/</span>
	<span class="token punctuation">}</span>
	&lt;input type=<span class="token string">&quot;submit&quot;</span> name=<span class="token string">&quot;box&quot;</span>&gt;
	&lt;input type=<span class="token string">&quot;submit&quot;</span>&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;!--首先我们可以使用属性名称来选中元素--&gt;
&lt;style&gt;
    div[class]</span><span class="token punctuation">{</span><span class="token comment">/*选中所有有class的div*/</span>
        <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token comment">/*1和2都变为粉色*/</span>
    <span class="token punctuation">}</span>
    <span class="token selector">[class]</span><span class="token punctuation">{</span><span class="token comment">/*选中所有有class属性的元素*/</span>
        <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token comment">/*1、2、3全变为粉色*/</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;

&lt;div class=<span class="token string">&quot;main&quot;</span>&gt;1&lt;/div&gt;
&lt;div class=<span class="token string">&quot;container&quot;</span>&gt;2&lt;/div&gt;
&lt;p class=<span class="token string">&quot;box&quot;</span>&gt;3&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[attr^=&quot;&quot;]\`属性值以谁开头</strong>(模糊搜索)</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">1.  li[class=&quot;box&quot;]</span><span class="token punctuation">{</span><span class="token comment">/*这样不能选中以box作为类名开头的*/</span>
			<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

<span class="token selector">2.  li[class^=&quot;box&quot;]</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token comment">/*^表示以什么开始,这里表现以box开始,以后我们去学正则表达式就会说到*/</span>
		<span class="token punctuation">}</span>

<span class="token selector">3.  li[class^=&quot;b&quot;]</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token comment">/*也能选中*/</span>
<span class="token punctuation">}</span>
&lt;ul&gt;
	&lt;li class=<span class="token string">&quot;box1&quot;</span>&gt;1&lt;/li&gt;
	&lt;li class=<span class="token string">&quot;box2&quot;</span>&gt;2&lt;/li&gt;
	&lt;li class=<span class="token string">&quot;smallbox1&quot;</span>&gt;3&lt;/li&gt;
	&lt;li class=<span class="token string">&quot;smallbox2&quot;</span>&gt;4&lt;/li&gt;
	&lt;li class=<span class="token string">&quot;smallbox3&quot;</span>&gt;5&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;li class=&quot;smallbox1 box3&quot;&gt;3&lt;/li&gt;

li[class^=&quot;box&quot;]</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
 <span class="token comment">/*能不能去选中第三个元素,这里是不能去选中的.
   这里是因为属性选择器选择的时候,不能按照普通的class/id这种东西划分.
   大家可以把smallbox1 box3看成是属性值 这个属性值整体是以smallbox1开头,所有没有办法去    选中box3*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[attr~=&quot;&quot;]属性中包含某值：</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;li class=&quot;smallbox1 box3&quot;&gt;3&lt;/li&gt;
li[class~=&quot;box3&quot;]</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span><span class="token comment">/*3变为橘色，因为他有box3的类名值*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们来说以什么结束,$<code>[attr$=&quot;&quot;]</code>属性值以谁结尾</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">li[class$=&quot;1&quot;]</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token comment">/*此时第一个元素变成了红色*/</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>比如我们写在中间呢?[attr*=&quot;&quot;]</code>属性值中包含某个字符</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">a[href*=&quot;baidu&quot;]</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
   <span class="token comment">/*百度和百度网盘的颜色变为了橘色，因为只有这两个标签的href属性里有baidu*/</span>
    <span class="token punctuation">}</span>
 <span class="token selector">a[href*=&quot;.com&quot;]</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span><span class="token comment">/*三个a标签的字体都变为了绿色，因为他们的href属性里都有.com*/</span>
    <span class="token punctuation">}</span>
  &lt;div&gt;
    &lt;a href=<span class="token string">&quot;https://www.baidu.com&quot;</span>&gt;百度&lt;/a&gt;
    &lt;a href=<span class="token string">&quot;https://pan.baidu.com&quot;</span>&gt;百度网盘&lt;/a&gt;
    &lt;a href=<span class="token string">&quot;https://www.google.com&quot;</span>&gt;谷歌&lt;/a&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h2><blockquote><p>大家看到伪元素一定会想到伪类.</p><p>伪类表示元素所处的一种状态,用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的.</p><p>比如说，当用户悬停在指定的元素时，我们可以通过:hover来描述这个元素的状态。</p><p>而伪元素表示为假的元素,难道页面还会有假的元素吗?</p><p>伪元素用于创建一些不在文档树中的元素，并为其添加样式。</p><p>虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。</p><p>如说，我们可以通过:before来在一个元素前增加一些文本，并为这些文本添加样式。</p></blockquote><p><strong>伪元素和伪类的区别：</strong></p><blockquote><p>伪类的操作对象是文档树中已有的元素.</p><p>而伪元素则创建了一个文档树外的元素.使用css创建的标签</p><p>因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素。</p></blockquote><p><strong>:first-letter 首行首字</strong></p><p>只能用于块级元素。用于设置附属元素的第一个字母的样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.par:first-letter</span><span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
&lt;p class=<span class="token string">&quot;par&quot;</span>&gt;我要忘了你的样子&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:first-line 首行文本状态**</p><p>只能用于块级元素。用于设置附属元素的第一个行内容的样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.par</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token selector">.par:first-line</span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
&lt;p class=<span class="token string">&quot;par&quot;</span>&gt;我要忘了你的样子&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>::selection 被选中的文本的样式修改</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.par::selection</span><span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>:before :after</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	&lt;p class=<span class="token string">&quot;yunmu&quot;</span>&gt;云牧说 你好我好大家好&lt;/p&gt;
	&lt;p class=<span class="token string">&quot;students&quot;</span>&gt;<span class="token property">同学们说</span><span class="token punctuation">:</span>谢谢<span class="token punctuation">,</span>你也好&lt;/p&gt;
	&lt;p class=<span class="token string">&quot;yunmu&quot;</span>&gt;<span class="token property">云牧</span><span class="token punctuation">:</span>天气不错&lt;/p&gt;
	&lt;p class=<span class="token string">&quot;students&quot;</span>&gt;<span class="token punctuation">:</span><span class="token property">同学们说</span><span class="token punctuation">:</span>天气不错&lt;/p&gt;
<span class="token comment">/*所有的p标签主语都需要写出来,每一次写一个p标签手动添加主语还是挺麻烦.
  那我这个\`云牧说\`这个字想要变一下颜色或者调大一点,可能我们还要单独写一个span把\`云牧说\`    包裹.
  这里如果我们要加上一些导语和引语的时候,需要专门添加span.
  其实重要的部分是云牧说后面的内容,前面只是一个解释说明是谁说的.
  我们现在就给大家抛出一个问题,有没有更好的办法解决写元素部分公共的部分*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么是伪元素,</p><p><strong>由CSS生成的元素就是伪元素</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.yunmu::before</span><span class="token punctuation">{</span>
		<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;云牧说:&quot;</span>
	<span class="token punctuation">}</span>
<span class="token comment">/*页面此时也有云牧说这个字,但是在html结构中有没有云牧说这个字.
  也就是云牧说这个字不是由html生成而是由css生成的*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>:before伪元素的特性</strong></p><blockquote><p><strong>在选中元素正文内容之前插入一段文本</strong></p><p>打开控制台,这个伪元素是一个什么类型的元素,他是一个行内元素看computed,</p><p>其实这里其实不止插入一段文本,而是在<strong>选中元素正文内容之前插入行内元素</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.yunmu::before</span><span class="token punctuation">{</span>
		<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;云牧说:&quot;</span><span class="token punctuation">;</span>
		<span class="token property">color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
<span class="token comment">/*我们甚至可以去写文字颜色,背景颜色边框等,我们可以把伪元素完全当成行内元素*/</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.yunmu::before</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
                <span class="token property">heigth</span><span class="token punctuation">:</span>100px
       <span class="token punctuation">}</span><span class="token comment">/*不能设置宽高*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>before写完了我们来聊另一个需求.</p><p>我给大家剖析下我这个人,我喜欢在说话聊天结束之后添加摸摸哒.那我怎么解决这个需求</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.yunmu:after</span><span class="token punctuation">{</span>  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;摸摸哒&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>:before和:after 最大的区别是一个在正文内容之前,一个在正文内容最后</strong></p><p><strong>拓展:</strong></p><blockquote><p>**它既然是一个行内元素,我们能不能把它变为一个块元素 **</p><p><strong>可以变成块元素说明可以支持display, 不光可以支持display还可以去支持float和position.</strong></p><p><strong>这就相当于游览器每一个标签都默认送你了两个小盒子, 用来做css样式的拓展</strong></p><p><strong>页面中存在很多无意义的标签是不友好的</strong></p><p><em><em>但是不是每个标签都存在before/after,这个盒子必须放得下内容</em>,这个盒子必须是双标签</em>*</p><p><strong>单标签没有内部:就没有办法在内部创建before和after</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.inner</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.yunmu:before</span><span class="token punctuation">{</span>
		<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;云牧说&quot;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.yunmu::after</span><span class="token punctuation">{</span>
		<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;摸摸哒&quot;</span>
	<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;yunmu&quot;</span>&gt;
		&lt;div  class=<span class="token string">&quot;inner&quot;</span>&gt;&lt;/div&gt;
<span class="token comment">/*此时说明伪元素遇到块级元素,块级元素独占一行,这两行文本各自在上下两行把位置给占下来了*/</span>
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>content的意义</strong></p><blockquote><p><strong>content:是伪元素文本所在的区域</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.yunmu:before</span><span class="token punctuation">{</span>
		<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;云牧说&quot;</span><span class="token punctuation">;</span>
		<span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> pink
<span class="token comment">/*如果把content删掉伪元素就消失了,这里我们是不是证明我们一定要在content里面添加文本啊?
  其实不是的.这里其实可以去推断content这条属性必须存在*/</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.yunmu:before</span><span class="token punctuation">{</span> content=<span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token comment">/*这个元素盒子依然存在*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>当不需要文本时,请写&quot;&quot;,如果删除content样式,伪元素会消失</strong></p><p><strong>content:&quot;&quot;;表示激活伪元素</strong></p><hr><p>我们再来看下定位position,大家肯定会想到绝对定位和相对定位,</p><p>我们但凡谈到绝对定位,我们往往会去想当前盒子所在的层级关系,我们来想想我们的伪元素的层级在哪里?</p><p>在我们选中元素之中.</p><p><strong>A元素的伪元素在A元素的子元素的层级中</strong>.不是兄弟关系,而是父子关系</p><p><strong>A(父) 伪元素(子)</strong></p><p><strong>假如我们伪元素想参照当前的盒子定位</strong></p><blockquote><p><strong>伪元素:positon:absolute;</strong></p><p><strong>当前元素:position:relative;</strong></p></blockquote><p><strong>但是我们写代码写的飘一点,我们给伪元素添加absolute,给当前元素的父级添加相对定位,这就是我们定位的知识了.</strong></p><p><strong>面试:如果问你伪元素和伪类的特点与区别</strong></p><blockquote><p><strong>伪元素其实是凭空生成的一个元素,使用双冒号.</strong></p><p><strong>伪类:某种状态的原来的元素,使用单冒号</strong></p><p>比如我们原来的元素鼠标悬浮上去改变样式,那我们就用伪类去表示它,只是元素处于第二状态</p></blockquote><p>::before和::after的注意事项</p><p>1.默认display: inline；</p><p>2.必须设置content属性，否则一切都是无用功；</p><p>3.默认user-select: none，就是::before和::after的内容无法被用户选中的；</p><p>4.伪元素和伪类结合使用形如：.target:hover::after。</p>`,126),i=[l];function p(c,o){return s(),a("div",null,i)}const d=n(e,[["render",p],["__file","13.gaojixuanzeqiheweiyuansu.html.vue"]]);export{d as default};
