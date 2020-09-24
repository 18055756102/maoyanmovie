<template>
<!-- 头部组件 -->
    <div class="movie-header">
        <span class="back" v-if="showBack">&lt;</span>
        <h2>猫眼电影</h2>
        <span class="iconfont icon-toggle"  @click="Change" >
            <div v-if="show" class="xianshi">
                <a href="javascript:;" v-for="item in xianshilist" :key="item" >
                    {{item}}
                </a>
                
            </div>
        </span>
    </div>
    
</template>>

<script>
export default {
    data(){
        return{
            show:false,
            xianshilist:['首页','榜单','热点','商城']
        }
    },
    props:['showBack'],
    methods:{
        Change(){
            this.show=true
        }
    }
}
</script>>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
    .movie-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background:$theme-color;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:18px ;
        color: #fff;
        z-index: 10000; 
        .back{
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 35px;
        }
        h2 {
            font-weight: 400;
        }
        
        .icon-toggle{
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
            .xianshi{
                width: 110px;
                height: 183px;
                // border-bottom: 1px solid black;
                position:absolute;
                top: 30px;
                right: .5px;
                z-index: 999;
                color: #333;
                background: white;
                a{
                    display: block;
                    border-bottom: 1px solid #f0f0f0;
                    font-size: 15px;
                    width: 100%;
                    height: 45px;
                    line-height: 45px;
                    text-align: center;
                    text-decoration: none;
                }
                >a:last-child{
                    border-bottom:none;
                }
            }
        }
    }
</style>