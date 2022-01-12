import Vue from 'vue'
import App from './App.vue'

//Filters
Vue.filter("toLowerCaseFilter", (value) => {
  return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
