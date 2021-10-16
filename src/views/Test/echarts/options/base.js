import {INDEX_LABEL_COLOR} from "../../constant";

export function formatOptions(state, options) {
  options.height = 400
  options.width = 1600
  if (!options.hasOwnProperty('grid')) {
    options.grid = {
      left: 90,
      top: 75,
      height: 250
    }
  }
  options.series = options.series.map((item) => {
    if (!item.hasOwnProperty('yAxisIndex')) {
      item.yAxisIndex = 0
    }
    return item
  })
  options.yAxis = options.yAxis.map((item, index) => {
    item.min = 0
    item.max = getAxisRange(options.series.filter(tmp => tmp.yAxisIndex === index))
    if (!item.hasOwnProperty('minInterval')) {
      item.minInterval = 1
    }
    if(!item.hasOwnProperty('splitLine')){
      item.splitLine = {
        show:true
      }
    }
    return item
  })


  let labelInfos = state.caseDetail.labelInfos
  options.labelInfos = labelInfos.map((item, index) => {
    return {
      id: item.summary.id,
      startTime: item.summary.start_time,
      endTime: item.summary.end_time,
      name: item.summary.name,
      color: INDEX_LABEL_COLOR[[index % (INDEX_LABEL_COLOR.length + 1)]],
      top: 25,
      height: 29
    }
  })


  return options
}

function getAxisRange(dataArray) {
  let maxValue = 0
  for (let item of dataArray) {
    for (let value of item.data) {
      if (value > maxValue) {
        maxValue = value
      }
    }
  }
  return maxValue
}