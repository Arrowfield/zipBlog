export default {
  minTimestamp(state) {
    console.log(state.min)
    return state.maxTimestamp * state.min
  },
  maxTimestamp(state) {
    return state.maxTimestamp * state.max
  }
}