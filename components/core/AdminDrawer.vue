<template>
  <v-navigation-drawer v-model="adminDrawer" floating app color="#fdfbff">
    <v-list-item
      class="py-4"
      :title="currentUser.displayName"
      :subtitle="currentUser.email"
    ></v-list-item>
    <!-- {{ currentUser }} -->
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
const { currentUser } = useAuth();
const adminDrawer = useAdminSideBar();

const sidebarLinks = ref([
  {
    name: "Home",
    icon: "mdi-home-variant-outline",
    link: "/admin",
  },
  {
    name: "Speakers",
    icon: "mdi-account-multiple-outline",
    link: "/admin/speakers",
  },
  {
    name: "Sponsors",
    icon: "mdi-currency-usd",
    link: "/admin/sponsors",
  },
  {
    name: "Agenda",
    icon: "mdi-presentation",
    link: "/admin/agenda",
  },
  {
    name: "Team",
    icon: "mdi-account-switch-outline",
    link: "/admin/team",
  },
  {
    name: "Config",
    icon: "mdi-presentation",
    link: "/admin/config",
  },
]);
</script>

<style>
</style>