<template>
  <v-container fluid>
    <v-row class="mb-0">
      <v-col md="12" sm="12" cols="12" class="text-center">
        <h1>Last Year at DevFest</h1>
        <p>
          {{ mainData.eventInfo.pastDevFest.summery }}
        </p>
        <v-img
          style="max-height: 300px; border: 1.5px solid black"
          rounded="xl"
          alt="image"
          cover
          class="mt-6"
          :src="`/img/past-devfest/${mainData.eventInfo.pastDevFest.images[0]}`"
        ></v-img>
      </v-col>
      <v-col md="12" sm="12" cols="12">
        <v-container fluid class="px-0">
          <v-row>
            <v-col
              md="3"
              v-for="(item, index) in mainData.eventInfo.pastDevFest.stats"
              :key="index"
              cols="6"
            >
              <div
                class="text-center py-3"
                :style="{
                  backgroundColor: `${colors[index]}`,
                  borderTopLeftRadius: index == 0 ? '23px' : '',
                  borderBottomLeftRadius: index == 0 ? '23px' : '',
                  borderTopRightRadius:
                    index == mainData.eventInfo.pastDevFest.stats.length - 1
                      ? '23px'
                      : '',
                  borderBottomRightRadius:
                    index == mainData.eventInfo.pastDevFest.stats.length - 1
                      ? '23px'
                      : '',
                }"
              >
                <h1>{{ item.value }}</h1>
                <p>{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col md="6" sm="6">
        <v-img
          height="250"
          rounded="xl"
          cover
          alt="image"
          :src="`/img/past-devfest/${mainData.eventInfo.pastDevFest.images[1]}`"
          style="border: 1.5px solid black"
        ></v-img>
      </v-col>
      <v-col md="6" sm="6">
        <v-img
          height="250"
          rounded="xl"
          cover
          alt="image"
          :src="`/img/past-devfest/${mainData.eventInfo.pastDevFest.images[2]}`"
          style="border: 1.5px solid black"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
const colors = ref(["#C3ECF6", "#F8D8D8", "#FFE7A5", "#CCF6C5"]);
</script>

