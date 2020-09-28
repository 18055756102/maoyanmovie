<template>
    <div class="app-style">
      <!-- <div v-if="loading">加载中个</div> -->
      
      
      <main >
        <app-item></app-item>
        <header>
          <a href="javascript:;">猫眼电影&nbsp;>&nbsp;</a>
          <span>{{movieInfo.nm}}</span>
        </header>
        <section class="infomation">
          <img :src="movieInfo.img" alt="">
          <div class="movieInfo-name">
            <h1>{{movieInfo.nm}}</h1>
            <p> {{movieInfo.enm}}</p>
            <p>
              <span v-for="(item,index) in movieInfo.tags" :key="index" >{{item}}{{index===movieInfo.tags.length-1?'':'/'}}</span>
            </p>
            <p class="shengluehao">
              <span v-for="(item,index) in movieInfo.star" :key="index" >{{item}}{{index===movieInfo.star.length-1?'':'/'}}</span>
            </p>
            <p> {{movieInfo.showTime}}&nbsp;></p>
            <div class="tijiao">
              <button><img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/want-to-watch.png" alt="">想看</button>
              <button><img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star.png" alt="">看过</button>
            </div>
          </div>
          
          
        </section>

        <article>
          <div class="top">
            <div class="left">
              <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/logo.png" alt="">
              <span>实时口碑</span>
            </div>
            <!-- <p class="right">
             {{praise.watched}}人想看&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{praise.wish}}人看过
           </p> -->
           <p class="right" v-html="sss"></p>
          </div>
          <div class="middle">
            <div class="left">
              <span>{{praise.score}}</span>
              <p class="people-grade">
                {{praise.evaluate}}人评
              </p>
            </div>
            <div class="right">
              <detail-score
              v-for="(item,index) in praise.mark"
              :key="index"
              :item="item"
              :pic="praise.starPic"
              :evaluate="praise.evaluate"
              :num="5-index"
              />
            </div>
          </div>
        </article>
        <div class="instrduct">
          <div class="title">
            <span>简介</span>
            <div>
              <button class="coro">
              收起
              <img src="////s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/arrow-right.png" alt=""  class="xuanzhuan" >
              <!-- <span>展开</span>
              <img src="////s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/arrow-right.png" alt=""  class="xuanzhuan"> -->
             
            </button>
            </div>
          </div>
          <div class="out-wrap"  >
            <p>
              {{movieInfo.content}}
            </p>
          </div>
        </div>
        <div class="showstars">
          <div class="title">
            <span class="left">演职人员</span>
            <a href="javascript:;">
              <span >全部</span>
              <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/arrow-right.png" alt="">
            </a>
          </div>
          <div class="actors">
            <ul>
              <li v-for="(item,index) in actorList" :key="index">
                <img :src="item.pic" alt=""> 
              </li>
            </ul>
          </div>
        </div>

      </main>
        
    </div>
</template>

<script>
  import DetailScore from '../components/detail/Score';
  import { getMovieInfo } from '../utils/api';
  //app客户端
  import AppItem from "../components/public/AppItem"
  //头部组件
  // import MovieHeader from "../components/public/Header"
export default {
  //获取数据的方式 ,这个是再进入页面之前做的
  beforeRouteEnter(to,from,next) {
    getMovieInfo({id: to.params.id}).then(res=>{
      next(vm=>vm.setData(res))// 这个vm就相当于this
      // console.log(1);
    })
  
  },
 
  data(){
    return {
      discuss:[],
      movieInfo:{},
      praise:{},
      actorList:[],
      // loading:true
    }
  },
    components:{
      AppItem,
      DetailScore
    },
    computed: {
      sss() {
        return `${this.praise.watched}人想看&nbsp;&nbsp;${this.praise.wish}人看过`
      }
    },
    mounted(){
      // this.getMovieInfomation()
    },
    methods:{
      setData(res){
        this.discuss=res.discuss,//如果获取得到数据   那么保存进data中 
        this.movieInfo=res.movieInfo,
        this.praise=res.praise
        this.actorList=res.movieInfo.actorList
        console.log(this.actorList.pic)
            
      }
    //   async getMovieInfomation(){
    //     this.loading=true  //在获取到数据之前显示加载中
    //     const res=await getMovieInfo({//传入id获取数据
    //       id:this.$route.params.id//这是异步操作  是需要时间的
    //     })
    //     if(res.status===0){
    //       this.loading=false//在获取到数据之后 把它变成false
    //         this.discuss=res.discuss,//如果获取得到数据   那么保存进data中 
    //         this.movieInfo=res.movieInfo,
    //         this.praise=res.praise
    //         this.actorList=res.movieInfo.actorList
    //         console.log(this.actorList.pic)
    //     }
    //   }
    }
}
</script>

