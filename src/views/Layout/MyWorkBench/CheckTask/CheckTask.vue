<template>
  <div class="container">
    <el-amap
      vid="amap"
      class="mapContainer"
      :zoom="zoom"
      :center="center"
      :scrollWheel="scrollWheel"
      :toSearch="toSearch"
      :amapManager="amapManager"
      :events="events"
      >
    </el-amap>

    <div class="show-content">
      您选择的地址为： {{address ? address : '地图数据加载中。。。。'}}
    </div>
  </div>
</template>

<script type="text/javascript">
  import { AMapManager } from 'vue-amap'
  let amapManager = new AMapManager()

  export default {
    name: "CheckTask",
    data () {
      return {
        zoom: 16,
        center: [121.329402, 31.228667],
        result: [],
        address: '',
        radius: 100,
        toSearch: false,
        scrollWheel: false,
        amapManager,
        map: null,
        events: {}
      }
    },
    mounted () {
      let vm = this
      this.events = {
        init (o) {
          console.log(o, 'mapContainer')
          vm.map = o
          AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
            const positionPicker = new PositionPicker({
                mode: 'dragMap',
                map: o
            })
            positionPicker.on('success', positionResult => {
              vm.result = positionResult.regeocode.pois
              vm.address = positionResult.regeocode.formattedAddress
              vm.center = [positionResult.position.lng, positionResult.position.lat]
            })
            positionPicker.on('fail', () => {
              vm.result = []
              vm.address = ''
              vm.center = [121.329402, 31.228667]
            })
            positionPicker.start()
          })
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .mapContainer {
    width: 100%;
    height: 500px;
  }
  .show-content {
    padding-top: 40px;
    font-size: 20px;
    font-weight: 700;
    color: red;
  }
</style>