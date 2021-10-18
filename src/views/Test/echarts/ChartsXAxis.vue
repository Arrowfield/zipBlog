<template>
  <!-- axisX -->
  <g stroke="#ACB2BF" stroke-width="2">
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
      v-for="item
            in xAxisData"
      :x="item.x"
      :y="item.y"
      font-size="12">
      {{ item.txt  }}
    </text>
  </g>
</template>

<script>
  import {mapGetters} from "vuex";

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

        //let maxTimestamp = this.options.xAxis.data[this.options.xAxis.data.length - 1]
        let sum = this.minTimestamp, path = "", rate = this.rate
        let y = this.grid.top + this.grid.height - 1
        // 求最大分割线
        let step = (this.maxTimestamp - this.minTimestamp) / 15
        if (step > this.options.xAxis.maxInterval) {
          step = this.options.xAxis.maxInterval
        }
        // while (sum <= this.maxTimestamp) {
        //   let x = sum * rate - this.minTimestamp * rate
        //   path += `M ${this.grid.left + x} ${y} L ${this.grid.left + x} ${y + 7} `
        //
        //   this.xAxisData.push({
        //     txt: this.options.xAxis.format(sum),
        //     x: this.grid.left + x,
        //     y: this.grid.top + this.grid.height + 22
        //   })
        //   sum += step
        // }
        path += `M ${this.grid.left + this.dataAreaWidth - 1} ${y} L ${this.grid.left + this.dataAreaWidth - 1} ${y + 7}`
        return path
      },
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>