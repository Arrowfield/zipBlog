<template>
  <!--div class="index" :class="{'index-change':showMenu}">
        <CanvasBackground></CanvasBackground>
    <div class="bg"></div>
    <vue-header
      :showMenu.sync="showMenu"
      :class="{action:!isMove}"
      :offsetLeft="offsetLeft"
    />
        <RightContent :showMenu.sync="showMenu" :fixed="fixedLeft"/>
    <div class="go-top-panel" :class="{show:showTop}" @click.stop="goTop">
      <img src="@/assets/images/index/top.png" class="icon go-top" alt="">
    </div>
        <div class="small-screen">
          <i class=" iconfont iconzhidingtop"></i>
        </div>
    <canvas :width="width" :height="height" id="canvas" ref="canvas"></canvas>
  </div-->
  <layout-slot>
    <!--    <div class="post-lists">-->
    <!--      <div class="post-lists-body">-->
    <!--        <div class="post-onelist-item">-->
    <!--          -->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->


    <div v-loading-circ="showLoading" class="down-file post-lists main-content-right">
      <ul class="article-page" v-if="articleList.length > 0">
        <li v-for="(item,index) in articleList" :key="index">
          <router-link :to="/article/ + item.zid" v-waves class="link" :title="item.articleTitle">
            <div class="image-cont">
              <img :src="item.articleImgURL" alt="">
              <h1 class="title">{{item.articleTitle}}</h1>
              <i v-if="index < 2" class="iconfont iconstar"></i>
            </div>
          </router-link>

          <div class="tags">
            <a v-waves href="#"><i class="iconfont iconrili"></i>{{item.articleCreated | truncation}}</a>
            <a v-waves href="#"><i class="iconfont iconredu"></i>{{ item.articleViewCount }} °C</a>
            <!--          <a v-waves href="#"><i class="iconfont iconxx"></i><span class="valine-comment-count" :data-xid="`/article/${item.zid}`">{{ "-" }}</span></a>-->
            <a class="tag" :key="i" v-for="(tmp,i) in item.articleTags.split(',')" v-waves href="#"><i
              class="iconfont icondaohang1"></i>{{tmp}}</a>
          </div>
          <article>
            <p class="summary">{{item.articleAbstract}}</p>
          </article>
        </li>
      </ul>

      <!--          <PageNav :total="total" :currPage.sync="currPage" @changeCurrPage="changeCurrPage"/>-->
    </div>


  </layout-slot>
</template>

