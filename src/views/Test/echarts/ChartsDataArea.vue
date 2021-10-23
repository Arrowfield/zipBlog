<template>
  <g
    @mousedown="mousedown"
    @mouseup="mouseup"
    @mouseover="mouseover"

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
      ref="eventRect"
      fill="transparent"
      :x="grid.left"
      :y="grid.top"
      :height="grid.height"
      :width="dataAreaWidth"
      @mousemove="mousemove"
    />

    <!-- hover的线 -->
    <line
      v-show="showHoverLine"
      stroke-width="2"
      stroke="#ddd"
      stroke-dashoffset="3"
      stroke-dasharray="3"
      :x1="grid.left + hoverLineX"
      :y1="grid.top + grid.height"
      :x2="grid.left + hoverLineX"
      :y2="grid.top"
    />

    <!-- 框选的时候显示的矩形 -->

<!--    <rect-->
<!--      v-show="showDataDrag"-->
<!--      fill="rgb(210,219,238)"-->
<!--      fill-opacity="0.3"-->
<!--      :x="grid.left + clickLineX"-->
<!--      :y="grid.top"-->
<!--      :height="grid.height"-->
<!--      :width="dragWidth"/>-->

    <charts-tooltips
      v-show="showHoverLine"
      :y="grid.top + 10"
      :x="grid.left + hoverLineX"
      :tooltips="options.tooltips"
      :opts="options"
    />

  </g>
</template>

<script>
  import {mapGetters, mapState} from "vuex";
  import ChartsTooltips from "./ChartsTooltips";
  import {getTooltipsData} from "../util";
  import {eventBus} from "../../../utils/Bus";
  export default {
    name: "ChartsDataArea",
    components:{ChartsTooltips},
    data() {
      return {
        pathLength: [],
        dragWidth:0,
        clickLineX:0,
        offsetX:0,
        tooltips:{}
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
        showHoverLine: state => state.caseDetail.showHoverLine,
        showDataDrag:state => state.caseDetail.showDataDrag
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
            if (timeStamp[i] >= this.minTimestamp && timeStamp[i] <= this.maxTimestamp) {
              let x = this.grid.left + (timeStamp[i] - this.minTimestamp) * this.rate
              let y = this.grid.height - tmp * yRate[item.yAxisIndex] + this.grid.top
              valueX += `${x};`
              valueY += `${y};`
              path += `${letter} ${x} ${y} `
              letter = `L`
            }
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
          // let $el = this.$refs[key][0]
          // let tmp = $el.getTotalLength()
          // this.pathLength.push(tmp)
        }
      }
      this.offsetX = this.$refs.eventRect.getBoundingClientRect().x
    },
    methods: {
      dispatch(type, payload) {
        this.$store.commit(type, payload)
      },
      mousemove(e) {
        let rect = e.target.getBoundingClientRect()
        let hoverLineX = 0
        hoverLineX = e.offsetX - this.grid.left
        if (hoverLineX > this.dataAreaWidth) {
          hoverLineX = this.dataAreaWidth
        } else if (hoverLineX < 0) {
          hoverLineX = 0
        }
        let hoverTime = (e.clientX - rect.left) / this.rate + this.minTimestamp
        setTimeout(()=>{
          //this.tooltips = getTooltipsData(this.options, hoverTime)
          eventBus.$emit('makeChartOptionsAll', hoverTime)
        })
        let width = e.clientX - this.clickLineX - this.offsetX + 10
        this.dragWidth = width < 0 ? 0 : width
        this.dispatch("setStoreValue", {
          hoverLineX,
          showHoverLine: true
        })
      },
      mouseover(e) {
        this.dispatch("setStoreValue", {
          showHoverLine: true
        })
      },
      mouseout(e) {
        this.dispatch("setStoreValue", {
          showHoverLine: false
        })
      },
      mousedown(e){
        this.clickLineX = e.clientX - this.offsetX

        this.dispatch("setStoreValue", {
          showHoverLine: false,
          showDataDrag:true
        })
      },
      mouseup(e){
        // this.clickLineX = 0
        this.dragWidth = 0
        this.dispatch("setStoreValue", {
          showHoverLine: false,
          //showDataDrag:false
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