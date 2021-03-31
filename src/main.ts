import Vue from 'vue';
import Cookies from 'js-cookie';
import Element from 'element-ui';
import './assets/styles/element-variables.scss';
import FormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import "vue-form-wizard/dist/themify-icons.css";
import "vue-form-wizard/dist/all.css";
import Pagination from '@/components/Pagination/index.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
});
Vue.use(FormWizard);

Vue.component('Pagination', Pagination);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
