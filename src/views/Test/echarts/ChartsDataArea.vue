<template>
  <g
    ref="moveRect"
    @mousedown="mousedown"
    @mouseover="mouseover"
    @mouseout="mouseout"
    @contextmenu.prevent
    @mousemove="mousemove"
    @wheel="handleWheel"
  >
    <!--    <line x1="10" y1="40" x2="10" y2="40" stroke-width="2" stroke="#333">-->
    <!--      <animate attributeName="x1"   :values="paths[0].valueX" dur="100s" repeatCount="1" />-->
    <!--      <animate attributeName="y1"   :values="paths[0].valueY" dur="100s" repeatCount="1" />-->
    <!--    </line>-->
    <g v-for="(item,index) in paths">
      <path
        :ref="`path${index}`"
        stroke-width="2"
        fill="none"
        :stroke="item.stroke"
        :d="item.path"
      ></path>
      <circle :fill="item.stroke" r="2" v-for="c of item.circles" :cy="c.y" :cx="c.x"/>
    </g>
    <rect
      ref="eventRect"
      fill="transparent"
      :x="grid.left"
      :y="grid.top"
      :height="grid.height"
      :width="dataAreaWidth"
    />

    <!-- hover的线 -->
    <g v-show="showHoverLine">
      <line
        stroke-width="2"
        stroke="#ddd"
        stroke-dashoffset="3"
        stroke-dasharray="3"
        :x1="grid.left + hoverLineX"
        :y1="grid.top + grid.height"
        :x2="grid.left + hoverLineX"
        :y2="grid.top"
      />
      <!-- hover时显示纵坐标 -->
      <circle
        :fill="item.color"
        :cy="grid.top + item.y"
        :cx="grid.left + hoverLineX" r="4.5"
        v-for="item of circles"
      />
    </g>


    <!-- 框选的时候显示的矩形 -->

    <rect
      fill="rgb(210,219,238)"
      fill-opacity="0.3"
      :x="dragX"
      :y="grid.top"
      :height="grid.height"
      :width="dragWidth"
      stroke="#D2DBEE"
      stroke-width="1"
    />

    <!--    <charts-tooltips-->
    <!--      v-show="showDragTooltips"-->
    <!--      :y="grid.top + 10"-->
    <!--      :x="dragX + dragWidth"-->
    <!--      :tooltips="options.dragTooltips"-->
    <!--      :opts="options"-->
    <!--    />-->

    <!-- tooltips -->
    <!--    <charts-tooltips-->
    <!--      v-show="showHoverLine"-->
    <!--      :y="grid.top + 10"-->
    <!--      :x="grid.left + hoverLineX"-->
    <!--      :tooltips="options.tooltips"-->
    <!--      :opts="options"-->
    <!--    />-->


  </g>
</template>

