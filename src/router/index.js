import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import changePageTitle from '../utils/changePageTitle'
import greenBook from "./greenBook";
import nexmoe from "./nexmoe";

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  // {
  //   path: '/',
  //   component: () => import('../views/Index'),
  //   children: [
  //     {
  //       path: "",
  //       name: "Article",
  //       component: () => import("../components/Article"),
  //       meta: {
  //         title: '首页'
  //       }
  //     },
  //     {
  //       path:"article/:id",
  //       component:()=> import("@/views/ArticleDetail"),
  //
  //     },
  //     {
  //       path: "link",
  //       name: "LinkFriend",
  //       component: () => import("../views/LinkFriend"),
  //       meta: {
  //         title: '友情链接'
  //       }
  //     },
  //     {
  //       path: "mood",
  //       name: "Mood",
  //       component: () => import("../views/Mood"),
  //       meta: {
  //         title: '心情随笔'
  //       }
  //     },
  //     {
  //       path: "address",
  //       name: "Address",
  //       component: () => import("../views/Address"),
  //       meta: {
  //         title: '好站推荐'
  //       }
  //     },
  //     {
  //       path: "tags",
  //       name: "Tags",
  //       component: () => import("../views/Tags"),
  //       meta: {
  //         title: '标签'
  //       }
  //     },
  //     {
  //       path: "about",
  //       name: "About",
  //       component: () => import("../views/About"),
  //       meta: {
  //         title: '关于'
  //       }
  //     },
  //     {
  //       path: "photo",
  //       name: "Photo",
  //       component: () => import("../views/Photo"),
  //       meta: {
  //         title: '相册'
  //       }
  //     }
  //   ]
  // },
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
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  changePageTitle(to.meta.title)
  next()
})

export default router
