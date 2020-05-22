export default {
        //context上下文的意思，这里指store对象
        aUpdateCart(context, payload) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 提交Mutation在Action中修改state中的状态
                    context.commit('updatecart');
                    console.log(payload.tip);
                    //调用resolve
                    resolve('success');
                }, 1000);
            })
        }
    }