<template>
  <div class="d-flex flex-column text-center">
    <v-img
      class="mx-auto mt-16"
      src="~/assets/imgs/notFoundImg.svg"
      width="1000"
    >
    </v-img>
    <v-row justify="center" align="end" class="h-100">
      <v-col cols="3">
        <v-btn
          class="mt-15 text-h6"
          width="200"
          height="50"
          color="#a2a644"
          @click="navigateTo('/Home')"
          >Página Inicial</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>
