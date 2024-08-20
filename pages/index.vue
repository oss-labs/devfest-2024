<template>
  <v-container fluid>
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

        <h1 class="my-4" style="font-size: 500%; line-height: 65px">
          City's favorite tech <br />
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
      <v-col md="4" cols="12">
        <div
          style="background-color: #eeeeee; border-radius: 20px"
          class="pa-8"
        >
          <h2>Technical content</h2>
          <p>
            Events hosted by the Google Developer Groups community, featuring
            leading experts on Google technologies in areas.
          </p>
        </div>
      </v-col>
      <v-col md="4" cols="12">
        <div
          style="background-color: #eeeeee; border-radius: 20px"
          class="pa-8"
        >
          <h2>Technical content</h2>
          <p>
            Events hosted by the Google Developer Groups community, featuring
            leading experts on Google technologies in areas.
          </p>
        </div>
      </v-col>
      <v-col
  components: { sponsorInfo }, md="4">
        <div
          style="background-color: #eeeeee; border-radius: 20px"
          class="pa-8"
        >
          <h2>Technical content</h2>
          <p>
            Events hosted by the Google Developer Groups community, featuring
            leading experts on Google technologies in areas.
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Technologies -->
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
        <v-img src="/img/side.png" rounded="xl"></v-img>
      </v-col>
    </v-row>
    <!-- Technologies -->

    <!-- Past DevFest -->
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
    <!-- Past DevFest -->

    <!-- Sponsors -->
    <v-row class="my-10">
      <v-col md="12">
        <h1>Our Sponsors</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam
          obcaecati veniam. Velit ducimus at ipsum optio odio, error illo veniam
          corrupti voluptatibus repellendus id dolorum sapiente. Error, corporis
          quam.
        </p>
 
        <v-container fluid class="pa-0">
            <common-sponsor-info/>
        </v-container>
      </v-col>
    </v-row>
    <!-- Sponsors -->

    <!-- Keep in Touch -->
    <v-row>
        <v-col md="12" class="text-center">
            <div style="background-color: #eeeeee; border-radius: 20px"
            class="pa-8">
                <h1>Keep in touch with GDG Jakarta for the latest announcements</h1>
                <p class="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam porro placeat in pariatur molestiae? Omnis voluptas nobis labore ipsum, cum illum culpa, quaerat quod ad eligendi et fuga deserunt numquam?</p>

                <v-btn class="ma-1" icon="mdi-linkedin" size="small" variant="flat" v-for="i in 4" :key="i"></v-btn>
            </div>
        </v-col>
    </v-row>
    <!-- Keep in Touch -->
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