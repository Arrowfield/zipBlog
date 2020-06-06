<template>
  <progress class="progress" :value="val" max="100"></progress>
</template>

<script>
  export default {
    name: "Progress",
    data() {
      return {
        val: 0
      }
    },
    methods: {
      scroll(e) {
        //滚动高度 / (窗口高度 - 文档高度) * 100
        //console.log(window.pageYOffset,window.screen.height,window.innerHeight,e.target.documentElement.offsetHeight)
        let dom = document.getElementsByClassName('right-content')[0]
        this.val = window.pageYOffset / (dom.offsetHeight - window.innerHeight) * 100

      }
    },
    mounted() {
      window.addEventListener('scroll', this.scroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scroll)
    }
  }
</script>

<style scoped lang="scss">
  .progress {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    border: none;
    -webkit-appearance: none;
    z-index: 3;
    height: 2px;
    border-radius: 2px;
  }

  .progress::-webkit-progress-bar {
    background-color: transparent;
    border-radius: 2px;
  }

  /* 表示已完成进度背景色 */
  .progress::-webkit-progress-value {
    background: rgba(66,133,244,1);
    border-radius: 2px;
  }

</style>
