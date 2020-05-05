<template>
  <div>
    <div @click="handleClick" v-if="menu && !hide" class="menu-mask"></div>
    <div v-if="menu" :style="{animationName: hide ? 'bounceOutLeft' : 'bounceInLeft' }" class="left-menu">

      <div class="menu-top">
        <div @click="handleClick" class="iconfont iconuntitled94"></div>
        <div style="width:100%;" class="d-flex">
          <img alt="" class="avatar"
               src="https://img.hacpai.com/avatar/1353745196354_1556262761146.png?imagediv2/1/w/256/h/256/interlace/0/q/100"/>
        </div>
      </div>
      <div class="content">
        <span class="title">ღゝ◡╹)ノ❤️</span>
      </div>
      <div class="nav-content">
        <a href="#">
          <div>首页<span class="count"></span></div>
        </a>
        <a url="/pages/about/about">
          <div>

            <span style="color:#7EE1FB;padding-right:10px" class="iconfont iconReact"></span>
            关于
            <span class="count"></span>

          </div>
        </a>
        <div><span style="color:#7EE1FB;padding-right:10px" class="iconfont icongithub"></span>我的开源<span
          class="count"></span></div>
        <div><span style="color:red;padding-right:10px" class="iconfont iconblacktie"></span>黑客派<span
          class="count"></span></div>
        <div><span style="color:#7EE1FB;padding-right:10px" class="iconfont iconblack-hole"></span>B3log<span
          class="count"></span></div>
        <div>分类<span class="count"></span></div>
        <div>标签墙<span class="count"></span></div>
        <div>存档<span class="count"></span></div>
        <div>友情链接<span class="count"></span></div>
        <div>Rss<span class="count"></span></div>
        <div>Search<span class="count"></span></div>
        <a href="#">
          <div>音乐库<span class="count"></span></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Menu",
    data() {
      return {
        hide: false,
        menu: false
      }
    },
    methods: {
      handleClick() {
      }
    }
  }

</script>

<style lang="scss" scoped>
  .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .3);
    /* transition: all .6s linear; */
  }

  .main-bg {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .3);
    z-index: 14;
    top: 0;
    left: 0;
  }

  .nav-content {
    color: #989898;
    padding: 0 15px ;
    height: calc(100vh - 273px);
    width: 280px;
    box-sizing: border-box;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 0;
      height: 0;
    }
  }

  .iconuntitled94 {
    font-weight: bold;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .nav-content div {
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;
    counter-increment: item;
    padding-right: 10px;

  }

  .nav-content text.count::after {
    content: counter(item, lower-roman);

    color: #B8B8B8;
    position: absolute;
    right: 0;
    top: 0;


    height: 40px;
    background: black;
    z-index: 1;
    padding-left: 10px;
    display: block;
  }

  .nav-content view::after {
    content: ".........................................................";
    padding: 0 10px;
    letter-spacing: 4px;
  }

  .content {
    text-align: center;
    position: relative;
    padding-bottom: 20px;
  }

  .content::after {
    position: absolute;
    width: 100%;
    height: 2px;
    content: "";
    background: #3b3b3b;
    left: 0;
  }

  .content .title {
    color: #b8b8b8;
    background: black;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    display: block;
    top: 50%;
    z-index: 1;
    padding: 0 20px;
  }


  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0)
    }

    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0)
    }
  }

  @keyframes bounceInLeft {
    from {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0
    }

    to {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1
    }
  }


  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(20px, 0, 0);
      transform: translate3d(20px, 0, 0);
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }


  .avatar {
    width: 132px;
    height: 132px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.5);
    margin: 80px 0 40px;

  }

  .is-hide {
    display: block;
  }

  .left-menu {
    position: fixed;
    animation-name: bounceInLeft;
    animation-duration: 1s;
    animation-fill-mode: both;
    z-index: 15;
    width: 280px;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 1);
  }

  .menu-top {
    text-align: center;
    height: 293px;
    width: 100%;
  }
</style>
