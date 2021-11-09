<template>
  <layout-slot bodyImage="" class="article-main" class-name="article-content">

    <!-- 非移动端展示 -->
    <div class="post-header-thumb  bg-orange"
         style="background-image:url(https://cdn.rawchen.com/2021/04/onedrive/00.jpg);">
      <div class="post-header-thumb-op"
           style="background-image:url(https://cdn.rawchen.com/2021/04/onedrive/00.jpg);"></div>
      <div class="post-header-thumb-cover">
        <div class="post-header-thumb-container">
          <div class="post-header-thumb-title">
            {{ articleDetail.title }}
          </div>
          <div class="post-header-thumb-meta">
            <time datetime="2021-04-04T16:09:00+08:00" itemprop="datePublished">
              <i class="fa fa-clock-o" aria-hidden="true"> </i> {{ articleDetail.time }}
            </time>&nbsp;&nbsp; <i class="fa fa-tags" aria-hidden="true"></i> <a
            href="https://rawchen.com/category/enjoy/">{{ articleDetail.category.title }}</a>&nbsp;&nbsp;
            <i class="fa fa-comments-o" aria-hidden="true"></i>
            <a href="#comments"> {{ articleDetail.comments.number }} {{ $t('comments') }}</a>&nbsp;&nbsp;
            <i class="fa fa-eye" aria-hidden="true"></i>
            {{ articleDetail.views }} {{ $t('views') }}
          </div>
          <div class="post-tags">
            <a v-for="item of articleDetail.tags" href="https://rawchen.com/tag/OneDrive/">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 文章主体 -->
    <article class="main-content post-page" itemscope="" itemtype="http://schema.org/Article">
      <div class="post-header">
        <h1 class="post-title" itemprop="name headline">
          6元做一个2.6m/s下行、5T存储的私人网盘		</h1>
        <div class="post-data">
          <time datetime="2021-04-04T16:09:00+08:00" itemprop="datePublished"><i class="fa fa-clock-o" aria-hidden="true"> </i> 2021-04-04</time>&nbsp;&nbsp; <i class="fa fa-tags" aria-hidden="true"></i> <a href="https://rawchen.com/category/enjoy/">资源分享</a>&nbsp;&nbsp; <i class="fa fa-comments-o" aria-hidden="true"></i> <a href="#comments"> 19 评论</a>&nbsp;&nbsp; <i class="fa fa-eye" aria-hidden="true"></i> 8642 浏览
        </div>
      </div>
      <div id="post-content" class="post-content" itemprop="articleBody">
        <p class="post-tags">
          <a href="https://rawchen.com/tag/OneDrive/">OneDrive</a>        </p>
        <h1 id="directory0169028757131058031">最终效果Demo：</h1><blockquote><p><a href="https://pan.rawchen.com" target="_blank">https://pan.rawchen.com</a></p></blockquote><p>其中文件存储服务都由微软托管了，因此不用担心服务商跑路问题。</p><h1 id="directory0169028757131058032">步骤如下</h1><ul><li>购买OneDrive激活码或帐号</li><li>如激活码的则创建固定后缀的微软帐号</li><li>通过OneDrive上传下载</li></ul><p><strong>到这一步就能使用5T网盘了，但是太Low了，只能通过web端查看下载上传，也不能直接在线查看。</strong></p><ul><li>注册 Cloudflare 并创建 Workers</li><li>按照指引部署生成所需代码</li><li>部署 FODI 前端展示云盘列表</li></ul><h2 id="directory0169028757131058033">购买OneDrive激活码或帐号</h2><p>淘宝搜索OneDrive5T可购买帐号。或者<a href="https://shop.obweb.cn/#/4/detail" target="_blank">https://shop.obweb.cn/#/4/detail</a>直接￥9.9购买激活码，然后在<a href="https://od.aamo.cn/" target="_blank">https://od.aamo.cn/</a>注册微软OneDrive固定前缀的账号，姓和名用英文的，邮箱前缀自定义，购买的激活码填写到<code>邀请码</code>一栏，然后提交。提交后会给你个自定义前缀的邮箱帐号 xxx@sms.drkvsrimca.in 和密码，请复制下来，接着可能会要求你改密码。</p><h2 id="directory0169028757131058034">通过OneDrive上传下载</h2><p><a href="https://office.live.com/start/OneDrive.aspx" target="_blank">https://office.live.com/start/OneDrive.aspx</a>进去后用那个邮箱登录。然后就可以网页端管理你的私人网盘了。<br>下载<a href="https://www.microsoft.com/zh-cn/microsoft-365/onedrive/download" target="_blank">https://www.microsoft.com/zh-cn/microsoft-365/onedrive/download</a>OneDrive Win客户端有更多功能，像自动同步，备份win等高级功能。</p><h2 id="directory0169028757131058035">注册Cloudflare创建Workers</h2><p>接着教程就是通过部署FODI项目获取帐号信息，链接给前端网页。然后通过网站网页的列表方式展示，并可以在线预览音频视频、图片文档。还可下载与引用资源。</p><p><a href="https://dash.cloudflare.com/sign-up" target="_blank">https://dash.cloudflare.com/sign-up</a>注册Cloudflare账号，<a href="https://dash.cloudflare.com/login" target="_blank">https://dash.cloudflare.com/login</a>登录帐号。</p><p>登录后点击Workers，相当于是工作空间，创建一个二级域名工作空间。界面右上角可以改语言-简体中文。</p><p><a data-fancybox="gallery" href="https://cdn.rawchen.com/2021/04/onedrive/01.png"><img src="https://cdn.rawchen.com/2021/04/onedrive/01.png" alt="" title=""></a></p><p><a data-fancybox="gallery" href="https://cdn.rawchen.com/2021/04/onedrive/02.png"><img src="https://cdn.rawchen.com/2021/04/onedrive/02.png" alt="" title=""></a></p><p><a data-fancybox="gallery" href="https://cdn.rawchen.com/2021/04/onedrive/03.png"><img src="https://cdn.rawchen.com/2021/04/onedrive/03.png" alt="" title=""></a></p><p><a data-fancybox="gallery" href="https://cdn.rawchen.com/2021/04/onedrive/04.png"><img src="https://cdn.rawchen.com/2021/04/onedrive/04.png" alt="" title=""></a></p><p><a data-fancybox="gallery" href="https://cdn.rawchen.com/2021/04/onedrive/05.png"><img src="https://cdn.rawchen.com/2021/04/onedrive/05.png" alt="" title=""></a></p><p>以上csq只是为方便演示注册是我新创建的号，跟以下的yoyling可理解为同一个。<br>创建完工作空间Workers后创建个Worker。进入代码编辑界面等后面步骤做了在返回来。</p><h2 id="directory0169028757131058036">按照指引部署生成所需代码</h2><p>随后打开<a href="https://logi.im/fodi/get-code/" target="_blank">FODI Deployment Helper</a>，按照指引生成并复制代码，粘贴到Worker代码编辑器中。</p><p>FODI Deployment Helper进入后选择版本为其他版本，如果你买的是世纪互联就选世纪互联。它会自动填充三栏。接着点击前往登录，输入你之前注册的微软邮箱账号xxx@sms.drkvsrimca.in登录。跳转后复制当前页面地址（<a href="http://localhost/onedrive-login?code=xxx" target="_blank">http://localhost/onedrive-login?code=xxx</a>）。粘贴到浏览器跳转地址。展示文件夹最好填个。（最好在OneDrive网页管理中新建一个英文目录的文件夹用来共享，因为该文件夹即为共享根目录）</p><p>密码可以设置个，因为以后文件夹可以设置为需要密码访问，密码就是这个。</p><p><a data-fancybox="gallery" href="https://cdn.rawchen.com/2021/04/onedrive/06.png"><img src="https://cdn.rawchen.com/2021/04/onedrive/06.png" alt="" title=""></a></p><p>代码粘贴到Worker代码区后左上角设置个三级域名，就比如我的fodi，然后保存并部署。此时复制左上角<strong>xxx.xxx.workers.dev</strong>旁边的打开链接。复制此链接。</p><p><a data-fancybox="gallery" href="https://cdn.rawchen.com/2021/04/onedrive/07.png"><img src="https://cdn.rawchen.com/2021/04/onedrive/07.png" alt="" title=""></a></p><h2 id="directory0169028757131058037">部署前端展示云盘列表</h2><p>接着下载<a href="https://cdn.rawchen.com/2021/04/onedrive/index.html" target="_blank">index.html</a>(直接右键链接另存为，不然就是打开这个index网页)，这是个前端静态文件，文本编辑器打开它修改SCF_GATEWAY属性为你刚才Worker左上角复制的那个网址。改成你自己的即可然后保存。这时候你直接浏览器打开这个index.html就可以看到你的文件列表了。</p><p>此时还需要最后一个步骤，就是把这个index.html放到网上展示，如果你有服务器和域名，那你应该知道怎么做。如果你不太懂那就网页搜<strong>GitHub静态网站</strong>，我给你个参考网址<a href="https://www.jianshu.com/p/b6dfc7c886a9" target="_blank">https://www.jianshu.com/p/b6dfc7c886a9</a>，不会部署在网页上的<code>关于</code>，QQ联系我。</p><h1 id="directory0169028757131058038">拓展</h1><h2 id="directory0169028757131058039">文件夹加密</h2><p>在某个文件夹下添加以上你填写的加密文件，里面写入密码，即可加密该文件夹。比如我之前没改，用的默认.password。那么我就在想加密的文件夹添加个.password文件，编辑器utf8格式打开写个密码传上去。注意文件必须以 UTF8NoBOM 编码，且密码前后不能有空格或空行。</p>
      </div>
      <p class="post-info">
      </p><div style="text-align: center;">
      本文由 <a href="https://rawchen.com/author/1/" style="border-bottom: 1px dashed #a0a0a0;">RawChen</a> 发表， 最后编辑时间为：2021-05-27 23:22<br>如果你觉得我的文章不错，不妨鼓励我继续写作。
    </div>
      <div id="rewardButton" style="padding: 10px 0; margin: 20px auto; width: 100%; font-size:16px; text-align: center;">
        <div id="reward-qr-code" style="padding: 50px;background-color: #393D49; color: #fff;display: none;"><img style="width: 100%;" src="https://rawchen.com/qrcode.jpg"></div>
        <button type="button" onclick="layer.open({type: 1,title: false,closeBtn: false,area: '300px;',shade: 0.3,id: 'LAY_layuipro',btnAlign: 'c',shadeClose: true,moveType: 0,content: $('#reward-qr-code'),end:function(){$('#reward-qr-code').css('display','none')}});">支持
        </button>
      </div>
      <p></p>


      <div class="post-next-prev">
        <div class="padd">
          <!-- 上一篇 -->


          <!-- 下一篇 -->

        </div>
      </div>
    </article>



    <!-- mobile -->
