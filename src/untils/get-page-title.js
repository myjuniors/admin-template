/*
*  获取页面的标题展示到浏览器顶部上
* */

const title = '后台管理系统模板'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}