import Vue from 'vue'
import LNotification from './LNotification.vue'

const NotificationConstructor = Vue.extend(LNotification)

let instance

const Notification = (options) => {
  instance = new NotificationConstructor({
    data: options,
  })
  // TODO: 更严谨的类型判断
  if (typeof options.content === 'object') {
    instance.$slots.default = [options.content]
    options.content = ''
  }
  instance.vm = instance.$mount()
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  
  let notificationWrapper = document.querySelector('.live-notification-wrapper')
  if (!notificationWrapper) {
    const div = document.createElement('div')
    div.className = 'live-notification-wrapper'
    document.body.appendChild(div)
    notificationWrapper = document.querySelector('.live-notification-wrapper')
  }
  notificationWrapper.appendChild(instance.dom)

  // TODO: 通知类型：success、error、info
  return instance.vm
}

export default {
  install: () => {
    Vue.prototype.$notification = Notification
  },
}
