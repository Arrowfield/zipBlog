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
        <p>34</p>
      </div>
      <div class="views">
        <p>浏览</p>
        <p>59630</p>
      </div>
    </div>
    <div class="intro menu-list">
      <router-link to="/" v-waves><i class="iconfont iconshouye"></i>回到首页</router-link>
      <router-link to="/link" v-waves><i class="iconfont icondaohang"></i>友情链接</router-link>
      <router-link to="/tags" v-waves><i class="iconfont iconbianqian"></i>标签</router-link>
      <router-link to="/about" v-waves><i class="iconfont iconguanyu"></i>关于我</router-link>
      <router-link to="/photo" v-waves><i class="iconfont iconxiangce"></i>相册</router-link>
    </div>
    <div class="intro fun-list">
      <h3>功能按钮</h3>
      <div class="fun-items btn">
        <a v-waves href="#"><i class="iconfont iconhuabanfuben"></i></a>
        <a v-waves href="#"><i class="iconfont iconwifi"></i></a>
        <a v-waves href="#">
          <i class="iconfont iconshuji"></i>
        </a>
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
        <a v-loading-self="true"># 随笔</a>
        <a># golang</a>
        <a># 算法</a>
        <a># 关于我</a>
        <a># 随笔</a>
        <a># 随笔</a>
      </div>
    </div>

    <div class="intro fun-list">
      <h3>分类</h3>
      <ul class="category-list">
        <li>
          <a href="">环境搭建</a>
          <span>10</span>
        </li>
        <li>
          <a href="">杂谈与随笔</a>
          <span>0</span>
        </li>
      </ul>
    </div>

    <div class="intro fun-list">
      <h3>存档</h3>
      <ul class="category-list">
        <li>
          <a href="">2020年5月10号</a>
          <span>10</span>
        </li>
        <li>
          <a href="">2020年5月9号</a>
          <span>0</span>
        </li>
      </ul>
    </div>

    <div class="copyright">
      <p>&copy; 2020 <a href="#">银杏树下</a></p>
      <p><a href="http://www.beian.miit.gov.cn/?spm=a2c4g.11186623.2.16.27c57dc6ACGjxx" target="_blank">粤ICP备20045257号</a></p>
      <p>20202225656<a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank">粤公网安备</a></p>
<!--      <p>Powered by <a href="#">Solo</a></p>-->
<!--      <p>Theme <a href="#">solo-nexmoe</a> by <a href="#">InkDP</a></p>-->
    </div>
  </div>

</template>

<script>
  import waves from "@/directive/waves/waves";

  export default {
    name: "LeftContent",
    data(){
      return{
        isIe:false
      }
    },
    directives: {
      waves
    },
    props: {
      showMenu: {
        default: false
      }
    },
    watch: {},
    methods: {
      goToPage() {
        // const {href} = this.$router.resolve({path})
        // window.open(href,'_self')
      }
    },
    mounted(){
      let agent = navigator.userAgent
      if(agent.indexOf("MSIE") > -1 || agent.indexOf("Edge") > -1)
        this.isIe = true
    }
  }
</script>

<style lang="scss" scoped>

  .left-content-page{
    width: 260px;
    /*position: relative;*/
    overflow: hidden;
  }

  .left-content {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 260px;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style:none;

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
            padding: 14px 10px;
            display: block;
            color: #606266;
            font-size: 15px;
          }

          span {
            background-color: rgba(255, 78, 106, .8);
            display: inline-block;
            width: 26px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            border-radius: 100%;
            color: #fff;
            position: absolute;
            right: 10px;
            top: 10px;
          }
        }
      }

      &.tags-list {
        .tags {
          padding: 10px 10px 5px;
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

      .article, .views {
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
