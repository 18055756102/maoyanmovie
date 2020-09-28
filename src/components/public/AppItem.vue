<template>
   <div class="kehuduan">
       <img src="../../assets/img/logo.png" alt="">
       <div class="appname">
           <div class="app-name">猫眼</div>
           <div class="app-desc">在线选座，热门影视，爱上看电影</div>
       </div>
       <div class="btn-app">打开app</div>
   </div>
</template>

<script>
export default {
   
    data(){
        return{
            
        }
    },
    
    components:{},
    computed:{},
    mounted(){},
    methods:{}
}

</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
  .kehuduan{
      width: 100%;
      height: 64px;
      position: relative;
      background: white;
          img{
              display: block;
              position: absolute;
                left: 15px;
                top: 11px;
                width: 44px;
                height: 44px;
            }
            .appname{
                position: absolute;
                left: 66px;
                top: 13px;
                font-size: 14px;
                 color: #777;
                 .app-name{
                    font-size: 17px;
                    color: #222;
                    line-height: 23px;
                    margin-bottom:3px ;
                    
                 }
                 .app-desc{
                         font-size: 12px;
                         color: #999;
                         
                 }
             }
             .btn-app{
                width: 68px;
                height: 30px;
                line-height:30px;
                background: $theme-color;
                color: aliceblue;
                font-size: 13px;
                text-align: center;
                position: absolute;
                right: 15px;
                top: 17px;
                border-radius: 3px;
             }
}
</style>