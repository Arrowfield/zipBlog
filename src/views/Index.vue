<template>
  <div @scroll="handleScroll" class="index">

    <div class="my-top">
      <button @tap="handleClick" class="menu" :class="{'is-scroll':isScroll}">MENU</button>

      <div @click="handleClick" class="title">D的个人博客</div>
      <div class="intro">
        <div class="intro-title" >开源程序员，自由职业者</div>
        <div>小而美的 Java 博客系统 <em style="color:orangered;">Solo</em></div>
        <div>Golang 在线 IDE <em style="color:#4183c4">Wide</em></div>
        <div>黑客与画家的社区 <em style="color:#f47e00">Sym</em></div>
      </div>
      <img class="arrow" src="../assets/img/index/arrow.svg">
    </div>

    <div class="article">
      <div class="item">
        <div class="title">创业的第二个夏天</div>
        <div class="content">如果你是第一次看这个系列的文章，可从第一篇《创业的第一个春天》1 看起。 这个夏天我开始做己的事情了。 星火 做一个真正意义上的社区，这是我最近几年</div>
        <div class="list-intro">
          <div style="color:#77b6ff;">88250</div>
          <div>.</div>
          <div>创业</div>
          <div></div>
          <div>B3LOG</div>
          <div>.</div>
          <div>41评论</div>
          <div>.</div>
          <div>185浏览</div>
        </div>
      </div>
      <div class="item">
        <div class="title">创业的第二个夏天</div>
        <div class="content">如果你是第一次看这个系列的文章，可从第一篇《创业的第一个春天》1 看起。 这个夏天我开始做己的事情了。 星火 做一个真正意义上的社区，这是我最近几年</div>
        <div class="list-intro">
          <div style="color:#77b6ff;">88250</div>
          <div>.</div>
          <div>创业</div>
          <div></div>
          <div>B3LOG</div>
          <div>.</div>
          <div>41评论</div>
          <div>.</div>
          <div>185浏览</div>
        </div>
      </div>
      <div class="item">
        <div class="title">创业的第二个夏天</div>
        <div class="content">如果你是第一次看这个系列的文章，可从第一篇《创业的第一个春天》1 看起。 这个夏天我开始做己的事情了。 星火 做一个真正意义上的社区，这是我最近几年</div>
        <div class="list-intro">
          <div style="color:#77b6ff;">88250</div>
          <div>.</div>
          <div>创业</div>
          <div></div>
          <div>B3LOG</div>
          <div>.</div>
          <div>41评论</div>
          <div>.</div>
          <div>185浏览</div>
        </div>
      </div>
      <div class="item">
        <div class="title">创业的第二个夏天</div>
        <div class="content">如果你是第一次看这个系列的文章，可从第一篇《创业的第一个春天》1 看起。 这个夏天我开始做己的事情了。 星火 做一个真正意义上的社区，这是我最近几年</div>
        <div class="list-intro">
          <div style="color:#77b6ff;">88250</div>
          <div>.</div>
          <div>创业</div>
          <div></div>
          <div>B3LOG</div>
          <div>.</div>
          <div>41评论</div>
          <div>.</div>
          <div>185浏览</div>
        </div>
      </div>
      <div class="item">
        <div class="title">创业的第二个夏天</div>
        <div class="content">如果你是第一次看这个系列的文章，可从第一篇《创业的第一个春天》1 看起。 这个夏天我开始做己的事情了。 星火 做一个真正意义上的社区，这是我最近几年</div>
        <div class="list-intro">
          <div style="color:#77b6ff;">88250</div>
          <div>.</div>
          <div>创业</div>
          <div></div>
          <div>B3LOG</div>
          <div>.</div>
          <div>41评论</div>
          <div>.</div>
          <div>185浏览</div>
        </div>
      </div>
    </div>

    <!--    <mymenu :menu="menu" v-if="false"></mymenu>-->

  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        isScroll: false
      }
    },
    methods: {
      handleClick() {

      },
      handleScroll() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu.is-scroll {
    left: -4px;
    background: #333;
    font-size: 0;
  }

  .index {
    background: #f4f8fb;
    height: 100vh;
  }

  .article {
    padding: 20px;
  }

  .article .title {
    color: black;
    font-size: 18px;
    line-height: 22px;
    height: 22px;
    text-align: left;
    font-weight: bold;
  }

  .article .item {
    padding: 16px;
    background: white;
    border-bottom: 1px solid #f0f2f7;
  }

  .article .list-intro {
    color: #738a94;
    font-size: 12px;
  }

  .article .content {
    font-size: 14px;
    line-height: 22px;
    margin: 10px 0;
    color: #15171a;
  }

  .article .list-intro div {
    display: inline-block;
    margin-right: 10px;
  }

  .menu {
    position: fixed;
    left: 20px;
    top: 20px;
    border: 1px solid rgba(255, 255, 255, .6);
    padding: 0 5px;
    color: white;
    text-align: center;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    transition: all .2s linear;
    z-index: 10;
    background: transparent;
    outline: none;
    cursor: pointer;
    min-width: 75px;

  }

  .menu image {
    width: 50px;
    height: 50px;
  }

  .title {
    text-align: center;
    font-size: 50px;
    color: white;
    letter-spacing: 4px;
    opacity: 1;
    /*animation: fadeInDown 1s both;*/
    /*animation-delay: .5s;*/
  }

  .intro {
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    animation: fadeInDown .9s both;
    animation-delay: .9s;

    .intro-title{
      font-size: 20px;
    }
  }

  .intro em {
    display: inline-block;
  }


  .arrow {
    width: 34px;
    height: 34px;
    position: absolute;
    bottom: 10px;
    animation: bounce 4s 2s infinite;
    cursor: pointer;
  }


  /*动画*/
  @keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0)
    }

    40% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px)
    }

    60% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px)
    }
  }

  .my-top {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: rgba(255, 255, 255, .8);
    background: url("../assets/img/index/header-bg.jpg") no-repeat center;
    background-size: cover;
  }

</style>

