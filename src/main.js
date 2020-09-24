import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";

// 引入reset重置样式
import "./assets/style/reset.scss"

//引入iconfontcss
import "../src/assets/font/iconfont.css"

//引入amfe-flexible
import "amfe-flexible"

// 用来关闭开发环境的提示信息
Vue.config.productionTip = false;

new Vue({
    router: router,
    // store,
    render: h => h(App)
}).$mount("#app");