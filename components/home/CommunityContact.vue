<template>
  <v-container fluid>
    <v-row>
        <v-col md="12" class="text-center">
          <div
            style="background-color: #eeeeee; border-radius: 20px"
            class="pa-8"
          >
            <h1>
              Keep in touch with {{ mainData.communityName }} for the latest
              announcements
            </h1>
            <p class="mb-3">
              Stake out #{{ mainData.communityName }} for the latest updates
              and news.
            </p>

            <CommonSpeakerSocialButton
              :socialLinks="mainData.communityLinks"
            />
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