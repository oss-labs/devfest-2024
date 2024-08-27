<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12">
          <h1>Code of Conduct</h1>
          <p>
            All participants of DevFest 2024 event, online attendees, event
            staff, and speakers, must abide by the following policy:
          </p>

          <v-container fluid class="ma-0 pa-0 mt-8">
            <v-row align="start" justify-start>
              <v-col
                md="4"
                cols="12"
                v-for="(item, index) in cocData"
                :key="index"
              >
                <p class="google-font" style="font-size: 1.2em">
                  <b>{{ item.name }}</b>
                </p>
                <p class="google-font mt-3" style="font-size: 100%">
                  {{ item.des }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { cocData, mainData } = useJSONData();

definePageMeta({
  layout: false,
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title:
    "Code of Conduct - " +
    mainData.eventInfo.name +
    " | " +
    mainData.communityName,
  description: mainData.eventInfo.description.short,
  keywords: mainData.seo.keywords,
  ogLocale:'en_US',
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle:
    "Code of Conduct - " +
    mainData.eventInfo.name +
    " | " +
    mainData.communityName,
  ogDescription: mainData.eventInfo.description.short,
  ogImage: `${mainData.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  ogUrl: mainData.seo.hostUrl,
  ogType: "website",
  twitterTitle:
    "Code of Conduct - " +
    mainData.eventInfo.name +
    " | " +
    mainData.communityName,
  twitterDescription: mainData.eventInfo.description.short,
  twitterImage: `${mainData.seo.hostUrl}thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>

