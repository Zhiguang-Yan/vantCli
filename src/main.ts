import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupUI, setupIcons } from './plugin'
import { setupStore } from './store'
import 'lib-flexible/flexible'
import './styles/index.scss'
;(function initApp() {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  setupUI(app)
  setupIcons(app)
  app.mount('#app')
})()
