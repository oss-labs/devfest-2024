<template>
  <v-container
      fluid
      class="px-5 mt-8"
      style="max-width: 1400px; margin-left: auto; margin-right: auto"
    >
      <v-divider class="mb-4"></v-divider>
      <v-row justify="center" align="center">
        <v-col md="2" cols="12">
          <h3>{{ mainData.communityName }}</h3>
          <a
            href="https://github.com/oss-labs/"
            style="text-decoration: none; color: black"
            ><p style="font-size: 70%"><i>developed by OSS Labs</i></p></a
          >
        </v-col>
        <v-col md="10" cols="12">
          <v-container fluid class="pa-0">
            <v-row>
              <v-col>
                <a
                  href="https://developers.google.com/community/gdg"
                  target="_blank"
                  rel="noreferrer"
                  class="grey--text text--darken-3 mr-6 google-font"
                  style="text-decoration: none; color: black"
                  >About GDG Program</a
                >
                <br class="hidden-md-and-up" />
                <a
                  href="https://www.womentechmakers.com/"
                  target="_blank"
                  rel="noreferrer"
                  class="grey--text text--darken-3 mr-6 google-font"
                  style="text-decoration: none; color: black"
                  >About WTM Program</a
                >

                <br class="hidden-md-and-up" />
                <router-link
                  to="/faq"
                  rel="noreferrer"
                  class="mr-3 google-font grey--text text--darken-3"
                  style="text-decoration: none; color: black"
                  >FAQ</router-link
                >
                <br class="hidden-md-and-up" />
                <router-link
                  to="/coc"
                  style="text-decoration: none; color: black"
                  rel="noreferrer"
                  class="mr-3 google-font grey--text text--darken-3"
                  >Code of conduct</router-link
                >
                <br class="hidden-md-and-up" />
                <a
                  href="https://developers.google.com/community-guidelines"
                  target="_blank"
                  rel="noreferrer"
                  class="mr-6 google-font grey--text text--darken-3"
                  style="text-decoration: none; color: black"
                  >Community Guidelines</a
                >
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

<style>

</style>