<template>
  <v-container fluid class="mx-3">
    <v-row
      justify="center"
      align="center"
      class="Stats-block pa-0"
      style="
        background-color: #f3f3f3;
        border-radius: 20px;
        border: 1.5px solid black;
      "
    >
      <v-col md="2" sm="2" class="pa-0">
        <div class="element">
          <v-img class="element-img1" src="/assets/img/element1.svg"></v-img>
          <v-img class="element-img2" src="/assets/img/element2.svg"></v-img>
          <v-img class="element-img3" src="/assets/img/element3.svg"></v-img>
        </div>
        <!-- <v-img src="/assets/img/element.svg "></v-img> -->
      </v-col>
      <v-col md="10" sm="10">
        <v-container fluid>
          <v-row>
            <v-col
              md="3"
              sm="3"
              class="text-center m-1 Stats-div"
              :style="{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: 'center',
                height: '200px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }"
              v-for="(item, index) in mainData.eventInfo.stats"
              :key="index"
            >
              <h1 class="responsive-title">{{ item.value }}</h1>
              <p
                :style="{
                  position: 'absolute',
                  bottom: '7px',
                  left: '42px',
                  fontSize:
                    screenWidth > 600
                      ? '40px'
                      : '20px' /* Responsive font size */,
                }"
              >
                {{ item.name }}
              </p>
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

<style scoped>
/* /////////////For the status Section*/
.Stats-block {
  display: flex;
  flex-direction: row;
}
@media (max-width: 1024px) {
  .Stats-block {
    flex-direction: column-reverse;
  }
}

/* /////////////For h1 tag font size */

.responsive-title {
  font-size: 300%;
}
@media (max-width: 1024px) {
  .responsive-title {
    font-size: 250%;
  }
}

/* /////////////For status divs - Speakers/Participants/Sessions/Workshops*/

@media (max-width: 1024px) {
  .Stats-div {
    flex: 0 0 30%;
    max-width: 98%;
    margin: 1%;
  }
}

@media (max-width: 850px) {
  .Stats-div {
    flex: 0 0 48%;
    max-width: 98%;
    margin: 1%;
  }
}

@media (max-width: 480px) {
  .Stats-div {
    flex: 0 0 95%;
    max-width: 95%;
    margin: 1%;
  }
}

/* ///////////// Different images for viewports */

.element-img1 {
  display: block;
}
.element-img2 {
  display: none;
}
.element-img3 {
  display: none;
}
@media screen and (max-width: 1024px) {
  .element-img1 {
    display: none;
  }
  .element-img2 {
    display: none;
  }
  .element-img3 {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  .element-img1 {
    display: none;
  }
  .element-img2 {
    display: none;
  }
  .element-img3 {
    display: block;
  }
}
</style>
