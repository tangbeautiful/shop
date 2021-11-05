<template>
	<div class="home">
		<div class="title">
			<navbar><template v-slot:center>美丽街</template></navbar>
		</div>
		<tabMenu :titles='["流行","新款","精选"]' :widths="widths" :active="active" ref="tab01" :class="{Tabfixed:Tabfixed}"
			v-show="Tabfixed" @indexclick="Indexclick">
		</tabMenu>
		<Topbtn @click.native="TopBtn(0,1000)" v-show="isShow"></Topbtn>


		<BScroll class="wrapp" ref="scroll" :probeType='3' :pullUpLoad="true" @ScrollTopDis="ScrollTopDis"
			@pullingUp="pullingUp">

			<banner-vant class="banner" :banners="banners" @BannerLoadImg="BannerLoadImg" />

			<recommendList :recommends="recommends"></recommendList>

			<fureView></fureView>

			<div ref="tabmenuctrl">
				<tabMenu :titles='["流行","新款","精选"]' :widths="widths" :active="active" ref="tab02"
					@indexclick="Indexclick">

				</tabMenu>
				<goodsItem :width="widths" :goods="goodsbox"></goodsItem>
			</div>
		</BScroll>



	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		getHomeMultidata
	} from "../../network/home.js"
	import {
		debounce
	} from "../../common/utils.js"

	import navbar from "../../components/common/navbar/navbar.vue"
	import fureView from "./homechild/fureView.vue"
	import tabMenu from "../../components/content/tabmenu/tabmenu.vue"
	import goodsItem from "../../components/content/goods/goodsItem.vue"
	import Topbtn from "../../components/common/topbtn/Topbtn.vue"

	// import banner from "./homechild/banner.vue"
	import bannerVant from "./homechild/banner_vant.vue"
	import recommendList from "./homechild/recommend.vue"

	import BScroll from "../../components/common/bscroll/Bscroll.vue"
	import {
		ref,
		onMounted
	} from "vue";
	export default {
		name: 'Home',
		components: {
			navbar,
			fureView,
			tabMenu,
			goodsItem,
			bannerVant,
			recommendList,
			BScroll,
			Topbtn
		},
		data() {
			return {
				banners: [],
				recommends: [],
				// 图片父容器高度
				bannerHeight: 1000,
				// 浏览器宽度
				widths: 0,
				page: 0,
				currentType: 'pop',
				isShow: false,
				active: 0,
				refreshs: {},
				scrollY: 0,
				scroll: 0,
				Tabfixed: false,
				offsetTopValue: 0,
				countpop: 0,
				countnews: 0,
				countsell: 0,
				goods: {
					'pop': {
						page: 1,
						list: [{
							"spuId": 575,
							"spuName": "这是pop",
							"sellingPoint": "华为11",
							"shopId": 327,
							"priceFee": 10000,
							"marketPriceFee": 10000,
							"hasStock": true,
							"saleNum": 5,
							"mainImgUrl": "https://s17.mogucdn.com/mlcdn/c45406/170731_6bigc1bhf3685lk51hc8c50h1g2bk_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 576,
							"spuName": "商品1",
							"sellingPoint": "商品1",
							"shopId": 327,
							"priceFee": 1,
							"marketPriceFee": 0,
							"hasStock": true,
							"saleNum": 3,
							"mainImgUrl": "https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 578,
							"spuName": "短裤",
							"sellingPoint": "短裤",
							"shopId": 328,
							"priceFee": 9501,
							"marketPriceFee": 10000,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 581,
							"spuName": "大毛衣",
							"sellingPoint": "大毛衣",
							"shopId": 328,
							"priceFee": 5100,
							"marketPriceFee": 5000,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 579,
							"spuName": "白毛衣",
							"sellingPoint": "白毛衣",
							"shopId": 328,
							"priceFee": 101,
							"marketPriceFee": 100,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180622_30h7l4kg7gc93cebk36d8il2jde7g_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 577,
							"spuName": "ssss",
							"sellingPoint": "ssss",
							"shopId": 327,
							"priceFee": 1,
							"marketPriceFee": 0,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180622_30h7l4kg7gc93cebk36d8il2jde7g_640x960.jpg_640x854.v1cAC.40.webp"
						}]
					},
					'news': {
						page: 1,
						list: [{
							"spuId": 575,
							"spuName": "这是news",
							"sellingPoint": "华为11",
							"shopId": 327,
							"priceFee": 10000,
							"marketPriceFee": 10000,
							"hasStock": true,
							"saleNum": 5,
							"mainImgUrl": "https://s17.mogucdn.com/mlcdn/c45406/170731_6bigc1bhf3685lk51hc8c50h1g2bk_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 576,
							"spuName": "商品1",
							"sellingPoint": "商品1",
							"shopId": 327,
							"priceFee": 1,
							"marketPriceFee": 0,
							"hasStock": true,
							"saleNum": 3,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/170907_09kgj226b121jb31g3226823j50c1_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 578,
							"spuName": "短裤",
							"sellingPoint": "短裤",
							"shopId": 328,
							"priceFee": 9501,
							"marketPriceFee": 10000,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/200402_3ldgbi11jl0e7bh6cil0fe52140l8_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 581,
							"spuName": "大毛衣",
							"sellingPoint": "大毛衣",
							"shopId": 328,
							"priceFee": 5100,
							"marketPriceFee": 5000,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"
						}, {
							"spuId": 579,
							"spuName": "白毛衣",
							"sellingPoint": "白毛衣",
							"shopId": 328,
							"priceFee": 101,
							"marketPriceFee": 100,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"
						}, {
							"spuId": 577,
							"spuName": "ssss",
							"sellingPoint": "ssss",
							"shopId": 327,
							"priceFee": 1,
							"marketPriceFee": 0,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"
						}]
					},
					'sell': {
						page: 1,
						list: [{
							"spuId": 575,
							"spuName": "这是sell",
							"sellingPoint": "华为11",
							"shopId": 327,
							"priceFee": 10000,
							"marketPriceFee": 10000,
							"hasStock": true,
							"saleNum": 5,
							"mainImgUrl": "https://s18.mogucdn.com/mlcdn/c45406/171015_45g6d143a1ck0faa5148hci1idhic_640x960.jpg_640x854.v1cAC.40.webp"
						}, {
							"spuId": 576,
							"spuName": "商品1",
							"sellingPoint": "商品1",
							"shopId": 327,
							"priceFee": 1,
							"marketPriceFee": 0,
							"hasStock": true,
							"saleNum": 3,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"
						}, {
							"spuId": 578,
							"spuName": "短裤",
							"sellingPoint": "短裤",
							"shopId": 328,
							"priceFee": 9501,
							"marketPriceFee": 10000,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"
						}, {
							"spuId": 581,
							"spuName": "大毛衣",
							"sellingPoint": "大毛衣",
							"shopId": 328,
							"priceFee": 5100,
							"marketPriceFee": 5000,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"
						}, {
							"spuId": 579,
							"spuName": "白毛衣",
							"sellingPoint": "白毛衣",
							"shopId": 328,
							"priceFee": 101,
							"marketPriceFee": 100,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"
						}, {
							"spuId": 577,
							"spuName": "ssss",
							"sellingPoint": "ssss",
							"shopId": 327,
							"priceFee": 1,
							"marketPriceFee": 0,
							"hasStock": true,
							"saleNum": 0,
							"mainImgUrl": "https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"
						}]
					},
				},
				goodsbox: [],
				goodsnews: [],
				goodssell: [],
				popPosition: 1,
				newsPosition: 0,
				sellPosition: 0,
				nowPosition: 0,
				indexclick:0
			}
		},

		created() {
			//获取banner和分类的数据
			getHomeMultidata().then(res => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
				this.goodsbox = this.goods['pop'].list;
				console.log(res.data)
			}).catch(err => {});
		},
		methods: {

			Indexclick(index) {
				this.indexclick =index
				if (index == 0) {
					this.currentType = 'pop'
					// if (this.popPosition == 0) {
					// 	this.TopBtn(-this.offsetTopValue,0)
					// }
					// else{
					// 	this.TopBtn(this.popPosition,0)
					// }
				} else if (index == 1) {
					this.currentType = 'news'
					// if (this.newsPosition == 0) {
					// 	this.TopBtn(-this.offsetTopValue,0)	
					// }else{
					// 	this.TopBtn(this.newsPosition,0)	
					// }
				} else if (index == 2) {
					this.currentType = 'sell'
					// if (this.sellPosition == 0) {
					// 	this.TopBtn(-this.offsetTopValue,0)
					// } else {
					// 	this.TopBtn(this.sellPosition,0)
					// }
				}
				this.active = index
				this.goodsbox = this.goods[this.currentType].list;
				

			},
			setSize: function() {
				// 通过浏览器宽度(图片宽度)计算高度
				this.bannerHeight = 400 / 750 * this.widths;
			},
			TopBtn(val,delay) {
				this.$refs.scroll.ScrollTop(0, val, delay);
			},
			BannerLoadImg() {
				console.log(this.$refs.tabmenuctrl.offsetTop)
				this.offsetTopValue = this.$refs.tabmenuctrl.offsetTop - 44

			},
			//通过子组件传过来的pos坐标值，监听当前页面滑滚动到什么位置了
			ScrollTopDis(pos) {
				if(this.indexclick==0){
					this.popPosition=this.scrollY
				}else if(this.indexclick==1){
					this.newsPosition=this.scrollY
				}else if(this.indexclick==2){
					this.sellPosition=this.scrollY
				}
				this.isShow = -pos.y > 500;
				this.scrollY = pos.y
				if (-pos.y >= this.offsetTopValue) {
					this.Tabfixed = true;
				} else {
					this.Tabfixed = false;
				}
			},
			//加载上拉的内容
			pullingUp() {
				this.page = this.page + 1
				this.goodsbox.push(this.goods['pop'].list[1], this.goods['pop'].list[2], this.goods['pop'].list[3])
				this.$refs.scroll.finishPullUp();
			},


		},
		computed: {

		},

		mounted() {

			this.refreshs = debounce(this.$refs.scroll.refresh, 100)
			this.$bus.on('ImgLoadEnd', () => {
				this.refreshs();
			})
			// 首次加载时,需要调用一次
			this.widths = window.innerWidth;
			this.setSize();
			// 窗口大小发生改变时,调用一次
			this.widths = window.innerWidth;
			this.setSize();
		},
		activated() {
			this.active = this.active
		},
		deactivated() {
			console.log("deactivated")
		},
	}
</script>

<style scoped>
	.home {
		height: 100vh;
	}

	.title {
		width: 100%;
		background-color: #ffaaff;
		color: #ffffff;
		z-index: 100;
		top: 0;
	}

	.banner {
		margin-top: 44px;
	}

	.Tabfixed {
		width: 100%;
		position: fixed;
		z-index: 40000;
	}

	/* .Tabshow /deep/ .van-tabs__content{
		display: none;
	} */
	.ss {
		height: 3000px;
	}

	.goods_box {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	.wrapp {
		height: calc(100% - 54px);
		overflow: hidden;
	}
</style>
