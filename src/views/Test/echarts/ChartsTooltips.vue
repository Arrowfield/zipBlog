<template>
  <g>
    <rect
      class="tooltip"
      rx="4"
      :x="x + 8"
      :y="y + 10"
      fill="white" :width="maxTxtLength + 60"
      :height="tooltipsData.length * 20 + 32"
    />
    <g alignment-baseline="middle" color="#666" font-size="12">
      <text
        :x="x + 18" :y="y + 30"
      >{{ tooltips.time }}
      </text>
      <text :x="x + 18" :y="y + 30 + (index+1) * 20" v-for="(item,index) of tooltipsData">
        <tspan :ref="'key' + index">{{ item.key }}</tspan>
        <tspan :x="x + 18 + maxTxtLength + 20">{{ item.value }}</tspan>
      </text>
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
    },
    watch: {
      // tooltips(n) {

      // },
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
        return this.tooltips.data.map((item) => {
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