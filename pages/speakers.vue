<template>
   <NuxtLayout name="default">
  <v-container fluid>
    <v-row>
        <v-col md="12">
            <h1>Speakers</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, sapiente est architecto autem minus explicabo reiciendis voluptatem porro rerum optio quidem quaerat animi eveniet magnam, pariatur non delectus velit perferendis!</p>
            <!-- {{ speakersData }} -->
          </v-col>
    </v-row>
    <v-row>
        <v-col md="2" v-for="(item, index) in speakersData" :key="index">
            <common-speaker-card :data="item"/>
        </v-col>
    </v-row>
  </v-container>
</NuxtLayout>
</template>

<script setup>
const { getAllSpeakers } = useSpeakers();

let loading = ref(true);
let speakersData = ref([]);

definePageMeta({
  layout: false,
});
onMounted(() => {
  getAllSpeakersData();
});

const getAllSpeakersData = async () => {
  try {
    loading.value = true;
    let res = await getAllSpeakers("speakers");
    console.log(res);
    speakersData.value = res;
    loading.value = false;
  } catch (error) {
    console.log("error", error);
    loading.value = false;
  }
};
</script>

<style>

</style>