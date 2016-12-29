import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import BeerView from '../views/BeerView.vue'
import HomeView from '../views/HomeView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/Brewery', component: AboutView },
    { path: '/Contact', component: ContactView },
    { path: '/Beer', component: BeerView },
    { path: '/Home', component: HomeView  },
    { path: '/', redirect: '/Home'  }
  ]
})
