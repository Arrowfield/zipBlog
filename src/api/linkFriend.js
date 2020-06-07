import service from "@/utils/service";

export function getLink(data) {
  return service.post("/link/get",data)
}
