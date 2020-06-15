<template>
  <div id="app">
    <Progress/>
    <router-view/>
  </div>
</template>

<script>

  import {getUser} from '@/api/home'
  import Progress from "@/components/Progress";

  export default {
    name: "App",
    components: {Progress},
    methods: {},
    // async mounted() {
    //   let res = await getUser()
    //   console.log(res)
    // }
  }
</script>

<style lang="scss" src="./assets/scss/base.scss"></style>
<style>
  @import "./assets/scss/prism.css";

</style>
