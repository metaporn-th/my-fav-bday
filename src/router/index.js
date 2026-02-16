import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import DressUpStarter from '@/pages/dressUpStarter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dress-up-starter',
    name: 'DressUpStarter',
    component: DressUpStarter,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
