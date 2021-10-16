<template>
  <g>
    <g v-for="item in labels" :fill="item.color">
      <rect :x="item.offsetX" :y="item.top" :width="item.width" :height="item.height"/>
      <text :x="item.offsetX + item.width / 2" :y="item.top + 9"
            fill="white"
            text-anchor="middle"
            alignment-baseline="hanging"
            font-size="12">
        {{item.name}}
      </text>
    </g>
  </g>
</template>

<script>
  export default {
    name: "ChartsLabels",
    props: {
      labelInfos: Array,
      grid: Object,
      dataAreaWidth: [Number, String],
      rate: [Number, String],
    },
    computed: {
      labels() {
        if (!this.labelInfos) return []
        let tmp = 0
        return this.labelInfos.map((item) => {
          let label = {
            color: item.color,
            width: (item.endTime - item.startTime) * this.rate,
            offsetX: this.grid.left + tmp,
            top: item.top,
            height: item.height,
            name:item.name
          }
          tmp += label.width
          return label
        })
      }
    }
  }
</script>

<style scoped>

</style>