import 'material-design-icons'
import 'material-design-icons/iconfont/material-icons.css'

import './assets/scss/main.scss'
import LButton from './components/LButton'

const components = [
  LButton,
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  LButton,
}
