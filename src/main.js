import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自动寻找./store文件夹下的index.js文件
// import axios from 'axios'

//导出封装好的request函数
import {request} from './network/request.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
// 	url: 'https://httpbin.org/headers'
// }).then(res => {
// 	console.log(res);
// })

// axios.all([
// 	axios({
// 		url: 'https://httpbin.org/headers'
// 	}),axios({
// 		url: 'https://httpbin.org/headers'
// 	})
// ]).then(res => {
// 	console.log(res)
// })
// res是一个数组

//全局配置
// axios.defaults.baseURL = 'https://httpbin.org';
// axios.defaults.timeout = 10000;

// axios.all([
// 	axios({
// 		url: '/headers'
// 	}),axios({
// 		url: '/headers'
// 	})
// ]).then(axios.spread((res1,res2) => {
// 	console.log(res1);
// 	console.log(res2);
// }))
// axios.spread((param1,param2) => {
// 	code...
// })
// 将传入的数组展开

// 创建axios实例
// const header_instance = axios.create({
// 	//实例的默认配置
// 	baseURL: 'https://httpbin.org',
// 	timeout: 10000
// });

//实例的并发请求
// axios.all([
// 	header_instance({
// 		url: '/headers'
// 	}),header_instance({
// 		url: '/headers'
// 	})
// ]).then(axios.spread((res1,res2) => {
// 	console.log(res1);
// 	console.log(res2);
// }))

// 以上都是使用全局的axios和对应的全局配置再进行网络请求

// axios.all([
// 	request({
// 		url: '/headers'
// 	}),request({
// 		url: '/headers'
// 	})
// ]).then(axios.spread((res1,res2) => {
// 	console.log(res1);
// 	console.log(res2);
// }))

request({
	url: '/headers'
}).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err)
})

