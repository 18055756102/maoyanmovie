<template>
    <div class="city-kind">
        <div class="tabs-kind">
            <ul>
                <li v-for="(item, index) in kindList" :key="index">
                    <span>{{ item }}<span class="iconfont icon-xialakuang-sanjiaoxing"></span></span>
                </li>
            </ul>
        </div>
        <div class="list">
            <ul class="list-wrap">
                <li class="list-item"  v-for="(item, index) in cinemaList" :key="index">
                    <div class="title line-ellipsis">
                        <div>{{ cinemaList[index].title }}</div>
                        <div class="price">
                            <span class="num">{{ cinemaList[index].price }}</span>
                            <span class="yuan">元起</span>
                        </div>
                    </div>
                    <div class="location">
                        <span class=" line-ellipsis">{{ cinemaList[index].location }}</span>
                        <span class="distance">{{ cinemaList[index].distance }}km</span>
                    </div>
                    <div class="labels">
                        <span v-for="(label,index) in item.labels" :key="index">{{label}}</span>
                    </div>
                    <div class="discount">
                        <!-- <img src="../../assets/images/card.png" alt=""> -->
                        <span>{{ cinemaList[index].discount }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { getCinemaList, pullUpLoadList } from "../../utils/api";

    // 引入better-scroll
    import BetterScroll from 'better-scroll';

    let bs;

    export default{
        data(){
            return{
                kindList:['全城','品牌','特色'],
                cinemaList:[]
            }
        },
        components:{
            // cinemaList
        },
        mounted(){
            this.getCinemaListfn()
        },
        methods:{
            // 上拉加载更多
            async pullUpLoad(){
                const ids = this.cinemaList.slice(this.index, this.index +1);
                const str = ids.join();
                console.log(111);
                const res = await pullUpLoadList({
                    ids:str
                });

                this.index ++;
                this.cinemaList = this.cinemaList.concat(res.result);
            },

            async getCinemaListfn(){
                const res = await getCinemaList();
                this.cinemaList =res.result;
                console.log(this.cinemaList)

                // 等待页面渲染完成
                await this.$nextTick();
                new BetterScroll('.list', {
                    // 允许纵向滚动
                    scrollY: true,
                    click: true,
                    // 允许我们使用上拉加载
                    pullUpLoad: true,
                });

                bs.on('pullingUp', async() =>{
                    if(this.cinemaList.length < this.total){
                        await this.pullUpLoad(),
                        // 重新计算better-scroll的高度
                        bs.refresh(),
                        // 表示这次上拉结束，可以做下一次下拉了
                        bs.finishPullUp()
                    }
                });
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import "../../assets/style/var.scss";

    .city-kind{
        position: fixed;
        top: 156px;
        left: 0;
        right: 0;
        bottom: 50px;
        background: rgb(255, 255, 255);

        .tabs-kind{
            width: 100%;
            height: 40px;
            background: #fff;
            border-bottom: 1px solid $border-color;

            ul{
                list-style: none;
                display: flex;
                height: 100%;
                align-items: center;
                li{
                    width: 33%;
                    height: 22px;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    font-size: 13px;
                    border-left: 1px solid #e8e8e8;
                    span{
                        display: flex;
                        align-content: center;
                    }
                    &:first-of-type{
                        border: none;
                    }
                }
            }
        }
        .list{
            margin-bottom: 55px;
            position: absolute;
            top: 40px;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;

            ul{
                background: #fff;
                overflow: auto;

                li{
                    width: 345px;
                    margin: 0px 15px;
                    padding: 13px  0;
                    border-bottom: 1px solid #e6e6e6;

                    .line-ellipsis{
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }

                    .title{
                        height: 23px;
                        line-height: 23px;
                        font-size: 16px;
                        color: #000;
                        display: flex;
                        align-items: flex-end;


                        .price{
                            padding-top: 9px;
                            padding-left: 3px;
                            display: inline-block;
                            color: #f03d37;

                            .num{
                                font-size: 18px;
                            }

                            .yuan{
                                font-size: 11px;
                                margin-left: 3px;
                            }
                        }
                    }
                    .location{
                        margin-top: 6px;
                        font-size: 13px;
                        color: #666;
                        display: flex;
                        justify-content: space-between;

                        .distance{
                            margin-left: 5px;
                        }

                    }
                    .labels{
                        height: 17px;
                        line-height: 17px;
                        margin-top: 4px;
                        margin-bottom: 4px;
                        overflow: hidden;
                        flex-shrink: 0;
                        display: flex;

                        span{
                            padding: 0 4px;
                            height: 15px;
                            line-height: 15px;
                            border: 1px solid #589daf;
                            color: #589daf;
                            border-radius: 2px;
                            font-size: 10px;
                            margin-right: 5px;
                        }
                    }
                    .discount{
                        color: #999;
                        margin: 4px 0;
                        display: flex;

                        img{
                            width: 15px;
                            height: 14px;
                        }

                        span{
                            font-size: 11px;
                            margin-left: 5px;
                        }
                    }

                }
            }
        }
    }
</style>