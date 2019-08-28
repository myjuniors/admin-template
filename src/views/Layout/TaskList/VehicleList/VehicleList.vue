<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="phonenumber">
      <el-input v-model.number="ruleForm.phonenumber" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script type="text/javascript">
  import * as Untils from '../../../../untils'

  export default {
    name: 'VehicleList',
    data () {
      return {
        ruleForm: {
          username: '',
          phonenumber: '',
          email: ''
        },
        rules: {
          username: [
            { 
              validator: Untils.formValidateDiy('validateUserName', '姓名由2-10位汉字组成'), 
              trigger: 'blur' 
            }
          ],
          phonenumber: [
            { 
              validator: Untils.formValidateDiy('validatePhoneNumber', '手机号由以1开头的11位数字组成'), 
              trigger: 'blur' 
            }
          ],
          email: [
            { 
              validator: Untils.formValidateDiy('validateUserEmail', '不是正确的邮箱格式'), 
              trigger: 'blur' 
            }
          ]
        }
      };
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!');
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>