<style lang="scss" scoped>
.app-style{
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  background: white; 
  z-index: 999;
  //  overflow-y: scroll; 
  main{
    width: 100%;
    height: 990px;
    padding: 21px 16px;
    background: #385266;
    user-select: none;
   
    header{
      width: 100%;
      height: 21px;
      font-size: 14px;
      color: #ccc;
      margin-bottom: 9px;
      a{
        color: #ccc;
        //去除a标签点击时颜色变化
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;
      }
    }
    section {
      width: 343px;
      height: 138px;
      display: flex;
      img{
        width: 100px;
        height: 138px;
      }
      .movieInfo-name{
        width: 100%;
        color: #fff;
        margin-left: 12px;
        h1{
          height: 30px;
           font-size: 20px;
           color: #fff;
           font-weight: 700;
        }
        p{
          font-size: 12px;
          margin-bottom: 6px;
          opacity: .6;
        }
        p:last-child{
          margin-bottom: none;
        }
        .shengluehao{
        //解决字体超出  设置省略号
              width: 243px;
              overflow: hidden;
              white-space: nowrap;//不换行 
              text-overflow: ellipsis;
        }
       .tijiao{
         width: 231px;
         height: 30px;
        //  background: orange;
         display: flex;
         justify-content: space-between;
         align-items: center;
         button{
              display: flex;
              justify-content: center;
              align-items: center;
              background: hsla(0,0%,100%,.35);
              box-shadow: 0 0.02rem 0.08rem 0 rgba(0,0,0,.1);
              border-radius: 5px;
              font-size: 14px;
              width: 47.61904762%;
              height: 30px;
              color: #fff;
              border: none;
              img{
                width: 15px;
                height: 15px;
              }
         }
       }
       
        
      }
    }
    article{
      width: 343px;
      height: 179px;
      background: #00000033;
      margin: 15px 0px 0px;
      padding: 10px 12px;
      border-radius: 5px;
      // display: flex;
      .top{
        width: 319px;
        height: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
          width: 66px;
          display: flex;
          align-content: center;
          img{
          width: 14px;
          height: 14px;
          margin-right: 4px;
          }
          span{
          font-size: 12px;
          color: #ffffff;
          }
        }
        .right{
            font-size: 12px;
            color: #ffffff;
            opacity: .6;
           
        }
      }
      .middle{
        width: 319px;
        height: 130px;
        padding: 20px 0;
        // background: pink;
        display: flex;
        justify-content: center;
        align-items: center;
        .left{
          width: 66px;
          height: 58px;
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span{
             color: #ffb400;
            font: 34px;
          }
          .people-grade{
            opacity: .4;
            font-size:12px;
             color: #fff;
          }
        }
        .right{
          width: 181px;
          height: 90px;
          // background: chartreuse;
        }
      }
     
    }
    .instrduct{
      width: 343px;
      height: 182px;
      padding: 16px 0 0;
      color: #fff;
      // background: pink;
      .title{
        width: 100%;
        height: 22px;
        font-size: 15px;
       display: flex;
       justify-content: space-between;
       align-items: center;
      .coro{
        width: 45px;
        height: 13px;
        border: none;
        outline: none;
        user-select: none;
        background-color: transparent;
        // background:#FFF;
        img{
          transform: rotate(270deg);
          width: 4px;
        }
      }
      }
      .out-wrap{
        width: 343px;
        // height: 78px;
        // background: pink;
        font:15px Arial,Helvetica,sans-serif;
        p{
          display: block;
          // height: 78px;
          width: 100%;
          margin: 7px 0;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          text-overflow: ellipsis;
          word-wrap: break-word;
          word-break: break-all;
          overflow: hidden;
        }
      }
   
    }
    .showstars{
      width: 100%;
      height: 181px;
      margin: 18px 0 15px;
      // background: pink;
      .title{
        width: 100%;
        height: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
          font-size: 15px;
          color: #fff;
        }
        a{
          display: block;
          // opacity: .6;
          text-decoration: none;
          color: inherit;
          font: 0.32rem/1.14 "Microsoft YaHei", arial;
          img{
          width: 4px;
          margin-left: 2px;
        }
        }
      }
      .actors{
        margin-top: 9px;
        background: pink;
        ul{
          width: 343px;
          height: 148px;
          display: flex;
         justify-content: flex-start;
         align-items: flex-start;
          overflow-x: scroll;
          margin-right:7px ;
          li{
            width:80px;
            height: 112px;
            img{
              width: 80px;
              height: 112px;
            }
          }
        }
      }
    }
  } 
}
</style>