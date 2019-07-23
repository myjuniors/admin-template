import Vue from 'vue'
import Router from 'vue-router'
import personRoutes from './modules/person'

Vue.use(Router)

export default new Router({
  mode: 'history', // 开启 history 模式需要服务端支持
  routes: personRoutes
})
