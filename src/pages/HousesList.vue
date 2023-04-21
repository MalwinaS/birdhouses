<template>
  <products-table></products-table>
</template>

<script>
import ProductsTable from "@/components/products/ProductsTable.vue";

export default {
  components: {
    ProductsTable,
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.$store.dispatch("products/loadProducts");
    },
  },
};
</script>

<style scoped></style>
