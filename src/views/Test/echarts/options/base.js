import {INDEX_LABEL_COLOR, INDEX_TIMESTAMP} from "../../constant";

export function formatOptions(state, options) {
  options.height = 400
  options.width = 1600

  let flag = false
  for (let [index, item] of options.series.entries()) {
    if (state.fullDataList[item.indexName] && state.fullDataList[item.indexName].length > 0) {
      flag = true
    } else if (!item.data) {
      // console.log(item.indexName, 'data is empty')
      options.series.splice(index, 1)
    }
  }
  if (!flag) return null

  if (!options.hasOwnProperty('tooltips')) {
    options.tooltips = {}
  }
  if (!options.hasOwnProperty('dragTooltips')) {
    options.dragTooltips = {}
  }
  if (!options.hasOwnProperty('colors')) {
    options.colors = INDEX_LABEL_COLOR
  }

  if (!options.hasOwnProperty('xAxis')) {
    options.xAxis = {
      data: state.fullDataList[INDEX_TIMESTAMP],
      maxInterval: 1000 * 90,
      minInterval: 1000 * 3,
      format: function (val, type) {
        let minute = Math.floor(val / (1000 * 60))
        let second = Math.floor(val % (1000 * 60) / 1000)
        let timeStr = `${minute < 10 ? ('0' + minute) : minute}:${second < 10 ? ('0' + second) : second}`
        if (type === 'MM:ss:mm') {
          let mm = val % 1000
          timeStr += `:${mm < 10 ? '00' + mm : mm < 100 ? '0' + mm : mm}`
        }
        return timeStr
      },
    }
  }

  if (!options.hasOwnProperty('legend')) {
    options.legend = {
      show: true,
      top: 10
    }
  }

  if (!options.hasOwnProperty('dataZoom')) {
    options.dataZoom = {
      type: "slider",
      top: 33,
      handleIcon: require('@/assets/images/icons/btn_normal.png'),
      handleSize: 22,
      fillerColor: "#5EB0F4",
      showDetail: false,
      showDataShadow: false,
      start: 0,
      end: 1,
      backgroundColor: "#e1e4e9",
      height: 14,
    }
  }

  if (!options.hasOwnProperty('grid')) {
    options.grid = {
      left: 90,
      top: 85,
      height: 240
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
    item.max = item.max < 1 ? 1 : item.max
    if (!item.hasOwnProperty('minInterval')) {
      item.minInterval = 1
    }
    if (!item.hasOwnProperty('splitLine')) {
      item.splitLine = {
        show: true
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
      top: 35,
      height: 29
    }
  })


  return options
}

function getAxisRange(dataArray) {
  let maxValue = 0
  for (let item of dataArray) {
    if (!item.data) continue
    for (let value of item.data) {
      if (value > maxValue) {
        maxValue = value
      }
    }
  }
  return maxValue
}