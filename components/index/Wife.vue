<template>
	<view class="wife">
		<view class="wifekep" v-for="(i,k) in Wifedata" :key="k">
			<view class="top">
			<image :src="i.bigurl" mode="widthFix" ></image>
			</view>
			<view class="but"   >
					<image v-for="(item,f) in i.data" :key="f":src="item.imgurl" mode=""></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
	props:['data'],
	data(){
		return {
			Wifedata:[],
			
		}
	},
	beforeMount(){
	this.Wifedata=this.data
			// console.log(this.Wifedata);
	}
	
	}
</script>
<style lang="scss" scoped>
	.wife{
		border-top:1rpx solid black ;
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