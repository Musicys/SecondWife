<template>
	<view class="Cart">
		<view class="top">
			<image :src="Cartdata.url" mode="widthFix"></image>
		</view>
		<view class="but">
			<text class="nr">{{Cartdata.shopname}}</text>
			<view  class="but_jg">
			<text v-for="i,index in Cartdata.bq" :key='index'>
				{{i}}
			</text>
			</view>
			<view class="monny">
				￥<text>{{Cartdata.Money}}</text>
				<text>折扣{{Cartdata.ck}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Cartone",
		data() {
			return {
				Cartdata:{
					url:'/static/wife/wifethree.png',
					shopname:'埃利瑟',
					bq:['好看','很好看'],
					Money:'99',
					ck:'5.7'
					
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
.Cart{
	
	
	flex:40%;
	padding: 10rpx 5rpx;
	max-width: 375rpx;
	.top{
		width: 100%;
		image{
			border-radius: 15rpx;
			
			width: 100%;
		}
	}
	.but{
	
		.nr{
			display: inline-block;
			overflow: hidden;
			width: 300rpx;
			white-space: nowrap;
			text-overflow: ellipsis;
			
		}
		.but_jg{
			text{
				margin-right: 10rpx;
				color: green;
				&:nth-child(1){
					color: red;
				}
			}
		}
		.monny{
			color: red;
			text{
				
				font-size: 40rpx;
				&:nth-child(2){
					font-size: 17rpx;
					margin-left: 27rpx;
					color: #cccccc;
				}
			}
		}
	}
}
</style>