<template>
    <div>这里是show</div>
</template>>
<script>
export default {
    //组件内的前置守卫
    //这个位置时拿不到this的 
    beforeRouterEnter(to,form,next){
        console.log(to)
        next()
          // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    }
}
</script>