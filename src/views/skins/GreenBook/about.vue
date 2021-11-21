<template>
  <layout-slot>
    <article class="main-content page-page">
      <div class="post-header">
        <h1 class="post-title" itemprop="name headline">
          关于 </h1>
        <div class="post-data">
          <time datetime="2020-04-27T23:04:00+08:00" itemprop="datePublished"><i class="fa fa-clock-o"
                                                                                 aria-hidden="true"> </i> 2020-04-27
          </time>&nbsp;&nbsp; <i class="fa fa-comments-o" aria-hidden="true"></i> <a href="#comments"> 84 评论</a>&nbsp;&nbsp;
          <i class="fa fa-eye" aria-hidden="true"></i> 10451 浏览
        </div>
      </div>
      <div id="post-content" class="post-content">
        <p>计科专业已毕业，深圳工作，渴望并相信着美好的事情将会发生，会一直启用这个博客，算是一个不错的人生笔记。<br>代码改变世界可能很难，但做一些有趣的事情可能正好。
          <img class="smilies" src="https://rawchen.com/usr/plugins/Smilies/bilibili/icon_smile.png"
               alt="icon_smile.png" style="max-width:32px;display:inline-block; box-shadow: none; margin-bottom: -8px;">
          <img class="smilies" src="https://rawchen.com/usr/plugins/Smilies/bilibili/icon_rolleyes.png"
               alt="icon_rolleyes.png"
               style="max-width:32px;display:inline-block; box-shadow: none; margin-bottom: -8px;">
          <img class="smilies" src="https://rawchen.com/usr/plugins/Smilies/bilibili/chigua.png" alt="chigua.png"
               style="max-width:32px;display:inline-block; box-shadow: none; margin-bottom: -8px;">
          <img class="smilies" src="https://rawchen.com/usr/plugins/Smilies/bilibili/guzhang.png" alt="guzhang.png"
               style="max-width:32px;display:inline-block; box-shadow: none; margin-bottom: -8px;">
          <img class="smilies"
               src="https://rawchen.com/usr/plugins/Smilies/bilibili/icon_biggrin.png"
               alt="icon_biggrin.png"
               style="max-width:32px;display:inline-block; box-shadow: none; margin-bottom: -8px;">
        </p>

        <img id="githubChart" src="https://ghchart.rshah.org/2016rshah/arrowfield"
             onclick="window.open('https://github.com/arrowfield')">
        <div class="about-contact">
          <a href="http://wpa.qq.com/msgrd?v=3&uin=768449566&site=qq&menu=yes" target="_blank">
            <div class="qq">
              <span class="content">768449566</span>
              <i class="fa fa-qq"></i>
            </div>
          </a>
          <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=nP3u7vPr_vX58Pj65uzc7e2y--Px" target="_blank">
            <div class="email">
              <span class="content">arrowfieldfzp@qq.com</span>
              <i class="fa fa-envelope-o"></i>
            </div>
          </a>
          <a href="https://twitter.com/zipfang" target="_blank">
            <div class="telegram">
              <span class="content">ZipFang</span>
              <i class="fa fa-telegram"></i>
            </div>
          </a>
        </div>
        <h1>项目版权</h1>
        <p>如侵犯他人著作权、名誉权、隐私权及肖像权等请联系本站删除。</p></div>
    </article>
  </layout-slot>
</template>

<script>
  import LayoutSlot from "@/views/skins/GreenBook/slot/layout-slot";

  export default {
    name: "about",
    components: {LayoutSlot}
  }
</script>

<style scoped>

</style>