<template>
  <v-app>
    <ClientOnly>
      <core-admin-toolbar v-if="currentUser != null" />
      <core-admin-drawer v-if="currentUser != null" />
    </ClientOnly>
    <v-main class="mx-4" style="background-color: #fdfbff">
      <!-- <v-container fluid> -->
      <slot />
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>
  
    <script setup>
const { currentUser } = useAuth();
</script>