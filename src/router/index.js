import Vue from "vue";
//引入vue-router
import VueRouter from 'vue-router';

// 去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

//注册路由
const routes = [{
        //重定向
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () =>
            import ('../views/Index.vue'),
        //嵌套子路由 
        children: [{
                path: '/index',
                redirect: '/hot'
            },
            {
                path: '/hot',
                component: () =>
                    import ('../components/index/Hot.vue')
            },
            {
                path: '/cinema',
                component: () =>
                    import ('../components/index/Cinema.vue')
            },
            {
                path: '/wait',
                component: () =>
                    import ('../components/index/Wait.vue')
            },
            {
                path: '/classic',
                component: () =>
                    import ('../components/index/Classic.vue')
            }
        ]
    },
    {
        path: '/video',
        component: () =>
            import ('../views/Video.vue')

    },
    {
        path: '/show',
        component: () =>
            import ('../views/Show.vue')

    },
    {
        path: '/mini-video',
        component: () =>
            import ('../views/MiniVideo.vue')

    },
    {
        path: '/mine',
        component: () =>
            import ('../views/Mine.vue')

    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () =>
            import ('../views/Detail.vue')
    },
    {
        path: '*',
        component: () =>
            import ('../views/NotFound.vue')
    },

]

//设置实例化
const router = new VueRouter({
    routes
})


//将这个router暴露给全局
export default router