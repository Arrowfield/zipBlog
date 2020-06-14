<template>
  <div class="left-content " :class="{'screen-change':showMenu,'is-ie':isIe}">
    <div class="avatar">
      <a href="/">
        <!--        <img src="../assets/img/index/avatar.gif" title="Z 的技术博客" alt="">-->
        <img src="../assets/img/index/kenan_avatar.png" title="Z 的技术博客" alt="">
      </a>
    </div>
    <div class="intro">
      <div class="article">
        <p>文章</p>
        <p>{{ total }}</p>
      </div>
      <div class="views">
        <p>浏览</p>
        <p>{{ views }}</p>
      </div>
    </div>
    <div class="intro menu-list">
      <router-link to="/" v-waves><i class="iconfont iconshouye1"></i>回到首页</router-link>
      <router-link to="/link" v-waves><i class="iconfont icondaohang"></i>友情链接</router-link>
      <router-link to="/tags" v-waves><i class="iconfont iconbiaoqian1"></i>标签</router-link>
      <router-link to="/about" v-waves><i class="iconfont iconguanyu"></i>关于我</router-link>
      <router-link to="/photo" v-waves><i class="iconfont iconxiangce"></i>相册</router-link>
      <router-link to="/mood" v-waves><i class="iconfont iconziyuan"></i>心情随笔</router-link>
      <router-link to="/address" v-waves><i class="iconfont iconlianjie1"></i>好站推荐</router-link>
    </div>
    <div class="intro fun-list">
      <h3>功能按钮</h3>
      <div class="fun-items btn">
        <a v-waves href="#" title="搜索"><i class="iconfont iconhuabanfuben"></i></a>
        <a v-waves href="#" title="ssr"><i class="iconfont iconwifi"></i></a>
        <!--        <a v-waves href="#">-->
        <!--          <i class="iconfont iconshuji"></i>-->
        <!--        </a>-->
        <a v-waves href="http://music.sxswyc.top/" class="code-cont" title="音乐馆" target="_blank">
          <i class="iconfont iconyinyue"></i>
        </a>
        <a v-waves href="//v.sxswyc.top/" class="code-cont" title="视频屋" target="_blank">
          <i class="iconfont iconshipin"></i>
        </a>
      </div>
    </div>

    <div class="intro fun-list">
      <h3>社交功能</h3>
      <div class="fun-items">
        <a v-waves href="//github.com/Arrowfield" title="https://github.com/Arrowfield" target="_blank"><i
          class="iconfont icongithub"></i></a>
        <a v-waves href="//qm.qq.com/cgi-bin/qm/qr?k=RmZQeDHL_tjQIKwib_rmvEFa7AsOMSj-&noverify=0#" title="768449566"
           target="_blank"><i class="iconfont iconqq"></i></a>
        <a href="javascript:" class="code-cont">
          <i class="iconfont iconweixin"></i>
          <div class="code">
            <img alt="" src="../assets/img/index/code.jpg">
          </div>
        </a>
        <a v-waves href="javascript:" class="code-cont" title="登录">
          <i class="iconfont icondenglu"></i>
        </a>
      </div>
    </div>

    <div class="intro fun-list tags-list">
      <h3>标签</h3>
      <div class="tags">
        <a href="javascript:"
           :style="{background:bgColors[i%(bgColors.length - 1)],color:textColors[i%(textColors.length - 1)]}"
           v-loading-self="loading" v-for="(item,i) in tags"># {{ item }}</a>
        <a href="javascript:" v-if="tags.length === 0" :style="{background:bgColors[0],color:textColors[0]}">wuwu
          一个标签都没有，，，</a>
      </div>
    </div>

    <div class="intro fun-list">
      <h3>分类</h3>
      <ul class="category-list">
        <li>
          <a href="">暂无分类</a>
          <span>0</span>
        </li>
        <li>
          <a href="">-</a>
          <span>0</span>
        </li>
      </ul>
    </div>

    <div class="intro fun-list">
      <h3>存档</h3>
      <ul class="category-list">
        <li v-for="item in archive">
          <a v-waves href="javascript:">{{ item.date  }}</a>
          <span>{{ item.length }}</span>
        </li>
      </ul>
    </div>

    <div class="intro fun-list tags-list">
      <h3>公告栏</h3>
      <div class="tags">
        <i v-if="paused" class="play iconfont iconplay-circle-fill" @click="handlePlay"></i>
        <i v-else class="play iconfont iconpoweroff-circle-fill" @click="handlePlay"></i>
        <video ref="video" poster="../assets/img/index/poster.jpg" autoplay muted loop class="video"
               src="https://arrowfield.top/Inuyasha.mp4" preload="auto"></video>
      </div>
    </div>


    <div class="copyright">
      <p>&copy; 2020 <a href="javascript:">银杏树下</a></p>
      <p><a href="http://www.beian.miit.gov.cn/?spm=a2c4g.11186623.2.16.27c57dc6ACGjxx"
            target="_blank">粤ICP备20045257号</a></p>
      <p>粤公网安备<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030902002087" target="_blank">
        44030902002087号</a></p>


      <!--      <div style="width:300px;margin:0 auto; padding:20px 0;">-->
      <!--        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030902002087"-->
      <!--           style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">-->
      <!--          <img src="" style="float:left;"/>-->
      <!--          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">粤公网安备 44030902002087号</p></a>-->
      <!--      </div>-->

      <!--      <p>Powered by <a href="#">Solo</a></p>-->
      <!--      <p>Theme <a href="#">solo-nexmoe</a> by <a href="#">InkDP</a></p>-->
      <p v-html="" class="count-img"><a href="https://new.cnzz.com/v1/login.php?siteid=1278967959"
                                        target="_blank">站长统计</a>
      </p>
      <p class="data-time" >{{ time }}</p>
    </div>
  </div>
