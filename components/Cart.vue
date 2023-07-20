<template>
	<view>
		<!-- 卡片 -->
		<view class="Cart">
			<view class="top">
			<text><strong>---</strong></text><view ><strong>{{tlile}}</strong></view> <text><strong>---</strong></text> 
			</view>
			<view class="but">
				
				
			</view>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.Cart{
		background: #FFFFFF;
		width: 100%;
		margin-top:2rpx ;
		border-top: 1px solid black;
		.top{
			padding: 10px 0px;
			display: flex;
			justify-content: center;
			border-bottom: 1rpx solid rgba(0, 0, 0, .3);
		}
		.but{
		
		}
		
	}
</style>
<script>
	export default {
		name:"Cart",
		components:{},
		
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

