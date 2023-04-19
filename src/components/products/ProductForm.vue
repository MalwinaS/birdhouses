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
        <p v-if="!price.isValid">R</p>
      </div>

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
    
        formIsValid: true,
      };
    },
    methods: {
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
      },
      submitForm() {
        this.validateForm();
  
        if (!this.formIsValid) {
          return;
        }
  
        const formData = {
          name: this.name.val,
          desc: this.description.val,
          price: this.price.val,

        };
        this.$emit("save-data", formData);
      },
    },
  };
  </script>
  
  <style scoped>
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