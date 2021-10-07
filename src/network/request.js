import axios from "axios"

//封装好的请求
export function request(config) {
	
	const instance1 = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})
	//其实上下两个就可以完成数据的接收了，但我们还有一个知识
	//拦截器。请求前以及请求后的拦截操作
	// 如果是全局拦截的话，就用  axios.interceptors
	//现在我们是拦截上面的instance1 
	//request response  拦截请求和响应
	// instance1.interceptors.request.use()
	// instance1.interceptors.response.use()
	instance1.interceptors.request.use(config => {
		//请求成功来到这里,拦截器里面，请求成功，一定要返回出去，否则拦截之后就拦截了，出去不了数据
		//在这个中间我们每次发送网络请求的时候，可以在这里显示一个请求图标，比如转圈圈那种正在...
		// 也可也在这里检测是否携带有登录信息（token），如果没有登录，可以返回到某些地方去
		return config
	},
	err => {
		//请求失败来到这里
	}
	)
	instance1.interceptors.response.use(res => {
		//响应成功来到这里,这里同样也需要返回出去。不然就被拦截出不去啦
		//console.log(res)
		return res.data
	},
	err => {
		console.log(err)
		//失败来到这里
	})
	
	//instance1返回的本身就是promise，所以可以直接返回出去，由外面调用的then catch就可以了
	return instance1(config)
}


export function request2(config) {
	
	const instance1 = axios.create({
		baseURL: 'http://47.108.222.92:8000',
		timeout: 5000
	})
	//其实上下两个就可以完成数据的接收了，但我们还有一个知识
	//拦截器。请求前以及请求后的拦截操作
	// 如果是全局拦截的话，就用  axios.interceptors
	//现在我们是拦截上面的instance1 
	//request response  拦截请求和响应
	// instance1.interceptors.request.use()
	// instance1.interceptors.response.use()
	instance1.interceptors.request.use(config => {
		//请求成功来到这里,拦截器里面，请求成功，一定要返回出去，否则拦截之后就拦截了，出去不了数据
		//在这个中间我们每次发送网络请求的时候，可以在这里显示一个请求图标，比如转圈圈那种正在...
		// 也可也在这里检测是否携带有登录信息（token），如果没有登录，可以返回到某些地方去
		return config
	},
	err => {
		//请求失败来到这里
	}
	)
	instance1.interceptors.response.use(res => {
		//响应成功来到这里,这里同样也需要返回出去。不然就被拦截出不去啦
		//console.log(res)
		return res.data
	},
	err => {
		console.log(err)
		//失败来到这里
	})
	
	//instance1返回的本身就是promise，所以可以直接返回出去，由外面调用的then catch就可以了
	return instance1(config)
}



//axios 的基本使用
// export default axios({
// 	url:'http://123.207.32.32:8000/home/multidata' ,
//  http://123.207.32.32:8000/home/data?type=sell&page=1 针对get请求的参数拼接太长，可以用以下方式拼接
//   http://123.207.32.32:8000/home/data
//  params:{
//	type:'sell'
//  page:1
//}  这样写访问时，自然会将参数加在后面。
//默认是get请求，如果想使用post请求需要method指明
//method:"post"
// }).then(res => {
// 	console.log(res)
// })

//axios 发送并发请求
// 有多个请求url时，请求头都是一样的，可以不用重复写，那么我们就需要把它提出来,使用全局的网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000;//也可以统一设置超时时间
// export default axios.all([axios({
// 	url:'/home/multidata'
// }),axios({
// 	url:'/home/data',
// 	params:{
// 		type:'sell',
// 		page:1
// 	}
// })]).then(results => {
// 	console.log(results)

// })

// axios 使用全局网络请求会有一个问题，当不是一个服务器的数据时，全局就不再满足我们请求数据的需求。
//创建对应的axios实例
// export default function(){
// const instance1 = axios.create({
// 	baseURL:'http://123.207.32.32:8000',
// 	timeout:5000
// })

// instance1({
// 	url:"/home/multidata"
// }).then(res1 => {
// 	console.log(res1)
// })

// instance1({
// 	url:"/home/data",
// 	params:{
// 		type:'sell',
// 		page:1
// 	}
// }).then(res2 => {
// 	console.log(res2)
// })

// }
