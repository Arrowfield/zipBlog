/**
 * 所有的文章相关的接口
 * @author 768449566@qq.com
 */
import service from "@/utils/service";

export function getUser(params) {
  return service({
    url:"/user/3",
    params,
    method:"GET"
  })
}

export function getUserInfo(data) {
  return service({
    url:"/user/message",
    method:"POST",
    data,
  })
}

export function getArticleList(params) {
  return service({
    url:"/article/get",
    params
  })
}

export function getArticleById(data) {
  return service.post("/article/getById",data)
}

export function recordCount(data){
  return service.post("/article/recordViewCount",data)
}

