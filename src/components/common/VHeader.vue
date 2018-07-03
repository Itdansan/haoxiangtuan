<template>
	<div class="header">
		<div class="return-btn" @click="go()">
			<img src="../../assets/img/return-arrows.png"/>
		</div>
		<span class="header-title">{{title}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: {
			//标题
			title: {
				default: ''
			}
		},
		methods: {
		    go(){
          this.$router.go(-1);
        }
    }
	}
</script>

<style scoped lang="scss">
.header{
	height: 88px;
	line-height: 88px;
	padding: 0 39px;
	text-align: center;
	.return-btn{
		float: left;
		width: 50px;
		height: 62px;
		padding-top: 26px;
		img{
			width: 20px;
		}
	}
	.header-title{
		font-size: 36px;
	}
}
</style>
