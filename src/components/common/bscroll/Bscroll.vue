<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll';
	export default{
		name:'BScroll',
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				scroll:null,
				time:500,
			}
		},
		mounted(){
			this.$nextTick(() => {
			this.scroll = new Bscroll(this.$refs.wrapper,{
				probeType:this.probeType,
				click:true,
				pullUpLoad:this.pullUpLoad
			})
			this.scroll.on('scroll',(pos) => {
				this.$emit("ScrollTopDis",pos)
			})
			this.scroll.on('pullingUp',() =>{
				this.$emit('pullingUp')
			})
			})
		},
		methods:{
			ScrollTop(x,y,time){
				this.scroll && this.scroll.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.scroll && this.scroll.finishPullUp();
			},
			refresh(){
				this.scroll && this.scroll.refresh();
			}
		}
	}
</script>

<style>
</style>
