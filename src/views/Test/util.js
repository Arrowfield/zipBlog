import {
  INDEX_BIG_JANK,
  INDEX_FPS,
  INDEX_FRAME_TIME,
  INDEX_JANK,
  INDEX_STUTTER,
  INDEX_TIMESTAMP,
  PLATFORM_IOS,
  INDEX_APP,
  INDEX_TOTAL,
  INDEX_MEMORY,
  INDEX_VIRTUAL_MEMORY,
  INDEX_AVAILABLE_MEMORY,
  INDEX_XCODE_MEMORY,
  INDEX_REAL_MEMORY
} from './constant'

export const formatReportData = function (state) {
  let result = {}
  let dataList = state.caseReport.report.DataList
  if (state.caseDetail.caseDetail.platform === PLATFORM_IOS) {

    result[INDEX_FPS] = getValueFromDataList(dataList, ['IosFps', 'fps'])
    result[INDEX_JANK] = getValueFromDataList(dataList, ['IosFps', 'Jank'])
    result[INDEX_STUTTER] = getValueFromDataList(dataList, ['Stutter', 'Stutter'])
    result[INDEX_BIG_JANK] = getValueFromDataList(dataList, ['BigJank', 'BigJank'])
    result[INDEX_FRAME_TIME] = getValueFromDataList(dataList, ['FrameDetails', 'FrameTimes'])

    result[INDEX_APP] = getValueFromDataList(dataList, ['CpuUsage', 'AppUsage'])
    result[INDEX_TOTAL] = getValueFromDataList(dataList, ['CpuUsage', 'TotalUsage'])

    result[INDEX_MEMORY] = getValueFromDataList(dataList, ['Ios11MemoryUsage', 'Memory'])
    result[INDEX_VIRTUAL_MEMORY] = getValueFromDataList(dataList, ['VirtualMemory', 'VirtualMemory'])
    result[INDEX_AVAILABLE_MEMORY] = getValueFromDataList(dataList, ['AvailableMemory', 'availableMemory'])
    result[INDEX_XCODE_MEMORY] = getValueFromDataList(dataList, ['Ios11MemoryUsage', 'XcodeMemory'])
    result[INDEX_REAL_MEMORY] = getValueFromDataList(dataList, ['Ios11MemoryUsage', 'RealMemory'])


    result[INDEX_TIMESTAMP] = dataList.map((item) => item.TimeStamp)
  }
  return result
}


function getValueFromDataList(data, keyArray) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    res.push(data[i][keyArray[0]][keyArray[1]])
  }
  return res
}

/**
 *
 * @param {数组} arr
 * @param {左边的索引} left
 * @param {number} right
 * @param {number} findVal
 * @return Array
 */
export function binarySearch(arr, left, right, findVal) {
  //当left>right时，就没找到，结束
  if (left > right) {
    return [left, -1, right];
  }

  let mid = Math.floor((left + right) / 2);
  let midVal = arr[mid];

  if (findVal > midVal) {
    //向右递归
    return binarySearch(arr, mid + 1, right, findVal);
  } else if (findVal < midVal) {
    //向左递归
    return binarySearch(arr, left, mid - 1, findVal);
  } else {
    return [left, mid, right];
  }
}


export function getTooltipsData(opts, hoverTime) {
  let timestamps = opts.xAxis.data
  let index = binarySearch(timestamps, 0, timestamps.length - 1, hoverTime)[2]
  let res = []
  for (let item of opts.series) {
    res.push({
      key: item.indexName,
      value: item.data[index]
    })
  }
  return {
    time: opts.xAxis.format(timestamps[index],'MM:ss:mm'),
    data: res
  }
}