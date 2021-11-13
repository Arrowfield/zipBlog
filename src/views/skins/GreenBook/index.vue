<template>
  <layout-slot className="index-page onelist-page" class="bg-gray">
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

        <div class="post-onelist-item" v-for="(item,i) of articleList">
          <div class="post-onelist-item-container">
            <router-link :to="item.url">
              <div class="onelist-item-thumb"
                   :style="{backgroundImage:`url(${item.src})`}" :class="bgClassList[i % bgClassList.length]">
              </div>
            </router-link>
            <div class="onelist-item-info">
              <div class="item-title">
                <router-link :to="item.url">
                  <span style="padding-right:10px" v-if="item.isTop">
<svg t="1617169778400" class="icon" style="margin-bottom: -1px;" viewBox="0 0 1024 1024" version="1.1"
     xmlns="http://www.w3.org/2000/svg" p-id="2779" width="20" height="20"><path
  d="M880.114286 463.085714A397.131429 397.131429 0 0 0 785.371429 331.428571l-33.257143-30.514285a9.245714 9.245714 0 0 0-14.857143 3.771428l-14.857143 42.628572c-9.257143 26.742857-26.285714 54.057143-50.4 80.914285-1.6 1.714286-3.428571 2.171429-4.685714 2.285715-1.257143 0.114286-3.2-0.114286-4.914286-1.714286-1.6-1.371429-2.4-3.428571-2.285714-5.485714 4.228571-68.8-16.342857-146.4-61.371429-230.857143C561.485714 122.285714 509.714286 67.542857 445.028571 29.371429l-47.2-27.771429c-6.171429-3.657143-14.057143 1.142857-13.714285 8.342857l2.514285 54.857143c1.714286 37.485714-2.628571 70.628571-12.914285 98.171429-12.571429 33.714286-30.628571 65.028571-53.714286 93.142857a337.874286 337.874286 0 0 1-54.285714 52.685714 402.971429 402.971429 0 0 0-114.628572 138.857143A397.428571 397.428571 0 0 0 109.714286 624c0 53.942857 10.628571 106.171429 31.657143 155.428571a399.314286 399.314286 0 0 0 86.285714 126.742858c37.028571 36.571429 80 65.371429 127.885714 85.371428C405.142857 1012.342857 457.714286 1022.857143 512 1022.857143s106.857143-10.514286 156.457143-31.2A398.4 398.4 0 0 0 796.342857 906.285714c37.028571-36.571429 66.057143-79.314286 86.285714-126.742857a393.371429 393.371429 0 0 0 31.657143-155.428571c0-55.771429-11.428571-109.942857-34.171428-161.028572z"
  p-id="2780" fill="#f05f6c"></path></svg></span>
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
        bgClassList:['bg-white','bg-grey','bg-deepgrey','bg-blue','bg-purple','bg-green','bg-yellow','bg-red','bg-orange'],
        indexIntro: {
          color: settings.textColors[0],
          indexImg: require('./images/logo2.jpg'),
          href: '/',
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
            isTop:true,
            color: settings.textColors[1],
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
            color: settings.textColors[2],
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
