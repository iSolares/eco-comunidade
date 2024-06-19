<template>
  <v-row justify="center" class="align-center">
    <v-col cols="12" sm="4" md="4" xl="4" xxl="4">
      <v-form ref="signInForm" @submit.prevent="register()">
        <p
          class="d-flex text-white justify-center align-center pa-0 mr-6 text-h5"
        >
          Contato
        </p>
        <v-row>
          <v-col cols="12" class="flex-start pb-0">
            <v-text-field
              class="pb-0"
              type="text"
              variant="solo-filled"
              requiredSenha
              placeholder="Digite aqui seu nome"
              outlined
              label="Nome"
              v-model="nome"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="flex-start py-0">
            <v-text-field
              class="pb-0"
              required
              variant="solo-filled"
              autocomplete="off"
              type="text"
              placeholder="E-mail"
              outlined
              label="E-mail"
              v-model="email"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="flex-start pb-0 pt-0">
            <v-text-field
              v-model="celular"
              class="pb-0"
              type="text"
              variant="solo-filled"
              autocomplete="off"
              placeholder="ex: (71)98888-5555"
              outlined
              label="Celular"
            /> </v-col
        ></v-row>
        <v-row>
          <v-col justify-center class="d-flex justify-center pt-1 pb-8">
            <v-btn
              type="submit"
              elevation="4"
              variant="elevated"
              color="#A2A644"
              class="px-8 text-capitalize"
              dark
              @click="register()"
            >
              Enviar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
  <Footer />
</template>

<script setup>
import Footer from "~/components/Footer.vue";
const email = ref("");
const nome = ref("");
const celular = ref("");
</script>
