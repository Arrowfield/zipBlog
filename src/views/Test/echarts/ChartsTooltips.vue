<template>
  <g>
    <rect
      class="tooltip"
      rx="4"
      :x="x + 8"
      :y="y + 10"
      fill="white" :width="maxTxtLength + 70"
      :height="tooltipsData.length * 20 + 32"
    />
    <g alignment-baseline="middle" color="#666" font-size="12">
      <text
        :x="x + 18" :y="y + 30"
      >{{ tooltips.time }}
      </text>
      <g v-for="(item,index) of tooltipsData">
        <circle
          :fill="item.color"
          :cx="item.cx"
          :cy="item.cy"
          :r="item.r"
        />
        <text :x="item.x" :y="item.y" >
          <tspan :ref="'key' + index">{{ item.key }}</tspan>
          <tspan :x="item.tx">{{ item.value }}</tspan>
        </text>
      </g>
    </g>
  </g>
</template>

<script>
  export default {
    name: "Charts-tooltips",
    data() {
      return {
        maxTxtLength: 0
      }
    },
    props: {
      tooltips: Object,
      y: Number,
      x: Number,
      opts: Object
    },
    computed: {
      tooltipsData() {
        if (!this.tooltips.data) return []
        for (let key in this.$refs) {
          let width = this.$refs[key][0].getBBox().width
          if (width > this.maxTxtLength) {
            this.maxTxtLength = width
          }
        }
        return this.tooltips.data.map((item, index) => {
          item.color = this.opts.series[index].lineStyle.color
          item.r = 5
          item.cx = this.x + 18 + item.r
          item.cy = this.y + 30 + (index + 1) * 20 - 5
          item.x = item.cx + 10
          item.y = item.cy + item.r
          item.tx = item.x + this.maxTxtLength + 10
          return item
        })
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .tooltip {
    filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.2));
  }
</style>