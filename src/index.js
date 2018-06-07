import * as components from './components'

const Live = {
  install(Vue, options) {
    Object.values(components).forEach((component) => {
      console.log(component)
      Vue.use(component)
    })
  },
}
console.log(Live)
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Live)
}

export default Live
