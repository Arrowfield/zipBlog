import {
  INDEX_FPS,
  INDEX_JANK,
  INDEX_STUTTER,
  INDEX_BIG_JANK,
  PLATFORM_IOS,
  PLATFORM_ANDROID
} from './constant'

export const formatReportData = function (state) {
  let result = {}
  let dataList = state.caseReport.report.DataList
  if(state.caseDetail.caseDetail.platform === PLATFORM_IOS) {
    result[INDEX_FPS] = getValueFromDataList(dataList, ['IosFps', 'fps'])
    result[INDEX_JANK] = getValueFromDataList(dataList, ['IosFps', 'Jank'])
    result[INDEX_FPS] = getValueFromDataList(dataList, ['IosFps', 'fps'])
    result[INDEX_JANK] = getValueFromDataList(dataList, ['IosFps', 'Jank'])
  }
  return result
}

export function makeChartsOptions(state) {

  return formatOptions({
    yAxis: [
      {name: INDEX_FPS, position: 'left'},
      {name: INDEX_JANK, position: 'right'}
    ],
    series: [
      {indexName: INDEX_FPS, data: []},
      {indexName: INDEX_JANK, data: []}
    ]
  })
}

function getValueFromDataList(data, keyArray) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    res.push(data[i][keyArray[0]][keyArray[1]])
  }
  return res
}

function formatOptions(options) {
  options.height = 400
  options.width = 1600
  return options
}