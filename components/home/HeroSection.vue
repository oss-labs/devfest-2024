<template>
  <v-container fluid>
    <v-row v-if="Object.keys(props.eventInfo).length">
      <v-col md="12 ">
        <v-img
          v-if="screenWidth > 600"
          src="/public/img/common/home-desktop.png"
          lazy-src="/public/img/common/home-desktop.png"
          rounded="xl"
        ></v-img>
        <v-img
          v-else
          src="/public/img/common/home-mobile.png"
          lazy-src="/public/img/common/home-mobile.png"
          rounded="xl"
        ></v-img>
      </v-col>

      <v-col class="text-center" cols="12">
        <v-chip class="mx-1" size="large">
          <v-icon icon="mdi-calendar-month-outline" start></v-icon>
          {{ props.eventInfo.date }}</v-chip
        >
        <v-chip class="mx-1" size="large">
          <v-icon icon="mdi-map-marker-check-outline" start></v-icon>
          {{ props.eventInfo.venue.address }}</v-chip
        >
        <h1 class="responsive-h1 my-4">
          The city's most beloved tech <br />
          conference
        </h1>

        <!-- <h1
          class="my-4"
          :style="{
            fontSize: screenWidth > 600px ? '450%' : '200%',
            lineHeight: '100%',
          }"
        >
          The city's most beloved tech <br />
          conference
        </h1> -->
        <p class="" :style="{ maxWidth: '90%' }">
          {{ props.eventInfo.description.short }}
        </p>
        <v-btn
          rounded
          size="large"
          color="#4182F1"
          v-if="
            props.eventInfo &&
            props.eventInfo.registeration.link.length &&
            new Date(props.eventInfo.registeration.end_date) > new Date()
          "
          :href="props.eventInfo.registeration.link"
          class="my-4"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black"
          variant="flat"
          >Register Now</v-btn
        >

        <v-container>
          <v-row justify="center">
            <v-col md="2" cols="6" v-for="(item, index) in stats" :key="index">
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

let props = defineProps({
  eventInfo: {
    type: Object,
    default: {},
  },
  stats: {
    type: Array,
    default: [],
  },
});
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
