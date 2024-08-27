<template>
  <NuxtLayout name="default">
    <v-container fluid class=" fill-height">
      <v-row justify-center align="center">
        <v-col md="6" sm="7" cols="12">
          <h1>Badge</h1>
          <p class="mt-2">
            Upload an image and generate a personalized badge with the DevFest
            frame.
          </p>

          <p class="mt-8">Select an Image</p>

          <v-btn
            class="mt-4 mb-5"
            size="large"
            color="#FFD427"
            @click="triggerFileUpload"
            rounded
            variant="flat"
            style="border: 1.5px solid #1e1e1e; color: black;text-transform: capitalize"
          >
            Upload Image
            <v-icon>mdi-tray-arrow-up</v-icon>
          </v-btn>
          <input
            ref="fileInput"
            class="profile-input"
            type="file"
            accept="image/*"
            @change="upload"
            hidden
          />

          <div class="mt-5">
            <label class="google-font mb-5" style="font-size: 110%">
              Image Shape
            </label>
            <br />
            <v-btn-toggle
              class="mt-3"
              rounded
              style="border: 1.5px solid #1e1e1e; color: black;text-transform: capitalize"
              v-model="shapeData"
              @click="changeShape(shapeData)"
              color="#eeeeee"
            >
              <v-btn value="original" class="mx-0 px-5 pb-0">Original</v-btn>
              <v-btn value="Square" class="mx-0 pb-0 px-5">Square</v-btn>
              <v-btn value="circle" class="mx-0 pb-0 px-5">Circle</v-btn>
            </v-btn-toggle>
          </div>
          <p class="mt-8 mb-md-0">
            <span>
              *&nbsp; We respect your privacy and are not storing your pictures
              on our servers.
            </span>
          </p>
        </v-col>
        <v-col md="6" sm="5" cols="12" class="px-md-10">
          <div
            style="background: #eeeeee; border-radius: 20px;border: 1.5px solid black;"
            class="text-center pa-5 pa-md-5 py-md-10"
          >
            <canvas
              ref="canvasRef"
              style="width: 100%; border-radius: 12px"
            ></canvas>
            <v-btn
              class="pb-0 mb-0 mt-2"
              rounded
              id="download"
              @click="download"
              v-show="downloadVisible"
            >
              <v-icon left>mdi-arrow-down-bold-circle-outline</v-icon>
              Download
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gdgImage from "../assets/img/badge.png";
const { mainData } = useJSONData();
definePageMeta({
  layout: false,
});

const canvasRef = ref(null);
const fileInput = ref(null);
const shapeData = ref("original");
const downloadVisible = ref(false);
const image = ref(null);
const banner = ref(null);
const ctx = ref(null);

onMounted(() => {
  initializeCanvas();
});

const initializeCanvas = () => {
  canvasRef.value = canvasRef.value || document.createElement("canvas");
  ctx.value = canvasRef.value.getContext("2d");

  banner.value = new Image();
  banner.value.src = gdgImage;
  banner.value.onload = () => {
    draw();
  };
};

const upload = (e) => {
  if (e && e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
      image.value = new Image();
      image.value.onload = draw;
      image.value.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
};

const triggerFileUpload = () => {
  fileInput.value.click();
  downloadVisible.value = true;
};

const draw = () => {
  if (!canvasRef.value || !ctx.value) {
    return;
  }
  canvasRef.value.width = 2500;
  canvasRef.value.height = 2500;

  ctx.value.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  if (image.value) {
    drawImage();
  } else {
    ctx.value.fillStyle = "#fff";
    ctx.value.fillRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  }

  drawBanner();
  applyShape();
};

const drawImage = () => {
  switch (shapeData.value) {
    case "original":
      canvasRef.value.width = image.value.width;
      canvasRef.value.height = image.value.height;
      ctx.value.drawImage(image.value, 0, 0);
      break;
    default:
      canvasRef.value.width = 2500;
      canvasRef.value.height = 2500;
      const hRatio = canvasRef.value.width / image.value.width;
      const vRatio = canvasRef.value.height / image.value.height;
      const ratio = Math.max(hRatio, vRatio);
      const x = (canvasRef.value.width - image.value.width * ratio) / 2;
      const y = (canvasRef.value.height - image.value.height * ratio) / 2;

      ctx.value.drawImage(
        image.value,
        0,
        0,
        image.value.width,
        image.value.height,
        x,
        y,
        image.value.width * ratio,
        image.value.height * ratio
      );
      break;
  }
};

const drawBanner = () => {
  const height =
    (banner.value.height / banner.value.width) * canvasRef.value.width;
  const y = canvasRef.value.height - height;
  ctx.value.drawImage(
    banner.value,
    0,
    0,
    banner.value.width,
    banner.value.height,
    0,
    y,
    canvasRef.value.width,
    height
  );
};

const applyShape = () => {
  if (shapeData.value === "circle") {
    ctx.value.globalCompositeOperation = "destination-in";
    ctx.value.beginPath();
    ctx.value.arc(
      canvasRef.value.width / 2,
      canvasRef.value.height / 2,
      canvasRef.value.height / 2,
      0,
      Math.PI * 2
    );
    ctx.value.closePath();
    ctx.value.fill();
  }
};

const changeShape = (type) => {
  shapeData.value = type;
  draw();
};

const download = () => {
  const a = document.createElement("a");
  const url = canvasRef.value.toDataURL("image/png;base64");
  a.download = "badge.png";
  a.href = url;
  a.click();
};

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title: "Badge - " + mainData.eventInfo.name + " | " + mainData.communityName,
  description: mainData.eventInfo.description.short,
  keywords: mainData.seo.keywords,
  ogLocale:'en_US',
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle:
    "Badge - " + mainData.eventInfo.name + " | " + mainData.communityName,
  ogDescription: mainData.eventInfo.description.short,
  ogImage: `${mainData.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  ogUrl: mainData.seo.hostUrl,
  ogType: "website",
  twitterTitle:
    "Badge - " + mainData.eventInfo.name + " | " + mainData.communityName,
  twitterDescription: mainData.eventInfo.description.short,
  twitterImage: `${mainData.seo.hostUrl}thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
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
@media screen and (max-width: 860px) {
}
</style>
