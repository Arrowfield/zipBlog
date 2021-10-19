<template>
  <g
    @mouseover="mouseover"
    @mousemove="mousemove"
    @mouseout="mouseout"
    @contextmenu.prevent
  >
    <!--    <line x1="10" y1="40" x2="10" y2="40" stroke-width="2" stroke="#333">-->
    <!--      <animate attributeName="x1"   :values="paths[0].valueX" dur="100s" repeatCount="1" />-->
    <!--      <animate attributeName="y1"   :values="paths[0].valueY" dur="100s" repeatCount="1" />-->
    <!--    </line>-->
    <g>
      <path
        :ref="`path${index}`"
        stroke-width="2"
        fill="none"
        :stroke="item.stroke"
        :d="item.path"
        v-for="(item,index) in paths"
      ></path>
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
      :x1="grid.left  + hoverLineX"
      :y1="grid.top + grid.height"
      :x2="grid.left + hoverLineX"
      :y2="grid.top"
    />
  </g>
</template>

<script>
  import {mapGetters, mapState} from "vuex";

  export default {
    name: "ChartsDataArea",
    data() {
      return {
        pathLength: []
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
      ...mapState({
        hoverLineX: state => state.caseDetail.hoverLineX,
        showHoverLine:state => state.caseDetail.showHoverLine,
      }),
      ...mapGetters([
        'minTimestamp',
        'maxTimestamp'
      ]),

      paths() {
        let yRate = this.options.yAxis.map((item) => {
          return this.grid.height / item.max
        })
        let timeStamp = this.options.xAxis.data
        let pathData = this.options.series.filter(item => !item.type)
        return pathData.map((item, index) => {
          let letter = `M`, path = '', valueX = "", valueY = ""
          for (let [i, tmp] of item.data.entries()) {
            // if(timeStamp[i] * this.rate >= this.dataAreaWidth){
            //   break
            // }
            let x = this.grid.left + (timeStamp[i] - this.minTimestamp) * this.rate
            let y = this.grid.height - tmp * yRate[item.yAxisIndex] + this.grid.top
            // if(x < this.grid.left){
            //   x = this.grid.left
            // }
            valueX += `${x};`
            valueY += `${y};`
            path += `${letter} ${x} ${y} `
            letter = `L`
          }
          return {
            stroke: item.lineStyle.color,
            path: path,
            valueX,
            valueY
          }
        })
      },
    },
    mounted() {
      if (this.options.animation) {
        for (let key in this.$refs) {
          let $el = this.$refs[key][0]
          let tmp = $el.getTotalLength()
          this.pathLength.push(tmp)
        }
      }
    },
    methods: {
      dispatch(type, payload){
        this.$store.commit(type, payload)
      },
      mousemove(e) {
        let hoverLineX = 0
        hoverLineX = e.offsetX - this.grid.left
        if (hoverLineX > this.dataAreaWidth) {
          hoverLineX = this.dataAreaWidth
        } else if (hoverLineX < 0) {
          hoverLineX = 0
        }
        this.dispatch("setStoreValue",{hoverLineX})
      },
      mouseover(e) {
        this.dispatch("setStoreValue",{
          showHoverLine:true
        })
      },
      mouseout(e) {
        this.dispatch("setStoreValue",{
          showHoverLine:false
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .my-path {
    transition: all 1s ease-in-out;
  }

</style>