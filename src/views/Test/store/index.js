import mutations from './mutations'
import getters from './getters'
const state = {
  scrollParams: {
    moveBtnLeft: 0,
    moveBtnRight: 0,
    moveBtnCenter: 0,
  },
  hoverLineX:0,
  showHoverLine:false,
  min:0,
  max:1,
  maxTimestamp:0
}
export default {
  state,
  mutations,
  getters
}