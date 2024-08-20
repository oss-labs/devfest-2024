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
            <v-col md="8" cols="12" class="pa-10">
              <h1>Last Year at DevFest</h1>
              <p class="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente amet asperiores unde. Adipisci nobis ipsum fuga amet?
                Ut, iusto tenetur quisquam neque consectetur impedit magnam unde
                harum a mollitia possimus? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Asperiores laborum ut praesentium
                architecto a. Recusandae neque deserunt saepe mollitia quibusdam
                a nihil dicta in, totam hic molestias eaque. Dolores, nisi.
              </p>

              <v-chip v-for="i in 4" :key="i" class="mr-1 mb-1"
                >20 Speakers</v-chip
              >
            </v-col>
            <v-col md="4" class="pa-0">
              <v-img
                gradient="to right, rgba(28,29,29,1), rgba(0,0,0,.1)"
                src="https://picsum.photos/500/300"
                rounded="lg"
                class="justify-end"
              >
                <!-- <v-chip>DevFest 2023</v-chip> -->
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>