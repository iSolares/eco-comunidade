<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">Sobre</router-link></li>
          <li><router-link to="/projects">Projetos</router-link></li>
          <li><router-link to="/contact">Contato</router-link></li>
          <li><router-link to="/volunteer">Voluntário</router-link></li>
          <li><router-link to="/events">Eventos</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Estilos para o cabeçalho */
  nav ul {
    display: flex;
    list-style-type: none;
  }
  nav li {
    margin: 0 10px;
  }
  </style>
  