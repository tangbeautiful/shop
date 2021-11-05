<template>
	<div>
		<div class="tabMenu" >
			
		  <div v-for="(item,index) in titles" @click="onClick(index)" :key='item' class="goodsitems" :class="{actives:active===index}"> {{item}}
		   <div :class="{actives_line:active===index}"></div>
		  </div>
		  
		</div>
	</div>	 
		
	
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
		 data() {
		    return {
			  sticky:true
		    };
		  },
		props:{
			titles:{
				type:Array,
				default(){
					return [];
				}
			},
			active:{
				type:Number,
				default(){
					return 0;
				}
			},
			// offsetTopValue:{
			// 	type:Number,
			// 	default(){
			// 		return false
			// 	}
			// },
			goods:{
				type:Array,
				default(){
					return [];
				}
			},
			widths:{
				type:Number,
				default(){
					return 300
				}
			}
		},
		methods:{
			onClick(index){
				console.log(index)
				this.$emit("indexclick",index)
			},
		}
	}
</script>

<style>

	 .tabMenu{
		width: 100%;
		display: flex;
		text-align: center;
		flex-wrap: wrap;
		height: 2.5rem;
		line-height: 2.5rem;
		background-color: pink;
		
	}
	.tabMenu .goodsitems{
		flex:1;
		text-align: center;
		color: #fff;
		position: relative;
	} 
	.tabMenu .actives{
		color: red;
		
	}
	.tabMenu .actives_line{
		position: absolute;
		bottom: 0;
		border-bottom: red solid 4px;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
	}
	/* .scorllNum /deep/ .van-tabs__wrap{
		width: 100%;
		position: fixed;
		top: 44px;
		z-index: 40000;
	} */
	.van-tabs__content{
		height: auto;
	}
/* 	.goodsitems div{
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	} */
	
</style>
