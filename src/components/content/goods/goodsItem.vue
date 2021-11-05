<template>
	<div class="tabContent">
		<div v-for="(item,index) in goods" :key="index" @click="goDetail(item)" class="goodscontent" :style="{width:width/2-15+'px'}" >
					<img :src="item.mainImgUrl" @load="imgLoad" />
					{{item.spuName}}
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { List } from 'vant';
	export default{
		name:"goodsItem",
		 data() {
		    return {
		      
		    };
		  },
		props:{
			goods:{
				type:Object,
				default(){
					return [];
				}		
			},
			i:{
				type:Number,
				default(){
					return 0;
				}
			},
			width:{
				type:Number,
				default(){
					return 150
				}
			}
		},
		methods:{
			 imgLoad(){
			 	this.$bus.emit('ImgLoadEnd');
			 },
			 goDetail(item){
				 this.$router.push('/detail/'+ item.spuId)
			 }
			
		}
	}
</script>

<style>
	.tabContent{
		width: 100%; 
		display: flex;
		flex-wrap: wrap;
	}
	.tabContent .goodscontent{
		text-align: center;
		margin-left: 10px;
	}
	.tabContent .goodscontent img{
		width: 100%;
		border-radius: 5px;
		margin-bottom: 5px;
		margin-top: 5px;
	}
</style>
