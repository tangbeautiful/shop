<template>
	<div class="tabbar_item" @click="clickItem">
		<slot name="isActive_slot" v-if="isActive"></slot>
        <slot name='notActive_slot' v-else></slot>
		<div :style="ActiveColor"><slot name="name_slot"></slot></div>
	</div>
</template>

<script>
	
	export default{
		name:'tabBarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!=-1;
			},
			ActiveColor(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			clickItem(){
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tabbar_box .tabbar_item{
		flex: 1;
		text-align: center;
	}
	/* .tabbar_box .tabbar_item div{
		color: #FFFFFF;
	} */
</style>
