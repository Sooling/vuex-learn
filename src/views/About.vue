<template>
  <div class="about">
    <h2>{{$store.state.cart}}</h2>
    <button @click="updateCart">添加颜色属性</button>
    <p>-----以下是actions异步操作-----</p>
    <button @click="aUpdateCart">change</button>
    <h1>This is an about page</h1>
    <p>-----以下是modules-----</p>
    <p>{{$store.state.a.name}}</p>
    <button @click="updateName">change name</button>
    <p>拼接根状态规则：{{$store.getters.fullName}}</p>
    <button @click="aUpdateName">异步修改name</button>
  </div>
</template>

<script>
export default {
  methods: {
    updateCart(){
      this.$store.commit({
        type: 'updatecart'
      })
    },
    aUpdateCart(){
      // Action 通过 store.dispatch 方法触发：
      // this.$store.dispatch('aUpdateCart')
      //与Mutation一样，支持载荷方式和对象方式分发
      this.$store.dispatch({
        type: 'aUpdateCart',
        tip: 'Action支持对象方式分发'
      }).then(res => {
        console.log(res);
      })
    },
    updateName(){
      this.$store.commit('updateName','lisi');
    },
    aUpdateName(){
      this.$store.dispatch('aUpdateName','wangwu');
			//对象风格
			// this.$store.dispatch({
			// 	type: 'aUpdateName',
			// 	name: 'wangwu'
			// })
    }
  }
}
</script>
