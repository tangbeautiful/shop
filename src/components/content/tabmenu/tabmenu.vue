<template>
	
		<van-tabs @click="onClick" v-model="active" color="red" title-active-color="red" background="#fcf7fa">
		  <van-tab v-for="item in titles" :title="item" class="goodsitems">
		  </van-tab>
		</van-tabs>
	
	<!-- <div class="tabmenu">
		<div v-for="item in titles">
			{{item}}
		</div>
	</div> -->
</template>

<script>
	export default{
		name:'tabMenu',
		components:{
		},
		props:{
			titles:{
				type:Array,
				default(){
					return [];
				}
			},
			goods:{
				type:Array,
				default(){
					return [];
				}
			},
			 active:{
			 	default(){
			 		return 1;
			 	}
			 }
		},
		methods:{
			onClick(title){
				this.$emit("indexclick",title)
			}
		}
	}
</script>

<style>
	/* .tabmenu{
		width: 100%;
		display: flex;
		text-align: center;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.tabmenu div{
		flex:1;
	} */
	.van-tabs__content{
		height: auto;
	}
	.goodsitems{
		display: flex;
	}
</style>
