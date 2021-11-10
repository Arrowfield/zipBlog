export default [
  {path: "/", component: () => import('@/views/skins/Nexmoe/index.vue')},
  // {path: "/archive", component: () => import('@/views/skins/Nexmoe/archives.vue')},
  // {path: "/download", component: () => import('@/views/skins/Nexmoe/download.vue')},
  {path: "/article/:id", component: () => import('@/views/skins/Nexmoe/article.vue')},
  {path: "/links", component: () => import('@/views/skins/Nexmoe/links.vue')},
  {path: "/tags", component: () => import('@/views/skins/Nexmoe/tags.vue')},
  {path: "/about", component: () => import('@/views/skins/Nexmoe/about.vue')},
  {path: "/address", component: () => import('@/views/skins/Nexmoe/address.vue')},
  {path: "/photos", component: () => import('@/views/skins/Nexmoe/photos.vue')},
  {path: "/mood", component: () => import('@/views/skins/Nexmoe/mood.vue')},
]
