/*
  Created by ZhangYang in 2019/07/25
  ContactEmail: 18438140598@163.com
  作用： 封装的公共的前台请求模块
*/

import ajax from './ajax'

// 登录
export const reqLogin = (reqData) => ajax('/login', reqData, 'POST')

// 注册
export const reqRegistryAccount = (reqData) => ajax('/registry', reqData, 'POST')

// 用户信息
export const reqGetUserInfo = () => ajax('/getUserInfo')