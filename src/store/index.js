import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import moduleA from './modules/moduleA.js'

//引入类型常量
// import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
        count: 0,
        cart: {
            name: 'guohui',
            age: 23
        }
    }

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        a: moduleA
    }
})