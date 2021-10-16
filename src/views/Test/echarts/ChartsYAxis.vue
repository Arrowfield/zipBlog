<template>
  <!-- axisY -->
  <g class="charts-axis-y" stroke="#ACB2BF" stroke-width="1">
    <g v-for="item in yAxis" >

      <defs>
        <path :id="options.title + item.name" :d="item.d"/>
      </defs>

      <line
        :x1="item.position == 'left' ? grid.left : options.width - grid.left - 1"
        :y1="grid.top"
        :x2="item.position == 'left' ? grid.left : options.width - grid.left - 1"
        :y2="grid.top + grid.height"
      />
      <path :d="item.path"/>
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
      <text font-weight="bold" stroke="none" fill="#333" font-size="12">
        <textPath :xlink:href="'#' + options.title + item.name">
          {{ item.name }}
        </textPath>
      </text>


    </g>

    <g v-for="item in splitLine" >
      <path :d="item.d" stroke-dasharray="2,2"/>
    </g>
  </g>
</template>

<script>
  export default {
    name: "ChartsYAxis",
    data() {
      return {
        splitLine: []
      }
    },
    props: {
      options: {
        type: Object,
      },
      grid: Object,
      dataAreaWidth: [Number, String]
    },
    computed: {
      top() {
        return this.grid.top
      },
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
          item.path = ''
          let splitLine = ""
          while (sum <= item.max) {
            if (item.position === 'left') {
              let y = this.grid.top + (this.grid.height - sum * rate)
              let x = this.grid.left - 22
              item.text.push({
                txt: sum,
                y: y,
                x: x,
              })
              item.path += `M ${this.grid.left} ${y} L ${this.grid.left - 7} ${y} `

              if (item.splitLine.show) {
                splitLine += `M ${this.grid.left} ${y} L ${this.grid.left+ this.dataAreaWidth} ${y} `
              }
            } else {
              let y = this.grid.top + (this.grid.height - sum * rate)
              let x = this.dataAreaWidth + this.grid.left + 22
              item.text.push({
                txt: sum,
                y: y,
                x: x
              })
              item.path += `M ${this.dataAreaWidth + this.grid.left - 2} ${y} L ${this.dataAreaWidth + this.grid.left + 7} ${y} `
            }
            sum += step
          }
          let top = this.top + this.grid.height / 2
          if (item.position === 'left') {
            item.d = `M 50 ${top} L50 ${top - 20}`
          } else {
            let left = this.dataAreaWidth + this.grid.left + 60
            item.d = `M ${left} ${top} L ${left} ${top - 60}`
          }

          if(item.splitLine.show) {
            this.splitLine.push({
              d: splitLine,
              type: item.splitLine.lineStyle.type
            })
          }

          return item
        })
      }
    }
  }
</script>

<style scoped>

</style>