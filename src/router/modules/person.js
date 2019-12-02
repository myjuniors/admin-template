// 引入路由组件
import Layout from '../../views/Layout/Layout.vue'
import ActLine from '../../views/Layout/MyWorkBench/ActLine/ActLine.vue'
import DiyTable from '../../views/Layout/MyWorkBench/DiyTable/DiyTable.vue'
import VehicleList from '../../views/Layout/TaskList/VehicleList/VehicleList.vue'
import VehicleData from '../../views/Layout/DataScreening/VehicleData/VehicleData.vue'
import RolesConfig from '../../views/Layout/AuthorityManagement/RolesConfig/RolesConfig.vue'
import AccountConfig from '../../views/Layout/PersonalCenter/AccountConfig/AccountConfig.vue'

const personRoutes = [
  {
    path: '/myWorkBench',
    component: Layout,
    redirect: '/myWorkBench/actLine',
    alwaysShow: true, // 永久显示
    name: 'MyWorkBench',
    meta: {
      title: '可视化图表',
      roles: ['admin', 'person']
    },
    children: [
      {
        path: 'actLine',
        component: ActLine,
        name: 'ActLine',
        meta: {
          title: '动态折线',
          roles: ['admin', 'person']
        }
      },
      {
        path: 'diyTable',
        component: DiyTable,
        name: 'DiyTable',
        meta: {
          title: '自定义表单',
          roles: ['admin', 'person']
        }
      },
    ]
  },
  {
    path: '/taskList',
    component: Layout,
    redirect: '/taskList/vehicleList',
    alwaysShow: true, // 永久显示
    name: 'TaskList',
    meta: {
      title: '组件示例',
      roles: ['person']
    },
    children: [
      {
        path: 'vehicleList',
        component: VehicleList,
        name: 'VehicleList',
        meta: {
          icon: 'el-icon-menu',
          title: '表单验证',
          roles: ['person']
        }
      }
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
      roles: ['admin', 'person']
    },
    children: [
      {
        path: 'accountConfig',
        component: AccountConfig,
        name: 'AccountConfig',
        meta: {
          title: '账号设置',
          roles: ['admin', 'person']
        }
      }
    ]
  }
]


export default personRoutes