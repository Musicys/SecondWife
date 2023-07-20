<template>
	<view class="branch">
		<image :src="src"></image>
		
	</view>
</template>

<script>
	export default {
		props:{
			src:{
				default(){
					return '../../static/wife/wifeone.png'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.branch{
		width: 100%;
		height: 300rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>