import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "1",
          name: "Domek dla ptaków",
          category: "house",
          description: "Idealny domek dla ptaków do zawieszenia na drzewie",
          price: 200,
        },
        {
          id: "2",
          name: "Domek dla ptaków",
          category: "house",
          description: "Idealny domek dla ptaków do zamontowania na ziemi",
          price: 130,
        },
        {
          id: "3",
          name: "Ptak",
          category: "birds",
          description: "Sikorka żółtobrzucha",
          price: 130,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};