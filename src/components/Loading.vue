<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
  export default {
    name: "Loading"
  }
</script>

<style lang="scss">
  .loading-container{
    position: relative;
  }
</style>

<style scoped lang="scss">
  .loading{

    span{
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      border:1px black solid;
      margin-left:1px;
      animation: loading 2.1s ease infinite;
    }
    span:nth-child(1){
      animation-delay: .3s;
    }
    span:nth-child(2){
      animation-delay: .6s;
    }
    span:nth-child(3){
      animation-delay: .9s;
    }
    span:nth-child(4){
      animation-delay: 1.2s;
    }
    span:nth-child(5){
      animation-delay: 1.5s;
    }
    span:nth-child(6){
      animation-delay: 1.8s;
    }

  }

  @keyframes loading {
    0%{
        background: black;
    }
    100%{
      background: transparent;
    }
  }

</style>
