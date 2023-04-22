<template>
    <button v-if="!link" :class="mode">
      <slot></slot>
    </button>
    <router-link v-else :to="toLink" :class="mode">
      <slot></slot>
    </router-link>
  </template>
  
  <script>
  export default {
    props: {
      mode: {
        type: String,
        required: false,
        default: null,
      },
      link: {
        type: Boolean,
        required: false,
        default: false,
      },
      toLink: {
        type: String,
        required: false,
        default: "/",
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    margin: 20px 0;
  }
  button,
  a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    background-color: #136817;
    border: 1px solid #136817;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
  }
  
  a:active,
  a:hover,
  button:hover,
  button:active {
    background-color: #4a8d2f;
    border-color: #4a8d2f;;
  }
  
  .flat {
    background-color: transparent;
    color: #4a8d2f;;
    border: none;
  }
  .outline {
    background-color: transparent;
    border-color: #1a8829;
    color: #1a8829;
  }
  .flat:hover,
  .flat:active,
  .outline:hover,
  .outline:active {
    background-color: #d0f0b7;
    border-color: #1a8829;;
  }
  </style>
  