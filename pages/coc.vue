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

          <v-container fluid class="ma-0 pa-0 mt-6">
            <v-row align="start" justify="start">
              <v-col
                md="4"
                cols="12"
                v-for="(item, index) in cocData"
                :key="index"
              >
                <!-- <v-avatar color="#4285f4" size="35">
                        <span class="white--text text-h6">{{index+1}}</span>
                      </v-avatar> -->
                <p class="google-font" style="font-size: 1.5em">
                  <b>{{ item.name }}</b>
                </p>
                <p class="google-font" style="font-size: 115%">
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
import configData from "/public/data/config.json";

const configDataSet = ref([]);
configDataSet.value = configData;

const cocData = ref([
  {
    name: "Be nice to the other attendees",
    des: "We're all part of the same community, so be friendly, welcoming, and generally a nice person. Be someone that other people want to be around. ",
  },
  {
    name: "Be respectful and constructive",
    des: "Remember to be respectful and constructive with your communication in discussions to fellow attendees. Don't get into flame wars, make personal attacks, vent, or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a negative thread as early as possible.",
  },
  {
    name: "Be collaborative",
    des: "We are here to learn a lot from each other. Share knowledge, and help each other out. You may disagree with ideas, not people.",
  },
  {
    name: "Participate",
    des: "Be a good listener.  Be mentally present in the sessions you are interested in. Join in on discussions, show up for the sessions on time, offer feedback on your event experience, and help us get better in our community engagements.",
  },
  {
    name: "Basic etiquette for online discussions",
    des: "Keep off topic conversations to a minimum. Don’t be spammy by advertising or promoting personal projects which are off topic.",
  },
]);

definePageMeta({
  layout: false,
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title:
    "Code of Conduct - " +
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  description: configDataSet.value.eventInfo.description.short,
  keywords: configDataSet.value.seo.keywords,
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle:
    "Code of Conduct - " +
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  ogDescription: configDataSet.value.eventInfo.description.short,
  ogImage: `${configDataSet.value.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  ogUrl: configDataSet.value.seo.hostUrl,
  ogType: "website",
  twitterTitle:
    "Code of Conduct - " +
    configDataSet.value.eventInfo.name +
    " | " +
    configDataSet.value.communityName,
  twitterDescription: configDataSet.value.eventInfo.description.short,
  twitterImage: `${configDataSet.value.seo.hostUrl}thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>

