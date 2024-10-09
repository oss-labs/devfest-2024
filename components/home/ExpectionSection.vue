<template>
  <v-container fluid>
    <v-row>
      <v-col md="12" sm="12">
        <h1>Que puedes esperar</h1>
        <p>
          En el DevFest, puedes esperar una experiencia interactiva llena de charlas y demostraciones de diferentes
          tecnologías. Es una oportunidad única para aprender de expertos, desarrollar nuevas habilidades, y conectar
          con una comunidad de desarrolladores apasionados.
        </p>
      </v-col>
      <v-col md="4" sm="4" cols="12" v-for="(item, index) in mainData.eventInfo.whatToExpect" :key="index"
        class="d-flex">
        <v-card style="
            background-color: #eeeeee;
            border-radius: 20px;
            border: 1.5px solid black;
          " flat min-height="250">
          <v-img :src="getImage(index + 1)" width="140" alt="image" class="float-right mr-5"></v-img>
          <div class="pa-4">
            <h2 style="font-size: 1.2em">{{ item.title }}</h2>
            <p style="font-size: 95%">
              {{ item.description }}
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import img1 from "@/assets/img/section-elements/se-1.svg";
import img2 from "@/assets/img/section-elements/se-2.svg";
import img3 from "@/assets/img/section-elements/se-3.svg";

const { mainData } = useJSONData();
const getImage = (index) => {
  if (index == 1) return img1;
  if (index == 2) return img2;
  if (index == 3) return img3;
};
</script>

<style>
</style>
