import LDropdown from './LDropdown.vue'
import LDropdownList from './LDropdownList.vue'
import LDropdownItem from './LDropdownItem.vue'

export default (Vue) => {
  Vue.component(LDropdown.name, LDropdown)
  Vue.component(LDropdownList.name, LDropdownList)
  Vue.component(LDropdownItem.name, LDropdownItem)
}
