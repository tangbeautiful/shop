<template>
	<van-swipe class="my-swipe" :autoplay="3000"  indicator-color="white">
	  <van-swipe-item v-for="item in banners" :key="item">
		  <a :href="item.link">	
		  	<img :src="item.image" @load="BannerLoadImg"/>
		  </a>
	  </van-swipe-item> 
	</van-swipe>
	
</template>

<script>
	
	export default{
		name:"bannerVant",
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			},
			widths:{
				default(){
					return 240;
				}
			}
		},
		data(){
			return {
				isload:false
			}
		},
		methods:{
			BannerLoadImg(){
				if(!this.isload){
					this.$emit('BannerLoadImg')
					this.isload=true
				}
				
			}
		}
	}
	
</script>

<style>
	/* .my-swipe .van-swipe-item a{
		width: 100%;
		display: block;
	}
	.my-swipe{
		overflow: hidden;
	}
	  .my-swipe .van-swipe-item a img {
	  	width: 100%;
	  	height: auto;
	  } */
	  .my-swipe .van-swipe-item a img {
	  	width: 100%;
	  	height: auto;
	  }
</style>