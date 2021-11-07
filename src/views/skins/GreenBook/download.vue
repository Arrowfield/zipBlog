<template>
  <layout-slot class="down-page" class-name="page-page" :bodyImage="bodyImage">
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
    <div id="post-content" class="post-content">
    <blockquote><p><a href="https://pan.rawchen.com" target="_blank">https://pan.rawchen.com</a><br><a
      href="https://blog.yoyling.com/file" target="_blank">https://blog.yoyling.com/file</a></p></blockquote>
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
        downInfo: {},
        bodyImage: require('./images/bg.png')
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

  .down-page {
    background-repeat: repeat;
  }

  .post-content pre code {
    border-radius: 6px;
    /* max-height: 500px; */
    line-height: 20px;
    margin: 0;
    padding: 1.3em;
    /* color: #313131; */
    background-color: #2b2e33;
  }

  .post-content p a {
    color: #4c94dd;
    border-bottom: 1px dotted #ccc;
    position: relative;
  }

  .post-content p a::after {
    background: currentColor;
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    transition: width .2s ease;
    width: 0;
  }

  .post-content p a:hover::after {
    width: 100%;
  }
</style>