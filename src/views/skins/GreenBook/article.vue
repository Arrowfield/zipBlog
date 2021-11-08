<template>
  <layout-slot class="article-main" class-name="article-content post-page">

    <!-- 非移动端展示 -->
    <div class="post-header-thumb  bg-orange"
         style="background-image:url(https://cdn.rawchen.com/2021/04/onedrive/00.jpg);">
      <div class="post-header-thumb-op"
           style="background-image:url(https://cdn.rawchen.com/2021/04/onedrive/00.jpg);"></div>
      <div class="post-header-thumb-cover">
        <div class="post-header-thumb-container">
          <div class="post-header-thumb-title">
            6元做一个2.6m/s下行、5T存储的私人网盘
          </div>
          <div class="post-header-thumb-meta">
            <time datetime="2021-04-04T16:09:00+08:00" itemprop="datePublished">
              <i class="fa fa-clock-o" aria-hidden="true"> </i> 2021-04-04
            </time>&nbsp;&nbsp; <i class="fa fa-tags" aria-hidden="true"></i> <a
            href="https://rawchen.com/category/enjoy/">资源分享</a>&nbsp;&nbsp; <i class="fa fa-comments-o"
                                                                               aria-hidden="true"></i> <a
            href="#comments"> 19 评论</a>&nbsp;&nbsp; <i class="fa fa-eye" aria-hidden="true"></i> 8629 浏览
          </div>
          <div class="post-tags">
            <a href="https://rawchen.com/tag/OneDrive/">OneDrive</a></div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <article  itemscope="" itemtype="http://schema.org/Article">
      <div class="post-header">
        <h1 class="post-title" itemprop="name headline">
          6元做一个2.6m/s下行、5T存储的私人网盘 </h1>
        <div class="post-data">
          <time datetime="2021-04-04T16:09:00+08:00" itemprop="datePublished"><i class="fa fa-clock-o"
                                                                                 aria-hidden="true"> </i> 2021-04-04
          </time>&nbsp;&nbsp; <i class="fa fa-tags" aria-hidden="true"></i> <a
          href="https://rawchen.com/category/enjoy/">资源分享</a>&nbsp;&nbsp; <i class="fa fa-comments-o"
                                                                             aria-hidden="true"></i> <a
          href="#comments"> 19 评论</a>&nbsp;&nbsp; <i class="fa fa-eye" aria-hidden="true"></i> 8639 浏览
        </div>
      </div>
    </article>


  </layout-slot>
</template>

<script>
  import LayoutSlot from "./slot/layout-slot";

  export default {
    name: "vue-article",
    components: {LayoutSlot}
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