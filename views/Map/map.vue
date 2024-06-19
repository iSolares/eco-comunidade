<template>
  <v-row justify="center">
    <v-col cols="12">
      <LMap
        ref="map"
        style="height: 95%; margin-top: 65px"
        :zoom="zoom"
        :center="[-12.940867721430083, -38.43458550213431]"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker :lat-lng="[-12.988732264128709, -38.46202724516911]" />
        <LMarker :lat-lng="[-13.012232276139143, -38.49106629785513]" />
      </LMap>
    </v-col>
  </v-row>
  <Footer class="mt-4" />
</template>

<script setup lang="ts">
import Footer from "~/components/Footer.vue";
const zoom = ref(12);
</script>

<style>
.leaflet-left,
.leaflet-control {
  display: none;
}
</style>
