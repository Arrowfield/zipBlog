<template>
  <div>
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
    <ul class="article-page" v-else>
      <li>
        <router-link to="#" v-waves class="link" title="#">
          <div class="image-cont">
            <img src="#" alt="">
            <h1 class="title">- 太懒了 一篇文章都没有，，，，</h1>
            <i class="iconfont iconstar"></i>
            <Loading type="circular"/>
          </div>
        </router-link>
        <div class="tags">
          <a v-waves href="#"><i class="iconfont iconrili"></i>-</a>
          <a v-waves href="#"><i class="iconfont iconredu"></i>-°C</a>
          <a v-waves href="#"><i class="iconfont iconxx"></i>-</a>
          <a class="tag" v-waves href="#"><i class="iconfont icondaohang1"></i>-</a>
        </div>
        <article>
          <p class="summary">-</p>
        </article>
      </li>
    </ul>
    <PageNav :total="total" :currPage.sync="currPage" @changeCurrPage="changeCurrPage"/>
  </div>
</template>

<script>
  import waves from "@/directive/waves/waves";
  import PageNav from "@/components/PageNav";
  import {getArticleList} from "@/api/home";
  import Loading from "./Loading";

  const testText = '12312345645648789456132131'
  import {mapState} from 'vuex'
  import {Bus} from "@/utils/Bus";

  export default {
    name: "Article",
    data() {
      return {
        // total:0
        currPage: 1,
      }
    },
    computed: {
      ...mapState({
        articleList: state => state.article.articleList,
        total: state => state.indexBaseData.articleTotal
      })
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
    components: {PageNav, Loading},
    directives: {
      waves
    },
    mounted() {
      // let res = await getArticleList()
      // this.articleList = res.data.data
      // this.total = res.data.total
      Bus.$emit('getArticleList', this.currPage)
    },
    methods: {
      changeCurrPage(page) {
        console.log('当前的页数是' + page)
        Bus.$emit('getArticleList', page)
      }
    }
  }
</script>

<style lang="scss" scoped>
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
      min-height: 100px;
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
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
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

</style>
