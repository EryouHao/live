import 'material-design-icons'
import 'material-design-icons/iconfont/material-icons.css'
import 'font-awesome/css/font-awesome.css'

import './assets/scss/main.scss'
import LButton from './components/LButton'
import LInput from './components/LInput'
import LSelect from './components/LSelect'

const components = [
  LButton,
  LInput,
  LSelect,
]

const Live = {
  install(Vue, options) {
    Object.values(components).forEach((component) => {
      Vue.use(component)
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Live)
}

export default Live
