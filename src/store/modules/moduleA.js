export default {
    state: {
        name: 'xuSong'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload;
        }
    },
    getters: {
        // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
        fullName(state, getters, rootState) {
            return state.name + rootState.cart.name;
        }
    },
    actions: {
        // 这里的context不再指store对象，它包含：
        // commit: ƒ boundCommit(type, payload, options)
        // dispatch: ƒ boundDispatch(type, payload)
        // getters: {}
        // rootGetters: {}
        // rootState: {__ob__: Observer}
        // state: {__ob__: Observer}
        // __proto__: Object
        aUpdateName(context, payload) {
					// payload指dispatch中的第二个参数，或对象风格中的对象
            setTimeout(() => {
                context.commit('updateName', payload);
                console.log(context);
            }, 1000);
        }
    }
}