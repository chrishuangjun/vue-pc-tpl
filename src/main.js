// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { apiHttp } from './util/api/index';
import 'normalize.css';
import './assets/iconfont/iconfont.css';
import './mock';

Vue.config.productionTip = false;

Vue.prototype.$apiHttp = apiHttp;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
  created() {
    console.log(3);
    this.$apiHttp.login
      .login({
        username: 'duxy1',
        pwd: 'Mid201608',
      })
      .then(res => {
        console.log(res);
      });
  },
});