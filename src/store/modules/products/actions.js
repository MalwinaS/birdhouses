export default {
  async addProduct(context, data) {
    const productId = new Date().getTime();
    const productData = {
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      animal: data.animal,
    };

    const response = await fetch(
      `https://animalhouse08-11-default-rtdb.firebaseio.com/products/${productId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(productData),
      }
    );

    if (!response.ok) {
      // ...
    }

    context.commit("setProducts", {
      ...productData,
      id: productId,
    });
  },

  async loadProducts(context) {
    const productId = context.rootGetters.productId;
    const response = await fetch(
      `https://animalhouse08-11-default-rtdb.firebaseio.com/products.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      // ...
    }
    const products = [];
    for (const key in responseData) {
      if (responseData[key] !== null) {
        const product = {
          id: key,
          productId: productId,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          category: responseData[key].category,
          animal: responseData[key].animal,
        };
        products.push(product);
      }
    }
    context.commit("setProducts", products);
  },
};
