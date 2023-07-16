<template>
	<view class="sweiper">
	
		<swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
				<image src="@/static/bz1.png" mode='widthFix'></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
				<image src="@/static/bz2.png" mode='widthFix'></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
			<image src="@/static/bz3.png"  mode='widthFix'></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
	
</template>

<script>
	export default {
		name:'Swiper',
		data(){
			return{
				
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.sweiper{
		
		swiper-item{
			.swiper-item{
				height: 100%;
				width: 100%;
				image{
					height: 100%;
					width: 100%;
					
				}
			}
		}
	}
	
</style>