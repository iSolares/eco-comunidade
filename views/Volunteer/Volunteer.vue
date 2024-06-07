<template>
    <div>
      <h1>Seja um Voluntário</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="form.name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
  
        <label for="skills">Habilidades:</label>
        <textarea id="skills" v-model="form.skills" required></textarea>
  
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    skills: ''
  })
  
  function submitForm() {
    // Lógica para envio do formulário de voluntariado
    alert('Formulário de voluntariado enviado!')
  }
  </script>
  
  <style scoped>
  /* Estilos para a página de voluntariado */
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
  