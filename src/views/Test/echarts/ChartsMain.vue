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

<!--      &lt;!&ndash; axisX &ndash;&gt;-->
<!--      <svg x="69" y="331" xmlns="http://www.w3.org/2000/svg" >-->
<!--        <g stroke="#ACB2BF" stroke-width="2">-->
<!--          <line x1="0" y1="1" x2="1460" y2="1"/>-->
<!--          <path :d="pathX"/>-->
<!--        </g>-->
<!--      </svg>-->
    </svg>
</template>

<script>
  export default {
    name: "ChartsMain",
    props:{
      options:Object
    }
  }
</script>

<style lang="scss" scoped>

</style>