<template>
  <div class="myContainer">
    <div class="menuContainer">
      <Header/>
    </div>
    <div class="mainContainer">

    </div>
  </div>
</template>

<script type="text/javascript">
  import Header from '../../components/Header/Header.vue'

  export default {
    name: 'Home',
    components: {
      Header
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .myContainer {
    position: relative;
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
  }
</style>