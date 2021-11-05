<template>
	<navbar>
		<template  v-slot:left>
			<img @click="backClick" src="../../../../../tabbarr/src/assets/logo.png" />
		</template>
		<template v-slot:center >
			<div class="centerBox">
			<div v-for="(item,index) in titles" @click="detailMenuClick(index)"  class="detailMenu" :class="{active:currentIndex==index}">
				{{item}}
			</div>
			</div>
		</template>
	</navbar>
</template>

<script>
	import navbar from "../../../components/common/navbar/navbar.vue"
	export default{
		name:"detailNavBar",
		components:{
			navbar
		},
		data(){
			return{
				titles:["商品","详情","相关","推荐"],
				currentIndex:0,
			}
		},
		methods:{
			detailMenuClick(index){
				this.currentIndex=index
			},
			backClick(){
				
				this.$router.back()
			}
		}
	}
</script>

<style>
	.left img{
		width: 20px;
		height: 20px;
		margin-top: 10px;
		transform: rotateZ(90deg)
	}
	.centerBox{
		display: flex;
		font-size: 12px;
	}
	.detailMenu{
		flex: 1;
	}
	.active{
		color: red;
	}
</style>
