<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12">
          <h1>Agenda</h1>
          <p>
            Follow code demonstrations by our expert speakers on different
            tracks. Check out the schedule below and don't forget to mark your
            calendar so that you don't miss out on any sessions.
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-7">
        <v-col>
          <v-toolbar flat class="px-0" style="border-radius: 15px">
            <v-tabs
              v-model="model"
              color="primary"
              slider-color="primary"
              centered
              class="px-3"
            >
              <v-tab v-for="(item, index) in scheduleData" :key="index" >{{
                item.date
              }}</v-tab>
            </v-tabs>
          </v-toolbar>

          <v-tabs-items v-model="model" continuous class="mt-5 py-0" style="background-color: white;border-radius: 15px;">
            <v-tab-item v-for="(item, index) in scheduleData" :key="index" class="pa-0 ma-0" >
                <CommonScheduleDetails :data="item"/>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
import scheduleJSON from "/public/data/schedule.json";
import configData from "/public/data/config.json";

const configDataSet = ref([]);
configDataSet.value = configData;

let scheduleData = ref([]);
let model = ref(null)

scheduleData.value = scheduleJSON

definePageMeta({
  layout: false,
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title:
    "Agenda - " +
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  description: configDataSet.value.eventInfo.description.short,
  keywords: configDataSet.value.seo.keywords,
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle:
    "Agenda - " +
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  ogDescription: configDataSet.value.eventInfo.description.short,
  ogImage: `${configDataSet.value.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  ogUrl: configDataSet.value.seo.hostUrl,
  ogType: "website",
  twitterTitle:
    "Agenda - " +
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