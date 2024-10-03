import { createSSRApp } from 'vue'
import pinia from './store'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  // 以 SSR 激活模式创建一个应用实例
  const app = createSSRApp(App)
  // 使用pinia
  app.use(pinia)
  return {
    app,
  }
}
