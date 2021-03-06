import settings from "@/settings";

export const articleDetail = {
  isTop: true,
  color: settings.textColors[1],
  url: "/article-detail/0",
  src: "https://cdn.rawchen.com/2021/03/sdyun/00.jpg",
  title: "新人云服务器，且行且珍惜",
  Topping: true,
  time: "2021-11-07",
  category: {title: "计算机科学与技术", url: "/"},
  comments: {number: 10, url: "/"},
  views: 100,
  abstract: "购买地址：腾讯云：[https://cloud.tencent.com/act/cps/redirect?redirect=1575&amp;cps_key=b58209dca42a9decdae2f276d61acd77&amp;from=console)阿里云：https://www.aliyun.com",
  tags: [
    {name: "OneDrive", url: ""}
  ],
  body: `
        <p class="post-tags">
            <a href="https://rawchen.com/tag/SpringMVC/">SpringMVC</a> <a href="https://rawchen.com/tag/Interceptor/">Interceptor</a>        </p>
		<h1 id="directory049940814102506191">SpringMVC拦截器</h1><p>SpringMVC 中的 Interceptor 拦截器也是相当重要和相当有用的，它的主要作用是拦截用户的请求并进行相应的处理。比如通过它来进行权限验证，或者是来判断用户是否登陆。例如：</p><p>当访问/user下的所有控制器方法时拦截，例如访问/user/userLogin。</p><p>spring-mvc.xml</p><div ><pre class="line-numbers language-java" tabindex="0"><code class="language-java"><span class="token operator">&lt;</span>mvc<span class="token operator">:</span>interceptors<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>mvc<span class="token operator">:</span>interceptor<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>mvc<span class="token operator">:</span>mapping path<span class="token operator">=</span><span class="token string">"/user/**"</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>bean <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"com.yoyling.interceptor.LoginInterceptor"</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>mvc<span class="token operator">:</span>interceptor<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>mvc<span class="token operator">:</span>interceptors<span class="token operator">&gt;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div><p>LoginInterceptor.java</p><div ><pre class="line-numbers language-java" tabindex="0"><code class="language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        response<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"拦截/user请求"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div><h1 id="directory049940814102506192">使用方法</h1><h2 id="directory049940814102506193">定义Interceptor实现类</h2><p>主要有两种方式，第一种方式是要定义的Interceptor类要实现了Spring 的HandlerInterceptor 接口，或者是这个类继承实现了HandlerInterceptor 接口的类，比如Spring 已经提供的实现了HandlerInterceptor 接口的抽象类HandlerInterceptorAdapter ；第二种方式是实现Spring的WebRequestInterceptor接口，或者是继承实现了WebRequestInterceptor的类。</p><h2 id="directory049940814102506194">实现HandlerInterceptor接口</h2><p>HandlerInterceptor 接口中定义了三个方法，我们就是通过这三个方法来对用户的请求进行拦截处理的。<br><strong>preHandle</strong>(request, response, Object handle);<br><strong>postHandle</strong>(request, response, Object handle, modelAndView);<br><strong>afterCompletion</strong>(request, response, Object handle, Exception ex);</p><h3 id="directory049940814102506195">preHandle</h3><p>顾名思义，该方法将在请求处理之前进行调用。SpringMVC 中的Interceptor 是链式的调用的，在一个应用中或者说是在一个请求中可以同时存在多个Interceptor 。每个Interceptor 的调用会依据它的声明顺序依次执行，而且最先执行的都是Interceptor 中的preHandle 方法，所以可以在这个方法中进行一些前置初始化操作或者是对当前请求的一个预处理，也可以在这个方法中进行一些判断来决定请求是否要继续进行下去。该方法的返回值是布尔值Boolean 类型的，当它返回为false 时，表示请求结束，后续的Interceptor 和Controller 都不会再执行；当返回值为true 时就会继续调用下一个Interceptor 的preHandle 方法，如果已经是最后一个Interceptor 的时候就会是调用当前请求的Controller 方法。</p><h3 id="directory049940814102506196">postHandle</h3><p>由preHandle 方法的解释我们知道这个方法包括后面要说到的afterCompletion 方法都只能是在当前所属的Interceptor 的preHandle 方法的返回值为true 时才能被调用。postHandle 方法，顾名思义就是在当前请求进行处理之后，也就是Controller 方法调用之后执行，但是它会在DispatcherServlet 进行视图返回渲染之前被调用，所以我们可以在这个方法中对Controller 处理之后的ModelAndView 对象进行操作。postHandle 方法被调用的方向跟preHandle 是相反的，也就是说先声明的Interceptor 的postHandle 方法反而会后执行，这和Struts2 里面的Interceptor 的执行过程有点类型。Struts2 里面的Interceptor 的执行过程也是链式的，只是在Struts2 里面需要手动调用ActionInvocation 的invoke 方法来触发对下一个Interceptor 或者是Action 的调用，然后每一个Interceptor 中在invoke 方法调用之前的内容都是按照声明顺序执行的，而invoke 方法之后的内容就是反向的。</p><h3 id="directory049940814102506197">afterCompletion</h3><p>该方法也是需要当前对应的Interceptor 的preHandle 方法的返回值为true 时才会执行。顾名思义，该方法将在整个请求结束之后，也就是在DispatcherServlet 渲染了对应的视图之后执行。这个方法的主要作用是用于进行资源清理工作的。</p><h2 id="directory049940814102506198">实现WebRequestInterceptor</h2><p>也可用于Contrller层请求拦截，WebRequestInterceptor的入参WebRequest是包装了HttpServletRequest 和HttpServletResponse的，通过WebRequest获取Request中的信息更简便。</p><p>WebRequestInterceptor的preHandle是没有返回值的，说明该方法中的逻辑并不影响后续的方法执行，所以这个接口实现就是为了获取Request中的信息，或者预设一些参数供后续流程使用。</p><h2 id="directory049940814102506199">使用场景</h2><p>这个在上条已经说了，如果想更方便获取HttpServletRequest的信息就使用WebRequestInterceptor，当然这些HandlerInterceptor都能做，只不过要多写点代码。</p>
`,
  footerStatement: {
    name: "zipingfang",
    updateTime: "2021-11-07"
  }
}