<template>
<a-card>
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item">callback+setTimeout => synchronously</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
          console.log(1);<br/>
          const showSyncMsg = () => {<br/>
            console.log(3);<br/>
          };<br/>
          const fakeSyncLiner = (funcParams: any) => {<br/>
            setTimeout(() => {<br/>
              console.log(2);<br/>
              funcParams(); // 定义callback，同步在异步setTimeout里执行<br/>
            }, 1000);<br/>
          };<br/>
          fakeSyncLiner(showSyncMsg);<br/>
      </div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item">异步与setTimeout</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
          console.log(1); <br/>
          setTimeout(() => { <br/>
            console.log(2); <br/>
          }, 1000); <br/>
          console.log(3);
      </div>
    </a-col>
  </a-row>
</a-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'JsonTree',
  data() {
    return {
      itemCounts: 0
    };
  },
  created() {
    this.getSyncLinerWithSetTimeout();
    // this.getTypicalAsyncLinerWithSetTimeout();
  },
  methods: {

    // 通过setTimeout + callback() => 实现synchronously
    getSyncLinerWithSetTimeout() {
      const showSyncMsg = () => {
        console.log(3);
      };
      const fakeSyncLiner = (funcParams: any) => {
        setTimeout(() => {
          console.log(2);
          funcParams(); // 定义callback，同步在异步setTimeout里执行
        }, 1000);
      };
      console.log(1);
      fakeSyncLiner(showSyncMsg);
    },
    getTypicalAsyncLinerWithSetTimeout() {
      /**
       * Result: This above code will print “3” before “2”
       * Cuz: `console.log(2);` will run after 2 seconds
       * setTimeout is asynchronous, so `console.log(3)` will not wait for setTimeout.
       */
      console.log(1);
      setTimeout(() => {
        console.log(2);
      }, 1000);
      console.log(3);
    }
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
