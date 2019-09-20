import store from '../store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example 像权限指令一样使用
 */
export default function checkPermission (value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value

    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error(`需要对应的角色! Like v-if="checkPermission(['admin'])"`)
    return false
  }
}
