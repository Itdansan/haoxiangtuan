<template>
	<div class="index">
		<!--头部定位搜索-->
		<div class="search">
			<!--地址-->
			<div class="address">
				<img class="address_img" src="../../assets/img/index-address.png" />
				<span>海珠区</span>
				<img class="address_arrow" src="../../assets/img/index-down.png" />
			</div>
			<!--搜索-->
			<div class="search_box">
				<img src="../../assets/img/index-search.png" />
				<input type="text" name="" id="" value="" placeholder="请输入关键字/商品" />
			</div>
			<!--更多-->
			<div class="more_add">
				<img src="../../assets/img/index-add.png" />
			</div>
		</div>
		<!--顶部模块qu-->
		<div class="top-box">
			<!--图片轮播-->
			<div class="bannet">
				<swiper class="swiper-banner" :options="swiperOptionBanner" ref="mySwiper" @someSwiperEvent="callback">
					<swiper-slide>
						<img src="../../assets/img/index-banner.png" />
					</swiper-slide>
					<swiper-slide>
						<img src="../../assets/img/index-banner.png" />
					</swiper-slide>
					<swiper-slide>
						<img src="../../assets/img/index-banner.png" />
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!--广告-->
			<div class="banner_img">
				<img src="../../assets/img/index-banner03.png" />
			</div>
			<!--二级功能模块-->
			<div class="fun_module">
				<div class="fun_box">
					<div class="fun_item">
						<img src="../../assets/img/index-food.png" />
						<p>美食</p>
					</div>
					<div class="fun_item">
						<img src="../../assets/img/index-cat.png" />
						<p>超市便利</p>
					</div>
					<div class="fun_item">
						<img src="../../assets/img/index-entertainment.png" />
						<p>休闲娱乐</p>
					</div>
					<div class="fun_item">
						<img src="../../assets/img/index-travel.png" />
						<p>旅划算</p>
					</div>
					<div class="fun_item">
						<img src="../../assets/img/index-mall.png" />
						<p>商城</p>
					</div>
				</div>
				<div class="fun_box">
					<div class="fun_item">
						<img src="../../assets/img/index-tuan.png" />
						<p>团购</p>
					</div>
					<div class="fun_item">
						<img src="../../assets/img/index-recommended.png" />
						<p>每日十荐</p>
					</div>
					<div class="fun_item">
						<img src="../../assets/img/index-miaosha.png" />
						<p>超级秒杀</p>
					</div>
					<div class="fun_item">
						<img src="../../assets/img/index-xin.png" />
						<p>公益助农</p>
					</div>
					<div class="fun_item">
						<img src="../../assets/img/index-cooperation.png" />
						<p>合伙人</p>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOptionBanner: {
					notNextTick: true,
					autoplay: true,
					loop: true,
					autoplay: {
						disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination',
					},
					on: {
						click: function(e) {
							//some code
							console.log(e);
						}
					}
				}
			}
		},
		mounted() {},
		methods: {
			callback() {

			}
		}

	}
</script>

<style scoped lang="scss">
	.index {
		width: 100%;
		background-color: #eee;
		.search {
			height: 100px;
			line-height: 100px;
			padding: 0 19px;
			.address {
				float: left;
				.address_img {
					width: 35px;
					margin-right: 7px;
					vertical-align: middle;
				}
				.address_arrow {
					width: 20px;
					margin-left: 8px;
					vertical-align: middle;
				}
			}
			.search_box {
				float: left;
				width: 480px;
				height: 60px;
				line-height: 60px;
				margin-top: 20px;
				background-color: #f2f1ed;
				border-radius: 20px;
				margin-left: 14px;
				img {
					width: 26px;
					vertical-align: middle;
					margin-left: 25px;
				}
				input {
					height: 60px;
					width: 70%;
					padding-left: 75px;
				}
			}
			.more_add {
				float: left;
				height: 100px;
				line-height: 100px;
				margin-left: 20px;
				img {
					width: 40px;
					vertical-align: middle;
				}
			}
		}
		/*顶部功能模块*/
		.top-box {
			width: 100%;
			background-color: #fff;
			/*轮播*/
			.bannet {
				margin-bottom: 20px;
			}
			/*二级功能模块*/
			.fun_module {
				width: 100%;
				padding-top: 30px;
				.fun_box {
					width: 100%;
					margin-bottom: 29px;
					display: flex;
					justify-content: space-around;
					.fun_item {
						width: 100%;
						text-align: center;
						img {
							width: 67px;
							margin-bottom: 8px;
						}
					}
				}
			}
		}
	}
</style>