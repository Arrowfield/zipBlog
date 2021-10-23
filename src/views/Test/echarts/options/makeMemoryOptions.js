import {
  INDEX_MEMORY,
  INDEX_VIRTUAL_MEMORY,
  INDEX_AVAILABLE_MEMORY,
  INDEX_XCODE_MEMORY,
  INDEX_REAL_MEMORY
} from "../../constant";
import {formatOptions} from './base'


export default function makeCpuOptions(state) {

  return formatOptions(state, {
    title: "Memory Usage",
    yAxis: [
      {
        name: "MB", position: 'left',
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        }
      },
    ],
    series: [
      {
        indexName: INDEX_MEMORY,
        data: state.fullDataList[INDEX_MEMORY],
        lineStyle: {color: "#C541B1"},
        markLine: {
          data: [{name: '平均线', type: 'average'}]
        }
      },
      {
        indexName: INDEX_XCODE_MEMORY,
        data: state.fullDataList[INDEX_XCODE_MEMORY],
        lineStyle: {color: "#7F4CE6"},
      },
      {
        indexName: INDEX_REAL_MEMORY,
        data: state.fullDataList[INDEX_REAL_MEMORY],
        lineStyle: {color: "#74BA03"},
      },
      // {
      //   indexName: INDEX_VIRTUAL_MEMORY,
      //   data: state.fullDataList[INDEX_VIRTUAL_MEMORY],
      //   lineStyle: {color: "#4593FD"},
      // },
      {
        indexName: INDEX_AVAILABLE_MEMORY,
        data: state.fullDataList[INDEX_AVAILABLE_MEMORY],
        lineStyle: {color: "#FFCB18"},
      },
    ],

    animation: true
  })
}