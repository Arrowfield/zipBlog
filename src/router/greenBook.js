export default [
  {path: "/", component: () => import('@/views/skins/GreenBook/index.vue')},
  {path: "/archive", component: () => import('@/views/skins/GreenBook/archives.vue')},
  {path: "/download", component: () => import('@/views/skins/GreenBook/download.vue')},
  {path: "/article-detail/:id", component: () => import('@/views/skins/GreenBook/article.vue')},

]