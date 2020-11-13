import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AccountsReceivableList from "../views/AccountsReceivableList.vue";
import AccountsReceivable from "../views/AccountsReceivable.vue";
import AccountsPayable from "../views/AccountsPayable.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name: "AccountsReceivableList",
    component: AccountsReceivableList
  },
  {
    path: "/accounts-receivable",
    name: "AccountsReceivable",
    component: AccountsReceivable
  },
  {
    path: "/accounts-payable",
    name: "AccountsPayable",
    component: AccountsPayable
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
