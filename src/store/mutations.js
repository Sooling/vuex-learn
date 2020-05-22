import Vue from 'vue'
// 由于以下代码中使用到了Vue对象里的方法，所以需要额外引入Vue

export default {
        //事件类型+回调函数
        addone(state) {
            state.count++;
        },
        // addcount(state, num) {
        //     state.count += num;
        // }
        addcount(state, payload) {
            state.count += payload.num;
        },
        updatecart(state) {
            //没有在store初始化，直接添加color属性，该属性不会是响应式的
            //state.cart['color'] = 'yellow';
            //1.使用Vue.set(obj,key/index,newValue)
            Vue.set(state.cart, 'color', 'yellow');
            Vue.delete(state.cart, 'age');
        }
    }