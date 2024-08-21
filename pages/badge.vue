<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <!-- Mobile -->
      <v-row>
        <v-col md="12" lg="12" class="d-block d-sm-block d-md-none px-0">
          <p class="text-h3 mb-4">Badges</p>
          <p class="my-0 mb-8 h1-subheading google-font">
            Upload an image and generate a personalised badge with the Google IO
            Extended frame. Also share your image using #IOExtended on different
            social platforms.
          </p>
        </v-col>
      </v-row>
      <!-- Mobile -->

      <!-- Desktop -->
      <v-row class="mb-md-15" justify="center" align="center">
        <v-col md="7" class="order-md-1 order-sm-2 order-2 mt-3 px-0 mb-md-13">
          <div class="d-none d-sm-none d-md-block mb-10">
            <h1 class="mb-4">Badges</h1>

            <p class="google-font">
              Upload an image and generate a personalised badge with the Google
              IO Extended frame. Also share your image using #IOExtended on
              different social platforms.
            </p>
          </div>
          <div class="input">
            <label class="google-font mb-3" style="font-size: 110%"
              >Select a Image</label
            >
            <br />

            <v-btn
              class="action_btn mt-4 mb-5"
              size="large"
              @click="uploadImage()"
              rounded
              style="text-transform: capitalize"
            >
              Upload Image
              <v-icon>mdi-tray-arrow-up</v-icon>
            </v-btn>
            <input
              class="profile-input"
              type="file"
              accept="image/*"
              @change="upload"
              hidden
            />
          </div>
          <div class="mt-5">
            <label class="google-font mb-5" style="font-size: 110%"
              >Image Shape</label
            >
            <br />
            <v-btn-toggle
              class="mt-3"
              rounded
              v-model="shapeData"
              color="#eeeeee"
            >
              <v-btn
                value="original"
                class="mx-0 px-5 pb-0"
                @click="changeShape('original')"
                >Orignal</v-btn
              >
              <v-btn
                class="mx-0 pb-0 px-5"
                value="Square"
                @click="changeShape('Square')"
                >Square</v-btn
              >
              <v-btn
                class="mx-0 pb-0 px-5"
                value="circle"
                @click="changeShape('circle')"
                >Circle</v-btn
              >
            </v-btn-toggle>
          </div>
          <p class="mt-8 mb-15 mb-md-0">
            <span
              >*&nbsp; We respect your privacy and are not storing your pictures
              on our servers.</span
            >
          </p>
        </v-col>
        <v-col
          md="5"
          sm="12"
          cols="12"
          class="text-center py-md-10 py-5 order-md-2 order-sm-1 order-1"
          style="background: #eeeeee; border-radius: 18px"
        >
          <canvas style="border-radius: 12px" class=""></canvas>
          <v-btn
            class="pb-0 mb-0 action_download_btn mt-2"
            rounded
            id="download"
            @click="download()"
            ><v-icon left>mdi-arrow-down-bold-circle-outline</v-icon
            >Download</v-btn
          >
        </v-col>
      </v-row>
      <!-- Desktop -->
    </v-container>

  </NuxtLayout>
</template>
<script>
import gdgImage from "/public/img/common/badge.png";
import configData from "/public/data/config.json";

