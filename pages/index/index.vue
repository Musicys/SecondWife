<template>
	<view class="index">
	
		
		
		<!-- app  h5-->
		
		 <indexSwiper></indexSwiper>
			<Wife></Wife>
			<Cart tlile="老婆"></Cart>
			
	</view>
</template>

<script>
	// 导航
	import indexSwiper from "@/components/index/indexSwiper.vue"
	// 喜欢的老婆
	import Wife from "@/components/index/Wife.vue"
	// 卡片自定义标题
	import Cart from "@/components/Cart.vue"
	export default {
		
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			 indexSwiper,
			 Wife,
			 Cart
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
