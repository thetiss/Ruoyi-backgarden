<template>
  <div class="gutter-example">
    <!-- 创建/编辑用户,单独封装了组件 -->
    <a-row><position-z-index /></a-row>
    <!-- <a-row><a-button @click="$refs.createModal.show()">点击打开弹出框</a-button><create-form ref="createModal" /></a-row> -->
    <!-- <a-row><five-diffs-in-arrow-func /></a-row> -->
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
import PositionZIndex from './modules/PositionZIndex.vue';
// import CreateForm from './modules/RichModal.vue';
// import FiveDiffsInArrowFunc from './modules/FiveDiffsInArrowFunc.vue';
// import JsonTree from './modules/JsonTree.vue';
// import SearchForm from './modules/SearchForm.vue';

export default Vue.extend({
  components: {
    PositionZIndex
    // CreateForm
    // FiveDiffsInArrowFunc
    // SearchForm,
    // JsonTree
  },
  methods: {

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
