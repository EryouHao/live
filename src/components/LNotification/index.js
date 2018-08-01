import Vue from 'vue'
import LNotification from './LNotification.vue'

const NotificationConstructor = Vue.extend(LNotification)

let nId = 1
let instance

const Notification = ({ title = '', content = '' }) => {
  const id = `live-notification${nId += 1}`
  instance = new NotificationConstructor({
    data: {
      title,
      content,
    },
  })
  instance.id = id
  instance.vm = instance.$mount()
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  document.body.appendChild(instance.dom)
  instance.dom.style.zIndex = nId + 1001

  // TODO: 多条通知位置下排, 通知类型：success、error、info
  return instance.vm
}
export default {
  install: () => {
    Vue.prototype.$notification = Notification
  },
}

