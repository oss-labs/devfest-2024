<template>
  <v-container fluid class="mx-3">
    <v-row
      justify-center
      align="center"
      style="
        background-color: #f3f3f3;
        border-radius: 20px;
        border: 1.5px solid black;
      "
    >
      <v-col cols="12" md="2" sm="12" order-md="1" order="2" order-sm="1" class="pa-0">
        <!--Desktop-->
        <v-img
          alt="image"
          class="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
          src="/assets/img/element1.svg"
        ></v-img>
        <!--mobile-->
        <v-img
          alt="image"
          class="d-flex d-sm-none d-md-none d-lg-none d-xl-none"
          src="/assets/img/element3.svg"
        ></v-img>
      </v-col>

      <v-col cols="12" md="10" sm="12" order-md="2" order="1" order-sm="2">
        <v-container fluid>
          <v-row>
            <v-col
              md="3"
              sm="3"
              cols="6"
              class="stats-container"
              :style="{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: 'center',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }"
              v-for="(item, index) in mainData.eventInfo.stats"
              :key="index"
            >
              <h1 class="responsive-title">{{ item.value }}</h1>
              <p>
                {{ item.name }}
              </p>
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

<style scoped>
.responsive-title {
  font-size: 300%;
}
.stats-container {
  background-size: 70%;
}

@media (max-width: 1140px) {
  .responsive-title {
    font-size: 250%;
  }
  .stats-container {
    background-size: 85%;
  }
}

@media (max-width: 860px) {
  .responsive-title {
    font-size: 180%;
  }
}
@media (max-width: 600px) {
  .responsive-title {
    font-size: 250%;
  }
  .stats-container {
    background-size: 75%;
  }
}
@media (max-width: 460px) {
  .responsive-title {
    font-size: 180%;
  }
  .stats-container {
    background-size: 80%;
  }
}
</style>
