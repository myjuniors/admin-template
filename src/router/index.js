/* 主路由模块包括：
*     平台的路由文件模块
*     个人版商户的路由文件模块
*     企业版商户的路由文件模块
* */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import personRoutes from './modules/person'

import Login from '../views/Login/Login.vue'
import Registry from '../views/Registry/Registry.vue'
import NoAccess from '../views/Registry/Registry.vue'
import NoFound from '../views/Registry/Registry.vue'

export const constantRoutes = [
  // 公共的页面
  {
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/registry',
    component: Registry,
    hidden: true
  },
  {
    path: '/401',
    component: NoAccess,
    hidden: true
  },
  {
    path: '/404',
    component: NoFound,
    hidden: true
  }
]

export default new Router({
  mode: 'history', // 开启 history 模式需要服务端支持
  routes: constantRoutes
})

export const asyncRoutes = personRoutes
