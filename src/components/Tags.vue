<template>
  <div class="tags">
    <a v-waves href="#"><i class="iconfont iconrili"></i>2020年04月17日</a>
    <a v-waves href="#"><i class="iconfont iconredu"></i>21888 °C</a>
    <a v-waves href="#"><i class="iconfont iconxx"></i>270</a>
    <a v-waves href="#"><i class="iconfont icondaohang1"></i>环境搭建</a>
  </div>
</template>

<script>
  import waves from "@/directive/waves/waves";
  export default {
    name: "Tags",
    directives:{
      waves
    },
  }
</script>

<style lang="scss" scoped>

  .tags {
    margin: 10px 0;
  }

  .tags a {
    display: inline-flex;
    border-radius: 10px;
    padding: 5px 10px;
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
    margin-right: 10px;
    overflow: hidden;
    align-items: center;

    i {
      margin-right: 5px;
      font-size: 14px;
    }

    &:nth-child(1) {
      background: #ff4e6a;
    }

    &:nth-child(2) {
      background: #ffaa73;
    }

    &:nth-child(3) {
      background: #fed466;
    }

    &:nth-child(4) {
      background: #3cdc82;
    }

    &:nth-child(5) {
      background: #64dcf0;
    }

    &:nth-child(6) {
      background: #64b9ff;
    }
  }

</style>
