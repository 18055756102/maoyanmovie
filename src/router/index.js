import Vue from "vue";
//引入vue-router
import VueRouter from 'vue-router';

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
            path: '/hot',
            component: () =>
                import ('../components/index/Hot.vue')
        }]

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
        path: '*',
        component: () =>
            import ('../views/NotFound')
    }
]

//设置实例化
const router = new VueRouter({
    routes
})


//将这个router暴露给全局
export default router