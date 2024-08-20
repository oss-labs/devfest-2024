<template>
  <v-container fluid>
    <v-row>
      <v-col md="8" cols="12">
        <div
          style="background-color: #eeeeee; border-radius: 20px"
          class="pa-8"
        >
          <h1>Stay updated on the products you love</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            incidunt fuga, architecto reprehenderit corporis
          </p>
          <v-container fluid>
            <v-row justify="start" align="start">
              <v-col
                md="1"
                sm="2"
                cols="3"
                v-for="(item, index) in tech"
                :key="index"
              >
                <a :href="item.link" target="_blank">
                  <v-avatar
                    color="white"
                    size="60"
                    style="border: 1px solid black"
                  >
                    <v-img :src="item.logo"></v-img>
                  </v-avatar>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>

      <v-col md="4" cols="12">
        <v-img src="/public/img/side.png" rounded="xl"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
var tech = ref([
  {
    name: "Accessibility",
    link: "https://www.google.com/accessibility/",
    logo: "https://io.google/2022/app/images/accessibility-logo.svg",
  },
  {
    name: "Android",
    link: "https://developer.android.com/",
    logo: "https://io.google/2022/app/images/android-logo.svg",
  },
  {
    name: "ARCore",
    link: "https://developers.google.com/ar",
    logo: "https://io.google/2022/app/images/arcore-logo.svg",
  },
  {
    name: "Chrome OS",
    link: "https://chromeos.dev/en",
    logo: "https://io.google/2022/app/images/chrome-logo.svg",
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    logo: "https://io.google/2022/app/images/firebase-logo.svg",
  },
  {
    name: "Flutter",
    link: "https://flutter.dev/",
    logo: "https://io.google/2022/app/images/flutter-logo.svg",
  },
  {
    name: "Google Cloud",
    link: "https://cloud.google.com/",
    logo: "https://io.google/2022/app/images/googlecloud-logo.svg",
  },
  {
    name: "Google Maps",
    link: "https://developers.google.com/maps",
    logo: "https://io.google/2022/app/images/googlemaps-logo.svg",
  },
  {
    name: "Google Pay & Google Wallet",
    link: "https://developers.google.com/wallet",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDYwQzAgMjYuODYyOSAyNi44NjI5IDAgNjAgMFYwQzkzLjEzNzEgMCAxMjAgMjYuODYyOSAxMjAgNjBWNjBDMTIwIDkzLjEzNzEgOTMuMTM3MSAxMjAgNjAgMTIwVjEyMEMyNi44NjI5IDEyMCAwIDkzLjEzNzEgMCA2MFY2MFoiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZD0iTTg4IDUzLjczMzNIMzJWNDQuODY2N0MzMiAzOS45NzEzIDM2LjA0NiAzNiA0MS4wMyAzNkg3OC45NjUzQzgzLjk1ODcgMzYgODggMzkuOTcxMyA4OCA0NC44NjY3VjUzLjczMzNaIiBmaWxsPSIjMzRBODUzIi8+CjxwYXRoIGQ9Ik04OCA2MS4yMDAxSDMyVjUyLjMzMzVDMzIgNDcuNDM4MSAzNi4wNDYgNDMuNDY2OCA0MS4wMyA0My40NjY4SDc4Ljk2NTNDODMuOTU4NyA0My40NjY4IDg4IDQ3LjQzODEgODggNTIuMzMzNVY2MS4yMDAxWiIgZmlsbD0iI0ZCQkMwNCIvPgo8cGF0aCBkPSJNODggNjguNjY2N0gzMlY1OS44QzMyIDU0LjkwNDcgMzYuMDQ2IDUwLjkzMzMgNDEuMDMgNTAuOTMzM0g3OC45NjUzQzgzLjk1ODcgNTAuOTMzMyA4OCA1NC45MDQ3IDg4IDU5LjhWNjguNjY2N1oiIGZpbGw9IiNFQTQzMzUiLz4KPHBhdGggZD0iTTMyIDU1Ljk2ODhMNjcuNTU1MyA2NC4yMDU0QzcxLjc2OTMgNjUuMTgwOCA3Ni4yMTIgNjQuMjc1NCA3OS42NjA3IDYxLjczNjhMODggNTUuNjAwMVY3NC44NTAxQzg4IDc5LjY4MDEgODMuOTU0IDgzLjYwMDEgNzguOTcgODMuNjAwMUg0MS4wMzQ3QzM2LjA0NiA4My42MDAxIDMyIDc5LjY4MDEgMzIgNzQuODUwMVY1NS45Njg4WiIgZmlsbD0iIzQyODVGNCIvPgo8L3N2Zz4K",
  },
  {
    name: "Google Play",
    link: "https://play.google.com/console/about/",
    logo: "https://io.google/2022/app/images/googleplay-logo.svg",
  },
  {
    name: "Material Design",
    link: "https://material.io/design",
    logo: "https://io.google/2022/app/images/materialdesign-logo.svg",
  },
  {
    name: "TensorFlow",
    link: "https://www.tensorflow.org/",
    logo: "https://io.google/2022/app/images/machinelearning-logo.svg",
  },
  {
    name: "Web",
    link: "https://developers.google.com/web",
    logo: "https://io.google/2022/app/images/web-logo.svg",
  },
]);
</script>

<style>
</style>