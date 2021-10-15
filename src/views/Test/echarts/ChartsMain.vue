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

<!--      &lt;!&ndash; axisY &ndash;&gt;-->
<!--      <svg x="0" y="91" xmlns="http://www.w3.org/2000/svg" >-->
<!--        <g stroke="#ACB2BF" stroke-width="2">-->
<!--          <line x1="70" y1="0" x2="70" y2="240"/>-->
<!--          <path  :d="pathY"/>-->
<!--        </g>-->
<!--      </svg>-->

      <!-- axisX -->

        <g stroke="#ACB2BF" stroke-width="2">
          <line
            :x1="grid.left"
            :y1="grid.top + grid.height"
            :x2="options.width - grid.left"
            :y2="grid.top + grid.height"
          />
          <path :d="pathX"/>

          <text
            text-anchor="middle"
            stroke="none"
            fill="#333"
            v-for="item
            in xAxisData"
            :x="item.x"
            :y="grid.top + grid.height + 22"
            font-size="12">
            {{ item.txt }}
          </text>

        </g>
    </svg>
</template>

<script>
  export default {
    name: "ChartsMain",
    data(){
      return{
        xAxisData:[]
      }
    },
    props:{
      options:{
        type:Object,
        // default:()=>{
        //   return{
        //     width:1600
        //   }
        // }
      },
    },
    computed:{
      dataAreaWidth(){
        return this.options.width - 2 * this.grid.left
      },
      grid(){
        if(!this.options.grid) return {left:0,top:0,height:0,width:0}
        return this.options.grid
      },
      pathX(){
        if(!this.options.xAxis) return ""
        let maxTimestamp = this.options.xAxis.data[this.options.xAxis.data .length - 1]
        let sum = 0,count = 0,path = "",rate = this.dataAreaWidth / maxTimestamp,text = []
        while (sum <= maxTimestamp){
          let x = sum * rate
          path += `M ${this.grid.left + x} ${this.grid.top + this.grid.height - 1} L ${this.grid.left + x} ${this.grid.top + this.grid.height + 7}`
          this.xAxisData.push({
            txt:this.options.xAxis.format(sum),
            x:this.grid.left + x
          })
          sum += this.options.xAxis.maxInterval
        }
        // console.log(count)
        return path
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>