import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: () =>
        import(/* webpackChunkName: "HelloWorld" */ 'pages/HelloWorld'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/401',
      component: () => import('@/pages/errorPage/401'),
      name: 'Page401',
      meta: { title: 'page401', noCache: true }
    },
    {
      path: '/404',
      component: () => import('@/pages/errorPage/404'),
      name: 'Page404',
      meta: { title: 'page404', noCache: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
