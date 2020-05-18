import service from "@/utils/service";
export function getUser(params) {
  return service({
    url:"/user/3",
    params,
    method:"GET"
  })
}
