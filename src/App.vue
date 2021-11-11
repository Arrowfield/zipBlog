<template>
  <div id="app" >
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

  }
</script>

<style lang="scss" src="./assets/scss/base.scss"></style>
<!--style src="./assets/scss/prism.css"></style-->
