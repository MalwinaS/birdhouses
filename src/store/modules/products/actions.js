export default {
    addProduct(context, data) {
      const productData = {
        id: context.rootGetters.userId,
        name: data.name,
        description: data.desc,
        price: data.price,
        category: data.category,
      };
      context.commit("addProduct", productData);
    },
  };
