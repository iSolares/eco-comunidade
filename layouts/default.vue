<template>
  <VApp>
    <VMain>
      <v-app class="background-app h-100">
        <Header />
        <slot />
        <Footer class="footer-app" />
      </v-app>
    </VMain>
  </VApp>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
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
  bottom: 0;
  left: 0;
}
</style>
