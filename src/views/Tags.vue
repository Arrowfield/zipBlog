<template>
  <RightPanelContainer class="link-page" title="标签">
    <div class="tags">
      <a href="javascript:" :style="{background:bgColors[i%(bgColors.length - 1)],color:textColors[i%(textColors.length - 1)]}"
         v-for="(item,i) in tags"># {{ item }}</a>
      <a href="javascript:" v-if="tags.length === 0" :style="{background:bgColors[0],color:textColors[0]}">wuwu 一个标签都没有，，，</a>
    </div>
  </RightPanelContainer>
</template>

<script>
  import RightPanelContainer from '@/components/RightPanelContainer'
  import {mapState} from 'vuex'

  export default {
    name: "Tags",
    components: {
      RightPanelContainer,
    },
    data() {
      return {}
    },
    computed: {
      getTagsColor() {
      },
      ...mapState({
        tags: state => state.tags,
        bgColors: state => state.bgColors,
        textColors: state => state.textColors
      })
    },
    methods: {},
    async mounted() {
      try {


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
