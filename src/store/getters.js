export default {
        // 1.修改state中的值
        addten: state => state.count + 10,
        // 2.传入getters参数
        mul: (state, getters) => getters.addten * getters.addten,
        // 3.使用getters时传入参数
        addnum: state => {
            return num => {
                return state.count + num;
            }
        }
    }