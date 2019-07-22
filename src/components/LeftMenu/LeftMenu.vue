<template>
  <el-aside width="210px" class="left-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      background-color="#001D24"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script type="text/javascript">
  export default {
    name: 'LeftMenu',
    data() { 
      return {
        
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .left-menu {
    width: 210px;
    height: 100%;
    position: fixed;
    top: 65px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #001D24;
    .el-menu-vertical {
      height: 100%;
      /deep/ .el-menu-item-group__title {
        padding: 0;
      }
    }
  }
</style>