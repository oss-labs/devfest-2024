<template>
  <v-dialog v-model="dialog" width="800" scrollable>
    <template v-slot:activator="{ props: activatorProps }">
      <div
        v-on="on"
        style="cursor: pointer"
        class="py-3 ma-1 fill-height"
        v-bind="activatorProps"
      >
        {{ props.data }}

        <p class="mb-0 h1-subheading google-font">{{ props.data.title }}</p>

        <span v-for="(itemp, indexp) in speakers" :key="indexp">
          <v-chip pill class="mt-2 mr-2">
            <v-avatar start>
              <img :src="getImgUrl(itemp.image)" style="width: 100%" />
            </v-avatar>
            {{ itemp.name }}
          </v-chip>
        </span>

        <v-chip v-if="data.track" small class="mt-2">{{
          props.data.track
        }}</v-chip>
      </div>
    </template>

    <v-card class="pa-0 white" v-if="dialog" style="border-radius: 12px">
      <iframe
        v-if="props.data.link"
        class="ma-0 pa-0"
        width="100%"
        height="455"
        style="border: none"
        :src="props.data.link"
      >
      </iframe>
      <v-card-text class="px-2 google-font mt-n0">
        <v-container fluid class="py-0">
          <v-row>
            <v-col md="12" cols="12">
              <p
                class="my-2"
                style="text-align: left;font-size:25px;font-weight:500;color:black'line-height:15px"
              >
                {{ props.data.title }} Details
              </p>
              <p style="font-size: 100%">
                <!-- <span class="mr-3">{{item.timeDuration}} Min</span> -->
                <span v-if="props.data.date.length" class="mr-3"
                  ><v-icon small>mdi-calendar-month</v-icon>
                  {{ props.data.date }}</span
                >
                <span v-if="props.data.time.length" class="mr-3"
                  ><v-icon small>mdi-clock-outline</v-icon>
                  {{ props.data.time }}</span
                >

                <span>{{ props.data.timeDuration }} Min</span>
              </p>

              <p
                class="mt-5"
                style="font-size: 22px; color: black; font-weight: 500"
              >
                Overview
              </p>
              <p style="font-size: 95%; color: black; opacity: 0.9">
                {{ props.data.description }}
              </p>

              <!-- <v-chip small pill>{{ props.data.format }}</v-chip> -->
              <v-chip v-if="props.data.track" small class="mt-2">{{
                props.data.track
              }}</v-chip>

              <v-chip
                v-if="props.data.slide"
                :href="props.data.slide"
                color="indigo"
                outlined
                target="_blank"
                class="mt-2 mr-2"
                label
              >
                <v-avatar left>
                  <v-icon small>mdi-note-outline</v-icon>
                </v-avatar>
                Presentation
              </v-chip>
              <v-container fluid class="px-0 mx-0">
                <span v-for="(itemp, indexp) in speakers" :key="indexp">
                  <v-chip pill class="mt-2 mr-2">
                    <v-avatar start>
                      <img :src="getImgUrl(itemp.image)" style="width: 100%" />
                    </v-avatar>
                    {{ itemp.name }}
                  </v-chip>
                </span>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn aria-label="close" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
const { speakersData } = useJSONData();

let dialog = ref(false);
let speakers = ref([]);

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

console.log(props.data.values, "asdsd");

onMounted(() => {
  speakers.value = speakersData.filter((obj) =>
    props.data.values.speakers.find((x) => x.toString() === obj.id)
  );
});

const getImgUrl = (pic, defaultimage = "avatar.png") => {
  if (pic.length > 0) {
    return "/img/speakers/" + pic;
  } else {
    return "/img/common/" + defaultimage;
  }
};
</script>

<script>
// import speakersJSON from "/public/data/speakers.json";
export default {
  // props: ["data"],
  // data() {
  //   return {
  //     dialog: false,
  //     speakersInfo: speakersJSON,
  //     speakers: [],
  //   };
  // },
  // mounted() {
  //   this.speakers = [];
  //   this.speakers = this.speakersInfo.filter((obj) =>
  //     this.data.speakers.find((x) => x.toString() === obj.id)
  //   );
  // },
  // methods: {
  //   getImgUrl(pic, defaultimage = "avatar.png") {
  //     console.log("getImgUrl", pic);
  //     if (pic.length > 0) {
  //       return "/img/speakers/" + pic;
  //     } else {
  //       return "/img/common/" + defaultimage;
  //     }
  //   },
  // },
};
</script>
    <style scoped>
.image-wrapper {
  object-fit: cover;
  object-position: center;
}
</style>