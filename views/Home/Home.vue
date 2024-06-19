<template>
  <v-row align="center" justify="center" class="pa-0">
    <v-col cols="12" xs="6" sm="6" md="6" lg="6">
      <v-card color="#A2A644" class="mx-auto" prepend-icon="mdi-leaf">
        <template v-slot:title>
          <span class="font-weight-black">Bem-vindo Ao Eco Comunidade</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          O EcoComunidade é um aplicativo inovador que visa promover o
          engajamento das comunidades locais na conservação ambiental e no
          desenvolvimento de atividades sustentáveis. Com recursos de
          informação, participação comunitária, monitoramento da biodiversidade,
          patrulhamento e desenvolvimento de ecoturismo responsável, o
          EcoComunidade oferece uma plataforma abrangente para conectar
          moradores, gestores de áreas protegidas e outros stakeholders.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <Footer />
</template>

<script setup>
import Footer from "~/components/Footer.vue";
</script>
