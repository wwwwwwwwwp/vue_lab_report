// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/common.css'
import '../static/css/custom.css'
import 'font-awesome/css/font-awesome.min.css'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入echarts做图表
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
