<template>
  <g>
    <path stroke-width="2" fill="none" :stroke="item.stroke" :d="item.path" v-for="item in paths" />
  </g>
</template>

<script>
  export default {
    name: "ChartsDataArea",
    props:{
      options: {
        type: Object,
      },
      grid:{
        type: Object,
      },
      dataAreaWidth:{
        type:[Number,String],
      },
      rate:[Number,String]
    },
    computed:{
      paths(){
        let yRate = this.options.yAxis.map((item)=>{
          return this.grid.height / item.max
        })
        let timeStamp = this.options.xAxis.data
        let pathData = this.options.series.filter(item=>!item.type)
        return  pathData.map((item,index)=>{
          let letter = `M`,path = ''
          for(let [i,tmp] of item.data.entries()){
            let x = this.grid.left + timeStamp[i] * this.rate
            let y = this.grid.height - tmp * yRate[item.yAxisIndex] + this.grid.top
            path += `${letter} ${x} ${y} `
            letter = `L`
          }
          return {
            stroke:item.lineStyle.color,
            path:path
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>