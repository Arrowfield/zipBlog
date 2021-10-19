export default {
  minTimestamp(state) {
    return state.maxTimestamp * state.min
  },
  maxTimestamp(state) {
    return state.maxTimestamp * state.max
  }
}