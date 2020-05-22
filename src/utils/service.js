import axios from 'axios'


const baseURL = process.env.VUE_APP_NO_PROXY

const service = axios.create({
  baseURL,
  timeout:5000
})

export default service
