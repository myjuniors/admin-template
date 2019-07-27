// 引入路由组件
import Layout from '../../views/Layout/Layout.vue'
import CheckTask from '../../views/Layout/MyWorkBench/CheckTask/CheckTask.vue'
import VehicleList from '../../views/Layout/TaskList/VehicleList/VehicleList.vue'
import BrandList from '../../views/Layout/TaskList/BrandList/BrandList.vue'
import VehicleData from '../../views/Layout/DataScreening/VehicleData/VehicleData.vue'
import RolesConfig from '../../views/Layout/AuthorityManagement/RolesConfig/RolesConfig.vue'
import AccountConfig from '../../views/Layout/PersonalCenter/AccountConfig/AccountConfig.vue'

const personRoutes = [
  {
    path: '/myWorkBench',
    component: Layout,
    redirect: '/myWorkBench/checkTask',
    alwaysShow: true, // 永久显示
    name: 'MyWorkBench',
    meta: {
      title: '我的工作台',
      roles: ['admin']
    },
    children: [
      {
        path: 'checkTask',
        component: CheckTask,
        name: 'CheckTask',
        meta: {
          title: '拖拽选址',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/taskList',
    component: Layout,
    redirect: '/taskList/vehicleList',
    alwaysShow: true, // 永久显示
    name: 'TaskList',
    meta: {
      title: '任务列表',
      roles: ['admin']
    },
    children: [
      {
        path: 'vehicleList',
        component: VehicleList,
        name: 'VehicleList',
        meta: {
          icon: 'el-icon-menu',
          title: '车辆列表',
          roles: ['admin']
        }
      },
      {
        path: 'brandList',
        component: BrandList,
        name: 'BrandList',
        meta: {
          icon: 'el-icon-menu',
          title: '品牌列表',
          roles: ['admin']
        }
      },
    ]
  },
  {
    path: '/dataScreening',
    component: Layout,
    redirect: '/dataScreening/vehicleData',
    alwaysShow: true, // 永久显示
    name: 'DataScreening',
    meta: {
      title: '数据总览',
      roles: ['admin']
    },
    children: [
      {
        path: 'vehicleData',
        component: VehicleData,
        name: 'VehicleData',
        meta: {
          title: '车辆数据',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/authorityManagement',
    component: Layout,
    redirect: '/authorityManagement/rolesConfig',
    alwaysShow: true, // 永久显示
    name: 'AuthorityManagement',
    meta: {
      title: '权限管理',
      roles: ['admin']
    },
    children: [
      {
        path: 'rolesConfig',
        component: RolesConfig,
        name: 'RolesConfig',
        meta: {
          title: '角色配置',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/personalCenter',
    component: Layout,
    redirect: '/personalCenter/accountConfig',
    alwaysShow: true, // 永久显示
    name: 'PersonalCenter',
    meta: {
      title: '个人中心',
      roles: ['admin']
    },
    children: [
      {
        path: 'accountConfig',
        component: AccountConfig,
        name: 'AccountConfig',
        meta: {
          title: '账号设置',
          roles: ['admin']
        }
      }
    ]
  }
]


export default personRoutes