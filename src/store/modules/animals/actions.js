export default {
    addAnimal(context, data) {
      const animalData = {
        animal: data.animal,
      };
      context.commit("addAnimal", animalData);
    },
  };
