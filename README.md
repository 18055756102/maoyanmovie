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
```
### routerlink标签  用来引入   
### routerview标签  用来创建出口 
