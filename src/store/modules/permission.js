import { asyncRoutes, constantRoutes } from '../../router'
import { SET_ROUTES } from '../mutation-types'

/**
 * 判断当前登录的用户有没有权限访问页面
 * @param roles 角色集合
 * @param route 路由表集合
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 从动态要挂载的路由表中过滤掉与用户权限不匹配的
 * @param routes 动态要挂载的路由表
 * @param roles 角色集合
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    [SET_ROUTES]: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes
        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        commit(SET_ROUTES, accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
}
export default permission