<template>
    <div>
      <h1>{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const project = ref({
    id: route.params.id,
    name: `Projeto ${route.params.id}`,
    description: `Descrição detalhada do Projeto ${route.params.id}`
  })
  </script>
  
  <style scoped>
  /* Estilos para os detalhes do projeto */
  h1 {
    color: orange;
  }
  </style>
  