<template>
	<view class="box">
		<view class="ite" v-for="i,index in flexdata " :key='index'>
			<image src="@/static/sytwo/ce.png" mode="widthFix"></image>
			<text>黑猫游戏</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			flexdata:{
				default(){
					return [{url:'@/static/sytwo/ce.png',text:'黑毛游戏'},
							{url:'@/static/sytwo/ce.png',text:'黑毛游戏'},
							{url:'@/static/sytwo/ce.png',text:'黑毛游戏'},
							{url:'@/static/sytwo/ce.png',text:'黑毛游戏'},
							{url:'@/static/sytwo/ce.png',text:'黑毛游戏'},
							{url:'@/static/sytwo/ce.png',text:'黑毛游戏'},
							{url:'@/static/sytwo/ce.png',text:'黑毛游戏'},
							{url:'@/static/sytwo/ce.png',text:'黑毛游戏'},
							
					
							
					]
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		display:flex;
		flex-wrap: wrap;
		width: 100%;
		.ite{
			padding-top:10rpx;
			width: 25%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image{
				border-radius: 50%;
				width: 100%;
				
			}
			text{
				
			}
		}
	}
</style>