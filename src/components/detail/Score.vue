<template>
    <div class="detaile-wrap">
        <div class="left">
            <img :src="pic" v-for="item in num"  :key="item" alt="">
        </div>
        <div class="middle">
            <div class="bg">
                <div class="bgcolor" :style="{width:item/evaluate*100+'%'}"></div>
            </div>
        </div>
        <div class="right">
            <span>{{item/evaluate*100 | format}}</span>
        </div>
    </div>
</template>
 
<script>
export default {
    props:['item','pic','evaluate','num'],
    filters:{
        format(val){
            return val.toFixed(2)+'%'
        }
    }
}
</script>
<style lang="scss" scoped>
    .detaile-wrap{
        width: 180px;
        height: 17px;
        display: flex;
        .left{
            width: 35px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            img{
                width: 5px;
                height: 5px;
                float: right;
                border: none;
            }
        }
         .middle{ 
            width: 100px;
            margin: 0 1px;
            display: flex;
            align-items: center;
            .bg{
                width: 100%;
                height: 5px;
                background: #cccccc;
                position: relative;
                .bgcolor{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: orange;
                    height: 5px;
                }
            }
        }
         .right{
            width: 35px;
            font-size: 5px;
        }
    }
</style>