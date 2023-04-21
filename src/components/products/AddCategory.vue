<template>
  <section>
    <base-card>
      <h2>Wprowadź nową kategorię - zwierzęta</h2>
      <category-form @save-animal="saveAnimal"></category-form>
    </base-card>
  </section>
</template>

<script>
import CategoryForm from "../../components/products/CategoryForm.vue";

export default {
  components: { CategoryForm },
  methods: {
    saveAnimal(data) {
      this.$store.dispatch("animals/addAnimal", data);
      this.$router.replace("/new-product/");
      this.loadAnimals();
    },
    loadAnimals() {
      this.$store.dispatch("animals/loadAnimals");
    },
  },
  created() {
    this.loadAnimals();
  },
};
</script>

<style></style>
