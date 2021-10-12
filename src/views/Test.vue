<template>
  <div class="test-page">
    <canvas id="flamegraph"></canvas>
    <div class="target-style">
      <canvas id="fps"></canvas>
    </div>

    <div class="target-svg-style target-style">
      <svg width="1600" height="400"
           xmlns="http://www.w3.org/2000/svg">
        <!-- 修改原点 -->
        <svg x="70" y="34" xmlns="http://www.w3.org/2000/svg">
          <g v-for="item in labelInfo" :fill="item.color">
            <rect :x="item.offsetX" y="0" :width="item.width" height="27"/>
          </g>
        </svg>

      </svg>
    </div>
    <p></p>
  </div>
</template>

<script>
  import {createCanvas} from '@/plugin/flamegraph/flamegraph'
  import {targetChart} from '@/plugin/targetChart/targetChart'
  import caseDetail from './Test/caseDetail.js'
  let data = caseDetail.data
  export default {
    name: "Test",
    data() {
      return {
        labelInfo: [
          {color: "#5A95F8", width: 0,offsetX:0},
          {color: "#7F52EE", width: 0,offsetX:0},
          {color: "#65AD93", width: 0,offsetX:0},
        ]
      }
    },
    mounted() {
      // createCanvas({id: 'flamegraph'})
      // targetChart({id: 'fps'})
      let dataBaseWidth = 1460
      let maxTimestamp = data.labelInfos[data.labelInfos.length - 1].summary.end_time,sum = 0
      for (let [index,item] of data.labelInfos.entries()){
        let width = (item.summary.end_time - item.summary.start_time)/maxTimestamp * dataBaseWidth
        this.labelInfo[index].width = width
        this.labelInfo[index].offsetX = sum
        sum += width
      }
    }
  }
</script>

<style lang="scss" scoped>
  .target-style {
    width: 1460px;
    margin: 40px auto;
    box-shadow: 0 2px 10px rgba(179, 186, 220, .4);

    &.target-svg-style{
      width: 1600px;
    }

    svg {
      vertical-align: bottom
    }
  }

  .test-page {
    &::after {
      content: "";
      display: table;
    }
  }
</style>