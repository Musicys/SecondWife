<template>
	<view class="box" :class="whitespace==1?'ys':''" >
		
	
	<view class="Cart " v-for="i,index in Cartdata" :key="index" :class="width=='2'?'datatwo':'datathree'" >
		<view class="top">
			
			<image :src="i.url" mode="widthFix"></image>
		</view>
		<view class="but">
			<text class="nr">{{i.shopname}}</text>
			<view  class="but_jg">
			<text v-for="ie,index in i.bq" :key='index'>
				{{ie}}
			</text>	
			</view>
			<view class="monny">
				￥<text>{{i.Money}}</text>
				<text>折扣{{i.ck}}</text>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name:"Cartone",
		props:{
			data:{},
			width:{
				default(){
					return 2
				}
			},
			whitespace:{
				default(){
					return 1
				}
			}
		},
		data() {
			return {
				Cartdata:[],
					// 样式
				
				
			};
			
			
		},
	
		beforeMount(){
			
			this.Cartdata=this.data
			
		},
		
	}
</script>

<style lang="scss" scoped>
	
	.ys{
		flex-wrap: wrap;
	
	
	}
	.datatwo{
			width: 50%;
	}
	.datathree{
			width: 33%;
	}
	.box{
		display: flex;

		justify-content: space-between;
		width: 100%;
	
.Cart{

	.top{
		width: 100%;
		image{
			border-radius: 15rpx;
			
			width: 95%;
			display: block;
			margin: auto;
		}
	}
	.but{
	
		.nr{
			display: inline-block;
			margin-left: 10rpx;
			overflow: hidden;
			width: 300rpx;
			white-space: nowrap;
			text-overflow: ellipsis;
		
			
		}
		.but_jg{
			
			text{
				display: inline-block;
				margin-left: 10rpx;
				margin-right: 20rpx;
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
}
</style>