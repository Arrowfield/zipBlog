import service from "@/utils/service";

export function getTags() {
  return service({
    url:"/article/tags/get"
  })
}
