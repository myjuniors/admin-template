<template>
  <div class="menuContainer">
    <Header/>
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
  .menuContainer {
    height: 65px;
    background-color: #001D24;
  }
</style>