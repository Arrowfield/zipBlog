import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

const SPRING_BOOT_TOKEN = "spring_boot_token_"

// export function getToken() {
//   return Cookies.get(TokenKey)
// }
//


// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }
//
// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

//构建自己的token 使用springBoot

export function setSelfToken(token) {
  Cookies.set(SPRING_BOOT_TOKEN,token,{
    expires:7,
    //path:"/",
    //domain: 'localhost'
  })
}

export function getSelfToken() {
  return Cookies.get(SPRING_BOOT_TOKEN)
}

export function removeSelfToken() {
  return Cookies.remove(SPRING_BOOT_TOKEN)
}
