<template>
  <v-container fluid>
    <v-row>
      <v-col md="9" sm="7" cols="12">
        <div
          style="background-color: #eeeeee; border-radius: 20px;border: 1.5px solid black;"
          class="pa-8"
        >
          <h1>Stay updated on the products you love</h1>
          <p>
            This DevFest we are focusing on the technologies that are trending in the market and are in demand. Let's come together and learn about these technologies from industry leading experts.
          </p>
          <v-container fluid>
            <v-row justify-start align="start">
              <v-col
                md="1"
                sm="2"
                cols="3"
                v-for="(item, index) in tech"
                :key="index"
              >
                <a :href="item.link" target="_blank" aria-label="link">
                  <v-avatar
                    color="white"
                    size="60"
                    class="pa-3"
                    style="border: 1px solid black"
                  >
                    <v-img alt="tech image" :src="item.logo" :lazy-src="item.logo"></v-img>
                  </v-avatar>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>

      <v-col md="3" sm="5" cols="12">
        <div
          style="background-color: #eeeeee; border-radius: 20px;border: 1.5px solid black;"
          class="pa-8 text-center"
        >
          <v-img alt="image" style="width: 100%;margin: auto;" src="/assets/img/extra/logo-text.svg"></v-img>
          <v-chip class="mt-n12" variant="outlined" color="black" style="background-color: white;">{{ mainData.communityLocation.city }}</v-chip>
          <v-img alt="image" style="width: 90%;margin: auto;" src="/assets/img/gdg-logo.svg"></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
var tech = ref([
  {
    name: "Android",
    link: "https://developer.android.com/",
    logo: "https://developer.android.com/static/images/android-logo.svg",
  },
  {
    name: "Google Checks",
    link: "https://checks.google.com/",
    logo: "https://developers.google.com/static/checks/images/Checks_Icon_2880.png",
  },
  {
    name: "ARCore",
    link: "https://developers.google.com/ar",
    logo: "https://developers.google.com/static/ar/images/logo.svg",
  },
  {
    name: "Google Chrome",
    link: "https://www.google.com/chrome/",
    logo: "https://www.gstatic.com/devrel-devsite/prod/ve6d23e3d09b80ebb8aa912b18630ed278e1629b97aee6522ea53593a0024d951/chrome/images/touchicon-180.png",
  },
  {
    name: "Google AI Studio",
    link: "https://aistudio.google.com/",
    logo: "https://developers.google.com/static/focus/images/ai-studio-icon_2880.png",
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    logo: "https://firebase.google.com/_static/firebase/images/icon.svg",
  },
  {
    name: "Flutter",
    link: "https://flutter.dev/",
    logo: "https://developers.google.com/static/site-assets/logo-flutter.svg",
  },
  {
    name: "Google Cloud",
    link: "https://cloud.google.com/",
    logo: "https://www.gstatic.com/devrel-devsite/prod/ve6d23e3d09b80ebb8aa912b18630ed278e1629b97aee6522ea53593a0024d951/cloud/images/favicons/onecloud/super_cloud.png",
  },
  {
    name: "Google Maps",
    link: "https://developers.google.com/maps",
    logo: "https://developers.google.com/static/maps/images/maps-icon.svg",
  },
  {
    name: "Google Pay & Google Wallet",
    link: "https://developers.google.com/wallet",
    logo: "https://developers.google.com/static/wallet/images/wallet-icon.png",
  },
  {
    name: "Google Play",
    link: "https://play.google.com/console/about/",
    logo: "https://fonts.gstatic.com/s/i/productlogos/play_games/v4/web-64dp/logo_play_games_color_1x_web_64dp.png",
  },
  {
    name: "TensorFlow",
    link: "https://www.tensorflow.org/",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v20ab951cf37b43fc7a428ae75ce91d8269f391204ca16525bc8a5ececea0ab56/tensorflow/images/apple-touch-icon-180x180.png",
  },
]);
</script>

<style>
</style>
