<template>
  <progress class="progress" value="50" max="100"></progress>
</template>

<script>
  export default {
    name: "Progress"
  }
</script>

<style scoped lang="scss">
  .progress{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    border: none;
    background: transparent;
    -webkit-appearance: none;
    z-index: 3;
    height: 2px;
    &::selection{
      /*background: rgba(66,133,244,.4);*/
    }
    &::-webkit-progress-bar {
      background:#d7d7d7;
    }

    &::-webkit-progress-value,
    &::-moz-progress-bar
    {
      background:rgba(66,133,244,1);
    }
  }
</style>
