<template>
  <svg class="main-charts" v-if="options && options.grid" :width="options.width" :height="options.height"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       version="1.1"
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
      :rate="rate"
      :options="options"
      :dataAreaWidth="dataAreaWidth"
      :grid="grid"
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
</template>

<script>
  import ChartsXAxis from "./ChartsXAxis";
  import ChartsYAxis from "./ChartsYAxis";
  import ChartsLabels from "./ChartsLabels";
  import ChartsDataArea from "./ChartsDataArea";
  import ChartScrollBar from "./ChartScrollBar";
  import ChartsMark from "./ChartsMark";
  import ChartsFlameGraph from "./ChartsFlameGraph";
  import {mapGetters} from "vuex";

  export default {
    name: "ChartsMain",
    components: {ChartsFlameGraph, ChartsMark, ChartScrollBar, ChartsLabels, ChartsXAxis, ChartsYAxis, ChartsDataArea},
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
        if (!this.options.xAxis) return 1
        let rate = this.dataAreaWidth / (this.maxTimestamp - this.minTimestamp)
        console.log(rate)
        let maxTimestamp = this.options.xAxis.data[this.options.xAxis.data.length - 1]
        return this.dataAreaWidth / maxTimestamp
      }
    },
  }
</script>

<style lang="scss" scoped>
  .main-charts {
    user-select: none;
  }
</style>