import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      animal: [
        {
          id: "1",
          animal: "kot",
        },
        {
          id: "2",
          animal: "ptak",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
