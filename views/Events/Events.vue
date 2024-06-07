<template>
    <div>
      <h1>Eventos</h1>
      <ul>
        <li v-for="event in events" :key="event.id">
          <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const events = ref([])
  
  onMounted(() => {
    events.value = [
      { id: 1, name: 'Evento A' },
      { id: 2, name: 'Evento B' },
      { id: 3, name: 'Evento C' },
    ]
  })
  </script>
  
  <style scoped>
  /* Estilos para a página de eventos */
  ul {
    list-style-type: none;
  }
  li {
    margin: 10px 0;
  }
  </style>
  