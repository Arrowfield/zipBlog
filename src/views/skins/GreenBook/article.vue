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
      <!-- mobile -->
      <div class="post-header">
        <h1 class="post-title" itemprop="name headline">
          {{ articleDetail.title }}
        </h1>
        <div class="post-data">
          <time datetime="2021-04-04T16:09:00+08:00" itemprop="datePublished"><i class="fa fa-clock-o" aria-hidden="true"> </i> {{ articleDetail.time }}</time>&nbsp;&nbsp;
          <i class="fa fa-tags" aria-hidden="true"></i> <a href="https://rawchen.com/category/enjoy/">{{ articleDetail.category.title }}</a>&nbsp;&nbsp;
          <i class="fa fa-comments-o" aria-hidden="true"></i>
          <a href="#comments"> {{ articleDetail.comments.number }} {{ $t('comments') }}</a>&nbsp;&nbsp;
          <i class="fa fa-eye" aria-hidden="true"></i>
          {{ articleDetail.views }} {{ $t('views') }}
        </div>
      </div>

      <div id="post-content" class="post-content" itemprop="articleBody">
        <p class="post-tags">
          <a v-for="item of articleDetail.tags" href="https://rawchen.com/tag/OneDrive/">{{ item.name }}</a>
        </p>
        <!-- body start -->
        <div v-html="articleDetail.body"></div>
        <!-- body end -->
      </div>
      <p class="post-info">
      </p><div style="text-align: center;">
      <span
        v-html=
          "$t('statement')
          .replace('XXX',articleDetail.footerStatement.url)
          .replace('YYY',articleDetail.footerStatement.name)
          .replace('ZZZ',articleDetail.footerStatement.updateTime)"
      ></span>
      如果你觉得我的文章不错，不妨鼓励我继续写作。
    </div>
      <div id="rewardButton" style="padding: 10px 0; margin: 20px auto; width: 100%; font-size:16px; text-align: center;">
        <div id="reward-qr-code" style="padding: 50px;background-color: #393D49; color: #fff;display: none;"><img style="width: 100%;" src="https://rawchen.com/qrcode.jpg"></div>
        <button type="button">支持</button>
      </div>
      <p></p>

      <div class="post-next-prev">
        <div class="padd">
          <!-- 上一篇 -->
          <!-- 下一篇 -->
        </div>
      </div>
    </article>
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
          body: "<h1 id=\"directory096250387917882471\">最终效果Demo：</h1>",
          footerStatement:{
            name:"zipingfang",
            updateTime:"2021-11-07"
          }
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
