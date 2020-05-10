<template>
  <div class="index" :class="{'index-change':showMenu}">
    <div class="bg"></div>
    <div class="index-mask" v-if="showMenu" @click="showMenu = !showMenu"></div>
    <LeftContent :showMenu="showMenu"/>
    <RightContent :showMenu.sync="showMenu" />
  </div>
</template>

<script>
  import RightContent from '@/components/RightContent'
  import LeftContent from "@/components/LeftContent";
  export default {
    components:{
      RightContent,
      LeftContent
    },
    name: "Index",
    data() {
      return {
        showMenu:false
      }
    },
    methods: {
      handleClick() {
      },
      handleScroll() {
      },
      changeMenuStatus(){}
    }
  }
</script>

<style lang="scss" scoped>

  .index{
    position: relative;

    &.index-change{
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
    &>.index-mask{
      position: absolute;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,.4);
      z-index: 100;
    }
  }
  .index .bg {
    background: #f4f8fb;
    height: 100vh;
    /*opacity: .7;*/
    background:  url("../assets/img/index/header-bg.jpg") no-repeat center;
    background-size: cover;
    width: 100vw;
    position: fixed;
    z-index: -1;
    left:0;
    /*background-attachment: fixed;*/
  }

</style>

