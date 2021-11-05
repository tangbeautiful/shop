<template>
	<div class="topbar">
		<img src="../../../assets/img/top.png" />
	</div>
</template>

<script>
	export default{
		name:"Topbtn"
	}
</script>

<style scoped>
	.topbar{
		width: 40px;
		height: 40px;
		text-align: center;
		position: fixed;
		bottom: 66px;
		right: 10px;
		z-index: 1000;
		background-color: #ffffff;
		border-radius: 60px;
	}
	.topbar img{
		width: 100%;
	}
</style>
