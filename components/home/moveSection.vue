<template>
  <v-container fluid class="marquee-container mx-3">
    <div class="marquee-content">
      <div v-for="(i) in 10" :key="i" class="marquee-item">
        <h3>Heading {{ i }}</h3>
        <p>asdasdasd asdasd</p>
        <!-- <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolor blanditiis dolores saepe magnam! Ab harum, impedit repellat
          vitae provident enim. Sit inventore cum ab adipisci totam? Officiis,
          necessitatibus nisi.
        </p> -->
      </div>
    </div>
  </v-container>
</template>
  
  <script setup>
// const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
</script>
  
<style scoped>
.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%; /* Full width of the container */
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 12px;
}

.marquee-content {
  display: inline-block;
  animation: marquee 20s linear infinite;
}

.marquee-item {
  display: inline-block;
  margin-right: 10px; /* Space between items */
  color: #333;
  background: white;
  /* padding: 2%; */
  border-radius: 12px;
}

/* Marquee Animation */
@keyframes marquee {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
  