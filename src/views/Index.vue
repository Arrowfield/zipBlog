<template>
  <div class="index ">
    <div class="bg"></div>
    <LeftContent/>
    <RightContent/>
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
        isScroll: false,
        menu:false
      }
    },
    methods: {
      handleClick() {

      },
      handleScroll() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .index{
    position: relative;
  }
  .index .bg {
    background: #f4f8fb;
    height: 100vh;
    opacity: .7;
    background:  url("../assets/img/index/header-bg.jpg") no-repeat center;
    background-size: cover;
    width: 100vw;
    position: fixed;
    z-index: -1;
    left:0;
    /*background-attachment: fixed;*/
  }

</style>

