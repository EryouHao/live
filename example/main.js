import Vue from 'vue'
import router from '../example/router'
import App from '../example/App.vue'
import Live from '../src/components/index'

console.log('Live', Live)

Vue.use(Live)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
