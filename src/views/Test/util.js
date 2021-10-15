import {
  INDEX_FPS,
  INDEX_JANK,
  INDEX_STUTTER,
  INDEX_BIG_JANK,
  INDEX_FRAME_TIME,
  INDEX_TIMESTAMP,
  PLATFORM_IOS,
  PLATFORM_ANDROID
} from './constant'

export const formatReportData = function (state) {
  let result = {}
  let dataList = state.caseReport.report.DataList
  if(state.caseDetail.caseDetail.platform === PLATFORM_IOS) {
    result[INDEX_FPS] = getValueFromDataList(dataList, ['IosFps', 'fps'])
    result[INDEX_JANK] = getValueFromDataList(dataList, ['IosFps', 'Jank'])
    result[INDEX_STUTTER] = getValueFromDataList(dataList, ['Stutter', 'Stutter'])
    result[INDEX_BIG_JANK] = getValueFromDataList(dataList, ['BigJank', 'BigJank'])
    result[INDEX_FRAME_TIME] = getValueFromDataList(dataList, ['FrameDetails', 'FrameTimes'])
    result[INDEX_TIMESTAMP] = dataList.map((item)=>item.TimeStamp)
  }
  console.log(result)
  return result
}

export function makeChartsOptions(state) {

  return formatOptions(state,{
    yAxis: [
      {name: INDEX_FPS, position: 'left'},
      {name: INDEX_JANK, position: 'right'}
    ],
    xAxis:{
      data:state.fullDataList[INDEX_TIMESTAMP],
      maxInterval:1000 * 20,
      minInterval:0,
      format:function (val) {
        let minute = Math.floor(val / (1000 * 60))
        let second = val % (1000 * 60) / 1000
        return `${minute < 10 ? ('0' + minute) : minute}:${second < 10 ? ('0' + second) : second}`
      }
    },
    series: [
      {indexName: INDEX_FPS, data: state.fullDataList[INDEX_FPS]},
      {indexName: INDEX_JANK, data: state.fullDataList[INDEX_JANK]},
      {indexName: INDEX_BIG_JANK, data: state.fullDataList[INDEX_BIG_JANK]},
      {indexName: INDEX_STUTTER, data: state.fullDataList[INDEX_STUTTER]}
    ],
  })
}

function getValueFromDataList(data, keyArray) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    res.push(data[i][keyArray[0]][keyArray[1]])
  }
  return res
}

function formatOptions(state,options) {
  options.height = 400
  options.width = 1600
  if(!options.hasOwnProperty('grid')){
    options.grid = {
      left:70,
      top:85,
      height:240
    }
  }
  options.series = options.series.map((item)=>{
    // console.log()
    return item
  })
  return options
}