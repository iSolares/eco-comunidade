<template>
  <v-navigation-drawer
    color="#A2A644"
    :border="false"
    class="v-navigation-drawer fixed"
    v-model="isOpenMenu"
    temporary
  >
    <v-list-subheader class="mt-3 text-h6 text-white">
      <div class="justify-center align-center">
        <v-app-bar-nav-icon class="mt-0" @click="isOpenMenu = !isOpenMenu" />Eco
        Comunidade
      </div>
    </v-list-subheader>
    <v-list>
      <v-list-item class="text-start" @click="navigateTo('/Home')">
        Home
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/About')">
        Sobre nós
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Contact')">
        Contato
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Volunteer')">
        Voluntário
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Map')">
        Maps
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar class="fixed" color="#A2A644">
    <v-app-bar-nav-icon @click="isOpenMenu = !isOpenMenu"></v-app-bar-nav-icon>
    <v-row class="justify-space-between">
      <v-col class="px-0">
        <p class="my-5 text-center text-h6">Eco Comunidade</p>
      </v-col>
      <v-col class="d-flex align-center pl-0 mr-3" cols="auto">
        <v-avatar size="50">
          <img cover width="50" src="/assets/imgs/Avatar3.jpeg" />
        </v-avatar>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from "vue";

let isOpenMenu = ref(false);
</script>
<style scoped>
@media screen and (max-width: 350px) {
  .text-invisible {
    display: none;
  }
}
.v-navigation-drawer {
  border-right-width: inherit;
}

.fixed {
  position: fixed !important;
}
</style>
