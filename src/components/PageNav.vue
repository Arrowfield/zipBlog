<template>
  <ul class="page-nav" v-if="total > 5">
    <!--    <li class="active">1</li>-->
    <!--    <li>2</li>-->
    <!--    <li>3</li>-->
    <li v-for="i in num" :class="{active:i === currPage}" @click="changePage(i)">{{i}}</li>
  </ul>
</template>

<script>
  export default {
    name: "PageNav",
    props: {
      total: {
        type: [Number, String],
        default: 0
      },
      currPage: [Number],
      pageSize: {
        type: Number,
        default: 5
      }
    },
    computed: {
      num() {
        let sum = Math.ceil(this.total / this.pageSize)
        return sum
      }
    },
    methods: {
      changePage(i) {
        if (typeof i === "number") {
          this.$emit("update:currPage", i)
          this.$emit('changeCurrPage', i)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-nav {
    margin-top: -10px;
    margin-bottom: 20px;
    text-align: center;
    padding: 20px 0;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 1rem rgba(161, 177, 204, 0.4);

    li {
      color: #999;
      border-radius: 10px;
      width: 35px;
      height: 35px;
      line-height: 35px;
      margin-right: 8px;
      display: inline-block;
      text-align: center;
      background: #f5f6f5;
      cursor: pointer;

      &.active {
        color: #fff;
        background: #ff4e6a;
        opacity: .9;
        box-shadow: 0 2px 12px #ff4e6a;
      }
    }
  }
</style>
