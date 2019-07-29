<template>
  <div class="content">
    <!--搜索form-->
    <div class="forminputSearch">
      <el-form :inline="true" :model="roleForm" ref="roleForm" class="demo-form-inline">
        <el-form-item label="角色名称"  prop="name">
          <el-input v-model="roleForm.name" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch" >查询</el-button>
          <el-button type="primary" @click="onReset" >清除条件</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary" @click="onAdd" >新建</el-button>
    <el-button type="primary" @click="onDelete" >删除</el-button>
    <!--角色列表-->
    <Table
      :tableData="tableData"
      :columns="columns"
      :options="options"
      :pagination="pagination"
      @selection-change="handleSelectionChange"
    />
    <!--添加角色-->
    <AddRole
      :addVisible="addVisible"
      :addClose="addClose"
    ></AddRole>
  </div>

</template>


<script type="text/javascript">
import AddRole from './AddRole'
import Table from "../../../../components/Table/table";
export default {
  name: "RolesConfig",
  data () {
    return {
      roleForm:{
        name:'aa',
      },
      tableData:[],
      columns: [
            {
                prop: "name",
                label: "角色名称"
            },
            {
                prop: "description",
                label: "备注"
            },

            {
                button: true,
                label: "操作",
                group: [
                    // {
                    //   name: "详情",
                    //   onClick: (row, index) => {
                    //     this.detailRule(row);
                    //   }
                    // },
                    // {
                    //   name: "编辑",
                    //   onClick: (row, index) => {
                    //     this.editRule(row);
                    //   }
                    // }
                ]
            }
        ],
      options: {
        mutiSelect: true,
        index: true, // 显示序号， 多选则 mutiSelect
        loading: false, // 表格动画
        initTable: true // 是否一挂载就加载数据
      },
      pagination: {
        total: 0,
        currentPage: 1
      },
      addVisible:false,
      deleteVisible:false

    }
  },
  methods:{
    handleSelectionChange () {
        console.log(111);
    },
    onSearch () {
        console.log('search');
    },
    onReset () {
        console.log('reset');
    },
    onAdd () {
      this.addVisible = true
    },
    onDelete () {
      this.deleteVisible = true
    },
    addClose() {
      //新建关闭
      this.addVisible = false;
    },

  },
  components:{AddRole,Table}


}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .forminputSearch{
    border-bottom: solid 10px #f0f2f5;

  }
</style>