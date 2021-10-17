<template>
  <g
    @mouseover="mouseover"
    @mousemove="mousemove"
    @mouseout="mouseout"
  >
    <g>
      <path stroke-width="2" fill="none" :stroke="item.stroke" :d="item.path" v-for="item in paths"/>
    </g>
    <rect
      fill="transparent"
      :x="grid.left"
      :y="grid.top"
      :height="grid.height"
      :width="dataAreaWidth"
    />

    <!-- hover的线 -->
    <line
      v-show="showHoverLine"
      stroke-width="2"
      stroke="#666"
      :x1="grid.left  + movedX"
      :y1="grid.top + grid.height"
      :x2="grid.left + movedX"
      :y2="grid.top"
    />
  </g>
</template>

<script>
  export default {
    name: "ChartsDataArea",
    data() {
      return {
        movedX: 0,
        showHoverLine: false
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
      paths() {
        let yRate = this.options.yAxis.map((item) => {
          return this.grid.height / item.max
        })
        let timeStamp = this.options.xAxis.data
        let pathData = this.options.series.filter(item => !item.type)
        return pathData.map((item, index) => {
          let letter = `M`, path = ''
          for (let [i, tmp] of item.data.entries()) {
            let x = this.grid.left + timeStamp[i] * this.rate
            let y = this.grid.height - tmp * yRate[item.yAxisIndex] + this.grid.top
            path += `${letter} ${x} ${y} `
            letter = `L`
          }
          return {
            stroke: item.lineStyle.color,
            path: path
          }
        })
      },
    },
    mounted() {

    },
    methods: {
      mousemove(e) {
        this.movedX = e.offsetX - this.grid.left
        if(this.movedX > this.dataAreaWidth){
          this.movedX = this.dataAreaWidth
        }else if(this.movedX <  0){
          this.movedX = 0
        }
      },
      mouseover(e){
        this.showHoverLine = true
      },
      mouseout(e){
        this.showHoverLine = false
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>