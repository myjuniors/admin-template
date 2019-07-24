/*
  能发送异步 ajax请求的函数模块
  封装 axios 库
  函数的返回值是 promise对象
  1. 优化 1: 统一处理请求异常 ?
      在外层包一个自己创建的 promise对象
      在请求出错时, 不 reject(error), 而是显示错误提示
  2. 优化 2: 异步得到不是 response, 而是 response.data
    在请求成功 resolve时: resolve(response.data)
 */

import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

import router from '../router'
import { getToken, removeToken } from '../untils/storage'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // 请求的基础路径 base_url
  timeout: 40000 // 请求超时时间
})

/* 配置 ajax 请求拦截器 */

// request 拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // 控制台输出请求错误、方便调试
    console.log(error)
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非 0是抛错 可自己结合业务进行修改
     */
    const res = response.data
    if (res.resultCode !== 0) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(res)
    } else {
      // 不能返回 response.data 这是响应回来的 data的值
      return response
    }
  },
  error => {
    // 控制台输出请求响应错误、方便排查后台问题
    console.log('err' + error)
    if (error.response.status === 401) {
      // 401: 非法的 token
      MessageBox.confirm(
        '你已被登出，可以取消继续留在该页面，或者重新登录',
        '确定登出',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        // 清除 cookie里面存储的 token的值
        removeToken()
        // 跳转到 登录界面
        router.push('/login')
        Location.reload()
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      });
    }
    return Promise.reject(error)
  }
)


export default function ajax (url, data = {}, type = 'GET') {

  return new Promise (resolve => {
    let promise
    // 1. 执行异步ajax请求
    if (type === 'GET') { // 发GET请求
      promise = service.get(url, { // 配置对象
        params: data // 指定请求参数
      })
    } else { // 发POST请求
      promise = service.post(url, data)
    }
    promise
    .then(response => {
      // 2. 如果成功了, 调用resolve(value)
      resolve(response.data)
    })
    .catch(error => {
      // 3. 如果失败了, 不调用 reject(reason), 而是提示异常信息
      // reject(error)
      this.$message.error('请求出错了: ' + error.message);
    })
  })
}
