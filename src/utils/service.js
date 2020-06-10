import axios from 'axios'


const baseURL = process.env.VUE_APP_NO_PROXY

const service = axios.create({
  baseURL,
  timeout:50000,
  retry: 2,
  retryInterval: 5000,
  onDownloadProgress: function (event) {
  }
})

// service.interceptors.response.use(res => res,function(err){
//   let config = err.config
//   if(!config || !config.retry) return Promise.reject(err)
//   config.retryCount = config.retryCount || 0;
//   if (config.retryCount >= config.retry) {
//     return Promise.reject(err);
//   }
//   config.retryCount += 1;
//   let back = new Promise(function(resolve) {
//     //console.log("接口"+config.url+"请求超时，重新请求")
//     setTimeout(function() {
//       resolve();
//     }, config.retryInterval|| 1);
//   })
//   return back.then(()=>{
//     return service(config)
//   })
// })

export default service
