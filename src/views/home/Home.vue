<template>
	<div class="home">
		<navbar><template v-slot:center>美丽街</template></navbar>	
	</div>
	<banner-vant class="banner" :banners="banners"/>
	<recommendList :recommends="recommends"></recommendList>
	<fureView></fureView>
	<van-sticky :offset-top="44" >
		<tabMenu :titles='["流行","新款","精选"]' @indexclick="Indexclick" ></tabMenu>
	</van-sticky>
	<div class="goods_box" :style="{width:widths+'px'}">
		<goodsItem :goods="tabMenu" :widths="widths" ></goodsItem>
	 </div>
	<!-- <div class="banner" v-for="{{banners}}" >
  	  {{banners.image}}
    </div> -->
	<ul>
		<li class="ss"></li>
		
	</ul>
</template>

<script>
	// @ is an alias to /src
	import {getHomeMultidata} from "../../network/home.js"
	
	import navbar from "../../components/common/navbar/navbar.vue"
	import fureView from "./homechild/fureView.vue"
	import tabMenu from "../../components/content/tabmenu/tabmenu.vue"
	import goodsItem from "../../components/content/goods/goodsItem.vue"
	
	// import banner from "./homechild/banner.vue"
	import bannerVant from "./homechild/banner_vant.vue"
	import recommendList from "./homechild/recommend.vue"
	export default {
		name: 'Home',
		components: {
			navbar,
			fureView,
			tabMenu,
			goodsItem,
			bannerVant,
			recommendList,
		},
		data() {
			return {
				banners: [],
				recommends: [],
				// 图片父容器高度
				bannerHeight: 1000,
				// 浏览器宽度
				widths: 0,		
				currentType:'pop',
				goods:{
					'pop':{page:1,list:[{"spuId":575,"spuName":"华为1122","sellingPoint":"华为11","shopId":327,"priceFee":10000,"marketPriceFee":10000,"hasStock":true,"saleNum":5,"mainImgUrl":"https://s17.mogucdn.com/mlcdn/c45406/170731_6bigc1bhf3685lk51hc8c50h1g2bk_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":576,"spuName":"商品1","sellingPoint":"商品1","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":3,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":578,"spuName":"短裤","sellingPoint":"短裤","shopId":328,"priceFee":9501,"marketPriceFee":10000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":581,"spuName":"大毛衣","sellingPoint":"大毛衣","shopId":328,"priceFee":5100,"marketPriceFee":5000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":579,"spuName":"白毛衣","sellingPoint":"白毛衣","shopId":328,"priceFee":101,"marketPriceFee":100,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180622_30h7l4kg7gc93cebk36d8il2jde7g_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":577,"spuName":"ssss","sellingPoint":"ssss","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180622_30h7l4kg7gc93cebk36d8il2jde7g_640x960.jpg_640x854.v1cAC.40.webp"}]},
										'news':{page:1,list:[{"spuId":575,"spuName":"华为1122","sellingPoint":"华为11","shopId":327,"priceFee":10000,"marketPriceFee":10000,"hasStock":true,"saleNum":5,"mainImgUrl":"https://s17.mogucdn.com/mlcdn/c45406/170731_6bigc1bhf3685lk51hc8c50h1g2bk_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":576,"spuName":"商品1","sellingPoint":"商品1","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":3,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/170907_09kgj226b121jb31g3226823j50c1_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":578,"spuName":"短裤","sellingPoint":"短裤","shopId":328,"priceFee":9501,"marketPriceFee":10000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/200402_3ldgbi11jl0e7bh6cil0fe52140l8_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":581,"spuName":"大毛衣","sellingPoint":"大毛衣","shopId":328,"priceFee":5100,"marketPriceFee":5000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":579,"spuName":"白毛衣","sellingPoint":"白毛衣","shopId":328,"priceFee":101,"marketPriceFee":100,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":577,"spuName":"ssss","sellingPoint":"ssss","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"}]},
										'sell':{page:1,list:[{"spuId":575,"spuName":"华为1122","sellingPoint":"华为11","shopId":327,"priceFee":10000,"marketPriceFee":10000,"hasStock":true,"saleNum":5,"mainImgUrl":"https://s18.mogucdn.com/mlcdn/c45406/171015_45g6d143a1ck0faa5148hci1idhic_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":576,"spuName":"商品1","sellingPoint":"商品1","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":3,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":578,"spuName":"短裤","sellingPoint":"短裤","shopId":328,"priceFee":9501,"marketPriceFee":10000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":581,"spuName":"大毛衣","sellingPoint":"大毛衣","shopId":328,"priceFee":5100,"marketPriceFee":5000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":579,"spuName":"白毛衣","sellingPoint":"白毛衣","shopId":328,"priceFee":101,"marketPriceFee":100,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":577,"spuName":"ssss","sellingPoint":"ssss","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"}]},				}
			}
		},
		created() {
			getHomeMultidata().then(res => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
				console.log(res.data)
			}).catch(err => {
			});
			
		},
		// data() {
		// 	return {
		// 		banners: [],
		// 		recommends: [],
		// 		// 图片父容器高度
		// 		bannerHeight: 1000,
		// 		// 浏览器宽度
		// 		screenWidth: 0
		// 	}
		// },
		methods: {
			Indexclick(index){
				if(index==0){
					this.currentType='pop'
				}else if(index==1){
					this.currentType='news'
				}else if(index==2){
					this.currentType='sell'
				}
			},
			setSize: function() {
				// 通过浏览器宽度(图片宽度)计算高度
				this.bannerHeight = 400 / 750 * this.widths;
			},
		},
		computed:{
			tabMenu(){
				return this.goods[this.currentType].list
			}
		},
		mounted() {
			// 首次加载时,需要调用一次
			this.widths = window.innerWidth;
			this.setSize();
			// 窗口大小发生改变时,调用一次
				this.widths = window.innerWidth;
				this.setSize();
			}
	}
</script>

<style>
	.home {
		width: 100%;
		background-color: #ffaaff;
		color: #ffffff;
		position: fixed;
		z-index: 100;
		top: 0;
	}
	.banner{
		margin-top: 44px;
	}
	.van-sticky{
	}
	.ss{
		height: 3000px;
	}
	.goods_box{
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}
</style>
