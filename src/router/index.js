import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

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
        }
    ]
});

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

export default router;
