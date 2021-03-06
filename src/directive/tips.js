import './scss/tips.scss'

let bindValue, offsetX, offsetY

let dom = document.createElement('DIV')
dom.classList.add('tips')

function handleMouseenter(el) {
  document.body.appendChild(dom)
}

function handleMousemove(el) {
  //console.log(bindValue)
  dom.style.top = el.clientY  + 'px'
  dom.style.left = el.clientX + 'px'
  if(bindValue.time) {
    dom.innerHTML = bindValue.time
  }
}

function handleMouseleave(el) {
  document.body.removeChild(dom)
}

const tip = {
  bind(el, binding) {
    bindValue = binding.value
    el.onmouseenter = handleMouseenter
    el.onmousemove = handleMousemove
    el.onmouseleave = handleMouseleave
  },
  update(el, binding) {
    //bindValue = binding.value
    //console.log(bindValue)

  },
  unbind(el) {
    // document.body.removeChild(dom)
  }
}


tip.install = function (Vue) {
  Vue.directive('tips', tip)
}
export default tip