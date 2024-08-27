<template>
  <v-container fluid class="mx-3">
    <v-row
      justify="center"
      align="center"
      style="
        background-color: #f3f3f3;
        border-radius: 20px;
        border: 1.5px solid black;
      "
      class="pa-0"
    >
      <v-col md="2" sm="2" class="pa-0">
        <v-img src="/assets/img/element1.svg"></v-img>
      </v-col>
      <v-col md="10" sm="10">
        <v-container fluid>
          <v-row>
            <v-col
              md="3"
              sm="3"
              class="text-center"
              v-for="(item, index) in mainData.eventInfo.stats"
              :key="index"
            >
              <h1 style="font-size: 300%">{{ item.value }}</h1>
              <p>{{ item.name }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
</script>

<style></style>
