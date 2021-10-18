export default {
  minTimestamp(state) {
    return state.maxTimestamp * state.min
  },
  maxTimestamp(state) {
    console.log(state.max)
    return state.maxTimestamp * state.max
  }
}