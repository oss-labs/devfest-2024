<template>
  <NuxtLayout name="default">
    <v-container fluid class="m-top">
      <!-- Hero -->
      <v-row>
        <HomeHeroSection :eventInfo="configData.eventInfo" :stats="stats" />
      </v-row>
      <!-- Hero -->

      <!-- Whats New -->
      <v-row>
        <!-- <HomeMoveSection /> -->
        <HomeExpectionSection :data="whatToExpect" />
      </v-row>
      <!-- Whats New -->

      <!-- Technologies -->
      <v-row>
        <homeTechSection />
      </v-row>
      <!-- Technologies -->

      <!-- Past DevFest -->
      <v-row>
        <HomePastDevFest :data="configData.eventInfo.pastDevFest" />
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
            <h1>
              Keep in touch with {{ configData.communityName }} for the latest
              announcements
            </h1>
            <p class="mb-3">
              Stake out #{{ configData.communityName }} for the latest updates
              and news.
            </p>

            <CommonSpeakerSocialButton
              :socialLinks="configData.communityLinks"
            />
          </div>
        </v-col>
      </v-row>
      <!-- Keep in Touch -->
    </v-container>
  </NuxtLayout>
</template>

<script setup>
import configData from "/public/data/config.json";

let whatToExpect = ref([]);
let stats = ref([]);

const configDataSet = ref([]);
configDataSet.value = configData;

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

<style scoped>
.m-top {
  margin-top: 10%;
}
</style>
