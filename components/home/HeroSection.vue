<template>
  <v-container fluid class="">
    <v-row>
      <v-col md="12">
        <ClientOnly>
          <v-img
            v-if="screenWidth > 600"
            src="/public/img/common/home-desktop.png"
            lazy-src="/public/img/common/home-desktop.png"
            rounded="xl"
            style="background-color: #eeeeee; height: 300px"
            contain
          ></v-img>
          <v-img
            v-else
            src="/public/img/common/home-mobile.png"
            lazy-src="/public/img/common/home-mobile.png"
            rounded="xl"
          ></v-img>
        </ClientOnly>
      </v-col>

      <v-col class="text-center" cols="12">
        <v-chip class="mx-1" size="large">
          <v-icon icon="mdi-calendar-month-outline" start></v-icon>
          {{ mainData.eventInfo.date }}</v-chip
        >
        <v-chip class="mx-1" size="large">
          <v-icon icon="mdi-map-marker-check-outline" start></v-icon>
          {{ mainData.eventInfo.venue.address }}</v-chip
        >
        <h1 class="responsive-h1 my-4">
          The city's most beloved tech <br />
          conference
        </h1>

        <p class="" :style="{ maxWidth: '90%' }">
          {{ mainData.eventInfo.description.short }}
        </p>

        <v-btn
          rounded
          size="large"
          color="#4182F1"
          v-if="
            mainData.eventInfo &&
            mainData.eventInfo.registeration.link.length &&
            new Date(mainData.eventInfo.registeration.end_date) > new Date()
          "
          :href="mainData.eventInfo.registeration.link"
          class="my-4"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black"
          variant="flat"
          >Register Now</v-btn
        >

        <v-container>
          <v-row justify="center">
            <v-col
              md="2"
              cols="6"
              v-for="(item, index) in mainData.eventInfo.stats"
              :key="index"
            >
              <div
                style="background-color: #eeeeee; border-radius: 20px"
                class="pa-2"
              >
                <h1>{{ item.value }}</h1>
                <p>{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
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
  font-size: 200%;
  line-height: 100%;
}

/* Media query for screens larger than 600px */
@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 450%;
  }
}
</style>