<script>
  import RightContent from '@/components/RightContent'
  import VueHeader from "./header.vue";
  import ProgressSelf from '../../../plugins/Progress/Progress'
  import CanvasBackground from "../../../components/canvas-background/CanvasBackground";
  import {drawBubble} from "../../../components/canvas-background/drewCanvas";
  import changePageTitle from '@/utils/changePageTitle'
  import LayoutSlot from "./slot/layout-slot";
  import {getArticleList} from "../../../api/home";

  export default {
    components: {
      LayoutSlot,
      RightContent,
      //LeftContent,
      VueHeader,
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
        offsetLeft: -260,
        startX: 0,
        isMove: false,
        articleList: [],
        showLoading: false
      }
    },
    filters: {
      truncation(val) {
        let date = new Date(val.replace(/-/g, "/"))
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        month = month < 10 ? "0" + month : month
        return `${year}年${month}月${day}日`
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
      postArticleList(page) {
        let pageNum = 1
        if (page) pageNum = page
        //this.$store.commit("article/setDatalist", [])
        try {
          let params = {
            page: pageNum
          }
          this.loading = true
          this.$store.commit("setLoading", true)
          getArticleList(params).then((res) => {
            let data = res.data
            //console.log(res)
            // this.$store.commit("setIndexBaseData", {
            //   total: res.data.total
            // })
            // this.$store.commit("article/setDatalist", res.data.data)
            // this.views = data.viewsTotal
            // this.tags = _.take(data.tags, 7)
            // this.$store.commit("setTags", data.tags)
            // this.loading = false
            // this.$store.commit("setLoading", false)
            // window.scrollTo(0,0)
            this.articleList = res.data.data
          }) //获取所有的文章
        } catch (e) {
          if (e) throw e
        }
      },
      goTop() {
        //window.scrollTo(0,0)
        document.querySelector('#app').scrollIntoView({block: 'start', behavior: 'smooth'})
      },
      handleClick() {
      },
      handleScroll() {
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
      this.postArticleList()
      // //document.body.addEventListener("click", this.addLoveIcon)
      // document.addEventListener("visibilitychange", () => {
      //   if (document.visibilityState === 'hidden') { //状态判断
      //     if (this.leaveTimer) clearTimeout(this.leaveTimer)
      //     changePageTitle("(╮(๑•́ ₃•̀๑)╭)看不到我啦")
      //   } else {
      //     // if (time) clearTimeout(time)
      //     changePageTitle("(◡‿◡✿)欢迎回来")
      //     this.leaveTimer = setTimeout(() => {
      //       changePageTitle()
      //     }, 1000)
      //   }
      // })
      // window.addEventListener('scroll', () => {
      //   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      //   this.showTop = scrollTop > 500
      //   this.fixedLeft = scrollTop > 300
      // })
      // window.addEventListener("resize", this.resize)
      // this.width = window.innerWidth
      // this.height = window.innerHeight
      // this.$nextTick(() => { //要等到width，height 赋值完之后 在初始化
      //   // this.ctx = this.$refs.canvas.getContext('2d')
      //   // this.initData()
      //   //this.drawBubble()
      // })
      // document.addEventListener("touchstart", (e) => {
      //   this.startX = e.targetTouches[0].clientX
      //   // this.isMove = true
      // })
      // document.addEventListener("touchmove.prevUC", (e) => {
      //   e.preventDefault()
      // })
      // document.addEventListener("touchmove", (e) => {
      //   if (this.startX > 10) return
      //   // console.log(e)
      //   this.offsetLeft = (e.targetTouches[0].clientX - 260)
      //   if (this.offsetLeft > 0) this.offsetLeft = 0
      //   this.isMove = true
      // })
      // document.addEventListener("touchend", (e) => {
      //   if (this.startX > 10) return
      //   if (this.offsetLeft < 0) this.offsetLeft = 0
      //   this.showMenu = true
      //   this.isMove = false
      // })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resize)
      window.cancelAnimationFrame(this.timer)

    }
  }
</script>

<style lang="scss" scoped>
  .action {


    transition: all .3s cubic-bezier(0, 0, .2, 1);
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

  .post-lists {
    min-height: 120px;
    border-radius: 10px;
    ul{list-style: none}
    li {

      margin: 20px auto;
      border-radius: 10px;
      background-color: #fff;
      padding: 20px 20px 0;
      box-shadow: 0 0 1rem rgba(161, 177, 204, .4);
      transition: all 2s linear;

      .link {
        display: block;
        overflow: hidden;
        margin-bottom: 10px;
        border-radius: 10px;
      }

      .image-cont {
        width: 100%;
        overflow: hidden;
        border-radius: 10px;

        max-height: 500px;
        min-height: 220px;
        background-color: #eee;
        position: relative;

        img {
          max-height: 350px;
          width: 100%;
          display: block;
          opacity: 1;
          object-fit: cover;
        }

        .title {
          position: absolute;
          bottom: 0;
          padding: 15px;
          color: #fff;
          font-size: 2em;
          width: 100%;
          font-weight: 400;
          cursor: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          z-index: 5;
          white-space: nowrap;
        }

        i {
          position: absolute;
          color: #fa8d14;
          top: -3px;
          right: 0;
          font-size: 48px;
        }
      }

      article {
        color: #444;
        font-family: microsoft yahei, serif;
        margin-bottom: 20px;
        padding: 10px 0;

        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 14px;
        }
      }

      .tags {
        margin-bottom: 10px;
      }

      .tags a {
        display: inline-flex;
        border-radius: 10px;
        padding: 5px 10px;
        color: #fff;
        font-size: 14px;
        margin-bottom: 5px;
        margin-right: 10px;
        overflow: hidden;
        align-items: center;

        i {
          margin-right: 5px;
          font-size: 14px;
        }

        &:nth-child(1) {
          background: #ff4e6a;
        }

        &:nth-child(2) {
          background: #ffaa73;
        }

        &:nth-child(3) {
          background: #fed466;
        }

        &:nth-child(4) {
          background: #3cdc82;
        }

        &:nth-child(5) {
          background: #64dcf0;
        }

        &:nth-child(6) {
          background: #64b9ff;
        }
      }
    }
  }

</style>

