<template>
  <div id="comments"></div>
</template>

<script>
  /**
   * 云评论的地址：https://valine.js.org/
   * 云评论控制台：https://console.leancloud.cn/login?from=%2Fapps
   * @desc 无后端评论系统
   * @author 768449566@qq.com
   * @pass qq
   */
  import Valine from 'valine';

  export default {
    name: "Message",
    mounted() {
      this.$nextTick(() => {
        new Valine({
          el: "#comments",
          appId: 'i6UzLvqubKd7cmpuvLNmcKot-gzGzoHsz',
          appKey: 'HsPRcF8z6wsC6oKKRHIK4lQ9',
          path: this.$route.path
        })
      })
    },
  }
</script>

