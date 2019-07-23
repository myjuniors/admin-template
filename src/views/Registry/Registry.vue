<template>
  <div class="registryContainer">
    <div class="registry">
      <el-form :model="registryForm" label-position="left">
        <h3 class="title">
          欢迎注册后台管理系统
        </h3>
        <el-form-item prop="userPhone">
          <el-input v-model="registryForm.userPhone" placeholder="输入手机号" maxlength=11 class="userPhone"></el-input>
          <span class="getCodeBtn curr">获取验证码</span>
        </el-form-item>
        <el-form-item prop="validCode">
          <el-input v-model="registryForm.validCode" maxlength=4 placeholder="请输入4位验证码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registryForm.password" type="password" placeholder="输入密码（6-10位数字和字母）" minlength=6 maxlength=10></el-input>
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input v-model="registryForm.rePassword" type="password" placeholder="确认密码" minlength=6 maxlength=10></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login_btn curr" @click.native.prevent="handlerRegistry">注册</el-button>
        </el-form-item>
        <p class="registryCon">已有账号，<span class="registryBtn" @click="goLogin" >前往登录</span></p>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: "Registry",
    data () {
      return {
        registryForm: {
          userPhone: '',
          validCode: '',
          password: '',
          rePassword: ''
        }
      }
    },
    methods: {
      handlerRegistry () {

      },
      goLogin () {
        this.$router.replace('/login')
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../../styles/common/common.less";

  .registryContainer {
    .bgContainer;
    background-image: url('./images/bg.jpg');
    .registry {
      padding-top: 30px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 460px;
      background-color: #fff;
      border-radius: 8px;
      .title {
        margin-bottom: 20px;
        font-size: 22px;
        color: #333;
        text-align: center;
        font-weight: bold;
      }
      .el-input {
        display: inline-block;
        height: 40px;
        width: 260px;
        font-size: 14px;
      }
      .el-input::-webkit-input-placeholder {
        color: #929191;
      }
      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: center;
        border-radius: 5px;
        color: #454545;
        margin-bottom: 20px;
      }
      .login_btn {
        width: 200px;
        height: 40px;
        border-radius: 20px;
        background-color: #1890FF;
      }
      .userPhone {
        position: relative;
      }
      .getCodeBtn {
        display: block;
        position: absolute;
        right: 5px;
        top: 5px;
        width: 114px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        background-color: #ccc;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        margin-top: 2px;
        color: #fff;
        cursor: pointer;
        &.curr {
          background-color: #409EFF;
        }
      }
      .registryCon {
        font-size: 14px;
        text-align: center;
      }
      .registryBtn {
        font-size: 14px;
        color: #169BD5;
        cursor: pointer;
      }
    }
  }
</style>