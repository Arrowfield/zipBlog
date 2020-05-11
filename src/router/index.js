import Vue from 'vue'
import VueRouter from 'vue-router'
// import Valine from 'valine';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Index',
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
        path:"tags",
        name:"Tags",
        component:()=> import("../views/Tags")
      },
      {
        path: "about",
        name:"About",
        component:()=> import("../views/About")
      },
      {
        path: "photo",
        name:"Photo",
        component:()=> import("../views/Photo")
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass:'active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{

  next()
})

export default router
