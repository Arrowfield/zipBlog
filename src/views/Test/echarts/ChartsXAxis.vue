<template>
  <!-- axisX -->
  <g stroke="#ACB2BF" stroke-width="1">
    <line
      :x1="grid.left"
      :y1="grid.top + grid.height"
      :x2="options.width - grid.left"
      :y2="grid.top + grid.height"
    />
    <path :d="pathX"/>
    <text
      text-anchor="middle"
      stroke="none"
      fill="#333"
      v-for="item in xAxisData"
      :x="item.x"
      :y="item.y"
      font-size="12">
      {{ item.txt }}
    </text>
  </g>
</template>

<script>
  import {mapGetters} from "vuex";
  import {binarySearch, findNearestTarget} from "../util";

  export default {
    name: "ChartsXAxis",
    data() {
      return {
        xAxisData: [],
      }
    },
    props: {
      options: {
        type: Object,
      },
      grid: {
        type: Object,
      },
      dataAreaWidth: {
        type: [Number, String],
      },
      rate: [Number, String]
    },
    computed: {
      ...mapGetters([
        "minTimestamp",
        "maxTimestamp"
      ]),
      pathX() {
        if (!this.options.xAxis) return ""
        this.xAxisData = []
        let sum = Math.floor(Number(this.minTimestamp)), path = "", rate = this.rate
        let timestamps = this.options.xAxis.data
        let y = this.grid.top + this.grid.height - 1

        let minIndex = findNearestTarget(timestamps, this.minTimestamp)
        let maxIndex = findNearestTarget(timestamps, this.maxTimestamp)
        let tick = Math.ceil((maxIndex - minIndex) / 18)
        if(tick ===0) tick = 1
        this.$store.commit('setStoreValue',{
          xAxisTick:tick
        })
        for (let i = minIndex; i < maxIndex; i += tick) {
          let x = (timestamps[i] - this.minTimestamp) * rate
          if (x < 0) continue
          path += `M ${this.grid.left + x} ${y + 1} L ${this.grid.left + x} ${y + 8} `
          this.xAxisData.push({
            txt: this.options.xAxis.format(timestamps[i]),
            x: this.grid.left + x,
            y: this.grid.top + this.grid.height + 22
          })
        }



        // // 求最大分割线
        // let splitNumber = 15
        // if(this.maxTimestamp - this.minTimestamp < splitNumber * 1000){
        //   splitNumber = (this.maxTimestamp - this.minTimestamp) / 1000
        // }
        // let distance = Math.floor((this.maxTimestamp - this.minTimestamp) / splitNumber)
        //
        //
        // for (sum; sum < this.maxTimestamp; sum += distance) {
        //   let x = sum * rate - this.minTimestamp * rate
        //   path += `M ${this.grid.left + x} ${y} L ${this.grid.left + x} ${y + 7} `
        //   this.xAxisData.push({
        //     txt: this.options.xAxis.format(sum),
        //     x: this.grid.left + x,
        //     y: this.grid.top + this.grid.height + 22
        //   })
        // }
        //path += `M ${this.grid.left + this.dataAreaWidth - 1} ${y} L ${this.grid.left + this.dataAreaWidth - 1} ${y + 7}`
        return path
      },
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>