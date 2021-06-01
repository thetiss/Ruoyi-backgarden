<template>
<a-card>
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item">Arrow Function: this</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
        const myObject = { <br/>
          showThisValue(arr) { <br/>
            console.log(1, '=>', this); // log myObject <br/>
            const callBack = () => { <br/>
              console.log(1, '=> callback', this); // log myObject <br/>
            }; <br/>
            arr.forEach(callBack);<br/>
          } <br/>
        };<br/>
        myObject.showThisValue([1, 2]);<br/>
        // this的值已语法绑定，与outer function 的值一样
      </div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item">Regular Function: this</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
        // a simple invocation<br/>
        // a method invocation<br/>
        // a indirect invocation<br/>
        // a constructor invocation<br/>
        this的值取决于regular function在哪里被调用
      </div>
    </a-col>
  </a-row>
</a-card>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'CreateForm',
  data() {
    return {
      itemCounts: 0
    };
  },
  created() {
    this.getThisInArrowFunc();
    this.getThisInRegularFunc();
  },
  methods: {
    // regular func(using expression not declaration) VS arrow func
    getThisInRegularFunc() {
      // a simple invocation
      function showThisValue() {
        console.log(1, 'regular simple invocation', this);
      }
      showThisValue(); // if in strict mode, log undefined
      // a method invocation
      const student = {
        goToSchool() {
          console.log(1, 'regular method invocation', this); // 取决于在哪里被调用
        }
      };
      student.goToSchool();
      // a indirect invocation
      const teacher = { name: 'Leo' };
      showThisValue.call(teacher);
      showThisValue.apply(teacher);
      // a constructor invocation
      // eslint-disable-next-line no-new
      function Book() {
        console.log(1, 'regular constructor invocation', this);
      }
      // eslint-disable-next-line no-new
      new Book();
    },
    getThisInArrowFunc() {
      const myObject = {
        showThisValue(arr) {
          console.log(1, '=>', this); // log myObject
          const callBack = () => {
            console.log(1, '=> callback', this); // log myObject
          };
          arr.forEach(callBack);
        }
      };
      myObject.showThisValue([1, 2]);
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
