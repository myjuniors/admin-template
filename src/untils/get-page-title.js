/*
*  获取页面的标题展示到浏览器顶部上
* */

const title = 'admin-template'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}