<template>
<!-- 地区 电影选择 -->
    <nav class="first-tabs">
      <address>北京^</address>
      <ul>
        <li 
        v-for="(item,index) in tabslist" :key="index"
        :class="{ active: activeIndex === index }"
        
        @click="tabsChange(index)">
        {{item}}
        <div class="underline" v-if="activeIndex === index"> </div>
        </li>
      </ul>
      <span class="iconfont icon-fangdajing"></span>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            tabslist:["热映","影院","待映","经典电影"],
            activeIndex: 0
        }
    },

    components:{},
    computed:{},
    mounted(){},
    methods:{
        tabsChange(i){
            this.activeIndex=i
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
    .first-tabs {
        height: 46px;
        width: 100%;
        border: 1px solid $border-color;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 15px;
         background: white;
        address{
            color: #666666;
        }
        ul{
            display: flex;
            align-items: center;
            color: #666666;
            height: 100%;
            li{
                padding: 0 10px;
                height: 100%;
                line-height: 46px;
                position: relative;
                
                .underline{
                    position: absolute;
                    width: 20px;
                    height: 3px;
                    background: $theme-color;
                    bottom: 0;
                    border-radius: 1.5px;
                    left: 35%;
                    transform: translateY(-50%);
                }

            }
            
            .active {
                font-size: 18px;
                color: #000000;
                font-weight: 900;
            }
        }
        .icon-fangdajing{
            font-size: 18px;
            color:$theme-color;
            font-weight: 900;
            
        }
    }
</style>