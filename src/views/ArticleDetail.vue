<template>
  <div class="about-page article-detail-page">
    <div class="img-cont">
      <img :src="articleDetail.articleImgURL" alt="">
      <h1 class="title">{{ articleDetail.articleTitle }}</h1>
    </div>
    <Tags/>
    <div class="intro-detail" v-html="articleDetail.articleContent">
    </div>

    <div class="intro-detail">
      <p>留言</p>
      <Message/>
    </div>

    <div class="intro-detail">
      <p>后记</p>
      <ul>
        <li>主题版权归原作者所有如有侵权请立即与本人联系,本人将及时处理</li>
        <li>网站域名还在阿里云备案中，，，</li>
        <li>qq:768449566</li>
        <li>微信:</li>
        <li>邮箱:<a href="mailto:768449566@qq.com?subject=发送邮件">768449566@qq.com</a></li>
        <li class="play-music">点击此处播放音乐:<i  class="iconfont" :class="play ? 'iconxinbaniconshangchuan-' : 'iconjingyin'"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Tags from "@/components/Tags";
  import Message from '@/components/Message'
  import {getArticleById} from "@/api/home";
  export default {
    name: "ArticleDetail",
    components: {
      Tags,
      Message
    },
    data(){
      return{
        play:false,
        articleDetail:{},
      }
    },
    methods:{
      async getArticleDetail(){
        let res = await getArticleById({zid:this.$route.params.id})
        console.log(res)
        this.articleDetail = Object.assign({},res.data.data)
      }
    },
    mounted(){
      this.getArticleDetail()
    }
  }
</script>

<style lang="scss">

  .article-detail-page {
    .intro-detail{
      p{
        margin-bottom: 16px;
        line-height: 28px;
      }
      li{
        line-height: 28px;
      }
      h1,h2,h3{
        margin-bottom: 16px;
      }
      ul,ol{
        list-style: disc;
        padding-left: 2em;
        margin-bottom:16px;
        color:#738a94;
      }
      img{
        width: auto;
        height: auto;
      }
    }
  }

</style>

<style lang="scss" scoped>

  .about-page {
    margin-top: 20px;
    .img-cont {
      overflow: hidden;

      position: relative;
      img {
        border-radius: 10px;
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
      }
    }

    .intro-detail{
      margin-bottom: 20px;
      border-radius: 10px;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 1rem rgba(161, 177, 204, .4);

      p{
        margin-bottom: 16px;
        font-weight: bold;
      }

      ul{
        list-style: disc;
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
