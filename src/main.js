// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Mui from 'mui'
import { Spin } from 'mui'
import 'mui/dist/styles/mui.css'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import { apiHttp } from './util/api/index'
import 'normalize.css'
import './assets/iconfont/iconfont.css'
// import './mock';
import vars from './assets/css/var.scss'

// Vue.use(Element)
// Vue.use(Mui)

Vue.config.productionTip = false

Vue.prototype.$apiHttp = apiHttp
Vue.prototype.$vars = vars
Vue.prototype.$Spin = Spin
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  created () {
    console.log(3)
    this.$apiHttp.login
      .login({
        username: 'duxy1',
        pwd: 'Mid201608',
        isShowLoading: true
      })
      .then(res => {
        console.log(res)
      })
  }
})
