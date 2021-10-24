import {
  INDEX_BIG_JANK,
  INDEX_FPS, INDEX_JANK, INDEX_LABEL_COLOR, INDEX_STUTTER, INDEX_TIMESTAMP,
  INDEX_FRAME_COLOR,
  INDEX_APP,
  INDEX_TOTAL, ALGORITHM_AVERAGE
} from "../../constant";




import {formatOptions} from './base'

export default function makeCpuOptions(state) {

  return formatOptions(state, {
    title: "CPU Usage",
    yAxis: [
      {
        name: "%", position: 'left',
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        }
      },
    ],
    area: [
      {indexName: INDEX_APP, type: ALGORITHM_AVERAGE, name: "Avg(AppCPU)",},
      {indexName: INDEX_TOTAL, type: ALGORITHM_AVERAGE, name: "Avg(TotalCPU)"},
    ],
    series: [
      {
        indexName: INDEX_APP,
        data: state.fullDataList[INDEX_APP],
        lineStyle: {color: "#42B25E"},
        markLine: {
          data: [{name: '平均线', type: 'average'}]
        }
      },
      {
        indexName: INDEX_TOTAL,
        data: state.fullDataList[INDEX_TOTAL],
        lineStyle: {color: "#6978D3"},
      },
    ],
    flameGraph: {
      colors: INDEX_FRAME_COLOR
    },
    animation:true
  })
}