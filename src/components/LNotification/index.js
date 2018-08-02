import Vue from 'vue'
import LNotification from './LNotification.vue'
import isVNode from '../../helpers/is-vnode'

const NotificationConstructor = Vue.extend(LNotification)

let instance

const Notification = (options) => {
  instance = new NotificationConstructor({
    data: options,
  })
  // TODO: 更严谨的类型判断
  if (isVNode(options.content)) {
    instance.$slots.default = [options.content]
    options.content = 'render by vnode'
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

  return instance.vm
}

// 带类型通知
const notificationTypes = ['success', 'error']
notificationTypes.forEach((type) => {
  Notification[type] = (options) => {
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        title: options,
      }
    }
    options.type = type
    return Notification(options)
  }
})

export default {
  install: () => {
    Vue.prototype.$notification = Notification
  },
}
