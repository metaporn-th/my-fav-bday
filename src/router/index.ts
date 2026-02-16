import { createRouter, createWebHashHistory } from 'vue-router' // 1. เปลี่ยนเป็น Hash History
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
  // 2. ใช้ createWebHashHistory และใส่ base URL เข้าไป
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router