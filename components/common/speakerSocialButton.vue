<template>
  <div class="mt-4">
    <!-- {{ socialLinks }} -->
    <v-btn
      class="mr-1 mb-1"
      v-if="socialLinks.linkedin != null && socialLinks.linkedin.length"
      icon="mdi-linkedin"
      size="small"
      variant="flat"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      v-if="socialLinks.github != null && socialLinks.github.length"
      icon="mdi-github"
      size="small"
      variant="flat"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-twitter"
      size="small"
      v-if="socialLinks.twitter != null && socialLinks.twitter.length"
      variant="flat"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-instagram"
      v-if="socialLinks.instagram != null && socialLinks.instagram.length"
      size="small"
      variant="flat"
    ></v-btn>
    <v-btn class="mr-1 mb-1" icon="mdi-web" size="small" variant="flat"></v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  socialLinks: {
    type: Object,
    default: {},
  },
});
</script>

<style></style>
