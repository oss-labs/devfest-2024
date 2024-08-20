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
      <!-- <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template> -->
      <v-app-bar-title
        ><NuxtLink to="/" style="text-decoration: none; color: black">
          DevFest City
        </NuxtLink></v-app-bar-title
      >

      <!-- <v-app-bar-title>
        <NuxtLink to="/">DevFest City</NuxtLink>
      </v-app-bar-title> -->

      <v-btn rounded size="small" to="/speakers" class="mx-1">Speakers</v-btn>
      <v-btn rounded size="small" to="/agenda" class="mx-1">Agenda</v-btn>
      <v-btn rounded size="small" to="/badge" class="mx-1">Badge</v-btn>
      <v-btn rounded size="small" to="/team" class="mx-1">Team</v-btn>
      <v-btn rounded size="small" to="/about" class="mx-1">About</v-btn>
    </v-app-bar>
    <v-main
      class="pa-0"
      style="max-width: 1400px; margin-left: auto; margin-right: auto"
    >
      <slot></slot>
    </v-main>

    <v-container
      fluid
      class="pa-0"
      style="max-width: 1400px; margin-left: auto; margin-right: auto"
    >
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
  </v-app>
</template>