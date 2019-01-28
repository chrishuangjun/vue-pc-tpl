import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () =>
        import(/* webpackChunkName: "HelloWorld" */ 'pages/HelloWorld'),
    },
  ],
})

export default router
