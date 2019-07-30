<template>
  <div>
    <el-dialog
      title="新增"
      :visible.sync="addVisible"
      width="30%"
      :before-close="addClose"
      @open="open"
      :close-on-click-modal="false"
    >
      <el-form :model="form" ref="form" v-if="addVisible">
        <el-form-item
          label="角色名称"
          :label-width="formLabelWidth"
          prop="name"
          :rules="[{ required: true, message: '角色名称不能为空'}]"
        >
          <el-input v-model.trim="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注"  prop="description">
          <el-input type="textarea" v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="状态"  prop="status">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="0"></el-switch>
        </el-form-item>
      </el-form>
      <el-tree
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps">
      </el-tree>
      <div slot="footer" class="dialog_footer">
        <el-button @click="addClose">取 消</el-button>
        <el-button type="primary" @click="addyTypes">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "AddRole",
  props:{
    addVisible:Boolean,
    addClose:Function

  },
  data () {
    return {
      form:{
        description:'111',
        status:'1'
      },
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
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>