</template>


<script>
  import waves from "@/directive/waves/waves";
  import {
    mapState
  } from 'vuex'
  import {
    getArticleList
  } from "@/api/home";
  import setting from "@/settings"
  import {Bus} from "@/utils/Bus";
  import {getIndexData} from "@/api/indexData";

  export default {
    name: "LeftContent",
    data() {
      return {
        isIe: false,
        countInnerHtml: "",
        views: "-",
        loading: false,
        tags: [],
        timer: null,
        time: "",
        paused: true,
        archive: []
      }
    },
    computed: {
      ...mapState({
        total: state => state.indexBaseData.articleTotal,
        bgColors: state => state.bgColors,
        textColors: state => state.textColors
      }),
      //time() {
        // let start = new Date(setting.siteStartTime).getTime()
        // let now, timestamp, day, hours, m, s
        // now = new Date().getTime()
        // timestamp = now - start
        // day = Math.floor(timestamp / (3600 * 24 * 1000))
        // hours = Math.floor(timestamp % (3600 * 24 * 1000) / (1000 * 3600))
        // m = Math.floor(timestamp % (3600 * 24 * 1000) % (1000 * 3600) / (1000 * 60))
        // s = Math.round(timestamp % (3600 * 24 * 1000) % (1000 * 3600) % (1000 * 60) / 1000)
        //return `${day}天${hours}小时${m}分钟${s}秒`
        //return new Date()
      //}
    },
    filters: {

    },
    directives: {
      waves
    },
    props: {
      showMenu: [Boolean],
      showMenuFun: {
        type: [Boolean, String],
        // default:true
      }
    },
    watch: {},
    methods: {
      goToPage() {
        // const {href} = this.$router.resolve({path})
        // window.open(href,'_self')
      },
      handlePlay() {
        //console.log(this.$refs.video)
        if (this.$refs.video.paused) {
          this.$refs.video.play()
          this.paused = false
        } else {
          this.$refs.video.pause()
          this.paused = true
        }
      },
      getCountImage() {
        //let dom = document.getElementById("cnzz_stat_icon_1278967959")
        //this.countInnerHtml = `站长统计${dom.innerHTML}`
        //获取网页开始的时间
        let el = document.getElementsByClassName('data-time')[0]
        let start = new Date(setting.siteStartTime).getTime()
        this.timer = setInterval(() => {
          let now, timestamp, day, hours, m, s
          now = new Date().getTime()
          timestamp = now - start
          day = Math.floor(timestamp / (3600 * 24 * 1000))
          hours = Math.floor(timestamp % (3600 * 24 * 1000) / (1000 * 3600))
          m = Math.floor(timestamp % (3600 * 24 * 1000) % (1000 * 3600) / (1000 * 60))
          s = Math.round(timestamp % (3600 * 24 * 1000) % (1000 * 3600) % (1000 * 60) / 1000)
          //this.time = `${day}天${hours}小时${m}分钟${s}秒`
          el.innerHTML = `${day}天${hours}小时${m}分钟${s}秒`
        }, 1000)
      },
      articleList(page) {

        let pageNum = 1
        if (page) pageNum = page
        try {
          let params = {
            page: pageNum
          }
          this.loading = true
          this.$store.commit("setLoading", true)
          getArticleList(params).then((res) => {
            let data = res.data
            //console.log(res)
            this.$store.commit("setIndexBaseData", {
              total: res.data.total
            })
            this.$store.commit("article/setDatalist", res.data.data)
            this.views = data.viewsTotal
            this.tags = _.take(data.tags, 7)
            this.$store.commit("setTags", data.tags)
            this.loading = false
            this.$store.commit("setLoading", false)
            // window.scrollTo(0,0)
          }) //获取所有的文章
        } catch (e) {
          if (e) throw e
        }
      },

      formatterDate(val) {
        let date = new Date(parseInt(val))

        let year = date.getFullYear(), month = date.getMonth() + 1
        return `${year} 年 ${month < 10 ? "0" + month : month} 月`
      }
    },
    mounted() {
      let agent = navigator.userAgent
      if (agent.indexOf("MSIE") > -1 || agent.indexOf("Edge") > -1) {
        this.isIe = true
      }
      this.getCountImage()
      //异步加载数据
      this.articleList()
      getIndexData().then((res) => {

        let data = res.data.archive
        let tmp = data.map((item) => {
          return item.archiveTime
        })
        let obj = {}, result = [];
        for (var i = 0, l = tmp.length; i < l; i++) {
          let item = tmp[i];
          obj[item] = (obj[item] + 1) || 1;
        }
        for (let key in obj) {
          result.push({
            date: this.formatterDate(key),
            length: obj[key]
          })
        }
        this.archive = result
      })
      Bus.$on('getArticleList', this.articleList)
    },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>

<style lang="scss">
  .count-img img {
    width: auto;
    vertical-align: top;

  }
</style>

<style lang="scss" scoped>
  .left-content-page {
    width: 260px;
    overflow: hidden;
  }

  .left-content {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 260px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    /*transition: all .3s cubic-bezier(0,0,.2,1);*/


    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .copyright {
      margin: 20px;
      text-align: right;
      padding: 0 10px;
      font-size: 12px;
      color: #444;

      font-family: 'Arizonia', cursive;

      a {
        color: rgba(255, 78, 106, .8);
        opacity: .8;

        &:hover {
          opacity: 1;
        }
      }

      .data-time {
        color: white;
        font-family: "Microsoft YaHei", Roboto, Noto, Helvetica, Arial, sans-serif;
        font-size: 12px;
      }

      .count-img {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }

    .intro {
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 1rem rgba(161, 177, 204, .4);
      margin: 20px;
      padding: 15px;
      display: flex;

      .category-list {
        li {
          border-bottom: 1px solid #eee;
          position: relative;

          &:last-child {
            border-bottom: none;
          }

          a {
            padding: 0 10px;
            height: 50px;
            display: block;
            line-height: 50px;
            color: #606266;
            font-size: 15px;
          }

          span {
            background-color: rgba(255, 78, 106, .8);
            display: inline-block;
            width: 26px;
            height: 26px;
            line-height: 26px;
            font-size: 14px;
            text-align: center;
            border-radius: 100%;
            color: #fff;
            position: absolute;
            right: 10px;
            top: 50%;
            margin-top: -13px;
          }
        }
      }

      &.tags-list {
        .tags {
          padding: 10px 10px 5px;
          position: relative;

          &:hover .play {

            opacity: 1;
          }
        }

        .play {
          position: absolute;
          font-size: 25px;
          color: white;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          /*display: none;*/
          cursor: pointer;
          opacity: 0;
          z-index: 100;
        }

        .video {
          width: 100%;
          cursor: pointer;
        }

        a {
          border-radius: 10px;
          padding: 5px 10px;
          color: #fff;
          font-size: 12px !important;
          display: inline-block;
          margin-bottom: 5px;
          background: rgba(255, 78, 106, .15);
          color: rgba(255, 78, 106, .8);
          margin-right: 5px;
        }
      }

      &.fun-list {
        display: block;
        padding: 0;

        h3 {
          font-size: 1.2em;
          font-weight: 400;
          padding: 12px 10px 10px;
          border-bottom: 1px solid #eee;
          margin: 0;
        }

        .fun-items {
          display: flex;
          align-items: center;
          padding: 0 4px;
          flex-wrap: wrap;

          .code-cont {
            position: relative;

            &:hover .code {
              display: block;
            }

            .code {
              display: none;

              &::after {
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                top: -16px;
                left: 50%;
                margin-left: -8px;
                border-style: solid;
                border-width: 8px;
                border-color: transparent transparent white transparent;
              }

              img {
                width: 100%;
                border-radius: 10px;
              }

              border-radius: 10px;
              position: absolute;
              width: 150px;

              top: 100%;
              margin-top: 5px;
              left: 50%;
              margin-left: -75px;
              /*overflow: hidden;*/
              background: white;
              box-shadow: 0 0.3rem 2rem rgba(161, 177, 204, .6);


            }
          }
        }


        .fun-items a {
          width: 40px;
          height: 40px;
          margin: 6px;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          color: #9ca2a8;
          line-height: 40px;
          background-color: rgba(180, 180, 255, .15);
        }

        .fun-items.btn a:nth-child(1) {
          color: #64dcf0;
        }

        .fun-items.btn a:nth-child(2) {
          color: #d4237a;
        }

        .fun-items.btn a:nth-child(3) {
          color: #f4ea2a;
        }

        .fun-items.btn a:nth-child(4) {
          color: #d4237a;
        }

        .fun-items.btn a:nth-child(5) {
          color: #1296db;
        }

        .fun-items a:nth-child(1) {
          color: #2c2c2c;
        }

        .fun-items a:nth-child(2) {
          color: #1296db;
        }

        .fun-items a:nth-child(3) {
          color: #1afa29;
        }


      }

      .article,
      .views {
        p:nth-child(1) {
          color: #363636;
          margin-bottom: 3px;
        }

        width: 50%;
        text-align: center;
        color: #a3a8ae;
      }

      &.menu-list {
        display: block;

        a {
          padding: 0 36px;
          color: #9ca2a8;
          transition: all .35s;
          border-radius: 10px;
          margin: 10px 0;
          display: block;

          width: 100%;
          height: 48px;
          line-height: 48px;
          overflow: hidden;

          &.router-link-exact-active {
            color: #fff;
            opacity: .9;
            background: #ff4e6a;
            box-shadow: 0 2px 12px #ff4e6a;

            &:hover {
              color: #fff;
              opacity: .9;
              background: #ff4e6a;
              box-shadow: 0 2px 12px #ff4e6a;
            }
          }

          &:hover {
            background-color: rgba(0, 0, 0, .08);
          }

          i {
            font-size: 22px;
            margin-right: 7px;
          }
        }
      }
    }
  }

  .avatar {
    z-index: 4;
    position: relative;
    font-size: 0;
    overflow: hidden;
    border-radius: 100%;
    width: 170px;
    height: 170px;
    margin: 45px auto 0;
    box-shadow: 0 0.3rem 2rem rgba(161, 177, 204, .6);

    img {
      width: 170px;
      height: 170px;
    }
  }
</style>
