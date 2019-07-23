// 引入路由组件
import Home from '../../views/Home/Home.vue'
import Login from '../../views/Login/Login.vue'
import Registry from '../../views/Registry/Registry.vue'

import MyWorkBench from '../../views/Home/MyWorkBench/MyWorkBench.vue'
import DataScreening from '../../views/Home/DataScreening/DataScreening.vue'
import AuthorityManagement from '../../views/Home/AuthorityManagement/AuthorityManagement.vue'
import TaskList from '../../views/Home/TaskList/TaskList.vue'
import PersonalCenter from '../../views/Home/PersonalCenter/PersonalCenter.vue'

const personRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registry',
    name: 'Registry',
    component: Registry
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'myWorkBench',
        name: 'MyWorkBench',
        component: MyWorkBench,
        meta: {
          title: '我的工作台'
        }
      },
      {
        path: 'taskList',
        name: 'TaskList',
        component: TaskList,
        meta: {
          title: '任务列表'
        }
      },
      {
        path: 'dataScreening',
        name: 'DataScreening',
        component: DataScreening,
        meta: {
          title: '数据总览'
        }
      },
      {
        path: 'authorityManagement',
        name: 'AuthorityManagement',
        component: AuthorityManagement,
        meta: {
          title: '权限管理'
        }
      },
      {
        path: 'personalCenter',
        name: 'PersonalCenter',
        component: PersonalCenter,
        meta: {
          title: '个人中心'
        }
      },
    ]
  }
]

export default personRoutes