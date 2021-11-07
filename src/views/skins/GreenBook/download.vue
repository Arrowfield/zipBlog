<template>
  <layout-slot class-name="page-page">
    <div class="post-header">
      <h1 class="post-title" itemprop="name headline">
        下载 </h1>
      <div class="post-data">
        <time datetime="2020-04-28T10:02:00+08:00" itemprop="datePublished">
          <i class="fa fa-clock-o" aria-hidden="true"> </i> 2020-04-28
        </time>&nbsp;&nbsp; <i class="fa fa-comments-o" aria-hidden="true"></i> <a href="#comments"> 7 评论</a>&nbsp;&nbsp;
        <i class="fa fa-eye" aria-hidden="true"></i> 5279 浏览
      </div>
    </div>
  </layout-slot>
</template>

<script>
  import LayoutSlot from "./slot/layout-slot";

  export default {
    name: "download",
    components: {LayoutSlot},
    data() {
      return {
        downInfo: {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-page {
    max-width: 970px;
    padding: 130px 25px 20px;;
  }

  .post-title:before {
    font-weight: 600;
    content: '[';
    color: #ea5055;
    margin-right: 5px;
  }

  .post-title:after {
    font-weight: 600;
    content: ']';
    color: #ea5055;
    margin-left: 5px;
  }
</style>