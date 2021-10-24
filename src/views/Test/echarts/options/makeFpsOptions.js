import {
  INDEX_BIG_JANK,
  INDEX_FPS, INDEX_JANK, INDEX_LABEL_COLOR, INDEX_STUTTER, INDEX_TIMESTAMP,
  INDEX_FRAME_COLOR,
  ALGORITHM_AVERAGE, ALGORITHM_VARIANCE
} from "../../constant";
import {formatOptions} from './base'

export default function makeChartsOptions(state) {
  let threshold1 = 18
  let threshold2 = 25
  return formatOptions(state, {
    title: "FPS",
    yAxis: [
      {
        name: INDEX_FPS, position: 'left',
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        }
      },
      {
        name: INDEX_JANK, position: 'right',
        splitLine: {
          show: false
        }
      }
    ],
    area: [
      {indexName: INDEX_FPS, type: ALGORITHM_AVERAGE, name: "Avg(FPS)",},
      {indexName: INDEX_FPS, type: ALGORITHM_VARIANCE, name: "Var(FPS)"},
      {indexName: INDEX_FPS, type: ALGORITHM_AVERAGE, name: `FPS>=${threshold1}`},
      {indexName: INDEX_FPS, type: ALGORITHM_AVERAGE, name: `FPS>=${threshold2}`},
      {indexName: INDEX_FPS, type: ALGORITHM_AVERAGE, name: "Drop(FPS)"},
      {indexName: INDEX_JANK, type: ALGORITHM_AVERAGE, name: "Jank(/10min)"},
      {indexName: INDEX_BIG_JANK, type: ALGORITHM_AVERAGE, name: "BigJank(/10min)"},
    ],

    series: [
      {
        indexName: INDEX_FPS,
        data: state.fullDataList[INDEX_FPS],
        lineStyle: {
          color: "#C541B1"
        },
        markLine: { // 标记线
          data:
            [
              {
                name: '平均线',
                type: 'average'
              }
            ]
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
        type: "effectScatter",
        rippleEffect: {
          color: "#FFCB18"
        },
        lineStyle: {
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

    flameGraph: {
      colors: INDEX_FRAME_COLOR
    }
  })
}