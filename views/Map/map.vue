<template>
  <v-row justify="center">
    <v-col cols="8">
      <LMap ref="map" :zoom="zoom" :center="[47.21322, -1.559482]">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
      </LMap>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const zoom = ref(6);
</script>
