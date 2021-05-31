<template>
<a-card>
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item-custom">item1</div>
        <div class="movie-item">item2</div>
        <div class="movie-item">item3</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
        .movie-item-custom { // 是item,而非前面列举的container<br/>
          background: #00a0e9;<br/>
          align-self: flex-end; // 同align-items<br/>
          width: 80px;<br/>
          height: 80px;<br/>
          margin: 2% 2%;<br/>
        }
      </div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item">item1</div>
        <div class="movie-item">item2</div>
        <div class="movie-item">item3</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
          display: flex;<br/>
          flex-direction: row;<br/>
          justify-content: center;<br/>
          align-items: center;<br/>
          width: 400px; // 要定义<br/>
          height: 280px;
      </div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen-hor">
        <div class="movie-item">item1</div>
        <div class="movie-item">item2</div>
        <div class="movie-item">item3</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
        display: flex; <br/>
        justify-content: center; // 水平<br/>
        <br/>
       // flex-direction: row; // 默认值，可不写<br/>
      </div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-col">
        <div class="movie-item">item1</div>
        <div class="movie-item">item2</div>
        <div class="movie-item">item3</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
        display: flex; <br/>
        flex-direction: column;
      </div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container">
        <div class="movie-item">item1</div>
        <div class="movie-item">item2</div>
        <div class="movie-item">item3</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
        display: flex;
      </div>
    </a-col>
  </a-row>
</a-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

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

.movie-container-cen-hor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: palevioletred;
    width: 400px;
  height: 280px;
}
.movie-container-col {
  display: flex;
  flex-direction: column;
  background: palevioletred;
}
.movie-container {
  display: flex;
  background: palevioletred;
}

.movie-item {
  background: #00a0e9;
  width: 80px;
  height: 80px;
  margin: 2% 2%;
}
.movie-item-custom {
  background: #00a0e9;
  align-self: flex-end;
  width: 80px;
  height: 80px;
  margin: 2% 2%;
}

.movie-content-container {
  background: #00a0e9;
  width: 356px;
  height: 233px;
}

</style>
