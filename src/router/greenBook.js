export default [
  {path: "/", component: () => import('@/views/skins/GreenBook/index.vue')},
  {path: "/archive", component: () => import('@/views/skins/GreenBook/archives.vue')},
  {path: "/download", component: () => import('@/views/skins/GreenBook/download.vue')},
  {
    path: "/article-detail/:id",
    component: () => import('@/views/skins/GreenBook/article.vue'),
    props: true
  },
  {path: "/links", component: () => import('@/views/skins/GreenBook/links.vue')},
  {path: "/movies", component: () => import('@/views/skins/GreenBook/movies.vue')},
  {path: "/photos", component: () => import('@/views/skins/GreenBook/photos.vue')},
  {path: "/about", component: () => import('@/views/skins/GreenBook/about.vue')},
  // {path: "/cross", component: () => import('@/views/skins/GreenBook/links.vue')},
]
