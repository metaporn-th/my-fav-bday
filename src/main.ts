import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import './assets/main.css'
import router from './router'

const app =
createApp(App)
  .use(router)
  .use(createPinia())// Add your router here if you have one
  .mount('#app')

