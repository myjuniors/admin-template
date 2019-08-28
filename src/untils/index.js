import * as Validates from './validates'

/* 生成表单自定义校验函数 */
export const formValidateDiy = (key, msg) => (rule, value, cb) => {
  if (Validates[key](value)) {
    cb()
  } else {
    cb(new Error(msg))
  }
}