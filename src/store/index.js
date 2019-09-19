import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import permission from './modules/permission'
import { getToken, setToken, removeToken } from '../untils/storage'
import { resetRouter } from '@/router'
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
    async GetUserInfo ({ commit }) {
      const result = await reqGetUserInfo()
      if (result.resultCode === 0) {
        const userInfo = result.data
        commit(SAVE_USER_INFO, userInfo)
      }
    }
  }
})
