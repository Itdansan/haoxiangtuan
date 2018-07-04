<template>
	<div class="login">
		<!--头部-->
		<VHeader title="登录"></VHeader>
		<!--内容-->
		<div class="login-content">
			<!--微信登录-->
			<div class="WeChat-login">
				<img src="../../assets/img/weixin.png" />
			</div>
			<!--输入框-->
			<div class="login-list">
				<!--登录选择-->
				<div class="login-sel">
					<div class="sel-item" :class="{'sel-actve':styleType}" @click="loginType = true;styleType = !styleType">快速登录<span class="underline"></span></div>
					<div class="sel-item" :class="{'sel-actve':!styleType}" @click="loginType = false;styleType = !styleType">密码登录<span class="underline"></span></div>
				</div>
				<!--快速登录-->
				<div class="login-box" v-show="loginType">
					<div class="input-box">
						<img src="../../assets/img/phone.png" />
						<!--<input type="number" name="" id="" value="" placeholder="请输入手机号" />-->
            <mt-field placeholder="请输入手机号" type="number" class="inputss" name="" id="" value="" v-model="phone"></mt-field>
					</div>
					<div class="input-box">
						<img src="../../assets/img/verification-code.png" />
						<!--<input class="code-input" type="text" name="" id="" value="" placeholder="请输入验证码" />-->
            <mt-field  placeholder="请输入验证码" class="code-input inputss" type="text" name="" id="" value="" v-model="VfCode"></mt-field>
						<div class="code-btn">获取验证码</div>
					</div>
					<div class="login-btn" :class="imgC && phone != '' && VfCode != '' ? 'login_go_btn':'' " @click="phoneLogin()">登录</div>
        </div>

        <!--密码登录-->
        <div class="login-box" v-show="!loginType">
          <div class="input-box">
            <img src="../../assets/img/phone.png" />
            <!--<input type="number" name="" id="" value="" placeholder="请输入账号或手机号" />-->
            <mt-field placeholder="请输入账号或手机号" type="number" class="inputss" name="" id="" value="" v-model="username"></mt-field>
          </div>
          <div class="input-box">
            <img src="../../assets/img/lock.png" />
            <mt-field placeholder="请输入密码" type="password" class="inputss" v-model="password"></mt-field>
          </div>
          <div class="login-btn"  :class="username != '' && password != '' ? 'login_go_btn':'' " @click="UserLogin()">登录</div>
        </div>

      </div>
      <!--用户协议-->
      <div class="agreement" v-show="loginType">
        <img src="../../assets/img/wordpass-btn.png" v-show="!imgC" @click="imgC = !imgC"/>
        <img src="../../assets/img/wordpass-btn-yes.png" v-show="imgC" @click="imgC = !imgC"/>
        <router-link to="/Agreement">用户已同意平台协议内容</router-link>
      </div>
      <!--注册忘记密码-->
      <div class="register_forget" v-show="!loginType">
        <router-link to="/Register">注册</router-link>
        <router-link to="/ForgetPass">忘记密码 ?</router-link>
      </div>
		</div>
	</div>
</template>

<script>
	import VHeader from "../../components/common/VHeader.vue";
	export default {
		data() {
			return {
			    imgC:false,
          loginType:true,
          styleType:true,
          phone:'',
          VfCode:'',
          username:'',
          password:'',
			};
		},
		props: {
			//标题
			title: {
				default: ''
			}
		},
		components: {
			VHeader,
		},
		methods: {
      phoneLogin(){
          if(this.imgC && this.phone != '' && this.VfCode != ''){
//              加入接口
            this.$router.push({path:'/'})
          }else{
            this.$toast({
              message: '请输入完整',
              position: 'middle',
              duration: 2000
            });
            return ;
          }
      },
      UserLogin(){
        if(this.username != '' && this.password != ''){
//              加入接口
          this.$router.push({path:'/'})
        }else{
          this.$toast({
            message: '请输入完整',
            position: 'middle',
            duration: 2000
          });
          return ;
        }
      }
    }
	}
</script>

<style scoped lang="scss">
	.login {
		width: 100%;
		.login-content {
			padding: 0 30px;
			.WeChat-login {
				width: 100%;
				padding: 280px 0px 168px;
				text-align: center;
				img {
					width: 208px;
					margin: 0 auto;
				}
			}
			.login-list {
				width: 100%;
				height: 100%;
				border: 2px solid #eee;
				overflow: hidden;
				margin-bottom: 30px;
				border-radius: 20px;
				.login-sel {
					width: 100%;
					height: 98px;
					line-height: 98px;
					border-bottom: 1px solid #eee;
					.sel-item {
						width: 50%;
						height: 98px;
						float: left;
						text-align: center;
						font-size: 28px;
						color: #868686;
					}
					.sel-actve {
						color: #fea712;
						.underline {
							display: block;
							width: 180px;
							height: 5px;
							background-color: #fea712;
							margin: -5px auto 0;
						}
					}
				}
				.login-box {
					width: 100%;
					.input-box {
						width: 100%;
						height: 98px;
						line-height: 98px;
            display: flex;
						img {
							width: 36px;
							margin: 28px 24px 28px 32px;
						}
            .inputss{
              flex:1;
            }
						input {
							height: 98px;
							font-size: 26px;
							width: 85%;
              outline:none;

						}
						.code-input {
							width: 50%;
              outline:none;
						}
						.code-btn {
							width: 150px;
							height: 50px;
							line-height: 50px;
							float: right;
							margin-right: 33px;
							margin-top: 25px;
							font-size: 24px;
							border: 2px solid #fea712;
							border-radius: 10px;
							text-align: center;
							color: #fea712;
						}
					}
					.login-btn {
						width: 100%;
						height: 98px;
						line-height: 98px;
						background-color: #eee;
						color: #fff;
						text-align: center;
						font-size: 34px;
					}
          .login_go_btn{
            background-color: #fea712;
          }
				}
			}
			.agreement {
				width: 100%;
        margin-top:10px;
				img {
					width: 30px;
					margin-right: 30px;
				}
				span {
					font-size: 26px;
					color: #9a9a9a;
				}
			}
      .register_forget{
        width:100%;
        margin-top:10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding:10px 30px;
        display: flex;
        justify-content:space-between;
      }
		}
	}
</style>
