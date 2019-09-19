/* 主路由模块包括：
*     平台的路由文件模块
*     个人版商户的路由文件模块
*     企业版商户的路由文件模块
* */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import personRoutes from './modules/person'

import Layout from '../views/Layout/Layout.vue'
import Login from '../views/Login/Login.vue'
import Registry from '../views/Registry/Registry.vue'
import NoAccess from '../views/NoAccess/NoAccess.vue'
import NoFound from '../views/NoFound/NoFound.vue'

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
    path: '/404',
    component: NoFound,
    hidden: true
  },
  {
    path: '/401',
    component: NoAccess,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/myWorkBench'
  },
]

const createRouter = () => new Router({
  // mode: 'history', // 开启 history 模式需要服务端支持
  routes: constantRoutes,
  // 防止 在A页面的某个位置跳转到B页面之后，防止B页面还停留在A页面的位置处
  scrollBehavior: () => ({y: 0})
})

const router = createRouter()
/* 
  通过hack的方式，处理动态清除注册的路由
  这种方式不需要重新刷新页面
*/
export function resetRouter () {
  // 创建一个空路由对象
  const newRouter = createRouter()
  // 将已经添加的路由的元信息meta 重置为 空
  router.matcher = newRouter.matcher
  console.log('重置了动态添加的路由')
}

export default router
export const asyncRoutes = personRoutes
