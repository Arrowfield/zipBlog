import {binarySearch} from "../util";

export default {
  reCalcDatalist({commit,state,getters}){
    // console.log(state)
    let startTime = state.min * state.maxTimestamp
    let endTime = state.max * state.maxTimestamp
    //console.log(state.timestamps,startTime,endTime)
    let startIndex = binarySearch(state.timestamps,0,state.timestamps.length - 1,startTime)
    let endIndex = binarySearch(state.timestamps,0,state.timestamps.length - 1,endTime)
  }
}