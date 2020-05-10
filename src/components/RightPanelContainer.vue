<template>

  <div class="panel-cont">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "RightPanelContainer"
  }
</script>

<style lang="scss" scoped>
  .panel-cont{
    width: 100%;
    margin: 20px auto;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 1rem rgba(161, 177, 204, .4);
  }
</style>
