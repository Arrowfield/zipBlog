<template>
  <g>
    <g v-for="item in labels" :fill="item.color">
      <rect :x="item.offsetX" :y="item.top" :width="item.width" :height="item.height"/>
      <text :x="item.offsetX + item.width / 2" :y="item.top + item.height / 2"
            fill="white"
            text-anchor="middle"
            alignment-baseline="middle"
            font-size="12">
        {{item.name}}
      </text>
    </g>
  </g>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "ChartsLabels",
    data(){
      return{
        textLength:[]
      }
    },
    props: {
      labelInfos: Array,
      grid: Object,
      dataAreaWidth: [Number, String],
      rate: [Number, String],
    },
    computed: {
      ...mapGetters([
        'minTimestamp',
        'maxTimestamp'
      ]),
      labels() {
        if (!this.labelInfos) return []
        let tmp = 0
        return this.labelInfos.map((item) => {
          // 裁剪到可是区域
          let start = item.startTime < this.minTimestamp ? this.minTimestamp : item.startTime
          let end = item.endTime > this.maxTimestamp ? this.maxTimestamp : item.endTime
          if(start > end) return
          let label = {
            color: item.color,
            width: (end - start) * this.rate,
            offsetX: this.grid.left + tmp ,
            top: item.top,
            height: item.height,
            name:item.name
          }
          tmp += label.width
          return label
        }).filter(item => item)
      }
    }
  }
</script>

<style scoped>

</style>