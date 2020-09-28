# maoyanmovie

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


###  对于页面进行组件注册 注册后按照样式进行  改进  
```
    - 对于获取数据  看老师的接口文档  使用 fetch函数 进行获取数据  
    - 对fetch函数进行封装    封装到只需要输入接口路径   注意看封装方法 
```
```
    -对于滚动条  使用  
    async getList(){
          const res =await getIndexList()
          this.movieList=res .result.movieList
          //加载数据是异步操作  所以应该先加载数据完成之后  再加入bs
    //实例化    第一个参数时父元素  第二个参数 1对象 里面放配置

          //赋值操作是同步的 但是渲染操作时异步的    
         this.$nextTick(()=>{
             let bs = new BScroll('.wrapper', {
             //允许纵向滚动
           scrollY:true,
           click:true
        })
         })
          }
          
```

```
    上拉加载    pullingUp 事件    数据加载是异步操作  获取到数据后还要判断是否数量对上    


    hashchange事件  加上#就叫hash事件
```
### routerlink标签  用来引入      创建的是a标签 
### routerview标签  用来创建出口 
通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由：

给页面加过渡动效  方法 可以直接给routerview标签外面套一个transiton标签 利用name属性 去添加动画效果   这样是给所有路由都加上效果 
    还有一种是直接给单独的路由页面加  
    还有一种是给路由表中加入meta标签  在父组件中包裹routerview标签  然后用v-if判断    <transition name="fade">
      <router-view v-if="$route.meta.needTransiton"></router-view>
      </transition>
  <router-view v-if="!$route.meta.needTransiton"></router-view>



做一个加载中效果实在 需要的页面上最外层的div前面加一个div  进行判断 data中方定义一个方法  判断该方法true/false   在获取数据之前 加入 this.loading=true  //在获取到数据之前显示加载中
再获取数据之后在把他变为false

 // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  // },
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  // }

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



### 使用beforeRouteEnter获取数据
beforeRouteEnter(to,from,next) {
    getMovieInfo({id: to.params.id}).then(res=>{
      next(vm=>vm.setData(res))// 这个vm就相当于this
      // console.log(1);
    })
  
  },
 methods:{
      setData(res){
        this.discuss=res.discuss,//如果获取得到数据   那么保存进data中 
        this.movieInfo=res.movieInfo,
        this.praise=res.praise
        this.actorList=res.movieInfo.actorList
        console.log(this.actorList.pic)
            
      }
