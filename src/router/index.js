import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/swiper',
    name: 'Swiper',
    component: () => import('@/views/swiper.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import('@/views/todoList.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search.vue')
  },
  {
    path: '/btn',
    name: 'BtnRadio',
    component: () => import('@/views/Radio.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('@/views/Counter.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('@/views/Calculator.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('@/views/loading.vue')
  },
  {
    path: '/area',
    name: 'area',
    component: () => import('@/views/AreaLinkage.vue')
  },
  {
    path: '/ruler',
    name: 'ruler',
    component: () => import('@/views/CsRuler.vue')
  },
  {
    path: '/collapse',
    name: 'collapse',
    component: () => import('@/views/collapse.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
