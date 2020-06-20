import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './base/FilterGlobal'
import './base/UtilGlobal'
import './static/css/base.css'
import './static/css/common.css'

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {

  console.log("发生错误" + info);
  console.log(err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



