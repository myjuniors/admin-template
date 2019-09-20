import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import permission from './modules/permission'
import { getToken, setToken, removeToken } from '../untils/storage'
import router, { resetRouter } from '@/router'
import {
  SET_TOKEN,
  SAVE_USER_INFO
} from './mutation-types'
import {
  reqLogin,
  reqGetUserInfo
} from '../api/common'

export default new Vuex.Store({
  modules: {
    permission
  },
  state: {
    token: getToken(),
    roles: [],
    userInfo: {}
  },
  getters: {
    token: state => state.token,
    roles: state => state.roles
  },
  mutations: {
    [SET_TOKEN]: (state, token) => {
      state.token = token
      setToken(token)
    },
    [SAVE_USER_INFO]: (state, userInfo) => {
      state.userInfo = userInfo
      state.roles = userInfo.roles
    }
  },
  actions: {
    async Login ({ commit }, reqData) {
      const result = await reqLogin(reqData)
      if (result.resultCode === 0) {
        const { token } = result.data
        commit(SET_TOKEN, token)
      }
    },
    Logout ({ commit }) {
      commit(SET_TOKEN, '')
      const userInfo = {
        roles: []
      }
      commit(SAVE_USER_INFO, userInfo)
      removeToken()
      // 重置动态添加的路由表，这样就不需要重新刷新页面，才能更新路由表了
      resetRouter()
    },
    ResetToken ({ commit }) {
      commit(SET_TOKEN, '')
      const userInfo = {
        roles: []
      }
      commit(SAVE_USER_INFO, userInfo)
      removeToken()
    },
    async GetUserInfo ({ commit }) {
      const result = await reqGetUserInfo()
      if (result.resultCode === 0) {
        const userInfo = result.data
        commit(SAVE_USER_INFO, userInfo)
      }
    },
    async ChangeUserRole ({ commit, dispatch }, { role }) {
      const token = role + '-token'

      commit(SET_TOKEN, token)
      setToken(token)
      // 手动写死了，按理说切换角色的时候，是去通知服务器记录操作，重新获取用户信息
      const roles = ['person']
      resetRouter()

      // 重新获取路由表
      const accessRoutes = await dispatch('GenerateRoutes', roles)
      console.log(accessRoutes)
      // 重新添加动态路由
      router.addRoutes(accessRoutes)
    }
  }
})
