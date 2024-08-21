<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row
      v-for="(item, index) in sponsorsInfo"
      :key="index"
      class="google-font mb-5 mt-0"
    >
      <v-col md="12" cols="12" class="mb-n1"><b>{{ item.category_name }}</b></v-col>
      <v-col
        md="2"
        cols="6"
        sm="3"
        class="text-center"
        v-for="(sponsor, indexp) in item.sponsors"
        :key="indexp"
      >
        <div style="background-color: #EEEEEE; border-radius: 15px" class="pa-5">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a :href="sponsor.link" target="_blank" v-bind="attrs" v-on="on">
                <v-img
                  :src="'/img/sponsors/'+sponsor.logo"
                ></v-img>
              </a>
            </template>
            <span>{{ sponsor.name }}</span>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sponsorsJSON from "/public/data/sponsors.json";
export default {
  name: "SponsorsData",
  data: () => ({
    sponsorsInfo: sponsorsJSON,
  }),
};
</script>

<style>
</style>