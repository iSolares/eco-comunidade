<template>
    <div>
      <h1>Contato</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="form.name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
  
        <label for="message">Mensagem:</label>
        <textarea id="message" v-model="form.message" required></textarea>
  
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    message: ''
  })
  
  function submitForm() {
    // Lógica para envio do formulário
    alert('Formulário enviado!')
  }
  </script>
  
  <style scoped>
  /* Estilos para a página de contato */
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-top: 10px;
  }
  button {
    margin-top: 20px;
  }
  </style>
  