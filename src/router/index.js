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

    //这是下面五个选项的路由  
    {
        path: '/video',
        component: () =>
            import ('../views/Video.vue'),
        meta: {
            title: '猫眼小电影'
        }
        // 这是修改每个不同页面浏览器标题的不同


    },
    {
        path: '/show',
        component: () =>
            import ('../views/Show.vue'),
        meta: {
            title: '猫眼小电影'
        }
        // meta: { requiresAuth: true } //代表是否需要登陆的意思

        //这是路由独享守卫   只需要在单独的路由内进行设置 即可  表示支队这一个路由器作用
        // beforeEnter: (to, from, next) => {

        //     if (localStorage.getItem('token')) {
        //         //如果有token说明已经登陆过了
        //         next()
        //     } else {
        //         //如果没有token挑战到登录页
        //         next('/login')
        //     }

        // }

    },
    {
        path: '/mini-video',
        component: () =>
            import ('../views/MiniVideo.vue'),
        // meta: { requiresAuth: true } //代表是否需要登陆的意思
        meta: {
            title: '猫眼小电影'
        }

    },
    {
        path: '/mine',
        component: () =>
            import ('../views/Mine.vue'),
        meta: {
            title: '猫眼小电影'
        }

    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () =>
            import ('../views/Detail.vue'),
        meta: {
            needTransiton: true,
            title: '猫眼小电影'
        }
    },
    {
        path: '/cities',
        component: () =>
            import ('../views/Cities.vue'),
        meta: {
            needTransiton: true,
            title: '猫眼小电影'
        }
    },
    {
        path: '/login',
        component: () =>
            import ('../views/Login.vue')
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


// 全局前置守卫
router.beforeEach((to, from, next) => {
        if (to.meta.requiresAuth) {
            if (localStorage.getItem('token')) {
                // 如果有token，说明登录过了
                document.title = to.meta.title ? to.meta.title : '猫眼电影'
                next()
            } else {
                // 如果没有token，那么跳到登录页
                next('/login')
            }
        }
        document.title = to.meta.title ? to.meta.title : '猫眼电影'
        next()
    })
    // //全局后置钩子
    // router.afterEach((to, from) => {

//     })
//将这个router暴露给全局
export default router