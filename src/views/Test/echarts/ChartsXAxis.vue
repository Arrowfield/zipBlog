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
      pathX() {
        if (!this.options.xAxis) return ""
        let maxTimestamp = this.options.xAxis.data[this.options.xAxis.data.length - 1]
        let sum = 0, path = "", rate = this.rate
        let y = this.grid.top + this.grid.height - 1
        // 求最大分割线

        let step = 1000 * 20
        if (step > this.options.xAxis.maxInterval) {
          step = this.options.xAxis.maxInterval
        }
        while (sum <= maxTimestamp) {
          let x = sum * rate
          path += `M ${this.grid.left + x} ${y} L ${this.grid.left + x} ${y + 7} `
          console.log(sum)
          this.xAxisData.push({
            txt: this.options.xAxis.format(sum),
            x: this.grid.left + x,
            y: this.grid.top + this.grid.height + 22
          })
          sum += step
        }
        //加上最后一个
        this.xAxisData.push({
          txt: this.options.xAxis.format(maxTimestamp),
          x: this.grid.left + this.dataAreaWidth,
          y: this.grid.top + this.grid.height + 22
        })
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