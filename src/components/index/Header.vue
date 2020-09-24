<template>
<!-- 头部组件 -->
    <div class="movie-header">
        <span class="back" v-if="showBack">&lt;</span>
        <h2>猫眼电影</h2>
        <span class="iconfont icon-toggle"></span>
    </div>
    
</template>>

<script>
export default {
    props:['showBack']
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
        }
    }
</style>