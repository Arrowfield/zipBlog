import service from "@/utils/service";

export function getUser(params) {
  return service({
    url:"/user/3",
    params,
    method:"GET"
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

