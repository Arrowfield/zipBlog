<template>
  <g :transform="`translate(-${transLateX})`">
    <g :ref="`mask${index}`" v-for="(item,index) in masksList">
      <line
        :x1="item.x"
        :y1="item.y - 5"
        :x2="item.x + 20"
        :y2="item.y - 5"
        :stroke="item.stroke"
        stroke-width="2"
      />
      <text font-size="12" :x="item.x + 30" :y="item.y">{{item.name}}</text>
    </g>
  </g>
</template>

<script>
  let interval = 20
  export default {
    name: "ChartsMark",
    data() {
      return {
        widths: []
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
      masksList() {
        let offset = 0
        return this.options.series.map((item, index) => {
          // if(index > 0) return
          let mark = {
            name: item.indexName,
            x: this.dataAreaWidth / 2 + this.grid.left + offset + index * interval,
            y: this.top + 70,
            stroke: item.lineStyle.color
          }
          offset += this.widths[index] ? this.widths[index] : 0
          return mark
        }).filter(item => item)
      },
      top() {
        return this.grid.top + this.grid.height
      },
      transLateX() {
        if(this.widths.length < 1) return 0
        return (this.widths.reduce((prev,next)=>prev + next,0) + interval * (this.widths.length - 1))  / 2
      }
    },
    mounted() {
      for (let key in this.$refs) {
        let tmp = this.$refs[key][0].getBBox().width
        this.widths.push(tmp)
      }
    }
  }
</script>

<style scoped>

</style>