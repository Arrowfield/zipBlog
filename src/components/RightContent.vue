<template>
  <div class="right-content">
    <div class="header">
      <a v-waves href="javascript:" @click="showMenuFun"><i class="iconfont icondaohang"></i></a>
      <a href="/"><img src="../assets/img/index/kenan_avatar.png" alt=""></a>
    </div>
    <router-view/>

    <div class="footer">{{ epigram }}</div>
  </div>
</template>

<script>
  import waves from "@/directive/waves/waves";
  import Loading from "@/components/Loading";
  import setting from '@/settings'
  export default {
    name: "RightContent",
    data(){
      return{
        epigram:setting.epigram //警句，格言
      }
    },
    components:{
      Loading
    },
    directives: {
      waves
    },
    props:['showMenu'],
    watch:{

    },
    methods:{
      showMenuFun(){
        this.$emit('update:showMenu',!this.showMenu)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .right-content {
    margin-top: 20px;
    position: absolute;
    left: 260px;
    width: 940px;
    .header {

      align-items: center;
      justify-content: space-between;
      padding:0 20px 0 10px;
      display: none;
      a {
        width: 48px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 4px;
        i{
          font-size: 24px;
        }
      }

      img {
        width: 100%;
      }
    }




    .footer {
      padding: 21.5px 20px;
      text-align: center;
      background-color: #f5f6f5;
      color: #777;
      font-size: 13px;
      bottom: 0;
      width: 100%;
      height: 56px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      font-family: 'Arizonia', cursive;
    }
  }
</style>
