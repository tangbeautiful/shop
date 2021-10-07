<template>
	<div class="recommend">
		<div class="recommend_item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" />
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"recommendList",
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		width: 100%;
		height: 130px;
		display: flex;
		text-align: center;
		font-size: 12px;
		border-bottom: 20px solid #dadada;
	}
	.recommend .recommend_item{
		flex: 1;
		margin-top: 12px;
	}
	.recommend .recommend_item img{
		width: 80%;
		margin-bottom: 6px;
	}
	.recommend .recommend_item a{
		color: #000000;
	}
</style>
