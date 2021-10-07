import {request} from "./request.js"
import {request2} from "./request.js"

export function getHomeMultidata(){
	return request({
		url:'/home/multidata'
	})
}

// export function getHomeGoodsdata(){
// 	return request2({
// 		url:'/amz109cloud_search/ua/search/simple_page'
// 	})
// }