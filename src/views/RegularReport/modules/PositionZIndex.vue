<template>
<a-card>
  <a-row :gutter='36'>
    <a-col :span="12">
      <div>
        <!-- <div class="movie-item">1 > 2 > 3</div> -->
        <div style="position: absolute; z-index: 20; background: rgba(30, 144, 255); width: 70px; height: 130px; margin: 2% 2%"> <br/><br/><br/><br/><br/>content</div>
        <div style="position: relative; z-index: 30; background: rgb(102, 255, 0); width: 70px; height: 130px; "> <br/><br/>pop-#1</div>
        <div style="position: relative; z-index: 10; background: rgb(166, 255, 204); width: 70px; height: 130px; text-align: right;"> <br/><br/>pop-#2</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
        position: absolute; z-index: 20; div: content <br/>
        position: relative; z-index: 30; div: pop-#1<br/>
        position: relative; z-index: 10; div: pop-#2
      </div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item"></div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">

      </div>
    </a-col>
  </a-row>
</a-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PositionZIndex',
  data() {
    return {
      itemCounts: 0
    };
  },
  methods: {

  }
});
</script>

<style scoped>
.movie-container-cen {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 280px;
  background: palevioletred;
}

.movie-item {
  background: #00a0e9;
  font-size: 16px;
  font-weight: bold;
  width: 280px;
  height: 80px;
  margin: 2% 2%;
}

.movie-content-container {
  background: #00a0e9;
  text-align: left;
  padding: 2% 2%;
  width: 456px;
  height: 250px;
}
</style>
