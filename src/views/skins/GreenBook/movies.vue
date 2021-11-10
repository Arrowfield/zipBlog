<template>
  <layout-slot>
    <article class="main-content page-page">
      <div class="post-header">
        <h1 class="post-title" itemprop="name headline">
          影视		</h1>
        <div class="post-data">

          <time datetime="2020-08-22T23:56:00+08:00" itemprop="datePublished"><i class="fa fa-clock-o" aria-hidden="true"> </i> 2020-08-22</time>&nbsp;&nbsp; <i class="fa fa-comments-o" aria-hidden="true"></i> <a href="#comments"> 1 评论</a>&nbsp;&nbsp; <i class="fa fa-eye" aria-hidden="true"></i> 3859 浏览
        </div>
      </div>
      <div id="post-content" class="post-content">
        <div data-status="watched" class="douban-movie-list doubanboard-list"></div>
        <div class="douban-loadmore" id="loadMoreMovies_watched" onclick="DoubanBoard.loadMovies('watched');">加载中...</div>
        <p>电影院踪迹：</p>
        <blockquote><p>长津湖、怒火·重案、革命者、速度与激情9、悬崖之上、唐人街探案3、怪物猎人、金刚川、地狱男爵：血皇后崛起、夺冠、八佰、哈利·波特与魔法石、星际穿越、少年的你、我和我的祖国、烈火英雄、哪吒之魔童降世、扫毒2、大圣归来、调音师、大侦探皮卡丘、风中有朵雨做的云、流浪地球、完美陌生人、超时空同居、复仇者联盟3：无限战争、唐人街探案2、芳华、侏罗纪世界2、我不是药神、海王、无双、西虹市首富、狄仁杰之四大天王、快把我哥带走、红高粱、勇敢者游戏：决战丛林、大闹天竺、健忘村、生化危机：终章、攻壳机动队、摔跤吧！爸爸、寻龙诀、捉妖记2...</p></blockquote><p>美韩剧踪迹：</p><blockquote><p>鱿鱼游戏、血路狂飙、浴血黑帮、权利的游戏全季、老友记全季、绝命毒师全季、硅谷全季、生活大爆炸一二季、少年谢尔顿全季、越狱全季、神探夏洛克全季、切尔诺贝利...</p></blockquote><h1>Video赏析</h1><p><a href="https://rawchen.com/videos" target="_blank">https://rawchen.com/videos</a></p><h1>在线影视网址推荐</h1><p><a href="https://tv.rawchen.com" target="_blank">https://tv.rawchen.com</a><br><a href="https://www.zhenbuka3.com" target="_blank">https://www.zhenbuka3.com</a></p>	</div>
    </article>
  </layout-slot>
</template>

<script>
  import LayoutSlot from "./slot/layout-slot";
  export default {
    name: "movies",
    components: {LayoutSlot}
  }
</script>

<style scoped>

</style>