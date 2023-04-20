<template>
  <base-card>
    <div>
      <input type="text" v-model="searchTerm" placeholder="Search..." />
    </div>
    <table>
      <tr>
        <th @click="sortList('name')">Nazwa &#8597;</th>
        <th @click="sortList('description')">Opis &#8597;</th>
        <th @click="sortList('price')">Cena &#8597;</th>
        <th @click="sortList('category')">Kategoria &#8597;</th>
        <th @click="sortList('animal')">Zwierzęta &#8597;</th>
      </tr>
      <tr v-for="(product, index) in filteredProducts" :key="index">
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }} PLN</td>
        <td>{{ product.category }}</td>
        <td>{{ product.animal }}</td>
      </tr>
    </table>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      sortedData: [],
      sortedbyASC: true,
      searchTerm: "",
    };
  },
  provide() {
    return {
      productlist: this.products,
      addProduct: this.addProduct,
    };
  },
  computed: {
    tableData() {
      return this.$store.getters["products/products"];
    },
    filteredProducts() {
      if (!this.searchTerm) {
        return this.tableData;
      } else {
        return this.tableData.filter((product) => {
          const searchTermAsNumber = Number(this.searchTerm);
          const column1AsNumber = Number(product.price);
          if (!isNaN(searchTermAsNumber)) {
            return column1AsNumber === searchTermAsNumber;
          } else {
            return (
              product.name
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase()) ||
              product.category
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase()) ||
              product.animal
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase())
            );
          }
        });
      }
    },
    hasProducts() {
      return this.$store.getters["products/hasProducts"];
    },
  },
  mounted() {
    this.sortedData = this.filteredProducts;
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

<style scoped>
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

.form-control {
  display: block;
  margin: 20px auto 0;
  width: 50%;
  padding: 10px;
}
input {
  width: 90%;
  display: block;
  margin: 0 auto 10px;
  padding: 12px 12px;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: white;
  font-size: 20px;
}
</style>
