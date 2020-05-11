<template>
<!--  <div class="message">-->
<!--    <textarea placeholder="请输入评论"></textarea>-->
<!--    <div class="send-cont">-->
<!--      <input placeholder="请输入你的昵称" type="text" name="message">-->
<!--      <button class="send">留言</button>-->
<!--    </div>-->
<!--  </div>-->

  <Fragment>
    <div id="vcomments"></div>
  </Fragment>
</template>

<script>
  import {Fragment} from 'vue-fragment'
  import Valine from 'valine';
  export default {
    name: "Message",
    components:{
      Fragment
    },
    mounted() {
      this.$nextTick(()=>{
        new Valine({
          el:'#vcomments',
          appId: 'i6UzLvqubKd7cmpuvLNmcKot-gzGzoHsz',
          appKey: 'HsPRcF8z6wsC6oKKRHIK4lQ9'
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  .message {
    textarea {
      width: 100% !important;
      min-height: 100px;
      font-size: 14px;
      border: 1px solid #dcdee2;
      padding: 4px 7px;
    }

    .send-cont{
      display: flex;
      align-items: center;
      margin-top: 10px;
      /*justify-content: end;*/
    }

    input,.send {
      height: 32px;
      padding: 4px 7px;
      border: 1px solid #dcdee2;
    }
    .send{
      margin-left:5px;
      min-width: 80px;
    }
  }
</style>
