<template>
  <div>
    <ul class="article-page">
      <li>
        <a v-waves class="link" href="#" title="从零开始安装 solo 博客 - Z 个人博客">
          <div class="image-cont">
            <img src="https://img.hacpai.com/bing/20180919.jpg?imageView2/1/w/960/h/540/interlace/1/q/100" alt="">
            <h1 class="title">从零开始安装 solo 博客</h1>
            <i class="iconfont iconstar"></i>
          </div>
        </a>
        <div class="tags">
          <a v-waves href="#"><i class="iconfont iconrili"></i>2020年04月17日</a>
          <a v-waves href="#"><i class="iconfont iconredu"></i>21888 °C</a>
          <a v-waves href="#"><i class="iconfont iconxx"></i>270</a>
          <a v-waves href="#"><i class="iconfont icondaohang1"></i>环境搭建</a>
        </div>
        <article>
          <p class="summary">
            之前也写过类似的帖子，但是由于那时自己的各种原因写的不是特别好，所以今天写一个聚合帖，记录从购买服务器到安装solo然后通过nginx反向代理，最后升级https的全过程。此贴献给完全无基础的人，所以废话较多，见谅
            1. 购买服务器
            首先你得有自己的服务器，有的话就跳过。服务商可选的有很多，比如：阿里云、腾讯云、百度云、还有一些香港的服务商以及国外的（有特殊需求的可以考虑下）。腾讯和阿里对于新用户以及学生都有很大的优惠，配置的话如果只挂solo，买最低配1G1核1M即可。国内的几家都可以关注下，不定时会有很好的优惠活动。我比较推荐阿里云，前段时间刚买了一台3年才668多，不知道活动结束没有。阿里云购买服务器时会要求你安装系统（不知道可不可以不选），推荐选择centos。
            2. 购买域名(可不买) 建议还是买一个域名，直接通过IP访问的话不是特别好。购买域名时不要盯着
            .com，.cn这种比较热门的域名，往往很贵。还有尽量选择可备案的域名，否则就会像鼠鼠在碎觉一样只能挂载444端口上运行。可通过域名.信息查看可备案域名。如果你服务器买着国外的话似乎就不用备案。 3. 域名解析与备案
            服务....</p>
        </article>
      </li>
      <li>
        <a v-waves class="link" href="#" title="从零开始安装 solo 博客 - Z 个人博客">
          <div class="image-cont">
            <img src="https://img.hacpai.com/bing/20180612.jpg?imageView2/1/w/1280/h/720/interlace/1/q/100" alt="">
            <h1 class="title">从零开始安装 solo 博客</h1>
            <i class="iconfont iconstar"></i>
          </div>
        </a>
        <div class="tags">
          <a v-waves href="#"><i class="iconfont iconrili"></i>2020年04月17日</a>
          <a v-waves href="#"><i class="iconfont iconredu"></i>21888 °C</a>
          <a v-waves href="#"><i class="iconfont iconxx"></i>270</a>
          <a v-waves href="#"><i class="iconfont icondaohang1"></i>环境搭建</a>
        </div>
        <article>
          <p class="summary">
            之前也写过类似的帖子，但是由于那时自己的各种原因写的不是特别好，所以今天写一个聚合帖，记录从购买服务器到安装solo然后通过nginx反向代理，最后升级https的全过程。此贴献给完全无基础的人，所以废话较多，见谅
            1. 购买服务器
            首先你得有自己的服务器，有的话就跳过。服务商可选的有很多，比如：阿里云、腾讯云、百度云、还有一些香港的服务商以及国外的（有特殊需求的可以考虑下）。腾讯和阿里对于新用户以及学生都有很大的优惠，配置的话如果只挂solo，买最低配1G1核1M即可。国内的几家都可以关注下，不定时会有很好的优惠活动。我比较推荐阿里云，前段时间刚买了一台3年才668多，不知道活动结束没有。阿里云购买服务器时会要求你安装系统（不知道可不可以不选），推荐选择centos。
            2. 购买域名(可不买) 建议还是买一个域名，直接通过IP访问的话不是特别好。购买域名时不要盯着
            .com，.cn这种比较热门的域名，往往很贵。还有尽量选择可备案的域名，否则就会像鼠鼠在碎觉一样只能挂载444端口上运行。可通过域名.信息查看可备案域名。如果你服务器买着国外的话似乎就不用备案。 3. 域名解析与备案
            服务....</p>
        </article>
      </li>
      <li>
        <a v-waves class="link" href="#" title="从零开始安装 solo 博客 - Z 个人博客">
          <div class="image-cont">
            <img src="https://img.hacpai.com/bing/20180919.jpg?imageView2/1/w/960/h/540/interlace/1/q/100" alt="">
            <h1 class="title">从零开始安装 solo 博客</h1>
            <i class="iconfont iconstar"></i>
          </div>
        </a>
        <div class="tags">
          <a v-waves href="#"><i class="iconfont iconrili"></i>2020年04月17日</a>
          <a v-waves href="#"><i class="iconfont iconredu"></i>21888 °C</a>
          <a v-waves href="#"><i class="iconfont iconxx"></i>270</a>
          <a v-waves href="#"><i class="iconfont icondaohang1"></i>环境搭建</a>
        </div>
        <article>
          <p class="summary">
            之前也写过类似的帖子，但是由于那时自己的各种原因写的不是特别好，所以今天写一个聚合帖，记录从购买服务器到安装solo然后通过nginx反向代理，最后升级https的全过程。此贴献给完全无基础的人，所以废话较多，见谅
            1. 购买服务器
            首先你得有自己的服务器，有的话就跳过。服务商可选的有很多，比如：阿里云、腾讯云、百度云、还有一些香港的服务商以及国外的（有特殊需求的可以考虑下）。腾讯和阿里对于新用户以及学生都有很大的优惠，配置的话如果只挂solo，买最低配1G1核1M即可。国内的几家都可以关注下，不定时会有很好的优惠活动。我比较推荐阿里云，前段时间刚买了一台3年才668多，不知道活动结束没有。阿里云购买服务器时会要求你安装系统（不知道可不可以不选），推荐选择centos。
            2. 购买域名(可不买) 建议还是买一个域名，直接通过IP访问的话不是特别好。购买域名时不要盯着
            .com，.cn这种比较热门的域名，往往很贵。还有尽量选择可备案的域名，否则就会像鼠鼠在碎觉一样只能挂载444端口上运行。可通过域名.信息查看可备案域名。如果你服务器买着国外的话似乎就不用备案。 3. 域名解析与备案
            服务....</p>
        </article>
      </li>
      <li>
        <a v-waves class="link" href="#" title="从零开始安装 solo 博客 - Z 个人博客">
          <div class="image-cont">
            <img src="https://img.hacpai.com/bing/20180612.jpg?imageView2/1/w/1280/h/720/interlace/1/q/100" alt="">
            <h1 class="title">从零开始安装 solo 博客</h1>
            <i class="iconfont iconstar"></i>
          </div>
        </a>
        <div class="tags">
          <a v-waves href="#"><i class="iconfont iconrili"></i>2020年04月17日</a>
          <a v-waves href="#"><i class="iconfont iconredu"></i>21888 °C</a>
          <a v-waves href="#"><i class="iconfont iconxx"></i>270</a>
          <a v-waves href="#"><i class="iconfont icondaohang1"></i>环境搭建</a>
        </div>
        <article>
          <p class="summary">
            之前也写过类似的帖子，但是由于那时自己的各种原因写的不是特别好，所以今天写一个聚合帖，记录从购买服务器到安装solo然后通过nginx反向代理，最后升级https的全过程。此贴献给完全无基础的人，所以废话较多，见谅
            1. 购买服务器
            首先你得有自己的服务器，有的话就跳过。服务商可选的有很多，比如：阿里云、腾讯云、百度云、还有一些香港的服务商以及国外的（有特殊需求的可以考虑下）。腾讯和阿里对于新用户以及学生都有很大的优惠，配置的话如果只挂solo，买最低配1G1核1M即可。国内的几家都可以关注下，不定时会有很好的优惠活动。我比较推荐阿里云，前段时间刚买了一台3年才668多，不知道活动结束没有。阿里云购买服务器时会要求你安装系统（不知道可不可以不选），推荐选择centos。
            2. 购买域名(可不买) 建议还是买一个域名，直接通过IP访问的话不是特别好。购买域名时不要盯着
            .com，.cn这种比较热门的域名，往往很贵。还有尽量选择可备案的域名，否则就会像鼠鼠在碎觉一样只能挂载444端口上运行。可通过域名.信息查看可备案域名。如果你服务器买着国外的话似乎就不用备案。 3. 域名解析与备案
            服务....</p>
        </article>
      </li>
      <li>
        <a v-waves class="link" href="#" title="从零开始安装 solo 博客 - Z 个人博客">
          <div class="image-cont">
            <img src="https://img.hacpai.com/bing/20180612.jpg?imageView2/1/w/1280/h/720/interlace/1/q/100" alt="">
            <h1 class="title">从零开始安装 solo 博客</h1>
            <i class="iconfont iconstar"></i>
          </div>
        </a>
        <div class="tags">
          <a v-waves href="#"><i class="iconfont iconrili"></i>2020年04月17日</a>
          <a v-waves href="#"><i class="iconfont iconredu"></i>21888 °C</a>
          <a v-waves href="#"><i class="iconfont iconxx"></i>270</a>
          <a v-waves href="#"><i class="iconfont icondaohang1"></i>环境搭建</a>
        </div>
        <article>
          <p class="summary">
            之前也写过类似的帖子，但是由于那时自己的各种原因写的不是特别好，所以今天写一个聚合帖，记录从购买服务器到安装solo然后通过nginx反向代理，最后升级https的全过程。此贴献给完全无基础的人，所以废话较多，见谅
            1. 购买服务器
            首先你得有自己的服务器，有的话就跳过。服务商可选的有很多，比如：阿里云、腾讯云、百度云、还有一些香港的服务商以及国外的（有特殊需求的可以考虑下）。腾讯和阿里对于新用户以及学生都有很大的优惠，配置的话如果只挂solo，买最低配1G1核1M即可。国内的几家都可以关注下，不定时会有很好的优惠活动。我比较推荐阿里云，前段时间刚买了一台3年才668多，不知道活动结束没有。阿里云购买服务器时会要求你安装系统（不知道可不可以不选），推荐选择centos。
            2. 购买域名(可不买) 建议还是买一个域名，直接通过IP访问的话不是特别好。购买域名时不要盯着
            .com，.cn这种比较热门的域名，往往很贵。还有尽量选择可备案的域名，否则就会像鼠鼠在碎觉一样只能挂载444端口上运行。可通过域名.信息查看可备案域名。如果你服务器买着国外的话似乎就不用备案。 3. 域名解析与备案
            服务....</p>
        </article>
      </li>
      <li>
        <a v-waves class="link" href="#" title="从零开始安装 solo 博客 - Z 个人博客">
          <div class="image-cont">
            <img src="https://img.hacpai.com/bing/20180612.jpg?imageView2/1/w/1280/h/720/interlace/1/q/100" alt="">
            <h1 class="title">从零开始安装 solo 博客</h1>
            <i class="iconfont iconstar"></i>
          </div>
        </a>
        <div class="tags">
          <a v-waves href="#"><i class="iconfont iconrili"></i>2020年04月17日</a>
          <a v-waves href="#"><i class="iconfont iconredu"></i>21888 °C</a>
          <a v-waves href="#"><i class="iconfont iconxx"></i>270</a>
          <a v-waves href="#"><i class="iconfont icondaohang1"></i>环境搭建</a>
        </div>
        <article>
          <p class="summary">
            之前也写过类似的帖子，但是由于那时自己的各种原因写的不是特别好，所以今天写一个聚合帖，记录从购买服务器到安装solo然后通过nginx反向代理，最后升级https的全过程。此贴献给完全无基础的人，所以废话较多，见谅
            1. 购买服务器
            首先你得有自己的服务器，有的话就跳过。服务商可选的有很多，比如：阿里云、腾讯云、百度云、还有一些香港的服务商以及国外的（有特殊需求的可以考虑下）。腾讯和阿里对于新用户以及学生都有很大的优惠，配置的话如果只挂solo，买最低配1G1核1M即可。国内的几家都可以关注下，不定时会有很好的优惠活动。我比较推荐阿里云，前段时间刚买了一台3年才668多，不知道活动结束没有。阿里云购买服务器时会要求你安装系统（不知道可不可以不选），推荐选择centos。
            2. 购买域名(可不买) 建议还是买一个域名，直接通过IP访问的话不是特别好。购买域名时不要盯着
            .com，.cn这种比较热门的域名，往往很贵。还有尽量选择可备案的域名，否则就会像鼠鼠在碎觉一样只能挂载444端口上运行。可通过域名.信息查看可备案域名。如果你服务器买着国外的话似乎就不用备案。 3. 域名解析与备案
            服务....</p>
        </article>
      </li>
    </ul>
    <PageNav/>
  </div>
</template>

<script>
  import waves from "@/directive/waves/waves";
  import PageNav from "@/components/PageNav";

  export default {
    name: "Article",
    components: {PageNav},
    directives: {
      waves
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
      min-height: 65px;
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
        z-index: 5;
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
