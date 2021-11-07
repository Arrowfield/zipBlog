<template>
  <layout-slot className="archive-page">
    <fieldset>
      <legend>统计信息</legend>
      <div class="archives-count">
        <div class="archives-count-item">
          <code id="post-count" data-num="" title="">{{ statistics.articles }}</code>
          {{$t('articles')}}
        </div>

        <div class="archives-count-item">
          <code id="tag-count" data-num="" title="">{{ statistics.labels }}</code>
          {{$t('labels')}}
        </div>
        <div class="archives-count-item">
          <code id="comment-count" data-num="" title="">{{ statistics.comments }}</code>
          {{$t('comments')}}
        </div>
        <div class="archives-count-item">
          <code id="view-count" data-num="" title="">{{ statistics.ip }}</code>
          {{$t('ip')}}
        </div>
        <div class="archives-count-item">
          <code id="category-count" data-num="" title="">{{ statistics.views }}</code>
          {{$t('views')}}
        </div>
      </div>
    </fieldset>
    <div class="categorys-item" v-for="item of categories">
      <div class="categorys-title">
        <router-link :to="item.url">
          {{ item.name }}
        </router-link>
        <span> ：{{ item.articles.length }}</span>
      </div>
      <div class="post-lists">
        <div class="post-lists-body">
          <div class="post-list-item" v-for="tmp of item.articles">
            <div class="post-list-item-container">
              <router-link :to="tmp.url">
                <div class="item-label">
                  <div class="item-title">{{ tmp.name }}</div>
                  <div class="item-meta clearfix">
                    <div class="item-meta-date">{{tmp.date }}</div>
                  </div>
                </div>
              </router-link>
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
  export default {
    name: "archives",
    components: {VueHeader, VueFooter,LayoutSlot},
    data() {
      return {
        statistics: {
          articles: '123+',
          labels: '215+',
          comments: '551+',
          ip: "82860+",
          views: "654813+"
        },
        categories: [
          {
            name: "点滴记录",
            url: "/category/life",
            articles: [
              {name: "记录下之前始终困扰的限速问题", url: "/life/1", date: "2021-10-25"},
              {name: "双枢轴快速排序与 Arrays.sort()", url: "/life/2", date: "2021-10-25"},
              {name: "记录下之前始终困扰的限速问题", url: "/life/1", date: "2021-10-25"},
              {name: "双枢轴快速排序与 Arrays.sort()", url: "/life/2", date: "2021-10-25"}
            ]
          },
          {
            name: "资源分享",
            url: "/category/enjoy",
            articles: [
              {name: "记录下之前始终困扰的限速问题", url: "/life/1", date: "2021-10-25"},
              {name: "双枢轴快速排序与 Arrays.sort()", url: "/life/2", date: "2021-10-25"},
              {name: "记录下之前始终困扰的限速问题", url: "/life/1", date: "2021-10-25"},
              {name: "双枢轴快速排序与 Arrays.sort()", url: "/life/2", date: "2021-10-25"}
            ]
          },
          {
            name: "一些代码",
            url: "/category/life",
            articles: [
              {name: "记录下之前始终困扰的限速问题", url: "/life/1", date: "2021-10-25"},
              {name: "双枢轴快速排序与 Arrays.sort()", url: "/life/2", date: "2021-10-25"},
              {name: "记录下之前始终困扰的限速问题", url: "/life/1", date: "2021-10-25"},
              {name: "双枢轴快速排序与 Arrays.sort()", url: "/life/2", date: "2021-10-25"}
            ]
          },
          {
            name: "计算机科学与技术",
            url: "/category/se",
            articles: [
              {name: "记录下之前始终困扰的限速问题", url: "/life/1", date: "2021-10-25"},
              {name: "双枢轴快速排序与 Arrays.sort()", url: "/life/2", date: "2021-10-25"},
              {name: "记录下之前始终困扰的限速问题", url: "/life/1", date: "2021-10-25"},
              {name: "双枢轴快速排序与 Arrays.sort()", url: "/life/2", date: "2021-10-25"}
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

  fieldset {
    margin: 10px 20px 0px 20px;
    border: .06em dashed #d5d5d5;
    border-radius: 0.3em;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    background-color: #f3f3f3;
  }

  fieldset > legend {
    background-color: #eb5055;
    color: #fff;
    border-radius: .2em;
    padding: .2em .5em;
    font-size: .9em;
  }

  .archives-count {
    width: 100%;
    text-align: center;
    color: #666;
  }

  .archives-count .archives-count-item {
    padding: 0.4em 0 0.6em;
    width: 20%;
    float: left;
    border-radius: 0.3em;
  }


  .archives-count code {
    display: block;
    font-size: 2em;
    color: #707070;
    background: transparent !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .archives-count .archives-count-item:hover {
    background: #e8e8e8;
  }

  @media(max-width: 800px) {
    .archives-count code {
      font-size: 15px;
      text-overflow: clip;
      margin-left: -6px;
      margin-right: -6px;
    }
  }

  @media(max-width: 375px) {
    .archives-count code {
      font-size: 14px;
      text-overflow: clip;
      margin-left: -6px;
      margin-right: -6px;
    }
  }


</style>