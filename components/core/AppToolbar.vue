<template>
  <v-app-bar
    :elevation="0"
    class="mt-0 px-2 mx-auto mt-4"
    rounded="xl"
    color="#eeeeee"
    style="
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
    "
  >
    <v-app-bar-title
      ><NuxtLink to="/" style="text-decoration: none; color: black">
        DevFest City
      </NuxtLink></v-app-bar-title
    >
    <v-spacer></v-spacer>
    <div class="mx-4 d-none d-sm-none d-md-flex d-lg-flex">
      <v-btn rounded size="small" to="/speakers" class="mx-1">Speakers</v-btn>
      <v-btn rounded size="small" to="/agenda" class="mx-1">Agenda</v-btn>
      <v-btn rounded size="small" to="/badge" class="mx-1">Badge</v-btn>
      <v-btn rounded size="small" to="/team" class="mx-1">Team</v-btn>
      <v-btn rounded size="small" to="/faq" class="mx-1">FAQ</v-btn>
      </div>
    
    <!-- <v-btn
      rounded
      v-if="
        configData &&
        configData.eventInfo.registeration.link.length &&
        new Date(configData.eventInfo.registeration.end_date) > new Date()
      "
      :href="configData.eventInfo.registeration.link"
      class="action_btn d-md-flex d-lg-flex d-sm-flex d-none"
      :size="screenWidth < 400 ? 'x-small' : 'small'"
      target="_blank"
      >Register Now</v-btn
    > -->
    <v-app-bar-nav-icon
      class="d-md-none d-lg-none d-sm-flex d-flex"
      @click="drawerAction"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from "vuetify";
import configData from "/public/data/config.json";
const { width, mobile } = useDisplay();
const sidebar = useSideBar();
const screenWidth = ref(0);
const configDataSet = ref([]);

configDataSet.value = configData;
screenWidth.value = width;

const drawerAction = () => {
  sidebar.value = !sidebar.value;
};
</script>

