<template>
  <layout-slot>
    <RightPanelContainer class="main-content-right" title="标签">
      <div class="about-page ">
        <div class="img-cont" v-waves>
          <img src="https://arrowfield.top/5e42925d412fdc2e940edf3acb31fca5.jpg?imageView2/0/q/75" alt="">
          <h1 class="title">关于我</h1>
        </div>
        <Tags :tagDetail="tagDetail"/>
        <div class="intro-detail about">
          <p>我是谁</p>
          <ul>
            <li>方姿平（Zip）/ 男 / 湖北黄石</li>
            <li>计科 / 武汉工商学院</li>
            <li><a href="https://www.arrowfield.top/about" title="Z个人博客">个人博客地址</a></li>
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
          <p>我喜欢什么</p>
          <ul>
            <li>王者荣耀【苹果手Q26区（i衷情于你i）】纵情山河万里，肆意九州五岳</li>
            <li>QQ飞车</li>
            <li>动漫【海贼王，名侦探柯南，犬夜叉，龙珠，银魂，妖精的尾巴，魔兵传奇，，，，】</li>
          </ul>
        </div>

        <div class="intro-detail ">
          <p>留言</p>
          <!--      <Comment :postId="123456"/>-->
          <div class="message">
            <Message idName="about"/>
          </div>
        </div>

        <div class="intro-detail about">
          <p>后记</p>
          <ul>
            <li>主题版权归原作者所有如有侵权请立即与本人联系,本人将及时处理</li>
            <!--        <li>网站域名还在阿里云备案中，，，</li>-->
            <li>qq:768449566</li>
            <li>微信:</li>
            <li>邮箱:<a href="mailto:768449566@qq.com?subject=发送邮件">768449566@qq.com</a></li>
            <!--        <li class="play-music">点击此处播放音乐:<i @click="playMusic" class="iconfont"-->
            <!--                                           :class="play ? 'iconxinbaniconshangchuan-' : 'iconjingyin'"></i></li>-->
          </ul>
          <!--      <audio ref="audioPlay" src="../assets/media/SoldOut.mp3" loop>-->
          <!--        您的浏览器不支持 audio 标签。-->
          <!--      </audio>-->
        </div>
      </div>
    </RightPanelContainer>
  </layout-slot>

</template>

<script>
  import Tags from "@/components/TagComponent";
  import Message from '@/components/Message'
  import Comment from '@/components/Comment'
  import LayoutSlot from "./slot/layout-slot";

  export default {
    name: "About",

    components: {
      LayoutSlot,
      Tags,
      Message,
      Comment
    },
    data() {
      return {
        play: false,
        tagDetail: {
          articleCreated: "2020-06-05",
          articleTags: "",
          articleViewCount: 0
        }
      }
    },
    methods: {
      playMusic() {
        // this.play = !this.play
        // if(this.$refs.audioPlay.paused){
        //   this.$refs.audioPlay.play()
        // }else{
        //   this.$refs.audioPlay.pause()
        // }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-page {
    margin-top: 20px;

    .message {
      margin-top: 16px;
    }

    .img-cont {
      overflow: hidden;

      position: relative;

      img {
        border-radius: 10px;
        transition: all .5s linear;
        //&:hover{
        //box-shadow: -2px -2px 5px #ff4e6a;
        //}
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

    .intro-detail {
      margin-bottom: 20px;
      border-radius: 10px;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 1rem rgba(161, 177, 204, .4);

      a {
        text-decoration: #333;
        text-decoration-line: underline;
      }

      &.about p {
        margin-bottom: 16px;
      }

      p {
        // margin-bottom: 16px;
        font-weight: bold;
      }

      ul {
        list-style: disc;
        padding-left: 2em;
        margin-bottom: 16px;
        /*color: #738a94;*/
      }

      li {
        line-height: 24px;
      }

      li.play-music {
        i {
          margin-left: 5px;
          font-size: 20px;
          cursor: pointer;
        }
      }

    }
  }
</style>
