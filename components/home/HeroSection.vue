<template>
  <v-container fluid class="">
    <v-row justify-center align="center">
      <v-col md="6" sm="6" cols="12" order-md="1" order="2" order-sm="1">
        <h1 class="responsive-h1 my-4">
          DevFest <br>
          {{ mainData.communityLocation.city }} 2024
        </h1>
        <p class="" :style="{ maxWidth: '90%' }">
          {{ mainData.eventInfo.description.short }}
        </p>

        <p class="my-5">
          <span class="mr-4">
            <v-icon>mdi-calendar-month</v-icon>
            {{ mainData.eventInfo.date }}
          </span>

          <span class="mr-4">
            <v-icon>mdi-map-legend</v-icon>
            {{ mainData.eventInfo.venue.address }}
          </span>
        </p>

        <v-btn
          rounded
          size="large"
          color="#FFD427"
          v-if="
            mainData.eventInfo &&
            mainData.eventInfo.registeration.link.length &&
            new Date(mainData.eventInfo.registeration.end_date) > new Date()
          "
          :href="mainData.eventInfo.registeration.link"
          class="my-4 mt-3"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black"
          variant="flat"
          >Register Now</v-btn
        >
      </v-col>
      <v-col md="6" sm="6" cols="12" order-md="2" order="1" order-sm="2">
        <v-img alt="logo" src="assets/img/hero-image.svg" lazy-src="assets/img/hero-image.svg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { width, mobile } = useDisplay();
const screenWidth = ref(width);
const { mainData } = useJSONData();
</script>

<style scoped>
.responsive-h1 {
  font-size: 250%;
  line-height: 100%;
}

/* Media query for screens larger than 600px */
@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 300%;
  }
}
</style>
