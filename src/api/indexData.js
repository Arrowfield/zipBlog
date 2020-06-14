
/**
 * 首页信息的相关接口
 * @author 768449566@qq.com
 */
import service from "@/utils/service";

export function getIndexData() {
  return service.post("/indexData/get")
}
