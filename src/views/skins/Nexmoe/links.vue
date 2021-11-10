<template>
  <layout-slot>
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

          <li v-if="linkFriend.length === 0">
            <a href="javascript:" title="没有加载到数据">
              <div class="item-img">
                <img src="" alt="">
              </div>
              <p>数据没有加载到</p>
            </a>
          </li>
        </ul>
      </RightPanelContainer>
  </layout-slot>
</template>

<script>
  import RightPanelContainer from '@/components/RightPanelContainer'
  import {getLink} from '@/api/linkFriend'
  import LayoutSlot from "./slot/layout-slot";

  export default {
    name: "LinkFriend",
    components: {
      LayoutSlot,
      RightPanelContainer
    },
    data() {
      return {
        linkFriend: []
      }
    },
    methods: {
      getLinkFriend() {
        getLink({type: 0}).then((res) => {
          if (res.data.code !== 200) return
          this.linkFriend = res.data.data.map((item) => {
            return {
              title: item.title,
              imgUrl: item.image,
              href: item.url
            }
          })
        })
      }
    },
    mounted() {
      this.getLinkFriend()
    }
  }
</script>

<style lang="scss" scoped>
  .link-page {
    margin-left: 260px;
    width: calc(100% - 260px);
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
  @media screen and (max-width: 768px) {
    .link-page{
      width: 100%;
      margin: 80px  0 0;
    }
  }
</style>
