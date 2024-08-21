<template>
  <NuxtLayout name="default">
    <v-container fluid>
      <v-row>
        <v-col md="12">
          <h1>Team</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            sapiente est architecto autem minus explicabo reiciendis voluptatem
            porro rerum optio quidem quaerat animi eveniet magnam, pariatur non
            delectus velit perferendis!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2" v-for="(item, index) in teamData" :key="index">
          <common-speaker-card :data="item" />
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
import teamJSON from "/public/data/team.json";
import configData from "/public/data/config.json";

const configDataSet = ref([]);
configDataSet.value = configData;

let teamData = ref([]);

teamData.value = teamJSON;

definePageMeta({
  layout: false,
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title:
    "Team - " +
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  description: configDataSet.value.eventInfo.description.short,
  keywords: configDataSet.value.seo.keywords,
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle:
    "Team - " +
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  ogDescription: configDataSet.value.eventInfo.description.short,
  ogImage: `${configDataSet.value.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  ogUrl: configDataSet.value.seo.hostUrl,
  ogType: "website",
  twitterTitle:
    "Team - " +
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