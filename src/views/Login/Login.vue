<template>
  <div class="Container">
     <el-form ref="Form" :model="Form" :rules="Rules" class="-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          登录后台管理系统
        </h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">

        </span>
        <el-input
          v-model="Form.username"
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
          v-model="Form.password"
          type="password"
          placeholder="请输入密码"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handle"
        />
        <div class="forgetContainer">
          <el-button type="text" class="forgetPassword">忘记密码？</el-button>
        </div>
      </el-form-item>

      <el-button :loading="loading" type="primary" class="Btn" @click.native.prevent="handle">
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
  export default {
    name: 'Login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!(value.length)) {
          callback(new Error('请输入账号'))
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
        Form: {
          username: '',
          password: ''
        },
        Rules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        loading: false
      }
    },
    methods: {
      handle() {
        this.$refs.Form.validate(valid => {
          if (valid) {
            this.loading = true

            this.$store.dispatch('Login', this.Form)
              .then(() => {
                this.$router.replace('/')
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
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

  .Container {
    .bgContainer;
    background-image: url('./images/bg.jpg');
    .-form {
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
      .Btn {
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