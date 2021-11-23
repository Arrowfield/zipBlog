import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import changePageTitle from '../utils/changePageTitle'
import greenBook from "./greenBook";
// import nexmoe from "./nexmoe";

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  ...greenBook,
  //...nexmoe,
  {path: '/test',name: 'test',component: () => import('@/views/Test/Test.vue')},
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error')
  }
]

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  changePageTitle(to.meta.title)
  next()
})

export default router
