<template>
  <v-app style="background-color: #FFFFFF" class="google-font">
    <CoreAppToolbar />
    <ClientOnly>
      <CoreAppDrawer />
    </ClientOnly>
    <v-main
      class="mt-3"
      style="max-width: 1400px; margin-left: auto; margin-right: auto"
    >
      <slot></slot>
    </v-main>
    <CoreAppFooter />
  </v-app>
</template>

<script setup>
</script>
