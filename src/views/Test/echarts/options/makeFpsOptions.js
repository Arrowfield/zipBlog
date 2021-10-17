import {
  INDEX_BIG_JANK,
  INDEX_FPS, INDEX_JANK, INDEX_LABEL_COLOR, INDEX_STUTTER, INDEX_TIMESTAMP,
  INDEX_FRAME_COLOR
} from "../../constant";
import {formatOptions} from './base'

export default function makeChartsOptions(state) {

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

    series: [
      {
        indexName: INDEX_FPS,
        data: state.fullDataList[INDEX_FPS],
        lineStyle: {
          color: "#C541B1"
        },
        markLine: {
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