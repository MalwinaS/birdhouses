<template>
  <base-card>
    <table>
      <tr>
        <th @click="sortList('id')">ID &#8597;</th>
        <th @click="sortList('name')">Nazwa &#8597;</th>
        <th @click="sortList('description')">Opis &#8597;</th>
        <th @click="sortList('price')">Cena &#8597;</th>
        <th @click="sortList('category')">Kategoria &#8597;</th>
      </tr>
      <tr v-for="product in sortedData" :key="product">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
      </tr>
    </table>
  </base-card>
</template>

<script>
export default {
  name: "ItemList",
  computed: {
    filteredProducts() {
      return this.$store.getters["products/products"];
    },
    hasProducts() {
      return this.$store.getters["products/hasProducts"];
    },
  },
  data() {
    return {
      sortedData: [],
      sortedbyASC: true,
    };
  },
  mounted() {
    this.sortedData = this.filteredProducts;
    console.log(this.filteredProducts);
  },
  methods: {
    sortList(sortBy) {
      if (this.sortedbyASC) {
        this.sortedData.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
        this.sortedbyASC = false;
      } else {
        this.sortedData.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
        this.sortedbyASC = true;
      }
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th:hover {
  cursor: pointer;
  background: rgb(229, 255, 211);
}

tr:nth-child(even) {
  background-color: #f3f3f3;
}
</style>
