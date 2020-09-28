<template>
    <div class="top">
        <!-- 热门城市  -->
        <div class="hot-top">
            热门城市
        </div>
        <div class="hotcities" v-if="list.length">
            <span v-for="(item,index) in list[0].cities" :key="index" @click="handleClick(item)" >{{item.name}}</span>
        </div>

        <van-index-bar :index-list="indexList" >
            <div v-for="(item,index) in list" :key="index" >
                <template v-if="item.prefix!=='hotCities'">
                <van-index-anchor  :index="item.prefix| toUpperCase" />
                    <van-cell  v-for="(it,i) in item.cities" :key="i"  :title="it.name"  @click="handleClick(it)"/>
                </template>    
             </div>
        </van-index-bar>
    </div>
</template>




<script>
import { getCitiesList}  from '../utils/api'
export default {
    data(){
        return {
            // indexList:['A','B'],
            list:[]
        }
    },
    filters:{
        toUpperCase(value){
            return value.toUpperCase()
        }
    },
    computed:{
        indexList(){
            let arr=[];
            for(let i = 1 ; i < this.list.length ; i++){
                arr.push(this.list[i].prefix.toUpperCase())
            }
            return arr
        } 
    },
    mounted(){
        this.getList()
    },
    methods:{
        async getList(){
            const res=await getCitiesList()
            this.list=res
            console.log(res);
        },
        handleClick(it){
            //把数据传给父组件app   
            // this.$emit('toParent',it)
            this.$store.commit('changeCity',it)
            this.$router.go(-1) //退回上一步 
        }
    }
}
</script>



<style lang="scss" scoped>
.top{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f5f5f5;
    .hot-top{
        z-index: 1;
        box-sizing: border-box;
        padding: 0 0.42667rem;
        color: #323233;
        font-weight: 500;
        font-size: 0.37333rem;
        line-height: 0.85333rem;
        background-color:transparent ;
        
    }
    .hotcities  span{
        
            float: left;
            background: #fff;
            width: 29%;
            height: 33px;
            margin-top: 15px;
            margin-left: 4%;
            padding: 0 4px;
            border: 1px solid #e6e6e6;
            border-radius: 3px;
            line-height: 33px;
            text-align: center;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 10px;
        
        } 
}
</style>