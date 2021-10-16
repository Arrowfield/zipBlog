<template>
  <svg v-if="options.grid" :width="options.width" :height="options.height"
       xmlns="http://www.w3.org/2000/svg">
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
    <charts-data-area/>
    <chart-scroll-bar
      :dataZoom="options.dataZoom"
      :grid="grid"
      :dataAreaWidth="dataAreaWidth"
    />
  </svg>
</template>

<script>
  import ChartsXAxis from "./ChartsXAxis";
  import ChartsYAxis from "./ChartsYAxis";
  import ChartsLabels from "./ChartsLabels";
  import ChartsDataArea from "./ChartsDataArea";
  import ChartScrollBar from "./ChartScrollBar";
  export default {
    name: "ChartsMain",
    components:{ChartScrollBar, ChartsLabels, ChartsXAxis, ChartsYAxis,ChartsDataArea},
    data() {
      return {
        xAxisData: [],
        yAxisData:[]
      }
    },
    props: {
      options: {
        type: Object,
      },
    },
    computed: {
      dataAreaWidth() {
        return this.options.width - 2 * this.grid.left
      },
      grid() {
        //if (!this.options.grid) return {left: 0, top: 0, height: 0, width: 0}
        return this.options.grid
      },
      rate(){
        if(!this.options.xAxis) return 1
        let maxTimestamp = this.options.xAxis.data[this.options.xAxis.data.length - 1]
        return this.dataAreaWidth / maxTimestamp
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>