export const getColor = function () {//十六进制颜色随机
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

export function BinarySearch(arr, target) {
  let sIndex = 0
  let eIndex = arr.length - 1
  let midden = Math.floor((sIndex + eIndex) / 2)
  while (sIndex < eIndex && arr[m] !== target) {
    if (arr[m] > target) {
      sIndex = midden + 1
    } else {
      eIndex = midden - 1
    }
    midden = Math.floor((sIndex + eIndex) / 2)
  }
  if (arr[midden] === target) {
    return midden
  } else {
    return -1
  }
}