<template>
  <li>
    <h3>{{ name }}</h3>
    <h4>{{ price }} zł</h4>
    <h4>{{ description }}</h4>
    <div class="actions">
      <base-button link :to="productDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "price", "category"],
  computed: {
    productContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    productDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
s
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid black;
  border-radius: 12px;
  padding: 1rem;
}
h3 {
  font-size: 1.5rem;
}
h3,
h4 {
  margin: 0.5rem 0;
}
div {
  margin: 0.5rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
