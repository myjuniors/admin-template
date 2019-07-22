<template>
  <div class="navContainer">
    <div class="left-logo">
      <img src="./images/logo.png" alt="logo">
      <span>后台管理系统模板</span>
    </div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#001D24"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
    </el-menu>
    <div class="right-user">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <span class="role-name">管理员</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="person">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: 'Header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        if (command === 'logout') {
          this.$router.replace('/login')
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .navContainer {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 65px;
    background-color: #001D24;
  }
  .left-logo {
    display: flex;
    align-items: center;
    width: 300px;
    height: 66px;
    img {
      width: 80px;
      height: 20px;
      margin-right: 30px;
    }
    span {
      padding-top: 4px;
      color: #fff;
    }
  }
  .right-user {
    display: flex;
    align-items: center;
    height: 66px;
    .el-dropdown-link {
      display: flex;
      align-items: center;
      padding-left: 3px;
      margin-bottom: 6px;
      cursor: pointer;
      i {
        margin-left: 10px;
        color: #fff;
      }
    }
    .role-name {
      font-size: 12px;
      color: #fff;
    }
  }
  .el-menu {
    width: 960px;
    height: 66px;
    padding: 0 30px;
    .el-menu-item, .el-submenu /deep/ .el-submenu__title {
      height: 65px;
      line-height: 65px;  
    }
  }
</style>