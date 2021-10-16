<template>
  <svg :width="options.width" :height="options.height"
       xmlns="http://www.w3.org/2000/svg">
    <!-- 修改原点 label -->
    <!--      <svg x="70" y="34" xmlns="http://www.w3.org/2000/svg">-->
    <!--        <g v-for="item in labelInfo" :fill="item.color">-->
    <!--          <rect :x="item.offsetX" y="0" :width="item.width" height="27"/>-->
    <!--          <text :x="item.offsetX + item.width / 2" y="7.5"-->
    <!--                fill="white"-->
    <!--                text-anchor="middle"-->
    <!--                alignment-baseline="hanging"-->
    <!--                font-size="12">-->
    <!--            {{item.name}}-->
    <!--          </text>-->
    <!--        </g>-->
    <!--      </svg>-->
    <charts-y-axis
      :dataAreaWidth="dataAreaWidth"
      :grid="grid"
      :options="options"
    />
    <charts-x-axis
      :dataAreaWidth="dataAreaWidth"
      :grid="grid"
      :options="options"
    />
  </svg>
</template>

<script>
  import ChartsXAxis from "./ChartsXAxis";
  import ChartsYAxis from "./ChartsYAxis";
  export default {
    name: "ChartsMain",
    components:{ChartsXAxis, ChartsYAxis},
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
        if (!this.options.grid) return {left: 0, top: 0, height: 0, width: 0}
        return this.options.grid
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>