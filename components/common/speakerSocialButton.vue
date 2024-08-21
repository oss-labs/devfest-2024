<template>
  <div class="mt-4"> 
    {{ socialLinks }}
    <v-btn class="mr-1 mb-1" icon="mdi-linkedin" size="small" variant="flat"></v-btn>
    <v-btn class="mr-1 mb-1" icon="mdi-github" size="small" variant="flat"></v-btn>
    <v-btn class="mr-1 mb-1" icon="mdi-twitter" size="small" variant="flat"></v-btn>
    <v-btn class="mr-1 mb-1" icon="mdi-instagram" size="small" variant="flat"></v-btn>
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

<style>
</style>