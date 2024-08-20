<template>
  <v-app style="background-color: white" class="">
    <v-app-bar
      :elevation="0"
      class="mx-auto mt-4 px-3"
      rounded="xl"
      color="#eeeeee"
      style="
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
      "
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>DevFest > City | GDG XYZ</v-app-bar-title>

      <v-btn>asd</v-btn>
      <v-btn>asd</v-btn>
      <v-btn>asd</v-btn>
    </v-app-bar>
    <v-main
      class="pa-0"
      style="max-width: 1400px; margin-left: auto; margin-right: auto"
    >
      <slot></slot>
    </v-main>

    <v-footer
      color="#1C1D1D"
      rounded="xl"
      style="max-width: 1400px; margin-left: auto; margin-right: auto"
    >
      <v-container fluid class="pa-0">
        <v-row>
          <v-col>
            <h3>GDG XYZ</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              doloremque quo, placeat ex maxime impedit. Enim at
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>