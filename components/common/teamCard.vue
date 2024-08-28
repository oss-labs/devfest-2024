<template>
  <v-dialog v-model="dialog" width="800" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <div
        v-bind="activatorProps"
        style="cursor: pointer"
        class="text-center image-container"
      >
        <v-img alt="frame" class="frame" src="/assets/img/frame.png"></v-img>
        <v-img
          class="avatar"
          aspect-ratio="1"
          cover
          :alt="props.data.name"
          :src="
            props.data.image.length
              ? '/img/team/' + props.data.image
              : '/img/common/avatar.png'
          "
        ></v-img>
        <h3 class="mt-n1">{{ props.data.name }}</h3>
        <p style="font-size: 90%">{{ props.data.company.name }}</p>
      </div>
    </template>

    <v-card
      max-width="800"
      rounded="xl"
      class="pa-4"
      style="border: 2px solid black"
    >
      <v-container fluid>
        <v-row>
          <v-col md="4" cols="12">
            <div class="text-center image-container">
              <v-img alt="frame" class="frame" src="/assets/img/frame.png"></v-img>
              <v-img
                class="avatar"
                :alt="props.data.name"
                aspect-ratio="1"
                cover
                :src="
                  props.data.image.length
                    ? '/img/team/' + props.data.image
                    : '/img/common/avatar.png'
                "
              ></v-img>
            </div>
          </v-col>
          <v-col md="8" cols="12">
            <h1 class="mt-3 mb-0">{{ props.data.name }}</h1>
            <p style="font-weight: 500" class="mt-n1">
              {{ props.data.community_title }} |
              {{ props.data.company.designation }},
              {{ props.data.company.name }}
            </p>

            <p class="mt-4">{{ props.data.bio }}</p>

            <common-speaker-social-button :socialLinks="props.data.social" />
          </v-col>
        </v-row>
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

<style scoped>
.image-container {
  position: relative;
  width: 80%;
  margin-top: 20px;
}

.avatar {
  width: 100%;
  height: auto;
  position: relative;
  border: 1px solid white;
}

.frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}

h4,
p {
  position: relative;
  z-index: 10;
}
</style>
