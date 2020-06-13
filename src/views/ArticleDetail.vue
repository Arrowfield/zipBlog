<template>
  <div class="about-page article-detail-page">
    <div class="img-cont" v-waves>
      <img :src="articleDetail.articleImgURL" alt="">
      <h1 class="title">{{ articleDetail.articleTitle }}</h1>
    </div>
    <Tags :tagDetail="articleDetail"/>
    <div class="intro-detail text-area" v-loading-circ="loading" @contextmenu.prevent @selectstart.prevent>
      <div v-html="articleDetail.articleContent"></div>
      <div v-show="articleDetail.reprint" class="reprint">
        <i class="icon iconfont icongantanhao-xianxingyuankuang "></i>
        <p>文章转载声明：</p>
      </div>
    </div>

    <div class="intro-detail message">
      <p style="margin-bottom:0">留言</p>
      <div class="message">
       <Message :idName="'articleDetail'+articleDetail.zid"/>
      </div>
<!--      <Comment :postId="articleDetail.zid" />-->
    </div>

  </div>
</template>

<script>
  import Tags from "@/components/TagComponent";
  import Message from '@/components/Message'
  import Comment from '@/components/Comment'
  import {getArticleById,recordCount} from "@/api/home";
  import changePageTitle from "@/utils/changePageTitle";
  export default {
    name: "ArticleDetail",
    components: {
      Tags,
      Message,
      Comment,
    },
    data(){
      return{
        play:false,
        articleDetail:{
          zid:Math.random() * 10000
        },
        loading:false
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // console.log(vm.$data.articleDetail)
      })
    },
    methods:{
      async getArticleDetail(){
        this.loading = true
        let res = await getArticleById({zid:this.$route.params.id})
        this.articleDetail = Object.assign({},res.data.data)
        changePageTitle(this.articleDetail.articleTitle)
        this.loading = false
      },
      //记录文章的浏览量进行埋点
      recordArticleViewCount(){
        recordCount({zid:this.$route.params.id})
      }
    },
    mounted(){
      this.getArticleDetail()
      this.recordArticleViewCount()
    }
  }
</script>

<style lang="scss">

  .article-detail-page {

    .reprint{
      word-wrap: break-word;
      margin-bottom: 20px;
      border-radius: 6px;
      padding: 20px;
      color: #666;
      background-color: #f8f8f8;
      border-left: 2px solid #eee;
      line-height: 1.5em;
      position: relative;
      p{
        text-indent: 0 !important;
      }
      .icon{
        position: absolute;
        top: -10px;
        left: 13px;
        font-size: 20px;
        background: #f8f8f8;
        color: #666;
        border-radius: 100%;
        text-align: center;
        line-height: 24px;
        padding: 2px;
        height: 30px;
        width: 30px;
        border: 1px solid #eee;
      }
    }

    .intro-detail.text-area{
      font-size: 15px;
      min-height: 200px;
      background: #fffbf0 !important;
      p{
        margin-bottom: 7px;
        line-height: 28px;
        overflow: hidden;
        text-indent: 2em; //系统默认的字体大小为16px 最小显示字体为12px
      }
      li{
        line-height: 28px;
      }
      h1,h2,h3{
        margin-bottom: 7px;
      }
      ul,ol{
        /*list-style: disc;*/
        padding-left: 2em;
        margin-bottom:16px;
        color:#738a94;

      }
      img{
        /*width: auto;*/
        height: auto;
        max-width: 100%;
        /*text-align: left;*/
        display: inline-block;
        margin-left: -2em;
      }
    }
  }

</style>

<style lang="scss" scoped>

  .about-page {
    margin-top: 20px;

    .message{
      margin-top:16px;
    }
    .img-cont {
      overflow: hidden;

      position: relative;
      img {
        border-radius: 10px;
        width: 100%;
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
        z-index: 5;
        line-height: 32px;
      }
    }

    .intro-detail{
      margin-bottom: 20px;
      border-radius: 10px;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 1rem rgba(161, 177, 204, .4);

      p{
        // margin-bottom: 16px;
        font-weight: bold;

      }

      ul{
        /*list-style: disc;*/
        padding-left: 2em;
        margin-bottom:16px;
        color:#738a94;
      }

      li{
        line-height: 24px;
      }

      li.play-music{
        i{
          margin-left:5px;
          font-size: 20px;
          cursor: pointer;
        }
      }

    }
  }
</style>
