import {INDEX_BIG_JANK, INDEX_FPS, INDEX_JANK, INDEX_STUTTER, INDEX_TIMESTAMP} from "../../constant";
import {formatOptions} from './base'

export default function makeChartsOptions(state) {

  return formatOptions(state, {
    title: "FPS",
    yAxis: [
      {
        name: INDEX_FPS, position: 'left',
        splitLine: {
          show:true,
          lineStyle:{
            type:"dashed"
          }
        }
      },
      {
        name: INDEX_JANK, position: 'right',
        splitLine:{
          show:false
        }
      }
    ],
    xAxis: {
      data: state.fullDataList[INDEX_TIMESTAMP],
      maxInterval: 1000 * 20,
      minInterval: 1,
      format: function (val) {
        let minute = Math.floor(val / (1000 * 60))
        let second = Math.floor(val % (1000 * 60) / 1000)
        return `${minute < 10 ? ('0' + minute) : minute}:${second < 10 ? ('0' + second) : second}`
      }
    },
    series: [
      {
        indexName: INDEX_FPS,
        data: state.fullDataList[INDEX_FPS],
        lineStyle: {
          color: "#C541B1"
        }
      },
      {
        indexName: INDEX_JANK,
        data: state.fullDataList[INDEX_JANK],
        yAxisIndex: 1,
        lineStyle: {
          color: "#7F4CE6"
        }
      },
      {
        indexName: INDEX_BIG_JANK,
        data: state.fullDataList[INDEX_BIG_JANK],
        yAxisIndex: 1,
        type:"effectScatter",
        rippleEffect:{
          color: "#FFCB18"
        }
      },
      {
        indexName: INDEX_STUTTER,
        data: state.fullDataList[INDEX_STUTTER],
        lineStyle: {
          color: "#74BA03"
        }
      }
    ],
    labelInfos: [],
    dataZoom: {
      type: "slider",
      top: 33,
      handleIcon: require('@/assets/img/icons/btn_normal.png'),
      handleSize: 22,
      fillerColor: "#5EB0F4",
      showDetail: false,
      showDataShadow: false,
      start: 0,
      end: 1,
      backgroundColor: "#e1e4e9",
      height: 14,
    },
  })
}