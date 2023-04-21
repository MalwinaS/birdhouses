export default {
  addAnimal(state, payload) {
    state.animal.push(payload);
  },
  setAnimals(state, payload) {
    state.animal = payload;
  },
};
