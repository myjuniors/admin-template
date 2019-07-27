import Vue from 'vue'
import ElementUI from 'element-ui'
import VueAMap from 'vue-amap'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import './styles/common/reset.css'
import './plugins/element.js'
import './personalRole'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '230794681ae8e217a40f34801101468b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
