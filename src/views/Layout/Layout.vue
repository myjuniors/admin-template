<template>
  <div class="myContainer">
    <div class="menuContainer">
      <Header/>
    </div>
    <div class="mainContainer">
      <LeftMenu/>
      <router-view/>
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
  }
</style>