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
    async mounted() {
      // this.$axios.get('/api/user/3',{}).then((res)=>{
      //   console.log(res)
      // })

      // this.$axios.get('/user/3', {}).then((res) => {
      //   console.log(res)
      // })
      let res = await getUser()
      console.log(res)
    }
  }
</script>

<style lang="scss" src="./assets/scss/base.scss"></style>
