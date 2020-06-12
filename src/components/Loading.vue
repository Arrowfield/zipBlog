<template>
  <div class="loading">
    <div v-if="type === 'circular'" class="el-loading-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
      </svg>
    </div>
    <div v-else>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Loading",
    props: {
      type: [String]
    }
  }
</script>

<style lang="scss">
  .loading-container {
    position: relative;
  }
</style>

<style scoped lang="scss">

  .el-loading-spinner {
    top: 50%;
    margin-top: -21px;
    width: 100%;
    text-align: center;
    position: absolute;
  }

  .el-loading-spinner .circular {
    height: 42px;
    width: 42px;
    animation: loading-rotate 2s linear infinite;
  }

  .el-loading-spinner .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    /*stroke: #409eff;*/
    stroke: #ff4e6a;
    stroke-linecap: round;
  }

  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px
    }
    to {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px
    }
  }

  /*@keyframes loading-rotate{to{transform:rotate(1turn)}}*/

  @keyframes loading-rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }

  }

  .loading {
    background: hsla(0,0%,100%,.6);
    span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      border: 1px black solid;
      margin-left: 1px;
      animation: loading 2.1s ease infinite;
    }

    span:nth-child(1) {
      animation-delay: .3s;
    }

    span:nth-child(2) {
      animation-delay: .6s;
    }

    span:nth-child(3) {
      animation-delay: .9s;
    }

    span:nth-child(4) {
      animation-delay: 1.2s;
    }

    span:nth-child(5) {
      animation-delay: 1.5s;
    }

    span:nth-child(6) {
      animation-delay: 1.8s;
    }

  }

  @keyframes loading {
    0% {
      background: black;
    }
    100% {
      background: transparent;
    }
  }

</style>
