import './scss/tips.scss'

let bingValue, offsetX, offsetY

let dom = document.createElement('DIV')
dom.classList.add('tips')

function handleMouseenter(el) {
  document.body.appendChild(dom)
}

function handleMousemove(el) {
  dom.style.top = el.clientY  + 'px'
  dom.style.left = el.clientX + 'px'
}

function handleMouseleave(el) {
  document.body.removeChild(dom)
}

const tip = {
  bind(el, binding) {
    bingValue = binding.value
    el.onmouseenter = handleMouseenter
    el.onmousemove = handleMousemove
    el.onmouseleave = handleMouseleave
  },
  update(el, binding) {

  },
  unbind(el) {
    document.body.removeChild(dom)
  }
}


tip.install = function (Vue) {
  Vue.directive('tips', tip)
}
export default tip