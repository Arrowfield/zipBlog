<template>
  <div class="index" :class="{'index-change':showMenu}">
    <div class="bg"></div>
    <div class="index-mask" v-if="showMenu" @click="changeMenuStatus"></div>
    <transition name="menu">
      <LeftContent v-show="showMenu" :showMenu="showMenu"/>
    </transition>
    <LeftContent v-show="!showMenu"/>
    <RightContent :showMenu.sync="showMenu"/>
    <div class="go-top-panel" @click.stop="goTop">
      <img  src="@/assets/img/index/top.png" class="icon go-top" alt="">
    </div>
  </div>
</template>

<script>
  import RightContent from '@/components/RightContent'
  import LeftContent from "@/components/LeftContent";
  import ProgressSelf from '../plugin/Progress/Progress'

  export default {
    components: {
      RightContent,
      LeftContent
    },
    name: "Index",
    data() {
      return {
        showMenu: false,
        showMenuFun: true
      }
    },
    watch: {
      showMenu(val) {
        if (val) {
          document.body.classList.add('add-mask-panel')
        } else {
          document.body.classList.remove('add-mask-panel')

        }
      }
    },
    methods: {
      goTop() {
        //window.scrollTo(0,0)
        document.querySelector('#app').scrollIntoView({block: 'start', behavior: 'smooth'})
      },
      handleClick() {
      },
      handleScroll() {
      },
      changeMenuStatus() {
        this.showMenu = !this.showMenu
        this.showMenuFun = !this.showMenuFun
        console.log(typeof this.showMenuFun)
      },
      addLoveIcon(e) {
        ProgressSelf({left: e.clientX, top: e.clientY})
      }
    },
    mounted() {
      document.body.addEventListener("click", this.addLoveIcon)
    }
  }
</script>

<style lang="scss" scoped>


  .menu-enter-active {
    transition: all .6s ease;
  }

  .menu-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .menu-enter, .menu-leave-to {
    transform: translateX(-260px);
    opacity: 0;
  }


  .index {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    .go-top-panel{
      position: fixed;
      bottom: 80px;
      right: 20px;
      cursor: pointer;
      color: white;
      padding:10px;
    }

    .go-top {

      width: 30px;
      // height: 50px;

    }

    &.index-change {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    & > .index-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, .4);
      z-index: 100;
    }
  }

  .index .bg {
    background: #f4f8fb;
    height: 100vh;
    /*opacity: .7;*/
    background: url("../assets/img/index/header-bg.jpg") no-repeat center;
    background-size: cover;
    width: 100vw;
    position: fixed;
    z-index: -1;
    left: 0;
    /*background-attachment: fixed;*/
  }

</style>

