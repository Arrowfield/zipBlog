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
      this.resize()
      this.$nextTick(() => {

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

</style>