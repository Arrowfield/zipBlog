//封装第二种loading


const LoadingCirc = {}
import './loading.scss'

let elLoading = {}
let id = 1

let innerHTML = `<svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
      </svg><div style="color:#ff4e6a;line-height: 30px">加载中</div>`

function toggleLoading(el, show) {
  const loadingId = el.getAttribute('loading-id')
  if (show && !loadingId) {
    let loadingEl = document.createElement('div')
    el.classList.add('loading-container')
    loadingEl.classList.add('el-loading-spinner')
    loadingEl.innerHTML = innerHTML
    el.appendChild(loadingEl)
    elLoading[id] = loadingEl
    el.setAttribute('loading-id', id)
  } else {
    if(!elLoading[loadingId]) return
    el.removeChild(elLoading[loadingId])
    el.setAttribute('loading-id','')
    delete elLoading[loadingId]
  }
}

LoadingCirc.install = function (Vue, options) {

  Vue.directive("loading-circ", {
    bind: function (el, options) {
      toggleLoading(el, options.value)
    },
    update: function (el, options) {
      toggleLoading(el, options.value)
    }
  })
}

export default LoadingCirc
