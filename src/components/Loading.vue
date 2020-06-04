<template>
  <div class="loading">
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

<style scoped lang="scss">
  .loading{
    span{
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      border:1px black solid;
      margin-left:1px;
      animation: loading 1s forwards infinite;
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
