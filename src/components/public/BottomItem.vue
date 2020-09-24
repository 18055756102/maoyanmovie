<template>
    <ul>
        <!-- <li v-for="(item,i) in list" 
        :key="i"
         @click="change(i)" 
         :class="{active:index===i}"
        >
            <p><span class="iconfont"  :class="item.icon"></span></p>
            <p>电影/影院</p>
        </li> -->
        <router-link 
        v-for="(item,index) in list" 
        :key="index" 
        :to="item.url" 
        tag="li"
        active-class="active"
        >
        <p><span class="iconfont"  :class="item.icon"></span></p>
            <p>{{item.title}}</p>
        </router-link>
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
                    icon:'icon-dianying',
                    url:'/index'
                },
                {
                    title:'视频',
                    icon:'icon-shipin',
                    url:'/video'
                },
                {
                    title:'小视频',
                  icon:'icon-xiaoshipin',
                  url:'/mini-video'
                },
                {
                    title:'演出',
                    icon:'icon-xiaoshipin',
                    url:'/show'
                },
                {
                    title:'我的',
                    icon:'icon-wode',
                    url:'/mine'
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
        // z-index: 2;
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