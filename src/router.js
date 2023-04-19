import { createRouter, createWebHistory } from "vue-router";

import HousesList from "./pages/ProductsTable.vue";
import HouseDetails from "./pages/HouseDetails.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/birdhouses/" },
    { path: "/birdhouses/", component: HousesList },
    {
      path: "/birdhouses/:id",
      component: HouseDetails,
      props: true,
    },
  ],
});

export default router;
