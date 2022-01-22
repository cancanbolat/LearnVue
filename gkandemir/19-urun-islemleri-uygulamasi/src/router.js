import Vue from "vue";
import VueRouter from "vue-router";

import ProductPurchase from "./components/products/ProductPurchase.vue";
import ProductSell from "./components/products/ProductSell.vue";
import ProductList from "./components/products/ProductList.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: ProductList },
    { path: "/urun-islemleri", component: ProductPurchase },
    { path: "/urun-cikisi", component: ProductSell }
];

export const router = new VueRouter({
    mode: "history", //url'ye & koymasını yani SPA gibi çalışmasını engeller
    routes
})





