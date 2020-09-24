<template>
    <ul class="movie-list">
       <movie-list-item v-for="(item,index) in movieList" :key="index" :item="item"></movie-list-item>
       <p v-if='total' v-cloak>人家是有底线的</p>
    </ul>
</template>

<script>
// import { getIndexList } from '../../../../../../vue.js/2006/maoyan/src/utils/api';
//引入电影列表中的更小电影列表组件
    import MovieListItem from "./MovieListItem";


    //引入封装的fetch函数 
    // import {getIndexList} from "../../utils/api"
export default {
    props:['movieList','total'],
    data(){
        return{
            // movieList:[]
            count:0
        }
    },
    // watch:{
    //     movieList(){
    //         this.$nextTick(()=>{
    //             this.$emit('listChange',this.count++)
    //         })
    //     }
    // },
    components:{
        MovieListItem
    },
    computed:{},
    mounted(){},
    created(){
        // this.getList()
    },
    methods:{
    //  async getList(){
    // //  fetch('http://www.pudge.wang:3002/api/home/movieOnInfoList',{
    // //           method:"POST"
    // // })
    // //   .then(response=>response.json())
    // //   .then(myJson=>{
    // //      if(myJson.status===0){
    // //         this.movieList = myJson.result.movieList;
    // //     //  console.log( myJson)
    // //      }
    // //   });
    //     const res =await getIndexList()
    //     this.movieList=res .result.movieList
    //   }
    },
};

</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
 .movie-list{
     width: 100%;
     margin-top: 12px;
     background: #fff;
    //  display: flex;
    //  justify-content: center;
    //  align-items: center;
    [v-cloak] {
        display: none;
    }
    p{
       
        font-size: 28px;
        color: black;
        font-family: 宋体;
        
       
    }
 }
</style>