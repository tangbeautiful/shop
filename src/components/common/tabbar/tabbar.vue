<template>

		<div class="tabbar_box">
			<slot></slot>
		</div>
	
</template>

<script>
	export default{
		name:'tabBar'
	}
</script>

<style>
	.tabbar_box{
		width: 100%;
		height: 54px;
		background-color: #c2c2c2;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		z-index: 100;
	}	
</style>
