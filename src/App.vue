<template>
  <div id="app">
    <p>{{$store.state.count}}</p>
    <p>-----以下是mutations操作------</p>
    <button @click="addOne">+1</button> |
    <button @click="addCount">+7</button>
    <p>-----以下是getters中的内容------</p>

    <!-- 1.修改state中的值 -->
    <p>count加10：{{$store.getters.addten}}</p>

    <!-- 2.传入getters参数 -->
    <p>addten的平方：{{$store.getters.mul}}</p>

    <!-- 3.使用getters时传入参数 -->
    <p>count加3：{{$store.getters.addnum(3)}}</p>
    <p>count加5：{{$store.getters.addnum(5)}}</p>
		<!-- 模块a -->
		<p>---访问模块a---</p>
		<div>{{$store.state.a.name}}</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    addOne: function () {
      this.$store.commit('addone');
    },
    // 传递参数
    addCount: function(){
      // this.$store.commit('addcount',7);

      //mutation提交风格
      this.$store.commit({
        type: 'addcount',
        num: 7
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
