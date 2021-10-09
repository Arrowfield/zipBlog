<template>
  <div>
      <canvas  id="flamegraph"></canvas>
  </div>
</template>

<script>
  import {createCanvas} from '@/plugin/flamegraph/flamegraph'
  export default {
    name: "Test",
    mounted(){
        createCanvas({id:'flamegraph'})
    }
  }
</script>

<style lang="scss" scoped>

</style>