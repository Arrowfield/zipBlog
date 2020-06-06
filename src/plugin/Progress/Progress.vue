<template>
  <!--  <progress :value="value" max="100"></progress>-->
  <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <!--    <div v-show="visible" class="click-love">1321321</div>-->
    <i v-show="visible" :style="positionStyle" class=" click-love iconfont iconaixin--kuai"></i>
  </transition>
</template>

<script>
  import settings from "@/settings";
  export default {
    name: "Progress",
    data() {
      return {
        value: 0,
        duration: 10,
        closed: false,
        onClose: null,
        visible: false,
        top: 0,
        left: 0,
      }
    },
    computed: {
      positionStyle() {
        return {
          top: `${this.top}px`,
          left:`${this.left}px`,
          color:settings.textColors[Math.floor(Math.random() * 6)]
        }
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    }
    ,
    methods: {
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
      ,
      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      }
      ,
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      }
    }
    ,
    mounted() {
      this.startTimer()
    }
  }
</script>

<style scoped>
  .click-love {
    position: fixed;
    /*top: 10px;*/
    /*left: 10px;*/
    z-index: 100;
  }

  .el-message-fade-enter-active, .el-message-fade-leave-active {
    transition: all .6s linear;
  }

  .el-message-fade-leave-to {
    opacity: 0;
    transform: translateY(-50px) translateX(-5px);
  }
</style>
