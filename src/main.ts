import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'echarts'

import '@unocss/reset/tailwind.css'
import '~/styles/main.css'
import 'virtual:uno.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: routes => setupLayouts(routes),
})
const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
