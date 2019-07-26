<template>
  <div class="left-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item v-for="child in childRoutes" :key="child.path" :index="child.path">
        <i :class="child.meta.icon" v-if="child.meta.icon"></i>
        <span slot="title">{{child.meta.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script type="text/javascript">
  import Bus from '../../store/eventBus'
  import { mapState } from 'vuex'

  export default {
    name: 'LeftMenu',
    data () { 
      return {
        currIndex: '',
        childRoutes: []
      }
    },
    computed: {
      ...mapState(['permission'])
    },
    watch: {
      currIndex (newVal) {
        const filterRoutes = this.permission.routes.filter(item => item.children)
        if (newVal) {
          this.childRoutes = filterRoutes.filter(item => (item.path === newVal))[0].children
        }
      }
    },
    mounted () {
      Bus.$on('sendActiveIndex', data => {
        this.currIndex = data
      })
      const filterRoutes = this.permission.routes.filter(item => item.children)
      this.childRoutes = filterRoutes[0].children
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .left-menu {
    width: 210px;
    height: 100%;
    background-color: deeppink;
    .el-menu-vertical {
      height: 100%;
    }
  }
</style>