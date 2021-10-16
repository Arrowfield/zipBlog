<template>
  <g>
    <rect
      v-for="item in rectList"
      :fill="item.fill"
      :width="item.width"
      :height="item.height"
      :x="item.x"
      :y="item.y"
    />
  </g>
</template>

<script>
  export default {
    name: "ChartsFlameGraph",
    props: {
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
      rectList(){
        let  rectList = [],step = 0
        let colors = this.options.flameGraph.colors
        console.log(colors)
        for(let i = 0;i<10000;i++){
          rectList.push({
            fill:colors[i % colors.length],
            width:this.dataAreaWidth - step < 0 ? 0 :this.dataAreaWidth - step,
            height:15,
            x:this.grid.left + step,
            y:this.grid.top + this.grid.height - 15 * (i + 1)
          })
          step += 100
        }
        return rectList
      }
    }
  }
</script>

<style scoped>

</style>