export default {
    addProduct(context, data) {
      const productData = {
        id: context.rootGetters.userId,
        name: data.name,
        description: data.desc,
        price: data.price,
      };
      context.commit("addProduct", productData);
    },
  };
