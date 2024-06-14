<template>
  <VApp>
    <VMain>
      <v-app class="background-app">
        <slot />
      </v-app>
    </VMain>
  </VApp>
</template>

<script setup></script>

<style>
.background-app,
body {
  background-image: url("~/assets/imgs/wallpaper-eco.jpg") !important;
  background-repeat: repeat !important;
  background-size: cover !important;
}
</style>
