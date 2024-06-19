<template>
  <VApp>
    <VMain>
      <v-app class="background-app">
        <Header />
        <slot />
      </v-app>
    </VMain>
  </VApp>
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>

<style>
.background-app,
body {
  background-image: url("~/assets/imgs/wallpaper-eco.jpg") !important;
  background-repeat: repeat !important;
  background-size: cover !important;
}

.footer-app {
  width: 100%;
  height: 100px;
  position: absolute;
  padding-top: 1000px;
  bottom: 0;
  left: 0;
}
</style>
