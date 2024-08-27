<template>
  <div class="mt-4">
    <!-- {{ socialLinks }} -->
    <v-btn
      class="mr-1 mb-1"
      v-if="socialLinks.linkedin != null && socialLinks.linkedin.length"
      icon="mdi-linkedin"
      :href="socialLinks.linkedin"
      target="_blank"
      size="small"
      :color="dark ? 'white' : ''"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      v-if="socialLinks.github != null && socialLinks.github.length"
      icon="mdi-github"
      :color="dark ? 'white' : ''"
      :href="socialLinks.github"
      target="_blank"
      size="small"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-twitter"
      :color="dark ? 'white' : ''"
      :href="socialLinks.twitter"
      target="_blank"
      size="small"
      v-if="socialLinks.twitter != null && socialLinks.twitter.length"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-instagram"
      :color="dark ? 'white' : ''"
      v-if="socialLinks.instagram != null && socialLinks.instagram.length"
      size="small"
      :href="socialLinks.instagram"
      target="_blank"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-web"
      :color="dark ? 'white' : ''"
      v-if="socialLinks.web != null && socialLinks.web.length"
      size="small"
      :href="socialLinks.web"
      target="_blank"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-youtube"
      :color="dark ? 'white' : ''"
      v-if="socialLinks.youtube != null && socialLinks.youtube.length"
      :href="socialLinks.youtube"
      target="_blank"
      size="small"
      variant="text"
    ></v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  socialLinks: {
    type: Object,
    default: {},
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
