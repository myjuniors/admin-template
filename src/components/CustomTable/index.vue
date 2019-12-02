<template>
  <div class="custom-table">
    <!-- 表格  -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @row-click="handleRowClick">
      <!-- 选择框 -->
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
       <!--序号-->
      <el-table-column
        v-if="options.index"
        label="序号"
        type="index"
        width="200"
        :index="indexMethod"
        align="center">
      </el-table-column>
      <!-- （从后台获取数据）动态渲染的表格列 -->
      <template v-for="(column, index) in columns">
        <el-table-column
          :key="index"
          :prop="column.prop"
          :label="column.label">
        </el-table-column>
      </template>
      <!-- 固定的操作按钮列 -->
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器  -->
    <div class="pagation-container">
      <el-pagination
        v-if="pagination"
        background
        layout="total, prev, pager, next, jumper"
        :total="pagination.total"
        :current-page="pagination.currentPage"
        @current-change="handleIndexChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Bus from '../../untils/bus'
  export default {
    name: 'CustomTable',
    props: {
      tableData: Array, // 表格数据源
      columns: Array, // 表头列的数组
      fetchData: Function, // 查询分页数据的函数
      pagination: Object, // 分页器的配置对象
      options: Object // 参数配置对象
    },
    methods: {
      // 点击分页
      handleIndexChange (current) {
        console.log(current);
        // 更新选中的当前页的值
        this.pagination.currentPage = current;
        // 获取当前页数据
        this.fetchData()
      },
      // 点击编辑按钮
      handleClick (row) {
        console.log(row);
      },
      // 选中当前行
      handleSelectionChange (selection) {
        Bus.$emit("selection-change", selection);
      },
      // 点击当前行
      handleRowClick(row, event, column) {
        Bus.$emit("row-click", row, event, column);
      },
      // 自定义表格序号
      indexMethod(index) {
        if (this.pagination.currentPage) {
          return '201912020' + (index + (this.pagination.currentPage - 1) * 10 + 1);
        } else {
          return '201912020' + (index + 1);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagation-container {
    margin: 30px 0 0 0;
    text-align: right;
  }
</style>