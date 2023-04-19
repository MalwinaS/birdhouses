<template>
  <search-bar @search="handleSearch" ></search-bar>
  <products-table></products-table>
</template>

<script>
import ProductsTable from "@/components/products/ProductsTable.vue";

export default {
  components: {
    ProductsTable,
  },

};
</script>

<style scoped>

</style>
