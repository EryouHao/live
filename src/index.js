import 'material-design-icons'
import 'material-design-icons/iconfont/material-icons.css'
import 'font-awesome/css/font-awesome.css'

import './assets/scss/main.scss'
import LButton from './components/LButton'
import LInput from './components/LInput'
import LSelect from './components/LSelect'
import LRadio from './components/LRadio'
import LCheckbox from './components/LCheckbox'
import LDatePicker from './components/LDatePicker'
import LTooltip from './components/LTooltip'
import LNotification from './components/LNotification'
import LForm from './components/LForm'
import LDialog from './components/LDialog'
import LTable from './components/LTable'
import LGrid from './components/LGrid'
import LTag from './components/LTag'
import LAlert from './components/LAlert'
import LDropdown from './components/LDropdown'

import ClickOutside from './directives/click-outside'

const components = [
  LButton,
  LInput,
  LSelect,
  LRadio,
  LCheckbox,
  LDatePicker,
  LTooltip,
  LNotification,
  LForm,
  LDialog,
  LTable,
  LGrid,
  LTag,
  LAlert,
  LDropdown,
]

const Live = {
  install(Vue, options) {
    Object.values(components).forEach((component) => {
      Vue.use(component)
      Vue.directive('click-outside', ClickOutside)
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Live)
}

export default Live
