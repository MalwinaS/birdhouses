import { createStore } from "vuex";

import productsModule from "./modules/products/index.js";
import animalsModule from "./modules/animals/index.js";

const store = createStore({
  modules: {
    products: productsModule,
    animals: animalsModule,
  },
  state() {
    return {
      productId: "1",
      animalId: '2'
    };
  },
  getters: {
    productId(state) {
      return state.productId;
    },
    animalId(state) {
      return state.animalId;
    },
  },
});

export default store;
