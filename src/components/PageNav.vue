<template>
  <ul class="page-nav" v-if="total > 10">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</template>

<script>
  export default {
    name: "PageNav",
    props:{
      total:{
        type:Number,
        default:0
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page-nav{
    margin-top: -10px;
    margin-bottom: 20px;
    text-align: center;
    li{
      color: #999;
      border-radius: 10px;
      width: 35px;
      height: 35px;
      line-height: 35px;
      margin-right: 8px;
      display: inline-block;
      text-align: center;
      background: #f5f6f5;
      cursor: pointer;

      &.active{
        color: #fff;
        background: #ff4e6a;
        opacity: .9;
        box-shadow: 0 2px 12px #ff4e6a;
      }
    }
  }
</style>
