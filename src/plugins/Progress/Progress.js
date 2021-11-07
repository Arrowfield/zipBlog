/**
 * 进度条插件的封装
 * @email 768449566@qq.com
 * @param value
 * @param max
 */
import Progress from "@/plugins/Progress/Progress.vue";

import Vue from 'vue'
let instance;
let instances = [];
let seed = 1;
//
let ProgressConstructor = Vue.extend(Progress);

const ProgressSelf = function (options) {
  options = options || {}
  if(typeof options === 'string'){
    options = {
      value:options
    }
  }
  let userOnClose = options.onClose;
  let id = "progress" + seed++

  options.onClose = function() {
    // console.log("___________执行到这里了吧")
    ProgressSelf.close(id, userOnClose);
  };

  instance = new ProgressConstructor({
    data: options
  });
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instances.push(instance);

  return instance
}

ProgressSelf.close = function(id, userOnClose) {
  let len = instances.length;
  let index = -1;
  let removedHeight;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight;
      index = i;
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  for (let i = index; i < len - 1 ; i++) {
    let dom = instances[i].$el;
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};



export default ProgressSelf
