<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !name.isValid }">
      <label for="name">Nazwa</label>
      <input
        type="text"
        id="name"
        v-model.trim="name.val"
        @blur="clearValidity('name')"
      />
      <p v-if="!name.isValid">Pole nie może być puste</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Opis</label>
      <textarea
        type="text"
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Opis nie może być pusty</p>
    </div>
    <div class="form-control" :class="{ invalid: !price.isValid }">
      <label for="price">Cena</label>
      <input
        type="number"
        id="price"
        v-model.number="price.val"
        @blur="clearValidity('price')"
      />
      <p v-if="!price.isValid">Uzupełnij wartość</p>
    </div>

    <div class="form-control" :class="{ invalid: !category.isValid }">
      <h3>Domki</h3>

      <div>
        <select
          name="houses"
          id="houses"
          v-model="category.val"
          @blur="clearValidity('category')"
        >
          <option value="drzewo" id="tree">Na drzewo</option>
          <option value="ziemia" id="ground">Na ziemię</option>
        </select>
      </div>
      <p v-if="!category.isValid"></p>
    </div>

    <h3>Zwierzęta</h3>
    <div v-for="(animal, index) in filteredAnimal" :key="index">
      <input
        type="checkbox"
        v-model="checkedAnimals"
        :value="animal.animal"
      />{{ animal.animal }}
    </div>
    <p v-if="!animal.isValid"></p>

    <p v-if="!formIsValid">Proszę, wypełnij wszystkie pola</p>
    <base-button>Zapisz</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  name: "product-form",
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      price: {
        val: null,
        isValid: true,
      },
      category: {
        val: [],
        isValid: true,
      },
      animal: {
        val: null,
        isValid: true,
      },
      checkedAnimals: [],
      formIsValid: true,
    };
  },
  computed: {
    filteredAnimal() {
      return this.$store.getters["animals/animal"];
    },
  },
  created() {
    this.loadAnimals();
  },
  methods: {
    loadAnimals() {
      this.$store.dispatch("animals/loadAnimals");
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.price.val || this.price.val < 0) {
        this.price.isValid = false;
        this.formIsValid = false;
      }
      if (this.category.val.length === 0) {
        this.category.isValid = false;
        this.formIsValid = false;
      }
      if (this.checkedAnimals.length === 0) {
        this.animal.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        name: this.name.val,
        description: this.description.val,
        price: this.price.val,
        category: this.category.val,
        animal: this.checkedAnimals.toString(),
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
form {
  margin: 0 auto;
  display: block;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #f5b44d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #79acee solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
