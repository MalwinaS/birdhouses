<template>
    <section>Filter</section>
    <section>
      <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
      </div>
      <ul v-if="hasProducts">
        <product-item
          v-for="product in filteredProducts"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :description="product.description"
          :category="product.category"
        >
        </product-item>
      </ul>
      <h3 v-else>Brak produktów</h3>
    </base-card>
    </section>
  </template>
  
  <script>
  import ProductItem from "@/components/products/ProductItem.vue";

  export default {
    components: {
        ProductItem,
    },
    computed: {
      filteredProducts() {
        return this.$store.getters["products/products"];
      },
      hasProducts() {
        return this.$store.getters["products/hasProducts"];
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
  </style>