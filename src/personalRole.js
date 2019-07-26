/*
*  全局路由导航卫士模块：
*   控制从登录页面能不能进入到主页面去
* */

import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条组件
import 'nprogress/nprogress.css' // 进度条样式
import { getToken } from './untils/storage'
import getPageTitle from './untils/get-page-title'

NProgress.configure({ showSpinner: false }) // 进度条配置对象

const whiteList = ['/login', '/registry'] // 放过的白名单

router.beforeEach((to, from, next) => {
  // 进度条开始执行
  NProgress.start()

  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  // 获取 token的值作为判断有没有登录成功的条件
  const hasToken = getToken()
  // 如果成功登录
  if (hasToken) {
    if (to.path === '/login') {
      // 要去的页面是登录页面、进入到登录页面
      next({ path: '/' })
      NProgress.done()
    } else {
      // 要去的页面不是登录页面、需要获取用户信息，拿到 roles来匹配是可访问的路由菜单
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      // 如果角色集合有值
      if (hasRoles) {
        next()
      } else {
        try {
          // 如果角色集合没有值
          // 获取用户信息 ( 第一次肯定没有值 )
          // roles的数据结构： [ 'admin' ] 或者是 [ 'developer', 'editor' ]
          store.dispatch('GetUserInfo')
            .then(() => {
              const roles = store.getters.roles
              store.dispatch('GenerateRoutes', roles)
                .then(() => {
                  // 获取当前角色集合匹配到的路由菜单配置文件
                  const accessRoutes = store.state.permission.addRoutes
                  // 动态生成路由
                  router.addRoutes(accessRoutes)
                  // 官方写法： hack方法 确保 addRoutes已完成、保证不出错
                  next({ ...to, replace: true })
                })
            })
        } catch (error) {
          Message.error(error || '出现错误了')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 没有登录过，匹配放过白名单
    if (whiteList.indexOf(to.path) !== -1) {
      // 匹配到白名单的路由，放过
      next()
    } else {
      // 没匹配到的，全部重定向到登录页面
      // next(`/login?redirect=${to.path}`)
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 进度条结束执行
  NProgress.done()
})