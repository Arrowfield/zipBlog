<template>
  <div class="test-page">
    <input type="file" @change="loadFile"/>
    <!--    <canvas id="flamegraph"></canvas>-->
    <!--    <div class="target-style">-->
    <!--      <canvas id="fps"></canvas>-->
    <!--    </div>-->

    <div id="fps-svg" class="target-svg-style target-style">
      <charts-main :options="fpsOptions"/>
    </div>

    <div class="target-svg-style target-style">
      <charts-main :options="cpuOptions"/>
    </div>

    <div class="target-svg-style target-style">
      <charts-main :options="memoryOptions"/>
    </div>

<!--        <div class="target-svg-style target-style" v-for="i in 100">-->
<!--          <charts-main :options="cpuOptions"/>-->
<!--        </div>-->
<!--    <div class="test-move" @mousedown="testMousedown"></div>-->
  </div>
</template>

<script>
  import {createCanvas} from '@/plugins/flamegraph/flamegraph'
  import {targetChart} from '@/plugins/targetChart/targetChart'
  import {caseDetail} from './caseDetail.js'
  import {caseReport} from './caseReport.js'
  import {formatReportData, getDragTooltipsData, getTooltipsData} from "./util";
  import ChartsMain from "./echarts/ChartsMain";
  import echarts from "./echarts/echarts";
  import makeChartsOptions from './echarts/options/makeFpsOptions'
  import makeCpuOptions from './echarts/options/makeCpuOptions'
  import makeMemoryOptions from './echarts/options/makeMemoryOptions'
  import {INDEX_TIMESTAMP} from "./constant";
  import {eventBus} from '../../utils/Bus'
  // import 'fast-text-encoding'

  // let caseDetail = {data:{}}
  // let caseReport = {}

  let data = caseDetail.data
  /* start */
  // import protoRoot from '@/proto/proto'
  // import protobuf from 'protobufjs'

  // 请求体message
  const PBMessageRequest = protoRoot.lookup('com.perfdog.proto.TdwTraceNode')
  // 响应体的message
  const PBMessageResponse = protoRoot.lookup('com.perfdog.proto.TraceDataTest')


  const apiVersion = '1.0.0'
  const token = 'my_token'


  function transformResponseFactory(responseType) {
    return function transformResponse(rawResponse) {
      // 判断response是否是arrayBuffer
      if (rawResponse == null || !isArrayBuffer(rawResponse)) {
        return rawResponse
      }
      try {
        const buf = protobuf.util.newBuffer(rawResponse)
        // decode响应体
        const decodedResponse = PBMessageResponse.decode(buf)
        if (decodedResponse.messageData && responseType) {
          const model = protoRoot.lookup(responseType)
          decodedResponse.messageData = model.decode(decodedResponse.messageData)
        }
        return decodedResponse
      } catch (err) {
        return err
      }
    }
  }


  /* end */
  export default {
    name: "Test",
    components: {ChartsMain},
    data() {
      return {
        labelInfo: [
          {color: "#5A95F8", width: 0, offsetX: 0, title: ""},
          {color: "#7F52EE", width: 0, offsetX: 0, title: ""},
          {color: "#65AD93", width: 0, offsetX: 0, title: ""},
        ],
        pathY: "",
        pathX: "",
        series: [],
        fpsOptions: {},
        cpuOptions: {},
        memoryOptions: {},
        clientX: "",
        clientY: "",
        originX: "",
        originY: "",
        chartOptions: []
      }
    },
    mounted() {
      //console.log(protoRoot)
      // const encoder = new TextEncoder()
      // const view = encoder.encode('€')
      // console.log(view); // Uint8Array(3) [226, 130, 172]
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
      //https://stackoverflow.com/questions/8125006/google-chrome-developer-toolkit-is-slow
      let state = {caseDetail: caseDetail.data, caseReport: caseReport.data}
      console.log(state)
      state.fullDataList = formatReportData(state)
      let timestamp = state.fullDataList[INDEX_TIMESTAMP]
      this.$store.commit('setStoreValue', {
        maxTimestamp: timestamp[timestamp.length - 1],
        timestamps: timestamp,
      })

      this.fpsOptions = makeChartsOptions(state);
      this.cpuOptions = makeCpuOptions(state)
      this.memoryOptions = makeMemoryOptions(state)
      //echarts.connect([this.fpsOptions])
      this.chartOptions.push(
        this.fpsOptions,
        this.cpuOptions,
        this.memoryOptions
      )
      eventBus.$on('makeChartOptionsAll', this.makeChartOptionsAll)
      eventBus.$on('makeDragOptionsAll', this.makeDragOptionsAll)
      window.onresize = this.resize
      this.resize()
    },
    methods: {
      loadFile(e) {

        function isArrayBuffer (obj) {
          return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
        }

        //https://juejin.cn/post/6844903699458818062#heading-8
        let file = e.target.files[0]
        //let blob = new Blob([file], {type: "application/octet-stream"})
        let read = new FileReader()
        read.readAsArrayBuffer(file)
        read.onload =  function() {
          if(isArrayBuffer(this.result)){
            //console.log(1231)
          }

          const buf = protobuf.util.newBuffer(this.result)
          var reader = protobuf.Reader.create(buf);
          while (reader.pos < reader.len) {
            let msg = PBMessageResponse.decodeDelimited(reader)
            console.log(msg)
          }
        }
      },
      resize() {
        let width = document.documentElement.offsetWidth
        if (width < 1200) width = 1200
        this.updateDataAreaWidth(width < 1600 ? width : 1600)
      },
      drawAxisY() {
        let fullDataList = formatReportData(caseReport), maxValues = []
        for (let key in fullDataList) {
          maxValues.push(Math.max(...fullDataList[key]))
        }
        this.pathY = ""
        let step = 8, distance = 240 / step
        for (let i = 0; i < step + 1; i++) {
          this.pathY += `M 71 ${241 - i * distance} L 63 ${241 - i * distance} `
        }
        // console.log(maxValues)
      },
      drawAxisX() {
        let step = 20, distance = 1458 / step
        for (let i = 0; i < step + 1; i++) {
          this.pathX += `M ${i * distance + 1} 1 L ${i * distance + 1} 8 `
        }
      },
      testMousedown(e) {
        let el = e.target
        this.clientX = e.clientX - el.offsetLeft
        console.log(this.clientX)
        this.clientY = e.clientY - el.offsetTop
        // el.style.transform =`translate(50%,50%)`
        // this.originX = el.offsetLeft
        // this.originY = el.offsetTop
        //document.addEventListener('mousemove', this.testMousemove)
        //document.addEventListener('mouseup',this.testMouseup)
        document.onmousemove = this.testMousemove
        document.onmouseup = this.testMouseup
      },
      testMouseup() {
        //document.removeEventListener('mousemove', this.testMousemove)
        document.onmousemove = null
        document.onmouseup = null
      },
      testMousemove(e) {
        let el = e.target
        let offsetX = e.clientX - this.clientX, offsetY = e.clientY - this.clientY

        el.style.top = offsetY + 'px'
        el.style.left = offsetX + 'px'
      },
      makeChartOptionsAll(time) {
        for (let item of this.chartOptions) {
          data = getTooltipsData(item, time)
          item.tooltips = data
        }
      },
      makeDragOptionsAll(startTime, endTime) {
        for (let item of this.chartOptions) {
          data = getDragTooltipsData(item, startTime, endTime)
          item.dragTooltips = data
        }
      },
      updateDataAreaWidth(width) {
        for (let item of this.chartOptions) {
          item.width = width
        }
      }
    },
    beforeDestroy() {
      window.onresize = null
    }
  }

</script>

<style lang="scss" scoped>
  .target-style {
    width: 1460px;
    margin: 40px auto;
    box-shadow: 0 2px 10px rgba(179, 186, 220, .4);
    padding: 20px 0;

    &.target-svg-style {
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

  .test-move {
    background: red;
    top: 50px;
    left: 50px;
    position: fixed;
    z-index: 10;
    width: 100px;
    height: 100px;
    cursor: move;
  }
</style>