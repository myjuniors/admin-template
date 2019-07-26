<template>
  <div class="left-menu">
    <el-menu
      :default-active="activeMenu"
      :router="isOpenRouter"
      class="el-menu-vertical"
      @select="handleSelect">
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
        isOpenRouter: true,
        currIndex: '',
        childRoutes: []
      }
    },
    computed: {
      ...mapState(['permission']),
      activeMenu () {
        const route = this.$route
        return route.matched[1].path.split('/')[2]
      }
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
      const listRoutes = filterRoutes.filter(item => {
        const list = item.children.filter(childItem => (childItem.path === this.activeMenu))
        if (list.length) {
          return list
        }
      })
      this.childRoutes = listRoutes[0].children
    },
    methods: {
      handleSelect (key, keyPath) {
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