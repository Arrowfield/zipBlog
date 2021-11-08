<template>
  <layout-slot className="index-page onelist-page">
    <div class="post-lists">
      <div class="post-lists-body">
        <div class="post-onelist-item">
          <div class="post-onelist-item-container">
            <router-link :to="indexIntro.href">
              <div class="onelist-item-thumb  bg-deepgrey"
                   :style="{backgroundImage:`url(${indexIntro.indexImg})`}">
              </div>
            </router-link>
            <div class="onelist-item-info">
              <div class="item-title">
                <router-link to="indexIntro.href">
                  {{ indexIntro.title }}<span class="caret"></span>
                </router-link>
              </div>
              <div class="item-meta" style="font-size: 15px">
                <p>{{ indexIntro.motto }}</p>
              </div>
              <div class="item-meta" style="font-size: 15px">
                <router-link v-for="item of indexIntro.links" :to="item.route">
                  {{item.title}}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="post-onelist-item" v-for="item of articleList">
          <div class="post-onelist-item-container">
            <router-link :to="item.url">
              <div class="onelist-item-thumb  bg-deepgrey"
                   :style="{backgroundImage:`url(${item.src})`}">
              </div>
            </router-link>
            <div class="onelist-item-info">
              <div class="item-title">
                <router-link :to="item.url">
                  {{ item.title }}
                </router-link>
              </div>

              <div class="item-meta">
                <time :datetime="item.time" itemprop="datePublished">
                  <i class="fa fa-clock-o" aria-hidden="true"> </i> {{ item.time }}
                </time>
                <router-link :to="item.category.url">
                  <i class="fa fa-tags" aria-hidden="true"></i>
                  {{ item.category.title }}
                </router-link>
                <router-link :to="item.comments.url">
                  <i class="fa fa-comments-o" aria-hidden="true"></i>
                  {{ item.comments.number }}
                </router-link>
                <span>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                    {{ item.views }}
                  </span>
              </div>
              <div :style="{backgroundColor:item.color}" class="item-meta-hr"></div>
              <div class="item-content">
                <p>{{ item.abstract }}...</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </layout-slot>
</template>

<script>
  import VueHeader from "./header";
  import VueFooter from "./footer";
  import LayoutSlot from "./slot/layout-slot";
  import settings from "../../../settings";
  // console.log(window.location)
  export default {
    name: "index",
    components: {LayoutSlot, VueHeader, VueFooter},
    data() {
      return {

        indexIntro: {
          color:settings.textColors[0],
          indexImg: require('./images/0.jpg'),
          href: window.location.origin,
          title: "ZipFang ` Blog",
          motto: "大道至简 大简至极",
          links: [
            {title: "TV", route: "/"},
            {title: "PAN", route: "/"},
            {title: "LINK", route: "/"},
            {title: "JAVA", route: "/"},
            {title: "GCC", route: "/"},
          ]
        },
        articleList: [
          {
            color:settings.textColors[1],
            url: "/article-detail/0",
            src: "https://cdn.rawchen.com/2021/03/sdyun/00.jpg",
            title: "新人云服务器，且行且珍惜",
            Topping: true,
            time: "2021-11-07",
            category: {title: "计算机科学与技术", url: "/"},
            comments: {number: 10, url: "/"},
            views: 100,
            abstract: "购买地址：腾讯云：[https://cloud.tencent.com/act/cps/redirect?redirect=1575&amp;cps_key=b58209dca42a9decdae2f276d61acd77&amp;from=console)阿里云：https://www.aliyun.com"
          },
          {
            color:settings.textColors[2],
            url: "/article-detail/0",
            src: "https://rawchen.com/usr/themes/rawchen/images/thumbs/1.jpg",
            title: "记录下之前始终困扰的限速问题",
            Topping: true,
            time: "2021-11-07",
            category: {title: "计算机科学与技术", url: "/"},
            comments: {number: 10, url: "/"},
            views: 100,
            abstract: "最终效果Demo：https://pan.rawchen.com其中文件存储服务都由微软托管了，因此不用担心服务商跑路问题。步骤如下购买OneDrive激活码或帐号如激活码的则创建固定后缀的微软帐号通过OneDrive上传下载到这一步就能使用5T网盘了，但是太Low了，只能通过web端查看下载..."
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>


  .post-onelist-item-container .item-meta a {
    color: #5f5f5f;
    padding-left: 5px;
    padding-right: 5px;
    background-image: linear-gradient(transparent calc(85%), #ff9898 5px);
    background-size: 0;
    background-repeat: no-repeat;
    display: inline;
    transition: 0.2s ease;
  }

  .post-onelist-item-container .item-meta a:hover {
    color: #000;
    background-size: 100%;
  }


  .caret {
    animation-name: flash;
    width: 4px;
    height: 30px;
    background-color: #000;
    margin-left: 5px;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    display: inline-block;
    vertical-align: bottom;
  }

  @keyframes flash {
    0%, 50%, 100% {
      opacity: 1;
    }

    25%, 75% {
      opacity: 0;
    }
  }
</style>
