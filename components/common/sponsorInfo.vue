<template>
  <v-container fluid v-if="loader">
    <v-row>
      <v-col md="2" v-for="i in 4" :key="i">
        <v-skeleton-loader type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid class="pa-0 ma-0" v-else>
    <v-row
      v-for="(item, index) in sponsorsData"
      :key="index"
      class="google-font mb-5 mt-0"
    >
      <v-col md="12" cols="12" class="mb-n1"
        ><b>{{ item.type }}</b></v-col
      >

      <v-col
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
                <v-img :src="sponsor.image" style="max-height: 20px"></v-img>
              </a>
            </template>
            <span>{{ sponsor.name }}</span>
          </v-tooltip>
        </div>
      </v-col>
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

    sponsorsData.value = await makeGroup(res);
    console.log("sponsorsData.value", sponsorsData.value);
    loading.value = false;
  } catch (error) {
    console.log("error", error);
    loading.value = false;
  }
};

const makeGroup = (data) => {
  const result = data.reduce((acc, item) => {
    let group = acc.find((g) => g.type === item.type);

    if (!group) {
      group = { type: item.type, sponsors: [] };
      acc.push(group);
    }

    group.sponsors.push(item);

    return acc;
  }, []);
  return result;
};
</script>
  
  <style>
</style>