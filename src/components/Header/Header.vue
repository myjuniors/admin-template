<template>
  <div class="navContainer">
    <div class="left-logo">
      <img src="./images/logo.png" alt="logo">
      <span>后台管理系统</span>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#001D24"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">我的工作台</el-menu-item>
      <el-menu-item index="2">任务列表</el-menu-item>
      <el-menu-item index="3">数据总览</el-menu-item>
      <el-menu-item index="4">权限管理</el-menu-item>
      <el-menu-item index="5">个人中心</el-menu-item>
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
        activeIndex: '1'
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
    display: flex;
    justify-content: space-between;
    height: 65px;
    padding: 0 40px;
    background-color: #001D24;
  }
  .left-logo {
    display: flex;
    align-items: center;
    width: 280px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 960px;
    height: 66px;
    .el-menu-item, .el-submenu /deep/ .el-submenu__title {
      height: 65px;
      line-height: 76px;
      font-size: 16px;
      margin-right: 30px;
    }
  }
</style>