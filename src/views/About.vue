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
        <li>一个来自重庆山区的少年，喜欢唱、跳、rap。。。。。好像跑题了，重新来。</li>
        <li>一个来自重庆山区的少年，即将结束大学生涯却拿不到毕业证的想成为程序员的码农。</li>
        <li>金戋(jian)取自我名字中第二个字，学习docker时无意中发现了<a href="https://github.com/b3log" target="_blank">solo</a>，就随手搭建了一个，于是就有了<a href="http://www.jinjianh.com" target="_blank">墨殇的技术博客</a></li>
        <li>一个刚步入社会，略带中二的少年，希望成为一名很优秀的程序员</li>
      </ul>
      <p>我在干嘛</p>
      <ul>
        <li>一个来自重庆山区的少年，喜欢唱、跳、rap。。。。。好像跑题了，重新来。</li>
        <li>一个来自重庆山区的少年，即将结束大学生涯却拿不到毕业证的想成为程序员的码农。</li>
        <li>金戋(jian)取自我名字中第二个字，学习docker时无意中发现了<a href="https://github.com/b3log" target="_blank">solo</a>，就随手搭建了一个，于是就有了<a href="http://www.jinjianh.com" target="_blank">墨殇的技术博客</a></li>
        <li>一个刚步入社会，略带中二的少年，希望成为一名很优秀的程序员</li>
      </ul>
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
