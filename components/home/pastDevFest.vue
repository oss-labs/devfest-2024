<template>
  <v-container fluid>
    <v-row>
      <v-col md="12" cols="12" class="">
        <v-container
          fluid
          style="background-color: #1c1d1d; border-radius: 20px"
          class="text-white"
        >
          <v-row class="pa-0 ma-0" justify="center" align="center">
            <v-col md="8" cols="12" class="pa-md-10">
              <h1>Last Year at DevFest</h1>
              <p class="mb-4">
                {{ data.summery }}
              </p>

              <v-chip v-for="(item,index) in data.stats" :key="index" class="mr-1 mb-1"
                >{{ item.value }} {{item.name}}</v-chip
              >
            </v-col>
            <v-col md="4" class="pa-0">
              <v-img
                gradient="to right, rgba(28,29,29,1), rgba(0,0,0,.1)"
                src="/img/common/past-devfest.jpg"
                rounded="lg"
                class="justify-end"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:['data']
};
</script>

<style>
</style>
