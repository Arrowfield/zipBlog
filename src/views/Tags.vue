<template>
  <RightPanelContainer class="link-page" title="标签">
    <div class="tags">
      <a># 随笔</a>
      <a># golang</a>
      <a># 算法</a>
      <a># 关于我</a>
      <a># 随笔</a>
      <a># 随笔</a>
      <a># 随笔</a>
      <a># golang</a>
      <a># 算法</a>
      <a># 关于我</a>
      <a># 随笔</a>
      <a># 随笔</a>
      <a># 随笔</a>
      <a># golang</a>
      <a># 算法</a>
      <a># 关于我</a>
      <a># 随笔</a>
      <a># 随笔</a>
      <a># 随笔</a>
      <a># golang</a>
      <a># 算法</a>
      <a># 关于我</a>
      <a># 随笔</a>
      <a># 随笔</a>
      <a># 随笔</a>
      <a># golang</a>
      <a># 算法</a>
      <a># 关于我</a>
      <a># 随笔</a>
      <a># 随笔</a>
    </div>
  </RightPanelContainer>
</template>

<script>
  import RightPanelContainer from '@/components/RightPanelContainer'
  import {getTags} from "@/api/tag";
  // import TagsComponent from '@/components/Tags'
  import {getColor} from '../utils/utils'

  export default {
    name: "Tags",
    components: {
      RightPanelContainer,
    },
    data() {
      return {
        bgColors: [
          "rgba(255,78,106,.15)",
          "rgba(255,170,115,.15)",
          "rgba(254,212,102,.15)",
          "rgba(60,220,130,.15)",
          "rgba(100,220,240,.15)",
          "rgba(100,185,255,.15)",
          "rgba(180,180,255,.15)",
          "rgba(255,78,106,.15)"
        ],
        textColors: [
          "rgba(255,78,106,.8)",
          "#ffaa73",
          "#fed466",
          "#3cdc82",
          "#64dcf0",
          "#64b9ff",
          "#b4b4ff",
          "rgba(255,78,106,.8)"
        ],
      }
    },
    computed: {
      getTagsColor() {

        //return getColor()
      }
    },
    methods: {},
    async mounted() {
      try {
        // let color = getColor()
        // console.log(color)
        //let res = await getTags()

      } catch (e) {
        throw e
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    padding: 10px 10px 5px;

    a {
      border-radius: 10px;
      padding: 5px 10px;
      color: #fff;
      font-size: 12px !important;
      display: inline-block;
      margin-bottom: 5px;
      background: rgba(255, 78, 106, .15);
      color: rgba(255, 78, 106, .8);
      margin-right: 5px;
    }
  }
</style>
