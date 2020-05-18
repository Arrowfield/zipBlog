<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  import {getUser} from '@/api/home'

  export default {
    name: "App",
    methods: {},
    // async mounted() {
    //   let res = await getUser()
    //   console.log(res)
    // }
  }
</script>

<style lang="scss" src="./assets/scss/base.scss"></style>
