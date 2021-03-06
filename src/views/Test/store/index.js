import mutations from './mutations'
import getters from './getters'
import actions from './actions'
const state = {
  scrollParams: {
    moveBtnLeft: 0,
    moveBtnRight: 0,
    moveBtnCenter: 0,
  },
  hoverLineX:0,
  clickLineX:0,
  dragLineX:0,
  showHoverLine:false,
  min:0,
  max:1,
  maxTimestamp:0,
  timestamps:[],
  showDataDrag:false,
  showDragTooltips:false,
  dragConfig:{},
  xAxisTick:0,
}
export default {
  state,
  mutations,
  getters,
  actions
}