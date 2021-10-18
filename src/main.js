import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "./assets/scss/style.scss"
import HttpService from "./mixins/http-service"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
HttpService.setupInterceptors()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
