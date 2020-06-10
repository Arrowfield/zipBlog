<template>
  <Fragment>
    <div :id="idName"></div>
  </Fragment>
</template>

<script>
  /**
   * 云评论的地址：https://valine.js.org/
   * @desc 无后端评论系统
   */
  import {Fragment} from 'vue-fragment'
  import Valine from 'valine';
  export default {
    name: "Message",
    components:{
      Fragment
    },
    props:{
      idName:[String,Number]
    },
    data(){
      return{
        comment:null
      }
    },
    mounted() {
      this.$nextTick(()=>{
        this.comment = new Valine({
          el:`#${this.idName}`,
          appId: 'i6UzLvqubKd7cmpuvLNmcKot-gzGzoHsz',
          appKey: 'HsPRcF8z6wsC6oKKRHIK4lQ9'
        })
      })
    },
    beforeDestroy() {
      this.comment = null
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
