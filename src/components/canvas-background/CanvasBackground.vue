<template>
  <canvas @click="handleClick" :width="width" :height="height" id="canvas" ></canvas>
</template>

<script>

  import HandleCanvas from "./handleCanvas";

  export default {
    name: "CanvasBackground",
    data() {
      return {
        width: 0,
        height: 0,
        canvas: null
      }
    },
    methods: {
      resize() {
        this.width = window.innerWidth
        this.height = window.innerHeight
      },
      handleClick(){
        new HandleCanvas({id: 'canvas'})
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.resize()
        new HandleCanvas({id: 'canvas'})
      })
      window.addEventListener("resize", this.resize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resize)
    }
  }
</script>

<style scoped>
  #canvas {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    /*background: white;*/
  }
</style>