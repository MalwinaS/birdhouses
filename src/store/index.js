import { createStore } from "vuex";

import productsModule from "./modules/products/index.js";
import animalsModule from "./modules/animals/index.js";

const store = createStore({
    modules: {
        products: productsModule,
        animals: animalsModule,
    }
});

export default store;