<template>
  <div class="comment-container">
    <div id="comments"></div>
  </div>
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
          path: this.$route.path,
          requiredFields: ['nick', 'mail'],
          avatar: "monsterid",
          placeholder: "来都来了，看都看了，想说点什么吗 0_o"
        })
      })
    },
  }
</script>
<style lang="scss">
  #comments .vpanel {
    background: white;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
  }

  #comments .vpanel textarea {
    height: 120px !important;
    overflow-y: auto !important;
    resize: none;
    background: url("https://rawchen.com/usr/themes/rawchen/images/comments-bg.jpg") no-repeat center right;
    background-size: 200px;
  }

  #comments .vcards > .vcard {
    padding: 10px;
    background: white;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
    border-radius: 3px;
  }
  #comments .vcards .vcard .vh{
    border:none;
  }
</style>
