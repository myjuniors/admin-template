<template>
  <div class="table_style">
    <el-table
      ref="commonTable"
      v-loading="options.loading"
      :data="tableData"
      :stripe="options.stripe"
      header-row-class-name="table-header-row"
      @selection-change="handleSelectionChange"
      @row-click="handleRowClick"
    >
      <!--空状态-->
      <template slot="empty">
        <template v-if="options.progress">
          <div class="progress">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="options.progressVal"></el-progress>
            <p>正在读取数据...</p>
          </div>
        </template>

        <img v-else class="data-pic" src="../../assets/images/zanwushuju.png" alt />

      </template>
      <!--selection选择框-->
      <el-table-column v-if="options.mutiSelect" type="selection" style="width:50px" align="center"></el-table-column>
      <!--序号-->
      <el-table-column
        v-if="options.index"
        label="序号"
        type="index"
        width="50"
        :index="indexMethod"
        align="center"
      ></el-table-column>
      <!-- 数据列 -->
      <template v-for="(column, index) in columns">
        <el-table-column
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :show-overflow-tooltip="true"
        >
          <template slot-scope="scope">
            <template v-if="!column.render">{{scope.row[column.prop]}}</template>

            <!-- render -->
            <template v-else>
              <RenderDom :row="scope.row" :index="scope.index" :render="column.render" />
            </template>

            <!-- render button -->
            <template v-if="column.button">
              <template v-for="(btn, i) in column.group">
                <el-button
                  class="table_btn"
                  :key="i"
                  :disabled="btn.disabled"
                  @click.stop="btn.onClick(scope.row, scope.$index)"
                >{{btn.name}}</el-button>
              </template>
            </template>

            <!-- slot 你可以其他常用项 -->
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="pagination">
      <span
        v-if="pagination"
        class="page_size"
      >第{{pagination.currentPage}}/{{parseInt(pagination.total/10)+1}}页 共{{pagination.total}}条</span>
      <el-pagination
        background
        v-if="pagination"
        :total="pagination.total"
        :current-page="pagination.currentPage"
        layout="total, prev, pager, next, jumper"
        @current-change="handleIndexChange"
        class="pagination_style"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
/*import { common } from "@/util/common.js";*/
export default {
  name: "Table",
  data() {
    return {};
  },
  components: {
    RenderDom: {
      functional: true, // 函数式组件 - 无 data 和 this 上下文 => better render
      props: {
        row: Object,
        index: Number,
        render: Function
      },
      /**
       * @param {Function} createElement - 原生创建dom元素的方法， 弃用，推荐使用 jsx
       * @param {Object} ctx - 渲染的节点的this对象
       * @argument 传递参数 row index
       */
      render(createElement, ctx) {
        const { row, index } = ctx.props;
        return ctx.props.render(row, index);
      }
    }
  },
  props: {
    tableData: Array,
    options: Object, // 表格参数控制 maxHeight、stripe 等等...
    columns: Array,
    fetch: Function, // 获取数据的函数
    pagination: Object, // 分页，不传则不显示
    selection: Array
  },
  created() {
    // 传入的options覆盖默认设置
    this.$parent.options = Object.assign(
      {
        maxHeight: 500,
        stripe: true, // 是否为斑马纹
        border: true
      },
      this.options
    );
    this.options.initTable && this.fetch();
  },
  /*watch: {
    selection(val, oldVal) {
      console.log(val);
      let data = this.tableData.filter(item => val.includes(item.id));
      console.log(data);
      data.forEach((val, index) => {
        this.$refs.commonTable.toggleRowSelection(val, true);
      });
    }
  },*/
  methods: {
    handleIndexChange(current) {
      // 切换页码
      console.log(current);
      this.pagination.currentPage = current;
      this.fetch();
    },
    handleSelectionChange(selection) {
      this.$emit("selection-change", selection);
    },
    handleRowClick(row, event, column) {
      this.$emit("row-click", row, event, column);
    },
    indexMethod(index) {
      if (this.pagination.currentPage) {
        return index + (this.pagination.currentPage - 1) * 10 + 1;
      } else {
        return index + 1;
      }
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .table_style {
    background: #ffffff;
    box-shadow: -2px 2px 4px 0 rgba(216, 216, 216, 0.5),
      2px 2px 4px 0 rgba(216, 216, 216, 0.5);
  }
  .table_style .active {
    background-color: #ff6329;
    border-radius: 2px;
  }
  .table_btn {
    font-size: 13px;
    color: #ff6329;
    margin: 0;
    padding: 0;
    border: 1px solid transparent; //自定义边框
    outline: none;
    background: none;
  }
  .table_btn:hover,
  .table_btn:focus {
    border: 0px;
    border: 1px solid transparent; //自定义边框
    outline: none;
    background: none;
  }
  .data-pic {
    padding: 200px;
  }
  .progress {
    padding: 200px 0;
  }
  .progress /deep/ .el-progress-bar__inner {
    background: #ff6329;
  }
  .progress /deep/ .el-progress-bar {
    width: 80%;
  }
  //分页开始
  .pagination {
    overflow: auto;
  }

  .page_size {
      float      : left;
      padding    : 26px 40px 22px 40px;
      height     : 28px;
      line-height: 28px;
      font-size  : 13px;
      color      : #222222;
  }
  .pagination_style {
    display   : inline-block;
    text-align: right;
    padding   : 26px 40px 22px 40px !important;
    float     : right;
  } 
  .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #FF6329 !important;
  }

  .el-pager li:hover {
      color: #FFEAD7;
  }
  //分页结束
</style>
