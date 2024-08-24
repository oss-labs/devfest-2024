<template>
  <v-navigation-drawer v-model="sidebar" app floating temporary location="bottom">
    <v-list-item class="py-4" :title="'DevFest '+ mainData.communityLocation.city" :subtitle="mainData.communityName"></v-list-item>
    <v-divider></v-divider>
    <v-list-item v-for="(item, index) in navbarData" :key="index" link :title="item.name" :to="item.path"></v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
const { mainData, navbarData } = useJSONData();
const sidebar = useSideBar();
</script>

<style>
</style>
