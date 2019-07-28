<template>
  <div class="container">
    <div class="show-content">
      您选择的地址为： <el-input v-model="address"></el-input>
    </div>
    <el-amap
      vid="amap"
      class="mapContainer"
      :zoom="zoom"
      :center="center"
      :amapManager="amapManager"
      :plugin="plugin"
      :events="events"
      >
    </el-amap>
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
        address: '',
        amapManager,
        events: {},
        plugin: [{
          pName: 'ToolBar',
          events: {
            init (o) {
              console.log(o);
            }
          }
        }]
      }
    },
    mounted () {
      let vm = this
      this.events = {
        init (o) {
          console.log(o, 'mapContainer')
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
    border: 1px solid #ccc;
  }
  .show-content {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    .el-input {
      margin-left: 40px;
      width: 600px;
    }
  }
</style>