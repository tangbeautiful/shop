<template>
	<el-carousel interval='5000' :height="bannerHeight+'px'">
		<el-carousel-item v-for="item in banners" :key="item">
			<a :href="item.link">
				<img :src="item.image" alt="" />
			</a>
		</el-carousel-item>
	</el-carousel>
</template>

<script>
	import {getHomeMultidata} from "../../../network/home.js"
	export default{
		name:"banner",
		components:{
			
		},
		data() {
			return {
				banners: [],
				recommends: [],
				// 图片父容器高度
				bannerHeight: 1000,
				// 浏览器宽度
				screenWidth: 0
			}
		},
		data() {
			return {
				banners: [],
				recommends: [],
				// 图片父容器高度
				bannerHeight: 1000,
				// 浏览器宽度
				screenWidth: 0
			}
		},
		methods: {
			setSize: function() {
				// 通过浏览器宽度(图片宽度)计算高度
				this.bannerHeight = 400 / 750 * this.screenWidth;
			},
		},
		mounted() {
			// 首次加载时,需要调用一次
			this.screenWidth = window.innerWidth;
			this.setSize();
			// 窗口大小发生改变时,调用一次
				this.screenWidth = window.innerWidth;
				this.setSize();
			},
		created() {
			getHomeMultidata().then(res => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list
				console.log(res.data)
			}).catch(err => {
			});
		}
	}
</script>

<style>
	.el-carousel__item a img {
		width: 100%;
		height: auto;
	}
</style>
