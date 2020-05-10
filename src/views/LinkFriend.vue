<template>
  <RightPanelContainer class="link-page">
    <h2 class="link-title">友情链接</h2>
    <ul class="link-list">
      <li>
        <a href="https://www.stackoverflow.wiki/" title="贼拉正经的技术博客" target="_blank">
          <img
            src="https://pic.stackoverflow.wiki/uploadImages/123/113/181/232/2019/12/08/20/25/63b7333e-b51d-4af9-9857-b192de5ae10a.jpeg"
            alt="">
          <p>贼拉正经的技术博客</p>
        </a>
      </li>
      <li>
        <a href="https://88250.b3log.org/" title="D的个人博客" target="_blank">
          <img
            src="https://img.hacpai.com/avatar/1353745196354_1584267806213.jpeg?imageView2/1/w/128/h/128/interlace/0/q/100"
            alt="">
          <p>D的个人博客</p>
        </a>
      </li>

      <li>
        <a href="https://www.inkdp.cn/" title="墨殇的技术博客" target="_blank">
          <img
            src="https://img.hacpai.com/file/2019/08/%E5%9C%86%E5%BA%95-4f20ebb2.png?imageView2/2/interlace/1/format/webp"
            alt="">
          <p>墨殇的技术博客</p>
        </a>
      </li>
    </ul>
  </RightPanelContainer>
</template>

<script>
  import RightPanelContainer from '@/components/RightPanelContainer'

  export default {
    name: "LinkFriend",
    components: {
      RightPanelContainer
    }
  }
</script>

<style lang="scss" scoped>
  .link-page {
    .link-title {
      font-size: 1.5em;
      position: relative;
      padding-bottom: 10px;
      color: #111;
      margin: 20px 0;

      &::before {
        content: "";
        width: calc(100% + 40px);
        border-bottom: 1px solid #eee;
        position: absolute;
        bottom: -1px;
        left: -20px;
      }

      &::after {
        transition: all .35s;
        content: "";
        position: absolute;
        background: rgba(255, 78, 106, .85);
        width: 1em;
        height: 5px;
        bottom: -3px;
        left: 0;
        border-radius: 6px;
        box-shadow: 0 2px 12px rgba(255, 78, 106, .85);
      }
    }

    .link-list {
      display: flex;
      li {
        transition: all .03s;
        width: 100px;
        margin: 5px;
        border-radius: 4px;
        border: 1px solid #eee;
        /*font-size: 0;*/
        overflow: hidden;

        p {
          font-size: 13px;
          color: #606266;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 3px 10px 5px;
        }
      }

      img {

      }
    }
  }
</style>
