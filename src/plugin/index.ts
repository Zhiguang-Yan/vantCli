import type { App } from 'vue'
import Vant, { Icon } from 'vant'
export function setupUI(app: App<Element>) {
  app.use(Vant)
}
export function setupIcons(app: App<Element>) {
  app.use(Icon)
}
