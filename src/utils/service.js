import axios from 'axios'


const baseURL = process.env.VUE_APP_NO_PROXY

const service = axios.create({
  baseURL,
  timeout:5000,
  onDownloadProgress: function (event) {
    // 对原生进度事件的处理
    // event.srcElement.getResponseHeader('content-length')
    // event.lengthComputable = true
    console.log(event)
  },
})

export default service
