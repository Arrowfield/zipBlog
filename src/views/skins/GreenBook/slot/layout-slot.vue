<template>
  <div >
    <vue-header/>
    <div class="main-content clearfix" :class="className">
      <slot></slot>
    </div>
    <vue-footer/>
  </div>
</template>

<script>
  import VueHeader from "../header";
  import VueFooter from "../footer";

  export default {
    name: "layout-slot",
    components: {VueFooter, VueHeader},
    data() {
      return {

      }
    },
    props:{
      className:String,
      bodyImage:{
        type:String,
        default:()=>{
          //return require('@/assets/images/index/header-bg.jpg')
          return require('../images/bg.png')
        }
      }
    }
  }
  //class="bg-gray" :style="{backgroundImage:`url(${bodyImage})`}"
</script>

<style lang="scss" scoped>

</style>
