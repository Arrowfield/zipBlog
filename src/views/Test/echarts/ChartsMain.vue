<template>
  <div class="chart-container" v-if="options && options.grid">
    <svg class="main-charts" :width="options.width" :height="options.height"
         xmlns="http://www.w3.org/2000/svg"
    >
      <text font-size="16" font-weight="bold" alignment-baseline="hanging" x="30" y="2">{{ options.title }}</text>
      <!-- 修改原点 label -->
      <charts-labels
        :labelInfos="options.labelInfos"
        :dataAreaWidth="dataAreaWidth"
        :grid="grid"
        :rate="rate"
      />
      <charts-y-axis
        :dataAreaWidth="dataAreaWidth"
        :grid="grid"
        :options="options"
      />
      <charts-x-axis
        :dataAreaWidth="dataAreaWidth"
        :grid="grid"
        :options="options"
        :rate="rate"
      />
      <charts-data-area
        ref="dataArea"
        :rate="rate"
        :options="options"
        :dataAreaWidth="dataAreaWidth"
        :grid="grid"
        :offsetLeft="grid.left"
      />
      <chart-scroll-bar
        :dataZoom="options.dataZoom"
        :grid="grid"
        :dataAreaWidth="dataAreaWidth"
      />
      <charts-mark
        :rate="rate"
        :options="options"
        :dataAreaWidth="dataAreaWidth"
        :grid="grid"
      />

      <!--    <charts-flame-graph-->
      <!--      :grid="grid"-->
      <!--      :dataAreaWidth="dataAreaWidth"-->
      <!--      :options="options"-->
      <!--    />-->
    </svg>
    <!-- hover -->
    <tooltips
      :show="showHoverLine"
      :left="tooltipsX"
      :data="options.tooltips"
      :options="options"
    />
    <!-- drag -->
    <tooltips
      :show="showDragTooltips"
      :left="dragLineX + 10 + 'px'"
      :data="options.dragTooltips"
      :options="options"
    />
  </div>
</template>

<script>
  import ChartsXAxis from "./ChartsXAxis";
  import ChartsYAxis from "./ChartsYAxis";
  import ChartsLabels from "./ChartsLabels";
  import ChartsDataArea from "./ChartsDataArea";
  import ChartScrollBar from "./ChartScrollBar";
  import ChartsMark from "./ChartsMark";
  import ChartsFlameGraph from "./ChartsFlameGraph";
  import {mapGetters, mapState} from "vuex";
  import Tooltips from "./Tooltips";
  //https://perfdog.qq.com/case_detail/1815579
  export default {
    name: "ChartsMain",
    components: {
      Tooltips,
      ChartsFlameGraph, ChartsMark, ChartScrollBar, ChartsLabels, ChartsXAxis, ChartsYAxis, ChartsDataArea
    },
    data() {
      return {
        xAxisData: [],
        yAxisData: []
      }
    },
    props: {
      options: {
        type: Object,
      },
    },
    computed: {
      ...mapState({
        hoverLineX: state => state.caseDetail.hoverLineX,
        dragLineX: state => state.caseDetail.dragLineX,
        showHoverLine: state => state.caseDetail.showHoverLine,
        showDragTooltips: state => state.caseDetail.showDragTooltips,
      }),
      ...mapGetters([
        "minTimestamp",
        "maxTimestamp"
      ]),
      dataAreaWidth() {
        return this.options.width - 2 * this.grid.left
      },
      grid() {
        //if (!this.options.grid) return {left: 0, top: 0, height: 0, width: 0}
        return this.options.grid
      },
      rate() {
        return this.dataAreaWidth / (this.maxTimestamp - this.minTimestamp)
      },
      tooltipsX() {
        return this.hoverLineX + this.grid.left + 10 + 'px'
      },
      showDrag() {
        // console.log(this.$refs)
        if (!this.$refs.dataArea) return false
        return false
      }
    },
    methods: {
      // optionsConfig(config){
      //   console.log(config)
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .chart-container {
    position: relative;

    .main-charts {
      user-select: none;
    }


  }
</style>