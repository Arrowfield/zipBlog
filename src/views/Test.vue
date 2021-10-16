<template>
  <div class="test-page">
    <canvas id="flamegraph"></canvas>
    <div class="target-style">
      <canvas id="fps"></canvas>
    </div>

    <div id="fps-svg" class="target-svg-style target-style">
      <charts-main :options="fpsOptions"/>
    </div>

    <div  class="target-svg-style target-style">
      <charts-main :options="fpsOptions"/>
    </div>

    <p></p>
  </div>
</template>

<script>
  import {createCanvas} from '@/plugin/flamegraph/flamegraph'
  import {targetChart} from '@/plugin/targetChart/targetChart'
  import {caseDetail, caseReport} from './Test/caseDetail.js'
  import {formatReportData} from "./Test/util";
  import ChartsMain from "./Test/echarts/ChartsMain";
  import echarts from "./Test/echarts/echarts";
  import makeChartsOptions from './Test/echarts/options/makeFpsOptions'
  let data = caseDetail.data
  export default {
    name: "Test",
    components: {ChartsMain},
    data() {
      return {
        labelInfo: [
          {color: "#5A95F8", width: 0,offsetX:0,title:""},
          {color: "#7F52EE", width: 0,offsetX:0,title:""},
          {color: "#65AD93", width: 0,offsetX:0,title:""},
        ],
        pathY:"",
        pathX:"",
        series:[],
        fpsOptions:{width:1600}
      }
    },
    mounted() {
      // let dataBaseWidth = 1460
      // let maxTimestamp = data.labelInfos[data.labelInfos.length - 1].summary.end_time,sum = 0
      // for (let [index,item] of data.labelInfos.entries()){
      //   let width = (item.summary.end_time - item.summary.start_time)/maxTimestamp * dataBaseWidth
      //   this.labelInfo[index].width = width
      //   this.labelInfo[index].offsetX = sum
      //   this.labelInfo[index].name = item.summary.name
      //   sum += width
      // }
      // this.drawAxisY()
      // this.drawAxisX()

      let state = {
        caseDetail:caseDetail.data,caseReport:caseReport.data
      }
      state.fullDataList = formatReportData(state)
      this.fpsOptions = makeChartsOptions(state);
      echarts.connect([this.fpsOptions])
    },
    methods:{
      drawAxisY(){
        let fullDataList = formatReportData(caseReport),maxValues = []
        for(let key in fullDataList){
          maxValues.push(Math.max(...fullDataList[key]))
        }
        this.pathY = ""
        let step = 8,distance = 240 / step
        for(let i = 0;i < step + 1;i++){
          this.pathY += `M 71 ${241 - i * distance} L 63 ${241 - i * distance} `
        }
        // console.log(maxValues)
      },
      drawAxisX(){
        let step = 20,distance = 1458 / step
        for(let i = 0;i < step + 1;i++){
          this.pathX += `M ${i * distance + 1} 1 L ${i * distance + 1} 8 `
        }
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