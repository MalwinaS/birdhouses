import { createRouter, createWebHistory } from "vue-router";

import HousesList from "./pages/HousesList.vue";
import NewProduct from "./pages/NewProduct.vue";
import NewCategory from "./pages/NewCategory.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/birdhouses/" },
    { path: "/birdhouses/", component: HousesList },
    { path: "/new-product/", component: NewProduct },
    { path: "/new-category/", component: NewCategory },
    // {
    //   path: "/birdhouses/:id",
    //   component: HouseDetails,
    //   props: true,
    // },
  ],
});

export default router;
