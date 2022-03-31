import { createStore } from 'vuex'
import type { App } from 'vue'
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
})
export function setupStore(app: App<Element>) {
  app.use(store)
}
export { store }
