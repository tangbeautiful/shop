<template>
  <div id="nav">
   <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
	
	<tabbarcenter></tabbarcenter>
	<router-view v-slot="{ Component }">
		  <keep-alive>
			<component :is="Component" />
		  </keep-alive>
    </router-view>
  </div>

</template>

<style>
	@import url("assets/css/normalize.css");
	#nav{
		height: 44px;
	}
</style>
