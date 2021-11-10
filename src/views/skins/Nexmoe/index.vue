<template>
  <div class="index" :class="{'index-change':showMenu}">
    <!--    <CanvasBackground></CanvasBackground>-->
    <div class="bg"></div>
    <div class="index-mask" v-if="showMenu"  @click="changeMenuStatus"></div>

    <LeftContent :showMenu="showMenu" :class="{action:!isMove}"  :style="{transform:`translate(${offsetLeft}px)`}"/>


<!--    <RightContent :showMenu.sync="showMenu" :fixed="fixedLeft"/>-->
    <div class="go-top-panel" :class="{show:showTop}" @click.stop="goTop">
      <img src="@/assets/images/index/top.png" class="icon go-top" alt="">
    </div>
    <!--    <div class="small-screen">-->
    <!--      <i class=" iconfont iconzhidingtop"></i>-->
    <!--    </div>-->
    <canvas :width="width" :height="height" id="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
  import RightContent from '@/components/RightContent'
  import LeftContent from "@/components/LeftContent";
  import ProgressSelf from '../../../plugins/Progress/Progress'
  import CanvasBackground from "../../../components/canvas-background/CanvasBackground";
  import {drawBubble} from "../../../components/canvas-background/drewCanvas";
  import changePageTitle from '@/utils/changePageTitle'

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
        initCanvas: {},
        timer: null,
        leaveTimer: null,
        showTop: false,
        fixedLeft: false,
        offsetLeft:-260,
        startX:0,
        isMove:false
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
        this.offsetLeft = -260
        this.isMove = false
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
        this.timer = window.requestAnimationFrame(this.drawBubble)
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
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'hidden') { //状态判断
          if (this.leaveTimer) clearTimeout(this.leaveTimer)
          changePageTitle("(╮(๑•́ ₃•̀๑)╭)看不到我啦")
        } else {
          // if (time) clearTimeout(time)
          changePageTitle("(◡‿◡✿)欢迎回来")
          this.leaveTimer = setTimeout(() => {
            changePageTitle()
          }, 1000)
        }
      })
      window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        this.showTop = scrollTop > 500
        this.fixedLeft = scrollTop > 300
      })
      window.addEventListener("resize", this.resize)
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.$nextTick(() => { //要等到width，height 赋值完之后 在初始化
        this.ctx = this.$refs.canvas.getContext('2d')
        this.initData()
        //this.drawBubble()
      })
      document.addEventListener("touchstart",(e)=>{
        this.startX = e.targetTouches[0].clientX
        // this.isMove = true
      })
      document.addEventListener("touchmove.prevUC",(e)=>{
        e.preventDefault()
      })
      document.addEventListener("touchmove",(e)=>{
        if(this.startX > 10) return
        // console.log(e)
        this.offsetLeft = ( e.targetTouches[0].clientX - 260)
        if(this.offsetLeft > 0) this.offsetLeft = 0
        this.isMove = true
      })
      document.addEventListener("touchend",(e)=>{
        if(this.startX > 10) return
        if(this.offsetLeft < 0) this.offsetLeft = 0
        this.showMenu = true
        this.isMove = false
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resize)
      window.cancelAnimationFrame(this.timer)

    }
  }
</script>

<style lang="scss" scoped>
  .action{


    transition: all .3s cubic-bezier(0,0,.2,1);
  }

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
      opacity: 0;
      transition: all .3s ease-in;

      &.show {
        opacity: 1;
      }
    }

    .small-screen {

      width: 36px;
      height: 36px;
      background: #333;
      opacity: .5;
      color: white;
      line-height: 36px;
      text-align: center;
      position: fixed;
      top: 80px;
      left: -3px;
      z-index: 99;
      border-radius: 4px;
      margin: 0 4px;

      i {
        font-size: 24px;

      }
    }

    .go-top {

      width: 30px;
      // height: 50px;

    }

    &.index-change {
      /*width: 100vw;*/
      /*height: 100vh;*/
      /*overflow: hidden;*/
    }

    & > .index-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .4);
      z-index: 100;
    }
  }

  .index .bg {
    background: #f4f8fb;
    height: 100%;
    /*opacity: .7;*/
    background: url("../../../assets/images/index/header-bg.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    position: fixed;
    z-index: -1;
    left: 0;
    /*background-attachment: fixed;*/
  }

</style>

