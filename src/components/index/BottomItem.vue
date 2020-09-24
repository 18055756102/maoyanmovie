<template>
    <ul>
        <li v-for="(item,i) in list" 
        :key="i"
         @click="change(i)" 
         :class="{active:index===i}"
        >
            <p><span class="iconfont"  :class="item.icon"></span></p>
            <p>电影/影院</p>
        </li>
        
    </ul>
</template>

<script>
export default {
    data(){
        return{
            index:0,
            list:[
                {
                    title:'电影/影院',
                    icon:'icon-fangdajing'
                },
                {
                    title:'视频',
                    icon:'icon-fangdajing'
                },
                {
                    title:'小视频',
                  icon:'icon-fangdajing'
                },
                {
                    title:'演出',
                    icon:'icon-fangdajing'
                },
                {
                    title:'我的',
                    icon:'icon-fangdajing'
                },
            ]
        }
    },
    methods:{
        change(i){
            this.index=i
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

    ul{
        width:100%;
        height: 50px;
        position:fixed;
        bottom:0;
        left:0;
        background:white;
        z-index: 9999;
        li{
            float: left;
            width: 20%;
            height: 50px;
            text-align: center;
            p{
                font-size:10px;
            }
            >p:first-child{
                margin-top:5px;
                .iconfont{
                    font-size:22px;
                }
            }
            >p:last-child{
                margin-top:5px;
                font-size:10px;
            }
        }
        .active{
            color:$theme-color;
        }
    }
</style>