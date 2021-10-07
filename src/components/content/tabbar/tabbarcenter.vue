<template>
	<tabbar>
		<tabBarItem path='/home' activeColor="#f565d2">
			<template #isActive_slot><img src="../../../assets/img/tabbar/home_active.svg" /></template>
			<template #notActive_slot><img src="../../../assets/img/tabbar/home.svg" /></template>
			<template #name_slot>首页</template>		
		</tabBarItem>
		<tabBarItem path='/classify' activeColor="#f565d2">
			<template #isActive_slot><img src="../../../assets/img/tabbar/Classify_active.svg" /></template>
			<template #notActive_slot><img src="../../../assets/img/tabbar/Classify.svg" /></template>
			<template #name_slot>分类</template>
		</tabBarItem>
		
		<tabBarItem path='/shopcar' activeColor="#f565d2">
			<template #isActive_slot><img src="../../../assets/img/tabbar/shopcar_active.svg" /></template>
			<template #notActive_slot><img src="../../../assets/img/tabbar/shopcar.svg" /></template>
			<template #name_slot>购物车</template>		
		</tabBarItem>
		
		<tabBarItem path='/main' activeColor="#f565d2">
			<template #isActive_slot><img src="../../../assets/img/tabbar/main_active.svg" /></template>
			<template #notActive_slot><img src="../../../assets/img/tabbar/main.svg" /></template>
			<template #name_slot>我的</template>
		</tabBarItem>
	</tabbar>
</template>

<script>
	import tabbar from '../../common/tabbar/tabbar.vue'
	import tabBarItem from '../../common/tabbar/tabbarItem.vue'
	export default{
		name:"tabbarcenter",
		components:{
			tabbar,
			tabBarItem
		}
	}
</script>

<style>
	.tabbar_box .tabbar_item img{
		width: 20px;
	 	height: 20px; 
		margin-top: 5px;
	}
</style>
