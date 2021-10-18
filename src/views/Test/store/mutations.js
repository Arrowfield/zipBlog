export default {
  setStoreValue(state, payload) {
    for (let key in payload) {
      if (state.hasOwnProperty(key)) {
        state[key] = payload[key]
      }
    }
  }
}