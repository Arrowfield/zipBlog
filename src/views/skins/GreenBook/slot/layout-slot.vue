<template>
  <div class="bg-gray" :style="{backgroundImage:`url(${bodyImage})`}">
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
        bodyImage: require('@/assets/images/index/header-bg.jpg'),
      }
    },
    props:{
      className:String
    }
  }
</script>

<style scoped>
  .bg-gray {
    background-position: left top;
    background-size: auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #f7f7f7 !important;
  }
</style>