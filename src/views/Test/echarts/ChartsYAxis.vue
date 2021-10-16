<template>
  <!-- axisY -->
  <svg xmlns="http://www.w3.org/2000/svg">
    <g v-for="item in yAxis" stroke="#ACB2BF" stroke-width="2">
      <line
        :x1="item.position == 'left' ? grid.left : options.width - grid.left - 1"
        :y1="grid.top"
        :x2="item.position == 'left' ? grid.left : options.width - grid.left - 1"
        :y2="grid.top + grid.height"
      />
      <!--      <path :d="pathY"/>-->
      <text
        text-anchor="middle"
        stroke="none"
        fill="#333"
        v-for="tmp in item.text"
        :x="tmp.x"
        :y="tmp.y"
        font-size="12">
        {{ tmp.txt }}
      </text>
    </g>
  </svg>
</template>

<script>
  export default {
    name: "ChartsYAxis",
    props: {
      options: {
        type: Object,
      },
      grid: Object,
      dataAreaWidth:[Number,String]
    },
    computed: {
      yAxis() {
        if (!this.options.yAxis) return []
        let step = 10
        return this.options.yAxis.map((item) => {
          let sum = 0
          if (item.max < item.minInterval) {
            item.max = item.minInterval
            step = item.minInterval
          }
          let rate = this.grid.height / item.max
          item.text = []
          while (sum <= item.max) {
            if (item.position === 'left') {
              item.text.push({
                txt: sum,
                y: this.grid.top + (this.grid.height - sum * rate),
                x: this.grid.left - 22
              })
            } else {
              item.text.push({
                txt: sum,
                y: this.grid.top + (this.grid.height - sum * rate),
                x: this.dataAreaWidth + this.grid.left + 22
              })
            }
            sum += step
          }
          return item
        })
      }
    }
  }
</script>

<style scoped>

</style>