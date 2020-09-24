<template>
  <div id="app">
   
   <router-view></router-view>
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
  padding-top: 50px;
  background: #f5f5f5;
  
}
</style>
