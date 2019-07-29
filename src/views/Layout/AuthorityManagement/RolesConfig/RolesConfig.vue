<template>
  <div class="roleContainer">
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'RolesConfig',
    data () {
      return {
        data: [
          {
            id: 1,
            label: '我的工作台',
          }, 
          {
            id: 2,
            label: '任务列表',
            children: [
              {
                id: 5,
                label: '车辆列表'
              }, 
              {
                id: 6,
                label: '品牌列表'
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      getCheckedNodes () {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys () {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes () {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys () {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked () {
        this.$refs.tree.setCheckedKeys([]);
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>

</style>

