<template>
  <v-navigation-drawer class="v-navigation-drawer" v-model="isOpenMenu">
    <v-list-subheader class="mt-3 text-h6 text-black">
      <div class="justify-center align-center">
        <v-app-bar-nav-icon
          class="mt-0"
          @click="(isOpenMenu = !isOpenMenu), (openMenu2 = !openMenu2)"
        />Eco Comunidade
      </div>
    </v-list-subheader>
    <v-list>
      <v-list-item class="text-start" @click="navigateTo('/About')">
        About
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Contact')">
        Contact
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/EventDetails')">
        Event Details
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Events')">
        Events
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Home')">
        Home
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/ProjectDetails')">
        Project Details
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Projects')">
        Projects
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Volunteer')">
        Volunteer
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar>
    <v-app-bar-nav-icon
      v-show="openMenu2"
      @click="(isOpenMenu = !isOpenMenu), (openMenu2 = !openMenu2)"
    ></v-app-bar-nav-icon>
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

const nameUser = ref("");
const admin = useCookie("userAdmin");
let isOpenMenu = ref(false);
let openMenu2 = ref(true);
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
</style>
