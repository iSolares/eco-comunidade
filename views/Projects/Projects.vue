<template>
    <div>
      <h1>Nossos Projetos</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <router-link :to="`/projects/${project.id}`">{{ project.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const projects = ref([])
  
  onMounted(() => {
    projects.value = [
      { id: 1, name: 'Projeto A' },
      { id: 2, name: 'Projeto B' },
      { id: 3, name: 'Projeto C' },
    ]
  })
  </script>
  
  <style scoped>
  /* Estilos para a página de projetos */
  ul {
    list-style-type: none;
  }
  li {
    margin: 10px 0;
  }
  </style>
  