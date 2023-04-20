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
          category: "drzewo",
          animal: "ptaki",
          description: "Idealny domek dla ptaków do zawieszenia na drzewie",
          price: 200,
        },
        {
          id: "2",
          name: "Domek dla kotów",
          category: "ziemia",
          animal: "kot",
          description: "Idealny domek dla ptaków do zamontowania na ziemi",
          price: 130,
        },
        {
          id: "3",
          name: "Domek dla ptaków",
          category: "drzewo",
          animal: "ptaki",
          description: "Idealny domek dla ptaków do zamontowania na ziemi - mały",
          price: 50,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};