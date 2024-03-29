import{_ as p,p as e,q as i,s,R as n,t as o,Y as a,n as c}from"./framework-aa5c4115.js";const l={},u=a(`<h1 id="过渡" tabindex="-1"><a class="header-anchor" href="#过渡" aria-hidden="true">#</a> 过渡</h1><p>给岁月以文明,而不是给文明以岁月---出自三体,</p><blockquote><p>有了时间才会产生变化.</p><p>我们玩游戏.例如英雄联盟的时候你无论是传送还是释放技能是不是也需要一个施法时间.</p><p>过渡是一种动画,可以从一种状态过渡到另一种状态.</p><p>比如按钮从常规状态变成被按下的状态,正常情况下,这种变化是瞬间完成的.</p><p>至少是游览器会尽快的完成这种状态变换.</p><p>在点击或者按下按钮的时候.游览器会重新计算页面新外观,在几毫秒之内进行重绘.</p><p>而我们在应用过渡的时候,我们要告诉游览器完成各种变换需要多长时间.</p><p>然后游览器再计算在此期间屏幕上该显示哪些过渡状态.</p></blockquote><p><strong>有时间才能产生变化.</strong></p><p>变化分为开始状态和结束状态.</p><p><strong>过渡需要的条件</strong></p><blockquote><p>开始状态 结束状态 过程消耗的时间</p></blockquote><p>我们现在这个盒子有没有过渡时间,现在只有一个状态宽100高100背景为绿色</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.box</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>	
		<span class="token punctuation">}</span>
    <span class="token selector">.box</span><span class="token punctuation">{</span>
    		<span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
        <span class="token comment">/*我们来写第二种状态修改这个状态,现在开始状态有了,结束状态有了,
        现在有没有过渡效果呢?这里好像样式从100到300的时候没有变化时间,我们去修改变化时		间*/</span>
		<span class="token punctuation">}</span>
	&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
     <span class="token property">transition</span><span class="token punctuation">:</span>1s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    <span class="token comment">/*这时候还没看到过渡效果,为什么.因为这时候我们没有状态改变的指令和触发条件.
    我们先写一个样式再写一个样式是不会发生样式改变,这里直接会根据我们样式优先级去进行覆盖.
    这里我们要去写一个hover伪类*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box:hover</span><span class="token punctuation">{</span>
    		<span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    	<span class="token punctuation">}</span>
<span class="token comment">/*初始状态宽100高100背景颜色为红色.
当我鼠标放上去时候花了一秒种的时间由宽度100变到了宽度300,这就是过渡效果*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过渡</strong></p><p><strong>描述状态发生改变过程中具有的特性</strong>,</p><blockquote><p>比如上面盒子宽度状态由100变到了300,</p><p>其实就像变形金刚一样,,就算从汽车变成人形,发生了形态上的变化,它也是需要一个时间.</p><p>这个变化的时间就是我们状态发生改变的过程,这个才能说成是我们状态发生改变的特性.</p><p>我们今天晚上就是学习<strong>变化过程中有哪些东西可以去进行控制</strong></p><p><strong>我们之前的写transition和background类似,都是复合属性</strong></p></blockquote><h3 id="过渡时间-tansition-duration" tabindex="-1"><a class="header-anchor" href="#过渡时间-tansition-duration" aria-hidden="true">#</a> 过渡时间: tansition-duration</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*我们重新去写下,这个盒子依旧能够展开,我们还可以去修改时间*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>时间单位</strong></p><p><strong>默认是0s</strong></p><p><strong>单位:s(秒) ms(毫秒)</strong> <strong>1s = 1000ms</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span><span class="token property">transition-duration</span><span class="token punctuation">:</span> 300ms=0.3s<span class="token punctuation">}</span>
<span class="token comment">/*这个和写秒是一样的,我们这里的毫秒满1000去进行进一*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们这里可以去写0s吗?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">transition-duration</span><span class="token punctuation">:</span>0s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*当然也是这样的,这里0s就是相当于我们鼠标放上去过渡就立马结束了.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里面可以去写负数吗?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">transition-duration</span><span class="token punctuation">:</span>-1s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*我们去写负数是没有意义的*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我现在想问问,我们的过渡时间写在了哪里?</p><p>我们把transition-duration写在了一个原始的盒子里边.</p><p>因为我们要赋予这个盒子的过渡时间,也就是这块盒子具有了属性样式发生改变的所所要表现的效果.</p><p>如果我不写在原始元素上可能会发生问题,所以我们<strong>通常是写在原始元素上面</strong>.</p><p>不会写在伪类上面的,那我们写在伪类上会发生什么效果</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box:hover</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span> <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*这个盒子有没有过渡效果?有.那么写在hover上好像也是有.
那我们来看看写在原始元素上和hover有什么区别?
这时的区别是鼠标移入的时候缓慢张开,鼠标移开的时候瞬间退回来*/</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.我们对比来观察一下写在原始元素上面</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*可以看到无论是开始还是结束,元素都具有过渡时间.
  而写在hover上只有当我们鼠标移入元素才有过渡时间,移出元素就没有了*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>写在伪类上(开始有,结束没有)</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.box:hover</span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span> <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*现在原始元素有几条样式,哪三条,现在是只有我们宽度高度背景.
当我们鼠标放到元素盒子的一瞬间,盒子有几条样式,是四条.
我们宽度100px就没有效果了,被我们移上去的时候覆盖成了宽度300px.
所以说我们现在移入时有宽度,高度,背景颜色和过渡时间.

当我们写在伪类的时候一开始时宽度100px,后面我们设置移入属性的时候发现宽度要张开,张开到300px.
然后他又发现身上还有transition-duration:1s,张开时要遵循这条样式花一秒钟的时间去张开.
当我现在把鼠标从这个盒子上拿开有几条?说明我移入样式消失了,此时只有原来元素盒子里面的三条样式.
所以说鼠标离开的只有三条样式,接受到一条指令宽度要变为100px,
这时候回来的时候盒子已经没有过渡时间这个样式,所以他瞬间会变回来.
当触发Hover移入样式的时候里面的元素才会生效.
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过渡时间写在不同的位置 效果不一样</strong></p><p><strong>1.开始没有 结束没有</strong></p><blockquote><p>​ 什么都不写,默认就是这样,没有过渡时间</p></blockquote><p>**2.开始有 结束有 **</p><blockquote><p>原始元素上</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**3.开始没有 结束有 **</p><blockquote><p><strong>元素上1s hover:0s</strong></p></blockquote><blockquote><p>鼠标移入的时候瞬间展开也就是说在我们的Hover效果当中肯定是没有过渡时间.不然移入肯定是会接收到过渡时间</p><p>移开的时候相当于Hover失效,这样回到原始元素本身肯定有过渡时间了.我们的元素才能慢慢的过渡回原来的效果,</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">transition</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*现在移入移出都有过渡属性*/</span>
<span class="token selector">.box:hover</span><span class="token punctuation">{</span> <span class="token property">transition-duration</span> <span class="token punctuation">:</span> 0s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*我们只需用户在放上去的一瞬间下面的样式把上面的覆盖,我们只需写成0;*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.开始有 结束没有</strong></p><blockquote><p><strong>:hover:1s</strong></p><p>我们就只需给予移入时候过渡时间,移出回到原始元素的时候没有过渡时间就行了.</p></blockquote><p><strong>接下来我们来聊聊过渡开始和结束的问题</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.box</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token comment">/*我们现在想实现当我们鼠标放在上面向右移动100px,怎么实现?*/</span>

<span class="token selector">.box</span><span class="token punctuation">{</span>	
  		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    	<span class="token property">transition-duration</span><span class="token punctuation">:</span>1s<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token selector">.box:hover</span><span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  <span class="token punctuation">}</span><span class="token comment">/*这块盒子没有出现过渡效果*/</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过渡是怎么产生的?</strong></p><blockquote><p>假如我现在站在起始点0m的位置我要跑到100m的位置,匀速奔跑我花了10s,</p><p>如果电脑知道了.它是不是就能知道我在0s到10s这个时间段任何一个时刻t我所在的位置</p><p>公式(100-0)/10*t当前所在的位置,这里不讨论变速的情况,此时游览器也得经历这个过程,</p><p>必须要知道我们的过渡时间,开始是0px结束是100px所花得时间是1s,</p><p>换句话说就是游览器能知道这1s内我们元素的任何位置.但现在游览器不干了.</p><p>这里初始位置我们都知道left为0px,结束为100ox,过渡时间为1s.</p><p>虽然我们知道,但是游览器不知道.</p><p>所以我们<strong>写过渡效果必须明确写出变化开始,结束,时间</strong>,缺一不可.</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  	  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> 
      <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> 
      <span class="token property">transition-duration</span><span class="token punctuation">:</span>1s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token selector">.box:hover</span><span class="token punctuation">{</span>  <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过渡效果的延时-transition-delay" tabindex="-1"><a class="header-anchor" href="#过渡效果的延时-transition-delay" aria-hidden="true">#</a> 过渡效果的延时(transition-delay)</h3><p><strong>表示这个变化效果要延后多少秒进行过渡</strong></p><p><strong>默认是0s</strong></p><p>等用户鼠标放稳后再移动</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">transition-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*开始的时候有延迟,结束的时候也有延迟,默认是0s*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这里却可以为负数</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">transition-delay</span><span class="token punctuation">:</span> -0.5s<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">/*表示这个盒子执行一个动画,假如这个元素由0的位置变到100,花了1s.
  但是我鼠标放上去的一瞬间相当于延时为负数,提前0.5s动.
  大家可能会觉得我鼠标放上去前0.5s它动了,但是只有当我们放上去才能看到效果.
  是鼠标放上去的一瞬间他已经运动了0.5s,*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  	  <span class="token property">transition-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
	  <span class="token property">transition-delay</span><span class="token punctuation">:</span> -1s<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token selector">.box:hover</span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">/*说明我们整体的运动有一秒钟我们看不到了,因为他已经提高走过去了*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这个负数表示 整体运动时间 = duration + delay</strong></p><blockquote><p>假如我们的过渡时间是两秒钟,延迟是两秒,整体是要花四秒钟的,先等两秒,运动2秒;</p><p>假如延迟delay是负数-5s的话,我们运动时间是10s,虽然不会时光穿越.却可以让它提前5s跑,所以我们只能看到剩下的5秒.那么过渡一开始就会跳到一半的位置.</p><p>但是我运动是2秒,延时是-3秒,延时加运动时间为负数.</p><p>就相当于它已经在终点站了一秒钟了.整体运动时间就为0秒,不产生时间的过渡.不可能为负数的.</p></blockquote><h3 id="过渡的属性-transition-property" tabindex="-1"><a class="header-anchor" href="#过渡的属性-transition-property" aria-hidden="true">#</a> 过渡的属性 transition-property:</h3><blockquote><p>我们控制盒子过渡的时候,不想让所有的东西都进行过渡,</p><p>比如我里面写了过渡的高度和宽度和背景颜色,但这是我只想让它宽度和背景颜色产生过渡效果,怎么办?</p><p>这就需要我们的transition-property;<strong>规定过渡作用于元素哪条样式上面</strong></p><p><strong>1.all 对所有可能的样式都生效 默认</strong></p><p><strong>2.none 没有过渡属性</strong></p><p><strong>多个值用逗号隔开</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.box</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
		<span class="token property">transition-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
    	<span class="token property">transition-property</span><span class="token punctuation">:</span> width<span class="token punctuation">,</span>background-color<span class="token punctuation">;</span>	
	<span class="token punctuation">}</span>
	<span class="token selector">.box:hover</span><span class="token punctuation">{</span>
		 	<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
		 	<span class="token property">height</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>
    		<span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    	<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以让一张图片过渡到另一张图片</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>	
    	<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>  
    	<span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> 
    	<span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>1.jpg<span class="token punctuation">)</span></span> center/cover<span class="token punctuation">;</span>
  		<span class="token property">transition-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box:hover</span><span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>1.jfif<span class="token punctuation">)</span></span> center/cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过渡的速率-transition-timing-function" tabindex="-1"><a class="header-anchor" href="#过渡的速率-transition-timing-function" aria-hidden="true">#</a> 过渡的速率(transition-timing-function)</h3><blockquote><p>其实我们每个人跑步可能都不一样.</p><p>曹刿(guì)论战不知道大家读过没有?</p><p>跑步有的人是一鼓作气再而衰,三而竭 一开始比较猛,后面就痿了.</p><p>有的人属于稳步加速,越跑越快.</p><p>有的又是后热型的.以为是个青铜没想到是个王者.</p><p>所以我们的变化速率就是<strong>描述什么时候变化比较快,什么时候变化比较慢</strong>.</p><p>接下来我们来研究研究跑法.</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.list</span><span class="token punctuation">{</span>
  		<span class="token property">width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span>1px solid black<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.list li</span><span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
			<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">margin</span><span class="token punctuation">:</span>10px 0<span class="token punctuation">;</span>
		  	<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
			<span class="token property">transition-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.list:hover li</span><span class="token punctuation">{</span>
			<span class="token property">left</span><span class="token punctuation">:</span>800px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.list li:nth-child(1)</span><span class="token punctuation">{</span>
			<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease<span class="token punctuation">;</span><span class="token comment">/*默认值,开始和结束慢速,中间加速.*/</span>
		<span class="token punctuation">}</span>
	&lt;ul class=<span class="token string">&quot;list&quot;</span>&gt;
		&lt;li&gt;ease&lt;/li&gt;
		&lt;li&gt;linear&lt;/li&gt;
		&lt;li&gt;ease-in&lt;/li&gt;
		&lt;li&gt;ease-in-out&lt;/li&gt;
		&lt;li&gt;linear&lt;/li&gt;
	&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.list li:nth-child(2)</span><span class="token punctuation">{</span>
	<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span><span class="token comment">/*开始慢速，后面快.*/</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.list li:nth-child(3)</span><span class="token punctuation">{</span>
		<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span> <span class="token comment">/*开始快,后来慢.*/</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.list li:nth-child(4)</span><span class="token punctuation">{</span>
		<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span> <span class="token comment">/*两头慢,中间快.*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>.list <span class="token property">li</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>5<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token property">transition-timing-function</span><span class="token punctuation">:</span>linear<span class="token punctuation">;</span><span class="token comment">/*匀速*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>给大家介绍一个非常厉害的东西叫做**贝塞尔曲线,**打开百度.做出任何想要的运动方式</p><p><strong>今后做运动曲线,做贝塞尔曲线,想怎么调就怎么调</strong>https://cubic-bezier.com/</p><p>水平方向为运动时间,竖直的线为随着时间推移运动的距离或者叫进度.</p><p>​ 特殊值 贝塞尔曲线 cubic-bezier</p><p>​ 越陡速度越快 越平缓速度越慢</p><p>​ cubic-bezier(x1,y1,x2,y2)</p><p>​ 1.x1 x2取值范围是0-1</p><p>​ 2.y1 y2 可以任意取值</p></blockquote><p><strong>总结过渡:复合型写法</strong></p><blockquote><p>过渡属性property 过渡时间duration 过渡曲线 time-function 过渡延时delay</p></blockquote><p><strong>只有时长不可以省略 其他都可以省略</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> width 1s linear 2s<span class="token punctuation">;</span><span class="token comment">/*宽度效果  运动1s 匀速  延时2s开始  严格遵守顺序*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2><p><strong>动画和过渡的区别</strong></p><blockquote><p><strong>过渡:描述样式开始和结束状态的变化过程 需要手动触发</strong></p><p>需要触发条件(伪类) ,只有开始和结束两个状态,需要整体的过渡时间</p><p><strong>动画:动画不会有触发条件,自己运动,而且动画有多个状态,甚至可以无限循环.</strong></p></blockquote><p>动画是什么?</p><blockquote><p><strong>一张张画面拼接成的运动的效果</strong></p></blockquote><p><strong>利用原理</strong></p>`,80),r={href:"https://baike.baidu.com/item/%E5%BD%B1%E5%83%8F",target:"_blank",rel:"noopener noreferrer"},d=s("strong",null,"视觉暂留现象",-1),v=a(`<p><strong>动画片 每一副画面叫做一副动画帧</strong></p><blockquote><p>我们要在游览器里做动画,会不会很累我们要去播放一个五秒钟的动画.</p><p>我们按照屏幕刷新率每秒60来说,每秒要画60张图片,5s就是300张画面样式.</p><p>而且每一个画面包含不同的信息.那我们做动画会特别特别的累,看上去我们需要去做那么多帧.</p><p>但是有的画面是没有必要描述出来的.</p><p>我们有时候只需要用户需要定义第一帧和最后一帧，中间的帧数由计算机辅助生成</p></blockquote><p><strong>关键帧 描述画面关键位置值的集合</strong></p><blockquote><p>假如我们这一个盒子一开始在左上角.</p><p>我想要让盒子移动到右边,</p><p>我们使用用定位只需设置这块盒子left为300px,top为0px.这就是一个关键帧.</p><p>右下角left:300px,top:300px这又是一个关键帧.</p><p>左下角的关键帧left:0px;top:300px;</p><p>原始位置左上角的位置top:0px;left:0px;</p></blockquote><blockquote><p>如果在页面上制作动画,就不得不说说css3和flash;</p><p>我们css3animation制作动画现在已经完全取代了flash制作方式.</p><p>以前flash作为前端发展史很重要的角色现在已经被淘汰了,现在虽然可能还有一些小游戏在做,但已然是没救了.</p><p>因为早期我们要去游览器里玩游戏看视频,去进行一些比较复杂的操作.</p><p>那个时候由于页面元素盒子的一些限制无法去制作这么复杂的效果.</p><p>那时候macromedia公司发明了风靡了一段时间flash.</p><p>但是flash是一个独立插件需要去下载,安全问题,开发也不方便,性能也特别糟糕.</p><p>但是现在大家所学的就是h5和css3.</p><p>h5的video彻底取代了flash的视频放.</p><p>h5的canvas彻底取代了flash的游戏.</p><p>css3的animation取代了动画.</p><p>那我们今晚去学习css3的aniamtion,它开发简单,效果优秀,很容易上手,性能也很优秀.</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    	<span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    	<span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在想让盒子向右走300px 向下走300px 向左走300px,往上走300px;</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> roll 4s<span class="token punctuation">;</span>
<span class="token comment">/*现在我们规定了一个动画为什么没有旋转起来,这个动画怎么运动的游览器不知道.
  我们并没有将这个动画的运动过程去描述出来,所以我们要去描述定义它的关键帧
  关键帧怎么去定义,@keyframes.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> roll</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/*这时候定义了关键帧,然后我们定义动画的名称叫做roll.
  然后我们要去使用这个动画,我们这个动画运动4s的时间.
  第一秒运动到右边,第二秒下边,第三秒左边,第四秒上边.
  我们首先是不是先让这个盒子从左边到右边*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>动画:</strong></p><p><strong>1.动画名称,时间</strong></p><p><strong>2.动画过程中的描述</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token return-type class-name">@keyframes</span> roll<span class="token punctuation">{</span>
		from<span class="token punctuation">{</span>
			left<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		to<span class="token punctuation">{</span>
			left<span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
    <span class="token comment">/*我们这里去定义了一个关键帧,这个关键帧的名字roll.
      这个位置从left为0px开始到left为300px结束.
      这里面from就是起始位置的关键帧,to就是结束位置的关键帧.
      这里我们也可以只写to表示从本来位置出发到达目的地.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>看到了这个效果,问题来了,这个效果貌似和我们刚刚写的过渡效果很相似.有什么样的区别,</p><p>最大的区别是我们刷新了页面它就运动了,并不用我们去主动的点击.</p><p>我的鼠标没有对它进行任何操作.</p><p>而是它自动运动的,自动运动的不就是动画吗?</p><p>现在我们已经无法通过鼠标去操纵这个盒子了.</p></blockquote><p>现在假如说我需要去设置三个关键帧,from和to就不够用了.</p><p>所以我们在<strong>关键帧当中用百分比去描述动画的进程</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> roll</span><span class="token punctuation">{</span>
			<span class="token selector">0%</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">100%</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span><span class="token comment">/*一开始是运动位置0%,结束位置是100%,效果和上面是一致的*/</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们想让它的运动到2s时跑到右边去,运动到100%跑到下边</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> roll</span><span class="token punctuation">{</span>
			<span class="token selector">0%</span><span class="token punctuation">{</span>
				<span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
				<span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">50%</span><span class="token punctuation">{</span>
				<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
				<span class="token property">left</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">100%</span><span class="token punctuation">{</span>
				<span class="token property">top</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
				<span class="token property">left</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    	<span class="token comment">/*看看这个动画有几个关键帧,3个关键帧,这个动画有几段,2段动画.
         关键帧和动画的关系是什么,三个关键帧就代表两段动画*/</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以得出结论</p><blockquote><p><strong>N个关键帧有N-1段动画</strong></p><p>**所以假如现在5个关键帧这五个关键帧均分 **</p><p><strong>分别是百分比的多少 0% 25% 50% 75% 100% 有四段动画</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> roll</span><span class="token punctuation">{</span>
			<span class="token selector">0%</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
				<span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">25%</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
				<span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">50%</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
				<span class="token property">top</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">75%</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
				<span class="token property">top</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">100%</span><span class="token punctuation">{</span>
				<span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
				<span class="token property">left</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
    <span class="token comment">/*这里我们要清晰的写出每个关键节点的位置,不然游览器会提前动*/</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们关键帧数量肯定是越多越好,越多动画控制越精细,但是我们人开发是有极限的</strong></p><p>animation动画也是个复合样式</p><blockquote><p><strong>animation-name:动画名称(自己定义的关键帧)</strong></p><p><strong>animation-duration动画时长(s/ms)</strong></p><p><strong>animation-timing-function动画速率</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token property">animation-name</span><span class="token punctuation">:</span> roll<span class="token punctuation">;</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
<span class="token comment">/*这个time-function 动画速率 这个不是整体的运动速率.
  而是每一段动画的运动速率.
  如果要写控制不同段动画的运动速率写在不同的关键帧里就行了*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/*表现这个动画只有一段*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/*这一大段动画被分成了两段去闪现*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="动画运动次数-animation-iteration-count" tabindex="-1"><a class="header-anchor" href="#动画运动次数-animation-iteration-count" aria-hidden="true">#</a> 动画运动次数(animation-iteration-count)</h3><blockquote><p><strong>默认运动1次.</strong></p><p><strong>可以写数值表示运动几次.</strong></p><p><strong>运动完成之后默认回到初始位置,</strong></p><p><strong>但是无限运动次数infinite就不会回到初始位置</strong></p></blockquote><p>贪吃蛇</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation-duration</span><span class="token punctuation">:</span> 5s<span class="token punctuation">;</span>
<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite<span class="token punctuation">;</span>
<span class="token comment">/*总运动长度为1000px,如果设置的盒子的宽度为100px;总共要分为10段就可以了*/</span>
<span class="token atrule"><span class="token rule">@keyframes</span> roll</span><span class="token punctuation">{</span>
			<span class="token selector">from</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">to</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 1000px
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小姐姐找一个500px宽高的图片</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  	&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
	&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
	&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
	&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
	&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;<span class="token comment">/*五个盒子  图片的宽高是500px 被这五个盒子均分*/</span>

		<span class="token selector">.box</span><span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
			<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token comment">/*宽高设置100px*/</span>
			<span class="token property">animation-name</span><span class="token punctuation">:</span> roll<span class="token punctuation">;</span>
			<span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
			<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span> <span class="token comment">/*linear也行*/</span><span class="token punctuation">;</span>
  			<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite<span class="token punctuation">;</span>
			<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span>&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.box:nth-child(1)</span><span class="token punctuation">{</span>
			<span class="token property">background-position-y</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
			<span class="token property">animation-delay</span><span class="token punctuation">:</span> .3s<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.box:nth-child(2)</span><span class="token punctuation">{</span>
			<span class="token property">background-position-y</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
			<span class="token property">animation-delay</span><span class="token punctuation">:</span> .6s<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.box:nth-child(3)</span><span class="token punctuation">{</span>
			<span class="token property">background-position-y</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
			<span class="token property">animation-delay</span><span class="token punctuation">:</span> .9s<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.box:nth-child(4)</span><span class="token punctuation">{</span>
			<span class="token property">background-position-y</span><span class="token punctuation">:</span> -300px<span class="token punctuation">;</span>
			<span class="token property">animation-delay</span><span class="token punctuation">:</span> 1.2s<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token selector">.box:nth-child(5)</span><span class="token punctuation">{</span>
			<span class="token property">background-position-y</span><span class="token punctuation">:</span> -400px<span class="token punctuation">;</span>
			<span class="token property">animation-delay</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token atrule"><span class="token rule">@keyframes</span> roll</span><span class="token punctuation">{</span>
			<span class="token selector">from</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
				<span class="token property">background-position-x</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">to</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
				<span class="token property">background-position-x</span><span class="token punctuation">:</span> -500px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多帧动画</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;	
 		.box</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 184px<span class="token punctuation">;</span><span class="token comment">/*图片的宽度=总宽度除以几段*/</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 325px<span class="token punctuation">;</span>
			<span class="token property">animation-name</span><span class="token punctuation">:</span> roll<span class="token punctuation">;</span>
			<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
			<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>0.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
			<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
       		 <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>8<span class="token punctuation">)</span><span class="token punctuation">;</span>
       		<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token atrule"><span class="token rule">@keyframes</span> roll</span><span class="token punctuation">{</span>
			<span class="token selector">from</span><span class="token punctuation">{</span>
				<span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">to</span><span class="token punctuation">{</span>
				<span class="token property">background-position</span><span class="token punctuation">:</span> -1472px 0<span class="token punctuation">;</span><span class="token comment">/*图片的负总宽度*/</span>
			<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个盒子多种不同的动画效果,如何实现?</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;bigbox&quot;&gt;
		&lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
	&lt;/div&gt;
	.box</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 184px<span class="token punctuation">;</span><span class="token comment">/*图片的宽度=总宽度除以几段*/</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 325px<span class="token punctuation">;</span>
			<span class="token property">animation-name</span><span class="token punctuation">:</span> roll<span class="token punctuation">;</span>
			<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
			<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>0.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
			<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
       		<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>8<span class="token punctuation">)</span><span class="token punctuation">;</span>
       		<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token selector">.bigbox</span><span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
			<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">animation-name</span><span class="token punctuation">:</span>move<span class="token punctuation">;</span>
			<span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
			<span class="token property">animation-timing-function</span><span class="token punctuation">:</span>linear<span class="token punctuation">;</span>
			<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite<span class="token punctuation">;</span>	
		<span class="token punctuation">}</span>
		<span class="token atrule"><span class="token rule">@keyframes</span> move</span><span class="token punctuation">{</span>
			<span class="token selector">from</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">to</span><span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span><span class="token comment">/*此时我们让这个动画行走在这个盒子里了*/</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>如果一个盒子搞不定,再套上一层盒子就可以了或者用逗号分隔实现多段动画效果</strong></p><p>和背景非常相似,用逗号分隔实现多段动画效果.,</p></blockquote><p>有一个大方盒子,里面有一个小方块,小方块随机运动,碰到边界随机反弹</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;wall&quot;&gt;
		&lt;div class=&quot;ball&quot;&gt;&lt;/div&gt;
	&lt;/div&gt;

.wall</span> <span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token selector">.ball</span> <span class="token punctuation">{</span>
			<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
			<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
			<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
			<span class="token property">animation</span><span class="token punctuation">:</span>movex 2s linear infinite<span class="token punctuation">,</span>
							 movey 3s linear infinite<span class="token punctuation">,</span>
							 color 1.5s linear infinite<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token atrule"><span class="token rule">@keyframes</span> movex</span> <span class="token punctuation">{</span>
			<span class="token selector">0%</span> <span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">50%</span> <span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">100%</span> <span class="token punctuation">{</span>
				<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token atrule"><span class="token rule">@keyframes</span> movey</span> <span class="token punctuation">{</span>
			<span class="token selector">0%</span> <span class="token punctuation">{</span>
				<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">50%</span> <span class="token punctuation">{</span>
				<span class="token property">top</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">100%</span> <span class="token punctuation">{</span>
				<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token atrule"><span class="token rule">@keyframes</span> color</span> <span class="token punctuation">{</span>
			<span class="token selector">0%</span> <span class="token punctuation">{</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">50%</span> <span class="token punctuation">{</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">100%</span> <span class="token punctuation">{</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动画结束时候的状态-animation-fill-mode" tabindex="-1"><a class="header-anchor" href="#动画结束时候的状态-animation-fill-mode" aria-hidden="true">#</a> 动画结束时候的状态(animation-fill-mode)</h3><blockquote><p><strong>backwards 默认为回到初始位置</strong></p><p><strong>forwards:执行动画完成后保留最后状态</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.box</span><span class="token punctuation">{</span>
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
		<span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
		<span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
		<span class="token property">animation-fill-mode</span><span class="token punctuation">:</span>forwards<span class="token punctuation">;</span><span class="token comment">/*停留在运动结束(最后一帧的)的位置*/</span>
	<span class="token punctuation">}</span>
	<span class="token atrule"><span class="token rule">@keyframes</span> move</span><span class="token punctuation">{</span>
		<span class="token selector">to</span><span class="token punctuation">{</span>
			<span class="token property">left</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;box&quot;</span>&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延迟时间-animation-delay" tabindex="-1"><a class="header-anchor" href="#延迟时间-animation-delay" aria-hidden="true">#</a> 延迟时间(animation-delay)</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation-delay</span><span class="token punctuation">:</span> -2s<span class="token punctuation">;</span><span class="token comment">/*表示提前了两秒的运动 和动画持续时间加起来就行了,*/</span>
<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite<span class="token punctuation">;</span>
<span class="token comment">/*假如我让动画无限次的运动,盒子会不会回到初始位置呢?
  会回去!说明延时生效,注意animation-delay只是延迟整个动画效果的开始.
  相当于你看电影,晚了两分钟没看到开头,那你一直不走等到下场开始了你不就能看到全部了.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动画的运动方向animation-direction" tabindex="-1"><a class="header-anchor" href="#动画的运动方向animation-direction" aria-hidden="true">#</a> 动画的运动方向animation-direction</h3><p><strong>规定动画在下一次是否逆向播放 动画如果进行到100%该怎么回到0%</strong></p><p><strong>animation-direction: 放置元素运动的时候出现不连贯的情况</strong></p><blockquote><p><strong>normal(0~100): 瞬间切回去,每一次都是正向播放.</strong></p><p><strong>reverse(100~0); 从100%的位置到0%的位置</strong></p><p><strong>alternate(0~100~0) 从0%出发来回播放,大于等于2能看到效果.</strong></p><p><strong>alternate-reverse(100~0~100) 从100%出发来回播放,大于等于2能看到效果</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite<span class="token punctuation">;</span>
	<span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="动画之运行状态-animation-play-state-paused" tabindex="-1"><a class="header-anchor" href="#动画之运行状态-animation-play-state-paused" aria-hidden="true">#</a> 动画之运行状态(animation-play-state:paused;)</h3><blockquote><p><strong>默认running是默认值.</strong></p><p><strong>可配合状态类伪类选择器操纵元素的动画状态</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box:hover</span><span class="token punctuation">{</span>
		<span class="token property">animation-play-state</span><span class="token punctuation">:</span>paused<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复合写法</strong></p><p><strong>animation: name(名称) duration(时间) timing-function(速率) delay(延迟) iteration-count(次数) direction(执行方向) fill-mode paly-state动画的暂停;</strong></p>`,57);function k(m,b){const t=c("ExternalLinkIcon");return e(),i("div",null,[u,s("blockquote",null,[s("p",null,[n("物体在快速运动时, 当人眼所看到的"),s("a",r,[n("影像"),o(t)]),n("消失后，人眼仍能继续保留其影像0.1-0.4秒左右的图像，这种现象被称为"),d,n("。")])]),v])}const y=p(l,[["render",k],["__file","14.donghuayangshi.html.vue"]]);export{y as default};
