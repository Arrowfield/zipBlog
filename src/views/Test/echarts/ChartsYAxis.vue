<template>
  <!-- axisY -->
  <g class="charts-axis-y" stroke="#ACB2BF" stroke-width="1">
    <g v-for="item in yAxis">

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
      <!-- 分割线 -->
      <g v-for="tem in item.splitLines">
        <path :d="tem.d" stroke-dasharray="2,2"/>
      </g>
    </g>

    <!-- 标记线 -->
    <g v-for="item of markLine">
      <line
        stroke-linecap="butt"
        stroke-dasharray="4,2"
        stroke-dashoffset="0"
        stroke="#91cc75"
        stroke-width="1"
        :y2="grid.top +  item.y"
        :x2="grid.left + dataAreaWidth"
        :x1="grid.left"
        :y1="grid.top +  item.y"/>
      <path d="M 4 0 A 4 4 0 1 1 4 -0.0004" fill="#91cc75" fill-opacity="1" stroke="none"
            :transform="`matrix(0,-1,1,0,${grid.left},${grid.top +  item.y})`"/>
      <path d="M 0 0 L 5.3333 16 L 0 12 L -5.3333 16 L 0 0 Z" fill="#91cc75" fill-opacity="1" stroke="none"
            :transform="`matrix(0,1,-1,0,${grid.left + dataAreaWidth},${grid.top +  item.y})`"></path>
      <text
        alignment-baseline="middle"
        stroke="none"
        fill="#333"
        font-size="12"
        :x="grid.left + dataAreaWidth + 10"
        :y="grid.top +  item.y">
        {{ item.value.toFixed(1) }}
      </text>
    </g>
  </g>

</template>

<script>
  import {ALGORITHM_AVERAGE} from "../constant";
  import {calcAverage} from "../util";

  export default {
    name: "ChartsYAxis",
    data() {
      return {
        //splitLine: [] 注意此处的巨坑 在当前组件定义的响应式属性，卡顿严重
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
      markLine() {
        let res = []
        this.options.series.map((item) => {
          if (item.markLine) {
            let value = 0, y
            let yAxis = this.options.yAxis.filter(tmp => item.yAxisIndex !== 1)[0]
            for (let tmp of item.markLine.data) {
              switch (tmp.type) {
                case ALGORITHM_AVERAGE:
                  value = calcAverage(item.data, 0, item.data.length - 1)
                  y = this.grid.height - value * (this.grid.height / yAxis.max)
                  res.push({value, y})
                  break
              }
            }
          }
        })

        return res
      },
      top() {
        return this.grid.top
      },
      yAxis() {
        if (!this.options.yAxis) return []
        let step = 10

        return this.options.yAxis.map((item) => {
          let sum = 0
          step = Math.ceil(Number(item.max / 6))
          // if (item.max < item.minInterval) {
          //   item.max = item.minInterval
          //   step = item.minInterval
          // }
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
                splitLine += `M ${this.grid.left} ${y} L ${this.grid.left + this.dataAreaWidth} ${y} `
                //console.log(this.dataAreaWidth)
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

          if (item.splitLine.show) {
            item.splitLines = []
            // this.splitLine.push({
            //   d: splitLine,
            //   type: item.splitLine.lineStyle.type
            // })
            item.splitLines.push({
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