<script>
  import {mapGetters, mapState} from "vuex";
  import ChartsTooltips from "./ChartsTooltips";
  import {getTooltipsData} from "../util";
  import {eventBus} from "../../../utils/Bus";
  import {INDEX_FPS, INDEX_JANK} from "../constant";

  export default {
    name: "ChartsDataArea",
    components: {ChartsTooltips},
    data() {
      return {
        pathLength: [],
        offsetX: 0,
        tooltips: {},
        timer: null,

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
      rate: [Number, String],
      offsetLeft: [Number, String]
    },
    watch: {
      dragWidth(n) {
        if (n) {
          this.dispatch("setStoreValue", {
            dragLineX: this.dragWidth + this.dragX
          })
        }
      },
    },
    computed: {
      ...mapState({
        clickLineX: state => state.caseDetail.clickLineX,
        hoverLineX: state => state.caseDetail.hoverLineX,
        dragLineX: state => state.caseDetail.dragLineX,
        showHoverLine: state => state.caseDetail.showHoverLine,
        showDataDrag: state => state.caseDetail.showDataDrag,
        dragConfig: state => state.caseDetail.dragConfig,
        showDragTooltips: state => state.caseDetail.showDragTooltips,
        min:state => state.caseDetail.min,
        max:state => state.caseDetail.max,
      }),
      ...mapGetters([
        'minTimestamp',
        'maxTimestamp'
      ]),
      circles() {
        if(!this.options.tooltips.data) return []
        let res = []
        let yAxis = this.options.yAxis[0]
        this.options.tooltips.data.map((item,index) => {
          res.push({
            y:this.grid.height - item.value * (this.grid.height / yAxis.max),
            color: this.options.series[index].lineStyle.color
          })
        })
        return res
      },
      dragX() {
        if (this.dragConfig.startTime) {
          let x = (this.dragConfig.startTime - this.minTimestamp) * this.rate + this.offsetLeft
          return x < this.offsetLeft ? this.offsetLeft : x
        } else {
          return 0
        }

      },
      dragWidth() {
        if (this.dragConfig.startTime) {
          let start = this.dragConfig.startTime < this.minTimestamp ? this.minTimestamp : this.dragConfig.startTime
          let end = this.dragConfig.endTime > this.maxTimestamp ? this.maxTimestamp : this.dragConfig.endTime
          let width = (end - start) * this.rate
          return width < 0 ? 0 : width
        } else {
          return 0
        }
      },
      paths() {
        let yRate = this.options.yAxis.map((item) => {
          return this.grid.height / item.max
        })

        let timeStamp = this.options.xAxis.data
        let pathData = this.options.series.filter(item => !item.type)
        return pathData.map((item, index) => {
          let letter = `M`, path = '', valueX = "", valueY = "", circles = []
          for (let [i, tmp] of item.data.entries()) {
            if (timeStamp[i] >= this.minTimestamp && timeStamp[i] <= this.maxTimestamp) {
              let x = this.grid.left + (timeStamp[i] - this.minTimestamp) * this.rate
              let y = this.grid.height - tmp * yRate[item.yAxisIndex] + this.grid.top

              valueX += `${x};`
              valueY += `${y};`
              path += `${letter} ${x} ${y} `
              letter = `L`
              if ([INDEX_FPS, INDEX_JANK].indexOf(item.indexName) > -1) {
                circles.push({x, y})
              }
            }
          }

          return {
            stroke: item.lineStyle.color,
            path: path,
            valueX,
            valueY,
            circles
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
      // https://echarts.apache.org/zh/option.html#brush.throttleDelay
      // https://echarts.apache.org/zh/option.html#brush
    },
    methods: {
      dispatch(type, payload) {
        this.$store.commit(type, payload)
      },
      mousemove(e) {
        // offsetX 相对于父元素的偏移量
        let rect = this.$refs.moveRect.getBoundingClientRect()
        let hoverLineX
        hoverLineX = e.clientX - rect.left  //为什么这种方式是错误的
        if (!this.showDataDrag) { // hover
          let hoverTime = hoverLineX / this.rate + this.minTimestamp
          this.dispatch("setStoreValue", {
            hoverLineX,
            showHoverLine: true
          })
          eventBus.$emit('makeChartOptionsAll', hoverTime)
        } else { // drag
          let startTime = this.clickLineX / this.rate + this.minTimestamp
          let endTime = hoverLineX / this.rate + this.minTimestamp
          if (endTime < startTime) {
            let temp = startTime
            startTime = endTime
            endTime = temp
          }
          this.dispatch("setStoreValue", {
            dragConfig: {
              startTime,
              endTime
            },
            showDragTooltips: false
          })

          //不能实时计算
          if (this.timer) clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            eventBus.$emit('makeDragOptionsAll', startTime, endTime)
            this.dispatch("setStoreValue", {
              showDragTooltips: true,
              dragLineX: this.dragWidth + this.dragX
            })
          }, 20)

        }
      },
      mouseover(e) {
        if (!this.showDataDrag) {
          this.dispatch("setStoreValue", {
            showHoverLine: true
          })
        }
      },
      mouseout(e) {
        this.dispatch("setStoreValue", {
          showHoverLine: false
        })
      },
      mousedown(e) {
        let rect = this.$refs.moveRect.getBoundingClientRect()
        this.dispatch("setStoreValue", {
          showHoverLine: false,
          showDataDrag: true,
          clickLineX: e.clientX - rect.left,
          dragConfig: {startTime: 0, endTime: 0},
          showDragTooltips: false
        })

        document.onmousemove = this.mousemove
        document.onmouseup = this.mouseup
      },
      mouseup(e) {
        this.dispatch("setStoreValue", {
          showHoverLine: false,
          showDataDrag: false
        })
        document.onmousemove = null
        document.onmouseup = null
      },
      handleWheel(event){
        event.preventDefault()
        var delta = 0;
        event = window.event || event;
        //delta = event.wheelDelta ? (event.wheelDelta / 120) : (- event.detail / 3);
        console.log(event)
        // this.$store.commit('setStoreValue', {
        //   min:0,
        //   max:1
        // })
        if(event.wheelDelta > 0){ // 增幅什么定
          console.log('1放大')
          if(this.min > this.max) return
          this.$store.commit('setStoreValue', {
            min:this.min + 0.001,
            max:this.max - 0.001
          })
        }else{
          console.log('2缩小')
          this.$store.commit('setStoreValue', {
            min:this.min - 0.001 < 0 ? 0 : this.min - 0.001,
            max:this.max + 0.001 > 1 ? 1 : this.max + 0.001
          })
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .my-path {
    transition: all 1s ease-in-out;
  }

</style>