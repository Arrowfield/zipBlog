<template>
  <layout-slot bodyImage="" class="article-main" class-name="article-content">

    <!-- 非移动端展示 -->
    <div class="post-header-thumb  bg-orange"
         :style="{backgroundImage:`url(${articleDetail.src})`}">
      <div class="post-header-thumb-op"
           :style="{backgroundImage:`url(${articleDetail.src})`}"></div>
      <div class="post-header-thumb-cover">
        <div class="post-header-thumb-container">
          <div class="post-header-thumb-title">
            {{ articleDetail.title }}
          </div>
          <div class="post-header-thumb-meta">
            <time datetime="2021-04-04T16:09:00+08:00" itemprop="datePublished">
              <i class="fa fa-clock-o" aria-hidden="true"> </i> {{ articleDetail.time | dateFormat('{y}-{m}-{d}') }}
            </time>&nbsp;&nbsp; <i class="fa fa-tags" aria-hidden="true"></i> <a
            v-if="articleDetail.category"
            href="https://rawchen.com/category/enjoy/">{{ articleDetail.category.title }}</a>&nbsp;&nbsp;
            <i class="fa fa-comments-o" aria-hidden="true"></i>
            <a v-if="articleDetail.comments" href="#comments"> {{ articleDetail.comments.number }} {{ $t('comments')
              }}</a>&nbsp;&nbsp;
            <i class="fa fa-eye" aria-hidden="true"></i>
            {{ articleDetail.views }} {{ $t('views') }}
          </div>
          <div class="post-tags">
            <a v-for="item of articleDetail.tags" href="https://rawchen.com/tag/OneDrive/">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 文章主体 -->
    <article ref="article_body" class="main-content post-page" itemscope="" itemtype="http://schema.org/Article">

      <!-- mobile -->
      <div class="post-header">
        <h1 class="post-title" itemprop="name headline">
          {{ articleDetail.title }}
        </h1>
        <div class="post-data">
          <time datetime="2021-04-04T16:09:00+08:00" itemprop="datePublished"><i class="fa fa-clock-o"
                                                                                 aria-hidden="true"> </i> {{
            articleDetail.time | dateFormat('{y}-{m}-{d}') }}
          </time>&nbsp;&nbsp;
          <i v-if="articleDetail.category" class="fa fa-tags" aria-hidden="true"></i> <a
          href="https://rawchen.com/category/enjoy/">{{
          articleDetail.category.title }}</a>&nbsp;&nbsp;
          <i class="fa fa-comments-o" aria-hidden="true"></i>
          <a v-if="articleDetail.comments" href="#comments"> {{ articleDetail.comments.number }} {{ $t('comments')
            }}</a>&nbsp;&nbsp;
          <i class="fa fa-eye" aria-hidden="true"></i>
          {{ articleDetail.views }} {{ $t('views') }}
        </div>
      </div>

      <div id="post-content" class="post-content" itemprop="articleBody">
        <p class="post-tags">
          <a v-for="item of articleDetail.tags" href="https://rawchen.com/tag/OneDrive/">{{ item.name }}</a>
        </p>


        <!-- body start -->
        <div ref="article_main" v-html="articleDetail.body"></div>
        <!-- body end -->
      </div>
      <p class="post-info">
      </p>
      <div style="text-align: center;">
      <span
        v-if="articleDetail.footerStatement"
        v-html=
          "$t('statement')
          .replace('XXX',articleDetail.footerStatement.url)
          .replace('YYY',articleDetail.footerStatement.name)
          .replace('ZZZ',articleDetail.footerStatement.updateTime)"
      ></span>
        如果你觉得我的文章不错，不妨鼓励我继续写作。
      </div>
      <div id="rewardButton"
           style="padding: 10px 0; margin: 20px auto; width: 100%; font-size:16px; text-align: center;">
        <div id="reward-qr-code" style="padding: 50px;background-color: #393D49; color: #fff;display: none;"><img
          style="width: 100%;" src="https://rawchen.com/qrcode.jpg"></div>
        <button type="button">支持</button>
      </div>
      <p></p>

      <div class="post-next-prev">
        <div class="padd">
          <!-- 上一篇 -->
          <div class="next-prev">
            <a href="https://rawchen.com/enjoy/CNN.html" title="卷积神经网络 – CNN">
              <div class="card">
                <div class="card-img">
                  <img src="https://cdn.rawchen.com/2020/12/CNN/0.jpg" alt="卷积神经网络 – CNN">
                  <div class="overlay"></div>
                </div>
                <div class="card-body">
                  <h2 class="card-title">卷积神经网络 – CNN</h2>
                  <div class="card-footer">

                    <i class="fa fa-angle-left"></i><span>上一篇</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- 下一篇 -->
          <div class="next-prev">
            <a href="https://rawchen.com/se/springmvc-thymeleaf.html" title="Java模板引擎Thymeleaf">
              <div class="card">
                <div class="card-img">
                  <img src="https://cdn.rawchen.com/2020/12/springmvc-thymeleaf/0.png" alt="Java模板引擎Thymeleaf">
                  <div class="overlay"></div>
                </div>
                <div class="card-body">
                  <h2 class="card-title">Java模板引擎Thymeleaf</h2>
                  <div class="card-footer">
                    <span>下一篇</span>
                    <i class="fa fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>


    <!-- 评论系统 -->

    <message/>


    <!-- 目录 -->
    <div v-show="Object.keys(outline).length > 0" ref="outline" id="directory-content" class="directory-content initial  unpinned">
      <div id="directory">
        <ul>
          <li v-for="item of outline">
            <a @click="anchorPoint(item.id)" href="javascript:">{{ item.inner }}</a>
            <ul v-if="item.children.length > 0">
              <li v-for="tmp of item.children">
                <a @click="anchorPoint(tmp.id)" href="javascript:">{{ tmp.inner }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <!--        <ul>-->
        <!--          <li><a href="#directory047730034661277411">1 SpringMVC拦截器</a></li>-->
        <!--          <li><a href="#directory047730034661277412">2 使用方法</a>-->
        <!--            <ul>-->
        <!--              <li><a href="#directory047730034661277413">2.1 定义Interceptor实现类</a></li>-->
        <!--              <li><a href="#directory047730034661277414">2.2 实现HandlerInterceptor接口</a>-->
        <!--                <ul>-->
        <!--                  <li><a href="#directory047730034661277415">2.2.1 preHandle</a></li>-->
        <!--                  <li><a href="#directory047730034661277416">2.2.2 postHandle</a></li>-->
        <!--                  <li><a href="#directory047730034661277417">2.2.3 afterCompletion</a></li>-->
        <!--                </ul>-->
        <!--              </li>-->
        <!--              <li><a href="#directory047730034661277418">2.3 实现WebRequestInterceptor</a></li>-->
        <!--              <li><a href="#directory047730034661277419">2.4 使用场景</a></li>-->
        <!--            </ul>-->
        <!--          </li>-->
        <!--        </ul>-->
      </div>
    </div>


    <!--        <div ref="outline"-->
    <!--             class="directory-content initial headroom&#45;&#45;not-bottom headroom&#45;&#45;not-top unpinned">-->

    <!--        </div>-->


  </layout-slot>
</template>

<script>
  import LayoutSlot from "./slot/layout-slot";
  import settings from "../../../settings";
  // import Prism from 'prismjs'
  import Message from "../../../components/Message";
  import {getArticleById} from "@/api/home";

  import VditorPreview from 'vditor/dist/method.min'


  export default {
    name: "vue-article",
    components: {Message, LayoutSlot},
    props: {
      id: [Number, String]
    },
    data() {
      return {
        articleDetail: {
          comments: {},
          footerStatement: {},
          category: {},
        },
        outline: ""
      }
    },
    mounted() {
      //
      // this.$nextTick(() => {
      //   Prism.highlightAll()
      // })
      new Headroom(this.$refs.outline, {
        offset: this.$refs.article_body.offsetTop,
        tolerance: 0,
        classes: {initial: "headroom", pinned: "slideDown", unpinned: "slideUp"}
      }).init();
      this.getArticleDetail()
      // console.log(Prism.plugins)
      // Prism.plugins.toolbar.hook({element:document.body})


    },
    methods: {
      anchorPoint(id) {
        this.$router.push(`${this.$route.path}#${id}`)
        let base = document.getElementsByClassName('main-content')[0].offsetTop
        let target = document.getElementById(id)
        if(target) {
          window.scrollTo({
            top: target.offsetTop + base,
            behavior: "smooth"
          })
        }
      },
      getCatalog(textHtml) {
        let converter = document.createElement("DIV")
        converter.innerHTML = textHtml
        //console.log(this.$route.path)
        let elements = converter.getElementsByTagName('*')
        let html = `<ul level="1">`, serial = 0, flag = 0, num = {}, serial1 = 0
        for (let i = 0; i < elements.length; i++) {
          let item = elements[i]
          if (item.tagName.substr(0, 1).toUpperCase() === 'H') {
            let id = item.getAttribute('id')
            let h_serial = item.tagName.substr(1, 1)
            if (h_serial == 1) {
              serial++
              serial1 = 0
              num[serial] = {
                inner: `${serial} ${item.innerText.replace(/\s/g, "")}`,
                children: [],
                id: item.innerText.replace(/\s/g, "")
              }
            } else if (h_serial == 2) {
              serial1++
              num[serial].children.push({
                inner: `${serial}.${serial1} ${item.innerText.replace(/\s/g, "")}`,
                children: [],
                id: item.innerText.replace(/\s/g, "")
              })
            } else if (h_serial == 3) {

            }
          }
        }

        // for (let key in num) {
        //   if (num[key].children.length == 0) {
        //     html += `<li>${num[key].inner}</li>`
        //   } else {
        //     html += `<li>${num[key].inner}`
        //     let temp = `<ul level="2">`
        //     for (let item of num[key].children) {
        //       temp += `<li>${item.inner}</li>`
        //     }
        //     temp += `</ul></li>`
        //     html += temp
        //   }
        // }
        //
        //
        // html += `</ul>`
        //
        // if (Object.keys(num).length === 0) {
        //   html = ""
        // }
        // // 事件绑定
        //
        // let targetElement = document.createElement("DIV")
        // targetElement.innerHTML = html
        // let list = targetElement.getElementsByTagName("LI")
        // for (let item of list) {
        //   console.log(item)
        //   item.onclick = function () {
        //     console.log(1231)
        //   }
        // }

        return num
      },

      getArticleDetail() {
        let params = {
          id: this.id
        }
        getArticleById(params).then(({data}) => {
          // console.log(data)
          if (data.code === 200) {
            let article = data.data
            this.articleDetail = {
              isTop: true,
              color: settings.textColors[1],
              url: `/article-detail/${article.oId}`,//item.articlePermalink,
              src: article.articleImg1URL,
              title: article.articleTitle,
              Topping: true,
              time: article.articleCreated,
              category: {title: "计算机科学与技术", url: "/"},
              comments: {number: 10, url: "/"},
              views: 100,
              abstract: "购买地址：腾讯云：[https://cloud.tencent.com/act/cps/redirect?redirect=1575&amp;cps_key=b58209dca42a9decdae2f276d61acd77&amp;from=console)阿里云：https://www.aliyun.com",
              tags: article.articleTags.split(",").map(item => ({
                name: item,
                url: ""
              })),
              body: ""
            }

            VditorPreview.preview(this.$refs.article_main, article.articleContent, {
              _lutePath: "http://120.78.171.206:8249/",
              hljs: {
                enable: true,
                style: "monokai",
                lineNumber: true
              },
              after: () => {
                // let reg = new RegExp("<svg(.*?)>(.*?)</svg>",'ig')
                // this.outline = VditorPreview.outlineRender(this.$refs.article_main, this.$refs.outline).replace(reg,"")
                this.outline = this.getCatalog(this.$refs.article_main.innerHTML)
                // console.log(this.outline)
                // let hrefs = document.querySelectorAll('ul li')
                // console.log(hrefs)

                if (decodeURIComponent(this.$route.hash)) {
                  this.anchorPoint(this.$route.hash.replace("#", ""))
                }
              }
            })
            //VditorPreview.highlightRender('IHljs',this.$refs.article_main)
          }
          // console.log(this.articleDetail)
        })
      },
    }

  }
  // http://www.ha97.com/4030.html
</script>
<!--<style src="./scss/okaikia.css"></style>-->
<style lang="scss" scoped>
  .article-main {

  }

  // 针对整个文章的渲染
</style>
<style lang="scss">
  .article-content {
    max-width: 100%;
  }
</style>
