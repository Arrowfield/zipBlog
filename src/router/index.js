import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index'),
    children: [
      {
        path: "",
        name: "Article",
        component: () => import("../components/Article"),
        meta: {
          title: 'Zの个人博客'
        }
      },
      {
        path:"article/:id",
        component:()=> import("@/views/ArticleDetail")
      },
      {
        path: "link",
        name: "LinkFriend",
        component: () => import("../views/LinkFriend"),
        meta: {
          title: 'Zの个人博客-友情链接'
        }
      },
      {
        path: "tags",
        name: "Tags",
        component: () => import("../views/Tags"),
        meta: {
          title: 'Zの个人博客-标签'
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("../views/About"),
        meta: {
          title: 'Zの个人博客-关于'
        }
      },
      {
        path: "photo",
        name: "Photo",
        component: () => import("../views/Photo"),
        meta: {
          title: 'Zの个人博客-相册'
        }
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
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || 'Zの个人博客'
  next()
})

export default router
