import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index'),
    children: [
      {
        path:"",
        name:"Article",
        component:()=> import("../components/Article")
      },
      {
        path:"link",
        name:"LinkFriend",
        component:()=> import("../views/LinkFriend")
      },
      {
        path: "about",
        name:"About",
        component:()=> import("../views/About")
      }
    ]
  },
  {
    path: "/article",
    name: "Article",
    component: () => import('../views/Article')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes
})

export default router
