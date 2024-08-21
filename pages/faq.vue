<template>
  <NuxtLayout name="default">
    <v-container fluid>
      <v-row>
        <v-col md="8">
          <h1>Frequently asked questions</h1>
          <p>Need Answers? Everything you need to know</p>

          <v-expansion-panels
            class="mb-6 mt-10"
            rounded="12"
            bg-color="white"
            flat
            style="
              border-radius: 20px !important;
              /* border-bottom: 1px solid black; */
              overflow: hidden;
            "
            variant="accordion"
          >
            <!-- :style="{ borderBottom: i<3?'1px solid black':'', borderTop: i!=0?'1px solid black':'' }" -->
            <v-expansion-panel
              v-for="(item, index) in faqDataSet"
              :key="index"
              :style="{
                borderBottom:
                  index + 1 < faqDataSet.length ? '1px solid black' : '',
              }"
            >
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
                style="background-color: #eeeeee"
              >
                {{ item.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="pa-3">
                <div v-html="item.answer"></div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>
  
  <script setup>
import faqData from "/public/data/faq.json";
const faqDataSet = ref([]);
faqDataSet.value = faqData;
definePageMeta({
  layout: false,
});


</script>
  
  <style>
</style>