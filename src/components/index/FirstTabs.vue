<template>
<!-- 地区 电影选择 -->
    <nav class="first-tabs">
      <address @click="toCities"> {{city}}^</address>
      <ul>
        <li 
        v-for="(item,index) in tabslist" :key="index"
        :class="{ active: activeIndex === index }"
        
        @click="tabsChange(index,item.url)">
        {{item.title}}
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
            tabslist:[//路径跳转  进行路由转换
                {
                    title:'热映',
                    url:'/hot'
                },
                   {
                    title:'影院',
                    url:'/cinema'
                },
                   {
                    title:'待映',
                    url:'/wait'
                },
                   {
                    title:'经典电影',
                    url:'/classic'
                },
            ],
            // activeIndex: +sessionStorage.getItem('activeIndex')||0
            activeIndex:0
        }
    },

    components:{},
    computed:{
        city(){
            return this.$store.state.city.name
        }
    },
    mounted(){},
    methods:{
        toCities(){
            this.$router.push('/cities')
        } ,
        tabsChange(i,url){
            this.activeIndex=i;
            // sessionStorage.serItem('activeIndex',i)//这是防止左右点击不同页面刷新后  对应红线位置部队问题
            this.$router.push(url)//这是vue router自带的函数  用来传递路径  可视性路由转换
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
    .first-tabs {
        position: sticky;
        top: 52px;
        height: 46px;
        width: 100%;
        z-index: 11;
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