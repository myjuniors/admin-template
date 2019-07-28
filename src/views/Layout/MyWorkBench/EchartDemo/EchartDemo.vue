<template>
  <div id="myChart" class="chartContainer"></div>
</template>

<script type="text/javascript">
  import echarts from 'echarts'

  export default {
    name: 'EcharDemo',
    data () { 
      return {
        
      }
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { 
            text: 'ECharts 入门示例' 
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .chartContainer {
    height: 500px;
  }
</style>