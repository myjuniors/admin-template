<template>
  <div class="container">
    <p class="err-tips">你没有权限访问该页面</p>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: "NoAccess"
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .err-tips {
    color: red;
  }
</style>