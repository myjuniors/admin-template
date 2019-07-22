<template>
  <div class="loginContainer">
     <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          后台管理系统模板
        </h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">

        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="请输入账号"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">

        </span>
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="请输入密码"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:70%;margin:20px 0;" @click.native.prevent="handleLogin">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script type="text/javascript">
  import { validUsername } from '../../untils/validate'
import { setTimeout } from 'timers';

  export default {
    name: 'Login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('请输入正确的账号'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码格式不能少于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        loading: false
      }
    },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            setTimeout(() => {
              this.loading = false
              this.$router.replace('/home')
            }, 3000)
          } else {
            console.log('提交的信息是非法的')
            return false
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @bg:#283443;
  @light_gray:#eee;
  @cursor: #fff;

  .loginContainer {
    position: relative; 
    width: 100%;
    height: 100%;
    background-image: url('./images/bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .login-form {
      width: 360px;
      height: 320px;
      padding-top: 20px;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
      text-align: center;
      .title-container {
        .title {
          line-height: 50px;
        }
      }
      .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: @light_gray;
          height: 47px;
          caret-color: @cursor;

          &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px @bg inset !important;
            -webkit-text-fill-color: @cursor !important;
          }
        }
      }
      /deep/ .el-form-item__error {
          margin-left: 27px;
      }
    }
  }
</style>