export default {
  name: "BadgeComponent",
  data: () => ({
    downloadbtn: false,
    canvas: null,
    shape: "original",
    image: "",
    shapeData: "original",
    ctx: null,
    banner: null,
  }),
  methods: {
    upload(e) {
      if (e && e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            this.image = img;
            this.draw();
          };
          img.onerror = (error) => {
            console.error("Error loading image", error);
          };
          img.src = event.target.result;
        };
        reader.onerror = (error) => {
          console.error("Error reading file", error);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    uploadImage() {
      document.querySelector("input.profile-input").click();
      this.downloadbtn = true;
      document.getElementById("download").style.visibility = "visible";
    },
    changeShape(type) {
      this.shape = type;
      this.draw();
    },
    draw() {
      if (!this.canvas || !this.ctx) {
        return;
      }

      this.canvas.width = 2500;
      this.canvas.height = 2500;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (this.image) {
        switch (this.shape) {
          case "original": {
            this.canvas.width = this.image.width;
            this.canvas.height = this.image.height;
            this.ctx.drawImage(this.image, 0, 0);
            break;
          }
          default: {
            this.canvas.width = 2500;
            this.canvas.height = 2500;
            const hRatio = this.canvas.width / this.image.width;
            const vRatio = this.canvas.height / this.image.height;
            const ratio = Math.max(hRatio, vRatio);
            const x = (this.canvas.width - this.image.width * ratio) / 2;
            const y = (this.canvas.height - this.image.height * ratio) / 2;

            this.ctx.drawImage(
              this.image,
              0,
              0,
              this.image.width,
              this.image.height,
              x,
              y,
              this.image.width * ratio,
              this.image.height * ratio
            );
            break;
          }
        }
      } else {
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
      const height =
        (this.banner.height / this.banner.width) * this.canvas.width;
      const y = this.canvas.height - height;
      const fontSize = this.canvas.width / 17.2;

      this.ctx.drawImage(
        this.banner,
        0,
        0,
        this.banner.width,
        this.banner.height,
        0,
        y,
        this.canvas.width,
        height
      );
      this.ctx.fillStyle = "#757575";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.font = `${fontSize}px Google Sans, sans-serif`;
      // ctx.fillText(category, canvas.width / 2, fontY)
      if (this.shape === "circle") {
        this.ctx.globalCompositeOperation = "destination-in";
        this.ctx.beginPath();
        this.ctx.arc(
          this.canvas.width / 2,
          this.canvas.height / 2,
          this.canvas.height / 2,
          0,
          Math.PI * 2
        );
        this.ctx.closePath();
        this.ctx.fill();
      }
    },
    download() {
      const a = document.createElement("a");
      const url = this.canvas.toDataURL("image/png;base64");
      a.download = "#IOExtended_badge.png";
      a.href = url;
      a.click();
    },
  },
  mounted() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.image = "";
    this.shape = "original";
    this.downloadbtn = false;
    document.getElementById("download").style.visibility = "hidden";
    this.banner = new Image();
    this.banner.src = gdgImage;
    this.banner.onload = () => {
      this.draw();
    };
    this.banner.onerror = (error) => {};
  },
  setup() {
    definePageMeta({
      layout: false,
    });
    const configDataSet = ref([]);
    configDataSet.value = configData;
    useSeoMeta({
      contentType: "text/html; charset=utf-8",
      title:
        "Badge - " +
        configDataSet.value.eventInfo.name +
        " | " +
        configDataSet.value.communityName,
      description: configDataSet.value.eventInfo.description.short,
      keywords: configDataSet.value.seo.keywords,
      author: "OSS Labs",
      creator: "OSS Labs",
      viewport: "width=device-width, initial-scale=1.0",
      ogTitle:
        "Badge - " +
        configDataSet.value.eventInfo.name +
        " | " +
        configDataSet.value.communityName,
      ogDescription: configDataSet.value.eventInfo.description.short,
      ogImage: `${configDataSet.value.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
      ogUrl: configDataSet.value.seo.hostUrl,
      ogType: "website",
      twitterTitle:
        "Badge - " +
        configDataSet.value.eventInfo.name +
        " | " +
        configDataSet.value.communityName,
      twitterDescription: configDataSet.value.eventInfo.description.short,
      twitterImage: `${configDataSet.value.seo.hostUrl}thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
      twitterCard: "summary_large_image",
    });
  },
};
</script>
<style scoped>
.v-btn-group {
  border: 1px solid #757575;
  border-radius: 18px;
  background: transparent;
}
canvas {
  width: 1500px;
  max-width: 80%;
}
.action_btn {
  background: linear-gradient(90deg, #ffcb32, #34a853 80%);
  color: #000;
  box-shadow: none;
  border: 0px solid black;
}
.action_download_btn {
  background: linear-gradient(90deg, #faab31, #fcc731, #faab31 80%);
  color: #000;
  box-shadow: none;
  border: 1px solid black;
}

@media screen and (max-width: 860px) {
}
</style>