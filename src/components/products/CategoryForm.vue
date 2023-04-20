<template>
    <base-card>
    
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !animal.isValid }">
        <label for="animal">Nazwa kategorii</label>
        <input
          type="text"
          id="animal"
          v-model.trim="animal.val"
          @blur="clearValidity('animal')"
        />
        <p v-if="!animal.isValid">Pole nie może być puste</p>
      </div>
      
      <base-button @click="saveAnimal">Zapisz</base-button>
    </form>
  </base-card>
  </template>
  
  <script>
  export default {
    emits: ["save-animal"],
    name: "product-form",
    data() {
      return {
          animal: {
          val: "",
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
        if (this.animal.val.length === 0) {
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
          animal: this.animal.val,
        };
        this.$emit("save-animal", formData);
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
  