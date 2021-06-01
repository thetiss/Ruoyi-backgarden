<template>
<a-card>
  <a-divider>params</a-divider>
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item">Arrow Function: params</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
          // outer with args, but arrow without args<br/>
          function store(params) {<br/>
            const getStoreSellout = () => {<br/>
              console.log(1, 'params arrow, using outer params', params); // log ['c', 'd']<br/>
            };<br/>
            getStoreSellout(['a', 'b']);<br/>
          }<br/>
          store(['c', 'd']);<br/>
          // outer with args, arrow with ...res<br/>
          function autoSellMachine(params) {<br/>
            const getMachineType = (...res) => { // ...res rest parameter collects the execution arguments of the arrow function<br/>
              console.log(1, 'params arrow, using ...rest params', res); // log ['coco', 'besi']<br/>
            };<br/>
            getMachineType(['coco', 'besi']);<br/>
          }<br/>
          autoSellMachine(['moly', 'octman']);<br/>
      </div>
    </a-col>
  </a-row>
  <a-divider />
  <a-row :gutter='36'>
    <a-col :span="12">
      <div class="movie-container-cen">
        <div class="movie-item">Regular Function: params</div>
      </div>
    </a-col>
    <a-col :span="12">
      <div class="movie-content-container">
          function goods(params) {<br/>
            console.log(1, 'params regular', params);<br/>
          }<br/>
          goods(['banana', 'apple']); // log ['banana', 'apple']<br/>
      </div>
    </a-col>
  </a-row>
  <a-divider>this</a-divider>
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
    // method
    this.getMethodUsageInFunction();
    // return
    this.getReturnInFunction();
    // Params
    this.getArgsInFunction();
    // This
    this.getThisInArrowFunc();
    this.getThisInRegularFunc();
  },
  methods: {
    getMethodUsageInFunction() {
      // mock class, but i don't know

    },
    getReturnInFunction() {
      function sumVal(val1, val2) {
        const sumValue = val1 + val2;
        return sumValue; // 显式返回函数值
      }
      const autoMinusBy1 = (val) => val - 1; // 只一个表达式(没有{})，隐式返回。
      const goodsItemCategories = sumVal(12, 2);
      const timePassedBy = autoMinusBy1(29);
      console.log(1, 'return regular', goodsItemCategories);
      console.log(1, 'return =>', timePassedBy);
    },
    getArgsInFunction() {
      // regular with args
      function goods(params) {
        console.log(1, 'params regular', params);
      }
      goods(['banana', 'apple']); // log ['banana', 'apple']
      // outer with args, but arrow without args
      function store(params) {
        const getStoreSellout = () => {
          console.log(1, 'params arrow, using outer params', params); // log ['c', 'd']
        };
        getStoreSellout(['a', 'b']);
      }
      store(['c', 'd']);
      // outer with args, arrow with ...res
      function autoSellMachine(params) {
        const getMachineType = (...res) => { // ...res rest parameter collects the execution arguments of the arrow function
          console.log(1, 'params arrow, using ...rest params', res); // log ['coco', 'besi']
        };
        getMachineType(['coco', 'besi']);
      }
      autoSellMachine(['moly', 'octman']);
    },
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
  width: 556px;
  height: 350px;
}
</style>
