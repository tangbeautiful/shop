<template>
	<div class="title">
		<detailNavBar></detailNavBar>
		
	</div>
</template>

<script>
	import detailNavBar from "./detailItem/detailNavBar.vue"
	export default{
		name:"detail",
		components:{
			detailNavBar
		},
		data(){
			return{
				spuId:0,
			}
		},
		created() {
			this.spuId = this.$route.params.spuId
		}
	}
</script>

<style>
	.title {
		width: 100%;
		z-index: 100;
		top: 0;
	}
</style>
