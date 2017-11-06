import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

/**
 * Import components
 */
import Home from './component/Home'
import Login from './component/Login'

/**
 * Init routes
 */
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

/**
 * Use modules for Vue
 */
Vue.use(VueRouter)
Vue.use(Vuex)

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const app = new Vue({
      router
    }).$mount('#app')
  }
};
