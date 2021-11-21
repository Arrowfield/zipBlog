<template>
  <div class="page-nav" v-if="total > pageSize">
    <button v-show="maxPageNum > 10" :disabled="currPage === 1" @click="prevPage"><<</button>
    <button  v-for="(item,i) in nums" :class="{active:item === currPage,'no-num':typeof item === 'string'}" @click="changePage(item)">{{item}}</button>
    <button v-show="maxPageNum > 10" :disabled="currPage === maxPageNum" @click="nextPage">>></button>
    <input v-show="maxPageNum > 10" v-model="value" type="text" @blur="jumpPage"/>
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
        default: 10
      }
    },
    data() {
      return {
        maxPageNum: 0,
        nums: [],
        value: 1
      }
    },
    watch: {
      currPage(val) {
        this.value = val
      },
      total(val){
        if(typeof val === 'number'){
          this.initPageNum()
        }
      }
    },
    computed: {
      num() {

      }
    },
    methods: {
      jumpPage() {
        if (this.value < 1) {
          this.$emit('update:currPage', 1)
          return
        }
        if (this.value > this.maxPageNum) {
          this.$emit('update:currPage', this.maxPageNum)
          return
        }
        this.getNumIndex(Number(this.value))
        this.$emit('update:currPage', Number(this.value))
      },
      getNumsCurr(i) {
        if (this.currPage < 6) {
          let start = [], end = this.nums.slice(-4)
          for (let i = 1; i <= 6; i++) {
            start.push(i)
          }
          this.nums = start.concat(end)
        } else if (this.currPage >= 6 && this.currPage < this.nums[this.nums.length - 3] - 2) {
          let start = [1, "..."], end = ['...'].concat(this.nums.slice(-3))
          let center = [i - 2, i - 1, i, i + 1]
          this.nums = start.concat(center).concat(end)
        } else if (this.currPage >= this.nums[this.nums.length - 3]) {
          let start = [1, "..."], end = [], max = this.nums[this.nums.length - 1]
          for (let i = max; i > max - 8; i--) {
            end.unshift(i)
          }
          this.nums = start.concat(end)
        }
      },
      getNumIndex(i) {
        if (this.maxPageNum > 10) {
          if (i < 6) {
            let start = [], end = ['...'].concat(this.nums.slice(-3))
            for (let i = 1; i <= 6; i++) {
              start.push(i)
            }
            this.nums = start.concat(end)
          } else if (i >= 6 && i < this.nums[this.nums.length - 3] - 1) {
            let start = [1, "..."], end = ['...'].concat(this.nums.slice(-3))
            let center = [i - 2, i - 1, i, i + 1]
            this.nums = start.concat(center).concat(end)
          } else {
            let start = [1, "..."], end = [], max = this.nums[this.nums.length - 1]
            for (let i = max; i > max - 8; i--) {
              end.unshift(i)
            }
            this.nums = start.concat(end)
          }
        }
      },
      prevPage() {
        let i = this.currPage - 1
        this.getNumsCurr(i)
        this.$emit("update:currPage", i)
      },
      nextPage() {
        let i = this.currPage + 1
        this.getNumsCurr(i)
        this.$emit("update:currPage", i)
      },
      changePage(i) {
        if (typeof i !== "number") return
        this.getNumIndex(i)
        this.$emit("update:currPage", i)
        this.$emit('changeCurrPage', i)
      },
      initPageNum() {
        this.maxPageNum = Math.ceil(this.total / this.pageSize)
        this.nums = []
        if (this.maxPageNum > 10) {
          let num = [], start = [], end = [], center = ['...']
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
        } else {
          for (let i = 1; i <= this.maxPageNum; i++) {
            this.nums.push(i)
          }
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
         this.initPageNum()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .page-nav {
    //margin-top: -10px;
    //margin-bottom: 20px;
    text-align: center;
    padding: 20px 0;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 1rem rgba(161, 177, 204, 0.4);

    button, input {
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

      &.no-num{
        /*cursor: not-allowed;*/
        pointer-events: none;
      }

      &.active {
        color: #fff;
        background: #ff4e6a;
        opacity: .9;
        box-shadow: 0 2px 12px #ff4e6a;
      }

      &:hover{
        background: #e4e6ef;
        box-shadow: none;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }

    input {
      appearance: none;
      -webkit-appearance: button;
      /*-webkit-appearance: none;*/
      /*border-radius: 0;*/
    }
  }
</style>
