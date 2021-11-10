<template>
  <div class="error-page">
    <div class="canter-info">
      <h2>404 Not Fount</h2>
        <img src="@/assets/images/error/404.gif"/>
      <div class="a-error">
        Please start or return to Index .
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Error",
    computed: {
      message() {
        return '特朗普说这个页面你不能进......'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .error-page{
    background: #f3f1e5;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .canter-info{
      background: white;
      width: 100%;
      padding: 10px;
      max-width: 760px;
      h2{
        background: #f3f1e5;
        border-radius: 4px 4px 0 0;
        font-size: 16px;
        margin: 0;
        padding: 10px 20px;
      }
      img{
        display: block;
        margin: 20px auto;
        width: auto;
        max-width: 100%;
      }
      .a-error{
        text-align: right;
      }
    }
  }
</style>
