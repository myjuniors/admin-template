<template>
  <div id="actLineChart" class="actLineContainer"></div>
</template>

<script type="text/javascript">
import echarts from "echarts";
export default {
  name: "ActLine",

  data() {
    return {
      option: {
        title: {
          text: '动态折线图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: (function () {
              var now = new Date();
              var res = [];
              var len = 10;
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 2000);
              }
              return res;
            })()
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '连接1',
            type: 'line',
            data: (function () {
              var res = [];
              var len = 0;
              while (len < 10) {
                  res.push(null);
                  len++;
              }
              return res;
            })()
          },

        ]
      },
      axisData:'',

    }
  },
  mounted () {
      this.drawActLine();
  },
  methods: {
    drawActLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("actLineChart"));
      myChart.setOption(this.option)
      setInterval(() => {
        this.axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        var dataZero = this.option.series[0].data;
        dataZero.shift();
        dataZero.push(Math.round(Math.random() * 10000));
        this.option.xAxis[0].data.shift();
        this.option.xAxis[0].data.push(this.axisData);
        myChart.setOption(this.option);
      }, 2000)
    }
  }
}


</script>

<style lang="less" rel="stylesheet/less" scoped>
  .actLineContainer {
    height: 100%;
  }
</style>