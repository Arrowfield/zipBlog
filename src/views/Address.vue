<!-- page 好站推荐 -->
<template>
  <RightPanelContainer class="address-page" title="好站推荐">
    <ul class="good-link">
      <li class="link-item" v-for="(item) in linkList">
        <a :href="item.href" target="_blank" :title="item.title">
          <div>
            <p class="title">{{ item.title }}</p>
            <p class="intro">{{ item.intro }}</p>
          </div>
          <div class="logo">
            <img :src="item.imgUrl" alt=""/>
          </div>
        </a>
      </li>
    </ul>
  </RightPanelContainer>
</template>

<script>
  export default {
    name: "Address",
    data() {
      return {
        linkList: [
          {
            href: "https://www.cnblogs.com/mumu2/p/12035072.html",
            title: "webstorm最新激活码2019",
            intro: "网址里面有 lookdiv.com 里面的钥匙就是lookdiv.com 打开网址，获取密钥，复制到激活里面就好了。 关注一下~ 有问题直接私信。",
            imgUrl: require("@/assets/img/address/address01.jpg")
          },
          {
            href: "https://www.bilibili.com/bangumi/play/ep290152?bsource=baidu_aladdin",
            title: "B站超清犬夜叉",
            intro: "在B站可以看犬夜叉啦，，，，哈哈",
            imgUrl: require("../assets/img/error/loading_error.png")
          },

        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .good-link {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;

    li.link-item {
      width: 230px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      height: 130px;
      margin-bottom: 20px;
      margin-right: 20px;
      overflow: hidden;
      transition: all .2s ease-in;

      &:hover{
        /*transform:rotateX(15deg) ;*/
      }

      a {
        /*display: block;*/
        padding: 20px 10px;
        height: 100%;
        display: flex;
        align-items: center;
        transition: all .2s ease-in;
        justify-content: space-between;

        &:hover {
          background: #4285f4;
          transform: scale(1.02) ;

          .title, .intro {
            color: white;
          }
        }
      }

      .title {
        color: #333;
        font-weight: bold;
        max-width: 120px;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .intro {
        color: #ddd;
        font-size: 13px;
        margin-top: 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        max-width: 125px;
      }

      .logo {
        width: 80px;
        overflow: hidden;
        margin-left: 5px;
        flex: 0 0 80px;
      }

      .logo img {
        display: block;
        /*transition: all .2s linear;*/
        border-radius: 5px;

        &:hover {
          /*transform: scale(1.2);*/
        }
      }
    }
  }
</style>
