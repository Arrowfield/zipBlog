<template>
  <RightPanelContainer class="link-page" title="友情链接">
    <ul class="link-list">

      <li v-for="(item,i) in linkFriend">
        <a :href="item.href" :title="item.title" target="_blank">
          <div class="item-img">
            <img
              :src="item.imgUrl"
              alt="">
          </div>
          <p>{{ item.title }}</p>
        </a>
      </li>
      <!--      <li>-->
      <!--        <a href="http://blog.sxswyc.top/" title="一个人の↑蹲バ街角个人博客 | 王震个人博客 | Laity个人博客" target="_blank">-->
      <!--          <img-->
      <!--            src="http://blog.sxswyc.top/ueditor/php/upload/image/20190307/1551937909294156.png"-->
      <!--            alt="">-->
      <!--          <p>一个人の↑蹲バ街角个人博客 | 王震个人博客 | Laity个人博客</p>-->
      <!--        </a>-->
      <!--      </li>-->

    </ul>
  </RightPanelContainer>
</template>

<script>
  import RightPanelContainer from '@/components/RightPanelContainer'

  export default {
    name: "LinkFriend",
    components: {
      RightPanelContainer
    },
    data() {
      return {
        linkFriend: [
          {
            title: "D的个人博客",
            imgUrl: "https://img.hacpai.com/avatar/1353745196354_1584267806213.jpeg?imageView2/1/w/128/h/128/interlace/0/q/100",
            href: "https://88250.b3log.org/",
          },
          {
            title: "七云's Blog",
            imgUrl: "https://v1.qqiyu.cn/qqimg.php?qq=66547997",
            href: "https://blog.qqiyu.cn/?btwaf=69547750"
          },
          {
            title: "贼拉正经的技术博客",
            imgUrl: "https://pic.stackoverflow.wiki/uploadImages/123/113/181/232/2019/12/08/20/25/63b7333e-b51d-4af9-9857-b192de5ae10a.jpeg",
            href: "https://www.stackoverflow.wiki/"
          },
          {
            title: "叶子的个人博客",
            imgUrl: "https://static.yezismile.com/data/photo/day_20191121/201911211135396348_s.jpeg",
            href: "https://www.yezismile.com/"
          },
          {
            title: "墨殇的技术博客",
            imgUrl: "https://img.hacpai.com/file/2019/08/%E5%9C%86%E5%BA%95-4f20ebb2.png?imageView2/2/interlace/1/format/webp",
            href: "https://www.inkdp.cn/"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .link-page {
    .link-list {
      display: flex;
      flex-wrap: wrap;

      li {
        transition: all .03s;
        width: 100px;
        margin: 5px;
        border-radius: 4px;
        border: 1px solid #eee;
        /*font-size: 0;*/
        overflow: hidden;

        .img-panel {
          /*width: 98px;*/
          height: 98px;
        }

        a {
          display: block;
        }

        p {
          font-size: 13px;
          color: #606266;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 3px 10px 5px;
        }

        .item-img {
          width: 98px;
          height: 98px;
          overflow: hidden;
        }

        img {
          vertical-align: top;
          object-fit: cover;
          transition: all .2s linear;

          &:hover {
            transform: scale(1.02);
          }
        }
      }
    }
  }
</style>
