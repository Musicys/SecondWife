<template>
	<view class="wife">
		<view class="wifekep">
			<view class="top">
				<image src="@/static/wife/wifeone.png" mode="widthFix"></image>
			</view>
			<view class="but">
				<image src="@/static/wife/wifefive.jpg" mode="heightFix"></image>
				<image src="@/static/wife/wifesix.png" mode="heightFix"></image>
				<image src="@/static/wife/wifenine.png" mode="heightFix"></image>
			</view>
		</view>
		
		<view class="wifekep">
			<view class="top">
				<image src="@/static/wife/wifetwo.png" mode="widthFix"></image>
			</view>
			<view class="but">
				<image src="@/static/wife/wifenight.jpg" mode="heightFix"></image>
				<image src="@/static/wife/wifeseven.jpg" mode="heightFix"></image>
				<image src="@/static/wife/wifethree.png" mode="heightFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	
	}
</script>
<style lang="scss" scoped>
	.wife{
		width: 100%;
	
		background: #85D8FF;
		
		display:flex;
		flex-direction: column;
		
		.wifekep{
			overflow: hidden;
			flex: 1;
			border-radius: 15rpx;
			display:flex;
			flex-direction: column;
			
			width: 95%;
			margin: auto;
			margin-top: 10px;
		.top{
			overflow: hidden;
			flex: 1;
			height: 250rpx;
			width: 100%;
			image{
				width: 100%;
				height: 100%;
			}
			
			
		}
		.but{
			border-radius: 15rpx;
			display: flex;
			height: 400rpx;
			image{
				padding: 2rpx;
				height: 100%;
			}
		}
		}
	}
</style>