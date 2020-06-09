<template>
  <div class="index" :class="{'index-change':showMenu}">
    <!--    <CanvasBackground></CanvasBackground>-->
    <div class="bg"></div>
    <div class="index-mask" v-if="showMenu" @click="changeMenuStatus"></div>
    <transition name="menu">
      <LeftContent v-show="showMenu" :showMenu="showMenu"/>
    </transition>
    <LeftContent v-show="!showMenu"/>
    <RightContent :showMenu.sync="showMenu"/>
    <div class="go-top-panel" @click.stop="goTop">
      <img src="@/assets/img/index/top.png" class="icon go-top" alt="">
    </div>
    <canvas :width="width" :height="height" id="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
  import RightContent from '@/components/RightContent'
  import LeftContent from "@/components/LeftContent";
  import ProgressSelf from '../plugin/Progress/Progress'
  import CanvasBackground from "../components/canvas-background/CanvasBackground";
  import {drawBubble} from "../components/canvas-background/drewCanvas";

  export default {
    components: {
      RightContent,
      LeftContent,
      CanvasBackground
    },
    name: "Index",
    data() {
      return {
        showMenu: false,
        showMenuFun: true,
        width: 200,
        height: 200,
        ctx: null,
        canvas: null,
        initCanvas: {}
      }
    },
    watch: {
      showMenu(val) {
        if (val) {
          document.body.classList.add('add-mask-panel')
        } else {
          document.body.classList.remove('add-mask-panel')
        }
      }
    },
    methods: {
      goTop() {
        //window.scrollTo(0,0)
        document.querySelector('#app').scrollIntoView({block: 'start', behavior: 'smooth'})
      },
      handleClick() {
      },
      handleScroll() {
      },
      changeMenuStatus() {
        this.showMenu = !this.showMenu
      },
      addLoveIcon(e) {
        ProgressSelf({left: e.clientX, top: e.clientY})
      },
      resize() {
        this.width = window.innerWidth
        this.height = window.innerHeight
      },
      //canvas绘制
      drawBubble() {
        window.requestAnimationFrame(this.drawBubble)
        drawBubble(this.ctx, this.initCanvas)
      },
      //canvas初始化数据
      initData() {
        let originY = [], num = 300, speed = [], radius = [], alive = [], destory = []
        for (let i = 0; i < num; i++) {
          originY[i] = this.ctx.canvas.height
          speed[i] = Math.random() * 0.09 + 0.01;
          radius[i] = Math.random() * 5 + 2;
          alive[i] = false
          destory[i] = this.ctx.canvas.height / 5 - Math.random() * this.ctx.canvas.height / 5
        }
        // console.log(num)
        this.initCanvas = {
          originX: 0,
          originY: originY,
          distance: 3,
          offset: 10,
          num: num,
          speed,
          radius,
          alive,
          destory
        }
      }
    },
    mounted() {
      document.body.addEventListener("click", this.addLoveIcon)
      window.addEventListener("resize", this.resize)
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.$nextTick(() => { //要等到width，height 赋值完之后 在初始化
        this.ctx = this.$refs.canvas.getContext('2d')
        this.initData()
        this.drawBubble()
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resize)
    }
  }
</script>

<style lang="scss" scoped>

  #canvas {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    /*background: white;*/
  }


  .menu-enter-active {
    transition: all .6s ease;
  }

  .menu-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .menu-enter, .menu-leave-to {
    transform: translateX(-260px);
    opacity: 0;
  }


  .index {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    .go-top-panel {
      position: fixed;
      bottom: 80px;
      right: 20px;
      cursor: pointer;
      color: white;
      padding: 10px;
    }

    .go-top {

      width: 30px;
      // height: 50px;

    }

    &.index-change {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    & > .index-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, .4);
      z-index: 100;
    }
  }

  .index .bg {
    background: #f4f8fb;
    height: 100vh;
    /*opacity: .7;*/
    background: url("../assets/img/index/header-bg.jpg") no-repeat center;
    background-size: cover;
    width: 100vw;
    position: fixed;
    z-index: -1;
    left: 0;
    /*background-attachment: fixed;*/
  }

</style>

