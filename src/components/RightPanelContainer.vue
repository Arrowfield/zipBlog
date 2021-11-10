<template>
  <div class="panel-cont">
    <h2 class="link-title">{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "RightPanelContainer",
    props:['title'],
  }
</script>

<style lang="scss" scoped>
  .panel-cont{
    width: 100%;
    margin: 45px auto;
    border-radius: 10px;
    background-color: rgb(255,255,255);
    padding: 20px;
    box-shadow: 0 0 1rem rgba(161, 177, 204, .4);
  }

  .link-title {
    font-size: 1.5em;
    position: relative;
    padding-bottom: 10px;
    color: #111;
    margin: 20px 0;
    &:hover{
      &::after{
        width: 3em;
      }
    }

    &::before {
      content: "";
      width: calc(100% + 40px);
      border-bottom: 1px solid #eee;
      position: absolute;
      bottom: -1px;
      left: -20px;
    }

    &::after {
      transition: all .35s;
      content: "";
      position: absolute;
      background: rgba(255, 78, 106, .85);
      width: 1em;
      height: 5px;
      bottom: -3px;
      left: 0;
      border-radius: 6px;
      box-shadow: 0 2px 12px rgba(255, 78, 106, .85);
      /*display: block;*/

    }
  }

</style>
