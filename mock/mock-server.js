import Mock from 'mockjs'

Mock.setup({
  timeout: '2000'
})

// 公共接口数据

import login from './common/login.json'

/*
*  Mock.mock(url, type, callBack)
*  1. url 请求的地址 如: /login
*  2. type 请求方式  如: get post put delete restful api 语义化 增删改查四个操作
*  3. callBack 回调函数，默认接收一个 req参数， req对象包含了从前台传过来的请求参数
*  4. return data 返回值，根据请求对象的里面的数据，做一定的业务处理，处理完成返回要返回的数据
* */

Mock.mock('/login', 'post', function (req) {
  // 拿到请求体/查询字符串参数
  // reqBody.body 拿到的是一个 json字符串，转换为 js对象 JSON.parse()
  console.log(req.url, JSON.parse(req.body), req.type);
  // 这里根据请求参数做对应的业务逻辑的处理，处理好了返回给前台数据内容
  return login
});

// 注册接口
import userData from './common/user.json'

Mock.mock('/getUserInfo', userData)


export default Mock
