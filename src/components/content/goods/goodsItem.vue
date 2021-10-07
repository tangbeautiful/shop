<template>
	<div v-for="item in goods" class="goodsitem" :style="{width:widths/2-15+'px'}">		
				<img :src="item.mainImgUrl" />
				{{item.spuName}}
	</div>
</template>

<script>
	export default{
		name:"goodsItem",
		props:{
			goods:{
				type:Array,
				default(){
					return [];
				}		
			},
			widths:{
				type:Number,
				default(){
					return 150
				}
			}
		}
	}
</script>

<style>
	.goodsitem{
		text-align: center;
		margin-left: 10px;
	}
	.goodsitem img{
		width: 100%;
		border-radius: 5px;
		margin-bottom: 5px;
		margin-top: 5px;
	}
</style>
