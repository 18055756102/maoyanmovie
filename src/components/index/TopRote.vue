<template>
<!-- 最受好评电影组件 -->
   <div class="top-rote">
      <p> 最受好评的电影</p>
      <div class="ul-wrap">
         <ul >
         <li 
         v-for="item in topRotedList" 
         :key="item.id"
         @click="toDetail(item.id)"
         >
            <div class="img-wrap">
               <img :src="item.img" alt="">
               <h5>{{item.title}}</h5>
            </div>
         </li>
      </ul>
      </div>
      
   </div>
</template>

<script>
import BScroll from 'better-scroll'
// import { getTopRated } from '../../utils/api';
export default {
   props:['topRotedList'],
   data(){
      return{
         // topRotedList:[]
      }
   },
   watch:{
     async topRotedList(){
        await this.$nextTick() 
          let bs = new BScroll('.ul-wrap', {
             //允许纵向滚动
           scrollX:true,
           scrollY:false,
           click:true
        })
      }
   },
   created(){
      //  this.getTopRoteList()
   },
   methods:{
      toDetail(id){
         this.$router.push('/detail/'+id)
      }
   //  async getTopRoteList(){
   //       //使用fetch请求 
   //    // fetch('http://www.pudge.wang:3002/api/home/topRatedMovies')
   //    // .then(response=>response.json())
   //    // .then(myJson=>{
   //    //    if(myJson.status===0){
   //    //       this.topRotedList = myJson.result.result;
   //    //    // console.log( this.topRotedList )
   //    //    }
   //    // });
   //    const res=await getTopRated()
   //    this.topRotedList = res.result.result;
   //    }
   }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
   .top-rote{
      width: 100%;
      height: 200px;
      padding: 12px;
      background: white;
      
      p{
         font-size: 14px;
         width: 100%;
         height: 20px;
      }
      .ul-wrap{
         width: 100%;
         height: 140px;
           margin-top: 5px;
         // background: #cccccc;
         overflow:hidden ;
      }
      ul{
         display: inline-flex;
         li{
            width: 85px;
            height: 140px;
            // background: pink;
            margin-right: 10px;
            flex-shrink: 0;//阻止默认压缩 
            .img-wrap{
               width: 85px;
               height: 115px;
               img{
                  width: 100%;
                  height: 100%;
               }
               h5{
                  // margin-top: 5px;
                  font-size: 13px;
                  color: #222;
                  margin-bottom: 3px;
                  //解决字体超出  设置省略号
                  width: 100%;
                  overflow: hidden;
                  white-space: nowrap;//不换行 
                  text-overflow: ellipsis;
               }
            }
         }
      }
   }
</style>