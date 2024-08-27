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
      <ClientOnly>
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
                <v-tab v-for="(item, index) in scheduleData" :key="index">{{
                  item.date
                }}</v-tab>
              </v-tabs>
            </v-toolbar>

            <v-tabs-window
              v-model="model"
              class="mt-5 py-0"
              style="background-color: white; border-radius: 15px"
            >
              <v-tabs-window-item
                v-for="(item, index) in scheduleData"
                :key="index"
                class="pa-0 ma-0"
              >
                <CommonScheduleDetails :data="item" />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-col>
        </v-row>
      </ClientOnly>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const model = ref("");
const { mainData, scheduleData } = useJSONData();
definePageMeta({
  layout: false,
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title: "Agenda - " + mainData.eventInfo.name + " | " + mainData.communityName,
  description: mainData.eventInfo.description.short,
  keywords: mainData.seo.keywords,
  ogLocale:'en_US',
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle:
    "Agenda - " + mainData.eventInfo.name + " | " + mainData.communityName,
  ogDescription: mainData.eventInfo.description.short,
  ogImage: `${mainData.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  ogUrl: mainData.seo.hostUrl,
  ogType: "website",
  twitterTitle:
    "Agenda - " + mainData.eventInfo.name + " | " + mainData.communityName,
  twitterDescription: mainData.eventInfo.description.short,
  twitterImage: `${mainData.seo.hostUrl}thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>
<style scoped>
</style>
