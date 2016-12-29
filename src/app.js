import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// create the app instance.
// here we inject the router to all child components,
// making them available everywhere as `this.$router`.
const app = new Vue({
  router,
  ...App
})

// actually mount to DOM
app.$mount('#app')
