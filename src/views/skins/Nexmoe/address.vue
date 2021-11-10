<!-- page 好站推荐 -->
<template>
  <layout-slot>
    <RightPanelContainer class="address-page main-content-right" title="好站推荐">
      <ul class="good-link">
        <li class="link-item" v-for="(item) in linkList">
          <a :href="item.href" target="_blank" :title="item.title">
            <div class="intro-link">
              <p class="title">{{ item.title }}</p>
              <p class="intro">{{ item.intro }}</p>
            </div>
            <div class="logo">
              <img :src="item.imgUrl" alt=""/>
            </div>
          </a>
        </li>

        <li class="link-item" v-if="linkList.length === 0">
          <a href="javascript:" title="没有加载到数据">
            <div>
              <p class="title">没有加载到数据</p>
              <p class="intro">-</p>
            </div>
            <div class="logo">
              <img src="../../../assets/images/error/loading_error.png" alt=""/>
            </div>
          </a>
        </li>

      </ul>
    </RightPanelContainer>
  </layout-slot>
</template>

<script>
  import {getLink} from "@/api/linkFriend";
  import RightPanelContainer from "./slot/RightPanelContainer";
  import LayoutSlot from "./slot/layout-slot";

  export default {
    name: "Address",
    components: {
      LayoutSlot,
      RightPanelContainer
    },
    data() {
      return {
        linkList: []
      }
    },
    methods: {
      getGoogLink() {
        getLink({type: 1}).then((res) => {
          //console.log(res.data.data)
          if (res.data.code !== 200) return
          this.linkList = res.data.data.map((item) => {
            return {
              href: item.url,
              title: item.title,
              intro: item.description,
              imgUrl: item.image
            }
          })
        })
      }
    },
    mounted() {
      this.getGoogLink()
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


      &:hover {
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
          transform: scale(1.02);

          .title, .intro {
            color: white;
          }
        }
      }

      .intro-link {
        //width: ;
        //flex: 0 0 auto;
        width: calc(100% - 90px)
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
