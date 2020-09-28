import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        city: {
            cityTd: 0,
            name: '全国'
        }
    },
    mutations: {
        changeCity(state, payload) {
            state.city = payload;

        }
    },
    actions: {
        //请求首页的最受欢迎列表
    },

})