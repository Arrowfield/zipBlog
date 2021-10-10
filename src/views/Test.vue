<template>
  <div>
      <canvas  id="flamegraph"></canvas>
      <div class="target-style">
        <canvas id="fps"></canvas>
      </div>
  </div>
</template>

<script>
  import {createCanvas} from '@/plugin/flamegraph/flamegraph'
  import {targetChart} from '@/plugin/targetChart/targetChart'
  export default {
    name: "Test",
    mounted(){
        createCanvas({id:'flamegraph'})
        targetChart({id:'fps'})
    }
  }
</script>

<style lang="scss" scoped>
.target-style{
  width:1640px;
  margin:10px auto;
  box-shadow: 0 2px 10px rgba(179,186,220,.4);
}
</style>