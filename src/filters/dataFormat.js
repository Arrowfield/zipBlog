// import Vue from 'vue'
//
// Vue.filter('dataFormat', function (value) {
//   if (!value) return '-'
//   value = value.toString()
//   return value.charAt(0).toUpperCase() + value.slice(1)
// })


import {parseTime} from "@/utils";

export function dateFormat(val,cFormat) {
  return parseTime(val,cFormat)
}