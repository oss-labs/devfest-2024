<template>
  <v-app-bar
    :elevation="0"
    fixed
    class="mt-0 px-2 toolbar-class mx-auto mt-4"
    rounded="xl"
    color="#eeeeee"
  >
    <v-app-bar-title
      ><NuxtLink to="/" style="text-decoration: none; color: black">
        DevFest {{ mainData.communityLocation.city }}
      </NuxtLink></v-app-bar-title
    >
    <v-spacer></v-spacer>
    <div class="mx-4 d-none d-sm-none d-md-flex d-lg-flex">
      <v-btn
        rounded
        size="small"
        style="text-transform: capitalize"
        :to="item.path"
        class="mx-1"
        v-for="(item, index) in navbarData"
        :key="index"
        >{{ item.name }}</v-btn
      >
    </div>

    <ClientOnly>
      <v-btn
        rounded
        v-if="
          mainData &&
          mainData.eventInfo.registeration.link.length &&
          new Date(mainData.eventInfo.registeration.end_date) > new Date()
        "
        :href="mainData.eventInfo.registeration.link"
        class="d-md-flex d-lg-flex d-sm-flex d-none mr-3"
        :size="screenWidth < 400 ? 'x-small' : 'small'"
        target="_blank"
        color="#4182F1"
        style="border: 1.5px solid #1e1e1e; color: black;text-transform: capitalize;font-weight: 100;"
        variant="flat"
        >Register Now</v-btn
      >
    </ClientOnly>
    <v-app-bar-nav-icon
      class="d-md-none d-lg-none d-sm-flex d-flex"
      @click="drawerAction"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { mainData, navbarData } = useJSONData();
const sidebar = useSideBar();
const { width, mobile } = useDisplay();

const screenWidth = ref(width);

const drawerAction = () => {
  sidebar.value = !sidebar.value;
};
</script>

<style scoped>
.toolbar-class {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin-bottom: 80px;
  height: 64px; /* Set the height of the toolbar */
}
/* Mobile breakpoint */
@media (max-width: 700px) {
  .toolbar-class {
    max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 0 !important;
    border-radius: 0 !important;
  }
}

/* Tablet and larger screens */
@media (min-width: 700px) {
  .toolbar-class {
    max-width: 1000px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
</style>
