<template>
  <v-app-bar
    :elevation="0"
    class="mt-0 px-2 toolbar-class mx-auto mt-4"
    rounded="xl"
    color="#eeeeee"
  >
    <v-app-bar-title
      ><NuxtLink to="/" style="text-decoration: none; color: black">
        DevFest {{ configData.communityLocation.city }}
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

    <v-btn
      rounded
      v-if="
        configData &&
        configData.eventInfo.registeration.link.length &&
        new Date(configData.eventInfo.registeration.end_date) > new Date()
      "
      :href="configData.eventInfo.registeration.link"
      class="d-md-flex d-lg-flex d-sm-flex d-none mr-3"
      :size="screenWidth < 400 ? 'x-small' : 'small'"
      target="_blank"
      color="#4182F1"
      variant="flat"
      >Register Now</v-btn
    > 
    <v-app-bar-nav-icon
      class="d-md-none d-lg-none d-sm-flex d-flex"
      @click="drawerAction"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from "vuetify";
import configData from "/public/data/config.json";
const sidebar = useSideBar();
const { width, mobile } = useDisplay();

const screenWidth = ref(width);

const configDataSet = ref([]);
configDataSet.value = configData;

const drawerAction = () => {
  sidebar.value = !sidebar.value;
};
</script>

<style scoped>
/* Mobile breakpoint */
@media (max-width: 700px) { 
  .toolbar-class {
    max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    position: relative !important;
    margin-top: 0 !important;
    border-radius: 0 !important;
  }
}

/* Tablet and larger screens */
@media (min-width: 700px) {
  .toolbar-class {
    max-width: 1024px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    position: relative !important;
  }
}
</style>

