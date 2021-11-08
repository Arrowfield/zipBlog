<template>
  <layout-slot class="down-page" class-name="page-page" :bodyImage="bodyImage">
    <div class="post-header">
      <h1 class="post-title" itemprop="name headline">
        下载 </h1>
      <div class="post-data">
        <time datetime="2020-04-28T10:02:00+08:00" itemprop="datePublished">
          <i class="fa fa-clock-o" aria-hidden="true"> </i> 2020-04-28
        </time>&nbsp;&nbsp; <i class="fa fa-comments-o" aria-hidden="true"></i> <a href="#comments"> 7 评论</a>&nbsp;&nbsp;
        <i class="fa fa-eye" aria-hidden="true"></i> 5279 浏览
      </div>
    </div>
    <div id="post-content" class="post-content">
      <blockquote><p><a href="https://pan.rawchen.com" target="_blank">https://pan.rawchen.com</a><br><a
        href="https://blog.yoyling.com/file" target="_blank">https://blog.yoyling.com/file</a></p></blockquote>
    </div>
    <table>
      <thead>
      <tr>
        <th>{{ $t('content') }}</th>
        <th>{{ $t('down-link') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item of download[0].children">
        <td v-if="item.isStrong">
          <strong>{{ item.name }}</strong>
        </td>
        <td v-else>{{ item.name }}</td>
        <td>
          <a :href="item.link" target="_blank">{{ item.link }}</a>
        </td>
      </tr>
      </tbody>
    </table>
  </layout-slot>
</template>

<script>
  import LayoutSlot from "./slot/layout-slot";

  export default {
    name: "download",
    components: {LayoutSlot},
    data() {
      return {
        downInfo: {},
        bodyImage: require('./images/bg.png'),
        download: [
          {
            title: "",
            children: [
              {name: "v2rayN-V3.28.zip", link: "https://cdn.rawchen.com/files/v2rayN-V3.28.zip", isStrong: true},
              {name: "v2rayNG_V1.5.16.apk", link: "https://cdn.rawchen.com/files/v2rayN-V3.28.zip"},
              {name: "Resource_Hacker 5.1.5", link: "https://cdn.rawchen.com/files/v2rayN-V3.28.zip"}
            ]
          },
          {
            title: "API中文文档",
            children: [
              {name: "v2rayN-V3.28.zip", link: "https://cdn.rawchen.com/files/v2rayN-V3.28.zip"},
              {name: "v2rayNG_V1.5.16.apk", link: "https://cdn.rawchen.com/files/v2rayN-V3.28.zip"},
              {name: "Resource_Hacker 5.1.5", link: "https://cdn.rawchen.com/files/v2rayN-V3.28.zip"}
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-page {
    max-width: 970px;
    padding: 130px 25px 20px;;
  }



  .down-page {
    background-repeat: repeat;
  }

  .post-content pre code {
    border-radius: 6px;
    /* max-height: 500px; */
    line-height: 20px;
    margin: 0;
    padding: 1.3em;
    /* color: #313131; */
    background-color: #2b2e33;
  }

  .post-content p a {
    color: #4c94dd;
    border-bottom: 1px dotted #ccc;
    position: relative;
  }

  .post-content p a::after {
    background: currentColor;
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    transition: width .2s ease;
    width: 0;
  }

  .post-content p a:hover::after {
    width: 100%;
  }
</style>