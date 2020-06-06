/**
 * 进度条插件的封装
 * @email 768449566@qq.com
 * @param value
 * @param max
 */
import Progress from "@/plugin/Progress/Progress";
import Vue from 'vue'
let instance;
let instances = [];
let seed = 1;
//
let ProgressConstructor = Vue.extend(Progress);
const Progress = function (options) {
  options = options || {}
  if(typeof options === 'string'){
    options = {
      value:options
    }
  }
  let id = "progress" + send++
  instance = new ProgressConstructor({
    data: options
  });
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  instances.push(instance);
  return instance
}



export default Progress
