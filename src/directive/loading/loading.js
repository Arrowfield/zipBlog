const Loading = {}
import './loading.scss'
let innerHTML = "<span></span><span></span><span></span><span></span><span></span><span></span>"
function toggleLoading(el, show) {
  if (show) {
    el.classList.add('loading-container')
    let loadingEl = document.createElement('p')
    loadingEl.classList.add('loading')
    loadingEl.innerHTML = innerHTML
    el.appendChild(loadingEl)
  }
}

Loading.install = function (Vue, options) {
  // Vue.component('LoadingSelf',Vue.extend(LoadingSelf))
  Vue.directive("loading-self", {
    bind: function (el, options) {

      toggleLoading(el, options.value)
    },
    update: function (el, options) {
      console.log(el)
    }
  })
}

export default Loading