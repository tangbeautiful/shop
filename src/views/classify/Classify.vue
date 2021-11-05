<template>
  <div class="about">
    <h1>This is an about page</h1>
	<van-list v-model="loading"	:finished="finished" finished-text="没有更多了" offset='10'  @load="onLoad">
		<tabMenu class="tabbox" :titles='["流行","新款","精选"]' :offsetTopValue="100" offset-top="44px"  @indexclick="Indexclick" > 
			<goodsItem :goods="goodsbox" :widths="300" ></goodsItem>
		 </tabMenu>
	</van-list>
	<div class="footBox"></div>
  </div>
</template>
<script>
	import tabMenu from "../../components/content/tabmenu/tabmenu.vue"
	import goodsItem from "../../components/content/goods/goodsItem.vue"
	export default {
		name: 'About',
		components: {
			tabMenu,
			goodsItem
			},
		data() {
			return {
				loading: false,
				finished: false,
				goodsbox:[{"spuId":575,"spuName":"这是pop","sellingPoint":"华为11","shopId":327,"priceFee":10000,"marketPriceFee":10000,"hasStock":true,"saleNum":5,"mainImgUrl":"https://s17.mogucdn.com/mlcdn/c45406/170731_6bigc1bhf3685lk51hc8c50h1g2bk_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":576,"spuName":"商品1","sellingPoint":"商品1","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":3,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":578,"spuName":"短裤","sellingPoint":"短裤","shopId":328,"priceFee":9501,"marketPriceFee":10000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":581,"spuName":"大毛衣","sellingPoint":"大毛衣","shopId":328,"priceFee":5100,"marketPriceFee":5000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":579,"spuName":"白毛衣","sellingPoint":"白毛衣","shopId":328,"priceFee":101,"marketPriceFee":100,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180622_30h7l4kg7gc93cebk36d8il2jde7g_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":577,"spuName":"ssss","sellingPoint":"ssss","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180622_30h7l4kg7gc93cebk36d8il2jde7g_640x960.jpg_640x854.v1cAC.40.webp"}],
				currentType:'pop',
				goods:{
						'pop':{page:1,list:[{"spuId":575,"spuName":"这是pop","sellingPoint":"华为11","shopId":327,"priceFee":10000,"marketPriceFee":10000,"hasStock":true,"saleNum":5,"mainImgUrl":"https://s17.mogucdn.com/mlcdn/c45406/170731_6bigc1bhf3685lk51hc8c50h1g2bk_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":576,"spuName":"商品1","sellingPoint":"商品1","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":3,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":578,"spuName":"短裤","sellingPoint":"短裤","shopId":328,"priceFee":9501,"marketPriceFee":10000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":581,"spuName":"大毛衣","sellingPoint":"大毛衣","shopId":328,"priceFee":5100,"marketPriceFee":5000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/p1/160623/146957311_ie4tsm3fgiztimzvhezdambqgqyde_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":579,"spuName":"白毛衣","sellingPoint":"白毛衣","shopId":328,"priceFee":101,"marketPriceFee":100,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180622_30h7l4kg7gc93cebk36d8il2jde7g_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":577,"spuName":"ssss","sellingPoint":"ssss","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180622_30h7l4kg7gc93cebk36d8il2jde7g_640x960.jpg_640x854.v1cAC.40.webp"}]},
						'news':{page:1,list:[{"spuId":575,"spuName":"这是news","sellingPoint":"华为11","shopId":327,"priceFee":10000,"marketPriceFee":10000,"hasStock":true,"saleNum":5,"mainImgUrl":"https://s17.mogucdn.com/mlcdn/c45406/170731_6bigc1bhf3685lk51hc8c50h1g2bk_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":576,"spuName":"商品1","sellingPoint":"商品1","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":3,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/170907_09kgj226b121jb31g3226823j50c1_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":578,"spuName":"短裤","sellingPoint":"短裤","shopId":328,"priceFee":9501,"marketPriceFee":10000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/200402_3ldgbi11jl0e7bh6cil0fe52140l8_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":581,"spuName":"大毛衣","sellingPoint":"大毛衣","shopId":328,"priceFee":5100,"marketPriceFee":5000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":579,"spuName":"白毛衣","sellingPoint":"白毛衣","shopId":328,"priceFee":101,"marketPriceFee":100,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":577,"spuName":"ssss","sellingPoint":"ssss","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"}]},
						'sell':{page:1,list:[{"spuId":575,"spuName":"这是sell","sellingPoint":"华为11","shopId":327,"priceFee":10000,"marketPriceFee":10000,"hasStock":true,"saleNum":5,"mainImgUrl":"https://s18.mogucdn.com/mlcdn/c45406/171015_45g6d143a1ck0faa5148hci1idhic_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":576,"spuName":"商品1","sellingPoint":"商品1","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":3,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":578,"spuName":"短裤","sellingPoint":"短裤","shopId":328,"priceFee":9501,"marketPriceFee":10000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":581,"spuName":"大毛衣","sellingPoint":"大毛衣","shopId":328,"priceFee":5100,"marketPriceFee":5000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":579,"spuName":"白毛衣","sellingPoint":"白毛衣","shopId":328,"priceFee":101,"marketPriceFee":100,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"},{"spuId":577,"spuName":"ssss","sellingPoint":"ssss","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/180325_7ce462jg989h1126116980feicgji_640x960.jpg_360x480.v1cAC.40.webp"}]},	}				
			}
		},
		methods:{
			Indexclick(index){
				console.log(this.goodsbox)
				if(this.goodsbox.length<=20){
					console.log("小了小了")
					 this.finished = false;
					 this.loading = false;
				}
				if(index==0){
					this.currentType='pop'
				}else if(index==1){
					this.currentType='news'	
				  
				}else if(index==2){
					this.currentType='sell'
					
				}
				
				if(this.goodsbox=[]){
					 this.goodsbox = this.goods[this.currentType].list
				}else{
					 this.goodsbox;
				}
				
				console.log(this.goodsbox)
			},
			onLoad(){
				
				setTimeout(() => {
					
				       this.goodsbox.push({"spuId":575,"spuName":"这是","sellingPoint":"华为11","shopId":327,"priceFee":10000,"marketPriceFee":10000,"hasStock":true,"saleNum":5,"mainImgUrl":"https://s17.mogucdn.com/mlcdn/c45406/170731_6bigc1bhf3685lk51hc8c50h1g2bk_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":576,"spuName":"商品1","sellingPoint":"商品1","shopId":327,"priceFee":1,"marketPriceFee":0,"hasStock":true,"saleNum":3,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/170907_09kgj226b121jb31g3226823j50c1_640x960.jpg_640x854.v1cAC.40.webp"},{"spuId":578,"spuName":"短裤","sellingPoint":"短裤","shopId":328,"priceFee":9501,"marketPriceFee":10000,"hasStock":true,"saleNum":0,"mainImgUrl":"https://s2.mogucdn.com/mlcdn/c45406/200402_3ldgbi11jl0e7bh6cil0fe52140l8_640x960.jpg_640x854.v1cAC.40.webp"})
				       
				console.log("aaaa")
				console.log(this.goodsbox)
				        // 加载状态结束
				        this.loading = false;
				
				        // 数据全部加载完成
				        if (this.goodsbox.length >= 20) {
				          this.finished = true;
				        }
				      }, 1000);
			}
		}
	}
</script>
<style>
.footBox{
	height: 54px;
}
</style>