<template>
	<view class="index "  >

	<scroll-view scroll-x="true" class="scollcd " :scroll-into-view="'top'+topBarid" >
		
		<view v-for="i,index in topBar" :key="index"   :id="'top'+index" >
		<text :class="topBarid===index ? 'f-color':''"  @click=" getTabid(index)" >
		{{i.name}}</text></view>
	</scroll-view>
	<!-- :style=" ipon5==true ?'':`height:${heights}rpx;`" -->
	<swiper :current="topBarid" @change="setTabid"  class="zsy" :style=" ipon5==true ?'':`height:${heights}rpx;`"  >
		<swiper-item v-for="e,index in topBar" :key="index"    >
			
			<!-- <view class="indexbox"   >
				<!-- 首页数据	 -->
				<template >
					<!-- :style=" ipon5==true ?'':`height:${heights}rpx;`" -->
					<scroll-view scroll-y="true"  class="zsy"  :style=" ipon5==true ?'':`height:${heights}rpx;`"  > 
						<template v-if='index==0'>
							<view  v-for="(i,k) in indexone[index]" :key="k"  >
								<indexSwiper v-if="i.type==='indexSwiper'" :data='i.data' ></indexSwiper>
								<Wife v-if="i.type==='Wife'" :data='i.data'></Wife>
								<template  v-if="i.type==='Cartone'">
								<Cart tlile="老婆"></Cart>
								<Cartone :data="i.data" :width="2" ></Cartone>
								</template>
							
							</view>
							<view class="hot_las">
								上拉加载更多.....
							</view>
						</template>
						<view v-else>
							无数据{{index}}
						</view>
						
					</scroll-view>
				</template>
					<!-- 使用二数据 -->	
			<!-- </view> -->
		</swiper-item>
	</swiper>
	
	</view>
</template>

<script>
	// SYone
	// 导航
	import indexSwiper from "@/components/index/indexSwiper.vue"
	// 喜欢的老婆
	import Wife from "@/components/index/Wife.vue"
	// 卡片自定义标题
	import Cart from "@/components/Cart.vue"
	
	
	
	// SYtwo
	// 卡片内容
	import Cartone from '@/components/Cartone.vue' 	
	import Brch from "@/components/index/Brch.vue"
	import dilboxk from "@/components/index/disfbox.vue"
	import Shop from "@/components/index/Shop.vue"
	export default {
		
		data() {
			return {
				ipon5:false,
				Catedata:[]
				,
				// 导航栏数据
				topBar:[],
				// 全部数据
				indexone:[],
				// use使用的数据
				usearr:[],
				// TAP序号
				topBarid:0,
				// 响应式宽度
				heights:1200
			}
		},
		components:{
			 indexSwiper,
			 Wife,
			 Cart,
			 Brch ,
			 dilboxk,
			Cartone,
			Shop 
			 
		},
		onReady(){
			
	
		
		}
		,
	
		methods: {
		// 封装对全部数据响应式的方法indexone
		// 1.初始化
		oneindex(){
			this.topBar.map(i=>{
				this.indexone.push([])
			})
			
		},
		// 2.单项添加arr数据：
		addindex(){
			let arr=this.usearr.push([])
			this.$set(this.indexone,this.topBarid,arr)
		},
		
		
		
		//Tab首页导航蓝传递ID
		 getTabid(e){
			 // 切换数据
			 
			 if(this.topBarid!==e)
			 {
				  this.topBarid=e
			 }
			 else{
				 return
			 }
			
			 
		 },
		 // 切换swicp 与scroll-view同步
		 setTabid(e){
			 this.topBarid=e.target.current
			 // 切换数据
			
		 }
		 ,
		 // 切换数据
		 usedata(){
		
			this.usearr=this.indexone[this.topBarid]||[]
			this.sethieght()
		 },
		 sethieght(){
			 // 设置请求可视宽度
			//  setTimeout(()=>{
			 // 	uni.createSelectorQuery().select('.indexbox').boundingClientRect((rect)=> {
			 // 	  // rect 就是获取到的元素的 boundingClientRect 信息
			 // 	this.heights=rect.height||900
				
			 // 	}).exec()
			//  },1000)
			
			
			 }
		 
		 
		},
		// 监视导航栏变化然后渲染数据
		watch:{
			topBarid(nes,old){
				if(this.indexone.length>nes)
				{
					// 有数据 下标为nes的数据
					this.usedata()
					
					
				}
				else{
					// 无数数据 发送请求渲染
					this.usedata()
				}
			}
			
		},
		onLoad() {
		// 请求
		
		let sysInfo = uni.getSystemInfoSync();
		// 获取底部标签栏高度
		let tabBarHeight = sysInfo.screenHeight - sysInfo.windowHeight - sysInfo.statusBarHeight;
		
	

// 获取可窗口宽度
let windowWidth = sysInfo.windowWidth;
if(windowWidth===320)
{
	this.ipon5=true
}


			
				uni.getSystemInfo({
				  success: (res) => {
				    // 可视区的高度
				   this.heights = (res.windowHeight-tabBarHeight/2)*2;
				   
					console.log(this.heights);
				  
				  }
				});
				
			
				
				
				
		
				uni.request({
					url:'http://192.168.0.105:3000/api/index_list/data',
					success:res=>{
						
						this.topBar=res.data.torBar
						this.oneindex()
						this.$set(this.indexone,this.topBarid,res.data.data)
						this.usedata()
						
						
					
				}})
				},
	}
</script>

<style lang="scss" scoped>
	// uniapp-5
	@media (max-width: 320px) {
	  .zsy {
	   width: 320px;
	   height: 1000rpx;
	  }}
	  
	// 上拉加载更多
	.hot_las{
		
		border-top: 1rpx solid #cccccc;
		
		text-align: center;
		color: #cccccc;
	}
	.index{
		width: 750rpx;
		.scollcd{
			width: 100%;
			height: 80rpx;
			white-space: nowrap;
		
			view{
				padding: 10rpx 30rpx;
			
				display: inline-block;
				text{
						font-size: 36rpx;
						
				}
			}
		}
	}
</style> 
