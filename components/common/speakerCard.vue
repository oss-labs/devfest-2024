<template>
  <v-dialog v-model="dialog" width="700" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <div
        v-bind="activatorProps"
        style="border-radius: 12px; cursor: pointer; background-color: #eeeeee"
        class="text-center py-5"
      >
        <v-avatar size="100">
          <v-img
            src="https://raw.githubusercontent.com/vrijraj/devfest-website-2023/main/src/assets/img/common/avatar.jpg"
          ></v-img>
        </v-avatar>
        <h4 class="mb-0 mt-3">{{ props.data.name }}</h4>
        <p>{{ props.data.company.name }}</p>
      </div>
    </template>

    <v-card max-width="800" rounded="xl" class="pa-4">
      <v-container fluid>
        <v-avatar size="100">
          <v-img
            src="https://raw.githubusercontent.com/vrijraj/devfest-website-2023/main/src/assets/img/common/avatar.jpg"
          ></v-img>
        </v-avatar>
        <h3 class="mt-3">{{ props.data.name }}</h3>
        <p>{{ props.data.bio }}</p>

        <common-speaker-social-button :socialLinks="props.data.social" />
      </v-container>
      <template v-slot:actions>
        <v-btn text @click="dialog = false">Close</v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
  
  <script setup>
// Props
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

// Reactive variables
const dialog = ref(false);
</script>
  
  <style></style>
  