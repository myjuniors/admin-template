/*
*   前台存储的一些方式：
*     包括： 1. cookie 的存储方式  2. localStorage 的存储方式
* */

import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

