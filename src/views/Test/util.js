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
  INDEX_REAL_MEMORY, ALGORITHM_AVERAGE, ALGORITHM_VARIANCE
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
    if(data[i][keyArray[0]]) {
      res.push(data[i][keyArray[0]][keyArray[1]])
    }
  }
  return res
}

// /**
//  *
//  * @param {数组} arr
//  * @param {左边的索引} left
//  * @param {number} right
//  * @param {number} findVal
//  * @return Array
//  */
export function binarySearch(arr, left, right, findVal) {
  //当left>right时，就没找到，结束


  let mid = Math.floor((left + right) / 2);

  if (left > right) {
    return [left, mid, right];
  }

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


export const findNearestTarget = (arr, target) => {
  let mid;
  let l = 0;
  let r = arr.length - 1;
  // 保证指针最终停留在相邻的两个数,所以这里是判断是否大于1
  while (r - l > 1) {
    mid = Math.floor((l + r) / 2);
    // 如果目标数比中间小，所以范围在左边
    if (target < arr[mid]) {
      r = mid;
    } else {
      l = mid;
    }
  }
  // 最后比较这两个数字的绝对差大小即可。
  return Math.abs(target - arr[l]) <= Math.abs(target - arr[r]) ? l : r;
}

// https://www.cnblogs.com/echolun/p/13971943.html
export function getTooltipsData(opts, hoverTime) {
  let timestamps = opts.xAxis.data
  //let index = binarySearch(timestamps, 0, timestamps.length - 1, hoverTime)[2]
  let index = findNearestTarget(timestamps, hoverTime)
  let res = []
  for (let item of opts.series) {
    res.push({
      key: item.indexName,
      value: item.data[index] && item.data[index].toFixed('1')
    })
  }
  return {
    time: opts.xAxis.format(timestamps[index], 'MM:ss:mm'),
    data: res
  }
}

export function getDragTooltipsData(opts, startTime, endTime) {
  let timestamps = opts.xAxis.data
  let startIndex = findNearestTarget(timestamps, startTime)
  let endIndex = findNearestTarget(timestamps, endTime)
  let res = []
  if (opts.area) {
    for (let item of opts.area) {
      let data = opts.series.filter((tmp) => tmp.indexName === item.indexName)[0].data, val = -1
      switch (item.type) {
        case ALGORITHM_AVERAGE:
          val = calcAverage(data, startIndex, endIndex).toFixed(1)
          break
        case ALGORITHM_VARIANCE:
          val = calcVariance(data, startIndex, endIndex).toFixed(1)
          break
      }
      res.push({
        key: item.name,
        value: val
      })
    }
  }
  let start = opts.xAxis.format(timestamps[startIndex], 'MM:ss:mm')
  let end = opts.xAxis.format(timestamps[endIndex], 'MM:ss:mm')
  return {
    time: `${start}-${end}`,
    data: res
  }
}

/**
 * 计算平均值
 * {Array} 指标对应的数据集合
 * {Number} 开始下标
 */
export function calcAverage(data, start, end) {
  // let a = data.reduce((prev, next) => prev + next, 0)
  // console.log(a / data.length, a, data.length)
  let count = 0, sum = 0
  for (let i = start; i <= end; i++) {
    sum += data[i]
    count++
  }
  if (count === 0) return '-'
  return sum / count
}

/**
 * 计算方差
 * @param {array} 指标对应的数据集合
 * @param {number} 开始下标
 */
function calcVariance(data, start, end) {
  let average = calcAverage(data, start, end), sum = 0, count = 0
  for (let i = start; i <= end; i++) {
    sum += Math.pow(data[i] - average, 2)
    count++
  }
  return sum / (end - start + 1)
}
