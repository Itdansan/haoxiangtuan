<template>
  <div class="SetPass">
      <VHeader title="设置密码"></VHeader>
      <div class="setPass_box">
        <div class="login-box" >
          <div class="input-box">
            <img src="../../assets/img/lock.png" />
            <!--<input type="number" name="" id="" value="" placeholder="请输入手机号" />-->
            <mt-field placeholder="密码至少6位数，可以数字，字母" type="password" class="inputss" name="" id="" value="" v-model="pass1"></mt-field>
          </div>
          <div class="input-box">
            <img src="../../assets/img/lock.png" />
            <!--<input class="code-input" type="text" name="" id="" value="" placeholder="请输入验证码" />-->
            <mt-field  placeholder="请再次输入密码" class="code-input inputss" type="password" name="" id="" value="" v-model="pass2"></mt-field>
          </div>
        </div>

        <div class="login-btn" :class=" pass1 != '' && pass2 != '' ? 'login_go_btn':'' " @click="register()">注册</div>

      </div>
  </div>
</template>

<script>
  import VHeader from "../../components/common/VHeader.vue";
    export default{
      data(){
        return {
          pass1:'',
          pass2:''
        }
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
      methods:{
        register(){
          var pattern = /[1-9a-zA-Z]{6,}/;

//          console.log(pattern.test(str));
            if(this.pass1 == '' && this.pass2 == ''){
              this.$toast({
                message: '请输入完整',
                position: 'middle',
                duration: 2000
              });
              return ;
            }else if(this.pass1 !== this.pass2){
              this.$toast({
                message: '两次密码不一致',
                position: 'middle',
                duration: 2000
              });
              return ;
            }else if(!pattern.test(this.pass1)){
                        console.log(pattern.test(this.pass1));

              this.$toast({
                message: '密码至少6位数，可以数字，字母',
                position: 'middle',
                duration: 2000
              });
              return ;
            }else{
//                注册成功 返回登录页
              this.$router.push({path:'/Login'})
            }
        }
      }
    }
</script>

<style scoped lang="scss">
  .setPass_box{
    padding: 0 30px;
    .login-box {
      width: 100%;
      border: 2px solid #eee;
      overflow: hidden;
      margin-bottom: 96px;
      margin-top:60px;
      border-radius: 20px;
      .input-box {
        width: 100%;
        height: 98px;
        line-height: 98px;
        display: flex;
        img {
          width: 36px;
          margin: 28px 24px 28px 32px;
        }
        label{
          font-size:24px;
          position: relative;
          display: inline-block;
          padding-right:10px;
          margin-righ:10px;
        }
        label::after{
          display: block;
          content: '';
          position: absolute;
          width:1px;
          height: 20px;
          background: #333;
          top:50%;
          margin-top:-10px;
          right:0;

        }
        .inputss{
          flex:1;
        }
        input {
          height: 98px;
          font-size: 26px;
          width: 70%;
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

    }


    .login-btn {
      width: 100%;
      margin-top:40px;
      height: 98px;
      line-height: 98px;
      background-color: #eee;
      color: #fff;
      -webkit-border-radius:10px;
      -moz-border-radius:10px;
      border-radius:10px;
      text-align: center;
      font-size: 34px;
    }
    .login_go_btn{
      background-color: #fea712;
    }
  }
</style>

