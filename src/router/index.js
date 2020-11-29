import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue"
import Cart from "../views/Cart.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "product",
    name: "Product",
    component: Product
  }, 
  {
    path: "cart",
    name: "Cart",
    component: Cart
  }, 

];

const router = new VueRouter({
  routes
});

export default router;
