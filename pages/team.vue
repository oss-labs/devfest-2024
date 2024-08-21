<template>
  <NuxtLayout name="default">
    <v-container fluid>
      <v-row>
        <v-col md="12">
          <h1>Team</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            sapiente est architecto autem minus explicabo reiciendis voluptatem
            porro rerum optio quidem quaerat animi eveniet magnam, pariatur non
            delectus velit perferendis!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2" v-for="(item, index) in teamData" :key="index">
          <common-speaker-card :data="item" />
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
import teamJSON from "/public/data/team.json";

let teamData = ref([]);

teamData.value = teamJSON

definePageMeta({
  layout: false,
});

</script>

<style>
</style>