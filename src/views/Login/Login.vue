<template>
  <div class="loginContainer">
     <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          登录后台管理系统
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
        <div class="forgetContainer">
          <el-button type="text" class="forgetPassword">忘记密码？</el-button>
        </div>
      </el-form-item>

      <el-button :loading="loading" type="primary" class="loginBtn" @click.native.prevent="handleLogin">
        登录
      </el-button>

       <div class="toggleContainer">
         <span>还没有账号？</span>
         <el-button type="text" @click="goRegistry">前往注册</el-button>
       </div>

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
      },
      goRegistry () {
        this.$router.replace('/registry')
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../../styles/common/common.less";

  .loginContainer {
    .bgContainer;
    background-image: url('./images/bg.jpg');
    .login-form {
      width: 360px;
      height: 320px;
      padding-top: 10px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      text-align: center;
      border-radius: 8px;
      .el-form-item {
        &:nth-child(3) {
          margin-bottom: 10px;
          position: relative;
        }
        .forgetContainer {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          height: 20px;
          text-align: right;
          line-height: 20px;
          .forgetPassword {
            padding: 0 20px;
          }
        }
      }
      .toggleContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 14px;
        }
      }
      .loginBtn {
        width: 70%;
        margin: 10px 0;
      }
      .title-container {
        .title {
          line-height: 50px;
          margin-bottom: 15px;
          font-size: 22px;
          color: #333;
          font-weight: 700;
        }
      }
      .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
          background: transparent;
          border: 0;
          -webkit-appearance: none;
          border-radius: 0;
          padding: 12px 5px 12px 15px;
          color: @light_gray;
          height: 47px;
          caret-color: @cursor;

          &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px @bg inset !important;
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