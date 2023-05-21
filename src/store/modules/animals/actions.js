
export default {
  async addAnimal(context, data) {
    const animalId = new Date().getTime();
    const animalData = {
      animal: data.animal,
    };

    const response = await fetch(
      `https://animalhouse-9b281-default-rtdb.firebaseio.com/animal/${animalId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(animalData),
      }
    );

    if (!response.ok) {
      // ...
    }

    context.commit("setAnimals", {
      ...animalData,
      id: animalId,
    });
  },

  async loadAnimals(context) {
    const animalId = context.rootGetters.animalId;
    const response = await fetch(
      `https://animalhouse-9b281-default-rtdb.firebaseio.com/animal.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      // ...
    }
    const animals = [];
    for (const key in responseData) {
      if (responseData[key] !== null) {
        const animal = {
          id: key,
          animalId: animalId,
          animal: responseData[key].animal,
        };
        animals.push(animal);
      }
    }
    context.commit("setAnimals", animals);
  },
};
