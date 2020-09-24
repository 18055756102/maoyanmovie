<template>
    <div class="index-page">
     <movie-header :showBack="false"> </movie-header>
   <app-item></app-item>
   <first-tabs></first-tabs>
   
   <router-view></router-view>
    </div>
</template>

<script>
  import { getTopRated ,getIndexList,pullUpLoadList} from '../utils/api';
 
//头部组件
  import MovieHeader from "../components/public/Header"
//热映列表
  import FirstTabs from "../components/index/FirstTabs"

 //app客户端
  import AppItem from "../components/public/AppItem"

export default {
    components:{
      MovieHeader,
      FirstTabs,
      AppItem,
    },
    data(){
      return{
      }
    },
};
</script>

<style lang="scss" scoped>
.wrapper{
    position: absolute;
    left: 0;
    right: 0;
    top: 158px;
    bottom:50px;
    overflow:hidden;
  }
</style>