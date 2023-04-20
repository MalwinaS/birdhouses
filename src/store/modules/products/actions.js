export default {
    addProduct(context, data) {
      const productData = {
        name: data.name,
        description: data.desc,
        price: data.price,
        category: data.category,
        animal: data.animal,
      };
      context.commit("addProduct", productData);
    },
  };
