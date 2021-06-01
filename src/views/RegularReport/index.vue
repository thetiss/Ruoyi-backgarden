<template>
  <div class="gutter-example">
    <a-row><create-form /></a-row>
    <!-- <a-row><json-tree /></a-row> -->
    <!-- <a-row><search-form /></a-row> -->
    <!-- <a-row :gutter="16">
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          col-8
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          col-8
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          col-8
        </div>
      </a-col>
    </a-row> -->

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreateForm from './modules/CreateForm.vue';
// import JsonTree from './modules/JsonTree.vue';
// import SearchForm from './modules/SearchForm.vue';

export default Vue.extend({
  components: {
    CreateForm
    // SearchForm,
    // JsonTree
  }
});
</script>

<style scoped>
.gutter-example >>> .ant-row > div {
  background: palevioletred;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>
