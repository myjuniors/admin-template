import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
