<template>
  <v-container fluid>
    <v-row>
        <v-col md="12">
        <h1>What to Expect</h1>
        <p>
          An annual event hosted by the Google Developers Group across the world
          to bring the technology closer to the developers. It is an all day
          developer conference where we aim to focus on multiple technologies
          through lightning talks, sessions, workshops, etc.
        </p>
      </v-col>
      <v-col md="4" cols="12" v-for="(item, index) in mainData.eventInfo.whatToExpect" :key="index">
        <div
          style="background-color: #eeeeee; border-radius: 20px"
          class="pa-8"
        >
          <h2>{{item.title}}</h2>
          <p>
            {{item.description}}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
</script>

<style>

</style>
