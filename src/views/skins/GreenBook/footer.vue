<template>
  <footer id="footer" class="footer">
    <div class="footer-social">
      <div class="footer-container clearfix">
        <div class="social-list">
          <router-link v-for="item of socialContact" :to="item.route">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
    <div class="footer-meta">
      <div class="footer-container">
        <div class="meta-item meta-copyright">
          <div class="meta-copyright-info">
            <a :href="footerIntro.route" class="info-logo">
              <img :src="footerIntro.imgUrl" alt=""/>
            </a>
            <div class="info-text">
              <p>
                {{ footerIntro.motto }}
                {{ interest[0].name }}
                <span
                  v-for="(item,index) of interest[0].replace"
                  :style="{color: settings.textColors[index % settings.textColors.length]}">
                  {{item}}
                </span>
              </p>
              <p>{{ footerIntro.copyRight }}</p>
              <p>{{ footerIntro.recordNo }}</p>
            </div>
          </div>
        </div>
        <div class="meta-item meta-posts">
          <h3 class="meta-title">{{ $t('new-articles') }}</h3>
          <ul style="padding: 0;margin: 0">
            <li v-for="item of newArticles">
              <router-link :to="item.route">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="meta-item meta-comments">
          <h3 class="meta-title">{{ $t('new-comments') }}</h3>
          <ul style="padding: 0;margin: 0">
            <li v-for="item of newComments">
              <router-link :to="item.route">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import settings from "../../../settings";

  export default {
    name: "vue-footer",
    data() {
      return {
        settings,
        socialContact: [
          {title: "WEIBO", route: "/"},
          {title: "ZHIHU", route: "/"},
          {title: "RSS", route: "/"},
          {title: "GITHUB", route: "/"},
          {title: "TWITTER", route: "/"}
        ],
        footerIntro: {
          route: "/",
          imgUrl: require("./images/logo1.png"),
          imgAlt: "",
          motto: "大道至简 大简至极",
          copyRight: "© 2018-2021 ZipFang ` Blog",
          recordNo: "鄂ICP备2021016558号"
        },
        newArticles: [
          {title: "记录下之前始终困扰的限速问题", route: "/"},
          {title: "MySQL查询前七天每天的日志数", route: "/"},
          {title: "双枢轴快速排序与 Arrays.sort()", route: "/"},
          {title: "SpringSecurity 实现 OAuth 2.0", route: "/"},
          {title: "最近小项目", route: "/"},
          {title: "一些代码笔试题和易错题", route: "/"},
          {title: "38元锐捷校园网路由器配置教程", route: "/"},
          {title: "Nginx禁止GoogleBot抓取", route: "/"},
        ],
        newComments: [
          {title: "素以风尘叹 : 网站很好看", route: "/"},
          {title: "laojian : 大佬，我们是锐捷网页认证，现在还是挺", route: "/"},
          {title: "猫姐 : 互换友链，谢谢- site: 喵星趣学堂 ...", route: "/"},
          {title: "aka : 漪悼遛 这个验证码打不开", route: "/"},
          {title: "laojian : 谢谢老哥，成功了，我原来没开dhcp，现在能用上了", route: "/"},
          {title: "laojian : 我是小米路由mini刷的老毛子，我试成功了，", route: "/"},
          {title: "laojian : 谢谢老哥，成功了，我原来没开dhcp，现在能用上了", route: "/"},
          {title: "laojian : 我是小米路由mini刷的老毛子，我试成功了，", route: "/"},
        ],
        interest: [
          {name: "写博客", replace: "!!!∑(ﾟДﾟノ)ノ"},
          {name: "去看海", replace: "Fight!!(ｏ^-^)尸~''☆ミ☆ミ"},
          {name: "极简化", replace: "o((⊙﹏⊙))o"}
        ]
      }
    },
  }
</script>

<style lang="scss">
  @media (min-width: 650px) {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #bbb;
    }
    ::-webkit-scrollbar-track {
      /* background-color: #eee; */
    }
  }

  .footer-social .social-list a {
    &:hover {
      color: #eb5050;
    }
  }

  .footer-meta .meta-posts li a, .footer-meta .meta-comments li a {
    &:hover {
      border-bottom: 3px solid #cdcdcd;
      color: black;
    }
  }
</style>
