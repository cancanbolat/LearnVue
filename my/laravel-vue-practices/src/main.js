import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')