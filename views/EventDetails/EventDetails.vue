<template>
    <div>
      <h1>{{ event.name }}</h1>
      <p>{{ event.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const event = ref({
    id: route.params.id,
    name: `Evento ${route.params.id}`,
    description: `Descrição detalhada do Evento ${route.params.id}`
  })
  </script>
  
  <style scoped>
  /* Estilos para os detalhes do evento */
  h1 {
    color: purple;
  }
  </style>
  