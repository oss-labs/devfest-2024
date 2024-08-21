<template>
  <NuxtLayout name="default">
    <v-container fluid>
      <!-- Hero -->
      <v-row>
        <v-col md="12">
          <v-img src="/img/home.png" rounded="xl"></v-img>
        </v-col>
        <v-col class="text-center" cols="12">
          <v-chip class="mx-1" size="large">
            <v-icon icon="mdi-calendar-month-outline" start></v-icon>
            Oct 23, 2024</v-chip
          >
          <v-chip class="mx-1" size="large">
            <v-icon icon="mdi-map-marker-check-outline" start></v-icon>
            Somewhere in the Earth</v-chip
          >

          <h1 class="my-4" style="font-size: 450%; line-height: 65px">
            The city's most beloved tech <br />
            conference
          </h1>
          <p class="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            provident ratione. Ad, non fugit fuga molestias inventore <br />
            debitis at necessitatibus eos eveniet placeat hic ipsum quidem
            temporibus distinctio illum pariatur.
          </p>
          <v-btn
            rounded
            size="large"
            color="#4182F1"
            class="my-4"
            style="border: 1.5px solid #1e1e1e; color: black"
            variant="flat"
            >Register Now</v-btn
          >

          <v-container>
            <v-row justify="center">
              <v-col md="2" v-for="i in 4" :key="i">
                <div
                  style="background-color: #eeeeee; border-radius: 20px"
                  class="pa-2"
                >
                  <h1>1200+</h1>
                  <p>Participants</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <!-- Hero -->

      <!-- Whats New -->
      <v-row>
        <HomeMoveSection />
        <HomeExpectionSection />
      </v-row>
      <!-- Whats New -->

      <!-- Technologies -->
      <v-row>
        <homeTechSection />
      </v-row>
      <!-- Technologies -->

      <!-- Past DevFest -->
      <v-row>
        <HomePastDevFest />
      </v-row>
      <!-- Past DevFest -->

      <!-- Sponsors -->
      <v-row class="my-10">
        <v-col md="12">
          <h1>Our Sponsors</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam
            obcaecati veniam. Velit ducimus at ipsum optio odio, error illo
            veniam corrupti voluptatibus repellendus id dolorum sapiente. Error,
            corporis quam.
          </p>

          <v-container fluid class="pa-0">
            <CommonSponsorInfo />
          </v-container>
        </v-col>
      </v-row>
      <!-- Sponsors -->

      <!-- Keep in Touch -->
      <v-row>
        <v-col md="12" class="text-center">
          <div
            style="background-color: #eeeeee; border-radius: 20px"
            class="pa-8"
          >
            <h1>Keep in touch with GDG Jakarta for the latest announcements</h1>
            <p class="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              porro placeat in pariatur molestiae? Omnis voluptas nobis labore
              ipsum, cum illum culpa, quaerat quod ad eligendi et fuga deserunt
              numquam?
            </p>

            <v-btn
              class="ma-1"
              icon="mdi-linkedin"
              size="small"
              variant="flat"
              v-for="i in 4"
              :key="i"
            ></v-btn>
          </div>
        </v-col>
      </v-row>
      <!-- Keep in Touch -->
    </v-container>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style>
</style>