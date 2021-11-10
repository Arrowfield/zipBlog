<template>
  <layout-slot>
      <RightPanelContainer class="main-content-right" title="友情链接">
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


