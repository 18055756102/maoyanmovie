<template>
  <div id="app">
   <!-- <movie-header :showBack="false"> </movie-header>
   <app-item></app-item>
   <div class="wrapper">
     <div>
       <first-tabs></first-tabs>
     <top-rote :topRotedList="topRotedList  "></top-rote>
     <movie-list :movieList="movieList" :total="total"></movie-list> 
     </div>
   </div> -->
   <router-view></router-view>
   <bottom-item></bottom-item>
  </div>
</template>

<script>

  // import { getTopRated ,getIndexList,pullUpLoadList} from './utils/api';
 
//头部组件
//   import MovieHeader from "./components/index/Header"
// //热映列表
//   import FirstTabs from "./components/index/FirstTabs"
// // 好评电影
//   import TopRote from "./components/index/TopRote"
// //电影列表
//  import MovieList from "./components/index/MovieList"
//  //app客户端
//   import AppItem from "./components/index/AppItem"
//底部 
  import BottomItem from "./components/public/BottomItem"
//引入betterscroll
  // import BScroll from 'better-scroll'
  // let bs;

  export  default{
    components:{
      // MovieHeader,
      // FirstTabs,
      // TopRote,
      // MovieList,
      // AppItem,
      BottomItem
    },
    data(){
      return{
        // topRotedList:[],
        // movieList:[],
        // // count:0
        // movieIds:[],
        // //第一次获取的12个数据 定义一个index为12  就是取地12个数据以后的数据
        // index:12,
        // total:0
       
      }
    },
  
  mounted(){
      // this.getTopRoteList()
      // this.getList()
    //加载数据是异步操作  所以应该先加载数据完成之后  再加入bs
    //实例化    第一个参数时父元素  第二个参数 1对象 里面放配置
    
  },
  // methods:{
  //   //子组件侦听器侦测到数据改变  通过子组件向父组件传递信息
  //   change(val){
  //     // bs.finishPullUp()
  //     if(val !== 0){
  //       bs.refresh()//每次滑动后重新计算滚动距离
  //       bs.finishPullUp()
  //     }
  //     // console.log('val',val)
  //   },

  //     //上拉加载函数  加载更多的数据
  //       async pullUpLoad(){
  //         const ids=this.movieIds.slice(this.index,this.index+10);
  //         const str=ids.join()//将获取到的ids转换成字符串
  //         const res=await pullUpLoadList({
  //           ids:str
  //         })
  //         this.index+=10
  //         this.movieList=this.movieList.concat(res.result)
  //       },


  //     async getTopRoteList(){
  //       const res=await getTopRated()
  //       this.topRotedList = res.result.result;
  //     },

  //     //获取首页列表   这是第一次数据渲染
  //     async getList(){
  //         const res =await getIndexList()
  //         //取到所有数据的ids
  //         this.movieIds=res.result.movieIds
  //         //获取每次电影数据
  //         this.movieList=res .result.movieList
  //         //获取电影总条数
  //         this.total=res.result.total
  //         //加载数据是异步操作  所以应该先加载数据完成之后  再加入bs
  //        //实例化    第一个参数时父元素  第二个参数 1对象 里面放配置
  //         //赋值操作是同步的 但是渲染操作时异步的  
          
  //         //等待数据加载完成
  //       await this.$nextTick( )
  //          bs = new BScroll('.wrapper', {
  //            //允许纵向滚动
  //         scrollY:true,
  //         click:true,
  //         //允许上拉加载
  //         pullUpLoad: true
  //         })
  //         bs.on('pullingUp',async()=>{//请求数据  更新数据列表

  //         //判断当前长度   是否已经拉到最后了   跟一开始返回的toutal总长度比较
  //         if(this.movieList.length<this.total){
  //             await this.pullUpLoad()
  //          bs.refresh()//每次滑动后重新计算滚动距离  
  //          bs.finishPullUp()//表示这次上拉结束  可以开始下一次
           
  //         }
          
  //       })
    
         
  //   }
  // },
};


</script>

<style lang="scss" scoped>
#app{
  padding-top: 50px;
  //  padding-bottom: 50px;
  background: #f5f5f5;
  // position: relative;
  // .wrapper{
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 108px;
  //   bottom:50px;
  //   overflow:hidden;
  // }
}
</style>
