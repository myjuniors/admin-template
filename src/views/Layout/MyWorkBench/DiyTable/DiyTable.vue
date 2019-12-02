<template>
  <div class="table-container">
    <div class="search-group">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名：">
        <el-input v-model="formInline.username" placeholder="用户名" size="small"></el-input>
      </el-form-item>
      <el-form-item label="年龄：">
        <el-input v-model="formInline.age" placeholder="年龄" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="diy-table">
      <CustomTable :tableData="tableData" :columns="columns" :pagination="pagination" :fetchData="initTable" :options="options"/>
    </div>
  </div>
</template>

<script>
import Bus from '../../../../untils/bus'
import CustomTable from '../../../../components/CustomTable'
export default {
  name: 'DiyTable',
  data () {
    return {
      formInline: {
        username: '',
        age: ''
      },
      formSearch: {}, // 搜索条件
      tableData: [
        {
          id: 1,
          username: '张三',
          age: 20,
          address: '北京市'
        },
        {
          id: 2,
          username: '李四',
          age: 30,
          address: '河南省'
        },
          {
          id: 3,
          username: '王二',
          age: 40,
          address: '江苏省'
        },
          {
          id: 4,
          username: '苏柳',
          age: 50,
          address: '上海市'
        }
      ],
      columns: [
        {
          label: '用户名',
          prop: 'username'
        },
        {
          label: '年龄',
          prop: 'age'
        },
        {
          label: '地址',
          prop: 'address'
        },
      ],
      pagination: {
        total: 100,
        currentPage: 1
      },
      options: {
        index: true
      }
    }
  },
  components: {
    CustomTable
  },
  created () {
    // 第一次进入到组件就去查询列表数据
    this.onSearch();
    console.log('初始化查询');
  },
  mounted () {
    Bus.$on('selection-change', function (selection) {
      console.log(selection);
    })
    Bus.$on('row-click', function (row, event, column) {
      console.log(row, event, column);
    })
  },
  methods: {
    onSearch () {
      this.formSearch = { ...this.formInline };
      this.pagination.currentPage = 1;
      this.initTable();
    },
    initTable () {
      let params = {
        ...this.formSearch,
        currentPage: this.pagination.currentPage,
        pageSize: 10
      };
      // 发请求获取列表数据
      console.log(params);
    }
  }
}
</script>

<style>

</style>