<!--    <article itemscope="" itemtype="http://schema.org/Article">-->
<!--      <div class="post-header">-->
<!--        <h1 class="post-title" itemprop="name headline">-->
<!--          {{ articleDetail.title }} </h1>-->
<!--        <div class="post-data">-->
<!--          <time datetime="2021-04-04T16:09:00+08:00" itemprop="datePublished">-->
<!--            <i class="fa fa-clock-o" aria-hidden="true"> </i>-->
<!--            {{articleDetail.time }}-->
<!--          </time>&nbsp;&nbsp; <i class="fa fa-tags" aria-hidden="true"></i> <a-->
<!--          href="https://rawchen.com/category/enjoy/">{{ articleDetail.category.name }}</a>&nbsp;&nbsp; <i-->
<!--          class="fa fa-comments-o"-->
<!--          aria-hidden="true"></i> <a-->
<!--          href="#comments"> {{ articleDetail.comments.number }} {{ $t('comments') }}</a>&nbsp;&nbsp; <i-->
<!--          class="fa fa-eye" aria-hidden="true"></i> {{ articleDetail.views }} {{ $t('views') }}-->
<!--        </div>-->
<!--      </div>-->
<!--    </article>-->


  </layout-slot>
</template>

<script>
  import LayoutSlot from "./slot/layout-slot";
  import settings from "../../../settings";

  export default {
    name: "vue-article",
    components: {LayoutSlot},
    data() {
      return {
        articleDetail: {
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
          body: ""
        },
      }
    },

  }
</script>

<style lang="scss" scoped>
  .article-main {

  }

  // 针对整个文章的渲染
</style>
<style lang="scss">
  .article-content {
    max-width: 100%;
  }
</style>
