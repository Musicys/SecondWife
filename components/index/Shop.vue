<template>
	<view class="Shop">
		<image src="../../static/bz2.png" mode="widthFix"></image>
		<view class="Scroll">
		<scroll-view scroll-x="true" class="Scrollbox" >
			<Cartone :data='Catedata' whitespace="nowop"></Cartone>
		</scroll-view>
		</view>
	</view>
</template>

<script>
	import Cartone from '@/components/Cartone.vue'
	export default {
		props:['Catedata'],
		components:{
			Cartone,
		}
	}
</script>

<style lang="scss" scoped>
	.Shop{
	
		width: 100%;
		image{
			width: 100%;
		}
		.Scroll
		{
			
			
			.Scrollbox{
			white-space: nowrap;
			width: 100%;
			
			.boxone{
	
					display: inline-block;
					width: 100%;
					height: 250rpx;
					line-height: 300rpx;
					text-align: center;
					font-size: 36rpx;
				
			}
		}
		
		}
	}
	
</style>