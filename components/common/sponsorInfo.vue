<template>
  <v-container fluid class="pa-0 ma-0">
    {{ sponsorsData }}
    <v-row
      v-for="(item, index) in sponsorsData"
      :key="index"
      class="google-font mb-5 mt-0"
    >
      <v-col md="12" cols="12" class="mb-n1"
        ><b>{{ item.type }}</b></v-col
      >

      {{ item }}
      <!-- <v-col
        md="2"
        cols="6"
        sm="3"
        class="text-center"
        v-for="(sponsor, indexp) in item.sponsors"
        :key="indexp"
      >
        <div
          style="background-color: #eeeeee; border-radius: 15px"
          class="pa-5"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a :href="sponsor.link" target="_blank" v-bind="attrs" v-on="on">
                <v-img :src="sponsor.logo"></v-img>
              </a>
            </template>
            <span>{{ sponsor.name }}</span>
          </v-tooltip>
        </div>
      </v-col> -->
    </v-row>
  </v-container>
</template>
  
  <script setup>
const { getAllSponsors } = useSponsors();
let loading = ref(true);
let sponsorsData = ref([]);

onMounted(() => {
  getAllSponsorsData();
});

const getAllSponsorsData = async () => {
  try {
    loading.value = true;
    let res = await getAllSponsors("sponsors");
    console.log(res);
    sponsorsData.value = res;
    loading.value = false;
  } catch (error) {
    console.log("error", error);
    loading.value = false;
  }
};
</script>
  
  <style>
</style>