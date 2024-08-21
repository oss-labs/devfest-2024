<template>
  <v-navigation-drawer v-model="adminDrawer" floating app color="#fdfbff">
    <v-list-item
      class="py-4"
      title="App Name"
      subtitle="App Sub Title"
    ></v-list-item>
    <v-divider></v-divider>
    <v-list >
      <v-list-item
        v-for="(item, index) in sidebarLinks"
        :key="index"
        :to="item.link"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const adminDrawer = useAdminSideBar();

const sidebarLinks = ref([
  {
    name: "Home",
    icon: "mdi-home-variant-outline",
    link: "/admin",
  },
  {
    name: "Projects",
    icon: "mdi-toolbox-outline",
    link: "/admin/projects",
  },
  {
    name: "Talks",
    icon: "mdi-presentation",
    link: "/admin/talks",
  },
]);
</script>

<style>
</style>