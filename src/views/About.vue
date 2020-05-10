<template>
  <div class="about-page">
    <div class="img-cont">
      <img src="https://img.hacpai.com/bing/20180919.jpg?imageView2/1/w/960/h/540/interlace/1/q/100" alt="">
      <h1 class="title">关于我</h1>
    </div>
    <Tags/>
    <div class="intro-detail">
      <p>我是谁</p>
      <ul>
        <li>一个来自湖北黄石的少年，喜欢唱、跳、rap。。。。。好像跑题了，重新来。</li>
        <li>一个来自湖北黄石的少年，即将结束大学生涯却拿不到毕业证的想成为程序员的码农。</li>
        <li>网站的主题完全模仿 <a href="https://www.inkdp.cn/" target="_blank">墨殇的技术博客</a>目前还有许多没有完善，后端也没有接入，目前就是个纯静态</li>
        <li>一个刚步入社会，略带中二的少年，希望成为一名很优秀的程序员</li>
      </ul>
      <p>我在干嘛</p>
      <ul>
        <li>努力学习，不断的进步</li>
        <li>在一家公司担任web前端工程师</li>
      </ul>
      <p>我会什么</p>
      <ul>
        <li>前端 （Vue、Node.js）</li>
        <li>数据库设计</li>
      </ul>
    </div>

    <div class="intro-detail">
      <p>留言</p>
    </div>
  </div>
</template>

<script>
  import Tags from "@/components/Tags";

  export default {
    name: "About",
    components: {
      Tags
    }
  }
</script>

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
      }

      li{
        line-height: 24px;
      }

    }
  }
</style>
