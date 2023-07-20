<template>
	<view class="sweiper">
	
		<swiper :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(i,k) in Indexdata" :key="k"  >
				<view  class="swiper-item">
				<image  :src="i.imgurl" mode='widthFix'></image>
				
				</view>
			</swiper-item>
		
		</swiper>
	</view>
	
</template>

<script>
	export default {
		name:'Swiper',
		props:{
			data:Array,
			default(){
				return []
			}
		},
		data(){
			return{
				Indexdata:[]
				
			}
		},
		beforeMount(){
			this.Indexdata=this.data
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