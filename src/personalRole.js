/*
*  权限配置模块
* */

import router from './router'
// 进度条组件
import NProgress from 'nprogress'
// 进度条样式
import 'nprogress/nprogress.css'
// 进度条配置
NProgress.configure({ showSpinner: false })

// 全局路由导航卫士
router.beforeEach((to, from, next) => {
  NProgress.start()
  setTimeout(() => {
    next()
  }, 1500)
})

router.afterEach(() => {
  // 结束 Progress
  NProgress.done()
})
