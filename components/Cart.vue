<template>
	<view>
		<!-- 卡片 -->
		<view class="Cart">
			<view class="top">
			<text><strong>---</strong></text><view ><strong>{{tlile}}</strong></view> <text><strong>---</strong></text> 
			</view>
			<view class="but">
				<Cartone></Cartone>
				<Cartone></Cartone>
			
			</view>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.Cart{
		background: #FFFFFF;
		width: 100%;
		margin-top:2rpx ;
		.top{
			padding: 10px 0px;
			display: flex;
			justify-content: center;
			border-bottom: 1rpx solid rgba(0, 0, 0, .3);
		}
		.but{
		display: flex;
		flex-wrap: wrap;
		}
		
	}
</style>
<script>
	import Cartone from '@/components/Cartone.vue' 
	export default {
		name:"Cart",
		components:{Cartone},
		
		props:{
			// 
			tlile:{
			
				type:String,
				default:'标题'
				
			}
		},
		
		data() {
			return {
				
			};
		}
	}
</script>

