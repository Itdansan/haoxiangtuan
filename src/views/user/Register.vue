<template>
  <div class="Register">
  <vHeader title="注册"></vHeader>

    <div class="register_box">
      <div class="login-box" >
        <div class="input-box">
          <img src="../../assets/img/phone.png" />
          <label>+86</label>
          <mt-field placeholder="请输入手机号" type="number" class="inputss" name="" id="" value="" v-model="phone"></mt-field>
        </div>
        <div class="input-box">
          <img src="../../assets/img/verification-code.png" />
          <mt-field  placeholder="请输入验证码" class="code-input inputss" type="text" name="" id="" value="" v-model="VfCode"></mt-field>
          <div class="code-btn">获取验证码</div>
        </div>
      </div>
      <div class="agreement">
        <img src="../../assets/img/wordpass-btn.png" v-show="!imgC" @click="imgC = !imgC"/>
        <img src="../../assets/img/wordpass-btn-yes.png" v-show="imgC" @click="imgC = !imgC"/>
        <router-link to="/Agreement">用户已同意平台协议内容</router-link>
      </div>

      <div class="login-btn" :class="imgC && phone != '' && VfCode != '' ? 'login_go_btn':'' " @click="lext()">下一步</div>

    </div>

  </div>
</template>

<script>
  import VHeader from "../../components/common/VHeader.vue";
    export default{
      data(){
        return {
            imgC:false,
            phone:'',
            VfCode:''
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
        lext(){
            if(this.imgC && this.phone != '' && this.VfCode != ''){
              this.$router.push({path:'/SetPass'})
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
  .register_box{
    padding: 0 30px;
    .login-box {
      width: 100%;
      border: 2px solid #eee;
      overflow: hidden;
      margin-bottom: 30px;
      margin-top:60px;
      border-radius: 20px;
    .input-box {
      width: 100%;
      height: 98px;
      line-height: 98px;
      border-bottom: 1px solid #eee;
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

    .agreement {
      width: 100%;
      margin-top:0px;
      img {
        width: 30px;
        margin-right: 30px;
        margin-top:5px;
      }
      span {
        font-size: 26px;
        color: #9a9a9a;
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
