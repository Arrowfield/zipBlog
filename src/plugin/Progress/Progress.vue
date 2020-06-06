<template>
  <progress :value="value" max="100"></progress>
</template>

<script>
  export default {
    name: "Progress",
    data(){
      return{
        value:0
      }
    }
  }
</script>

<style scoped>

</style>
