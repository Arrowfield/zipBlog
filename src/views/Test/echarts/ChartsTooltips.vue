<template>
  <g>
    <text
      alignment-baseline="middle"
      stroke="#666"
      font-size="12"
      x="0" y="0"
    >{{ tooltips.time }}</text>
    <rect/>
  </g>
</template>

<script>
  export default {
    name: "Charts-tooltips",
    props:{
      tooltips:Object
    },
  }
</script>

<style scoped>

</style>