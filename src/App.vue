<template>
  <div id="app">
   <transition name="fade">
      <router-view v-if="$route.meta.needTransiton"></router-view>
      </transition>
  <router-view v-if="!$route.meta.needTransiton"></router-view>
    
     <!-- <router-view></router-view> -->
   <bottom-item></bottom-item>
  </div>
</template>

<script>
  import BottomItem from "./components/public/BottomItem"
  export  default{
    components:{
      BottomItem 
    },
    data(){
      return{
      }
    },
  
  mounted(){
  },
  
};

</script>

<style lang="scss" scoped>
#app{
  margin-top: 50px;
  background: #f5f5f5;
  .fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
 transform: translateX(100%);
} 
}
</style>
