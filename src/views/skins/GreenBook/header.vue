<template>
  <header ref="header" id="header" class="header bg-white animated">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo">
        <img :src="headerConfig.avatar" alt=""/>
      </router-link>
      <div class="navbar-menu">

        <router-link :key="index" v-for="(item,index) of headerConfig.navMenu" :to="item.route">
          {{ item.title }}
          <ul v-if="item.children.length > 0">
            <li v-for="tmp of item.children">
              <router-link :to="tmp.route">{{ tmp.title }}</router-link>
            </li>
          </ul>
        </router-link>

      </div>

      <router-link :to="headerConfig.searchPage" class="navbar-search">
        <span class="icon-search"></span>
      </router-link>

      <!-- 移动端显示 -->
      <div @click="showMobileMenu = !showMobileMenu" class="navbar-mobile-menu" :class="{'navbar-mobile-menu-on':showMobileMenu}">
        <span  class="icon-menu cross"><span class="middle"></span></span>
        <ul ref="mobileMenu">
          <li :class="{'navbar-menu-categorys':item.children.length > 0}"
              :key="index"
              v-for="(item,index) of headerConfig.navMenu">
            <router-link :to="item.route">
              {{ item.title }}
            </router-link>
            <ul v-if="item.children.length > 0">
              <li v-for="tmp of item.children">
                <router-link :to="tmp.route">{{ tmp.title }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </header>
</template>

<script>
  export default {
    name: "vue-header",
    data() {
      return {
        headerConfig: {
          siteUrl: window.location.href,
          avatar: require('./images/logo1.png'),
          navMenu: [
            {
              title: "分类", route: "/archive",
              children: [
                {title: "点滴记录", route: ""},
                {title: "资源分享", route: ""},
                {title: "代码记录", route: ""},
                {title: "计算科学", route: ""},
              ]
            },
            {title: "影视", route: "/archive", children: []},
            {title: "相册", route: "/archive", children: []},
            {title: "简笔", route: "/archive", children: []},
            {title: "下载", route: "/download", children: []},
            {title: "音乐", route: "/archive", children: []},
            {title: "友链", route: "/archive", children: []},
            {title: "关于", route: "/archive", children: []},
          ],
          searchPage: "/search"
        },
        beforeScrollTop: 0,
        afterScrollTop: 0,
        up: -1,
        showMobileMenu: false
      }
    },
    methods: {
      scroll() {
        let scrollPos;
        if (typeof window.pageYOffset !== 'undefined') {
          scrollPos = window.pageYOffset;
        } else if (typeof document.compatMode !== 'undefined' && document.compatMode !== 'BackCompat') {
          scrollPos = document.documentElement.scrollTop;
        } else if (typeof document.body !== 'undefined') {
          scrollPos = document.body.scrollTop;
        }
        return scrollPos
      },
      windowScroll(e) {
        let top = document.documentElement.scrollTop
        let _that = this
        return function () {
          if (top > document.documentElement.scrollTop) {
            _that.up = 0
          } else {
            _that.up = 1
          }
          top = document.documentElement.scrollTop
        }
      }
    },
    mounted() {
      new Headroom(this.$el, {
        offset: 0,
        tolerance: 0,
        classes: {
          initial: "headroom",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
      }).init();
      // new Headroom(this.$refs.mobileMenu, {
      //   offset: 0,
      //   tolerance: 0,
      //   classes: {
      //     initial: "headroom",
      //     pinned: "slideDown",
      //     unpinned: "slideUp"
      //   }
      // }).init()
    }
  }
</script>
<style src="./scss/style.min.css"></style>
<style lang="scss" scoped>

  .navbar-mobile-menu .navbar-menu-categorys ul {
    position: absolute;
    top: 0;
    left: 0;
    right: unset;
    width: 100px;
    margin: 5px 0 0 -95px;
    border-radius: 15px;
    background-color: rgba(255,255,255,.95);
    -webkit-transition: .5s;
    transition: .5s
  }

  .navbar-mobile-menu .navbar-menu-categorys ul:before {
    position: absolute;
    top: 9px;
    right: -7px;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid rgba(255,255,255,.95);
    content: '';
  }

  .navbar-menu a {
    padding: 30px 15px;
    position: relative;

    ul {
      &:before {
        position: absolute;
        top: -7px;
        left: 43px;
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
        border-bottom: 7px solid rgba(238, 238, 238, .95);
        content: '';
      }

      li{display: inline;overflow: hidden}

      position: absolute;
      left: 50%;
      width: 100px;
      margin: -10px 0 0 -50px;
      padding: 0;
      border-radius: 15px;
      background-color: rgba(238, 238, 238, .95);
      opacity: 0;
      visibility: hidden;
      transition: .3s;
      box-shadow: 0 2px 4px rgb(0 0 0 / 30%);

      li a {
        font-size: 15px;
        line-height: 1;
        display: block;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
        padding: 15px;
      }
    }

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      top: 70px;
      background: #ec5454;
      height: 3px;
      transition: all .2s;
      transition-duration: .3s;
      transition-timing-function: ease-out;
      display: block;
      opacity: 0;
    }
  }

  .navbar-menu a:hover {
    background-color: #ffeded54;
    color: #ec5454;
    border-radius: 15px;

    &:before {
      left: 0;
      right: 0;
      opacity: 1
    }

    ul {
      opacity: 1;
      visibility: visible;
    }
  }
</style>
