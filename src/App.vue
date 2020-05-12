<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App",
    methods: {},
    mounted() {
      this.$axios.get('/api/user/3',{}).then((res)=>{
        console.log(res)
      })
    }
  }
</script>

<style lang="scss" src="./assets/scss/base.scss"></style>
