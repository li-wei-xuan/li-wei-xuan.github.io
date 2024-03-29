import{_ as n,p as s,q as e,Y as i}from"./framework-aa5c4115.js";const a={},l=i(`<h1 id="阿里图标" tabindex="-1"><a class="header-anchor" href="#阿里图标" aria-hidden="true">#</a> 阿里图标</h1><ul><li><p>顾名思义就是阿里巴巴开发的图标网站,免费为我们提供大量精美的图标的网站</p></li><li><p>将图标以字体的形式加载到自己的网站上.</p></li><li><p>这就是大企业的责任,要为社会提供有价值的东西,所以阿里图标是为中国开发者提供的便利性服务</p></li><li><p><strong>总结</strong></p></li></ul><blockquote><p>1.登录阿里巴巴矢量图标库 2,购物(添加到购物车) 3.添加到项目 4.直接下载 5.下载好的文件解压到你的项目中的iconfont文件里面 6.点击.html文件查看演示</p></blockquote><p><strong>阿里图标的强大之处在于我们挑选图标,我们生成项目,生成在线链接,直接用</strong></p><h2 id="代码复用-组件化" tabindex="-1"><a class="header-anchor" href="#代码复用-组件化" aria-hidden="true">#</a> 代码复用(组件化)</h2><ul><li><p>一行代码可以多次利用,通过添加不同的css类名</p><p>我们之前如果要去浮动或者清除浮动</p></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.father .son</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrap .content</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrap .content:after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;father&quot;</span>&gt;
  &lt;div class=<span class="token string">&quot;son&quot;</span>&gt;&lt;/div&gt;
  &lt;div class=<span class="token string">&quot;son&quot;</span>&gt;&lt;/div&gt;
  &lt;div class=<span class="token string">&quot;son&quot;</span>&gt;&lt;/div&gt;
&lt;/div&gt;	
&lt;div class=<span class="token string">&quot;wrap&quot;</span>&gt;
  &lt;div class=<span class="token string">&quot;content&quot;</span>&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">浮动
	.fl</span><span class="token punctuation">{</span>
		<span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.fr</span><span class="token punctuation">{</span>
		<span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token comment">/*我们可以写一个浮动的类名,这个类就相当于工具类.
哪个元素需要浮动我就直接在其前面添加这个类名他就拥有了浮动的样式.*/</span>

<span class="token selector">清除浮动
	.clearfix:after</span><span class="token punctuation">{</span>
    	<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    	<span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
    	<span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>我们单独去写一个css的样式用于不同html的复用 
例如我们创建一个外部CSS文件引入,里面写的是小米的头部区域
 &lt;link rel=&quot;stylesheet&quot; href=&quot;topbar.css&quot;&gt;
你打开小米商城里别的链接,可以发现这个头部经常会用到.
我们不止可以在这个HTML页面使用,我们在写下一个页面的时候也可以把这个拿来使用.
其实无论是模块化开发还是组件化开发,强调的都是代码的复用性.
可以大幅提高工作效率,减少开发时长.你可以把别人的东西拿来使用,只需自己定义较少的部分.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="swiper" tabindex="-1"><a class="header-anchor" href="#swiper" aria-hidden="true">#</a> swiper</h2><p>轮播图:在有限的空间展示多张图片和文字;</p><ul><li>**我们看文档(操作手册)**是为了什么?</li></ul><p>理解操作规范,思维设计理念</p><ul><li><p><strong>学框架,工具库的意义</strong></p></li><li><p>帮助我们去高效正确的规范开发工具</p></li><li><p>合理复制粘贴不是坏事,可以提高我们的效率,</p></li></ul><p>计算机很经典的法则:开源思想 :github</p><p>swiper本质上也是一个开源项目:</p><ul><li>学习框架的过程</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>1.合理使用它
2.了解它的思想  vue:mvvm react:mvc
3.研究代码,底层实现(最重要)
4.创新  公司魔改框架
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>假如你下载好了框架</li></ul><p><strong>请在package文件夹找生成好的框架代码</strong></p><ul><li>.css和.min.css的区别</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>.min.css 压缩版  清除了所有不需要的空格和换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>引入顺序</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>引入框架样式的时候,保证在自己写的样式前面,方便自己的样式覆盖它

引入框架js的时候,需要写在body标签结束之前,保证页面元素加载完成以及被解析
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN引入</p><p>让页面加载的时候在线下载</p><p>CDN 资源服务器(缓存) 找最近的服务器去拿资源(重定向)</p><h2 id="html5的定义" tabindex="-1"><a class="header-anchor" href="#html5的定义" aria-hidden="true">#</a> html5的定义</h2><blockquote><p><strong>狭义:HTML发展到了第五代版本,出现了很多新的功能标签,新的语义化标签</strong></p><p><strong>广义:出现了新的开发体系,直播,玩游戏,各种功能,3d</strong></p></blockquote><ul><li>HTML5是一个完备的全新的网站开发的解决方案. canvas标签(画布)进行渲染式的开发,</li><li>脱离了div盒子的浮动,定位等等.</li></ul><h2 id="语义化标签" tabindex="-1"><a class="header-anchor" href="#语义化标签" aria-hidden="true">#</a> 语义化标签:</h2><ul><li>理论上任何标签的效果都可以用div实现,但是我们肯定是想让网站变得更好遵守语义化的特点.</li><li>所谓语义化就是写出这个标签名字我们就知道这个标签的作用和存在的意义,更有利于seo搜索引擎的优化.</li></ul><p><strong>语义化标签的优点</strong></p><ul><li>比div标签有着更加丰富的含义,方便开发和维护.</li><li>搜索引擎能更方便的识别页面的每个部分,</li><li>方便其他设备的解析.(如移动设备,盲人设备).</li></ul><blockquote><p><code>header</code>标签存放网站公共头部分的标签,通常被放置在页面或者页面中某个区块的顶部，包含整个页面或者块级的标题、简介等信息，起到引导与导航的作用。</p><p>我们不但可以放置页面或者页面中某个区级的标题，还可以放置搜索表单、logo图片等元素</p><p>标签的位置没有太大限制,不一定非得网站顶部,也可以是一个区域的顶部</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*网站头部实例*/</span>
&lt;header&gt;
		&lt;img src=<span class="token string">&quot;&quot;</span> alt=<span class="token string">&quot;&quot;</span>&gt;
		&lt;h1&gt;小米&lt;/h1&gt;
	&lt;/header&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>nav</code>元素,表示页面的导航，可以通过导航连接到网站的其他页面，或者当前页面的其它部分.</p><p>nav不但可以作为页面独立的导航区域存在，我们还可以在<code>header</code>标签中使用</p><p><code>nav</code>标签还可以显示在侧边栏中,由此可见一个页面可以有多个<code>nav</code>元素.我们可以将主要的,基本的链接组放进<code>nav</code>标签内即可.</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*nav示例*/</span>
&lt;header&gt;
		&lt;img src=<span class="token string">&quot;&quot;</span> alt=<span class="token string">&quot;&quot;</span>&gt;
		&lt;h1&gt;小米&lt;/h1&gt;
		&lt;nav&gt;
			&lt;a href=<span class="token string">&quot;&quot;</span>&gt;小米手机&lt;/a&gt;
			&lt;a href=<span class="token string">&quot;&quot;</span>&gt;小米家具&lt;/a&gt;
			&lt;a href=<span class="token string">&quot;&quot;</span>&gt;小米家电&lt;/a&gt;
		&lt;/nav&gt;
	&lt;/header&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>aside</code>标签一般使用在页面、文章的侧边栏、广告、友情链接等区域。</p><p>所包含的内容不是页面的主要内容、具有独立性，是对页面的补充。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;div&gt;
		&lt;aside&gt;
			&lt;h2&gt;小米家电的优势&lt;/h2&gt;
			&lt;p&gt;优势是.....&lt;/p&gt;
		&lt;/aside&gt;
	&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>footer</code>一般被放置在页面或者页面中某个区块的底部，包含版权信息、联系方式,公司介绍等信息。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;div&gt;	
	&lt;aside&gt;
			&lt;h2&gt;小米家电的优势&lt;/h2&gt;
			&lt;p&gt;优势是.....&lt;/p&gt;
		&lt;/aside&gt;
	&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>article</code>标签应该使用在相对比较独立、完整的的内容区块，所以我们可以在一篇博客、一个论坛帖子、一篇新闻报道或者一个用户评论中使用它,一个article元素包括标题,正文和脚注.</p><p><code>article</code>标签还可以嵌套使用</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;article&gt;
    &lt;h1&gt;HTML5学习之语义化标签&lt;/h1&gt;
    &lt;p&gt;....正文.....&lt;/p&gt;
    &lt;footer&gt;版权所有*伪版必究&lt;/footer&gt;
&lt;/article&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>section</code>是一个主题性的内容分组，通常用于对页面进行分块或者对文章等进行分段.</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;section&gt;
    &lt;h1&gt;前端&lt;/h1&gt;
    &lt;p&gt;前端大致包含HTML、CSS和JavaScript三个部分&lt;/p&gt;
    &lt;article&gt;
        &lt;h2&gt;HTML&lt;h2&gt;
        &lt;p&gt;内容&lt;/p&gt;
    &lt;/article&gt;
    &lt;article&gt;
        &lt;h2&gt;CSS&lt;h2&gt;
        &lt;p&gt;样式&lt;/p&gt;
    &lt;/article&gt;
    &lt;article&gt;
        &lt;h2&gt;JavaScript&lt;h2&gt;
        &lt;p&gt;行为&lt;/p&gt;
    &lt;/article&gt;
&lt;/section&gt;
<span class="token comment">/*在这个例子中，&lt;section&gt;标签代表一段内容
在这段内容中，HTML、CSS、Javascript是三个完全独立的部分.
因而我们为这三个不同的部分分别使用&lt;article&gt;标签*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>div section article三者的比较：</p><ul><li>div应用广泛，只要我们想为一个区域定义一个样式或者为其添加JS行为，就可以使用div标签</li><li><code>section</code>：包含的内容是一个明确的主题，通常有标题区域.</li><li>如果我们的页面中需要一个单独的模块来实现一个单独的功能就用article,其他的时候都用section</li></ul>`,48),t=[l];function d(c,o){return s(),e("div",null,t)}const u=n(a,[["render",d],["__file","18.alitubiao zujianhua swiper.html.vue"]]);export{u as default};
