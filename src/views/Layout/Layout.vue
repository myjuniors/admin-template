<template>
  <div class="myContainer">
    <div class="menuContainer">
      <Header/>
    </div>
    <div class="mainContainer">
      <LeftMenu/>
      <div class="right-container">
        <div class="content-view">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Header from '../../components/Header/Header.vue'
  import LeftMenu from '../../components/LeftMenu/LeftMenu.vue'

  export default {
    name: 'Layout',
    components: {
      Header,
      LeftMenu
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .myContainer {
    position: relative;
    height: 100%;
  }
  .menuContainer {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    height: 65px;
    background-color: #001D24;
  }
  .mainContainer {
    height: 100%;
    padding-top: 65px;
    display: flex;
    .right-container {
      width: 100%;
      background-color: #f0f2f5;
      padding: 10px;
      .content-view {
        padding: 20px;
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
    }
  }
</style>