<template>
  <div class="page-nav" v-if="total > 5">
    <button :disabled="currPage === 1" @click="prevPage"><<</button>
    <button v-for="(item,i) in nums" :class="{active:item === currPage}" @click="changePage(item)">{{item}}</button>
    <button :disabled="currPage === maxPageNum" @click="nextPage">>></button>
  </div>
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
    data() {
      return {
        maxPageNum: 0,
        nums: []
      }
    },
    computed: {
      num() {

      }
    },
    methods: {
      prevPage() {
        let i = this.currPage - 1
        this.$emit("update:currPage", i)
      },
      nextPage() {
        let i = this.currPage + 1

        if (this.currPage >= 6 && this.currPage < this.nums[this.nums.length - 3] - 2) {
          let start = [1, "..."], end = this.nums.slice(-4)
          let center = [i - 2, i - 1, i, i + 1]
          this.nums = start.concat(center).concat(end)
        }
        this.$emit("update:currPage", i)
      },
      changePage(i) {
        if (typeof i === "number") {
          // console.log(this.nums[this.nums.length - 3] - 2)
          if(i >= 6 && i < this.nums[this.nums.length - 3] - 1){
            let start = [1, "..."], end = this.nums.slice(-4)
            let center = [i - 2, i - 1, i, i + 1]
            this.nums = start.concat(center).concat(end)
          }
          this.$emit("update:currPage", i)
          this.$emit('changeCurrPage', i)

        }
        //发生两位的偏移
        // if(typeof i === 'string'){
        //   let result = [1,'...']
        //
        //   this.nums.forEach((item,i)=>{
        //     if(i > 2 && i < 7){
        //       result.push(i)
        //     }
        //   })
        //
        //   this.nums = result.concat(this.nums.slice(-4))
        //   this.$emit("update:currPage", result[2])
        // }
      },
      getPageNum() {
        let num = [], result = [], start = [], end = [], center = ['...']
        this.maxPageNum = Math.ceil(this.total / this.pageSize)
        for (let i = 1; i <= this.maxPageNum; i++) {
          num.push(i)
        }
        num.forEach((item, i) => {
          if (i < 6) {
            start.push(item)
          }
          if (i > num.length - 4) {
            end.push(item)
          }
        })
        this.nums = start.concat(center).concat(end)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getPageNum()
      })
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

    button {
      color: #999;
      border-radius: 10px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      margin-right: 8px;
      display: inline-block;
      text-align: center;
      background: #f5f6f5;
      cursor: pointer;
      margin-bottom: 8px;

      &.active {
        color: #fff;
        background: #ff4e6a;
        opacity: .9;
        box-shadow: 0 2px 12px #ff4e6a;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
</style>
