<template>
  <NuxtLayout name="default">
    <v-container fluid>
      <!-- Hero -->
      <v-row>
        <v-col md="12">
          <v-img src="/img/home.png" rounded="xl"></v-img>
        </v-col>
        <v-col class="text-center" cols="12">
          <v-chip class="mx-1" size="large">
            <v-icon icon="mdi-calendar-month-outline" start></v-icon>
            {{ configData.eventInfo.date }}</v-chip
          >
          <v-chip class="mx-1" size="large">
            <v-icon icon="mdi-map-marker-check-outline" start></v-icon>
            {{ configData.eventInfo.venue.address }}</v-chip
          >

          <h1 class="my-4" style="line-height: 65px"
          :style="{ fontSize: screenWidth > 450 ? '450%' : '180%' }"
          >
            The city's most beloved tech <br />
            conference
          </h1>
          <p class="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            provident ratione. Ad, non fugit fuga molestias inventore <br />
            debitis at necessitatibus eos eveniet placeat hic ipsum quidem
            temporibus distinctio illum pariatur.
          </p>
          <v-btn
            rounded
            size="large"
            color="#4182F1"
            v-if="
              configData &&
              configData.eventInfo.registeration.link.length &&
              new Date(configData.eventInfo.registeration.end_date) > new Date()
            "
            :href="configData.eventInfo.registeration.link"
            class="my-4"
            target="_blank"
            style="border: 1.5px solid #1e1e1e; color: black"
            variant="flat"
            >Register Now</v-btn
          >

          <v-container>
            <v-row justify="center">
              <v-col md="2" v-for="(item, index) in stats" :key="index">
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
      <!-- Hero -->

      <!-- Whats New -->
      <v-row>
        <!-- <HomeMoveSection /> -->
        <HomeExpectionSection />
      </v-row>
      <!-- Whats New -->

      <!-- Technologies -->
      <v-row>
        <homeTechSection />
      </v-row>
      <!-- Technologies -->

      <!-- Past DevFest -->
      <v-row>
        <HomePastDevFest />
      </v-row>
      <!-- Past DevFest -->

      <!-- Sponsors -->
      <v-row class="my-10">
        <v-col md="12">
          <h1>Our Sponsors</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam
            obcaecati veniam. Velit ducimus at ipsum optio odio, error illo
            veniam corrupti voluptatibus repellendus id dolorum sapiente. Error,
            corporis quam.
          </p>

          <v-container fluid class="pa-0">
            <CommonSponsorInfo />
          </v-container>
        </v-col>
      </v-row>
      <!-- Sponsors -->

      <!-- Keep in Touch -->
      <v-row>
        <v-col md="12" class="text-center">
          <div
            style="background-color: #eeeeee; border-radius: 20px"
            class="pa-8"
          >
            <h1>Keep in touch with GDG Jakarta for the latest announcements</h1>
            <p class="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              porro placeat in pariatur molestiae? Omnis voluptas nobis labore
              ipsum, cum illum culpa, quaerat quod ad eligendi et fuga deserunt
              numquam?
            </p>

            <v-btn
              class="ma-1"
              icon="mdi-linkedin"
              size="small"
              variant="flat"
              v-for="i in 4"
              :key="i"
            ></v-btn>
          </div>
        </v-col>
      </v-row>
      <!-- Keep in Touch -->
    </v-container>
  </NuxtLayout>
</template>

<script setup>
import { useDisplay } from "vuetify";
import configData from "/public/data/config.json";

const { width, mobile } = useDisplay();
const screenWidth = ref(0);
let whatToExpect = ref([]);
let stats = ref([]);

const configDataSet = ref([]);
configDataSet.value = configData;
screenWidth.value = width;

stats.value = configDataSet.value.eventInfo.stats;
whatToExpect.value = configDataSet.value.eventInfo.whatToExpect;

definePageMeta({
  layout: false,
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title:
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  description: configDataSet.value.eventInfo.description.short,
  keywords: configDataSet.value.seo.keywords,
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle:
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  ogDescription: configDataSet.value.eventInfo.description.short,
  ogImage: `${configDataSet.value.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  ogUrl: configDataSet.value.seo.hostUrl,
  ogType: "website",
  twitterTitle:
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  twitterDescription: configDataSet.value.eventInfo.description.short,
  twitterImage: `${configDataSet.value.seo.hostUrl}thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>

<style>
</style>