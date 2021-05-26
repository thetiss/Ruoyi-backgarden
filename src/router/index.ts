import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import EnterpriseApproval from "../views/EnterpriseApproval/index.vue";
import EnterpriseApprovalForm from '../views/EnterpriseApprovalForm/index.vue';
import TestTable from '../views/EnterpriseApprovalForm/components/ProductReportsListTable.vue';
import MapView from '../views/Map/index.vue';
import Approve from '../views/Approve/index.vue';
import WorkFlow from '../views/WorkFlow/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/EnterpriseApproval',
    name: 'EnterpriseApproval',
    component: EnterpriseApproval
  },
  {
    path: '/EnterpriseApprovalForm',
    name: 'EnterpriseApprovalForm',
    component: EnterpriseApprovalForm
  },
  {
    path: '/TestTable',
    name: 'TestTable',
    component: TestTable
  },
  {
    path: '/map',
    name: 'MapView',
    component: MapView
  },
  {
    path: '/approve',
    name: 'Approve',
    component: Approve
  },
  {
    path: '/work-flow',
    name: 'WorkFlow',
    component: WorkFlow
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
