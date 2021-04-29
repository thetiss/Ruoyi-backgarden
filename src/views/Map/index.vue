<template>
    <div id='map-container' class="map-container"></div>
</template>

<script>

export default {
  name: 'mapView',
  data() {
    return {
      map: null,
      osmUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    };
  },
  mounted() {
    // this.map = this.$utils.map.createMap("map-container");
    // // 添加地图视图中心位置
    // this.map.setView([29.59, 106.59], 16);
    // // 加载 open street map和mapbox 图层服务
    // this.$utils.map.createTileLayer(this.map, this.osmUrl);
    this.$utils.map.createChinaMap();
  }
};

</script>

<style>
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
